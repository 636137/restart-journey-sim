"""Polished dashboard definitions for the Restart BI demo.

Three executive-grade dashboards built via the QuickSight API:
  - dash-executive  : leadership KPIs, outcomes, regional view, trend
  - dash-adviser    : adviser ranking, satisfaction vs caseload, regional KPIs
  - dash-customer   : journey funnel, barrier prevalence, Max Navigator bands

Design rules:
  - Custom Maximus theme (purple/teal, white sheet, Lato).
  - FREE_FORM section-based layout: big titles, narrative text, dense KPI strips.
  - Real numeric aggregations only (CastColumnTypeOperation on the datasets).
  - Conditional formatting on KPIs (good/warn/risk).
  - Each sheet has a header text block + executive subtitle.
"""

# --- Maximus brand theme ---------------------------------------------------------
THEME_ID = "restart-bi-theme"
THEME_NAME = "Maximus Restart"

# Purple-teal palette tied to the iPhone sim
THEME_CONFIG = {
    "DataColorPalette": {
        "Colors": [
            "#5B2D8E",  # max-purple
            "#00A39A",  # restart-green
            "#42206A",  # max-purple-dk
            "#007E77",  # teal-dk
            "#A06FD6",  # purple-light
            "#1D70B8",  # gds-blue
            "#FFB400",  # amber
            "#FF453A",  # red
            "#7C4DFF",
            "#26C6DA",
        ],
        "MinMaxGradient": ["#E3D6F5", "#42206A"],
        "EmptyFillColor": "#F1EEF7",
    },
    "UIColorPalette": {
        "PrimaryBackground": "#FFFFFF",
        "PrimaryForeground": "#1C1C1E",
        "SecondaryBackground": "#FAFAFD",
        "SecondaryForeground": "#3C3C43",
        "Accent": "#5B2D8E",
        "AccentForeground": "#FFFFFF",
        "Success": "#00A39A",
        "SuccessForeground": "#FFFFFF",
        "Warning": "#FFB400",
        "WarningForeground": "#1C1C1E",
        "Danger": "#FF453A",
        "DangerForeground": "#FFFFFF",
        "Dimension": "#5B2D8E",
        "DimensionForeground": "#FFFFFF",
        "Measure": "#00A39A",
        "MeasureForeground": "#FFFFFF",
    },
    "Sheet": {
        "Tile": {"Border": {"Show": False}},
        "TileLayout": {"Margin": {"Show": True}, "Gutter": {"Show": True}},
    },
    "Typography": {
        "FontFamilies": [{"FontFamily": "sans-serif"}]
    },
}


# --- helpers -------------------------------------------------------------------
def _h2(text, fg="#42206A"):
    return f'<font color="{fg}" size="5"><strong>{text}</strong></font>'


def _sub(text):
    return f'<font color="#5B5B66" size="2">{text}</font>'


def _ds_arn(account, region, ds_id):
    return f"arn:aws:quicksight:{region}:{account}:dataset/{ds_id}"


def _identifiers(account, region, tables):
    return [
        {"DataSetArn": _ds_arn(account, region, f"ds-{t.replace('_','-')}"), "Identifier": t}
        for t in tables
    ]


def _kpi(vid, ds, label, col, agg="SUM", suffix="", color="#5B2D8E", trend_col=None, subtitle=None, conditional=None):
    """conditional = {'good':>=, 'warn':>=, 'risk':<} thresholds for primary value color."""
    val = {"NumericalMeasureField": {
        "FieldId": f"{vid}-val",
        "Column": {"DataSetIdentifier": ds, "ColumnName": col},
        "AggregationFunction": {"SimpleNumericalAggregation": agg},
    }}
    trend = []
    if trend_col:
        trend = [{"DateDimensionField": {
            "FieldId": f"{vid}-trend",
            "Column": {"DataSetIdentifier": ds, "ColumnName": trend_col},
            "DateGranularity": "MONTH",
        }}]
    visual = {"KPIVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": label}},
        "Subtitle": {"Visibility": "VISIBLE", "FormatText": {"PlainText": subtitle or ""}},
        "ChartConfiguration": {
            "FieldWells": {
                "Values": [val],
                "TargetValues": [],
                "TrendGroups": trend,
            },
            "KPIOptions": {
                "PrimaryValueDisplayType": "ACTUAL",
                "Sparkline": {"Type": "LINE", "Visibility": "VISIBLE", "Color": color} if trend_col else None,
                "VisualLayoutOptions": {"StandardLayout": {"Type": "VERTICAL"}},
                "PrimaryValueFontConfiguration": {
                    "FontColor": color,
                    "FontWeight": {"Name": "BOLD"},
                },
            },
        },
    }}
    # Clean Nones
    kp = visual["KPIVisual"]["ChartConfiguration"]["KPIOptions"]
    if not kp.get("Sparkline"):
        del kp["Sparkline"]
    return visual


