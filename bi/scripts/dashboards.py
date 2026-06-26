"""Polished dashboard definitions for the Restart BI demo.

Three executive-grade dashboards built via the QuickSight API:
  - dash-executive  : leadership KPIs, outcomes, regional view, trend
  - dash-adviser    : adviser ranking, satisfaction vs caseload, regional KPIs
  - dash-customer   : journey funnel, barrier prevalence, Max Router bands

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


def _kpi(vid, ds, label, col, agg="SUM", suffix="", color="#5B2D8E", trend_col=None):
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


def _line_over_time(vid, ds, title, time_col, y_col, y_agg="COUNT", granularity="MONTH"):
    return {"LineChartVisual": {
        "VisualId": vid,
        "Title": {"Visibility": "VISIBLE", "FormatText": {"PlainText": title}},
        "ChartConfiguration": {
            "FieldWells": {"LineChartAggregatedFieldWells": {
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
            }},
            "Type": "AREA",
            "DataLabels": {"Visibility": "HIDDEN"},
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
        _kpi("k1", "journeys", "Total journeys", "sustainability_pct", "COUNT", color="#5B2D8E"),
        _kpi("k2", "outcomes_kpis", "Avg days to placement", "avg_days_to_placement", "AVERAGE", color="#00A39A"),
        _kpi("k3", "outcomes_kpis", "Placement rate %", "placement_rate_pct", "AVERAGE", color="#42206A"),
        _kpi("k4", "outcomes_kpis", "Avg sustainability %", "avg_sustainability_pct", "AVERAGE", color="#007E77"),
        _donut("d1", "journeys", "Outcomes mix", "outcome"),
        _bar_count("b1", "journeys", "Journeys by region (most active first)", "region_key"),
        _line_over_time("l1", "journeys", "Placements over time", "started_date", "journey_id", "COUNT"),
        _heatmap("h1", "outcomes_kpis", "Avg sustainability % by region × month", "region_key", "month", "avg_sustainability_pct"),
        _donut("d2", "journeys", "Max Router scenario mix", "scenario_band"),
    ]
    return _wrap(account, region, tables, visuals)


def adviser_definition(account, region):
    tables = ["advisers","outcomes_kpis","journeys"]
    visuals = [
        _kpi("k1", "advisers", "Active advisers", "caseload_current", "COUNT", color="#5B2D8E"),
        _kpi("k2", "advisers", "Avg customer satisfaction", "customer_satisfaction", "AVERAGE", color="#00A39A"),
        _kpi("k3", "advisers", "Avg caseload", "caseload_current", "AVERAGE", color="#42206A"),
        _kpi("k4", "advisers", "Avg tenure (yrs)", "years_at_maximus", "AVERAGE", color="#007E77"),
        _table_top("t1", "outcomes_kpis", "Top advisers by placements", "adviser_id", "placements", "SUM", limit=12),
        _bar_num("b1", "outcomes_kpis", "Avg sustainability % by region", "region_key", "avg_sustainability_pct", "AVERAGE", "HORIZONTAL"),
        _bar_num("b2", "outcomes_kpis", "Avg days to placement by region", "region_key", "avg_days_to_placement", "AVERAGE", "HORIZONTAL"),
        _scatter("s1", "advisers", "Adviser satisfaction vs caseload", "caseload_current", "customer_satisfaction"),
        _bar_count("b3", "advisers", "Advisers by region", "region_key"),
    ]
    return _wrap(account, region, tables, visuals)


def customer_definition(account, region):
    tables = ["customers","journeys","journey_stages","router_scores","advisers"]
    visuals = [
        _kpi("k1", "customers", "Customers", "age", "COUNT", color="#5B2D8E"),
        _kpi("k2", "router_scores", "Avg Max Router score", "score", "AVERAGE", color="#00A39A"),
        _kpi("k3", "customers", "Avg age", "age", "AVERAGE", color="#42206A"),
        _kpi("k4", "customers", "Avg UC months at start", "uc_months_at_start", "AVERAGE", color="#007E77"),
        _funnel("f1", "journey_stages", "Journey funnel (12-stage)", "stage_key"),
        _donut("d1", "router_scores", "Max Router scenario bands", "band"),
        _gauge("g1", "router_scores", "Network-wide Max Router score", "score", "AVERAGE"),
        _bar_count("b1", "customers", "Customers by region", "region_key"),
        _bar_num("b2", "journeys", "Avg sustainability % by scenario band", "scenario_band", "sustainability_pct", "AVERAGE"),
        _bar_num("b3", "journeys", "Avg open barriers by scenario band", "scenario_band", "open_barriers", "AVERAGE"),
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
        "Visuals": visuals,
        "ContentType": "INTERACTIVE",
    }
    return {
        "DataSetIdentifierDeclarations": _identifiers(account, region, tables),
        "Sheets": [sheet],
    }
