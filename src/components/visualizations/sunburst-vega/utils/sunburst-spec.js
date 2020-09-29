import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode';

const sunburstSpec = (windowWidth) => {
  let size = windowWidth;
  let tooltip = {}
  const screenMode = checkScreenMode(window.innerWidth)
  if (screenMode === ScreenModeEnum.mobile) {
    size = window.innerWidth - 30;
    if (size > 540) {
      size = 540;
    }
  } else if (screenMode === ScreenModeEnum.tablet) {
    size = 344;
  } else if (screenMode === ScreenModeEnum.desktop) {
    size = 464;
    tooltip = {
      "signal": "datum.depth <=1 ? (datum.depth === 0 ? 'Click to reset' : 'Click to view agency') : (datum.depth == 2 ? 'Click to view subagency' : 'Click to view contractor')"
    };
  } else {
    size = 500;
    tooltip = {
      "signal": "datum.depth <=1 ? (datum.depth === 0 ? 'Click to reset' : 'Click to view agency') : (datum.depth == 2 ? 'Click to view subagency' : 'Click to view contractor')"
    };
  }
  return {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": size,
    "height": size,
    "padding": 5,
    "autosize": "fit",

    "data": [{
      "name": "tree",
      "transform": [{
          "type": "stratify",
          "key": "id",
          "parentKey": "parent"
        },
        {
          "type": "partition",
          "field": "size",
          "sort": {
            "signal": "size"
          },
          "as": ["a0", "r0", "a1", "r1", "depth", "children"]
        },
        {
          "type": "partition",
          "field": "agency",
        },
        {
          "type": "partition",
          "field": "colorHex"
        }

      ]
    }],
    "signals": [{
        "name": "arcClick",
        "value": "datum",
        "on": [{
          "events": "arc:mousedown",
          "update": "datum"
        }]
      },
      {
        "name": "arcHover",
        "value": "datum",
        "on": [{
          "events": "arc:mouseover",
          "update": "datum"
        }]
      },
      {
        "name": "arcUnhover",
        "value": "datum",
        "on": [{
          "events": "arc:mouseout",
          "update": "datum"
        }]
      }
    ],
    "scales": [{
        "name": "xscale",
        "type": "linear",
        "range": [0, {
          "signal": "2 * PI"
        }]
      },
      {
        "name": "yscale",
        "type": "sqrt",
        "range": [0, {
          "signal": "width / 2"
        }]
      }
    ],

    "marks": [{
      "type": "arc",
      "from": {
        "data": "tree"
      },
      "encode": {
        "enter": {
          "x": {
            "signal": "width / 2"
          },
          "y": {
            "signal": "height / 2"
          },
          "fill": {
            "signal": "datum.colorHex"
          },
          "opacity": {
            "signal": "datum.depth > 1 ? (datum.depth === 2 ? .7 : .4) : 1"
          },
          "tooltip": tooltip,
        },
        "update": {
          "startAngle": {
            "scale": "xscale",
            "signal": "max(0, min(2 * PI, datum.a0))"
          },
          "endAngle": {
            "scale": "xscale",
            "signal": "max(0, min(2 * PI, datum.a1))"
          },
          "innerRadius": {
            "scale": "yscale",
            "signal": "max(0,datum.r0)"
          },
          "outerRadius": {
            "scale": "yscale",
            "signal": "max(0, datum.r1)"
          },
          "stroke": {
            "value": "white"
          },
          "strokeWidth": {
            "value": 0.5
          },
          "zindex": {
            "value": 0
          }
        },
      }
    }]
  }
}

export default sunburstSpec