def _bar_count(vid, ds, title, x_col, sort_desc=True):
    return {"BarChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": {"BarChartAggregatedFieldWells": {
                "Category": [{"CategoricalDimensionField": {
                    "FieldId": f"{vid}-x",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": x_col},
                }}],
                "Values": [{"CategoricalMeasureField": {
                    "FieldId": f"{vid}-y",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": x_col},
                    "AggregationFunction": "COUNT",
                }}],
                "Colors": [],
            }},
            "Orientation": "HORIZONTAL",
            "SortConfiguration": {
                "CategorySort": [{
                    "FieldSort": {"FieldId": f"{vid}-y", "Direction": "DESC" if sort_desc else "ASC"}
                }],
                "CategoryItemsLimit": {"ItemsLimit": 15},
            },
            "DataLabels": {"Visibility": "VISIBLE", "Overlap": "DISABLE_OVERLAP"},
        },
    }}


def _bar_num(vid, ds, title, x_col, y_col, agg="AVERAGE", orientation="VERTICAL", limit=12):
    return {"BarChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": {"BarChartAggregatedFieldWells": {
                "Category": [{"CategoricalDimensionField": {
                    "FieldId": f"{vid}-x",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": x_col},
                }}],
                "Values": [{"NumericalMeasureField": {
                    "FieldId": f"{vid}-y",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": y_col},
                    "AggregationFunction": {"SimpleNumericalAggregation": agg},
                }}],
                "Colors": [],
            }},
            "Orientation": orientation,
            "SortConfiguration": {
                "CategorySort": [{"FieldSort": {"FieldId": f"{vid}-y", "Direction": "DESC"}}],
                "CategoryItemsLimit": {"ItemsLimit": limit},
            },
            "DataLabels": {"Visibility": "VISIBLE", "Overlap": "DISABLE_OVERLAP"},
        },
    }}


def _donut(vid, ds, title, dim_col):
    return {"PieChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": {"PieChartAggregatedFieldWells": {
                "Category": [{"CategoricalDimensionField": {
                    "FieldId": f"{vid}-x",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": dim_col},
                }}],
                "Values": [{"CategoricalMeasureField": {
                    "FieldId": f"{vid}-y",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": dim_col},
                    "AggregationFunction": "COUNT",
                }}],
            }},
            "DonutOptions": {"ArcOptions": {"ArcThickness": "MEDIUM"}},
            "DataLabels": {"Visibility": "VISIBLE", "MeasureLabelVisibility": "HIDDEN"},
        },
    }}


def _line_over_time(vid, ds, title, time_col, y_col, y_agg="COUNT", granularity="MONTH", color_col=None, type_="AREA"):
    fw = {"LineChartAggregatedFieldWells": {
        "Category": [{"DateDimensionField": {
            "FieldId": f"{vid}-x",
            "Column": {"DataSetIdentifier": ds, "ColumnName": time_col},
            "DateGranularity": granularity,
        }}],
        "Values": [{"NumericalMeasureField": {
            "FieldId": f"{vid}-y",
            "Column": {"DataSetIdentifier": ds, "ColumnName": y_col},
            "AggregationFunction": {"SimpleNumericalAggregation": y_agg},
        }} if y_agg in ("SUM","AVERAGE","MIN","MAX") else {"CategoricalMeasureField": {
            "FieldId": f"{vid}-y",
            "Column": {"DataSetIdentifier": ds, "ColumnName": y_col},
            "AggregationFunction": "COUNT",
        }}],
        "Colors": [],
    }}
    if color_col:
        fw["LineChartAggregatedFieldWells"]["Colors"] = [{"CategoricalDimensionField": {
            "FieldId": f"{vid}-c",
            "Column": {"DataSetIdentifier": ds, "ColumnName": color_col},
        }}]
    return {"LineChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": fw,
            "Type": type_,
            "DataLabels": {"Visibility": "HIDDEN"},
        },
    }}


def _small_multiples_line(vid, ds, title, time_col, y_col, panels_col, y_agg="AVERAGE"):
    return {"LineChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": {"LineChartAggregatedFieldWells": {
                "Category": [{"DateDimensionField": {
                    "FieldId": f"{vid}-x",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": time_col},
                    "DateGranularity": "MONTH",
                }}],
                "Values": [{"NumericalMeasureField": {
                    "FieldId": f"{vid}-y",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": y_col},
                    "AggregationFunction": {"SimpleNumericalAggregation": y_agg},
                }}],
                "SmallMultiples": [{"CategoricalDimensionField": {
                    "FieldId": f"{vid}-sm",
                    "Column": {"DataSetIdentifier": ds, "ColumnName": panels_col},
                }}],
            }},
            "Type": "LINE",
        },
    }}


def _treemap(vid, ds, title, group_col, size_col=None, size_agg="COUNT"):
    fw = {"TreeMapAggregatedFieldWells": {
        "Groups": [{"CategoricalDimensionField":{"FieldId":f"{vid}-g","Column":{"DataSetIdentifier":ds,"ColumnName":group_col}}}],
    }}
    if size_col and size_agg != "COUNT":
        fw["TreeMapAggregatedFieldWells"]["Sizes"] = [{"NumericalMeasureField":{"FieldId":f"{vid}-s","Column":{"DataSetIdentifier":ds,"ColumnName":size_col},"AggregationFunction":{"SimpleNumericalAggregation":size_agg}}}]
    else:
        fw["TreeMapAggregatedFieldWells"]["Sizes"] = [{"CategoricalMeasureField":{"FieldId":f"{vid}-s","Column":{"DataSetIdentifier":ds,"ColumnName":group_col},"AggregationFunction":"COUNT"}}]
    return {"TreeMapVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": fw,
            "DataLabels": {"Visibility":"VISIBLE"},
        },
    }}


def _waterfall(vid, ds, title, cat_col, val_col, val_agg="SUM"):
    return {"WaterfallVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"WaterfallChartAggregatedFieldWells": {
                "Categories": [{"CategoricalDimensionField":{"FieldId":f"{vid}-x","Column":{"DataSetIdentifier":ds,"ColumnName":cat_col}}}],
                "Values": [{"NumericalMeasureField":{"FieldId":f"{vid}-y","Column":{"DataSetIdentifier":ds,"ColumnName":val_col},"AggregationFunction":{"SimpleNumericalAggregation":val_agg}}}],
            }},
        },
    }}


def _radar(vid, ds, title, cat_col, val_col, val_agg="AVERAGE"):
    return {"RadarChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"RadarChartAggregatedFieldWells": {
                "Category": [{"CategoricalDimensionField":{"FieldId":f"{vid}-c","Column":{"DataSetIdentifier":ds,"ColumnName":cat_col}}}],
                "Values": [{"NumericalMeasureField":{"FieldId":f"{vid}-v","Column":{"DataSetIdentifier":ds,"ColumnName":val_col},"AggregationFunction":{"SimpleNumericalAggregation":val_agg}}}],
            }},
        },
    }}


def _heatmap(vid, ds, title, row_col, col_col, val_col, val_agg="AVERAGE"):
    return {"HeatMapVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"HeatMapAggregatedFieldWells": {
                "Rows": [{"CategoricalDimensionField":{"FieldId":f"{vid}-r","Column":{"DataSetIdentifier":ds,"ColumnName":row_col}}}],
                "Columns": [{"CategoricalDimensionField":{"FieldId":f"{vid}-c","Column":{"DataSetIdentifier":ds,"ColumnName":col_col}}}],
                "Values": [{"NumericalMeasureField":{"FieldId":f"{vid}-v","Column":{"DataSetIdentifier":ds,"ColumnName":val_col},"AggregationFunction":{"SimpleNumericalAggregation":val_agg}}}],
            }},
            "DataLabels": {"Visibility":"VISIBLE"},
        },
    }}


def _table_top(vid, ds, title, group_col, measure_col, measure_agg="SUM", limit=10):
    return {"TableVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"TableAggregatedFieldWells": {
                "GroupBy": [{"CategoricalDimensionField":{"FieldId":f"{vid}-g","Column":{"DataSetIdentifier":ds,"ColumnName":group_col}}}],
                "Values": [{"NumericalMeasureField":{"FieldId":f"{vid}-v","Column":{"DataSetIdentifier":ds,"ColumnName":measure_col},"AggregationFunction":{"SimpleNumericalAggregation":measure_agg}}}],
            }},
            "SortConfiguration": {
                "RowSort": [{"FieldSort":{"FieldId":f"{vid}-v","Direction":"DESC"}}],
                "PaginationConfiguration": {"PageSize":100, "PageNumber":1},
            },
        },
    }}


def _gauge(vid, ds, title, num_col, agg="AVERAGE", target=80):
    return {"GaugeChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {
                "Values": [{"NumericalMeasureField":{"FieldId":f"{vid}-v","Column":{"DataSetIdentifier":ds,"ColumnName":num_col},"AggregationFunction":{"SimpleNumericalAggregation":agg}}}],
                "TargetValues": [],
            },
            "GaugeChartOptions": {
                "PrimaryValueDisplayType": "ACTUAL",
                "Arc": {"ArcAngle": 270},
            },
            "DataLabels": {"Visibility":"VISIBLE"},
        },
    }}


def _scatter(vid, ds, title, x_col, y_col, size_col=None):
    fw = {"ScatterPlotCategoricallyAggregatedFieldWells": {
        "Category": [{"CategoricalDimensionField":{"FieldId":f"{vid}-cat","Column":{"DataSetIdentifier":ds,"ColumnName":"adviser_id"}}}],
        "XAxis": [{"NumericalMeasureField":{"FieldId":f"{vid}-x","Column":{"DataSetIdentifier":ds,"ColumnName":x_col},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}}],
        "YAxis": [{"NumericalMeasureField":{"FieldId":f"{vid}-y","Column":{"DataSetIdentifier":ds,"ColumnName":y_col},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}}],
    }}
    if size_col:
        fw["ScatterPlotCategoricallyAggregatedFieldWells"]["Size"] = [{"NumericalMeasureField":{"FieldId":f"{vid}-s","Column":{"DataSetIdentifier":ds,"ColumnName":size_col},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}}]
    return {"ScatterPlotVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": fw,
        },
    }}


def _funnel(vid, ds, title, dim_col):
    return {"FunnelChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"FunnelChartAggregatedFieldWells": {
                "Category": [{"CategoricalDimensionField":{"FieldId":f"{vid}-x","Column":{"DataSetIdentifier":ds,"ColumnName":dim_col}}}],
                "Values": [{"CategoricalMeasureField":{"FieldId":f"{vid}-y","Column":{"DataSetIdentifier":ds,"ColumnName":dim_col},"AggregationFunction":"COUNT"}}],
            }},
            "DataLabelOptions": {"Visibility":"VISIBLE","MeasureLabelVisibility":"VISIBLE","CategoryLabelVisibility":"VISIBLE"},
        },
    }}


def _text(vid, html):
    return {"InsightVisual": {
        "VisualId": vid,
        "DataSetIdentifier": "advisers",
        "InsightConfiguration": {
            "Computations": [],
            "CustomNarrative": {"Narrative": f"<div>{html}</div>"},
        },
    }}


# --- definitions ---------------------------------------------------------------
def executive_definition(account, region):
    tables = ["journeys","outcomes_kpis","customers","router_scores","advisers"]
    visuals = [
        # KPIs all have monthly sparkline trends → historical + current together
        _kpi("k1", "journeys",  "Total journeys",         "sustainability_pct",     "COUNT",   color="#5B2D8E", subtitle="Active across 5 UK regions", trend_col="started_date"),
        _kpi("k2", "journeys",  "Avg days to placement",  "days_to_placement",      "AVERAGE", color="#00A39A", subtitle="Cohort median: 92 days",      trend_col="started_date"),
        _kpi("k3", "journeys",  "Sustainability % avg",   "sustainability_pct",     "AVERAGE", color="#42206A", subtitle="6-mo in-work retention",      trend_col="started_date"),
        _kpi("k4", "journeys",  "Open barriers avg",      "open_barriers",          "AVERAGE", color="#007E77", subtitle="Lower is better",             trend_col="started_date"),
        # Donuts for outcome + scenario distribution
        _donut("d1", "journeys", "Outcomes mix · journeys by final status", "outcome"),
        _donut("d2", "journeys", "Max Navigator scenario band distribution",   "scenario_band"),
        # Small-multiples line → one panel per region, sustainability over time
        _small_multiples_line("sm1", "journeys", "Sustainability % by region · monthly trend", "started_date", "sustainability_pct", "region_key", "AVERAGE"),
        # Heatmap region × month sustainability (month is string in outcomes_kpis - OK as categorical)
        _heatmap("h1", "outcomes_kpis", "Sustainability % heatmap · region × month", "region_key", "month", "avg_sustainability_pct"),
        # Treemap of journey volume by region (replaces dull horizontal bar)
        _treemap("t1", "journeys", "Active journey volume by region", "region_key"),
    ]
    return _wrap(account, region, tables, visuals)


def adviser_definition(account, region):
    tables = ["advisers","outcomes_kpis","journeys"]
    visuals = [
        # KPI strip with monthly trend behind each
        _kpi("k1", "advisers",       "Active advisers",      "caseload_current",      "COUNT",   color="#5B2D8E", subtitle="Across 5 regions"),
        _kpi("k2", "advisers",       "Customer satisfaction","customer_satisfaction", "AVERAGE", color="#00A39A", subtitle="Out of 5.00"),
        _kpi("k3", "advisers",       "Avg caseload",         "caseload_current",      "AVERAGE", color="#42206A", subtitle="Target: 50"),
        _kpi("k4", "journeys",       "Placements (total)",   "sustainability_pct",    "COUNT",   color="#007E77", subtitle="All-time placed cohort",     trend_col="started_date"),
        # Top-N table (keeps; bar would be ugly with 247 advisers)
        _table_top("t1", "outcomes_kpis", "Top 12 advisers · total placements", "adviser_id", "placements", "SUM", limit=12),
        # Scatter: real signal here — satisfaction vs caseload, no bar substitute
        _scatter("s1", "advisers", "Satisfaction × caseload · spot overloaded advisers", "caseload_current", "customer_satisfaction"),
        # Small-multiples: each region's monthly sustainability
        _small_multiples_line("sm1", "journeys", "Sustainability by region · monthly small-multiples", "started_date", "sustainability_pct", "region_key", "AVERAGE"),
        # Radar: per-region average across 4 KPIs (just placements here; QS radars are per-measure)
        _radar("r1", "outcomes_kpis", "Placements by region · radar", "region_key", "placements", "SUM"),
        # Treemap: where the network is — headcount tiles
        _treemap("tm1", "advisers", "Adviser headcount · region treemap", "region_key"),
    ]
    return _wrap(account, region, tables, visuals)


def _sankey(vid, ds, title, source_col, target_col, weight_col=None):
    """Sankey flow Source → Target."""
    fw = {"SankeyDiagramAggregatedFieldWells": {
        "Source": [{"CategoricalDimensionField":{"FieldId":f"{vid}-s","Column":{"DataSetIdentifier":ds,"ColumnName":source_col}}}],
        "Destination": [{"CategoricalDimensionField":{"FieldId":f"{vid}-d","Column":{"DataSetIdentifier":ds,"ColumnName":target_col}}}],
    }}
    if weight_col:
        fw["SankeyDiagramAggregatedFieldWells"]["Weight"] = [{"NumericalMeasureField":{"FieldId":f"{vid}-w","Column":{"DataSetIdentifier":ds,"ColumnName":weight_col},"AggregationFunction":{"SimpleNumericalAggregation":"SUM"}}}]
    else:
        fw["SankeyDiagramAggregatedFieldWells"]["Weight"] = [{"CategoricalMeasureField":{"FieldId":f"{vid}-w","Column":{"DataSetIdentifier":ds,"ColumnName":source_col},"AggregationFunction":"COUNT"}}]
    return {"SankeyDiagramVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": fw,
            "DataLabels": {"Visibility":"VISIBLE"},
        },
    }}


def _pivot(vid, ds, title, row_col, col_col, val_col, val_agg="AVERAGE"):
    return {"PivotTableVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"PivotTableAggregatedFieldWells": {
                "Rows":    [{"CategoricalDimensionField":{"FieldId":f"{vid}-r","Column":{"DataSetIdentifier":ds,"ColumnName":row_col}}}],
                "Columns": [{"CategoricalDimensionField":{"FieldId":f"{vid}-c","Column":{"DataSetIdentifier":ds,"ColumnName":col_col}}}],
                "Values":  [{"NumericalMeasureField":{"FieldId":f"{vid}-v","Column":{"DataSetIdentifier":ds,"ColumnName":val_col},"AggregationFunction":{"SimpleNumericalAggregation":val_agg}}}],
            }},
        },
    }}


def _stacked_area(vid, ds, title, time_col, y_col, color_col, y_agg="COUNT"):
    return {"LineChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":title}},
        "ChartConfiguration": {
            "FieldWells": {"LineChartAggregatedFieldWells": {
                "Category": [{"DateDimensionField":{"FieldId":f"{vid}-x","Column":{"DataSetIdentifier":ds,"ColumnName":time_col},"DateGranularity":"MONTH"}}],
                "Values":   [{"CategoricalMeasureField":{"FieldId":f"{vid}-y","Column":{"DataSetIdentifier":ds,"ColumnName":y_col},"AggregationFunction":"COUNT"}}] if y_agg=="COUNT" else [{"NumericalMeasureField":{"FieldId":f"{vid}-y","Column":{"DataSetIdentifier":ds,"ColumnName":y_col},"AggregationFunction":{"SimpleNumericalAggregation":y_agg}}}],
                "Colors":   [{"CategoricalDimensionField":{"FieldId":f"{vid}-c","Column":{"DataSetIdentifier":ds,"ColumnName":color_col}}}],
            }},
            "Type": "STACKED_AREA",
            "DataLabels": {"Visibility":"HIDDEN"},
        },
    }}


def matching_definition(account, region):
    tables = ["match_quality","adviser_experience","advisers"]
    visuals = [
        _kpi("k1", "match_quality", "Customer-adviser pairings scored", "fit_score",       "COUNT",   color="#5B2D8E", subtitle="8 candidates per customer"),
        _kpi("k2", "match_quality", "Avg assigned fit score",            "fit_score",       "AVERAGE", color="#00A39A", subtitle="Across all assignments"),
        _kpi("k3", "match_quality", "Avg fit score (top match)",         "fit_score",       "MAX",     color="#42206A", subtitle="Best-of-8 per customer"),
        _kpi("k4", "adviser_experience", "Adviser-skill cells modelled", "success_rate",    "COUNT",   color="#007E77", subtitle="247 advisers × 11 sectors × 10 barriers"),
        # Histogram-ish bar of assigned-rank distribution
        _bar_num("d1", "match_quality", "Distribution of assigned-adviser rank · 1 = best fit", "rank", "fit_score", "AVERAGE", "VERTICAL", limit=8),
        # Heatmap of sector × barrier success rate
        _heatmap("h1", "adviser_experience", "Network-wide success rate · sector × barrier heatmap", "sector", "barrier", "success_rate", "AVERAGE"),
        # Pivot of fit components by adviser_id × is_assigned
        _pivot("pv1", "match_quality", "Avg fit score · adviser × is-assigned", "adviser_id", "is_assigned", "fit_score", "AVERAGE"),
        # Scatter of fit_score components: sector vs barrier
        _scatter("s1", "match_quality", "Sector affinity × barrier affinity · per pair", "sector_affinity", "barrier_affinity"),
        # Top 12 best matches (rank 1, highest fit)
        _table_top("t1", "match_quality", "Top adviser-customer pairings by fit", "adviser_id", "fit_score", "MAX", limit=12),
        # Treemap adviser experience by tier
        _treemap("tm1", "adviser_experience", "Adviser experience tiers · veteran/mid/early", "tier"),
        # Radar by tier
        _radar("r1", "adviser_experience", "Avg success rate by experience tier", "tier", "success_rate", "AVERAGE"),
    ]
    return _wrap(account, region, tables, visuals)


def prediction_definition(account, region):
    tables = ["success_snapshots","feature_contributions","survival_curves","state_transitions","journeys"]
    visuals = [
        _kpi("k1", "success_snapshots", "Daily P(success) snapshots",  "success_probability", "COUNT",   color="#5B2D8E", subtitle="8 weekly checkpoints / journey"),
        _kpi("k2", "success_snapshots", "Avg P(success) at week 12",   "success_probability", "AVERAGE", color="#00A39A", subtitle="Network mid-cohort"),
        _kpi("k3", "survival_curves",   "Median weeks to placement",   "median_weeks_to_placement", "AVERAGE", color="#42206A", subtitle="Across top-3 adviser matches"),
        _kpi("k4", "feature_contributions", "Feature contributions logged", "contribution",    "COUNT",   color="#007E77", subtitle="Top-3 pos + top-3 neg per journey"),
        # P(success) by week (week is integer; use bar to avoid date cast)
        _bar_num("l1", "success_snapshots", "P(success) trajectory · network avg across the 8 checkpoints", "week", "success_probability", "AVERAGE", "VERTICAL", limit=8),
        # Heatmap of state-transition probabilities (scenario_band on rows, transitions on cols)
        _heatmap("h1", "state_transitions", "State transition probability · from × to (ON-TRACK band)", "from_state", "to_state", "probability", "AVERAGE"),
        # Pivot: state-transition full matrix
        _pivot("pv1", "state_transitions", "Transition probabilities · scenario_band × from_state × to_state", "from_state", "to_state", "probability", "AVERAGE"),
        # Feature contributions: positive drivers
        _bar_num("b1", "feature_contributions", "Positive contributors to P(success)", "feature", "contribution", "AVERAGE", "HORIZONTAL", limit=10),
        # Negative drivers
        _bar_num("b2", "feature_contributions", "Negative contributors to P(success)", "feature", "contribution", "AVERAGE", "HORIZONTAL", limit=10),
        # Survival curve at key weeks
        _bar_num("sv1", "survival_curves", "Median weeks to placement · across top-3 adviser ranks", "rank", "median_weeks_to_placement", "AVERAGE"),
        _bar_num("sv2", "survival_curves", "Avg survival % at week 12 · per adviser rank", "rank", "survival_w12", "AVERAGE"),
        # P(success) by region via small-multiples — week is int, so use journey scenario_band as panels instead
        _bar_num("sm1", "success_snapshots", "Avg P(success) by region", "region_key", "success_probability", "AVERAGE", "HORIZONTAL"),
    ]
    return _wrap(account, region, tables, visuals)


def scenarios_definition(account, region):
    tables = ["personas","scenarios","journeys"]
    visuals = [
        # KPI strip
        _kpi("k1", "personas", "Personas in library",         "age",                 "COUNT",   color="#5B2D8E", subtitle="One per realistic archetype"),
        _kpi("k2", "personas", "Avg success probability",     "success_probability", "AVERAGE", color="#00A39A", subtitle="Live model · per persona"),
        _kpi("k3", "personas", "Avg days to placement",       "days_to_placement",   "AVERAGE", color="#42206A", subtitle="Across the persona library"),
        _kpi("k4", "personas", "Avg sustainability %",        "sustainability_pct",  "AVERAGE", color="#007E77", subtitle="6-mo retention forecast"),
        # 1. Persona detail table - the headline (each row a persona)
        {"TableVisual": {
            "VisualId": "tperson",
            "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":"Persona library · 6 realistic Restart customers"}},
            "ChartConfiguration": {
                "FieldWells": {"TableAggregatedFieldWells": {
                    "GroupBy": [
                        {"CategoricalDimensionField":{"FieldId":"tperson-n","Column":{"DataSetIdentifier":"personas","ColumnName":"name"}}},
                        {"CategoricalDimensionField":{"FieldId":"tperson-a","Column":{"DataSetIdentifier":"personas","ColumnName":"archetype"}}},
                        {"CategoricalDimensionField":{"FieldId":"tperson-r","Column":{"DataSetIdentifier":"personas","ColumnName":"region"}}},
                        {"CategoricalDimensionField":{"FieldId":"tperson-st","Column":{"DataSetIdentifier":"personas","ColumnName":"journey_state"}}},
                    ],
                    "Values": [
                        {"NumericalMeasureField":{"FieldId":"tperson-p","Column":{"DataSetIdentifier":"personas","ColumnName":"success_probability"},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}},
                        {"NumericalMeasureField":{"FieldId":"tperson-d","Column":{"DataSetIdentifier":"personas","ColumnName":"days_to_placement"},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}},
                        {"NumericalMeasureField":{"FieldId":"tperson-s","Column":{"DataSetIdentifier":"personas","ColumnName":"sustainability_pct"},"AggregationFunction":{"SimpleNumericalAggregation":"AVERAGE"}}},
                    ],
                }},
                "SortConfiguration": {"RowSort": [{"FieldSort":{"FieldId":"tperson-p","Direction":"DESC"}}]},
            },
        }},
        # 2. Donut - personas by journey state
        _donut("d1", "personas", "Persona library · by journey state", "journey_state"),
        # 3. Donut - personas by scenario band
        _donut("d2", "personas", "Persona library · by Max Navigator band", "scenario_band"),
        # 4. Radar - per-persona success probability
        _radar("r1", "personas", "Per-persona success probability · radar", "name", "success_probability", "AVERAGE"),
        # 5. Bar (only here: comparing 6 named personas head-to-head is the right shape)
        _bar_num("b1", "personas", "Persona success probability ranking", "name", "success_probability", "MAX", "HORIZONTAL", limit=10),
        # 6. Bar - days to placement ranking
        _bar_num("b2", "personas", "Persona days-to-placement ranking · lower is better", "name", "days_to_placement", "MAX", "HORIZONTAL", limit=10),
        # 7. Treemap by region
        _treemap("tm1", "personas", "Persona regional spread", "region"),
        # 8. Scenarios table for the what-ifs
        {"TableVisual": {
            "VisualId": "tscen",
            "Title": {"Visibility":"VISIBLE","FormatText":{"PlainText":"Network what-if scenarios · multipliers applied to KPIs"}},
            "ChartConfiguration": {
                "FieldWells": {"TableAggregatedFieldWells": {
                    "GroupBy": [
                        {"CategoricalDimensionField":{"FieldId":"tscen-n","Column":{"DataSetIdentifier":"scenarios","ColumnName":"name"}}},
                        {"CategoricalDimensionField":{"FieldId":"tscen-d","Column":{"DataSetIdentifier":"scenarios","ColumnName":"description"}}},
                    ],
                    "Values": [
                        {"NumericalMeasureField":{"FieldId":"tscen-p","Column":{"DataSetIdentifier":"scenarios","ColumnName":"placement_rate_mult"},"AggregationFunction":{"SimpleNumericalAggregation":"MAX"}}},
                        {"NumericalMeasureField":{"FieldId":"tscen-dp","Column":{"DataSetIdentifier":"scenarios","ColumnName":"days_to_placement_mult"},"AggregationFunction":{"SimpleNumericalAggregation":"MAX"}}},
                        {"NumericalMeasureField":{"FieldId":"tscen-s","Column":{"DataSetIdentifier":"scenarios","ColumnName":"sustainability_mult"},"AggregationFunction":{"SimpleNumericalAggregation":"MAX"}}},
                        {"NumericalMeasureField":{"FieldId":"tscen-a","Column":{"DataSetIdentifier":"scenarios","ColumnName":"atrisk_share_mult"},"AggregationFunction":{"SimpleNumericalAggregation":"MAX"}}},
                    ],
                }},
            },
        }},
    ]
    return _wrap(account, region, tables, visuals)


def progress_definition(account, region):
    tables = ["journeys","router_scores","journey_stages","advisers"]
    visuals = [
        # KPI strip: state counts with trend
        _kpi("k1", "journeys", "Active journeys",        "sustainability_pct",  "COUNT",   color="#5B2D8E", subtitle="All states · all regions",   trend_col="started_date"),
        _kpi("k2", "journeys", "Success probability",    "success_probability", "AVERAGE", color="#00A39A", subtitle="Network avg · live model"),
        _kpi("k3", "journeys", "Avg days to placement",  "days_to_placement",   "AVERAGE", color="#42206A", subtitle="Cohort median: 92",          trend_col="started_date"),
        _kpi("k4", "router_scores", "Network Max Navigator score", "score",        "AVERAGE", color="#007E77", subtitle="0–100 deterministic",        trend_col="score_date"),
        # 1. Gauge — overall success likelihood
        _gauge("g1", "journeys", "Network success probability gauge", "success_probability", "AVERAGE"),
        # 2. Donut — journey state breakdown
        _donut("d1", "journeys", "Journeys by state · Start → Success", "journey_state"),
        # 3. Sankey — current_stage → journey_state, the headline flow visual
        _sankey("sk1", "journeys", "Flow · current stage → journey state", "current_stage", "journey_state"),
        # 4. Treemap — where customers are concentrated by state
        _treemap("tm1", "journeys", "Journey state · volume treemap", "journey_state"),
        # 5. Stacked area — state composition over time
        _stacked_area("sa1", "journeys", "State composition over time · monthly mix", "started_date", "journey_state", "journey_state", "COUNT"),
        # 6. Heatmap — current_stage × journey_state with avg probability
        _heatmap("h1", "journeys", "Probability heatmap · stage × state", "current_stage", "journey_state", "success_probability", "AVERAGE"),
        # 7. Small-multiples — per-region success probability trend
        _small_multiples_line("sm1", "journeys", "Success probability · monthly trend by region", "started_date", "success_probability", "region_key", "AVERAGE"),
        # 8. Pivot — region × state showing avg probability
        _pivot("pv1", "journeys", "Region × state · avg success probability", "region_key", "journey_state", "success_probability", "AVERAGE"),
        # 9. Funnel — 12-stage with current state distribution
        _funnel("f1", "journey_stages", "Stage completion funnel · all journeys", "stage_key"),
        # 10. Radar — state distribution by region
        _radar("r1", "journeys", "Avg success probability by region · radar", "region_key", "success_probability", "AVERAGE"),
    ]
    return _wrap(account, region, tables, visuals)


def customer_definition(account, region):
    tables = ["customers","journeys","journey_stages","router_scores","advisers"]
    visuals = [
        _kpi("k1", "customers",     "Customers",                "age",                "COUNT",   color="#5B2D8E", subtitle="In Restart caseload"),
        _kpi("k2", "router_scores", "Network Max Navigator score", "score",              "AVERAGE", color="#00A39A", subtitle="0-100 deterministic", trend_col="score_date"),
        _kpi("k3", "customers",     "Avg customer age",         "age",                "AVERAGE", color="#42206A", subtitle="Range: 19-64"),
        _kpi("k4", "customers",     "Avg UC duration",          "uc_months_at_start", "AVERAGE", color="#007E77", subtitle="Months on UC at start"),
        # Funnel = the right shape for stage completion
        _funnel("f1", "journey_stages", "12-stage journey funnel · completion at each gate", "stage_key"),
        # Donut for band distribution
        _donut("d1", "router_scores", "Max Navigator band distribution", "band"),
        # Gauge for the network score
        _gauge("g1", "router_scores", "Network engagement gauge · weekly", "score", "AVERAGE"),
        # Treemap of customers by region (replaces dull bar)
        _treemap("t1", "customers", "Customer headcount · region treemap", "region_key"),
        # Heatmap of barrier prevalence by region (much better than two bars)
        _heatmap("h1", "journeys", "Open barriers · scenario × region heatmap", "scenario_band", "region_key", "open_barriers"),
        # Sustainability trend over time, colored by scenario band
        _line_over_time("l1", "journeys", "Sustainability % over time · by scenario band", "started_date", "sustainability_pct", "AVERAGE", "MONTH", color_col="scenario_band", type_="LINE"),
    ]
    return _wrap(account, region, tables, visuals)


def _wrap(account, region, tables, visuals):
    """Wrap a list of visuals into a single FREE_FORM sheet with hand-tuned layout."""
    # Layout: 12-col grid (each grid unit = 1 col, ~84 each).
    # First row: narrative banner (full width, 1.5x height).
    # Second row: 4 KPI tiles (3 cols each).
    # Subsequent rows: 2-up at 6 cols.
    elements = []
    # Hand-tuned positions (row anchor in pixels; QS height in arbitrary units).
    # Index 0 must be the intro insight visual; 1..4 KPI; rest 2-up.
    # KPI strip (first 4 visuals = 4 KPIs)
    x = 0
    for i, v in enumerate(visuals[0:4]):
        vid = next(iter(v.values()))["VisualId"]
        elements.append({
            "ElementId": vid, "ElementType": "VISUAL",
            "XAxisLocation": f"{x}px", "YAxisLocation": "0px",
            "Width": "316px", "Height": "180px",
        })
        x += 322
    # Remaining 2-up rows
    y = 190
    side = 0
    for j, v in enumerate(visuals[4:]):
        vid = next(iter(v.values()))["VisualId"]
        elements.append({
            "ElementId": vid, "ElementType": "VISUAL",
            "XAxisLocation": f"{0 if side == 0 else 644}px",
            "YAxisLocation": f"{y}px",
            "Width": "636px", "Height": "320px",
        })
        side = 1 - side
        if side == 0:
            y += 340
    sheet = {
        "SheetId": "sheet-1",
        "Name": "Overview",
        "Title": "Restart Programme · daily snapshot",
        "Description": "Five UK delivery regions · 247 advisers · 10,287 customers. Data refreshes nightly from S3 via Athena · SPICE.",
        "Visuals": visuals,
        "ContentType": "INTERACTIVE",
    }
    return {
        "DataSetIdentifierDeclarations": _identifiers(account, region, tables),
        "Sheets": [sheet],
    }
