/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/americas-finance-guide/revenue/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/libs/ffg/src/revenue/intro/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/libs/ffg/src/globalSass/colors.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js!./src/libs/ffg/src/globalSass/colors.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports
exports.locals = {
	"colorPrimary": "#0071bc",
	"colorPrimaryDarker": "#205493",
	"colorPrimaryDarkest": "#112e51",
	"colorPrimaryAltDarkest": "#046b99",
	"colorPrimaryAltLight": "#9bdaf1",
	"colorPrimaryAltLightest": "#e1f3f8",
	"colorGrayDark": "#323a45",
	"colorGrayCoolLight": "#dce4ef",
	"revenuePrimary": "#0A2F5A",
	"revenueParentOne": "#0A2F5A",
	"colorSpendingPrimary": "#00796B",
	"colorSpendingTrends": "#004941",
	"colorDeficitPrimary": "#B3532D",
	"colorDeficitSurplus": "#DAA200",
	"colorDebtPrimary": "#4A0072",
	"textColorHeading": "#555555",
	"textColorParagraph": "#666666"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic.js */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly.js */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin.js */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp.js */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.js */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce.js */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.js */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic.js */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumberArray", function() { return _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/index.js */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasisClosed"]; });

/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hsl.js */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["hslLong"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hcl.js */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["hclLong"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["cubehelixLong"]; });

/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./piecewise.js */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  join: _join__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_8__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_9__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_10__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_12__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_13__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_14__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_15__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_16__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_17__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_18__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_19__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_20__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_21__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_22__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_23__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_24__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_25__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_26__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_27__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_28__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_29__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point_js__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point_js__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line_js__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal_js__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc.js */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie.js */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial.js */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index.js */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol.js */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed.js */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen.js */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle.js */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed.js */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen.js */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed.js */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone.js */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural.js */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step.js */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack.js */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand.js */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging.js */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette.js */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle.js */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function() { return _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_descending_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/descending.js */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/insideOut.js */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/reverse.js */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point.js */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/appearance.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var peaks = series.map(peak);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
});

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_appearance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__["SCHEDULED"] && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _active_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["STARTING"] && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index_js__WEBPACK_IMPORTED_MODULE_0__["newId"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformSvg"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).delay;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).duration;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).ease;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");





















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_19__["default"]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateString"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"] : _schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");



var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(subgroup[i], name, id, i, subgroup, Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        string1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["set"])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformCss"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_3__["tweenValue"])(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(_tween_js__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__["get"])(node, id0);
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id1);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenValue", function() { return tweenValue; });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/libs/assets/ffg/data/federal_revenue_gdp.csv":
/*!**********************************************************!*\
  !*** ./src/libs/assets/ffg/data/federal_revenue_gdp.csv ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"year":2019,"category":"federal revenue","amount":3462195610149,"source_url":"https://www.fiscal.treasury.gov/files/reports-statements/mts/mts0919.pdf","source_url_name":"Monthly Treasury Statement"},{"year":2019,"category":"federal spending","amount":4446583636480,"source_url":"https://www.fiscal.treasury.gov/files/reports-statements/mts/mts0919.pdf","source_url_name":"Monthly Treasury Statement"},{"year":2019,"category":"gdp","amount":21340300000000,"source_url":"https://apps.bea.gov/iTable/index_nipa.cfm","source_url_name":"Bureau of Economic Analysis"},{"year":2019,"category":"federal revenue percent of gdp","amount":0.162544394842676,"source_url":"NA","source_url_name":"NA"},{"year":null}]

/***/ }),

/***/ "./src/libs/assets/ffg/data/federal_spending_gdp.csv":
/*!***********************************************************!*\
  !*** ./src/libs/assets/ffg/data/federal_spending_gdp.csv ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{"year":2019,"category":"federal spending","amount":4446583636480,"source_url":"https://www.fiscal.treasury.gov/files/reports-statements/mts/mts0919.pdf","source_url_name":"Monthly Treasury Statement"},{"year":2019,"category":"federal revenue","amount":3462195610149,"source_url":"https://www.fiscal.treasury.gov/files/reports-statements/mts/mts0919.pdf","source_url_name":"Monthly Treasury Statement"},{"year":2019,"category":"gdp","amount":21340300000000,"source_url":"https://apps.bea.gov/iTable/index_nipa.cfm","source_url_name":"Bureau of Economic Analysis"},{"year":2019,"category":"federal spending percent of gdp","amount":0.208759795139906,"source_url":"NA","source_url_name":"NA"},{"year":null}]

/***/ }),

/***/ "./src/libs/ffg/src/globalSass/colors.scss":
/*!*************************************************!*\
  !*** ./src/libs/ffg/src/globalSass/colors.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/dist/cjs.js!./colors.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/libs/ffg/src/globalSass/colors.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/libs/ffg/src/infoBox.js":
/*!*************************************!*\
  !*** ./src/libs/ffg/src/infoBox.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/jackkillilea/Projects/datalab-prototype/src/libs/ffg/src/infoBox.js: Unexpected token (17:17)\n\n\u001b[0m \u001b[90m 15 | \u001b[39m\t\u001b[36mconst\u001b[39m box \u001b[33m=\u001b[39m d3\u001b[33m.\u001b[39mselect(\u001b[36mthis\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m\t\u001b[36mconst\u001b[39m closeButton \u001b[33m=\u001b[39m box\u001b[33m.\u001b[39mappend(\u001b[32m'button'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 | \u001b[39m\t\u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mCloseIcon\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m closeButton\u001b[33m.\u001b[39mnode())\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m\tcloseButton\u001b[33m.\u001b[39mlower()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 | \u001b[39m\tcloseButton\u001b[33m.\u001b[39mattr(\u001b[32m'class'\u001b[39m\u001b[33m,\u001b[39m closeButtonClass)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m}\u001b[0m\n    at Parser._raise (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:723:17)\n    at Parser.raiseWithData (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:716:17)\n    at Parser.raise (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:710:17)\n    at Parser.unexpected (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:8606:16)\n    at Parser.parseExprAtom (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9865:20)\n    at Parser.parseExprSubscripts (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9451:23)\n    at Parser.parseMaybeUnary (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9431:21)\n    at Parser.parseExprOps (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9301:23)\n    at Parser.parseMaybeConditional (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9274:23)\n    at Parser.parseMaybeAssign (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9229:21)\n    at Parser.parseExprListItem (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10519:18)\n    at Parser.parseCallExpressionArguments (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9632:22)\n    at Parser.parseSubscript (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9538:31)\n    at Parser.parseSubscripts (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9468:19)\n    at Parser.parseExprSubscripts (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9457:17)\n    at Parser.parseMaybeUnary (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9431:21)\n    at Parser.parseExprOps (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9301:23)\n    at Parser.parseMaybeConditional (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9274:23)\n    at Parser.parseMaybeAssign (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9229:21)\n    at Parser.parseExpression (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:9181:23)\n    at Parser.parseStatementContent (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11011:23)\n    at Parser.parseStatement (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10882:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11456:25)\n    at Parser.parseBlockBody (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11443:10)\n    at Parser.parseBlock (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11427:10)\n    at Parser.parseFunctionBody (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10435:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10418:10)\n    at /Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11594:12\n    at Parser.withTopicForbiddingContext (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10757:14)\n    at Parser.parseFunction (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11593:10)\n    at Parser.parseFunctionStatement (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11228:17)\n    at Parser.parseStatementContent (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10920:21)\n    at Parser.parseStatement (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10882:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11456:25)\n    at Parser.parseBlockBody (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:11443:10)\n    at Parser.parseTopLevel (/Users/jackkillilea/Projects/datalab-prototype/node_modules/@babel/parser/lib/index.js:10813:10)");

/***/ }),

/***/ "./src/libs/ffg/src/revenue/donut.js":
/*!*******************************************!*\
  !*** ./src/libs/ffg/src/revenue/donut.js ***!
  \*******************************************/
/*! exports provided: createDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDonut", function() { return createDonut; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3__);




var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  arc: d3_shape__WEBPACK_IMPORTED_MODULE_1__["arc"],
  pie: d3_shape__WEBPACK_IMPORTED_MODULE_1__["pie"]
},
    radius = 45,
    arcFn = d3.arc(),
    pieFn = d3.pie().sort(null).value(function (d) {
  return d;
});

function setArcRadius(radius) {
  arcFn.outerRadius(radius).innerRadius(radius * .8);
}

function createDonut(container, percent, diameter, fillColor) {
  var absPercent = Math.abs(percent),
      isNegativeVal = percent < 0,
      shadedColorIterator = isNegativeVal ? 1 : 0,
      g = container.append('g').attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(diameter / 2, diameter / 2));
  var data = [absPercent * 100, 100 - absPercent * 100];

  if (isNegativeVal) {
    data = data.reverse();
  }

  setArcRadius(diameter / 2);
  var pie = g.selectAll(".arc").data(pieFn(data)).enter().append("g").attr("class", "arc");
  var donut = pie.append("path").attr("d", arcFn);
  donut.style("fill", function (d, i) {
    var shadedColor = fillColor || '#dd6666';
    return i === shadedColorIterator ? shadedColor : '#dddddd';
  });
  g.append('text').text(Math.round(absPercent * 100) + '%').attr('fill', _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textColorParagraph).attr('font-size', diameter / 4).attr('text-anchor', 'middle').attr('font-weight', 'bold').attr('y', diameter * 0.08);
}

/***/ }),

/***/ "./src/libs/ffg/src/revenue/intro/index.js":
/*!*************************************************!*\
  !*** ./src/libs/ffg/src/revenue/intro/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spending_intro_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../spending/intro/init */ "./src/libs/ffg/src/spending/intro/init.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/ffg/data/federal_revenue_gdp.csv */ "./src/libs/assets/ffg/data/federal_revenue_gdp.csv");
/* harmony import */ var _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/utils */ "./src/libs/ffg/src/utils.js");





(function init() {
  var config = {
    anecdoteName: 'anecdote-revenue.svg',
    comparisonAmount: Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["findAmountInCsv"])('federal spending', _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2___default.a),
    compareString: 'spending',
    gdpAmount: Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["findAmountInCsv"])('gdp', _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2___default.a),
    gdpPercent: Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["findAmountInCsv"])('federal revenue percent of gdp', _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2___default.a) * 100,
    sectionAmount: Object(_src_utils__WEBPACK_IMPORTED_MODULE_3__["findAmountInCsv"])('federal revenue', _assets_ffg_data_federal_revenue_gdp_csv__WEBPACK_IMPORTED_MODULE_2___default.a),
    comparisonColor: _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_1___default.a.colorSpendingPrimary,
    sectionColor: _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_1___default.a.revenuePrimary,
    accessibilityAttrs: {
      "default": {
        title: '2019 Federal Revenue',
        desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots.'
      },
      gdp: {
        title: '2019 Federal Revenue and GDP',
        desc: 'The U.S. economy, as measured by gross domestic product, produced $21.3 trillion worth of goods and services. In 2019, federal revenue was equivalent to 16% of gross domestic product.'
      },
      spending: {
        title: '2019 Federal Revenue and Spending',
        desc: 'The image illustrates federal spending in 2019 using dots, and each dot is equal to a billion dollars. There are 4,400 dots. Due to rounding, there are 900 more spending dots than revenue dots, representing the deficit for 2019, $984 billion.'
      }
    }
  };
  Object(_spending_intro_init__WEBPACK_IMPORTED_MODULE_0__["initChart"])(config);
})();

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/compareGdp.js":
/*!*******************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/compareGdp.js ***!
  \*******************************************************/
/*! exports provided: initGdp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGdp", function() { return initGdp; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _dotConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dotConstants */ "./src/libs/ffg/src/spending/intro/dotConstants.js");
/* harmony import */ var _compareManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compareManager */ "./src/libs/ffg/src/spending/intro/compareManager.js");
/* harmony import */ var _revenue_donut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../revenue/donut */ "./src/libs/ffg/src/revenue/donut.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");
/* harmony import */ var _assets_ffg_data_federal_spending_gdp_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/ffg/data/federal_spending_gdp.csv */ "./src/libs/assets/ffg/data/federal_spending_gdp.csv");
/* harmony import */ var _assets_ffg_data_federal_spending_gdp_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_ffg_data_federal_spending_gdp_csv__WEBPACK_IMPORTED_MODULE_8__);










var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
  line: d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"]
};
var gdpLayer,
    config = {};
var gdpLabelFy = 'FY' + _assets_ffg_data_federal_spending_gdp_csv__WEBPACK_IMPORTED_MODULE_8___default.a[0].year.toString().slice(2);

function getNewSvgHeight() {
  return Number(gdpLayer.attr('data-rect-height'));
}

function placeLegend(g) {
  var legendContainer = g.append('g').classed('gdp-step-two', true).attr('opacity', 0),
      textX = -50,
      height = getNewSvgHeight(),
      gdpAmount = config.gdpAmount,
      line = d3.line().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  }),
      lineData = [{
    x: textX + 30,
    y: 0
  }, {
    x: textX + 20,
    y: 0
  }, {
    x: textX + 20,
    y: height
  }, {
    x: textX + 30,
    y: height
  }],
      text = legendContainer.append('text').classed('reset touch-label', true).attr('fill', _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.textColorParagraph).attr('text-anchor', 'end').attr('x', 0).attr('y', height / 2 - 60).style('font-size', 24);
  legendContainer.append('path').attr('d', line(lineData)).attr('fill', 'none').attr('stroke', '#aaa').attr('stroke-width', 2);
  text.append('tspan').text(gdpLabelFy).style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', 0);
  text.append('tspan').text('U.S.').style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', 20);
  text.append('tspan').text('Gross').style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', 20);
  text.append('tspan').text('Domestic').style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', 20);
  text.append('tspan').text('Product').style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', 20);
  text.append('tspan').text(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["simplifyNumber"])(gdpAmount)).attr('x', textX).attr('dx', 0).attr('dy', 25);
}

function placeDonut(g) {
  var y = d3.select('.spending-dots').attr('data-rect-height'),
      r = 50,
      x = _widthManager__WEBPACK_IMPORTED_MODULE_7__["chartWidth"] - (r + 25) * 1.2,
      donutContainer = g.append('g').classed('gdp-step-two', true).attr('opacity', 0).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(x, y - r * 2 + 5) + ' scale(1.67)');
  donutContainer.append('circle').attr('fill', 'white').attr('opacity', 0.85).attr('r', r + 10).attr('cx', r).attr('cy', r);
  Object(_revenue_donut__WEBPACK_IMPORTED_MODULE_5__["createDonut"])(donutContainer, config.gdpPercent / 100, r * 2, config.sectionColor);
}

function initGdp(_config) {
  config = _config || config;
  var svg = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["establishContainer"])();
  var gdpCount = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findAmountInCsv"])('gdp', _assets_ffg_data_federal_spending_gdp_csv__WEBPACK_IMPORTED_MODULE_8___default.a) / 100000000000;
  gdpCount = Math.round(gdpCount) * 100;
  gdpLayer = Object(_compareManager__WEBPACK_IMPORTED_MODULE_4__["generateOverlay"])(gdpCount, svg.select('.main-container'), 'gdp-layer');

  if (document.documentElement.clientWidth > 959) {
    placeDonut(gdpLayer);
    placeLegend(gdpLayer);
  }

  Object(_compareManager__WEBPACK_IMPORTED_MODULE_4__["registerLayer"])('gdp', gdpLayer, getNewSvgHeight());
}

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/compareManager.js":
/*!***********************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/compareManager.js ***!
  \***********************************************************/
/*! exports provided: generateOverlay, registerLayer, resetForResize, revealCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOverlay", function() { return generateOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLayer", function() { return registerLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForResize", function() { return resetForResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealCompare", function() { return revealCompare; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");
/* harmony import */ var _dotConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dotConstants */ "./src/libs/ffg/src/spending/intro/dotConstants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _touchIe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../touchIe */ "./src/libs/ffg/src/touchIe.js");






var stateManager = {},
    layers = {},
    duration = 500,
    idMap = {
  gdp: '#gdp-facts',
  revenue: '#revenue-facts'
},
    sectionActive = 'facts__section--active',
    buttonActive = 'facts__trigger--active',
    d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
  transition: d3_transition__WEBPACK_IMPORTED_MODULE_1__["transition"]
};
var gdpHeight,
    originalHeight,
    config = {};

function setLayerOpacity(id, active) {
  layers[id].transition().duration(duration).attr('opacity', function () {
    return active ? 1 : 0;
  });
}

function handleGdpLayer(reset) {
  var scale = reset ? 1 : 0.6,
      x = reset ? 0 : _widthManager__WEBPACK_IMPORTED_MODULE_2__["chartWidth"] * 0.5 - _widthManager__WEBPACK_IMPORTED_MODULE_2__["chartWidth"] * scale / 2,
      stepTwoOpacity = reset ? 0 : 1,
      mainContainer = d3.select('.main-container');
  var accessibilityType = !reset ? 'gdp' : '';

  if (reset && !mainContainer.classed('gdp-active', !reset)) {
    return;
  }

  setAccessibility(accessibilityType);
  mainContainer.classed('gdp-active', !reset);
  mainContainer.transition().duration(2000).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_4__["translator"])(x, 30) + ' scale(' + scale + ')').ease();
  d3.selectAll('.gdp-step-two').transition().delay(1000).duration(1500).attr('opacity', stepTwoOpacity).on('end', _touchIe__WEBPACK_IMPORTED_MODULE_5__["touchIe"]).ease();
}

function setAccessibility(type) {
  var svgEl = d3.select('svg.main'),
      descEl = svgEl.select('desc');
  var accessibilityAttr = config.accessibilityAttrs["default"];

  if (type) {
    accessibilityAttr = config.accessibilityAttrs[type];
  }

  descEl.text(accessibilityAttr.desc);
}

function handleRevenueLayer(reset) {
  var scale = reset ? 1 : 0.6,
      x = reset ? 0 : _widthManager__WEBPACK_IMPORTED_MODULE_2__["chartWidth"] * 0.5 - _widthManager__WEBPACK_IMPORTED_MODULE_2__["chartWidth"] * scale / 2,
      stepTwoOpacity = reset ? 0 : 1,
      mainContainer = d3.select('.main-container');
  var accessibilityType = !reset ? config.compareString : '';

  if (reset && !mainContainer.classed('gdp-active', !reset)) {
    return;
  }

  setAccessibility(accessibilityType);
  mainContainer.classed('gdp-active', !reset);
  mainContainer.transition().duration(2000).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_4__["translator"])(x, 30) + ' scale(' + scale + ')').ease();
  d3.selectAll(".".concat(config.compareString, "-step-two")).transition().delay(1000).duration(1500).attr('opacity', stepTwoOpacity).on('end', _touchIe__WEBPACK_IMPORTED_MODULE_5__["touchIe"]).ease();
}

function handleLayers(id, reset) {
  if (id === 'gdp') {
    handleGdpLayer(reset);
  } else {
    handleRevenueLayer(reset);
  }
}

function toggleFacts() {
  var button = d3.select(this),
      desktop = document.documentElement.clientWidth > 959,
      id = button.attr('data-trigger-id'),
      targetSection = d3.select("#".concat(id, "-facts")),
      wasPreviouslyActive = button.classed(buttonActive);
  d3.selectAll('.facts__trigger').classed(buttonActive, null);
  d3.selectAll('.facts__section').classed(sectionActive, null);
  setLayerOpacity(Object.keys(layers).filter(function (k) {
    return k != id;
  })[0]);

  if (wasPreviouslyActive) {
    setLayerOpacity(id);
  } else {
    button.classed(buttonActive, true);
    targetSection.classed(sectionActive, true);
    setLayerOpacity(id, true);
  }

  resizeSvg(id === 'gdp' && !wasPreviouslyActive);

  if (!wasPreviouslyActive && desktop) {
    handleLayers(id);
  } else if (desktop) {
    handleLayers(id, true);
  }
}

function resizeSvg(gdp) {
  var h = gdp ? gdpHeight : originalHeight;
  d3.select('svg.main').transition().duration(500).attr('height', h + 50);
}

function generateOverlay(count, container, className, color) {
  var rows = Math.floor(count / _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotsPerRow"]),
      remainder = count % _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotsPerRow"],
      spacing = _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].offset.y - _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].radius * 2,
      mainRectHeight = rows * _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].offset.y - spacing / 2,
      secondaryRectHeight = _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].radius * 2 + spacing / 2,
      overlayHeight = mainRectHeight + secondaryRectHeight,
      rectColor = color || '#ccc';
  var overlayLayer = container.append('g').attr('data-rect-height', overlayHeight).classed(className, true);
  overlayLayer.attr('opacity', 0);
  overlayLayer.append('rect').attr('width', _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotsPerRow"] * _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].offset.x).attr('height', mainRectHeight).attr('fill', rectColor).attr('opacity', 0.8);
  overlayLayer.append('rect').attr('width', remainder * _dotConstants__WEBPACK_IMPORTED_MODULE_3__["dotConstants"].offset.x).attr('y', mainRectHeight).attr('height', secondaryRectHeight).attr('fill', rectColor).attr('opacity', 0.8);
  return overlayLayer;
}
function registerLayer(id, layer, _n, _config) {
  config = _config || config;
  layers[id] = layer;
  var n = _n;

  if (n) {
    gdpHeight = n * 0.6;
  } else if (!originalHeight) {
    originalHeight = d3.select('g.spending-dots').node().getBoundingClientRect().height;
  }
}
function resetForResize() {
  d3.selectAll('.sidebar').classed('intro-hidden', true);
  Object.keys(layers).forEach(setLayerOpacity);
  d3.selectAll('.facts__trigger').classed(buttonActive, null);
  d3.selectAll('.facts__section').classed(sectionActive, null);
}
function revealCompare() {
  setTimeout(function () {
    d3.selectAll('.intro-hidden').classed('intro-hidden', null);
  }, 500);
}
d3.selectAll('.facts__trigger').on('click', toggleFacts);

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/compareRevenue.js":
/*!***********************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/compareRevenue.js ***!
  \***********************************************************/
/*! exports provided: initRevenueOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRevenueOverlay", function() { return initRevenueOverlay; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _dotConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dotConstants */ "./src/libs/ffg/src/spending/intro/dotConstants.js");
/* harmony import */ var _compareManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compareManager */ "./src/libs/ffg/src/spending/intro/compareManager.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_5__);






var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
  line: d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"]
};
var compareLayer,
    config = {};

function placeLegend(g) {
  var legendContainer = g.append('g').classed("".concat(config.compareString, "-step-two"), true).attr('opacity', 0),
      compareString = config.compareString,
      textX = -50,
      comparisonAmount = config.comparisonAmount || 0,
      height = Number(compareLayer.attr('data-rect-height')),
      line = d3.line().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  }),
      lineData = [{
    x: textX + 30,
    y: 0
  }, {
    x: textX + 20,
    y: 0
  }, {
    x: textX + 20,
    y: height
  }, {
    x: textX + 30,
    y: height
  }],
      text = legendContainer.append('text').classed('reset touch-label', true).attr('fill', _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textColorParagraph).attr('text-anchor', 'end').attr('x', 0).attr('y', -10).style('font-size', 24);
  legendContainer.append('path').attr('d', line(lineData)).attr('fill', 'none').attr('stroke', '#aaa').attr('stroke-width', 2);
  text.append('tspan').text('Federal ' + "".concat(compareString.charAt(0).toUpperCase()).concat(compareString.slice(1))).style('font-weight', '600').attr('x', textX).attr('dx', 0).attr('dy', height / 2);
  text.append('tspan').text(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["simplifyNumber"])(comparisonAmount)).attr('x', textX).attr('dx', 0).attr('dy', 30);
}

function initRevenueOverlay(_config) {
  config = _config || config;
  var svg = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["establishContainer"])(),
      billion = 1000000000,
      compareCount = Math.ceil(config.comparisonAmount / billion);
  compareLayer = Object(_compareManager__WEBPACK_IMPORTED_MODULE_4__["generateOverlay"])(compareCount, svg.select('.main-container'), "".concat(config.comparisonString, "-layer"), config.comparisonColor);

  if (document.documentElement.clientWidth > 959) {
    placeLegend(compareLayer);
  }

  Object(_compareManager__WEBPACK_IMPORTED_MODULE_4__["registerLayer"])(config.compareString, compareLayer, null, config);
}

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/dotConstants.js":
/*!*********************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/dotConstants.js ***!
  \*********************************************************/
/*! exports provided: dotConstants, dotsPerRow, setDotsPerRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotConstants", function() { return dotConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotsPerRow", function() { return dotsPerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDotsPerRow", function() { return setDotsPerRow; });
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");

var dotConstants = {
  offset: {
    x: 5,
    y: 6
  },
  radius: 2
};
var dotsPerRow;
function setDotsPerRow() {
  var workingWidth = _widthManager__WEBPACK_IMPORTED_MODULE_0__["chartWidth"] - dotConstants.radius;
  dotsPerRow = Math.floor(workingWidth / dotConstants.offset.x);
}

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/init.js":
/*!*************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/init.js ***!
  \*************************************************/
/*! exports provided: initChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initChart", function() { return initChart; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _placeDots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeDots */ "./src/libs/ffg/src/spending/intro/placeDots.js");
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legend */ "./src/libs/ffg/src/spending/intro/legend.js");
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");
/* harmony import */ var _dotConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dotConstants */ "./src/libs/ffg/src/spending/intro/dotConstants.js");
/* harmony import */ var _compareManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compareManager */ "./src/libs/ffg/src/spending/intro/compareManager.js");







var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};
var debounce, previousWidth, config;
function initChart(_config) {
  d3.select('#viz').selectAll('*').remove();
  config = _config || config;
  Object(_widthManager__WEBPACK_IMPORTED_MODULE_4__["setChartWidth"])();
  Object(_dotConstants__WEBPACK_IMPORTED_MODULE_5__["setDotsPerRow"])();
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["establishContainer"])(500, _widthManager__WEBPACK_IMPORTED_MODULE_4__["chartWidth"], config.accessibilityAttrs["default"]);
  Object(_legend__WEBPACK_IMPORTED_MODULE_3__["startLegendAnimation"])(config);
}

function resizeChart() {
  Object(_widthManager__WEBPACK_IMPORTED_MODULE_4__["setChartWidth"])();
  Object(_dotConstants__WEBPACK_IMPORTED_MODULE_5__["setDotsPerRow"])();
  Object(_compareManager__WEBPACK_IMPORTED_MODULE_6__["resetForResize"])();
  d3.select('svg.main').attr('width', _widthManager__WEBPACK_IMPORTED_MODULE_4__["chartWidth"]);
  Object(_placeDots__WEBPACK_IMPORTED_MODULE_2__["placeDots"])(config);
}

window.addEventListener('resize', function () {
  if (debounce) {
    clearTimeout(debounce);
  }

  if (previousWidth === window.innerWidth) {
    return;
  }

  previousWidth = window.innerWidth;
  debounce = setTimeout(resizeChart, 100);
});

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/legend.js":
/*!***************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/legend.js ***!
  \***************************************************/
/*! exports provided: startLegendAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLegendAnimation", function() { return startLegendAnimation; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _placeDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeDots */ "./src/libs/ffg/src/spending/intro/placeDots.js");
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../infoBox */ "./src/libs/ffg/src/infoBox.js");
/* harmony import */ var _infoBox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_infoBox__WEBPACK_IMPORTED_MODULE_6__);







var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};
var introWidth = 365;
var radius = 75;
var svg;
var largeDot;
var billion;
var explanation;
var config = {};

function buildLegend() {
  var g = d3.select('.income-dot-legend');
  var duration = 2000;
  var w = 126;
  var xOffset = 4;
  Object(_placeDots__WEBPACK_IMPORTED_MODULE_4__["placeDots"])(config);
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fadeAndRemove"])(explanation, 1000);
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fadeAndRemove"])(billion, 500);
  g.transition().duration(duration).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(xOffset, 14));
  g.select('circle').attr('opacity', 1).transition().duration(duration).attr('r', 3).attr('cx', 0).attr('cy', 0).ease();
  g.append('text').text('= $1 Billion').attr('fill', _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textColorParagraph).attr('opacity', 0).style('font-size', 16).attr('y', 5).attr('x', 7).transition().delay(duration * 0.7).duration(duration / 2).attr('opacity', 1).ease();
  g.append('image').attr('height', 16).attr('width', 20).attr('x', 80).attr('y', -14).attr('opacity', 0).attr('data-box-id', 'billion-dollars').attr('xlink:href', "/americas-finance-guide/icons/".concat(config.anecdoteName)).attr('style', 'cursor:pointer').on('click', _infoBox__WEBPACK_IMPORTED_MODULE_6__["triggerInfoBox"]).transition().delay(duration * 0.7).duration(duration / 2).attr('opacity', 1).ease();
  Object(_infoBox__WEBPACK_IMPORTED_MODULE_6__["triggerMainInfoBox"])();
}

function addText() {
  var duration = 500;
  explanation = this.largeDot.append('text').attr('y', 54).attr('opacity', 0).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(radius * 2 + 20, 0)).attr('fill', _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textColorParagraph);
  explanation.append('tspan').attr('x', 0).attr('font-size', 18).text('In this analysis');
  explanation.append('tspan').attr('x', 0).attr('dy', 28).attr('font-size', 24).attr('font-weight', '600').text('One Dot');
  explanation.append('tspan').attr('font-size', 24).text(' represents');
  explanation.append('tspan').attr('x', 0).attr('font-size', 24).attr('font-weight', '600').attr('dy', 30).text('One Billion Dollars');
  billion = this.largeDot.append('text').text('$1,000,000,000').attr('text-anchor', 'middle').attr('font-size', 18).attr('x', this.radius).attr('y', this.radius + 7).attr('fill', 'white').attr('opacity', 0);
  this.largeDot.selectAll('text').transition().duration(500).attr('opacity', 1).ease();
  setTimeout(buildLegend, 1000);
}

function initDot() {
  var dotColor = config.sectionColor;
  largeDot.append('circle').attr('cx', radius).attr('cy', radius).attr('r', 1).attr('fill', dotColor).transition().duration(1500).attr('r', radius).on('end', addText.bind({
    largeDot: largeDot,
    radius: radius
  })).ease();
  Object(_infoBox__WEBPACK_IMPORTED_MODULE_6__["triggerMainInfoBox"])();
}

function startLegendAnimation(_config) {
  var introX = _widthManager__WEBPACK_IMPORTED_MODULE_5__["chartWidth"] < introWidth ? 0 : _widthManager__WEBPACK_IMPORTED_MODULE_5__["chartWidth"] / 2 - introWidth / 2;
  var scaleDotLegend = _widthManager__WEBPACK_IMPORTED_MODULE_5__["chartWidth"] < 430 ? 0.85 : 1;
  config = _config || config;
  svg = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["establishContainer"])(), largeDot = svg.append('g').classed('income-dot-legend', true).attr('transform', "".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["translator"])(introX, 40), " scale(").concat(scaleDotLegend, ")"));
  initDot();
}

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/placeDots.js":
/*!******************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/placeDots.js ***!
  \******************************************************/
/*! exports provided: placeDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeDots", function() { return placeDots; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _dotConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotConstants */ "./src/libs/ffg/src/spending/intro/dotConstants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var _compareRevenue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compareRevenue */ "./src/libs/ffg/src/spending/intro/compareRevenue.js");
/* harmony import */ var _compareGdp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compareGdp */ "./src/libs/ffg/src/spending/intro/compareGdp.js");
/* harmony import */ var _widthManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widthManager */ "./src/libs/ffg/src/spending/intro/widthManager.js");
/* harmony import */ var _compareManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compareManager */ "./src/libs/ffg/src/spending/intro/compareManager.js");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../globalSass/colors.scss */ "./src/libs/ffg/src/globalSass/colors.scss");
/* harmony import */ var _globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_globalSass_colors_scss__WEBPACK_IMPORTED_MODULE_8__);









var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};
var svg,
    rowCount,
    config = {};

function dotFactory(container, x, y) {
  var color = config.sectionColor;
  container.append('circle').attr('cx', x).attr('cy', y).attr('r', 2).style('fill', color);
}

function readyDots() {
  var dotContainer = svg.append('g').classed('main-container', true).attr('transform', Object(_utils__WEBPACK_IMPORTED_MODULE_3__["translator"])(0, 30)).append('g').classed('spending-dots', true).attr('opacity', 0),
      oneBillion = 1000000000;
  var i = 0,
      dotRectHeight,
      sectionAmountInBillions = config.sectionAmount / oneBillion,
      x = _dotConstants__WEBPACK_IMPORTED_MODULE_2__["dotConstants"].radius,
      y = 2;

  for (i; i < sectionAmountInBillions; i++) {
    dotFactory(dotContainer, x, y);
    x += _dotConstants__WEBPACK_IMPORTED_MODULE_2__["dotConstants"].offset.x;

    if ((i + 1) % _dotConstants__WEBPACK_IMPORTED_MODULE_2__["dotsPerRow"] === 0) {
      y += _dotConstants__WEBPACK_IMPORTED_MODULE_2__["dotConstants"].offset.y;
      x = _dotConstants__WEBPACK_IMPORTED_MODULE_2__["dotConstants"].radius;
    }
  }

  dotContainer.transition().delay(1000).duration(1000).attr('opacity', 1).on('end', _compareManager__WEBPACK_IMPORTED_MODULE_7__["revealCompare"]).ease();
  dotRectHeight = d3.select('g.spending-dots').node().getBoundingClientRect().height;
  dotContainer.attr('data-rect-height', dotRectHeight);
  setTimeout(function () {
    svg.attr('height', dotRectHeight + 50);
  }, 1000);
}

function placeDots(_config) {
  d3.select('.main-container').remove();
  config = _config || config;
  svg = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["establishContainer"])();
  readyDots();
  Object(_compareRevenue__WEBPACK_IMPORTED_MODULE_4__["initRevenueOverlay"])(config);
  Object(_compareGdp__WEBPACK_IMPORTED_MODULE_5__["initGdp"])(config);
}

/***/ }),

/***/ "./src/libs/ffg/src/spending/intro/widthManager.js":
/*!*********************************************************!*\
  !*** ./src/libs/ffg/src/spending/intro/widthManager.js ***!
  \*********************************************************/
/*! exports provided: chartWidth, setChartWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartWidth", function() { return chartWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChartWidth", function() { return setChartWidth; });
var chartWidth;
function setChartWidth() {
  chartWidth = document.getElementById('viz').getBoundingClientRect().width;
}

/***/ }),

/***/ "./src/libs/ffg/src/touchIe.js":
/*!*************************************!*\
  !*** ./src/libs/ffg/src/touchIe.js ***!
  \*************************************/
/*! exports provided: touchIe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchIe", function() { return touchIe; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/libs/ffg/src/utils.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
// this is a hack to fix an issue in Edge


var d3 = {
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_1__["selectAll"]
};
var counter = 0;
function touchIe() {
  counter += 1;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["establishContainer"])().attr('data-ie-touch', counter);
  d3.selectAll('.touch-label').attr('dx', 0);
}

/***/ }),

/***/ "./src/libs/ffg/src/utils.js":
/*!***********************************!*\
  !*** ./src/libs/ffg/src/utils.js ***!
  \***********************************/
/*! exports provided: findAmountInCsv, getElementBox, translator, getTransform, establishContainer, simplifyBillions, simplifyNumber, wordWrap, initDropShadow, fractionToPercent, stripBr, fadeAndRemove, isMobileDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAmountInCsv", function() { return findAmountInCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementBox", function() { return getElementBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translator", function() { return translator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransform", function() { return getTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "establishContainer", function() { return establishContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyBillions", function() { return simplifyBillions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyNumber", function() { return simplifyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDropShadow", function() { return initDropShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fractionToPercent", function() { return fractionToPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBr", function() { return stripBr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAndRemove", function() { return fadeAndRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

var d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"]
};
function findAmountInCsv(str, data) {
  var amount;
  data.every(function (row) {
    if (row.category != str) {
      return true;
    } else {
      amount = row.amount;
      return false;
    }
  });
  return amount;
}
function getElementBox(d3Selection) {
  var rect = d3Selection.node().getBoundingClientRect();
  return {
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    right: Math.ceil(rect.right),
    bottom: Math.ceil(rect.bottom)
  };
}
function translator(x, y) {
  return "translate(".concat(x, ", ").concat(y, ")");
}
function getTransform(d3Selection) {
  var re = /(\d)+/g;
  var originalTransform = d3Selection.attr('transform').match(re);
  return {
    x: Number(originalTransform[0]),
    y: Number(originalTransform[1])
  };
}
function establishContainer(height, width, accessibilityAttrs) {
  var viz = d3.select('#viz');
  var svg = viz.select('svg.main'); // console.log('svg.size: ', svg.size());
  // console.log('width: ', width);

  if (svg.size() === 0) {
    height = height || 400;
    width = width || 1200; // console.log('width: ', width);

    svg = viz.append('svg').classed('main', true).attr('shape-rendering', 'geometricPrecision').attr('height', height).attr('width', width);
  } else if (height) {
    svg.attr('height', height);
  }

  if (accessibilityAttrs && Object.keys(accessibilityAttrs).length) {
    svg.append('desc').attr('id', 'svgMainDesc').text(accessibilityAttrs.desc);
    svg.attr('aria-describedby', 'svgMainDesc');
  } // console.log('svg', svg);


  return svg;
}
function simplifyBillions(n) {
  var billion = 1000000000;
  return "$".concat(Math.round(n / billion * 10) / 10, " B");
}
function simplifyNumber(n) {
  var trillion = 1000000000000,
      billion = 1000000000,
      million = 1000000,
      negativeSign = n < 0 ? '-' : '';
  var simplifier = million,
      letter = 'M';

  if (n === 0) {
    return '$0';
  }

  if (Math.abs(n) >= trillion) {
    simplifier = trillion;
    letter = 'T';
  } else if (Math.abs(n) >= billion) {
    simplifier = billion;
    letter = 'B';
  }

  return "".concat(negativeSign, "$").concat(Math.round(Math.abs(n) / simplifier * 10) / 10, " ").concat(letter);
}
function wordWrap(text, maxWidth) {
  var words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineHeight = 1.1,
      tspan;
  tspan = text.text(null).append("tspan").attr("x", 0);

  while (words.length > 0) {
    word = words.pop();
    line.push(word);
    tspan.text(line.join(" "));

    if (tspan.node().getComputedTextLength() > maxWidth) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan").attr("x", 0).attr("dy", lineHeight + "em").text(word);
    }
  }
}
function initDropShadow() {
  var svg = establishContainer(),
      filter = svg.append('defs').append('filter').attr('id', 'drop1').attr('height', 2.2);
  filter.append('feGaussianBlur').attr('in', 'SourceAlpha').attr('stdDeviation', 2).attr('result', "blur");
  filter.append('feOffset').attr('in', 'blur').attr('dx', 0).attr('dy', 0).attr('result', 'offsetBlur');
  var feMerge = filter.append('feMerge');
  feMerge.append('feMergeNode').attr('in', 'offsetBlur');
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
}
function fractionToPercent(n, precision) {
  if (!precision) {
    return parseInt(n * 100) + '%';
  } // TODO: handle precision


  console.warn('need to handle precision');
}
function stripBr() {
  d3.selectAll('br').remove();
}
function fadeAndRemove(selection, duration) {
  duration = duration || 1000;
  selection.transition().duration(duration).attr('opacity', 0).on('end', function () {
    d3.select(this).remove();
  });
}
function isMobileDevice() {
  return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
}
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmZnL3NyYy9nbG9iYWxTYXNzL2NvbG9ycy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9sYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2N1YmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9lbGFzdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9leHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3BvbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3F1YWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3Npbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvZGlzY3JldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oY2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9odWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlckFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcGllY2V3aXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXBhdGgvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1wYXRoL3NyYy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9jcmVhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2xvY2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vYXBwZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbGFzc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0dW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbG93ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL29yZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmFpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3JBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc291cmNlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvdG91Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvdG91Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9hcmVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvYXJlYVJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9iYXNpcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2Jhc2lzQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYmFzaXNPcGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2FyZGluYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXJkaW5hbENsb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhcmRpbmFsT3Blbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL2NhdG11bGxSb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9jYXRtdWxsUm9tQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvY3VydmUvY2F0bXVsbFJvbU9wZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9saW5lYXJDbG9zZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9tb25vdG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2N1cnZlL25hdHVyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9yYWRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9jdXJ2ZS9zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbGluZVJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL2xpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC9kaXZlcmdpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvZXhwYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb2Zmc2V0L25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vZmZzZXQvc2lsaG91ZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29mZnNldC93aWdnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9hcHBlYXJhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvYXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvb3JkZXIvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL2luc2lkZU91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL29yZGVyL25vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9vcmRlci9yZXZlcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXNoYXBlL3NyYy9wb2ludFJhZGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N0YWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9kaWFtb25kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvc3JjL3N5bWJvbC9zdGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9zcmMvc3ltYm9sL3d5ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRpbWVyL3NyYy90aW1lb3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10aW1lci9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2FjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy9zZWxlY3Rpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9hdHRyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2F0dHJUd2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9lYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vcmVtb3ZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy10cmFuc2l0aW9uL3NyYy90cmFuc2l0aW9uL3N0eWxlVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90ZXh0VHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLXRyYW5zaXRpb24vc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdHJhbnNpdGlvbi9zcmMvdHJhbnNpdGlvbi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9hc3NldHMvZmZnL2RhdGEvZmVkZXJhbF9yZXZlbnVlX2dkcC5jc3YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvYXNzZXRzL2ZmZy9kYXRhL2ZlZGVyYWxfc3BlbmRpbmdfZ2RwLmNzdiIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9mZmcvc3JjL2dsb2JhbFNhc3MvY29sb3JzLnNjc3M/NTVhYSIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9mZmcvc3JjL3JldmVudWUvZG9udXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmZnL3NyYy9yZXZlbnVlL2ludHJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvc3BlbmRpbmcvaW50cm8vY29tcGFyZUdkcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9mZmcvc3JjL3NwZW5kaW5nL2ludHJvL2NvbXBhcmVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvc3BlbmRpbmcvaW50cm8vY29tcGFyZVJldmVudWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmZnL3NyYy9zcGVuZGluZy9pbnRyby9kb3RDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmZnL3NyYy9zcGVuZGluZy9pbnRyby9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvc3BlbmRpbmcvaW50cm8vbGVnZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvc3BlbmRpbmcvaW50cm8vcGxhY2VEb3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvc3BlbmRpbmcvaW50cm8vd2lkdGhNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZmZy9zcmMvdG91Y2hJZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9mZmcvc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImQzIiwic2VsZWN0IiwiYXJjIiwicGllIiwicmFkaXVzIiwiYXJjRm4iLCJwaWVGbiIsInNvcnQiLCJ2YWx1ZSIsImQiLCJzZXRBcmNSYWRpdXMiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiY3JlYXRlRG9udXQiLCJjb250YWluZXIiLCJwZXJjZW50IiwiZGlhbWV0ZXIiLCJmaWxsQ29sb3IiLCJhYnNQZXJjZW50IiwiTWF0aCIsImFicyIsImlzTmVnYXRpdmVWYWwiLCJzaGFkZWRDb2xvckl0ZXJhdG9yIiwiZyIsImFwcGVuZCIsImF0dHIiLCJ0cmFuc2xhdG9yIiwiZGF0YSIsInJldmVyc2UiLCJzZWxlY3RBbGwiLCJlbnRlciIsImRvbnV0Iiwic3R5bGUiLCJpIiwic2hhZGVkQ29sb3IiLCJ0ZXh0Iiwicm91bmQiLCJjb2xvcnMiLCJ0ZXh0Q29sb3JQYXJhZ3JhcGgiLCJpbml0IiwiY29uZmlnIiwiYW5lY2RvdGVOYW1lIiwiY29tcGFyaXNvbkFtb3VudCIsImZpbmRBbW91bnRJbkNzdiIsInJldmVudWVEYXRhIiwiY29tcGFyZVN0cmluZyIsImdkcEFtb3VudCIsImdkcFBlcmNlbnQiLCJzZWN0aW9uQW1vdW50IiwiY29tcGFyaXNvbkNvbG9yIiwiY29sb3JTcGVuZGluZ1ByaW1hcnkiLCJzZWN0aW9uQ29sb3IiLCJyZXZlbnVlUHJpbWFyeSIsImFjY2Vzc2liaWxpdHlBdHRycyIsInRpdGxlIiwiZGVzYyIsImdkcCIsInNwZW5kaW5nIiwiaW5pdENoYXJ0IiwibGluZSIsImdkcExheWVyIiwiZ2RwTGFiZWxGeSIsIlNwZW5kaW5nRGF0YSIsInllYXIiLCJ0b1N0cmluZyIsInNsaWNlIiwiZ2V0TmV3U3ZnSGVpZ2h0IiwiTnVtYmVyIiwicGxhY2VMZWdlbmQiLCJsZWdlbmRDb250YWluZXIiLCJjbGFzc2VkIiwidGV4dFgiLCJoZWlnaHQiLCJ4IiwieSIsImxpbmVEYXRhIiwic2ltcGxpZnlOdW1iZXIiLCJwbGFjZURvbnV0IiwiciIsImNoYXJ0V2lkdGgiLCJkb251dENvbnRhaW5lciIsImluaXRHZHAiLCJfY29uZmlnIiwic3ZnIiwiZXN0YWJsaXNoQ29udGFpbmVyIiwiZ2RwQ291bnQiLCJnZW5lcmF0ZU92ZXJsYXkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmVnaXN0ZXJMYXllciIsInN0YXRlTWFuYWdlciIsImxheWVycyIsImR1cmF0aW9uIiwiaWRNYXAiLCJyZXZlbnVlIiwic2VjdGlvbkFjdGl2ZSIsImJ1dHRvbkFjdGl2ZSIsInRyYW5zaXRpb24iLCJnZHBIZWlnaHQiLCJvcmlnaW5hbEhlaWdodCIsInNldExheWVyT3BhY2l0eSIsImlkIiwiYWN0aXZlIiwiaGFuZGxlR2RwTGF5ZXIiLCJyZXNldCIsInNjYWxlIiwic3RlcFR3b09wYWNpdHkiLCJtYWluQ29udGFpbmVyIiwiYWNjZXNzaWJpbGl0eVR5cGUiLCJzZXRBY2Nlc3NpYmlsaXR5IiwiZWFzZSIsImRlbGF5Iiwib24iLCJ0b3VjaEllIiwidHlwZSIsInN2Z0VsIiwiZGVzY0VsIiwiYWNjZXNzaWJpbGl0eUF0dHIiLCJoYW5kbGVSZXZlbnVlTGF5ZXIiLCJoYW5kbGVMYXllcnMiLCJ0b2dnbGVGYWN0cyIsImJ1dHRvbiIsImRlc2t0b3AiLCJ0YXJnZXRTZWN0aW9uIiwid2FzUHJldmlvdXNseUFjdGl2ZSIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrIiwicmVzaXplU3ZnIiwiaCIsImNvdW50IiwiY2xhc3NOYW1lIiwiY29sb3IiLCJyb3dzIiwiZmxvb3IiLCJkb3RzUGVyUm93IiwicmVtYWluZGVyIiwic3BhY2luZyIsImRvdENvbnN0YW50cyIsIm9mZnNldCIsIm1haW5SZWN0SGVpZ2h0Iiwic2Vjb25kYXJ5UmVjdEhlaWdodCIsIm92ZXJsYXlIZWlnaHQiLCJyZWN0Q29sb3IiLCJvdmVybGF5TGF5ZXIiLCJsYXllciIsIl9uIiwibiIsIm5vZGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZXNldEZvclJlc2l6ZSIsImZvckVhY2giLCJyZXZlYWxDb21wYXJlIiwic2V0VGltZW91dCIsImNvbXBhcmVMYXllciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiaW5pdFJldmVudWVPdmVybGF5IiwiYmlsbGlvbiIsImNvbXBhcmVDb3VudCIsImNlaWwiLCJjb21wYXJpc29uU3RyaW5nIiwic2V0RG90c1BlclJvdyIsIndvcmtpbmdXaWR0aCIsImRlYm91bmNlIiwicHJldmlvdXNXaWR0aCIsInJlbW92ZSIsInNldENoYXJ0V2lkdGgiLCJzdGFydExlZ2VuZEFuaW1hdGlvbiIsInJlc2l6ZUNoYXJ0IiwicGxhY2VEb3RzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsImlubmVyV2lkdGgiLCJpbnRyb1dpZHRoIiwibGFyZ2VEb3QiLCJleHBsYW5hdGlvbiIsImJ1aWxkTGVnZW5kIiwidyIsInhPZmZzZXQiLCJmYWRlQW5kUmVtb3ZlIiwidHJpZ2dlckluZm9Cb3giLCJ0cmlnZ2VyTWFpbkluZm9Cb3giLCJhZGRUZXh0IiwiaW5pdERvdCIsImRvdENvbG9yIiwiYmluZCIsImludHJvWCIsInNjYWxlRG90TGVnZW5kIiwicm93Q291bnQiLCJkb3RGYWN0b3J5IiwicmVhZHlEb3RzIiwiZG90Q29udGFpbmVyIiwib25lQmlsbGlvbiIsImRvdFJlY3RIZWlnaHQiLCJzZWN0aW9uQW1vdW50SW5CaWxsaW9ucyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJjb3VudGVyIiwic3RyIiwiYW1vdW50IiwiZXZlcnkiLCJyb3ciLCJjYXRlZ29yeSIsImdldEVsZW1lbnRCb3giLCJkM1NlbGVjdGlvbiIsInJlY3QiLCJyaWdodCIsImJvdHRvbSIsImdldFRyYW5zZm9ybSIsInJlIiwib3JpZ2luYWxUcmFuc2Zvcm0iLCJtYXRjaCIsInZpeiIsInNpemUiLCJsZW5ndGgiLCJzaW1wbGlmeUJpbGxpb25zIiwidHJpbGxpb24iLCJtaWxsaW9uIiwibmVnYXRpdmVTaWduIiwic2ltcGxpZmllciIsImxldHRlciIsIndvcmRXcmFwIiwibWF4V2lkdGgiLCJ3b3JkcyIsInNwbGl0Iiwid29yZCIsImxpbmVIZWlnaHQiLCJ0c3BhbiIsInBvcCIsInB1c2giLCJqb2luIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwiaW5pdERyb3BTaGFkb3ciLCJmZU1lcmdlIiwiZnJhY3Rpb25Ub1BlcmNlbnQiLCJwcmVjaXNpb24iLCJwYXJzZUludCIsImNvbnNvbGUiLCJ3YXJuIiwic3RyaXBCciIsInNlbGVjdGlvbiIsImlzTW9iaWxlRGV2aWNlIiwib3JpZW50YXRpb24iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7O0FBRXBDOztBQUVBO0FBQ0E7O0FBRVA7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLElBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDRTtBQUNBO0FBQ0Y7QUFDcUM7QUFDQTtBQUNyQjtBQUNpQjs7QUFFbEI7QUFDSTtBQUNGO0FBQ0k7QUFDRjtBQUNKO0FBQ1E7QUFDVjs7QUFFYztBQUNKO0FBQ1I7QUFDRTtBQUNnQjtBQUNKO0FBQ1I7QUFDZ0I7QUFDSjtBQUNSO0FBQ0k7QUFDWjtBQUNvQztBQUNsQztBQUNzRDs7QUFFckU7QUFDb0I7QUFDTTtBQUNWO0FBQ1k7QUFDUjtBQUNNO0FBQ0Y7QUFDRTtBQUNGO0FBQ1Y7QUFDTTs7Ozs7Ozs7Ozs7OztBQzdDaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNRO0FBQ087QUFDUTs7QUFFckM7QUFDZixVQUFVLDJDQUFNO0FBQ2hCLFVBQVUsMkNBQU07QUFDaEIsZ0JBQWdCLDREQUFRO0FBQ3hCO0FBQ0EsY0FBYyx3REFBVztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELG9EQUFJOztBQUVyRCxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUUsNERBQVE7QUFDekU7O0FBRUE7QUFDQSxpRUFBaUUsNERBQVE7QUFDekU7O0FBRUE7QUFDQSx1RUFBdUUsNERBQVE7QUFDL0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDcEM7O0FBRXRCO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxnRUFBVztBQUMzQzs7QUFFQTtBQUNBOztBQUVlO0FBQ2Ysb0JBQW9CLHdEQUFJLFNBQVMsa0VBQWlCO0FBQ2xELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0s7QUFDSTtBQUNlO0FBQ1Q7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQ0FBTTtBQUNoQixVQUFVLDJDQUFNO0FBQ2hCOztBQUVBO0FBQ0EsdUJBQXVCLCtDQUFLO0FBQzVCLHFDQUFxQyxvREFBSTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSw0REFBUTtBQUN6RTs7QUFFQTtBQUNBLGlFQUFpRSw0REFBUTtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsK0RBQVc7QUFDdEIsV0FBVywrREFBVztBQUN0QixXQUFXLCtEQUFXO0FBQ3RCLFdBQVcsK0RBQVc7QUFDdEI7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQWUsNEVBQWE7Ozs7Ozs7Ozs7Ozs7QUNBNUI7QUFBZTtBQUNmO0FBQ0EsbUVBQW1FLE9BQU87QUFDMUUsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQTZCOztBQUVkO0FBQ2Y7QUFDQSxnREFBZ0QsT0FBTztBQUN2RCxtQkFBbUIsT0FBTztBQUMxQixzQkFBc0IsT0FBTztBQUM3QjtBQUNBLEVBQUUsd0RBQUk7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBZTtBQUNmO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBNkI7O0FBRWQ7QUFDZjtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQSxFQUFFLHdEQUFJO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBNkI7O0FBRWQ7QUFDZjtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQUk7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBNkI7O0FBRWQ7QUFDZjtBQUNBLFNBQVMsd0RBQUksOEJBQThCLDRCQUE0QixFQUFFO0FBQ3pFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFZDtBQUNmO0FBQ0EsU0FBUyx3REFBSSw4QkFBOEIsMEJBQTBCLEVBQUU7QUFDdkUsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUF1Qzs7QUFFeEI7QUFDZixTQUFTLDZEQUFTO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBeUM7QUFDTjs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQUc7QUFDM0IsY0FBYyw4REFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUE2Qjs7QUFFZDtBQUNmLFNBQVMsd0RBQUk7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNJO0FBQ0o7QUFDUDs7QUFFZjtBQUNmLGNBQWMsb0RBQVE7QUFDdEIsbUJBQW1CLHNEQUFVO0FBQzdCO0FBQ0EsbUJBQW1CLDREQUFRO0FBQzNCLGlCQUFpQiw0REFBUSxDQUFDLDRDQUFHO0FBQzdCLGlCQUFpQiw0REFBUTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFHLFlBQVksNENBQUc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELHFDQUFxQyxFQUFFO0FBQzlGLHNEQUFzRCwrQkFBK0IsRUFBRTs7QUFFdkY7QUFDQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRSw0REFBUTtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLDREQUFRO0FBQ2xGOztBQUVBO0FBQ0Esd0VBQXdFLDREQUFRO0FBQ2hGOztBQUVBO0FBQ0Esd0VBQXdFLDREQUFRO0FBQ2hGOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlFRDtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDSTtBQUNLO0FBQ0Y7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGFBQWEsNERBQVE7QUFDckIsY0FBYyxzREFBUztBQUN2QixlQUFlLHVEQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QixpRUFBaUUsT0FBTztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FLDREQUFRLENBQUMsK0NBQUs7QUFDbEY7O0FBRUE7QUFDQSxxRUFBcUUsNERBQVE7QUFDN0U7O0FBRUE7QUFDQSxtREFBbUQsc0RBQVMsaUNBQWlDLDREQUFRLENBQUMsK0NBQUs7QUFDM0c7O0FBRUE7QUFDQSxvREFBb0QsdURBQVU7QUFDOUQ7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDVztBQUNGO0FBQ0k7QUFDTjtBQUNJO0FBQ0k7QUFDVjtBQUNHOztBQUU5QjtBQUNQLEVBQUUseURBQU07QUFDUixFQUFFLHdEQUFLO0FBQ1AsRUFBRSwwREFBTztBQUNULEVBQUUseURBQU07QUFDUixFQUFFLHVEQUFJO0FBQ04sRUFBRSwyREFBUTtBQUNWLEVBQUUsc0RBQUc7QUFDTDs7QUFFZTtBQUNmLGFBQWEsNERBQVEsQ0FBQyx5REFBTTtBQUM1QixhQUFhLDREQUFRO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQUk7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FLDREQUFRO0FBQzVFOztBQUVBO0FBQ0Esb0VBQW9FLDREQUFRO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFBQTtBQUFtQzs7QUFFcEI7QUFDZjtBQUNBLDZCQUE2QiwyQ0FBRTtBQUMvQjtBQUNBLDRCQUE0Qiw0Q0FBRztBQUMvQjtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1JGO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pCRjtBQUFBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNiRjtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ05GO0FBQUE7QUFBbUM7O0FBRW5DO0FBQ0Esa0JBQWtCLDJDQUFFLHNCQUFzQiwyQ0FBRTtBQUM1QyxrQkFBa0IsNENBQUc7QUFDckIsbUJBQW1CLDRDQUFHOztBQUVQO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsY0FBYyw0Q0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZCRjtBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNWRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlvQjs7QUFJRTs7QUFJQzs7Ozs7Ozs7Ozs7OztBQ1p2QjtBQUFBO0FBQXNDOztBQUV2QjtBQUNmLGNBQWMsK0NBQUs7QUFDbkI7QUFDQSx3Q0FBd0MscURBQUc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFpQzs7QUFFbEI7QUFDZixjQUFjLCtDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFJQUFxSSxtQkFBbUI7O0FBRWpKO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxRQUFRO0FBQ1IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQTtBQUFpRDtBQUNFOztBQUVuRDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsaUVBQVM7QUFDckQsbUJBQW1CLCtEQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUM4QjtBQUNkO0FBQ007Ozs7Ozs7Ozs7Ozs7QUNIcEQ7QUFBQTtBQUFpRTs7QUFFbEQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELGVBQWUsVUFBVTtBQUMzRSw4QkFBOEIsZ0VBQVEscUJBQXFCLDhEQUFNO0FBQ2pFLHFCQUFxQiw2REFBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDVTtBQUNFOztBQUVuRCxzREFBUyx1QkFBdUIscURBQW1CO0FBQ25ELHNEQUFTLHdCQUF3QixzREFBb0I7Ozs7Ozs7Ozs7Ozs7QUNMckQ7QUFBQTtBQUF3Qzs7QUFFekI7QUFDZjtBQUNBLElBQUksNkRBQVM7QUFDYixHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDUjtBQUNWO0FBQ1Y7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvREFBRztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUEsc0JBQXNCLCtEQUFVO0FBQ2hDO0FBQ0EsR0FBRztBQUNILFNBQVMsa0VBQUssb0NBQW9DLG9EQUFHO0FBQ3JEOztBQUVBLDJEQUEyRCxPQUFPO0FBQ2xFLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsUUFBUSx1RUFBUTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwrREFBVTtBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0U7QUFDeEM7QUFDRDtBQUNLOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGlCQUFpQiw4REFBUyx1Q0FBdUMsc0VBQW9CLEdBQUcsdURBQVc7QUFDbkc7QUFDQSxzRUFBc0UsNERBQVU7QUFDaEY7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFBQTtBQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOERBQVM7QUFDMUI7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQSxJQUFJLHlEQUFJO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx5REFBSTtBQUNSO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQUc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQUE7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQSxJQUFJLHdEQUFHO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBRztBQUNQO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQUc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQUE7QUFBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQUc7QUFDUDtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQUc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEMsZUFBZSxtQkFBbUIsNkJBQTZCOztBQUUvRDtBQUNBLHFCQUFxQix3REFBRztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQXFDO0FBQ0M7O0FBRXZCO0FBQ2YsMkNBQTJDLDREQUFPOztBQUVsRCxxRkFBcUYsT0FBTztBQUM1Riw0RkFBNEYsT0FBTztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsb0RBQVU7QUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNDO0FBQ1U7QUFDUjtBQUNNO0FBQ1I7QUFDSTtBQUNGO0FBQ047QUFDUTtBQUNBO0FBQ007QUFDQTtBQUNSO0FBQ1U7QUFDWjtBQUNVO0FBQ0U7QUFDVjtBQUNKOztBQUV0Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixTQUFTLDhEQUFTO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSwwQkFBMEIsc0RBQVM7O0FBRW5DO0FBQ0E7QUFDQSxVQUFVLG1EQUFpQjtBQUMzQixhQUFhLHNEQUFvQjtBQUNqQyxVQUFVLGtEQUFpQjtBQUMzQixTQUFTLGlEQUFnQjtBQUN6QixhQUFhLHNEQUFvQjtBQUNqQyxjQUFjLHVEQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhDQUFhO0FBQ25CLFFBQVEsZ0RBQWU7QUFDdkIsYUFBYSxxREFBb0I7QUFDakMsU0FBUyxrREFBZ0I7QUFDekIsY0FBYyx1REFBcUI7QUFDbkMsUUFBUSxpREFBZTtBQUN2QixhQUFhLHNEQUFvQjtBQUNqQyxVQUFVLGtEQUFpQjtBQUMzQixTQUFTLGtEQUFnQjtBQUN6QixTQUFTLGlEQUFnQjtBQUN6QixZQUFZLG9EQUFtQjtBQUMvQixRQUFRLGdEQUFlO0FBQ3ZCLE9BQU8sZ0RBQWM7QUFDckI7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFBO0FBQStCO0FBQ3FEOztBQUVyRTtBQUNmO0FBQ0Esa0NBQWtDLGdFQUFpQjtBQUNuRCxxQkFBcUIsOENBQUssR0FBRyw2REFBYztBQUMzQyxhQUFhLHNEQUFLLGVBQWUsNkRBQWM7QUFDL0MsUUFBUSxnRUFBaUI7QUFDekIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7QUFBc0M7O0FBRXZCO0FBQ2Y7O0FBRUEsK0pBQStKLE9BQU87QUFDdEssd0hBQXdILE9BQU87QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLFFBQVE7QUFDaEI7QUFDQTs7QUFFQSxhQUFhLG9EQUFVO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG9DQUFvQyxpREFBSSxHQUFHLGdEQUFHO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBLFFBQVEsd0RBQUc7QUFDWDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFDO0FBQ0c7O0FBRXhDLGNBQWMsNERBQVE7QUFDdEI7O0FBRU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUs7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLHNDQUFzQyx3REFBTzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSxJQUFJLHdEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNBO0FBQ007O0FBRTdCO0FBQ2Y7QUFDQTs7QUFFQSw2Q0FBNkMsNkRBQVE7O0FBRXJELHFGQUFxRixPQUFPO0FBQzVGLCtHQUErRyxPQUFPO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVEscUNBQXFDLHdEQUFHO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG9EQUFVO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDSDtBQUNNOztBQUU3QjtBQUNmO0FBQ0E7O0FBRUEsNkNBQTZDLGdFQUFXOztBQUV4RCx5RkFBeUYsT0FBTztBQUNoRyw4REFBOEQsT0FBTztBQUNyRTtBQUNBLHlGQUF5Rix3REFBRyx1Q0FBdUMsT0FBTztBQUMxSTtBQUNBLFlBQVksNERBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxvREFBVTtBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekJEO0FBQUE7QUFBdUM7O0FBRXZDLGdCQUFnQixzREFBUzs7QUFFVjtBQUNmO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRTtBQUM1QztBQUNEO0FBQ0k7QUFDSzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwREFBSztBQUN2QixvREFBb0QsMERBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFLO0FBQ3ZCO0FBQ0E7QUFDQSw2RUFBNkUsMERBQUs7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQUc7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZix5Q0FBeUMsc0VBQW9CLEdBQUcsdURBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNERBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0VEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxxQkFBcUIsNERBQVU7QUFDL0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUE2QztBQUNEOztBQUU3QjtBQUNmO0FBQ0E7QUFDQSxZQUFZLHVEQUFLOztBQUVqQiwyREFBMkQsT0FBTztBQUNsRSw4REFBOEQsT0FBTztBQUNyRTtBQUNBLHNCQUFzQix3REFBRztBQUN6QixRQUFRLDREQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG9EQUFVO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQUc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBRztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QiwyQkFBMkIsT0FBTztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBRztBQUNuQix3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVNO0FBQ1A7O0FBRUE7QUFDQSxtQkFBbUIsd0RBQUc7QUFDdEIsMkNBQTJDO0FBQzNDLEdBQUc7O0FBRUg7QUFDQSxXQUFXLHdEQUFHO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsbUJBQW1CLHVNQUF1TSxFQUFFLHdNQUF3TSxFQUFFLCtKQUErSixFQUFFLDRIQUE0SCxFQUFFLFlBQVksQzs7Ozs7Ozs7Ozs7QUNBanRCLG1CQUFtQix3TUFBd00sRUFBRSx1TUFBdU0sRUFBRSwrSkFBK0osRUFBRSw2SEFBNkgsRUFBRSxZQUFZLEM7Ozs7Ozs7Ozs7OztBQ0NsdEIsY0FBYyxtQkFBTyxDQUFDLHNPQUFxSDs7QUFFM0ksNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBRztBQUFFQyxRQUFNLEVBQU5BLG1EQUFGO0FBQVVDLEtBQUcsRUFBSEEsNENBQVY7QUFBZUMsS0FBRyxFQUFIQSw0Q0FBR0E7QUFBbEIsQ0FBWDtBQUFBLElBQ0lDLE1BQU0sR0FBRyxFQURiO0FBQUEsSUFFSUMsS0FBSyxHQUFHTCxFQUFFLENBQUNFLEdBQUgsRUFGWjtBQUFBLElBR0lJLEtBQUssR0FBR04sRUFBRSxDQUFDRyxHQUFILEdBQ0hJLElBREcsQ0FDRSxJQURGLEVBRUhDLEtBRkcsQ0FFRyxVQUFVQyxDQUFWLEVBQWE7QUFBRSxTQUFPQSxDQUFQO0FBQVcsQ0FGN0IsQ0FIWjs7QUFPQSxTQUFTQyxZQUFULENBQXNCTixNQUF0QixFQUE4QjtBQUMxQkMsT0FBSyxDQUFDTSxXQUFOLENBQWtCUCxNQUFsQixFQUNLUSxXQURMLENBQ2tCUixNQUFELEdBQVcsRUFENUI7QUFFSDs7QUFFTSxTQUFTUyxXQUFULENBQXFCQyxTQUFyQixFQUFnQ0MsT0FBaEMsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4RDtBQUNqRSxNQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxPQUFULENBQW5CO0FBQUEsTUFDSU0sYUFBYSxHQUFHTixPQUFPLEdBQUcsQ0FEOUI7QUFBQSxNQUVJTyxtQkFBbUIsR0FBR0QsYUFBYSxHQUFHLENBQUgsR0FBTyxDQUY5QztBQUFBLE1BR0lFLENBQUMsR0FBR1QsU0FBUyxDQUFDVSxNQUFWLENBQWlCLEdBQWpCLEVBQ0NDLElBREQsQ0FDTSxXQUROLEVBQ21CQyx5REFBVSxDQUFDVixRQUFRLEdBQUcsQ0FBWixFQUFlQSxRQUFRLEdBQUcsQ0FBMUIsQ0FEN0IsQ0FIUjtBQU1BLE1BQUlXLElBQUksR0FBRyxDQUFDVCxVQUFVLEdBQUcsR0FBZCxFQUFtQixNQUFNQSxVQUFVLEdBQUcsR0FBdEMsQ0FBWDs7QUFFQSxNQUFHRyxhQUFILEVBQWlCO0FBQ2JNLFFBQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLEVBQVA7QUFDSDs7QUFFRGxCLGNBQVksQ0FBQ00sUUFBUSxHQUFHLENBQVosQ0FBWjtBQUdBLE1BQU1iLEdBQUcsR0FBR29CLENBQUMsQ0FBQ00sU0FBRixDQUFZLE1BQVosRUFDUEYsSUFETyxDQUNGckIsS0FBSyxDQUFDcUIsSUFBRCxDQURILEVBRVBHLEtBRk8sR0FHUE4sTUFITyxDQUdBLEdBSEEsRUFJUEMsSUFKTyxDQUlGLE9BSkUsRUFJTyxLQUpQLENBQVo7QUFNQSxNQUFNTSxLQUFLLEdBQUc1QixHQUFHLENBQUNxQixNQUFKLENBQVcsTUFBWCxFQUNUQyxJQURTLENBQ0osR0FESSxFQUNDcEIsS0FERCxDQUFkO0FBR0EwQixPQUFLLENBQUNDLEtBQU4sQ0FBWSxNQUFaLEVBQW9CLFVBQVV2QixDQUFWLEVBQWF3QixDQUFiLEVBQWdCO0FBQ2hDLFFBQU1DLFdBQVcsR0FBR2pCLFNBQVMsSUFBSSxTQUFqQztBQUNBLFdBQVFnQixDQUFDLEtBQUtYLG1CQUFQLEdBQThCWSxXQUE5QixHQUE0QyxTQUFuRDtBQUNILEdBSEQ7QUFLQVgsR0FBQyxDQUFDQyxNQUFGLENBQVMsTUFBVCxFQUNLVyxJQURMLENBQ1VoQixJQUFJLENBQUNpQixLQUFMLENBQVdsQixVQUFVLEdBQUcsR0FBeEIsSUFBK0IsR0FEekMsRUFFS08sSUFGTCxDQUVVLE1BRlYsRUFFa0JZLDhEQUFNLENBQUNDLGtCQUZ6QixFQUdLYixJQUhMLENBR1UsV0FIVixFQUd1QlQsUUFBUSxHQUFDLENBSGhDLEVBSUtTLElBSkwsQ0FJVSxhQUpWLEVBSXlCLFFBSnpCLEVBS0tBLElBTEwsQ0FLVSxhQUxWLEVBS3lCLE1BTHpCLEVBTUtBLElBTkwsQ0FNVSxHQU5WLEVBTWVULFFBQVEsR0FBQyxJQU54QjtBQU9ILEM7Ozs7Ozs7Ozs7OztBQ3RERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsU0FBU3VCLElBQVQsR0FBZTtBQUNaLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxnQkFBWSxFQUFFLHNCQURIO0FBRVhDLG9CQUFnQixFQUFFQyxrRUFBZSxDQUFDLGtCQUFELEVBQXFCQywrRUFBckIsQ0FGdEI7QUFHWEMsaUJBQWEsRUFBRSxVQUhKO0FBSVhDLGFBQVMsRUFBRUgsa0VBQWUsQ0FBQyxLQUFELEVBQVFDLCtFQUFSLENBSmY7QUFLWEcsY0FBVSxFQUFFSixrRUFBZSxDQUFDLGdDQUFELEVBQW1DQywrRUFBbkMsQ0FBZixHQUFpRSxHQUxsRTtBQU1YSSxpQkFBYSxFQUFFTCxrRUFBZSxDQUFDLGlCQUFELEVBQW9CQywrRUFBcEIsQ0FObkI7QUFPWEssbUJBQWUsRUFBRVosOERBQU0sQ0FBQ2Esb0JBUGI7QUFRWEMsZ0JBQVksRUFBRWQsOERBQU0sQ0FBQ2UsY0FSVjtBQVNYQyxzQkFBa0IsRUFBRztBQUNqQixpQkFBUztBQUNMQyxhQUFLLEVBQUUsc0JBREY7QUFFTEMsWUFBSSxFQUFFO0FBRkQsT0FEUTtBQUtqQkMsU0FBRyxFQUFHO0FBQ0ZGLGFBQUssRUFBRSw4QkFETDtBQUVGQyxZQUFJLEVBQUU7QUFGSixPQUxXO0FBU2pCRSxjQUFRLEVBQUc7QUFDUEgsYUFBSyxFQUFFLG1DQURBO0FBRVBDLFlBQUksRUFBRTtBQUZDO0FBVE07QUFUVixHQUFmO0FBd0JBRyx3RUFBUyxDQUFDbEIsTUFBRCxDQUFUO0FBQ0gsQ0ExQkQsSTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU14QyxFQUFFLEdBQUc7QUFBRUMsUUFBTSxFQUFOQSxtREFBRjtBQUFVNEIsV0FBUyxFQUFUQSxzREFBVjtBQUFxQjhCLE1BQUksRUFBSkEsNkNBQUlBO0FBQXpCLENBQVg7QUFFQSxJQUFJQyxRQUFKO0FBQUEsSUFDSXBCLE1BQU0sR0FBRyxFQURiO0FBR0EsSUFBTXFCLFVBQVUsR0FBRyxPQUFPQyxnRkFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLEdBQWdDQyxLQUFoQyxDQUFzQyxDQUF0QyxDQUExQjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFNBQU9DLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDbkMsSUFBVCxDQUFjLGtCQUFkLENBQUQsQ0FBYjtBQUNIOztBQUVELFNBQVMyQyxXQUFULENBQXFCN0MsQ0FBckIsRUFBd0I7QUFDcEIsTUFBTThDLGVBQWUsR0FBRzlDLENBQUMsQ0FBQ0MsTUFBRixDQUFTLEdBQVQsRUFDbkI4QyxPQURtQixDQUNYLGNBRFcsRUFDSyxJQURMLEVBRW5CN0MsSUFGbUIsQ0FFZCxTQUZjLEVBRUgsQ0FGRyxDQUF4QjtBQUFBLE1BR0k4QyxLQUFLLEdBQUcsQ0FBQyxFQUhiO0FBQUEsTUFJSUMsTUFBTSxHQUFHTixlQUFlLEVBSjVCO0FBQUEsTUFLSXBCLFNBQVMsR0FBR04sTUFBTSxDQUFDTSxTQUx2QjtBQUFBLE1BTUlhLElBQUksR0FBRzNELEVBQUUsQ0FBQzJELElBQUgsR0FDRmMsQ0FERSxDQUNBLFVBQVVoRSxDQUFWLEVBQWE7QUFBRSxXQUFPQSxDQUFDLENBQUNnRSxDQUFUO0FBQWEsR0FENUIsRUFFRkMsQ0FGRSxDQUVBLFVBQVVqRSxDQUFWLEVBQWE7QUFBRSxXQUFPQSxDQUFDLENBQUNpRSxDQUFUO0FBQWEsR0FGNUIsQ0FOWDtBQUFBLE1BU0lDLFFBQVEsR0FBRyxDQUNQO0FBQUVGLEtBQUMsRUFBRUYsS0FBSyxHQUFHLEVBQWI7QUFBaUJHLEtBQUMsRUFBRTtBQUFwQixHQURPLEVBRVA7QUFBRUQsS0FBQyxFQUFFRixLQUFLLEdBQUcsRUFBYjtBQUFpQkcsS0FBQyxFQUFFO0FBQXBCLEdBRk8sRUFHUDtBQUFFRCxLQUFDLEVBQUVGLEtBQUssR0FBRyxFQUFiO0FBQWlCRyxLQUFDLEVBQUVGO0FBQXBCLEdBSE8sRUFJUDtBQUFFQyxLQUFDLEVBQUVGLEtBQUssR0FBRyxFQUFiO0FBQWlCRyxLQUFDLEVBQUVGO0FBQXBCLEdBSk8sQ0FUZjtBQUFBLE1BZUlyQyxJQUFJLEdBQUdrQyxlQUFlLENBQUM3QyxNQUFoQixDQUF1QixNQUF2QixFQUNGOEMsT0FERSxDQUNNLG1CQUROLEVBQzJCLElBRDNCLEVBRUY3QyxJQUZFLENBRUcsTUFGSCxFQUVXWSw4REFBTSxDQUFDQyxrQkFGbEIsRUFHRmIsSUFIRSxDQUdHLGFBSEgsRUFHa0IsS0FIbEIsRUFJRkEsSUFKRSxDQUlHLEdBSkgsRUFJUSxDQUpSLEVBS0ZBLElBTEUsQ0FLRyxHQUxILEVBS1MrQyxNQUFNLEdBQUcsQ0FBVixHQUFlLEVBTHZCLEVBTUZ4QyxLQU5FLENBTUksV0FOSixFQU1pQixFQU5qQixDQWZYO0FBdUJBcUMsaUJBQWUsQ0FBQzdDLE1BQWhCLENBQXVCLE1BQXZCLEVBQ0tDLElBREwsQ0FDVSxHQURWLEVBQ2VrQyxJQUFJLENBQUNnQixRQUFELENBRG5CLEVBRUtsRCxJQUZMLENBRVUsTUFGVixFQUVrQixNQUZsQixFQUdLQSxJQUhMLENBR1UsUUFIVixFQUdvQixNQUhwQixFQUlLQSxJQUpMLENBSVUsY0FKVixFQUkwQixDQUoxQjtBQU1BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVTBCLFVBRFYsRUFFSzdCLEtBRkwsQ0FFVyxhQUZYLEVBRTBCLEtBRjFCLEVBR0tQLElBSEwsQ0FHVSxHQUhWLEVBR2U4QyxLQUhmLEVBSUs5QyxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixDQUxoQjtBQU9BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVSxNQURWLEVBRUtILEtBRkwsQ0FFVyxhQUZYLEVBRTBCLEtBRjFCLEVBR0tQLElBSEwsQ0FHVSxHQUhWLEVBR2U4QyxLQUhmLEVBSUs5QyxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixFQUxoQjtBQU9BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVSxPQURWLEVBRUtILEtBRkwsQ0FFVyxhQUZYLEVBRTBCLEtBRjFCLEVBR0tQLElBSEwsQ0FHVSxHQUhWLEVBR2U4QyxLQUhmLEVBSUs5QyxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixFQUxoQjtBQU9BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVSxVQURWLEVBRUtILEtBRkwsQ0FFVyxhQUZYLEVBRTBCLEtBRjFCLEVBR0tQLElBSEwsQ0FHVSxHQUhWLEVBR2U4QyxLQUhmLEVBSUs5QyxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixFQUxoQjtBQU9BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVSxTQURWLEVBRUtILEtBRkwsQ0FFVyxhQUZYLEVBRTBCLEtBRjFCLEVBR0tQLElBSEwsQ0FHVSxHQUhWLEVBR2U4QyxLQUhmLEVBSUs5QyxJQUpMLENBSVUsSUFKVixFQUlnQixDQUpoQixFQUtLQSxJQUxMLENBS1UsSUFMVixFQUtnQixFQUxoQjtBQU9BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVXlDLDZEQUFjLENBQUM5QixTQUFELENBRHhCLEVBRUtyQixJQUZMLENBRVUsR0FGVixFQUVlOEMsS0FGZixFQUdLOUMsSUFITCxDQUdVLElBSFYsRUFHZ0IsQ0FIaEIsRUFJS0EsSUFKTCxDQUlVLElBSlYsRUFJZ0IsRUFKaEI7QUFLSDs7QUFFRCxTQUFTb0QsVUFBVCxDQUFvQnRELENBQXBCLEVBQXVCO0FBQ25CLE1BQU1tRCxDQUFDLEdBQUcxRSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxnQkFBVixFQUE0QndCLElBQTVCLENBQWlDLGtCQUFqQyxDQUFWO0FBQUEsTUFDSXFELENBQUMsR0FBRyxFQURSO0FBQUEsTUFFSUwsQ0FBQyxHQUFHTSx3REFBVSxHQUFHLENBQUNELENBQUMsR0FBRyxFQUFMLElBQVcsR0FGaEM7QUFBQSxNQUdJRSxjQUFjLEdBQUd6RCxDQUFDLENBQUNDLE1BQUYsQ0FBUyxHQUFULEVBQ1o4QyxPQURZLENBQ0osY0FESSxFQUNZLElBRFosRUFFWjdDLElBRlksQ0FFUCxTQUZPLEVBRUksQ0FGSixFQUdaQSxJQUhZLENBR1AsV0FITyxFQUdNQyx5REFBVSxDQUFDK0MsQ0FBRCxFQUFJQyxDQUFDLEdBQUdJLENBQUMsR0FBRyxDQUFSLEdBQVksQ0FBaEIsQ0FBVixHQUErQixjQUhyQyxDQUhyQjtBQVFBRSxnQkFBYyxDQUFDeEQsTUFBZixDQUFzQixRQUF0QixFQUNLQyxJQURMLENBQ1UsTUFEVixFQUNrQixPQURsQixFQUVLQSxJQUZMLENBRVUsU0FGVixFQUVxQixJQUZyQixFQUdLQSxJQUhMLENBR1UsR0FIVixFQUdlcUQsQ0FBQyxHQUFHLEVBSG5CLEVBSUtyRCxJQUpMLENBSVUsSUFKVixFQUlnQnFELENBSmhCLEVBS0tyRCxJQUxMLENBS1UsSUFMVixFQUtnQnFELENBTGhCO0FBT0FqRSxvRUFBVyxDQUFDbUUsY0FBRCxFQUFpQnhDLE1BQU0sQ0FBQ08sVUFBUCxHQUFvQixHQUFyQyxFQUEwQytCLENBQUMsR0FBRyxDQUE5QyxFQUFpRHRDLE1BQU0sQ0FBQ1csWUFBeEQsQ0FBWDtBQUNIOztBQUVNLFNBQVM4QixPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUM3QjFDLFFBQU0sR0FBRzBDLE9BQU8sSUFBSTFDLE1BQXBCO0FBQ0EsTUFBTTJDLEdBQUcsR0FBR0MsaUVBQWtCLEVBQTlCO0FBQ0EsTUFBSUMsUUFBUSxHQUFJMUMsOERBQWUsQ0FBQyxLQUFELEVBQVFtQixnRkFBUixDQUFoQixHQUF5QyxZQUF4RDtBQUNBdUIsVUFBUSxHQUFHbEUsSUFBSSxDQUFDaUIsS0FBTCxDQUFXaUQsUUFBWCxJQUF1QixHQUFsQztBQUVBekIsVUFBUSxHQUFHMEIsdUVBQWUsQ0FBQ0QsUUFBRCxFQUFXRixHQUFHLENBQUNsRixNQUFKLENBQVcsaUJBQVgsQ0FBWCxFQUEwQyxXQUExQyxDQUExQjs7QUFFQSxNQUFJc0YsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxXQUF6QixHQUF1QyxHQUEzQyxFQUFnRDtBQUM1Q1osY0FBVSxDQUFDakIsUUFBRCxDQUFWO0FBQ0FRLGVBQVcsQ0FBQ1IsUUFBRCxDQUFYO0FBQ0g7O0FBRUQ4Qix1RUFBYSxDQUFDLEtBQUQsRUFBUTlCLFFBQVIsRUFBa0JNLGVBQWUsRUFBakMsQ0FBYjtBQUNILEM7Ozs7Ozs7Ozs7OztBQy9IRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXlCLFlBQVksR0FBRyxFQUFyQjtBQUFBLElBQ0lDLE1BQU0sR0FBRyxFQURiO0FBQUEsSUFFSUMsUUFBUSxHQUFHLEdBRmY7QUFBQSxJQUdJQyxLQUFLLEdBQUc7QUFDSnRDLEtBQUcsRUFBRSxZQUREO0FBRUp1QyxTQUFPLEVBQUU7QUFGTCxDQUhaO0FBQUEsSUFPSUMsYUFBYSxHQUFHLHdCQVBwQjtBQUFBLElBUUlDLFlBQVksR0FBRyx3QkFSbkI7QUFBQSxJQVNJakcsRUFBRSxHQUFHO0FBQUVDLFFBQU0sRUFBTkEsbURBQUY7QUFBVTRCLFdBQVMsRUFBVEEsc0RBQVY7QUFBcUJxRSxZQUFVLEVBQVZBLHdEQUFVQTtBQUEvQixDQVRUO0FBV0EsSUFBSUMsU0FBSjtBQUFBLElBQWVDLGNBQWY7QUFBQSxJQUErQjVELE1BQU0sR0FBRyxFQUF4Qzs7QUFFQSxTQUFTNkQsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDWCxRQUFNLENBQUNVLEVBQUQsQ0FBTixDQUFXSixVQUFYLEdBQ0tMLFFBREwsQ0FDY0EsUUFEZCxFQUVLcEUsSUFGTCxDQUVVLFNBRlYsRUFFcUIsWUFBWTtBQUN6QixXQUFPOEUsTUFBTSxHQUFHLENBQUgsR0FBTyxDQUFwQjtBQUNILEdBSkw7QUFLSDs7QUFFRCxTQUFTQyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUMzQixNQUFNQyxLQUFLLEdBQUdELEtBQUssR0FBRyxDQUFILEdBQU8sR0FBMUI7QUFBQSxNQUNJaEMsQ0FBQyxHQUFHZ0MsS0FBSyxHQUFHLENBQUgsR0FBTzFCLHdEQUFVLEdBQUcsR0FBYixHQUFvQkEsd0RBQVUsR0FBRzJCLEtBQWIsR0FBcUIsQ0FEN0Q7QUFBQSxNQUVJQyxjQUFjLEdBQUdGLEtBQUssR0FBRyxDQUFILEdBQU8sQ0FGakM7QUFBQSxNQUdJRyxhQUFhLEdBQUc1RyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixDQUhwQjtBQUtBLE1BQUk0RyxpQkFBaUIsR0FBRyxDQUFDSixLQUFELEdBQVMsS0FBVCxHQUFpQixFQUF6Qzs7QUFFQSxNQUFJQSxLQUFLLElBQUksQ0FBQ0csYUFBYSxDQUFDdEMsT0FBZCxDQUFzQixZQUF0QixFQUFvQyxDQUFDbUMsS0FBckMsQ0FBZCxFQUEyRDtBQUN2RDtBQUNIOztBQUVESyxrQkFBZ0IsQ0FBQ0QsaUJBQUQsQ0FBaEI7QUFDQUQsZUFBYSxDQUFDdEMsT0FBZCxDQUFzQixZQUF0QixFQUFvQyxDQUFDbUMsS0FBckM7QUFFQUcsZUFBYSxDQUFDVixVQUFkLEdBQ0tMLFFBREwsQ0FDYyxJQURkLEVBRUtwRSxJQUZMLENBRVUsV0FGVixFQUV1QkMseURBQVUsQ0FBQytDLENBQUQsRUFBSSxFQUFKLENBQVYsR0FBb0IsU0FBcEIsR0FBZ0NpQyxLQUFoQyxHQUF3QyxHQUYvRCxFQUdLSyxJQUhMO0FBS0EvRyxJQUFFLENBQUM2QixTQUFILENBQWEsZUFBYixFQUE4QnFFLFVBQTlCLEdBQ0tjLEtBREwsQ0FDVyxJQURYLEVBRUtuQixRQUZMLENBRWMsSUFGZCxFQUdLcEUsSUFITCxDQUdVLFNBSFYsRUFHcUJrRixjQUhyQixFQUlLTSxFQUpMLENBSVEsS0FKUixFQUllQyxnREFKZixFQUtLSCxJQUxMO0FBTUg7O0FBRUQsU0FBU0QsZ0JBQVQsQ0FBMEJLLElBQTFCLEVBQStCO0FBQzNCLE1BQU1DLEtBQUssR0FBR3BILEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFVBQVYsQ0FBZDtBQUFBLE1BQ0lvSCxNQUFNLEdBQUdELEtBQUssQ0FBQ25ILE1BQU4sQ0FBYSxNQUFiLENBRGI7QUFHQSxNQUFJcUgsaUJBQWlCLEdBQUc5RSxNQUFNLENBQUNhLGtCQUFQLFdBQXhCOztBQUNBLE1BQUc4RCxJQUFILEVBQVE7QUFDSkcscUJBQWlCLEdBQUc5RSxNQUFNLENBQUNhLGtCQUFQLENBQTBCOEQsSUFBMUIsQ0FBcEI7QUFDSDs7QUFFREUsUUFBTSxDQUFDbEYsSUFBUCxDQUFZbUYsaUJBQWlCLENBQUMvRCxJQUE5QjtBQUNIOztBQUVELFNBQVNnRSxrQkFBVCxDQUE0QmQsS0FBNUIsRUFBbUM7QUFDL0IsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLEdBQUcsQ0FBSCxHQUFPLEdBQTFCO0FBQUEsTUFDQWhDLENBQUMsR0FBR2dDLEtBQUssR0FBRyxDQUFILEdBQU8xQix3REFBVSxHQUFHLEdBQWIsR0FBb0JBLHdEQUFVLEdBQUcyQixLQUFiLEdBQXFCLENBRHpEO0FBQUEsTUFFQUMsY0FBYyxHQUFHRixLQUFLLEdBQUcsQ0FBSCxHQUFPLENBRjdCO0FBQUEsTUFHQUcsYUFBYSxHQUFHNUcsRUFBRSxDQUFDQyxNQUFILENBQVUsaUJBQVYsQ0FIaEI7QUFLQSxNQUFJNEcsaUJBQWlCLEdBQUcsQ0FBQ0osS0FBRCxHQUFTakUsTUFBTSxDQUFDSyxhQUFoQixHQUFnQyxFQUF4RDs7QUFFQSxNQUFJNEQsS0FBSyxJQUFJLENBQUNHLGFBQWEsQ0FBQ3RDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsQ0FBQ21DLEtBQXJDLENBQWQsRUFBMkQ7QUFDdkQ7QUFDSDs7QUFFREssa0JBQWdCLENBQUNELGlCQUFELENBQWhCO0FBQ0FELGVBQWEsQ0FBQ3RDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsQ0FBQ21DLEtBQXJDO0FBRUFHLGVBQWEsQ0FBQ1YsVUFBZCxHQUNLTCxRQURMLENBQ2MsSUFEZCxFQUVLcEUsSUFGTCxDQUVVLFdBRlYsRUFFdUJDLHlEQUFVLENBQUMrQyxDQUFELEVBQUksRUFBSixDQUFWLEdBQW9CLFNBQXBCLEdBQWdDaUMsS0FBaEMsR0FBd0MsR0FGL0QsRUFHS0ssSUFITDtBQUtBL0csSUFBRSxDQUFDNkIsU0FBSCxZQUFpQlcsTUFBTSxDQUFDSyxhQUF4QixnQkFBa0RxRCxVQUFsRCxHQUNLYyxLQURMLENBQ1csSUFEWCxFQUVLbkIsUUFGTCxDQUVjLElBRmQsRUFHS3BFLElBSEwsQ0FHVSxTQUhWLEVBR3FCa0YsY0FIckIsRUFJS00sRUFKTCxDQUlRLEtBSlIsRUFJZUMsZ0RBSmYsRUFLS0gsSUFMTDtBQU1IOztBQUVELFNBQVNTLFlBQVQsQ0FBc0JsQixFQUF0QixFQUEwQkcsS0FBMUIsRUFBaUM7QUFDN0IsTUFBSUgsRUFBRSxLQUFLLEtBQVgsRUFBa0I7QUFDZEUsa0JBQWMsQ0FBQ0MsS0FBRCxDQUFkO0FBQ0gsR0FGRCxNQUVPO0FBQ0hjLHNCQUFrQixDQUFDZCxLQUFELENBQWxCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTZ0IsV0FBVCxHQUF1QjtBQUNuQixNQUFNQyxNQUFNLEdBQUcxSCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxJQUFWLENBQWY7QUFBQSxNQUNJMEgsT0FBTyxHQUFJcEMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxXQUF6QixHQUF1QyxHQUR0RDtBQUFBLE1BRUlhLEVBQUUsR0FBR29CLE1BQU0sQ0FBQ2pHLElBQVAsQ0FBWSxpQkFBWixDQUZUO0FBQUEsTUFHSW1HLGFBQWEsR0FBRzVILEVBQUUsQ0FBQ0MsTUFBSCxZQUFjcUcsRUFBZCxZQUhwQjtBQUFBLE1BSUl1QixtQkFBbUIsR0FBR0gsTUFBTSxDQUFDcEQsT0FBUCxDQUFlMkIsWUFBZixDQUoxQjtBQU1BakcsSUFBRSxDQUFDNkIsU0FBSCxDQUFhLGlCQUFiLEVBQWdDeUMsT0FBaEMsQ0FBd0MyQixZQUF4QyxFQUFzRCxJQUF0RDtBQUNBakcsSUFBRSxDQUFDNkIsU0FBSCxDQUFhLGlCQUFiLEVBQWdDeUMsT0FBaEMsQ0FBd0MwQixhQUF4QyxFQUF1RCxJQUF2RDtBQUVBSyxpQkFBZSxDQUFDeUIsTUFBTSxDQUFDQyxJQUFQLENBQVluQyxNQUFaLEVBQW9Cb0MsTUFBcEIsQ0FBMkIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsSUFBSTNCLEVBQVQ7QUFBQSxHQUE1QixFQUF5QyxDQUF6QyxDQUFELENBQWY7O0FBRUEsTUFBSXVCLG1CQUFKLEVBQXlCO0FBQ3JCeEIsbUJBQWUsQ0FBQ0MsRUFBRCxDQUFmO0FBQ0gsR0FGRCxNQUVPO0FBQ0hvQixVQUFNLENBQUNwRCxPQUFQLENBQWUyQixZQUFmLEVBQTZCLElBQTdCO0FBQ0EyQixpQkFBYSxDQUFDdEQsT0FBZCxDQUFzQjBCLGFBQXRCLEVBQXFDLElBQXJDO0FBQ0FLLG1CQUFlLENBQUNDLEVBQUQsRUFBSyxJQUFMLENBQWY7QUFDSDs7QUFFRDRCLFdBQVMsQ0FBRTVCLEVBQUUsS0FBSyxLQUFQLElBQWdCLENBQUN1QixtQkFBbkIsQ0FBVDs7QUFFQSxNQUFJLENBQUNBLG1CQUFELElBQXdCRixPQUE1QixFQUFxQztBQUNqQ0gsZ0JBQVksQ0FBQ2xCLEVBQUQsQ0FBWjtBQUNILEdBRkQsTUFFTyxJQUFJcUIsT0FBSixFQUFhO0FBQ2hCSCxnQkFBWSxDQUFDbEIsRUFBRCxFQUFLLElBQUwsQ0FBWjtBQUNIO0FBQ0o7O0FBRUQsU0FBUzRCLFNBQVQsQ0FBbUIxRSxHQUFuQixFQUF3QjtBQUNwQixNQUFNMkUsQ0FBQyxHQUFHM0UsR0FBRyxHQUFHMkMsU0FBSCxHQUFlQyxjQUE1QjtBQUVBcEcsSUFBRSxDQUFDQyxNQUFILENBQVUsVUFBVixFQUFzQmlHLFVBQXRCLEdBQ0tMLFFBREwsQ0FDYyxHQURkLEVBRUtwRSxJQUZMLENBRVUsUUFGVixFQUVvQjBHLENBQUMsR0FBRyxFQUZ4QjtBQUdIOztBQUVNLFNBQVM3QyxlQUFULENBQXlCOEMsS0FBekIsRUFBZ0N0SCxTQUFoQyxFQUEyQ3VILFNBQTNDLEVBQXNEQyxLQUF0RCxFQUE2RDtBQUNoRSxNQUFNQyxJQUFJLEdBQUdwSCxJQUFJLENBQUNxSCxLQUFMLENBQVdKLEtBQUssR0FBR0ssd0RBQW5CLENBQWI7QUFBQSxNQUNJQyxTQUFTLEdBQUdOLEtBQUssR0FBR0ssd0RBRHhCO0FBQUEsTUFFSUUsT0FBTyxHQUFHQywwREFBWSxDQUFDQyxNQUFiLENBQW9CbkUsQ0FBcEIsR0FBeUJrRSwwREFBWSxDQUFDeEksTUFBYixHQUFzQixDQUY3RDtBQUFBLE1BR0kwSSxjQUFjLEdBQUlQLElBQUksR0FBR0ssMERBQVksQ0FBQ0MsTUFBYixDQUFvQm5FLENBQTVCLEdBQWlDaUUsT0FBTyxHQUFHLENBSGhFO0FBQUEsTUFJSUksbUJBQW1CLEdBQUlILDBEQUFZLENBQUN4SSxNQUFiLEdBQXNCLENBQXZCLEdBQTRCdUksT0FBTyxHQUFHLENBSmhFO0FBQUEsTUFLSUssYUFBYSxHQUFHRixjQUFjLEdBQUdDLG1CQUxyQztBQUFBLE1BTUlFLFNBQVMsR0FBR1gsS0FBSyxJQUFJLE1BTnpCO0FBUUEsTUFBSVksWUFBWSxHQUFHcEksU0FBUyxDQUFDVSxNQUFWLENBQWlCLEdBQWpCLEVBQ2RDLElBRGMsQ0FDVCxrQkFEUyxFQUNXdUgsYUFEWCxFQUVkMUUsT0FGYyxDQUVOK0QsU0FGTSxFQUVLLElBRkwsQ0FBbkI7QUFJQWEsY0FBWSxDQUFDekgsSUFBYixDQUFrQixTQUFsQixFQUE2QixDQUE3QjtBQUVBeUgsY0FBWSxDQUFDMUgsTUFBYixDQUFvQixNQUFwQixFQUNLQyxJQURMLENBQ1UsT0FEVixFQUNtQmdILHdEQUFVLEdBQUdHLDBEQUFZLENBQUNDLE1BQWIsQ0FBb0JwRSxDQURwRCxFQUVLaEQsSUFGTCxDQUVVLFFBRlYsRUFFb0JxSCxjQUZwQixFQUdLckgsSUFITCxDQUdVLE1BSFYsRUFHa0J3SCxTQUhsQixFQUlLeEgsSUFKTCxDQUlVLFNBSlYsRUFJcUIsR0FKckI7QUFNQXlILGNBQVksQ0FBQzFILE1BQWIsQ0FBb0IsTUFBcEIsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUJpSCxTQUFTLEdBQUdFLDBEQUFZLENBQUNDLE1BQWIsQ0FBb0JwRSxDQURuRCxFQUVLaEQsSUFGTCxDQUVVLEdBRlYsRUFFZXFILGNBRmYsRUFHS3JILElBSEwsQ0FHVSxRQUhWLEVBR29Cc0gsbUJBSHBCLEVBSUt0SCxJQUpMLENBSVUsTUFKVixFQUlrQndILFNBSmxCLEVBS0t4SCxJQUxMLENBS1UsU0FMVixFQUtxQixHQUxyQjtBQU9BLFNBQU95SCxZQUFQO0FBQ0g7QUFFTSxTQUFTeEQsYUFBVCxDQUF1QlksRUFBdkIsRUFBMkI2QyxLQUEzQixFQUFrQ0MsRUFBbEMsRUFBc0NsRSxPQUF0QyxFQUErQztBQUNsRDFDLFFBQU0sR0FBRzBDLE9BQU8sSUFBSTFDLE1BQXBCO0FBQ0FvRCxRQUFNLENBQUNVLEVBQUQsQ0FBTixHQUFhNkMsS0FBYjtBQUNBLE1BQU1FLENBQUMsR0FBR0QsRUFBVjs7QUFFQSxNQUFJQyxDQUFKLEVBQU87QUFDSGxELGFBQVMsR0FBR2tELENBQUMsR0FBRyxHQUFoQjtBQUNILEdBRkQsTUFFTyxJQUFJLENBQUNqRCxjQUFMLEVBQXFCO0FBQ3hCQSxrQkFBYyxHQUFHcEcsRUFBRSxDQUFDQyxNQUFILENBQVUsaUJBQVYsRUFBNkJxSixJQUE3QixHQUFvQ0MscUJBQXBDLEdBQTREL0UsTUFBN0U7QUFDSDtBQUNKO0FBRU0sU0FBU2dGLGNBQVQsR0FBMEI7QUFDN0J4SixJQUFFLENBQUM2QixTQUFILENBQWEsVUFBYixFQUF5QnlDLE9BQXpCLENBQWlDLGNBQWpDLEVBQWlELElBQWpEO0FBQ0F3RCxRQUFNLENBQUNDLElBQVAsQ0FBWW5DLE1BQVosRUFBb0I2RCxPQUFwQixDQUE0QnBELGVBQTVCO0FBQ0FyRyxJQUFFLENBQUM2QixTQUFILENBQWEsaUJBQWIsRUFBZ0N5QyxPQUFoQyxDQUF3QzJCLFlBQXhDLEVBQXNELElBQXREO0FBQ0FqRyxJQUFFLENBQUM2QixTQUFILENBQWEsaUJBQWIsRUFBZ0N5QyxPQUFoQyxDQUF3QzBCLGFBQXhDLEVBQXVELElBQXZEO0FBQ0g7QUFFTSxTQUFTMEQsYUFBVCxHQUF5QjtBQUM1QkMsWUFBVSxDQUFDLFlBQU07QUFDYjNKLE1BQUUsQ0FBQzZCLFNBQUgsQ0FBYSxlQUFiLEVBQ0t5QyxPQURMLENBQ2EsY0FEYixFQUM2QixJQUQ3QjtBQUVILEdBSFMsRUFHUCxHQUhPLENBQVY7QUFJSDtBQUVEdEUsRUFBRSxDQUFDNkIsU0FBSCxDQUFhLGlCQUFiLEVBQWdDb0YsRUFBaEMsQ0FBbUMsT0FBbkMsRUFBNENRLFdBQTVDLEU7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNekgsRUFBRSxHQUFHO0FBQUVDLFFBQU0sRUFBTkEsbURBQUY7QUFBVTRCLFdBQVMsRUFBVEEsc0RBQVY7QUFBcUI4QixNQUFJLEVBQUpBLDZDQUFJQTtBQUF6QixDQUFYO0FBRUEsSUFBSWlHLFlBQUo7QUFBQSxJQUNJcEgsTUFBTSxHQUFHLEVBRGI7O0FBR0EsU0FBUzRCLFdBQVQsQ0FBcUI3QyxDQUFyQixFQUF3QjtBQUNwQixNQUFNOEMsZUFBZSxHQUFHOUMsQ0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUNuQjhDLE9BRG1CLFdBQ1I5QixNQUFNLENBQUNLLGFBREMsZ0JBQ3lCLElBRHpCLEVBRW5CcEIsSUFGbUIsQ0FFZCxTQUZjLEVBRUgsQ0FGRyxDQUF4QjtBQUFBLE1BR0lvQixhQUFhLEdBQUdMLE1BQU0sQ0FBQ0ssYUFIM0I7QUFBQSxNQUlJMEIsS0FBSyxHQUFHLENBQUMsRUFKYjtBQUFBLE1BS0k3QixnQkFBZ0IsR0FBR0YsTUFBTSxDQUFDRSxnQkFBUCxJQUEyQixDQUxsRDtBQUFBLE1BTUk4QixNQUFNLEdBQUdMLE1BQU0sQ0FBQ3lGLFlBQVksQ0FBQ25JLElBQWIsQ0FBa0Isa0JBQWxCLENBQUQsQ0FObkI7QUFBQSxNQU9Ja0MsSUFBSSxHQUFHM0QsRUFBRSxDQUFDMkQsSUFBSCxHQUNGYyxDQURFLENBQ0EsVUFBVWhFLENBQVYsRUFBYTtBQUFFLFdBQU9BLENBQUMsQ0FBQ2dFLENBQVQ7QUFBYSxHQUQ1QixFQUVGQyxDQUZFLENBRUEsVUFBVWpFLENBQVYsRUFBYTtBQUFFLFdBQU9BLENBQUMsQ0FBQ2lFLENBQVQ7QUFBYSxHQUY1QixDQVBYO0FBQUEsTUFVSUMsUUFBUSxHQUFHLENBQ1A7QUFBRUYsS0FBQyxFQUFFRixLQUFLLEdBQUcsRUFBYjtBQUFpQkcsS0FBQyxFQUFFO0FBQXBCLEdBRE8sRUFFUDtBQUFFRCxLQUFDLEVBQUVGLEtBQUssR0FBRyxFQUFiO0FBQWlCRyxLQUFDLEVBQUU7QUFBcEIsR0FGTyxFQUdQO0FBQUVELEtBQUMsRUFBRUYsS0FBSyxHQUFHLEVBQWI7QUFBaUJHLEtBQUMsRUFBRUY7QUFBcEIsR0FITyxFQUlQO0FBQUVDLEtBQUMsRUFBRUYsS0FBSyxHQUFHLEVBQWI7QUFBaUJHLEtBQUMsRUFBRUY7QUFBcEIsR0FKTyxDQVZmO0FBQUEsTUFnQklyQyxJQUFJLEdBQUdrQyxlQUFlLENBQUM3QyxNQUFoQixDQUF1QixNQUF2QixFQUNGOEMsT0FERSxDQUNNLG1CQUROLEVBQzJCLElBRDNCLEVBRUY3QyxJQUZFLENBRUcsTUFGSCxFQUVXWSw4REFBTSxDQUFDQyxrQkFGbEIsRUFHRmIsSUFIRSxDQUdHLGFBSEgsRUFHa0IsS0FIbEIsRUFJRkEsSUFKRSxDQUlHLEdBSkgsRUFJUSxDQUpSLEVBS0ZBLElBTEUsQ0FLRyxHQUxILEVBS1EsQ0FBQyxFQUxULEVBTUZPLEtBTkUsQ0FNSSxXQU5KLEVBTWlCLEVBTmpCLENBaEJYO0FBd0JBcUMsaUJBQWUsQ0FBQzdDLE1BQWhCLENBQXVCLE1BQXZCLEVBQ0tDLElBREwsQ0FDVSxHQURWLEVBQ2VrQyxJQUFJLENBQUNnQixRQUFELENBRG5CLEVBRUtsRCxJQUZMLENBRVUsTUFGVixFQUVrQixNQUZsQixFQUdLQSxJQUhMLENBR1UsUUFIVixFQUdvQixNQUhwQixFQUlLQSxJQUpMLENBSVUsY0FKVixFQUkwQixDQUoxQjtBQU1BVSxNQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0tXLElBREwsQ0FDVSx1QkFBZ0JVLGFBQWEsQ0FBQ2dILE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0JDLFdBQXhCLEVBQWhCLFNBQXdEakgsYUFBYSxDQUFDb0IsS0FBZCxDQUFvQixDQUFwQixDQUF4RCxDQURWLEVBRUtqQyxLQUZMLENBRVcsYUFGWCxFQUUwQixLQUYxQixFQUdLUCxJQUhMLENBR1UsR0FIVixFQUdlOEMsS0FIZixFQUlLOUMsSUFKTCxDQUlVLElBSlYsRUFJZ0IsQ0FKaEIsRUFLS0EsSUFMTCxDQUtVLElBTFYsRUFLZ0IrQyxNQUFNLEdBQUcsQ0FMekI7QUFPQXJDLE1BQUksQ0FBQ1gsTUFBTCxDQUFZLE9BQVosRUFDS1csSUFETCxDQUNVeUMsNkRBQWMsQ0FBQ2xDLGdCQUFELENBRHhCLEVBRUtqQixJQUZMLENBRVUsR0FGVixFQUVlOEMsS0FGZixFQUdLOUMsSUFITCxDQUdVLElBSFYsRUFHZ0IsQ0FIaEIsRUFJS0EsSUFKTCxDQUlVLElBSlYsRUFJZ0IsRUFKaEI7QUFLSDs7QUFFTSxTQUFTc0ksa0JBQVQsQ0FBNEI3RSxPQUE1QixFQUFxQztBQUN4QzFDLFFBQU0sR0FBRzBDLE9BQU8sSUFBSTFDLE1BQXBCO0FBRUEsTUFBTTJDLEdBQUcsR0FBR0MsaUVBQWtCLEVBQTlCO0FBQUEsTUFDSTRFLE9BQU8sR0FBRyxVQURkO0FBQUEsTUFFSUMsWUFBWSxHQUFHOUksSUFBSSxDQUFDK0ksSUFBTCxDQUFVMUgsTUFBTSxDQUFDRSxnQkFBUCxHQUEwQnNILE9BQXBDLENBRm5CO0FBSUFKLGNBQVksR0FBR3RFLHVFQUFlLENBQUMyRSxZQUFELEVBQWU5RSxHQUFHLENBQUNsRixNQUFKLENBQVcsaUJBQVgsQ0FBZixZQUFpRHVDLE1BQU0sQ0FBQzJILGdCQUF4RCxhQUFrRjNILE1BQU0sQ0FBQ1MsZUFBekYsQ0FBOUI7O0FBRUEsTUFBSXNDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsV0FBekIsR0FBdUMsR0FBM0MsRUFBZ0Q7QUFDNUNyQixlQUFXLENBQUN3RixZQUFELENBQVg7QUFDSDs7QUFFRGxFLHVFQUFhLENBQUNsRCxNQUFNLENBQUNLLGFBQVIsRUFBdUIrRyxZQUF2QixFQUFxQyxJQUFyQyxFQUEyQ3BILE1BQTNDLENBQWI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUN2RUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTW9HLFlBQVksR0FBRztBQUN4QkMsUUFBTSxFQUFFO0FBQ0pwRSxLQUFDLEVBQUUsQ0FEQztBQUVKQyxLQUFDLEVBQUU7QUFGQyxHQURnQjtBQUt4QnRFLFFBQU0sRUFBRTtBQUxnQixDQUFyQjtBQVFBLElBQUlxSSxVQUFKO0FBRUEsU0FBUzJCLGFBQVQsR0FBeUI7QUFDNUIsTUFBTUMsWUFBWSxHQUFHdEYsd0RBQVUsR0FBRzZELFlBQVksQ0FBQ3hJLE1BQS9DO0FBRUFxSSxZQUFVLEdBQUd0SCxJQUFJLENBQUNxSCxLQUFMLENBQVc2QixZQUFZLEdBQUd6QixZQUFZLENBQUNDLE1BQWIsQ0FBb0JwRSxDQUE5QyxDQUFiO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXpFLEVBQUUsR0FBRztBQUFFQyxRQUFNLEVBQU5BLG1EQUFGO0FBQVU0QixXQUFTLEVBQVRBLHNEQUFTQTtBQUFuQixDQUFYO0FBRUEsSUFBSXlJLFFBQUosRUFDSUMsYUFESixFQUVJL0gsTUFGSjtBQUlPLFNBQVNrQixTQUFULENBQW1Cd0IsT0FBbkIsRUFBNEI7QUFDL0JsRixJQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCNEIsU0FBbEIsQ0FBNEIsR0FBNUIsRUFBaUMySSxNQUFqQztBQUNBaEksUUFBTSxHQUFHMEMsT0FBTyxJQUFJMUMsTUFBcEI7QUFFQWlJLHFFQUFhO0FBQ2JMLHFFQUFhO0FBRWJoRixtRUFBa0IsQ0FBQyxHQUFELEVBQU1MLHdEQUFOLEVBQWtCdkMsTUFBTSxDQUFDYSxrQkFBUCxXQUFsQixDQUFsQjtBQUVBcUgsc0VBQW9CLENBQUNsSSxNQUFELENBQXBCO0FBQ0g7O0FBRUQsU0FBU21JLFdBQVQsR0FBdUI7QUFDbkJGLHFFQUFhO0FBQ2JMLHFFQUFhO0FBQ2JaLHdFQUFjO0FBQ2R4SixJQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQXNCd0IsSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0NzRCx3REFBcEM7QUFDQTZGLDhEQUFTLENBQUNwSSxNQUFELENBQVQ7QUFDSDs7QUFFRHFJLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBWTtBQUMxQyxNQUFJUixRQUFKLEVBQWM7QUFDVlMsZ0JBQVksQ0FBQ1QsUUFBRCxDQUFaO0FBQ0g7O0FBRUQsTUFBR0MsYUFBYSxLQUFLTSxNQUFNLENBQUNHLFVBQTVCLEVBQXVDO0FBQ25DO0FBQ0g7O0FBQ0RULGVBQWEsR0FBR00sTUFBTSxDQUFDRyxVQUF2QjtBQUNBVixVQUFRLEdBQUdYLFVBQVUsQ0FBQ2dCLFdBQUQsRUFBYyxHQUFkLENBQXJCO0FBQ0gsQ0FWRCxFOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTNLLEVBQUUsR0FBRztBQUFFQyxRQUFNLEVBQU5BLG1EQUFGO0FBQVU0QixXQUFTLEVBQVRBLHNEQUFTQTtBQUFuQixDQUFYO0FBQ0EsSUFBTW9KLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU03SyxNQUFNLEdBQUcsRUFBZjtBQUVBLElBQUkrRSxHQUFKO0FBQVMsSUFBSStGLFFBQUo7QUFBYyxJQUFJbEIsT0FBSjtBQUFhLElBQUltQixXQUFKO0FBQWlCLElBQ3BEM0ksTUFBTSxHQUFHLEVBRDJDOztBQUdyRCxTQUFTNEksV0FBVCxHQUF1QjtBQUN0QixNQUFNN0osQ0FBQyxHQUFHdkIsRUFBRSxDQUFDQyxNQUFILENBQVUsb0JBQVYsQ0FBVjtBQUNBLE1BQU00RixRQUFRLEdBQUcsSUFBakI7QUFDQSxNQUFNd0YsQ0FBQyxHQUFHLEdBQVY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFFQVYsOERBQVMsQ0FBQ3BJLE1BQUQsQ0FBVDtBQUVBK0ksOERBQWEsQ0FBQ0osV0FBRCxFQUFjLElBQWQsQ0FBYjtBQUNBSSw4REFBYSxDQUFDdkIsT0FBRCxFQUFVLEdBQVYsQ0FBYjtBQUVBekksR0FBQyxDQUFDMkUsVUFBRixHQUNFTCxRQURGLENBQ1dBLFFBRFgsRUFFRXBFLElBRkYsQ0FFTyxXQUZQLEVBRW9CQyx5REFBVSxDQUFDNEosT0FBRCxFQUFVLEVBQVYsQ0FGOUI7QUFJQS9KLEdBQUMsQ0FBQ3RCLE1BQUYsQ0FBUyxRQUFULEVBQ0V3QixJQURGLENBQ08sU0FEUCxFQUNrQixDQURsQixFQUVFeUUsVUFGRixHQUdFTCxRQUhGLENBR1dBLFFBSFgsRUFJRXBFLElBSkYsQ0FJTyxHQUpQLEVBSVksQ0FKWixFQUtFQSxJQUxGLENBS08sSUFMUCxFQUthLENBTGIsRUFNRUEsSUFORixDQU1PLElBTlAsRUFNYSxDQU5iLEVBT0VzRixJQVBGO0FBU0F4RixHQUFDLENBQUNDLE1BQUYsQ0FBUyxNQUFULEVBQ0VXLElBREYsQ0FDTyxjQURQLEVBRUVWLElBRkYsQ0FFTyxNQUZQLEVBRWVZLDhEQUFNLENBQUNDLGtCQUZ0QixFQUdFYixJQUhGLENBR08sU0FIUCxFQUdrQixDQUhsQixFQUlFTyxLQUpGLENBSVEsV0FKUixFQUlxQixFQUpyQixFQUtFUCxJQUxGLENBS08sR0FMUCxFQUtZLENBTFosRUFNRUEsSUFORixDQU1PLEdBTlAsRUFNWSxDQU5aLEVBT0V5RSxVQVBGLEdBUUVjLEtBUkYsQ0FRUW5CLFFBQVEsR0FBRyxHQVJuQixFQVNFQSxRQVRGLENBU1dBLFFBQVEsR0FBRyxDQVR0QixFQVVFcEUsSUFWRixDQVVPLFNBVlAsRUFVa0IsQ0FWbEIsRUFXRXNGLElBWEY7QUFhQXhGLEdBQUMsQ0FBQ0MsTUFBRixDQUFTLE9BQVQsRUFDRUMsSUFERixDQUNPLFFBRFAsRUFDaUIsRUFEakIsRUFFRUEsSUFGRixDQUVPLE9BRlAsRUFFZ0IsRUFGaEIsRUFHRUEsSUFIRixDQUdPLEdBSFAsRUFHWSxFQUhaLEVBSUVBLElBSkYsQ0FJTyxHQUpQLEVBSVksQ0FBQyxFQUpiLEVBS0VBLElBTEYsQ0FLTyxTQUxQLEVBS2tCLENBTGxCLEVBTUVBLElBTkYsQ0FNTyxhQU5QLEVBTXNCLGlCQU50QixFQU9FQSxJQVBGLENBT08sWUFQUCwwQ0FPc0RlLE1BQU0sQ0FBQ0MsWUFQN0QsR0FRRWhCLElBUkYsQ0FRTyxPQVJQLEVBUWdCLGdCQVJoQixFQVNFd0YsRUFURixDQVNLLE9BVEwsRUFTY3VFLHVEQVRkLEVBVUV0RixVQVZGLEdBV0VjLEtBWEYsQ0FXUW5CLFFBQVEsR0FBRyxHQVhuQixFQVlFQSxRQVpGLENBWVdBLFFBQVEsR0FBRyxDQVp0QixFQWFFcEUsSUFiRixDQWFPLFNBYlAsRUFha0IsQ0FibEIsRUFjRXNGLElBZEY7QUFlQTBFLHFFQUFrQjtBQUNsQjs7QUFFRCxTQUFTQyxPQUFULEdBQW1CO0FBQ2xCLE1BQU03RixRQUFRLEdBQUcsR0FBakI7QUFFQXNGLGFBQVcsR0FBRyxLQUFLRCxRQUFMLENBQWMxSixNQUFkLENBQXFCLE1BQXJCLEVBQ1pDLElBRFksQ0FDUCxHQURPLEVBQ0YsRUFERSxFQUVaQSxJQUZZLENBRVAsU0FGTyxFQUVJLENBRkosRUFHWkEsSUFIWSxDQUdQLFdBSE8sRUFHTUMseURBQVUsQ0FBQ3RCLE1BQU0sR0FBRyxDQUFULEdBQWEsRUFBZCxFQUFrQixDQUFsQixDQUhoQixFQUlacUIsSUFKWSxDQUlQLE1BSk8sRUFJQ1ksOERBQU0sQ0FBQ0Msa0JBSlIsQ0FBZDtBQU1BNkksYUFBVyxDQUFDM0osTUFBWixDQUFtQixPQUFuQixFQUNFQyxJQURGLENBQ08sR0FEUCxFQUNZLENBRFosRUFFRUEsSUFGRixDQUVPLFdBRlAsRUFFb0IsRUFGcEIsRUFHRVUsSUFIRixDQUdPLGtCQUhQO0FBS0FnSixhQUFXLENBQUMzSixNQUFaLENBQW1CLE9BQW5CLEVBQ0VDLElBREYsQ0FDTyxHQURQLEVBQ1ksQ0FEWixFQUVFQSxJQUZGLENBRU8sSUFGUCxFQUVhLEVBRmIsRUFHRUEsSUFIRixDQUdPLFdBSFAsRUFHb0IsRUFIcEIsRUFJRUEsSUFKRixDQUlPLGFBSlAsRUFJc0IsS0FKdEIsRUFLRVUsSUFMRixDQUtPLFNBTFA7QUFPQWdKLGFBQVcsQ0FBQzNKLE1BQVosQ0FBbUIsT0FBbkIsRUFDRUMsSUFERixDQUNPLFdBRFAsRUFDb0IsRUFEcEIsRUFFRVUsSUFGRixDQUVPLGFBRlA7QUFJQWdKLGFBQVcsQ0FBQzNKLE1BQVosQ0FBbUIsT0FBbkIsRUFDRUMsSUFERixDQUNPLEdBRFAsRUFDWSxDQURaLEVBRUVBLElBRkYsQ0FFTyxXQUZQLEVBRW9CLEVBRnBCLEVBR0VBLElBSEYsQ0FHTyxhQUhQLEVBR3NCLEtBSHRCLEVBSUVBLElBSkYsQ0FJTyxJQUpQLEVBSWEsRUFKYixFQUtFVSxJQUxGLENBS08scUJBTFA7QUFPQTZILFNBQU8sR0FBRyxLQUFLa0IsUUFBTCxDQUFjMUosTUFBZCxDQUFxQixNQUFyQixFQUNSVyxJQURRLENBQ0gsZ0JBREcsRUFFUlYsSUFGUSxDQUVILGFBRkcsRUFFWSxRQUZaLEVBR1JBLElBSFEsQ0FHSCxXQUhHLEVBR1UsRUFIVixFQUlSQSxJQUpRLENBSUgsR0FKRyxFQUlFLEtBQUtyQixNQUpQLEVBS1JxQixJQUxRLENBS0gsR0FMRyxFQUtFLEtBQUtyQixNQUFMLEdBQWMsQ0FMaEIsRUFNUnFCLElBTlEsQ0FNSCxNQU5HLEVBTUssT0FOTCxFQU9SQSxJQVBRLENBT0gsU0FQRyxFQU9RLENBUFIsQ0FBVjtBQVNBLE9BQUt5SixRQUFMLENBQWNySixTQUFkLENBQXdCLE1BQXhCLEVBQ0VxRSxVQURGLEdBRUVMLFFBRkYsQ0FFVyxHQUZYLEVBR0VwRSxJQUhGLENBR08sU0FIUCxFQUdrQixDQUhsQixFQUlFc0YsSUFKRjtBQU1BNEMsWUFBVSxDQUFDeUIsV0FBRCxFQUFjLElBQWQsQ0FBVjtBQUNBOztBQUVELFNBQVNPLE9BQVQsR0FBbUI7QUFDbEIsTUFBTUMsUUFBUSxHQUFHcEosTUFBTSxDQUFDVyxZQUF4QjtBQUNBK0gsVUFBUSxDQUFDMUosTUFBVCxDQUFnQixRQUFoQixFQUNFQyxJQURGLENBQ08sSUFEUCxFQUNhckIsTUFEYixFQUVFcUIsSUFGRixDQUVPLElBRlAsRUFFYXJCLE1BRmIsRUFHRXFCLElBSEYsQ0FHTyxHQUhQLEVBR1ksQ0FIWixFQUlFQSxJQUpGLENBSU8sTUFKUCxFQUllbUssUUFKZixFQUtFMUYsVUFMRixHQU1FTCxRQU5GLENBTVcsSUFOWCxFQU9FcEUsSUFQRixDQU9PLEdBUFAsRUFPWXJCLE1BUFosRUFRRTZHLEVBUkYsQ0FRSyxLQVJMLEVBUVl5RSxPQUFPLENBQUNHLElBQVIsQ0FBYTtBQUN2QlgsWUFBUSxFQUFSQSxRQUR1QjtBQUV2QjlLLFVBQU0sRUFBTkE7QUFGdUIsR0FBYixDQVJaLEVBWUUyRyxJQVpGO0FBYUEwRSxxRUFBa0I7QUFDbEI7O0FBRU0sU0FBU2Ysb0JBQVQsQ0FBOEJ4RixPQUE5QixFQUF1QztBQUM3QyxNQUFNNEcsTUFBTSxHQUFHL0csd0RBQVUsR0FBR2tHLFVBQWIsR0FBMEIsQ0FBMUIsR0FBK0JsRyx3REFBVSxHQUFHLENBQWQsR0FBb0JrRyxVQUFVLEdBQUcsQ0FBOUU7QUFDQSxNQUFNYyxjQUFjLEdBQUdoSCx3REFBVSxHQUFHLEdBQWIsR0FBbUIsSUFBbkIsR0FBMEIsQ0FBakQ7QUFFQXZDLFFBQU0sR0FBRzBDLE9BQU8sSUFBSTFDLE1BQXBCO0FBQ0EyQyxLQUFHLEdBQUdDLGlFQUFrQixFQUF4QixFQUNBOEYsUUFBUSxHQUFHL0YsR0FBRyxDQUFDM0QsTUFBSixDQUFXLEdBQVgsRUFDVDhDLE9BRFMsQ0FDRCxtQkFEQyxFQUNvQixJQURwQixFQUVUN0MsSUFGUyxDQUVKLFdBRkksWUFFWUMseURBQVUsQ0FBQ29LLE1BQUQsRUFBUyxFQUFULENBRnRCLG9CQUU0Q0MsY0FGNUMsT0FEWDtBQUtBSixTQUFPO0FBQ1AsQzs7Ozs7Ozs7Ozs7O0FDckpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0zTCxFQUFFLEdBQUc7QUFBRUMsUUFBTSxFQUFOQSxtREFBRjtBQUFVNEIsV0FBUyxFQUFUQSxzREFBU0E7QUFBbkIsQ0FBWDtBQUVBLElBQUlzRCxHQUFKO0FBQUEsSUFDSTZHLFFBREo7QUFBQSxJQUVJeEosTUFBTSxHQUFHLEVBRmI7O0FBSUEsU0FBU3lKLFVBQVQsQ0FBb0JuTCxTQUFwQixFQUErQjJELENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQztBQUNqQyxNQUFNNEQsS0FBSyxHQUFHOUYsTUFBTSxDQUFDVyxZQUFyQjtBQUVBckMsV0FBUyxDQUFDVSxNQUFWLENBQWlCLFFBQWpCLEVBQ0tDLElBREwsQ0FDVSxJQURWLEVBQ2dCZ0QsQ0FEaEIsRUFFS2hELElBRkwsQ0FFVSxJQUZWLEVBRWdCaUQsQ0FGaEIsRUFHS2pELElBSEwsQ0FHVSxHQUhWLEVBR2UsQ0FIZixFQUlLTyxLQUpMLENBSVcsTUFKWCxFQUltQnNHLEtBSm5CO0FBS0g7O0FBRUQsU0FBUzRELFNBQVQsR0FBcUI7QUFDakIsTUFBTUMsWUFBWSxHQUFHaEgsR0FBRyxDQUFDM0QsTUFBSixDQUFXLEdBQVgsRUFDaEI4QyxPQURnQixDQUNSLGdCQURRLEVBQ1UsSUFEVixFQUVoQjdDLElBRmdCLENBRVgsV0FGVyxFQUVFQyx5REFBVSxDQUFDLENBQUQsRUFBSSxFQUFKLENBRlosRUFHaEJGLE1BSGdCLENBR1QsR0FIUyxFQUloQjhDLE9BSmdCLENBSVIsZUFKUSxFQUlTLElBSlQsRUFLaEI3QyxJQUxnQixDQUtYLFNBTFcsRUFLQSxDQUxBLENBQXJCO0FBQUEsTUFNSTJLLFVBQVUsR0FBRyxVQU5qQjtBQVFBLE1BQUluSyxDQUFDLEdBQUcsQ0FBUjtBQUFBLE1BQ0lvSyxhQURKO0FBQUEsTUFFSUMsdUJBQXVCLEdBQUc5SixNQUFNLENBQUNRLGFBQVAsR0FBdUJvSixVQUZyRDtBQUFBLE1BR0kzSCxDQUFDLEdBQUdtRSwwREFBWSxDQUFDeEksTUFIckI7QUFBQSxNQUlJc0UsQ0FBQyxHQUFHLENBSlI7O0FBTUEsT0FBS3pDLENBQUwsRUFBUUEsQ0FBQyxHQUFHcUssdUJBQVosRUFBcUNySyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDZ0ssY0FBVSxDQUFDRSxZQUFELEVBQWUxSCxDQUFmLEVBQWtCQyxDQUFsQixDQUFWO0FBQ0FELEtBQUMsSUFBSW1FLDBEQUFZLENBQUNDLE1BQWIsQ0FBb0JwRSxDQUF6Qjs7QUFFQSxRQUFJLENBQUN4QyxDQUFDLEdBQUcsQ0FBTCxJQUFVd0csd0RBQVYsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUIvRCxPQUFDLElBQUlrRSwwREFBWSxDQUFDQyxNQUFiLENBQW9CbkUsQ0FBekI7QUFDQUQsT0FBQyxHQUFHbUUsMERBQVksQ0FBQ3hJLE1BQWpCO0FBQ0g7QUFDSjs7QUFFRCtMLGNBQVksQ0FBQ2pHLFVBQWIsR0FDS2MsS0FETCxDQUNXLElBRFgsRUFFS25CLFFBRkwsQ0FFYyxJQUZkLEVBR0twRSxJQUhMLENBR1UsU0FIVixFQUdxQixDQUhyQixFQUlLd0YsRUFKTCxDQUlRLEtBSlIsRUFJZXlDLDZEQUpmLEVBS0szQyxJQUxMO0FBT0FzRixlQUFhLEdBQUdyTSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxpQkFBVixFQUE2QnFKLElBQTdCLEdBQW9DQyxxQkFBcEMsR0FBNEQvRSxNQUE1RTtBQUVBMkgsY0FBWSxDQUFDMUssSUFBYixDQUFrQixrQkFBbEIsRUFBc0M0SyxhQUF0QztBQUVBMUMsWUFBVSxDQUFDLFlBQVU7QUFDakJ4RSxPQUFHLENBQUMxRCxJQUFKLENBQVMsUUFBVCxFQUFtQjRLLGFBQWEsR0FBRyxFQUFuQztBQUNILEdBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDs7QUFFTSxTQUFTekIsU0FBVCxDQUFtQjFGLE9BQW5CLEVBQTRCO0FBQy9CbEYsSUFBRSxDQUFDQyxNQUFILENBQVUsaUJBQVYsRUFBNkJ1SyxNQUE3QjtBQUNBaEksUUFBTSxHQUFHMEMsT0FBTyxJQUFJMUMsTUFBcEI7QUFDQTJDLEtBQUcsR0FBR0MsaUVBQWtCLEVBQXhCO0FBRUE4RyxXQUFTO0FBQ1RuQyw0RUFBa0IsQ0FBQ3ZILE1BQUQsQ0FBbEI7QUFDQXlDLDZEQUFPLENBQUN6QyxNQUFELENBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUMzRUQ7QUFBQTtBQUFBO0FBQU8sSUFBSXVDLFVBQUo7QUFFQSxTQUFTMEYsYUFBVCxHQUF5QjtBQUM1QjFGLFlBQVUsR0FBR1EsUUFBUSxDQUFDZ0gsY0FBVCxDQUF3QixLQUF4QixFQUErQmhELHFCQUEvQixHQUF1RGlELEtBQXBFO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNeE0sRUFBRSxHQUFHO0FBQUU2QixXQUFTLEVBQVRBLHNEQUFTQTtBQUFYLENBQVg7QUFFQSxJQUFJNEssT0FBTyxHQUFHLENBQWQ7QUFFTyxTQUFTdkYsT0FBVCxHQUFtQjtBQUN0QnVGLFNBQU8sSUFBSSxDQUFYO0FBRUFySCxtRUFBa0IsR0FBRzNELElBQXJCLENBQTBCLGVBQTFCLEVBQTJDZ0wsT0FBM0M7QUFDQXpNLElBQUUsQ0FBQzZCLFNBQUgsQ0FBYSxjQUFiLEVBQTZCSixJQUE3QixDQUFrQyxJQUFsQyxFQUF3QyxDQUF4QztBQUNILEM7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTXpCLEVBQUUsR0FBRztBQUFFQyxRQUFNLEVBQU5BLG1EQUFGO0FBQVU0QixXQUFTLEVBQVRBLHNEQUFTQTtBQUFuQixDQUFYO0FBRU8sU0FBU2MsZUFBVCxDQUF5QitKLEdBQXpCLEVBQThCL0ssSUFBOUIsRUFBb0M7QUFDdkMsTUFBSWdMLE1BQUo7QUFFQWhMLE1BQUksQ0FBQ2lMLEtBQUwsQ0FBVyxVQUFDQyxHQUFELEVBQVM7QUFDaEIsUUFBSUEsR0FBRyxDQUFDQyxRQUFKLElBQWdCSixHQUFwQixFQUF5QjtBQUNyQixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSEMsWUFBTSxHQUFHRSxHQUFHLENBQUNGLE1BQWI7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFTQSxTQUFPQSxNQUFQO0FBQ0g7QUFFTSxTQUFTSSxhQUFULENBQXVCQyxXQUF2QixFQUFvQztBQUN2QyxNQUFNQyxJQUFJLEdBQUdELFdBQVcsQ0FBQzFELElBQVosR0FBbUJDLHFCQUFuQixFQUFiO0FBRUEsU0FBTztBQUNMaUQsU0FBSyxFQUFFckwsSUFBSSxDQUFDK0ksSUFBTCxDQUFVK0MsSUFBSSxDQUFDVCxLQUFmLENBREY7QUFFTGhJLFVBQU0sRUFBRXJELElBQUksQ0FBQytJLElBQUwsQ0FBVStDLElBQUksQ0FBQ3pJLE1BQWYsQ0FGSDtBQUdMMEksU0FBSyxFQUFFL0wsSUFBSSxDQUFDK0ksSUFBTCxDQUFVK0MsSUFBSSxDQUFDQyxLQUFmLENBSEY7QUFJTEMsVUFBTSxFQUFFaE0sSUFBSSxDQUFDK0ksSUFBTCxDQUFVK0MsSUFBSSxDQUFDRSxNQUFmO0FBSkgsR0FBUDtBQU1IO0FBRU0sU0FBU3pMLFVBQVQsQ0FBb0IrQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEI7QUFDN0IsNkJBQW9CRCxDQUFwQixlQUEwQkMsQ0FBMUI7QUFDSDtBQUVNLFNBQVMwSSxZQUFULENBQXNCSixXQUF0QixFQUFtQztBQUN0QyxNQUFNSyxFQUFFLEdBQUcsUUFBWDtBQUNBLE1BQU1DLGlCQUFpQixHQUFHTixXQUFXLENBQUN2TCxJQUFaLENBQWlCLFdBQWpCLEVBQThCOEwsS0FBOUIsQ0FBb0NGLEVBQXBDLENBQTFCO0FBRUEsU0FBTztBQUNINUksS0FBQyxFQUFFTixNQUFNLENBQUNtSixpQkFBaUIsQ0FBQyxDQUFELENBQWxCLENBRE47QUFFSDVJLEtBQUMsRUFBRVAsTUFBTSxDQUFDbUosaUJBQWlCLENBQUMsQ0FBRCxDQUFsQjtBQUZOLEdBQVA7QUFJSDtBQUVNLFNBQVNsSSxrQkFBVCxDQUE0QlosTUFBNUIsRUFBb0NnSSxLQUFwQyxFQUEyQ25KLGtCQUEzQyxFQUErRDtBQUNsRSxNQUFNbUssR0FBRyxHQUFHeE4sRUFBRSxDQUFDQyxNQUFILENBQVUsTUFBVixDQUFaO0FBRUEsTUFBSWtGLEdBQUcsR0FBR3FJLEdBQUcsQ0FBQ3ZOLE1BQUosQ0FBVyxVQUFYLENBQVYsQ0FIa0UsQ0FLbEU7QUFDQTs7QUFFQSxNQUFJa0YsR0FBRyxDQUFDc0ksSUFBSixPQUFlLENBQW5CLEVBQXNCO0FBQ2xCakosVUFBTSxHQUFHQSxNQUFNLElBQUksR0FBbkI7QUFDQWdJLFNBQUssR0FBR0EsS0FBSyxJQUFJLElBQWpCLENBRmtCLENBSWxCOztBQUVBckgsT0FBRyxHQUFHcUksR0FBRyxDQUFDaE0sTUFBSixDQUFXLEtBQVgsRUFDRDhDLE9BREMsQ0FDTyxNQURQLEVBQ2UsSUFEZixFQUVEN0MsSUFGQyxDQUVJLGlCQUZKLEVBRXVCLG9CQUZ2QixFQUdEQSxJQUhDLENBR0ksUUFISixFQUdjK0MsTUFIZCxFQUlEL0MsSUFKQyxDQUlJLE9BSkosRUFJYStLLEtBSmIsQ0FBTjtBQUtILEdBWEQsTUFXTyxJQUFJaEksTUFBSixFQUFZO0FBQ2ZXLE9BQUcsQ0FBQzFELElBQUosQ0FBUyxRQUFULEVBQW1CK0MsTUFBbkI7QUFDSDs7QUFFRCxNQUFHbkIsa0JBQWtCLElBQUl5RSxNQUFNLENBQUNDLElBQVAsQ0FBWTFFLGtCQUFaLEVBQWdDcUssTUFBekQsRUFBZ0U7QUFDNUR2SSxPQUFHLENBQUMzRCxNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsYUFBOUIsRUFBNkNVLElBQTdDLENBQWtEa0Isa0JBQWtCLENBQUNFLElBQXJFO0FBQ0E0QixPQUFHLENBQUMxRCxJQUFKLENBQVMsa0JBQVQsRUFBNkIsYUFBN0I7QUFDSCxHQTFCaUUsQ0E0QmxFOzs7QUFFQSxTQUFPMEQsR0FBUDtBQUNIO0FBRU0sU0FBU3dJLGdCQUFULENBQTBCdEUsQ0FBMUIsRUFBNkI7QUFDaEMsTUFBTVcsT0FBTyxHQUFHLFVBQWhCO0FBRUEsb0JBQVc3SSxJQUFJLENBQUNpQixLQUFMLENBQVdpSCxDQUFDLEdBQUdXLE9BQUosR0FBYyxFQUF6QixJQUErQixFQUExQztBQUNIO0FBRU0sU0FBU3BGLGNBQVQsQ0FBd0J5RSxDQUF4QixFQUEyQjtBQUM5QixNQUFNdUUsUUFBUSxHQUFHLGFBQWpCO0FBQUEsTUFDSTVELE9BQU8sR0FBRyxVQURkO0FBQUEsTUFFSTZELE9BQU8sR0FBRyxPQUZkO0FBQUEsTUFHSUMsWUFBWSxHQUFJekUsQ0FBQyxHQUFHLENBQUwsR0FBVSxHQUFWLEdBQWdCLEVBSG5DO0FBS0EsTUFBSTBFLFVBQVUsR0FBR0YsT0FBakI7QUFBQSxNQUNJRyxNQUFNLEdBQUcsR0FEYjs7QUFHQSxNQUFJM0UsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNULFdBQU8sSUFBUDtBQUNIOztBQUVELE1BQUlsSSxJQUFJLENBQUNDLEdBQUwsQ0FBU2lJLENBQVQsS0FBZXVFLFFBQW5CLEVBQTZCO0FBQ3pCRyxjQUFVLEdBQUdILFFBQWI7QUFDQUksVUFBTSxHQUFHLEdBQVQ7QUFDSCxHQUhELE1BR08sSUFBSTdNLElBQUksQ0FBQ0MsR0FBTCxDQUFTaUksQ0FBVCxLQUFlVyxPQUFuQixFQUE0QjtBQUMvQitELGNBQVUsR0FBRy9ELE9BQWI7QUFDQWdFLFVBQU0sR0FBRyxHQUFUO0FBQ0g7O0FBRUQsbUJBQVVGLFlBQVYsY0FBMEIzTSxJQUFJLENBQUNpQixLQUFMLENBQVdqQixJQUFJLENBQUNDLEdBQUwsQ0FBU2lJLENBQVQsSUFBYzBFLFVBQWQsR0FBMkIsRUFBdEMsSUFBNEMsRUFBdEUsY0FBNEVDLE1BQTVFO0FBQ0g7QUFFTSxTQUFTQyxRQUFULENBQWtCOUwsSUFBbEIsRUFBd0IrTCxRQUF4QixFQUFrQztBQUNyQyxNQUFJQyxLQUFLLEdBQUdoTSxJQUFJLENBQUNBLElBQUwsR0FBWWlNLEtBQVosQ0FBa0IsS0FBbEIsRUFBeUJ4TSxPQUF6QixFQUFaO0FBQUEsTUFDSXlNLElBREo7QUFBQSxNQUVJMUssSUFBSSxHQUFHLEVBRlg7QUFBQSxNQUdJMkssVUFBVSxHQUFHLEdBSGpCO0FBQUEsTUFJSUMsS0FKSjtBQU1BQSxPQUFLLEdBQUdwTSxJQUFJLENBQUNBLElBQUwsQ0FBVSxJQUFWLEVBQ0hYLE1BREcsQ0FDSSxPQURKLEVBRUhDLElBRkcsQ0FFRSxHQUZGLEVBRU8sQ0FGUCxDQUFSOztBQUlBLFNBQU8wTSxLQUFLLENBQUNULE1BQU4sR0FBZSxDQUF0QixFQUF5QjtBQUNyQlcsUUFBSSxHQUFHRixLQUFLLENBQUNLLEdBQU4sRUFBUDtBQUNBN0ssUUFBSSxDQUFDOEssSUFBTCxDQUFVSixJQUFWO0FBQ0FFLFNBQUssQ0FBQ3BNLElBQU4sQ0FBV3dCLElBQUksQ0FBQytLLElBQUwsQ0FBVSxHQUFWLENBQVg7O0FBQ0EsUUFBSUgsS0FBSyxDQUFDakYsSUFBTixHQUFhcUYscUJBQWIsS0FBdUNULFFBQTNDLEVBQXFEO0FBQ2pEdkssVUFBSSxDQUFDNkssR0FBTDtBQUNBRCxXQUFLLENBQUNwTSxJQUFOLENBQVd3QixJQUFJLENBQUMrSyxJQUFMLENBQVUsR0FBVixDQUFYO0FBQ0EvSyxVQUFJLEdBQUcsQ0FBQzBLLElBQUQsQ0FBUDtBQUNBRSxXQUFLLEdBQUdwTSxJQUFJLENBQUNYLE1BQUwsQ0FBWSxPQUFaLEVBQ0hDLElBREcsQ0FDRSxHQURGLEVBQ08sQ0FEUCxFQUVIQSxJQUZHLENBRUUsSUFGRixFQUVRNk0sVUFBVSxHQUFHLElBRnJCLEVBR0huTSxJQUhHLENBR0VrTSxJQUhGLENBQVI7QUFJSDtBQUNKO0FBQ0o7QUFFTSxTQUFTTyxjQUFULEdBQTBCO0FBQzdCLE1BQU16SixHQUFHLEdBQUdDLGtCQUFrQixFQUE5QjtBQUFBLE1BQ0k0QyxNQUFNLEdBQUc3QyxHQUFHLENBQUMzRCxNQUFKLENBQVcsTUFBWCxFQUFtQkEsTUFBbkIsQ0FBMEIsUUFBMUIsRUFDSkMsSUFESSxDQUNDLElBREQsRUFDTyxPQURQLEVBRUpBLElBRkksQ0FFQyxRQUZELEVBRVcsR0FGWCxDQURiO0FBS0F1RyxRQUFNLENBQUN4RyxNQUFQLENBQWMsZ0JBQWQsRUFDS0MsSUFETCxDQUNVLElBRFYsRUFDZ0IsYUFEaEIsRUFFS0EsSUFGTCxDQUVVLGNBRlYsRUFFMEIsQ0FGMUIsRUFHS0EsSUFITCxDQUdVLFFBSFYsRUFHb0IsTUFIcEI7QUFLQXVHLFFBQU0sQ0FBQ3hHLE1BQVAsQ0FBYyxVQUFkLEVBQ0tDLElBREwsQ0FDVSxJQURWLEVBQ2dCLE1BRGhCLEVBRUtBLElBRkwsQ0FFVSxJQUZWLEVBRWdCLENBRmhCLEVBR0tBLElBSEwsQ0FHVSxJQUhWLEVBR2dCLENBSGhCLEVBSUtBLElBSkwsQ0FJVSxRQUpWLEVBSW9CLFlBSnBCO0FBTUEsTUFBTW9OLE9BQU8sR0FBRzdHLE1BQU0sQ0FBQ3hHLE1BQVAsQ0FBYyxTQUFkLENBQWhCO0FBRUFxTixTQUFPLENBQUNyTixNQUFSLENBQWUsYUFBZixFQUNLQyxJQURMLENBQ1UsSUFEVixFQUNnQixZQURoQjtBQUVBb04sU0FBTyxDQUFDck4sTUFBUixDQUFlLGFBQWYsRUFDS0MsSUFETCxDQUNVLElBRFYsRUFDZ0IsZUFEaEI7QUFFSDtBQUVNLFNBQVNxTixpQkFBVCxDQUEyQnpGLENBQTNCLEVBQThCMEYsU0FBOUIsRUFBeUM7QUFDNUMsTUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ1osV0FBT0MsUUFBUSxDQUFDM0YsQ0FBQyxHQUFHLEdBQUwsQ0FBUixHQUFvQixHQUEzQjtBQUNILEdBSDJDLENBSzVDOzs7QUFDQTRGLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLDBCQUFiO0FBQ0g7QUFFTSxTQUFTQyxPQUFULEdBQW1CO0FBQ3RCblAsSUFBRSxDQUFDNkIsU0FBSCxDQUFhLElBQWIsRUFBbUIySSxNQUFuQjtBQUNIO0FBRU0sU0FBU2UsYUFBVCxDQUF1QjZELFNBQXZCLEVBQWtDdkosUUFBbEMsRUFBNEM7QUFDL0NBLFVBQVEsR0FBR0EsUUFBUSxJQUFJLElBQXZCO0FBRUF1SixXQUFTLENBQUNsSixVQUFWLEdBQ0tMLFFBREwsQ0FDY0EsUUFEZCxFQUVLcEUsSUFGTCxDQUVVLFNBRlYsRUFFcUIsQ0FGckIsRUFHS3dGLEVBSEwsQ0FHUSxLQUhSLEVBR2UsWUFBWTtBQUNuQmpILE1BQUUsQ0FBQ0MsTUFBSCxDQUFVLElBQVYsRUFBZ0J1SyxNQUFoQjtBQUNILEdBTEw7QUFNSDtBQUVNLFNBQVM2RSxjQUFULEdBQTBCO0FBQzdCLFNBQVEsT0FBT3hFLE1BQU0sQ0FBQ3lFLFdBQWQsS0FBOEIsV0FBL0IsSUFBZ0RDLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsTUFBNEMsQ0FBQyxDQUFwRztBQUNIO0FBQUEsQyIsImZpbGUiOiJpbnRyby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9hbWVyaWNhcy1maW5hbmNlLWd1aWRlL3JldmVudWUvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYnMvZmZnL3NyYy9yZXZlbnVlL2ludHJvL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb2xvclByaW1hcnlcIjogXCIjMDA3MWJjXCIsXG5cdFwiY29sb3JQcmltYXJ5RGFya2VyXCI6IFwiIzIwNTQ5M1wiLFxuXHRcImNvbG9yUHJpbWFyeURhcmtlc3RcIjogXCIjMTEyZTUxXCIsXG5cdFwiY29sb3JQcmltYXJ5QWx0RGFya2VzdFwiOiBcIiMwNDZiOTlcIixcblx0XCJjb2xvclByaW1hcnlBbHRMaWdodFwiOiBcIiM5YmRhZjFcIixcblx0XCJjb2xvclByaW1hcnlBbHRMaWdodGVzdFwiOiBcIiNlMWYzZjhcIixcblx0XCJjb2xvckdyYXlEYXJrXCI6IFwiIzMyM2E0NVwiLFxuXHRcImNvbG9yR3JheUNvb2xMaWdodFwiOiBcIiNkY2U0ZWZcIixcblx0XCJyZXZlbnVlUHJpbWFyeVwiOiBcIiMwQTJGNUFcIixcblx0XCJyZXZlbnVlUGFyZW50T25lXCI6IFwiIzBBMkY1QVwiLFxuXHRcImNvbG9yU3BlbmRpbmdQcmltYXJ5XCI6IFwiIzAwNzk2QlwiLFxuXHRcImNvbG9yU3BlbmRpbmdUcmVuZHNcIjogXCIjMDA0OTQxXCIsXG5cdFwiY29sb3JEZWZpY2l0UHJpbWFyeVwiOiBcIiNCMzUzMkRcIixcblx0XCJjb2xvckRlZmljaXRTdXJwbHVzXCI6IFwiI0RBQTIwMFwiLFxuXHRcImNvbG9yRGVidFByaW1hcnlcIjogXCIjNEEwMDcyXCIsXG5cdFwidGV4dENvbG9ySGVhZGluZ1wiOiBcIiM1NTU1NTVcIixcblx0XCJ0ZXh0Q29sb3JQYXJhZ3JhcGhcIjogXCIjNjY2NjY2XCJcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvcigpIHt9XG5cbmV4cG9ydCB2YXIgZGFya2VyID0gMC43O1xuZXhwb3J0IHZhciBicmlnaHRlciA9IDEgLyBkYXJrZXI7XG5cbnZhciByZUkgPSBcIlxcXFxzKihbKy1dP1xcXFxkKylcXFxccypcIixcbiAgICByZU4gPSBcIlxcXFxzKihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KVxcXFxzKlwiLFxuICAgIHJlUCA9IFwiXFxcXHMqKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pJVxcXFxzKlwiLFxuICAgIHJlSGV4ID0gL14jKFswLTlhLWZdezMsOH0pJC8sXG4gICAgcmVSZ2JJbnRlZ2VyID0gbmV3IFJlZ0V4cChcIl5yZ2JcXFxcKFwiICsgW3JlSSwgcmVJLCByZUldICsgXCJcXFxcKSRcIiksXG4gICAgcmVSZ2JQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5yZ2JcXFxcKFwiICsgW3JlUCwgcmVQLCByZVBdICsgXCJcXFxcKSRcIiksXG4gICAgcmVSZ2JhSW50ZWdlciA9IG5ldyBSZWdFeHAoXCJecmdiYVxcXFwoXCIgKyBbcmVJLCByZUksIHJlSSwgcmVOXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiYVBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiICsgW3JlUCwgcmVQLCByZVAsIHJlTl0gKyBcIlxcXFwpJFwiKSxcbiAgICByZUhzbFBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXmhzbFxcXFwoXCIgKyBbcmVOLCByZVAsIHJlUF0gKyBcIlxcXFwpJFwiKSxcbiAgICByZUhzbGFQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5oc2xhXFxcXChcIiArIFtyZU4sIHJlUCwgcmVQLCByZU5dICsgXCJcXFxcKSRcIik7XG5cbnZhciBuYW1lZCA9IHtcbiAgYWxpY2VibHVlOiAweGYwZjhmZixcbiAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcbiAgYXF1YTogMHgwMGZmZmYsXG4gIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxuICBhenVyZTogMHhmMGZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkYyxcbiAgYmlzcXVlOiAweGZmZTRjNCxcbiAgYmxhY2s6IDB4MDAwMDAwLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gIGJsdWU6IDB4MDAwMGZmLFxuICBibHVldmlvbGV0OiAweDhhMmJlMixcbiAgYnJvd246IDB4YTUyYTJhLFxuICBidXJseXdvb2Q6IDB4ZGViODg3LFxuICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxuICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgY2hvY29sYXRlOiAweGQyNjkxZSxcbiAgY29yYWw6IDB4ZmY3ZjUwLFxuICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gIGNvcm5zaWxrOiAweGZmZjhkYyxcbiAgY3JpbXNvbjogMHhkYzE0M2MsXG4gIGN5YW46IDB4MDBmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGIsXG4gIGRhcmtjeWFuOiAweDAwOGI4YixcbiAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gIGRhcmtncmF5OiAweGE5YTlhOSxcbiAgZGFya2dyZWVuOiAweDAwNjQwMCxcbiAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICBkYXJra2hha2k6IDB4YmRiNzZiLFxuICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXG4gIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDAsXG4gIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxuICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgZGFya3NhbG1vbjogMHhlOTk2N2EsXG4gIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXG4gIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcbiAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXG4gIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcbiAgZGVlcHBpbms6IDB4ZmYxNDkzLFxuICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5LFxuICBkaW1ncmV5OiAweDY5Njk2OSxcbiAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjIsXG4gIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcbiAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICBmdWNoc2lhOiAweGZmMDBmZixcbiAgZ2FpbnNib3JvOiAweGRjZGNkYyxcbiAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwLFxuICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxuICBncmF5OiAweDgwODA4MCxcbiAgZ3JlZW46IDB4MDA4MDAwLFxuICBncmVlbnllbGxvdzogMHhhZGZmMmYsXG4gIGdyZXk6IDB4ODA4MDgwLFxuICBob25leWRldzogMHhmMGZmZjAsXG4gIGhvdHBpbms6IDB4ZmY2OWI0LFxuICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICBpbmRpZ286IDB4NGIwMDgyLFxuICBpdm9yeTogMHhmZmZmZjAsXG4gIGtoYWtpOiAweGYwZTY4YyxcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxuICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcbiAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcbiAgbGlnaHRibHVlOiAweGFkZDhlNixcbiAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcbiAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgbGlnaHRncmVlbjogMHg5MGVlOTAsXG4gIGxpZ2h0Z3JleTogMHhkM2QzZDMsXG4gIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcbiAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXG4gIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcbiAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxuICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcbiAgbGltZTogMHgwMGZmMDAsXG4gIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gIGxpbmVuOiAweGZhZjBlNixcbiAgbWFnZW50YTogMHhmZjAwZmYsXG4gIG1hcm9vbjogMHg4MDAwMDAsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxuICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcbiAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcbiAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxuICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXG4gIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXG4gIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXG4gIG1pbnRjcmVhbTogMHhmNWZmZmEsXG4gIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gIG1vY2Nhc2luOiAweGZmZTRiNSxcbiAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxuICBuYXZ5OiAweDAwMDA4MCxcbiAgb2xkbGFjZTogMHhmZGY1ZTYsXG4gIG9saXZlOiAweDgwODAwMCxcbiAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgb3JhbmdlOiAweGZmYTUwMCxcbiAgb3JhbmdlcmVkOiAweGZmNDUwMCxcbiAgb3JjaGlkOiAweGRhNzBkNixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXG4gIHBhbGVncmVlbjogMHg5OGZiOTgsXG4gIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcbiAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXG4gIHBlYWNocHVmZjogMHhmZmRhYjksXG4gIHBlcnU6IDB4Y2Q4NTNmLFxuICBwaW5rOiAweGZmYzBjYixcbiAgcGx1bTogMHhkZGEwZGQsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxuICBwdXJwbGU6IDB4ODAwMDgwLFxuICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgcmVkOiAweGZmMDAwMCxcbiAgcm9zeWJyb3duOiAweGJjOGY4ZixcbiAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxuICBzYWxtb246IDB4ZmE4MDcyLFxuICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgc2VhZ3JlZW46IDB4MmU4YjU3LFxuICBzZWFzaGVsbDogMHhmZmY1ZWUsXG4gIHNpZW5uYTogMHhhMDUyMmQsXG4gIHNpbHZlcjogMHhjMGMwYzAsXG4gIHNreWJsdWU6IDB4ODdjZWViLFxuICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxuICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxuICBzbm93OiAweGZmZmFmYSxcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxuICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxuICB0YW46IDB4ZDJiNDhjLFxuICB0ZWFsOiAweDAwODA4MCxcbiAgdGhpc3RsZTogMHhkOGJmZDgsXG4gIHRvbWF0bzogMHhmZjYzNDcsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDAsXG4gIHZpb2xldDogMHhlZTgyZWUsXG4gIHdoZWF0OiAweGY1ZGViMyxcbiAgd2hpdGU6IDB4ZmZmZmZmLFxuICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcbiAgeWVsbG93OiAweGZmZmYwMCxcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXG59O1xuXG5kZWZpbmUoQ29sb3IsIGNvbG9yLCB7XG4gIGNvcHk6IGZ1bmN0aW9uKGNoYW5uZWxzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IHRoaXMuY29uc3RydWN0b3IsIHRoaXMsIGNoYW5uZWxzKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpLmRpc3BsYXlhYmxlKCk7XG4gIH0sXG4gIGhleDogY29sb3JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IGNvbG9yX2Zvcm1hdEhleCxcbiAgZm9ybWF0SHNsOiBjb2xvcl9mb3JtYXRIc2wsXG4gIGZvcm1hdFJnYjogY29sb3JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogY29sb3JfZm9ybWF0UmdiXG59KTtcblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRIZXgoKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0SHNsKCkge1xuICByZXR1cm4gaHNsQ29udmVydCh0aGlzKS5mb3JtYXRIc2woKTtcbn1cblxuZnVuY3Rpb24gY29sb3JfZm9ybWF0UmdiKCkge1xuICByZXR1cm4gdGhpcy5yZ2IoKS5mb3JtYXRSZ2IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gIHZhciBtLCBsO1xuICBmb3JtYXQgPSAoZm9ybWF0ICsgXCJcIikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAobSA9IHJlSGV4LmV4ZWMoZm9ybWF0KSkgPyAobCA9IG1bMV0ubGVuZ3RoLCBtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBsID09PSA2ID8gcmdibihtKSAvLyAjZmYwMDAwXG4gICAgICA6IGwgPT09IDMgPyBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4ZjApLCAobSA+PiA0ICYgMHhmKSB8IChtICYgMHhmMCksICgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZiksIDEpIC8vICNmMDBcbiAgICAgIDogbCA9PT0gOCA/IG5ldyBSZ2IobSA+PiAyNCAmIDB4ZmYsIG0gPj4gMTYgJiAweGZmLCBtID4+IDggJiAweGZmLCAobSAmIDB4ZmYpIC8gMHhmZikgLy8gI2ZmMDAwMDAwXG4gICAgICA6IGwgPT09IDQgPyBuZXcgUmdiKChtID4+IDEyICYgMHhmKSB8IChtID4+IDggJiAweGYwKSwgKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKCgobSAmIDB4ZikgPDwgNCkgfCAobSAmIDB4ZikpIC8gMHhmZikgLy8gI2YwMDBcbiAgICAgIDogbnVsbCkgLy8gaW52YWxpZCBoZXhcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKC0wLjUgPD0gdGhpcy5yICYmIHRoaXMuciA8IDI1NS41KVxuICAgICAgICAmJiAoLTAuNSA8PSB0aGlzLmcgJiYgdGhpcy5nIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuYiAmJiB0aGlzLmIgPCAyNTUuNSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiByZ2JfZm9ybWF0SGV4LCAvLyBEZXByZWNhdGVkISBVc2UgY29sb3IuZm9ybWF0SGV4LlxuICBmb3JtYXRIZXg6IHJnYl9mb3JtYXRIZXgsXG4gIGZvcm1hdFJnYjogcmdiX2Zvcm1hdFJnYixcbiAgdG9TdHJpbmc6IHJnYl9mb3JtYXRSZ2Jcbn0pKTtcblxuZnVuY3Rpb24gcmdiX2Zvcm1hdEhleCgpIHtcbiAgcmV0dXJuIFwiI1wiICsgaGV4KHRoaXMucikgKyBoZXgodGhpcy5nKSArIGhleCh0aGlzLmIpO1xufVxuXG5mdW5jdGlvbiByZ2JfZm9ybWF0UmdiKCkge1xuICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgcmV0dXJuIChhID09PSAxID8gXCJyZ2IoXCIgOiBcInJnYmEoXCIpXG4gICAgICArIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh0aGlzLnIpIHx8IDApKSArIFwiLCBcIlxuICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICsgTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHRoaXMuYikgfHwgMCkpXG4gICAgICArIChhID09PSAxID8gXCIpXCIgOiBcIiwgXCIgKyBhICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBmb3JtYXRIc2w6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhID0gdGhpcy5vcGFjaXR5OyBhID0gaXNOYU4oYSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgYSkpO1xuICAgIHJldHVybiAoYSA9PT0gMSA/IFwiaHNsKFwiIDogXCJoc2xhKFwiKVxuICAgICAgICArICh0aGlzLmggfHwgMCkgKyBcIiwgXCJcbiAgICAgICAgKyAodGhpcy5zIHx8IDApICogMTAwICsgXCIlLCBcIlxuICAgICAgICArICh0aGlzLmwgfHwgMCkgKiAxMDAgKyBcIiVcIlxuICAgICAgICArIChhID09PSAxID8gXCIpXCIgOiBcIiwgXCIgKyBhICsgXCIpXCIpO1xuICB9XG59KSk7XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdiLCBkYXJrZXIsIGJyaWdodGVyfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuaW1wb3J0IHtkZWcycmFkLCByYWQyZGVnfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5cbnZhciBBID0gLTAuMTQ4NjEsXG4gICAgQiA9ICsxLjc4Mjc3LFxuICAgIEMgPSAtMC4yOTIyNyxcbiAgICBEID0gLTAuOTA2NDksXG4gICAgRSA9ICsxLjk3Mjk0LFxuICAgIEVEID0gRSAqIEQsXG4gICAgRUIgPSBFICogQixcbiAgICBCQ19EQSA9IEIgKiBDIC0gRCAqIEE7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEN1YmVoZWxpeCkgcmV0dXJuIG5ldyBDdWJlaGVsaXgoby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQiksXG4gICAgICBibCA9IGIgLSBsLFxuICAgICAgayA9IChFICogKGcgLSBsKSAtIEMgKiBibCkgLyBELFxuICAgICAgcyA9IE1hdGguc3FydChrICogayArIGJsICogYmwpIC8gKEUgKiBsICogKDEgLSBsKSksIC8vIE5hTiBpZiBsPTAgb3IgbD0xXG4gICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCA8IDAgPyBoICsgMzYwIDogaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjdWJlaGVsaXhDb252ZXJ0KGgpIDogbmV3IEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEN1YmVoZWxpeCwgY3ViZWhlbGl4LCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gaXNOYU4odGhpcy5oKSA/IDAgOiAodGhpcy5oICsgMTIwKSAqIGRlZzJyYWQsXG4gICAgICAgIGwgPSArdGhpcy5sLFxuICAgICAgICBhID0gaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMgKiBsICogKDEgLSBsKSxcbiAgICAgICAgY29zaCA9IE1hdGguY29zKGgpLFxuICAgICAgICBzaW5oID0gTWF0aC5zaW4oaCk7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICAyNTUgKiAobCArIGEgKiAoQSAqIGNvc2ggKyBCICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEMgKiBjb3NoICsgRCAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChFICogY29zaCkpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29uc3RydWN0b3IsIGZhY3RvcnksIHByb3RvdHlwZSkge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBmYWN0b3J5LnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQocGFyZW50LCBkZWZpbml0aW9uKSB7XG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUpO1xuICBmb3IgKHZhciBrZXkgaW4gZGVmaW5pdGlvbikgcHJvdG90eXBlW2tleV0gPSBkZWZpbml0aW9uW2tleV07XG4gIHJldHVybiBwcm90b3R5cGU7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY29sb3IsIHJnYiwgaHNsfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxhYiwgaGNsLCBsY2gsIGdyYXl9IGZyb20gXCIuL2xhYi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1YmVoZWxpeH0gZnJvbSBcIi4vY3ViZWhlbGl4LmpzXCI7XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmUuanNcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYn0gZnJvbSBcIi4vY29sb3IuanNcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aC5qc1wiO1xuXG4vLyBodHRwczovL29ic2VydmFibGVocS5jb20vQG1ib3N0b2NrL2xhYi1hbmQtcmdiXG52YXIgSyA9IDE4LFxuICAgIFhuID0gMC45NjQyMixcbiAgICBZbiA9IDEsXG4gICAgWm4gPSAwLjgyNTIxLFxuICAgIHQwID0gNCAvIDI5LFxuICAgIHQxID0gNiAvIDI5LFxuICAgIHQyID0gMyAqIHQxICogdDEsXG4gICAgdDMgPSB0MSAqIHQxICogdDE7XG5cbmZ1bmN0aW9uIGxhYkNvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIExhYikgcmV0dXJuIG5ldyBMYWIoby5sLCBvLmEsIG8uYiwgby5vcGFjaXR5KTtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBoY2wybGFiKG8pO1xuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciByID0gcmdiMmxyZ2Ioby5yKSxcbiAgICAgIGcgPSByZ2IybHJnYihvLmcpLFxuICAgICAgYiA9IHJnYjJscmdiKG8uYiksXG4gICAgICB5ID0geHl6MmxhYigoMC4yMjI1MDQ1ICogciArIDAuNzE2ODc4NiAqIGcgKyAwLjA2MDYxNjkgKiBiKSAvIFluKSwgeCwgejtcbiAgaWYgKHIgPT09IGcgJiYgZyA9PT0gYikgeCA9IHogPSB5OyBlbHNlIHtcbiAgICB4ID0geHl6MmxhYigoMC40MzYwNzQ3ICogciArIDAuMzg1MDY0OSAqIGcgKyAwLjE0MzA4MDQgKiBiKSAvIFhuKTtcbiAgICB6ID0geHl6MmxhYigoMC4wMTM5MzIyICogciArIDAuMDk3MTA0NSAqIGcgKyAwLjcxNDE3MzMgKiBiKSAvIFpuKTtcbiAgfVxuICByZXR1cm4gbmV3IExhYigxMTYgKiB5IC0gMTYsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geiksIG8ub3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmF5KGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIG5ldyBMYWIobCwgMCwgMCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGxhYkNvbnZlcnQobCkgOiBuZXcgTGFiKGwsIGEsIGIsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLmEgPSArYTtcbiAgdGhpcy5iID0gK2I7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoTGFiLCBsYWIsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCArIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sIC0gSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB5ID0gKHRoaXMubCArIDE2KSAvIDExNixcbiAgICAgICAgeCA9IGlzTmFOKHRoaXMuYSkgPyB5IDogeSArIHRoaXMuYSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKHRoaXMuYikgPyB5IDogeSAtIHRoaXMuYiAvIDIwMDtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHkgPSBZbiAqIGxhYjJ4eXooeSk7XG4gICAgeiA9IFpuICogbGFiMnh5eih6KTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGxyZ2IycmdiKCAzLjEzMzg1NjEgKiB4IC0gMS42MTY4NjY3ICogeSAtIDAuNDkwNjE0NiAqIHopLFxuICAgICAgbHJnYjJyZ2IoLTAuOTc4NzY4NCAqIHggKyAxLjkxNjE0MTUgKiB5ICsgMC4wMzM0NTQwICogeiksXG4gICAgICBscmdiMnJnYiggMC4wNzE5NDUzICogeCAtIDAuMjI4OTkxNCAqIHkgKyAxLjQwNTI0MjcgKiB6KSxcbiAgICAgIHRoaXMub3BhY2l0eVxuICAgICk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbn1cblxuZnVuY3Rpb24gbGFiMnh5eih0KSB7XG4gIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xufVxuXG5mdW5jdGlvbiBscmdiMnJnYih4KSB7XG4gIHJldHVybiAyNTUgKiAoeCA8PSAwLjAwMzEzMDggPyAxMi45MiAqIHggOiAxLjA1NSAqIE1hdGgucG93KHgsIDEgLyAyLjQpIC0gMC4wNTUpO1xufVxuXG5mdW5jdGlvbiByZ2IybHJnYih4KSB7XG4gIHJldHVybiAoeCAvPSAyNTUpIDw9IDAuMDQwNDUgPyB4IC8gMTIuOTIgOiBNYXRoLnBvdygoeCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuXG5mdW5jdGlvbiBoY2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIY2wpIHJldHVybiBuZXcgSGNsKG8uaCwgby5jLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBMYWIpKSBvID0gbGFiQ29udmVydChvKTtcbiAgaWYgKG8uYSA9PT0gMCAmJiBvLmIgPT09IDApIHJldHVybiBuZXcgSGNsKE5hTiwgMCA8IG8ubCAmJiBvLmwgPCAxMDAgPyAwIDogTmFOLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5mdW5jdGlvbiBoY2wybGFiKG8pIHtcbiAgaWYgKGlzTmFOKG8uaCkpIHJldHVybiBuZXcgTGFiKG8ubCwgMCwgMCwgby5vcGFjaXR5KTtcbiAgdmFyIGggPSBvLmggKiBkZWcycmFkO1xuICByZXR1cm4gbmV3IExhYihvLmwsIE1hdGguY29zKGgpICogby5jLCBNYXRoLnNpbihoKSAqIG8uYywgby5vcGFjaXR5KTtcbn1cblxuZGVmaW5lKEhjbCwgaGNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaGNsMmxhYih0aGlzKS5yZ2IoKTtcbiAgfVxufSkpO1xuIiwiZXhwb3J0IHZhciBkZWcycmFkID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCB2YXIgcmFkMmRlZyA9IDE4MCAvIE1hdGguUEk7XG4iLCJ2YXIgbm9vcCA9IHt2YWx1ZTogZnVuY3Rpb24oKSB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSB8fCAvW1xccy5dLy50ZXN0KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRpc3BhdGNofSBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuIiwidmFyIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG5cbmV4cG9ydCB2YXIgYmFja0luID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xuICB9XG5cbiAgYmFja0luLm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luO1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbiAgfVxuXG4gIGJhY2tPdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrT3V0O1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKHMpIHtcbiAgcyA9ICtzO1xuXG4gIGZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8IDEgPyB0ICogdCAqICgocyArIDEpICogdCAtIHMpIDogKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKSAvIDI7XG4gIH1cblxuICBiYWNrSW5PdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrSW5PdXQ7XG59KShvdmVyc2hvb3QpO1xuIiwidmFyIGIxID0gNCAvIDExLFxuICAgIGIyID0gNiAvIDExLFxuICAgIGIzID0gOCAvIDExLFxuICAgIGI0ID0gMyAvIDQsXG4gICAgYjUgPSA5IC8gMTEsXG4gICAgYjYgPSAxMCAvIDExLFxuICAgIGI3ID0gMTUgLyAxNixcbiAgICBiOCA9IDIxIC8gMjIsXG4gICAgYjkgPSA2MyAvIDY0LFxuICAgIGIwID0gMSAvIGIxIC8gYjE7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHJldHVybiAodCA9ICt0KSA8IGIxID8gYjAgKiB0ICogdCA6IHQgPCBiMyA/IGIwICogKHQgLT0gYjIpICogdCArIGI0IDogdCA8IGI2ID8gYjAgKiAodCAtPSBiNSkgKiB0ICsgYjcgOiBiMCAqICh0IC09IGI4KSAqIHQgKyBiOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIGJvdW5jZU91dCgxIC0gdCkgOiBib3VuY2VPdXQodCAtIDEpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCkgOiBNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSAvIDI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgKiB0IDogKHQgLT0gMikgKiB0ICogdCArIDIpIC8gMjtcbn1cbiIsInZhciB0YXUgPSAyICogTWF0aC5QSSxcbiAgICBhbXBsaXR1ZGUgPSAxLFxuICAgIHBlcmlvZCA9IDAuMztcblxuZXhwb3J0IHZhciBlbGFzdGljSW4gPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIDEwICogLS10KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNJbi5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbi5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbjtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAxIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0ID0gK3QpKSAqIE1hdGguc2luKCh0ICsgcykgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNPdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljT3V0LnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY091dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ID0gdCAqIDIgLSAxKSA8IDBcbiAgICAgICAgPyBhICogTWF0aC5wb3coMiwgMTAgKiB0KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKVxuICAgICAgICA6IDIgLSBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigocyArIHQpIC8gcCkpIC8gMjtcbiAgfVxuXG4gIGVsYXN0aWNJbk91dC5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbk91dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbk91dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBleHBJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBPdXQodCkge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCkgOiAyIC0gTWF0aC5wb3coMiwgMTAgLSAxMCAqIHQpKSAvIDI7XG59XG4iLCJleHBvcnQge1xuICBsaW5lYXIgYXMgZWFzZUxpbmVhclxufSBmcm9tIFwiLi9saW5lYXIuanNcIjtcblxuZXhwb3J0IHtcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkLFxuICBxdWFkSW4gYXMgZWFzZVF1YWRJbixcbiAgcXVhZE91dCBhcyBlYXNlUXVhZE91dCxcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkSW5PdXRcbn0gZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQge1xuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpYyxcbiAgY3ViaWNJbiBhcyBlYXNlQ3ViaWNJbixcbiAgY3ViaWNPdXQgYXMgZWFzZUN1YmljT3V0LFxuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpY0luT3V0XG59IGZyb20gXCIuL2N1YmljLmpzXCI7XG5cbmV4cG9ydCB7XG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seSxcbiAgcG9seUluIGFzIGVhc2VQb2x5SW4sXG4gIHBvbHlPdXQgYXMgZWFzZVBvbHlPdXQsXG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seUluT3V0XG59IGZyb20gXCIuL3BvbHkuanNcIjtcblxuZXhwb3J0IHtcbiAgc2luSW5PdXQgYXMgZWFzZVNpbixcbiAgc2luSW4gYXMgZWFzZVNpbkluLFxuICBzaW5PdXQgYXMgZWFzZVNpbk91dCxcbiAgc2luSW5PdXQgYXMgZWFzZVNpbkluT3V0XG59IGZyb20gXCIuL3Npbi5qc1wiO1xuXG5leHBvcnQge1xuICBleHBJbk91dCBhcyBlYXNlRXhwLFxuICBleHBJbiBhcyBlYXNlRXhwSW4sXG4gIGV4cE91dCBhcyBlYXNlRXhwT3V0LFxuICBleHBJbk91dCBhcyBlYXNlRXhwSW5PdXRcbn0gZnJvbSBcIi4vZXhwLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGUsXG4gIGNpcmNsZUluIGFzIGVhc2VDaXJjbGVJbixcbiAgY2lyY2xlT3V0IGFzIGVhc2VDaXJjbGVPdXQsXG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGVJbk91dFxufSBmcm9tIFwiLi9jaXJjbGUuanNcIjtcblxuZXhwb3J0IHtcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2UsXG4gIGJvdW5jZUluIGFzIGVhc2VCb3VuY2VJbixcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2VPdXQsXG4gIGJvdW5jZUluT3V0IGFzIGVhc2VCb3VuY2VJbk91dFxufSBmcm9tIFwiLi9ib3VuY2UuanNcIjtcblxuZXhwb3J0IHtcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrLFxuICBiYWNrSW4gYXMgZWFzZUJhY2tJbixcbiAgYmFja091dCBhcyBlYXNlQmFja091dCxcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrSW5PdXRcbn0gZnJvbSBcIi4vYmFjay5qc1wiO1xuXG5leHBvcnQge1xuICBlbGFzdGljT3V0IGFzIGVhc2VFbGFzdGljLFxuICBlbGFzdGljSW4gYXMgZWFzZUVsYXN0aWNJbixcbiAgZWxhc3RpY091dCBhcyBlYXNlRWxhc3RpY091dCxcbiAgZWxhc3RpY0luT3V0IGFzIGVhc2VFbGFzdGljSW5PdXRcbn0gZnJvbSBcIi4vZWxhc3RpYy5qc1wiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiArdDtcbn1cbiIsInZhciBleHBvbmVudCA9IDM7XG5cbmV4cG9ydCB2YXIgcG9seUluID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5SW4odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0LCBlKTtcbiAgfVxuXG4gIHBvbHlJbi5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seUluO1xufSkoZXhwb25lbnQpO1xuXG5leHBvcnQgdmFyIHBvbHlPdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlPdXQodCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHQsIGUpO1xuICB9XG5cbiAgcG9seU91dC5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seU91dDtcbn0pKGV4cG9uZW50KTtcblxuZXhwb3J0IHZhciBwb2x5SW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3codCwgZSkgOiAyIC0gTWF0aC5wb3coMiAtIHQsIGUpKSAvIDI7XG4gIH1cblxuICBwb2x5SW5PdXQuZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlJbk91dDtcbn0pKGV4cG9uZW50KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIHQgKiAoMiAtIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgOiAtLXQgKiAoMiAtIHQpICsgMSkgLyAyO1xufVxuIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICBoYWxmUGkgPSBwaSAvIDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5PdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbk91dCh0KSB7XG4gIHJldHVybiAoMSAtIE1hdGguY29zKHBpICogdCkpIC8gMjtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZS5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gKGlzTnVtYmVyQXJyYXkoYikgPyBudW1iZXJBcnJheSA6IGdlbmVyaWNBcnJheSkoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljQXJyYXkoYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJpbXBvcnQge2N1YmVoZWxpeCBhcyBjb2xvckN1YmVoZWxpeH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeChodWUpIHtcbiAgcmV0dXJuIChmdW5jdGlvbiBjdWJlaGVsaXhHYW1tYSh5KSB7XG4gICAgeSA9ICt5O1xuXG4gICAgZnVuY3Rpb24gY3ViZWhlbGl4KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9yQ3ViZWhlbGl4KHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9yQ3ViZWhlbGl4KGVuZCkpLmgpLFxuICAgICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgICBzdGFydC5sID0gbChNYXRoLnBvdyh0LCB5KSk7XG4gICAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjdWJlaGVsaXguZ2FtbWEgPSBjdWJlaGVsaXhHYW1tYTtcblxuICAgIHJldHVybiBjdWJlaGVsaXg7XG4gIH0pKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjdWJlaGVsaXgoaHVlKTtcbmV4cG9ydCB2YXIgY3ViZWhlbGl4TG9uZyA9IGN1YmVoZWxpeChjb2xvcik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBkID0gbmV3IERhdGU7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBkLnNldFRpbWUoYSAqICgxIC0gdCkgKyBiICogdCksIGQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYW5nZSkge1xuICB2YXIgbiA9IHJhbmdlLmxlbmd0aDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gcmFuZ2VbTWF0aC5tYXgoMCwgTWF0aC5taW4obiAtIDEsIE1hdGguZmxvb3IodCAqIG4pKSldO1xuICB9O1xufVxuIiwiaW1wb3J0IHtoY2wgYXMgY29sb3JIY2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuXG5mdW5jdGlvbiBoY2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIY2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIY2woZW5kKSkuaCksXG4gICAgICAgIGMgPSBjb2xvcihzdGFydC5jLCBlbmQuYyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQuYyA9IGModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhjbChodWUpO1xuZXhwb3J0IHZhciBoY2xMb25nID0gaGNsKGNvbG9yKTtcbiIsImltcG9ydCB7aHNsIGFzIGNvbG9ySHNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZnVuY3Rpb24gaHNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySHNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySHNsKGVuZCkpLmgpLFxuICAgICAgICBzID0gY29sb3Ioc3RhcnQucywgZW5kLnMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LnMgPSBzKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoc2woaHVlKTtcbmV4cG9ydCB2YXIgaHNsTG9uZyA9IGhzbChjb2xvcik7XG4iLCJpbXBvcnQge2h1ZX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IGh1ZSgrYSwgK2IpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciB4ID0gaSh0KTtcbiAgICByZXR1cm4geCAtIDM2MCAqIE1hdGguZmxvb3IoeCAvIDM2MCk7XG4gIH07XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGV9IGZyb20gXCIuL3ZhbHVlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVBcnJheX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUJhc2lzfSBmcm9tIFwiLi9iYXNpcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQmFzaXNDbG9zZWR9IGZyb20gXCIuL2Jhc2lzQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVEYXRlfSBmcm9tIFwiLi9kYXRlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVEaXNjcmV0ZX0gZnJvbSBcIi4vZGlzY3JldGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUh1ZX0gZnJvbSBcIi4vaHVlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVOdW1iZXJ9IGZyb20gXCIuL251bWJlci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTnVtYmVyQXJyYXl9IGZyb20gXCIuL251bWJlckFycmF5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVPYmplY3R9IGZyb20gXCIuL29iamVjdC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUm91bmR9IGZyb20gXCIuL3JvdW5kLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCIuL3N0cmluZy5qc1wiO1xuZXhwb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcywgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Tdmd9IGZyb20gXCIuL3RyYW5zZm9ybS9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlWm9vbX0gZnJvbSBcIi4vem9vbS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlUmdiLCByZ2JCYXNpcyBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzLCByZ2JCYXNpc0Nsb3NlZCBhcyBpbnRlcnBvbGF0ZVJnYkJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9yZ2IuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhzbCwgaHNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhzbExvbmd9IGZyb20gXCIuL2hzbC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTGFifSBmcm9tIFwiLi9sYWIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhjbCwgaGNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhjbExvbmd9IGZyb20gXCIuL2hjbC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQ3ViZWhlbGl4LCBjdWJlaGVsaXhMb25nIGFzIGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZ30gZnJvbSBcIi4vY3ViZWhlbGl4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGllY2V3aXNlfSBmcm9tIFwiLi9waWVjZXdpc2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGl6ZX0gZnJvbSBcIi4vcXVhbnRpemUuanNcIjtcbiIsImltcG9ydCB7bGFiIGFzIGNvbG9yTGFifSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciBmcm9tIFwiLi9jb2xvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsYWIoc3RhcnQsIGVuZCkge1xuICB2YXIgbCA9IGNvbG9yKChzdGFydCA9IGNvbG9yTGFiKHN0YXJ0KSkubCwgKGVuZCA9IGNvbG9yTGFiKGVuZCkpLmwpLFxuICAgICAgYSA9IGNvbG9yKHN0YXJ0LmEsIGVuZC5hKSxcbiAgICAgIGIgPSBjb2xvcihzdGFydC5iLCBlbmQuYiksXG4gICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgIHN0YXJ0LmEgPSBhKHQpO1xuICAgIHN0YXJ0LmIgPSBiKHQpO1xuICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICogKDEgLSB0KSArIGIgKiB0O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICBpZiAoIWIpIGIgPSBbXTtcbiAgdmFyIG4gPSBhID8gTWF0aC5taW4oYi5sZW5ndGgsIGEubGVuZ3RoKSA6IDAsXG4gICAgICBjID0gYi5zbGljZSgpLFxuICAgICAgaTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBjW2ldID0gYVtpXSAqICgxIC0gdCkgKyBiW2ldICogdDtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyQXJyYXkoeCkge1xuICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KHgpICYmICEoeCBpbnN0YW5jZW9mIERhdGFWaWV3KTtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBpID0ge30sXG4gICAgICBjID0ge30sXG4gICAgICBrO1xuXG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhICE9PSBcIm9iamVjdFwiKSBhID0ge307XG4gIGlmIChiID09PSBudWxsIHx8IHR5cGVvZiBiICE9PSBcIm9iamVjdFwiKSBiID0ge307XG5cbiAgZm9yIChrIGluIGIpIHtcbiAgICBpZiAoayBpbiBhKSB7XG4gICAgICBpW2tdID0gdmFsdWUoYVtrXSwgYltrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNba10gPSBiW2tdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChrIGluIGkpIGNba10gPSBpW2tdKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGllY2V3aXNlKGludGVycG9sYXRlLCB2YWx1ZXMpIHtcbiAgdmFyIGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aCAtIDEsIHYgPSB2YWx1ZXNbMF0sIEkgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgSVtpXSA9IGludGVycG9sYXRlKHYsIHYgPSB2YWx1ZXNbKytpXSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICo9IG4pKSk7XG4gICAgcmV0dXJuIElbaV0odCAtIGkpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJwb2xhdG9yLCBuKSB7XG4gIHZhciBzYW1wbGVzID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgc2FtcGxlc1tpXSA9IGludGVycG9sYXRvcihpIC8gKG4gLSAxKSk7XG4gIHJldHVybiBzYW1wbGVzO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWQuanNcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKiAoMSAtIHQpICsgYiAqIHQpO1xuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2UuanNcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlLmpzXCI7XG5cbnZhciBjc3NOb2RlLFxuICAgIGNzc1Jvb3QsXG4gICAgY3NzVmlldyxcbiAgICBzdmdOb2RlO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDc3ModmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBcIm5vbmVcIikgcmV0dXJuIGlkZW50aXR5O1xuICBpZiAoIWNzc05vZGUpIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpLCBjc3NSb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBjc3NWaWV3ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNzc05vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gIHZhbHVlID0gY3NzVmlldy5nZXRDb21wdXRlZFN0eWxlKGNzc1Jvb3QuYXBwZW5kQ2hpbGQoY3NzTm9kZSksIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2Zvcm1cIik7XG4gIGNzc1Jvb3QucmVtb3ZlQ2hpbGQoY3NzTm9kZSk7XG4gIHZhbHVlID0gdmFsdWUuc2xpY2UoNywgLTEpLnNwbGl0KFwiLFwiKTtcbiAgcmV0dXJuIGRlY29tcG9zZSgrdmFsdWVbMF0sICt2YWx1ZVsxXSwgK3ZhbHVlWzJdLCArdmFsdWVbM10sICt2YWx1ZVs0XSwgK3ZhbHVlWzVdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3ZnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghc3ZnTm9kZSkgc3ZnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgc3ZnTm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdmFsdWUpO1xuICBpZiAoISh2YWx1ZSA9IHN2Z05vZGUudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKSkpIHJldHVybiBpZGVudGl0eTtcbiAgdmFsdWUgPSB2YWx1ZS5tYXRyaXg7XG4gIHJldHVybiBkZWNvbXBvc2UodmFsdWUuYSwgdmFsdWUuYiwgdmFsdWUuYywgdmFsdWUuZCwgdmFsdWUuZSwgdmFsdWUuZik7XG59XG4iLCJpbXBvcnQge2NvbG9yfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCByZ2IgZnJvbSBcIi4vcmdiLmpzXCI7XG5pbXBvcnQge2dlbmVyaWNBcnJheX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBkYXRlIGZyb20gXCIuL2RhdGUuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQgb2JqZWN0IGZyb20gXCIuL29iamVjdC5qc1wiO1xuaW1wb3J0IHN0cmluZyBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdCA9IHR5cGVvZiBiLCBjO1xuICByZXR1cm4gYiA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiID8gY29uc3RhbnQoYilcbiAgICAgIDogKHQgPT09IFwibnVtYmVyXCIgPyBudW1iZXJcbiAgICAgIDogdCA9PT0gXCJzdHJpbmdcIiA/ICgoYyA9IGNvbG9yKGIpKSA/IChiID0gYywgcmdiKSA6IHN0cmluZylcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gcmdiXG4gICAgICA6IGIgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZVxuICAgICAgOiBpc051bWJlckFycmF5KGIpID8gbnVtYmVyQXJyYXlcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGdlbmVyaWNBcnJheVxuICAgICAgOiB0eXBlb2YgYi52YWx1ZU9mICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGIudG9TdHJpbmcgIT09IFwiZnVuY3Rpb25cIiB8fCBpc05hTihiKSA/IG9iamVjdFxuICAgICAgOiBudW1iZXIpKGEsIGIpO1xufVxuIiwidmFyIHJobyA9IE1hdGguU1FSVDIsXG4gICAgcmhvMiA9IDIsXG4gICAgcmhvNCA9IDQsXG4gICAgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocDAsIHAxKSB7XG4gIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sXG4gICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIGksXG4gICAgICBTO1xuXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgdTAg4omFIHUxLlxuICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICB1eTAgKyB0ICogZHksXG4gICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYWwgY2FzZS5cbiAgZWxzZSB7XG4gICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgIGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvNCAqIGQyKSAvICgyICogdzEgKiByaG8yICogZDEpLFxuICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICBTID0gKHIxIC0gcjApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgIGNvc2hyMCA9IGNvc2gocjApLFxuICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHV4MCArIHUgKiBkeCxcbiAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBpLmR1cmF0aW9uID0gUyAqIDEwMDA7XG5cbiAgcmV0dXJuIGk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgcGF0aH0gZnJvbSBcIi4vcGF0aC5qc1wiO1xuIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICB0YXUgPSAyICogcGksXG4gICAgZXBzaWxvbiA9IDFlLTYsXG4gICAgdGF1RXBzaWxvbiA9IHRhdSAtIGVwc2lsb247XG5cbmZ1bmN0aW9uIFBhdGgoKSB7XG4gIHRoaXMuX3gwID0gdGhpcy5feTAgPSAvLyBzdGFydCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGw7IC8vIGVuZCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgdGhpcy5fID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gcGF0aCgpIHtcbiAgcmV0dXJuIG5ldyBQYXRoO1xufVxuXG5QYXRoLnByb3RvdHlwZSA9IHBhdGgucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUGF0aCxcbiAgbW92ZVRvOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gwID0gdGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MCA9IHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl94MSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MDtcbiAgICAgIHRoaXMuXyArPSBcIlpcIjtcbiAgICB9XG4gIH0sXG4gIGxpbmVUbzogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkxcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBxdWFkcmF0aWNDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gXCJRXCIgKyAoK3gxKSArIFwiLFwiICsgKCt5MSkgKyBcIixcIiArICh0aGlzLl94MSA9ICt4KSArIFwiLFwiICsgKHRoaXMuX3kxID0gK3kpO1xuICB9LFxuICBiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5MiwgeCwgeSkge1xuICAgIHRoaXMuXyArPSBcIkNcIiArICgreDEpICsgXCIsXCIgKyAoK3kxKSArIFwiLFwiICsgKCt4MikgKyBcIixcIiArICgreTIpICsgXCIsXCIgKyAodGhpcy5feDEgPSAreCkgKyBcIixcIiArICh0aGlzLl95MSA9ICt5KTtcbiAgfSxcbiAgYXJjVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCByKSB7XG4gICAgeDEgPSAreDEsIHkxID0gK3kxLCB4MiA9ICt4MiwgeTIgPSAreTIsIHIgPSArcjtcbiAgICB2YXIgeDAgPSB0aGlzLl94MSxcbiAgICAgICAgeTAgPSB0aGlzLl95MSxcbiAgICAgICAgeDIxID0geDIgLSB4MSxcbiAgICAgICAgeTIxID0geTIgLSB5MSxcbiAgICAgICAgeDAxID0geDAgLSB4MSxcbiAgICAgICAgeTAxID0geTAgLSB5MSxcbiAgICAgICAgbDAxXzIgPSB4MDEgKiB4MDEgKyB5MDEgKiB5MDE7XG5cbiAgICAvLyBJcyB0aGUgcmFkaXVzIG5lZ2F0aXZlPyBFcnJvci5cbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1czogXCIgKyByKTtcblxuICAgIC8vIElzIHRoaXMgcGF0aCBlbXB0eT8gTW92ZSB0byAoeDEseTEpLlxuICAgIGlmICh0aGlzLl94MSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fICs9IFwiTVwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3IsIGlzICh4MSx5MSkgY29pbmNpZGVudCB3aXRoICh4MCx5MCk/IERvIG5vdGhpbmcuXG4gICAgZWxzZSBpZiAoIShsMDFfMiA+IGVwc2lsb24pKTtcblxuICAgIC8vIE9yLCBhcmUgKHgwLHkwKSwgKHgxLHkxKSBhbmQgKHgyLHkyKSBjb2xsaW5lYXI/XG4gICAgLy8gRXF1aXZhbGVudGx5LCBpcyAoeDEseTEpIGNvaW5jaWRlbnQgd2l0aCAoeDIseTIpP1xuICAgIC8vIE9yLCBpcyB0aGUgcmFkaXVzIHplcm8/IExpbmUgdG8gKHgxLHkxKS5cbiAgICBlbHNlIGlmICghKE1hdGguYWJzKHkwMSAqIHgyMSAtIHkyMSAqIHgwMSkgPiBlcHNpbG9uKSB8fCAhcikge1xuICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHRoaXMuX3gxID0geDEpICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MSk7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCBkcmF3IGFuIGFyYyFcbiAgICBlbHNlIHtcbiAgICAgIHZhciB4MjAgPSB4MiAtIHgwLFxuICAgICAgICAgIHkyMCA9IHkyIC0geTAsXG4gICAgICAgICAgbDIxXzIgPSB4MjEgKiB4MjEgKyB5MjEgKiB5MjEsXG4gICAgICAgICAgbDIwXzIgPSB4MjAgKiB4MjAgKyB5MjAgKiB5MjAsXG4gICAgICAgICAgbDIxID0gTWF0aC5zcXJ0KGwyMV8yKSxcbiAgICAgICAgICBsMDEgPSBNYXRoLnNxcnQobDAxXzIpLFxuICAgICAgICAgIGwgPSByICogTWF0aC50YW4oKHBpIC0gTWF0aC5hY29zKChsMjFfMiArIGwwMV8yIC0gbDIwXzIpIC8gKDIgKiBsMjEgKiBsMDEpKSkgLyAyKSxcbiAgICAgICAgICB0MDEgPSBsIC8gbDAxLFxuICAgICAgICAgIHQyMSA9IGwgLyBsMjE7XG5cbiAgICAgIC8vIElmIHRoZSBzdGFydCB0YW5nZW50IGlzIG5vdCBjb2luY2lkZW50IHdpdGggKHgwLHkwKSwgbGluZSB0by5cbiAgICAgIGlmIChNYXRoLmFicyh0MDEgLSAxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgdGhpcy5fICs9IFwiTFwiICsgKHgxICsgdDAxICogeDAxKSArIFwiLFwiICsgKHkxICsgdDAxICogeTAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMCxcIiArICgrKHkwMSAqIHgyMCA+IHgwMSAqIHkyMCkpICsgXCIsXCIgKyAodGhpcy5feDEgPSB4MSArIHQyMSAqIHgyMSkgKyBcIixcIiArICh0aGlzLl95MSA9IHkxICsgdDIxICogeTIxKTtcbiAgICB9XG4gIH0sXG4gIGFyYzogZnVuY3Rpb24oeCwgeSwgciwgYTAsIGExLCBjY3cpIHtcbiAgICB4ID0gK3gsIHkgPSAreSwgciA9ICtyLCBjY3cgPSAhIWNjdztcbiAgICB2YXIgZHggPSByICogTWF0aC5jb3MoYTApLFxuICAgICAgICBkeSA9IHIgKiBNYXRoLnNpbihhMCksXG4gICAgICAgIHgwID0geCArIGR4LFxuICAgICAgICB5MCA9IHkgKyBkeSxcbiAgICAgICAgY3cgPSAxIF4gY2N3LFxuICAgICAgICBkYSA9IGNjdyA/IGEwIC0gYTEgOiBhMSAtIGEwO1xuXG4gICAgLy8gSXMgdGhlIHJhZGl1cyBuZWdhdGl2ZT8gRXJyb3IuXG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXM6IFwiICsgcik7XG5cbiAgICAvLyBJcyB0aGlzIHBhdGggZW1wdHk/IE1vdmUgdG8gKHgwLHkwKS5cbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuXyArPSBcIk1cIiArIHgwICsgXCIsXCIgKyB5MDtcbiAgICB9XG5cbiAgICAvLyBPciwgaXMgKHgwLHkwKSBub3QgY29pbmNpZGVudCB3aXRoIHRoZSBwcmV2aW91cyBwb2ludD8gTGluZSB0byAoeDAseTApLlxuICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuX3gxIC0geDApID4gZXBzaWxvbiB8fCBNYXRoLmFicyh0aGlzLl95MSAtIHkwKSA+IGVwc2lsb24pIHtcbiAgICAgIHRoaXMuXyArPSBcIkxcIiArIHgwICsgXCIsXCIgKyB5MDtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGlzIGFyYyBlbXB0eT8gV2XigJlyZSBkb25lLlxuICAgIGlmICghcikgcmV0dXJuO1xuXG4gICAgLy8gRG9lcyB0aGUgYW5nbGUgZ28gdGhlIHdyb25nIHdheT8gRmxpcCB0aGUgZGlyZWN0aW9uLlxuICAgIGlmIChkYSA8IDApIGRhID0gZGEgJSB0YXUgKyB0YXU7XG5cbiAgICAvLyBJcyB0aGlzIGEgY29tcGxldGUgY2lyY2xlPyBEcmF3IHR3byBhcmNzIHRvIGNvbXBsZXRlIHRoZSBjaXJjbGUuXG4gICAgaWYgKGRhID4gdGF1RXBzaWxvbikge1xuICAgICAgdGhpcy5fICs9IFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsMSxcIiArIGN3ICsgXCIsXCIgKyAoeCAtIGR4KSArIFwiLFwiICsgKHkgLSBkeSkgKyBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLDEsXCIgKyBjdyArIFwiLFwiICsgKHRoaXMuX3gxID0geDApICsgXCIsXCIgKyAodGhpcy5feTEgPSB5MCk7XG4gICAgfVxuXG4gICAgLy8gSXMgdGhpcyBhcmMgbm9uLWVtcHR5PyBEcmF3IGFuIGFyYyFcbiAgICBlbHNlIGlmIChkYSA+IGVwc2lsb24pIHtcbiAgICAgIHRoaXMuXyArPSBcIkFcIiArIHIgKyBcIixcIiArIHIgKyBcIiwwLFwiICsgKCsoZGEgPj0gcGkpKSArIFwiLFwiICsgY3cgKyBcIixcIiArICh0aGlzLl94MSA9IHggKyByICogTWF0aC5jb3MoYTEpKSArIFwiLFwiICsgKHRoaXMuX3kxID0geSArIHIgKiBNYXRoLnNpbihhMSkpO1xuICAgIH1cbiAgfSxcbiAgcmVjdDogZnVuY3Rpb24oeCwgeSwgdywgaCkge1xuICAgIHRoaXMuXyArPSBcIk1cIiArICh0aGlzLl94MCA9IHRoaXMuX3gxID0gK3gpICsgXCIsXCIgKyAodGhpcy5feTAgPSB0aGlzLl95MSA9ICt5KSArIFwiaFwiICsgKCt3KSArIFwidlwiICsgKCtoKSArIFwiaFwiICsgKC13KSArIFwiWlwiO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuXztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGF0aDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4vY3JlYXRvclwiO1xuaW1wb3J0IHNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0KGNyZWF0b3IobmFtZSkuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlfSBmcm9tIFwiLi9jcmVhdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdG9yfSBmcm9tIFwiLi9jcmVhdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL2xvY2FsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF0Y2hlcn0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1vdXNlfSBmcm9tIFwiLi9tb3VzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vbmFtZXNwYWNlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmFtZXNwYWNlc30gZnJvbSBcIi4vbmFtZXNwYWNlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNsaWVudFBvaW50fSBmcm9tIFwiLi9wb2ludFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0QWxsfSBmcm9tIFwiLi9zZWxlY3RBbGxcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3Rpb259IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yQWxsfSBmcm9tIFwiLi9zZWxlY3RvckFsbFwiO1xuZXhwb3J0IHtzdHlsZVZhbHVlIGFzIHN0eWxlfSBmcm9tIFwiLi9zZWxlY3Rpb24vc3R5bGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaH0gZnJvbSBcIi4vdG91Y2hcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaGVzfSBmcm9tIFwiLi90b3VjaGVzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgd2luZG93fSBmcm9tIFwiLi93aW5kb3dcIjtcbmV4cG9ydCB7ZXZlbnQsIGN1c3RvbUV2ZW50fSBmcm9tIFwiLi9zZWxlY3Rpb24vb25cIjtcbiIsInZhciBuZXh0SWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgcmV0dXJuIG5ldyBMb2NhbDtcbn1cblxuZnVuY3Rpb24gTG9jYWwoKSB7XG4gIHRoaXMuXyA9IFwiQFwiICsgKCsrbmV4dElkKS50b1N0cmluZygzNik7XG59XG5cbkxvY2FsLnByb3RvdHlwZSA9IGxvY2FsLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IExvY2FsLFxuICBnZXQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl87XG4gICAgd2hpbGUgKCEoaWQgaW4gbm9kZSkpIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm47XG4gICAgcmV0dXJuIG5vZGVbaWRdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5vZGVbdGhpcy5fXSA9IHZhbHVlO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5fIGluIG5vZGUgJiYgZGVsZXRlIG5vZGVbdGhpcy5fXTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl87XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG4iLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBldmVudCA9IHNvdXJjZUV2ZW50KCk7XG4gIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykgZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgcmV0dXJuIHBvaW50KG5vZGUsIGV2ZW50KTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTtcbn1cbiIsImV4cG9ydCB2YXIgeGh0bWwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgeGh0bWw6IHhodG1sLFxuICB4bGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gIHhtbDogXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuXG4gIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gIH1cblxuICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW3NlbGVjdG9yID09IG51bGwgPyBbXSA6IHNlbGVjdG9yXSwgcm9vdCk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsImZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZVNoYWxsb3coKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKGZhbHNlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lRGVlcCgpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUodHJ1ZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG52YXIga2V5UHJlZml4ID0gXCIkXCI7IC8vIFByb3RlY3QgYWdhaW5zdCBrZXlzIGxpa2Ug4oCcX19wcm90b19f4oCdLlxuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IHt9LFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICAgIGlmIChrZXlWYWx1ZSBpbiBub2RlQnlLZXlWYWx1ZSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0pIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVzW2ldXSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBkYXRhID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaiA9IC0xO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihkKSB7IGRhdGFbKytqXSA9IGQ7IH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gdmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcGVydHkoXCJfX2RhdGFfX1wiLCB2YWx1ZSlcbiAgICAgIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG4iLCJpbXBvcnQgZGVmYXVsdFZpZXcgZnJvbSBcIi4uL3dpbmRvd1wiO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGUsIHR5cGUsIHBhcmFtcykge1xuICB2YXIgd2luZG93ID0gZGVmYXVsdFZpZXcobm9kZSksXG4gICAgICBldmVudCA9IHdpbmRvdy5DdXN0b21FdmVudDtcblxuICBpZiAodHlwZW9mIGV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBldmVudCA9IG5ldyBldmVudCh0eXBlLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgaWYgKHBhcmFtcykgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSksIGV2ZW50LmRldGFpbCA9IHBhcmFtcy5kZXRhaWw7XG4gICAgZWxzZSBldmVudC5pbml0RXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ29uc3RhbnQodHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHBhcmFtcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IGRpc3BhdGNoRnVuY3Rpb25cbiAgICAgIDogZGlzcGF0Y2hDb25zdGFudCkodHlwZSwgcGFyYW1zKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSBjYWxsYmFjay5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2VcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG4iLCJpbXBvcnQgc3BhcnNlIGZyb20gXCIuL3NwYXJzZVwiO1xuaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbih0aGlzLl9leGl0IHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBtYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIGlmICh0eXBlb2YgbWF0Y2ggIT09IFwiZnVuY3Rpb25cIikgbWF0Y2ggPSBtYXRjaGVyKG1hdGNoKTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBuZXcgQXJyYXkobSksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIHN1Ymdyb3VwID0gc3ViZ3JvdXBzW2pdID0gW10sIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgbWF0Y2guY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpIHtcbiAgICAgICAgc3ViZ3JvdXAucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiZnVuY3Rpb24gaHRtbFJlbW92ZSgpIHtcbiAgdGhpcy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sQ29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGh0bWxGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdiA9PSBudWxsID8gXCJcIiA6IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuZWFjaCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBodG1sUmVtb3ZlIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBodG1sRnVuY3Rpb25cbiAgICAgICAgICA6IGh0bWxDb25zdGFudCkodmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKS5pbm5lckhUTUw7XG59XG4iLCJpbXBvcnQgc2VsZWN0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbnRlciBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9leGl0IGZyb20gXCIuL2V4aXRcIjtcbmltcG9ydCBzZWxlY3Rpb25fam9pbiBmcm9tIFwiLi9qb2luXCI7XG5pbXBvcnQgc2VsZWN0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29yZGVyIGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NvcnQgZnJvbSBcIi4vc29ydFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9jYWxsIGZyb20gXCIuL2NhbGxcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZXMgZnJvbSBcIi4vbm9kZXNcIjtcbmltcG9ydCBzZWxlY3Rpb25fbm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NpemUgZnJvbSBcIi4vc2l6ZVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbXB0eSBmcm9tIFwiLi9lbXB0eVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lYWNoIGZyb20gXCIuL2VhY2hcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXR0ciBmcm9tIFwiLi9hdHRyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3N0eWxlIGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3Byb3BlcnR5IGZyb20gXCIuL3Byb3BlcnR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NsYXNzZWQgZnJvbSBcIi4vY2xhc3NlZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl90ZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBzZWxlY3Rpb25faHRtbCBmcm9tIFwiLi9odG1sXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JhaXNlIGZyb20gXCIuL3JhaXNlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2xvd2VyIGZyb20gXCIuL2xvd2VyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2FwcGVuZCBmcm9tIFwiLi9hcHBlbmRcIjtcbmltcG9ydCBzZWxlY3Rpb25faW5zZXJ0IGZyb20gXCIuL2luc2VydFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9yZW1vdmUgZnJvbSBcIi4vcmVtb3ZlXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2Nsb25lIGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdHVtIGZyb20gXCIuL2RhdHVtXCI7XG5pbXBvcnQgc2VsZWN0aW9uX29uIGZyb20gXCIuL29uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2Rpc3BhdGNoIGZyb20gXCIuL2Rpc3BhdGNoXCI7XG5cbmV4cG9ydCB2YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdGlvbihncm91cHMsIHBhcmVudHMpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uKCkge1xuICByZXR1cm4gbmV3IFNlbGVjdGlvbihbW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF1dLCByb290KTtcbn1cblxuU2VsZWN0aW9uLnByb3RvdHlwZSA9IHNlbGVjdGlvbi5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBTZWxlY3Rpb24sXG4gIHNlbGVjdDogc2VsZWN0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiBzZWxlY3Rpb25fc2VsZWN0QWxsLFxuICBmaWx0ZXI6IHNlbGVjdGlvbl9maWx0ZXIsXG4gIGRhdGE6IHNlbGVjdGlvbl9kYXRhLFxuICBlbnRlcjogc2VsZWN0aW9uX2VudGVyLFxuICBleGl0OiBzZWxlY3Rpb25fZXhpdCxcbiAgam9pbjogc2VsZWN0aW9uX2pvaW4sXG4gIG1lcmdlOiBzZWxlY3Rpb25fbWVyZ2UsXG4gIG9yZGVyOiBzZWxlY3Rpb25fb3JkZXIsXG4gIHNvcnQ6IHNlbGVjdGlvbl9zb3J0LFxuICBjYWxsOiBzZWxlY3Rpb25fY2FsbCxcbiAgbm9kZXM6IHNlbGVjdGlvbl9ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX25vZGUsXG4gIHNpemU6IHNlbGVjdGlvbl9zaXplLFxuICBlbXB0eTogc2VsZWN0aW9uX2VtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fZWFjaCxcbiAgYXR0cjogc2VsZWN0aW9uX2F0dHIsXG4gIHN0eWxlOiBzZWxlY3Rpb25fc3R5bGUsXG4gIHByb3BlcnR5OiBzZWxlY3Rpb25fcHJvcGVydHksXG4gIGNsYXNzZWQ6IHNlbGVjdGlvbl9jbGFzc2VkLFxuICB0ZXh0OiBzZWxlY3Rpb25fdGV4dCxcbiAgaHRtbDogc2VsZWN0aW9uX2h0bWwsXG4gIHJhaXNlOiBzZWxlY3Rpb25fcmFpc2UsXG4gIGxvd2VyOiBzZWxlY3Rpb25fbG93ZXIsXG4gIGFwcGVuZDogc2VsZWN0aW9uX2FwcGVuZCxcbiAgaW5zZXJ0OiBzZWxlY3Rpb25faW5zZXJ0LFxuICByZW1vdmU6IHNlbGVjdGlvbl9yZW1vdmUsXG4gIGNsb25lOiBzZWxlY3Rpb25fY2xvbmUsXG4gIGRhdHVtOiBzZWxlY3Rpb25fZGF0dW0sXG4gIG9uOiBzZWxlY3Rpb25fb24sXG4gIGRpc3BhdGNoOiBzZWxlY3Rpb25fZGlzcGF0Y2hcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbjtcbiIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuLi9jcmVhdG9yXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNvbnN0YW50TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGJlZm9yZSkge1xuICB2YXIgY3JlYXRlID0gdHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IG5hbWUgOiBjcmVhdG9yKG5hbWUpLFxuICAgICAgc2VsZWN0ID0gYmVmb3JlID09IG51bGwgPyBjb25zdGFudE51bGwgOiB0eXBlb2YgYmVmb3JlID09PSBcImZ1bmN0aW9uXCIgPyBiZWZvcmUgOiBzZWxlY3RvcihiZWZvcmUpO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGNyZWF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBzZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvbmVudGVyLCBvbnVwZGF0ZSwgb25leGl0KSB7XG4gIHZhciBlbnRlciA9IHRoaXMuZW50ZXIoKSwgdXBkYXRlID0gdGhpcywgZXhpdCA9IHRoaXMuZXhpdCgpO1xuICBlbnRlciA9IHR5cGVvZiBvbmVudGVyID09PSBcImZ1bmN0aW9uXCIgPyBvbmVudGVyKGVudGVyKSA6IGVudGVyLmFwcGVuZChvbmVudGVyICsgXCJcIik7XG4gIGlmIChvbnVwZGF0ZSAhPSBudWxsKSB1cGRhdGUgPSBvbnVwZGF0ZSh1cGRhdGUpO1xuICBpZiAob25leGl0ID09IG51bGwpIGV4aXQucmVtb3ZlKCk7IGVsc2Ugb25leGl0KGV4aXQpO1xuICByZXR1cm4gZW50ZXIgJiYgdXBkYXRlID8gZW50ZXIubWVyZ2UodXBkYXRlKS5vcmRlcigpIDogdXBkYXRlO1xufVxuIiwiZnVuY3Rpb24gbG93ZXIoKSB7XG4gIGlmICh0aGlzLnByZXZpb3VzU2libGluZykgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKGxvd2VyKTtcbn1cbiIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rpb24pIHtcblxuICBmb3IgKHZhciBncm91cHMwID0gdGhpcy5fZ3JvdXBzLCBncm91cHMxID0gc2VsZWN0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKG1lcmdlcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIG5vZGUgPSBncm91cFtpXTtcbiAgICAgIGlmIChub2RlKSByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMgPSBuZXcgQXJyYXkodGhpcy5zaXplKCkpLCBpID0gLTE7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgbm9kZXNbKytpXSA9IHRoaXM7IH0pO1xuICByZXR1cm4gbm9kZXM7XG59XG4iLCJ2YXIgZmlsdGVyRXZlbnRzID0ge307XG5cbmV4cG9ydCB2YXIgZXZlbnQgPSBudWxsO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoIShcIm9ubW91c2VlbnRlclwiIGluIGVsZW1lbnQpKSB7XG4gICAgZmlsdGVyRXZlbnRzID0ge21vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsIG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIn07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyQ29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApIHtcbiAgbGlzdGVuZXIgPSBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCk7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICBpZiAoIXJlbGF0ZWQgfHwgKHJlbGF0ZWQgIT09IHRoaXMgJiYgIShyZWxhdGVkLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRoaXMpICYgOCkpKSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudDEpIHtcbiAgICB2YXIgZXZlbnQwID0gZXZlbnQ7IC8vIEV2ZW50cyBjYW4gYmUgcmVlbnRyYW50IChlLmcuLCBmb2N1cykuXG4gICAgZXZlbnQgPSBldmVudDE7XG4gICAgdHJ5IHtcbiAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fX2RhdGFfXywgaW5kZXgsIGdyb3VwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZXZlbnQgPSBldmVudDA7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5jYXB0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBjYXB0dXJlKSB7XG4gIHZhciB3cmFwID0gZmlsdGVyRXZlbnRzLmhhc093blByb3BlcnR5KHR5cGVuYW1lLnR5cGUpID8gZmlsdGVyQ29udGV4dExpc3RlbmVyIDogY29udGV4dExpc3RlbmVyO1xuICByZXR1cm4gZnVuY3Rpb24oZCwgaSwgZ3JvdXApIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gd3JhcCh2YWx1ZSwgaSwgZ3JvdXApO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICAgIGlmICgobyA9IG9uW2pdKS50eXBlID09PSB0eXBlbmFtZS50eXBlICYmIG8ubmFtZSA9PT0gdHlwZW5hbWUubmFtZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyLCBvLmNhcHR1cmUpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoby50eXBlLCBvLmxpc3RlbmVyID0gbGlzdGVuZXIsIG8uY2FwdHVyZSA9IGNhcHR1cmUpO1xuICAgICAgICBvLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGVuYW1lLnR5cGUsIGxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICBvID0ge3R5cGU6IHR5cGVuYW1lLnR5cGUsIG5hbWU6IHR5cGVuYW1lLm5hbWUsIHZhbHVlOiB2YWx1ZSwgbGlzdGVuZXI6IGxpc3RlbmVyLCBjYXB0dXJlOiBjYXB0dXJlfTtcbiAgICBpZiAoIW9uKSB0aGlzLl9fb24gPSBbb107XG4gICAgZWxzZSBvbi5wdXNoKG8pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlbmFtZSwgdmFsdWUsIGNhcHR1cmUpIHtcbiAgdmFyIHR5cGVuYW1lcyA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiksIGksIG4gPSB0eXBlbmFtZXMubGVuZ3RoLCB0O1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBvbiA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKG9uKSBmb3IgKHZhciBqID0gMCwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgZm9yIChpID0gMCwgbyA9IG9uW2pdOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICgodCA9IHR5cGVuYW1lc1tpXSkudHlwZSA9PT0gby50eXBlICYmIHQubmFtZSA9PT0gby5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb24gPSB2YWx1ZSA/IG9uQWRkIDogb25SZW1vdmU7XG4gIGlmIChjYXB0dXJlID09IG51bGwpIGNhcHR1cmUgPSBmYWxzZTtcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgdGhpcy5lYWNoKG9uKHR5cGVuYW1lc1tpXSwgdmFsdWUsIGNhcHR1cmUpKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXN0b21FdmVudChldmVudDEsIGxpc3RlbmVyLCB0aGF0LCBhcmdzKSB7XG4gIHZhciBldmVudDAgPSBldmVudDtcbiAgZXZlbnQxLnNvdXJjZUV2ZW50ID0gZXZlbnQ7XG4gIGV2ZW50ID0gZXZlbnQxO1xuICB0cnkge1xuICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBldmVudCA9IGV2ZW50MDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuZXh0KSBeIDQpIG5leHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbmV4dCk7XG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuIiwiZnVuY3Rpb24gcHJvcGVydHlSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXNbbmFtZV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5Q29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlGdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh2ID09IG51bGwpIGRlbGV0ZSB0aGlzW25hbWVdO1xuICAgIGVsc2UgdGhpc1tuYW1lXSA9IHY7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMVxuICAgICAgPyB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHByb3BlcnR5UmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHByb3BlcnR5RnVuY3Rpb25cbiAgICAgICAgICA6IHByb3BlcnR5Q29uc3RhbnQpKG5hbWUsIHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKClbbmFtZV07XG59XG4iLCJmdW5jdGlvbiByYWlzZSgpIHtcbiAgaWYgKHRoaXMubmV4dFNpYmxpbmcpIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmFpc2UpO1xufVxuIiwiZnVuY3Rpb24gcmVtb3ZlKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJlbW92ZSk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzZWxlY3RvckFsbCBmcm9tIFwiLi4vc2VsZWN0b3JBbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yQWxsKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gW10sIHBhcmVudHMgPSBbXSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc3ViZ3JvdXBzLnB1c2goc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKTtcbiAgICAgICAgcGFyZW50cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgcGFyZW50cyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHNpemUgPSAwO1xuICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7ICsrc2l6ZTsgfSk7XG4gIHJldHVybiBzaXplO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1cGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh1cGRhdGUubGVuZ3RoKTtcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93XCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdiwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgPyBzdHlsZVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIDogc3R5bGVDb25zdGFudCkobmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKVxuICAgICAgOiBzdHlsZVZhbHVlKHRoaXMubm9kZSgpLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVmFsdWUobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG4gICAgICB8fCBkZWZhdWx0Vmlldyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiaW1wb3J0IHtldmVudH0gZnJvbSBcIi4vc2VsZWN0aW9uL29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY3VycmVudCA9IGV2ZW50LCBzb3VyY2U7XG4gIHdoaWxlIChzb3VyY2UgPSBjdXJyZW50LnNvdXJjZUV2ZW50KSBjdXJyZW50ID0gc291cmNlO1xuICByZXR1cm4gY3VycmVudDtcbn1cbiIsImltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudFwiO1xuaW1wb3J0IHBvaW50IGZyb20gXCIuL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHRvdWNoZXMsIGlkZW50aWZpZXIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSBpZGVudGlmaWVyID0gdG91Y2hlcywgdG91Y2hlcyA9IHNvdXJjZUV2ZW50KCkuY2hhbmdlZFRvdWNoZXM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0b3VjaGVzID8gdG91Y2hlcy5sZW5ndGggOiAwLCB0b3VjaDsgaSA8IG47ICsraSkge1xuICAgIGlmICgodG91Y2ggPSB0b3VjaGVzW2ldKS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gcG9pbnQobm9kZSwgdG91Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgdG91Y2hlcykge1xuICBpZiAodG91Y2hlcyA9PSBudWxsKSB0b3VjaGVzID0gc291cmNlRXZlbnQoKS50b3VjaGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMCwgcG9pbnRzID0gbmV3IEFycmF5KG4pOyBpIDwgbjsgKytpKSB7XG4gICAgcG9pbnRzW2ldID0gcG9pbnQobm9kZSwgdG91Y2hlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IHthYnMsIGFjb3MsIGFzaW4sIGF0YW4yLCBjb3MsIGVwc2lsb24sIGhhbGZQaSwgbWF4LCBtaW4sIHBpLCBzaW4sIHNxcnQsIHRhdX0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBhcmNJbm5lclJhZGl1cyhkKSB7XG4gIHJldHVybiBkLmlubmVyUmFkaXVzO1xufVxuXG5mdW5jdGlvbiBhcmNPdXRlclJhZGl1cyhkKSB7XG4gIHJldHVybiBkLm91dGVyUmFkaXVzO1xufVxuXG5mdW5jdGlvbiBhcmNTdGFydEFuZ2xlKGQpIHtcbiAgcmV0dXJuIGQuc3RhcnRBbmdsZTtcbn1cblxuZnVuY3Rpb24gYXJjRW5kQW5nbGUoZCkge1xuICByZXR1cm4gZC5lbmRBbmdsZTtcbn1cblxuZnVuY3Rpb24gYXJjUGFkQW5nbGUoZCkge1xuICByZXR1cm4gZCAmJiBkLnBhZEFuZ2xlOyAvLyBOb3RlOiBvcHRpb25hbCFcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuICB2YXIgeDEwID0geDEgLSB4MCwgeTEwID0geTEgLSB5MCxcbiAgICAgIHgzMiA9IHgzIC0geDIsIHkzMiA9IHkzIC0geTIsXG4gICAgICB0ID0geTMyICogeDEwIC0geDMyICogeTEwO1xuICBpZiAodCAqIHQgPCBlcHNpbG9uKSByZXR1cm47XG4gIHQgPSAoeDMyICogKHkwIC0geTIpIC0geTMyICogKHgwIC0geDIpKSAvIHQ7XG4gIHJldHVybiBbeDAgKyB0ICogeDEwLCB5MCArIHQgKiB5MTBdO1xufVxuXG4vLyBDb21wdXRlIHBlcnBlbmRpY3VsYXIgb2Zmc2V0IGxpbmUgb2YgbGVuZ3RoIHJjLlxuLy8gaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9DaXJjbGUtTGluZUludGVyc2VjdGlvbi5odG1sXG5mdW5jdGlvbiBjb3JuZXJUYW5nZW50cyh4MCwgeTAsIHgxLCB5MSwgcjEsIHJjLCBjdykge1xuICB2YXIgeDAxID0geDAgLSB4MSxcbiAgICAgIHkwMSA9IHkwIC0geTEsXG4gICAgICBsbyA9IChjdyA/IHJjIDogLXJjKSAvIHNxcnQoeDAxICogeDAxICsgeTAxICogeTAxKSxcbiAgICAgIG94ID0gbG8gKiB5MDEsXG4gICAgICBveSA9IC1sbyAqIHgwMSxcbiAgICAgIHgxMSA9IHgwICsgb3gsXG4gICAgICB5MTEgPSB5MCArIG95LFxuICAgICAgeDEwID0geDEgKyBveCxcbiAgICAgIHkxMCA9IHkxICsgb3ksXG4gICAgICB4MDAgPSAoeDExICsgeDEwKSAvIDIsXG4gICAgICB5MDAgPSAoeTExICsgeTEwKSAvIDIsXG4gICAgICBkeCA9IHgxMCAtIHgxMSxcbiAgICAgIGR5ID0geTEwIC0geTExLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIHIgPSByMSAtIHJjLFxuICAgICAgRCA9IHgxMSAqIHkxMCAtIHgxMCAqIHkxMSxcbiAgICAgIGQgPSAoZHkgPCAwID8gLTEgOiAxKSAqIHNxcnQobWF4KDAsIHIgKiByICogZDIgLSBEICogRCkpLFxuICAgICAgY3gwID0gKEQgKiBkeSAtIGR4ICogZCkgLyBkMixcbiAgICAgIGN5MCA9ICgtRCAqIGR4IC0gZHkgKiBkKSAvIGQyLFxuICAgICAgY3gxID0gKEQgKiBkeSArIGR4ICogZCkgLyBkMixcbiAgICAgIGN5MSA9ICgtRCAqIGR4ICsgZHkgKiBkKSAvIGQyLFxuICAgICAgZHgwID0gY3gwIC0geDAwLFxuICAgICAgZHkwID0gY3kwIC0geTAwLFxuICAgICAgZHgxID0gY3gxIC0geDAwLFxuICAgICAgZHkxID0gY3kxIC0geTAwO1xuXG4gIC8vIFBpY2sgdGhlIGNsb3NlciBvZiB0aGUgdHdvIGludGVyc2VjdGlvbiBwb2ludHMuXG4gIC8vIFRPRE8gSXMgdGhlcmUgYSBmYXN0ZXIgd2F5IHRvIGRldGVybWluZSB3aGljaCBpbnRlcnNlY3Rpb24gdG8gdXNlP1xuICBpZiAoZHgwICogZHgwICsgZHkwICogZHkwID4gZHgxICogZHgxICsgZHkxICogZHkxKSBjeDAgPSBjeDEsIGN5MCA9IGN5MTtcblxuICByZXR1cm4ge1xuICAgIGN4OiBjeDAsXG4gICAgY3k6IGN5MCxcbiAgICB4MDE6IC1veCxcbiAgICB5MDE6IC1veSxcbiAgICB4MTE6IGN4MCAqIChyMSAvIHIgLSAxKSxcbiAgICB5MTE6IGN5MCAqIChyMSAvIHIgLSAxKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGlubmVyUmFkaXVzID0gYXJjSW5uZXJSYWRpdXMsXG4gICAgICBvdXRlclJhZGl1cyA9IGFyY091dGVyUmFkaXVzLFxuICAgICAgY29ybmVyUmFkaXVzID0gY29uc3RhbnQoMCksXG4gICAgICBwYWRSYWRpdXMgPSBudWxsLFxuICAgICAgc3RhcnRBbmdsZSA9IGFyY1N0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSA9IGFyY0VuZEFuZ2xlLFxuICAgICAgcGFkQW5nbGUgPSBhcmNQYWRBbmdsZSxcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGFyYygpIHtcbiAgICB2YXIgYnVmZmVyLFxuICAgICAgICByLFxuICAgICAgICByMCA9ICtpbm5lclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICByMSA9ICtvdXRlclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBhMCA9IHN0YXJ0QW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGhhbGZQaSxcbiAgICAgICAgYTEgPSBlbmRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC0gaGFsZlBpLFxuICAgICAgICBkYSA9IGFicyhhMSAtIGEwKSxcbiAgICAgICAgY3cgPSBhMSA+IGEwO1xuXG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIG91dGVyIHJhZGl1cyBpcyBhbHdheXMgbGFyZ2VyIHRoYW4gdGhlIGlubmVyIHJhZGl1cy5cbiAgICBpZiAocjEgPCByMCkgciA9IHIxLCByMSA9IHIwLCByMCA9IHI7XG5cbiAgICAvLyBJcyBpdCBhIHBvaW50P1xuICAgIGlmICghKHIxID4gZXBzaWxvbikpIGNvbnRleHQubW92ZVRvKDAsIDApO1xuXG4gICAgLy8gT3IgaXMgaXQgYSBjaXJjbGUgb3IgYW5udWx1cz9cbiAgICBlbHNlIGlmIChkYSA+IHRhdSAtIGVwc2lsb24pIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKHIxICogY29zKGEwKSwgcjEgKiBzaW4oYTApKTtcbiAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhMCwgYTEsICFjdyk7XG4gICAgICBpZiAocjAgPiBlcHNpbG9uKSB7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHIwICogY29zKGExKSwgcjAgKiBzaW4oYTEpKTtcbiAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjAsIGExLCBhMCwgY3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9yIGlzIGl0IGEgY2lyY3VsYXIgb3IgYW5udWxhciBzZWN0b3I/XG4gICAgZWxzZSB7XG4gICAgICB2YXIgYTAxID0gYTAsXG4gICAgICAgICAgYTExID0gYTEsXG4gICAgICAgICAgYTAwID0gYTAsXG4gICAgICAgICAgYTEwID0gYTEsXG4gICAgICAgICAgZGEwID0gZGEsXG4gICAgICAgICAgZGExID0gZGEsXG4gICAgICAgICAgYXAgPSBwYWRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8gMixcbiAgICAgICAgICBycCA9IChhcCA+IGVwc2lsb24pICYmIChwYWRSYWRpdXMgPyArcGFkUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBzcXJ0KHIwICogcjAgKyByMSAqIHIxKSksXG4gICAgICAgICAgcmMgPSBtaW4oYWJzKHIxIC0gcjApIC8gMiwgK2Nvcm5lclJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSxcbiAgICAgICAgICByYzAgPSByYyxcbiAgICAgICAgICByYzEgPSByYyxcbiAgICAgICAgICB0MCxcbiAgICAgICAgICB0MTtcblxuICAgICAgLy8gQXBwbHkgcGFkZGluZz8gTm90ZSB0aGF0IHNpbmNlIHIxIOKJpSByMCwgZGExIOKJpSBkYTAuXG4gICAgICBpZiAocnAgPiBlcHNpbG9uKSB7XG4gICAgICAgIHZhciBwMCA9IGFzaW4ocnAgLyByMCAqIHNpbihhcCkpLFxuICAgICAgICAgICAgcDEgPSBhc2luKHJwIC8gcjEgKiBzaW4oYXApKTtcbiAgICAgICAgaWYgKChkYTAgLT0gcDAgKiAyKSA+IGVwc2lsb24pIHAwICo9IChjdyA/IDEgOiAtMSksIGEwMCArPSBwMCwgYTEwIC09IHAwO1xuICAgICAgICBlbHNlIGRhMCA9IDAsIGEwMCA9IGExMCA9IChhMCArIGExKSAvIDI7XG4gICAgICAgIGlmICgoZGExIC09IHAxICogMikgPiBlcHNpbG9uKSBwMSAqPSAoY3cgPyAxIDogLTEpLCBhMDEgKz0gcDEsIGExMSAtPSBwMTtcbiAgICAgICAgZWxzZSBkYTEgPSAwLCBhMDEgPSBhMTEgPSAoYTAgKyBhMSkgLyAyO1xuICAgICAgfVxuXG4gICAgICB2YXIgeDAxID0gcjEgKiBjb3MoYTAxKSxcbiAgICAgICAgICB5MDEgPSByMSAqIHNpbihhMDEpLFxuICAgICAgICAgIHgxMCA9IHIwICogY29zKGExMCksXG4gICAgICAgICAgeTEwID0gcjAgKiBzaW4oYTEwKTtcblxuICAgICAgLy8gQXBwbHkgcm91bmRlZCBjb3JuZXJzP1xuICAgICAgaWYgKHJjID4gZXBzaWxvbikge1xuICAgICAgICB2YXIgeDExID0gcjEgKiBjb3MoYTExKSxcbiAgICAgICAgICAgIHkxMSA9IHIxICogc2luKGExMSksXG4gICAgICAgICAgICB4MDAgPSByMCAqIGNvcyhhMDApLFxuICAgICAgICAgICAgeTAwID0gcjAgKiBzaW4oYTAwKSxcbiAgICAgICAgICAgIG9jO1xuXG4gICAgICAgIC8vIFJlc3RyaWN0IHRoZSBjb3JuZXIgcmFkaXVzIGFjY29yZGluZyB0byB0aGUgc2VjdG9yIGFuZ2xlLlxuICAgICAgICBpZiAoZGEgPCBwaSAmJiAob2MgPSBpbnRlcnNlY3QoeDAxLCB5MDEsIHgwMCwgeTAwLCB4MTEsIHkxMSwgeDEwLCB5MTApKSkge1xuICAgICAgICAgIHZhciBheCA9IHgwMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBheSA9IHkwMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBieCA9IHgxMSAtIG9jWzBdLFxuICAgICAgICAgICAgICBieSA9IHkxMSAtIG9jWzFdLFxuICAgICAgICAgICAgICBrYyA9IDEgLyBzaW4oYWNvcygoYXggKiBieCArIGF5ICogYnkpIC8gKHNxcnQoYXggKiBheCArIGF5ICogYXkpICogc3FydChieCAqIGJ4ICsgYnkgKiBieSkpKSAvIDIpLFxuICAgICAgICAgICAgICBsYyA9IHNxcnQob2NbMF0gKiBvY1swXSArIG9jWzFdICogb2NbMV0pO1xuICAgICAgICAgIHJjMCA9IG1pbihyYywgKHIwIC0gbGMpIC8gKGtjIC0gMSkpO1xuICAgICAgICAgIHJjMSA9IG1pbihyYywgKHIxIC0gbGMpIC8gKGtjICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElzIHRoZSBzZWN0b3IgY29sbGFwc2VkIHRvIGEgbGluZT9cbiAgICAgIGlmICghKGRhMSA+IGVwc2lsb24pKSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSk7XG5cbiAgICAgIC8vIERvZXMgdGhlIHNlY3RvcuKAmXMgb3V0ZXIgcmluZyBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMSA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MDAsIHkwMCwgeDAxLCB5MDEsIHIxLCByYzEsIGN3KTtcbiAgICAgICAgdDEgPSBjb3JuZXJUYW5nZW50cyh4MTEsIHkxMSwgeDEwLCB5MTAsIHIxLCByYzEsIGN3KTtcblxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh0MC5jeCArIHQwLngwMSwgdDAuY3kgKyB0MC55MDEpO1xuXG4gICAgICAgIC8vIEhhdmUgdGhlIGNvcm5lcnMgbWVyZ2VkP1xuICAgICAgICBpZiAocmMxIDwgcmMpIGNvbnRleHQuYXJjKHQwLmN4LCB0MC5jeSwgcmMxLCBhdGFuMih0MC55MDEsIHQwLngwMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcblxuICAgICAgICAvLyBPdGhlcndpc2UsIGRyYXcgdGhlIHR3byBjb3JuZXJzIGFuZCB0aGUgcmluZy5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzEsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDAueTExLCB0MC54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhdGFuMih0MC5jeSArIHQwLnkxMSwgdDAuY3ggKyB0MC54MTEpLCBhdGFuMih0MS5jeSArIHQxLnkxMSwgdDEuY3ggKyB0MS54MTEpLCAhY3cpO1xuICAgICAgICAgIGNvbnRleHQuYXJjKHQxLmN4LCB0MS5jeSwgcmMxLCBhdGFuMih0MS55MTEsIHQxLngxMSksIGF0YW4yKHQxLnkwMSwgdDEueDAxKSwgIWN3KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPciBpcyB0aGUgb3V0ZXIgcmluZyBqdXN0IGEgY2lyY3VsYXIgYXJjP1xuICAgICAgZWxzZSBjb250ZXh0Lm1vdmVUbyh4MDEsIHkwMSksIGNvbnRleHQuYXJjKDAsIDAsIHIxLCBhMDEsIGExMSwgIWN3KTtcblxuICAgICAgLy8gSXMgdGhlcmUgbm8gaW5uZXIgcmluZywgYW5kIGl04oCZcyBhIGNpcmN1bGFyIHNlY3Rvcj9cbiAgICAgIC8vIE9yIHBlcmhhcHMgaXTigJlzIGFuIGFubnVsYXIgc2VjdG9yIGNvbGxhcHNlZCBkdWUgdG8gcGFkZGluZz9cbiAgICAgIGlmICghKHIwID4gZXBzaWxvbikgfHwgIShkYTAgPiBlcHNpbG9uKSkgY29udGV4dC5saW5lVG8oeDEwLCB5MTApO1xuXG4gICAgICAvLyBEb2VzIHRoZSBzZWN0b3LigJlzIGlubmVyIHJpbmcgKG9yIHBvaW50KSBoYXZlIHJvdW5kZWQgY29ybmVycz9cbiAgICAgIGVsc2UgaWYgKHJjMCA+IGVwc2lsb24pIHtcbiAgICAgICAgdDAgPSBjb3JuZXJUYW5nZW50cyh4MTAsIHkxMCwgeDExLCB5MTEsIHIwLCAtcmMwLCBjdyk7XG4gICAgICAgIHQxID0gY29ybmVyVGFuZ2VudHMoeDAxLCB5MDEsIHgwMCwgeTAwLCByMCwgLXJjMCwgY3cpO1xuXG4gICAgICAgIGNvbnRleHQubGluZVRvKHQwLmN4ICsgdDAueDAxLCB0MC5jeSArIHQwLnkwMSk7XG5cbiAgICAgICAgLy8gSGF2ZSB0aGUgY29ybmVycyBtZXJnZWQ/XG4gICAgICAgIGlmIChyYzAgPCByYykgY29udGV4dC5hcmModDAuY3gsIHQwLmN5LCByYzAsIGF0YW4yKHQwLnkwMSwgdDAueDAxKSwgYXRhbjIodDEueTAxLCB0MS54MDEpLCAhY3cpO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZHJhdyB0aGUgdHdvIGNvcm5lcnMgYW5kIHRoZSByaW5nLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MC5jeCwgdDAuY3ksIHJjMCwgYXRhbjIodDAueTAxLCB0MC54MDEpLCBhdGFuMih0MC55MTEsIHQwLngxMSksICFjdyk7XG4gICAgICAgICAgY29udGV4dC5hcmMoMCwgMCwgcjAsIGF0YW4yKHQwLmN5ICsgdDAueTExLCB0MC5jeCArIHQwLngxMSksIGF0YW4yKHQxLmN5ICsgdDEueTExLCB0MS5jeCArIHQxLngxMSksIGN3KTtcbiAgICAgICAgICBjb250ZXh0LmFyYyh0MS5jeCwgdDEuY3ksIHJjMCwgYXRhbjIodDEueTExLCB0MS54MTEpLCBhdGFuMih0MS55MDEsIHQxLngwMSksICFjdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT3IgaXMgdGhlIGlubmVyIHJpbmcganVzdCBhIGNpcmN1bGFyIGFyYz9cbiAgICAgIGVsc2UgY29udGV4dC5hcmMoMCwgMCwgcjAsIGExMCwgYTAwLCBjdyk7XG4gICAgfVxuXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgYXJjLmNlbnRyb2lkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHIgPSAoK2lubmVyUmFkaXVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArb3V0ZXJSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyLFxuICAgICAgICBhID0gKCtzdGFydEFuZ2xlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKyArZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgLyAyIC0gcGkgLyAyO1xuICAgIHJldHVybiBbY29zKGEpICogciwgc2luKGEpICogcl07XG4gIH07XG5cbiAgYXJjLmlubmVyUmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGlubmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBpbm5lclJhZGl1cztcbiAgfTtcblxuICBhcmMub3V0ZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAob3V0ZXJSYWRpdXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IG91dGVyUmFkaXVzO1xuICB9O1xuXG4gIGFyYy5jb3JuZXJSYWRpdXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29ybmVyUmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBjb3JuZXJSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnBhZFJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRSYWRpdXMgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyYykgOiBwYWRSYWRpdXM7XG4gIH07XG5cbiAgYXJjLnN0YXJ0QW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RhcnRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogc3RhcnRBbmdsZTtcbiAgfTtcblxuICBhcmMuZW5kQW5nbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZW5kQW5nbGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJjKSA6IGVuZEFuZ2xlO1xuICB9O1xuXG4gIGFyYy5wYWRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmMpIDogcGFkQW5nbGU7XG4gIH07XG5cbiAgYXJjLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoKGNvbnRleHQgPSBfID09IG51bGwgPyBudWxsIDogXyksIGFyYykgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmM7XG59XG4iLCJpbXBvcnQge3BhdGh9IGZyb20gXCJkMy1wYXRoXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBjdXJ2ZUxpbmVhciBmcm9tIFwiLi9jdXJ2ZS9saW5lYXIuanNcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmUuanNcIjtcbmltcG9ydCB7eCBhcyBwb2ludFgsIHkgYXMgcG9pbnRZfSBmcm9tIFwiLi9wb2ludC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHgwID0gcG9pbnRYLFxuICAgICAgeDEgPSBudWxsLFxuICAgICAgeTAgPSBjb25zdGFudCgwKSxcbiAgICAgIHkxID0gcG9pbnRZLFxuICAgICAgZGVmaW5lZCA9IGNvbnN0YW50KHRydWUpLFxuICAgICAgY29udGV4dCA9IG51bGwsXG4gICAgICBjdXJ2ZSA9IGN1cnZlTGluZWFyLFxuICAgICAgb3V0cHV0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBhcmVhKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgaixcbiAgICAgICAgayxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBkLFxuICAgICAgICBkZWZpbmVkMCA9IGZhbHNlLFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHgweiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgeTB6ID0gbmV3IEFycmF5KG4pO1xuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkgb3V0cHV0ID0gY3VydmUoYnVmZmVyID0gcGF0aCgpKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgKytpKSB7XG4gICAgICBpZiAoIShpIDwgbiAmJiBkZWZpbmVkKGQgPSBkYXRhW2ldLCBpLCBkYXRhKSkgPT09IGRlZmluZWQwKSB7XG4gICAgICAgIGlmIChkZWZpbmVkMCA9ICFkZWZpbmVkMCkge1xuICAgICAgICAgIGogPSBpO1xuICAgICAgICAgIG91dHB1dC5hcmVhU3RhcnQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0LmxpbmVFbmQoKTtcbiAgICAgICAgICBvdXRwdXQubGluZVN0YXJ0KCk7XG4gICAgICAgICAgZm9yIChrID0gaSAtIDE7IGsgPj0gajsgLS1rKSB7XG4gICAgICAgICAgICBvdXRwdXQucG9pbnQoeDB6W2tdLCB5MHpba10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgICAgIG91dHB1dC5hcmVhRW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkZWZpbmVkMCkge1xuICAgICAgICB4MHpbaV0gPSAreDAoZCwgaSwgZGF0YSksIHkweltpXSA9ICt5MChkLCBpLCBkYXRhKTtcbiAgICAgICAgb3V0cHV0LnBvaW50KHgxID8gK3gxKGQsIGksIGRhdGEpIDogeDB6W2ldLCB5MSA/ICt5MShkLCBpLCBkYXRhKSA6IHkweltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJ1ZmZlcikgcmV0dXJuIG91dHB1dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZWFsaW5lKCkge1xuICAgIHJldHVybiBsaW5lKCkuZGVmaW5lZChkZWZpbmVkKS5jdXJ2ZShjdXJ2ZSkuY29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGFyZWEueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCB4MSA9IG51bGwsIGFyZWEpIDogeDA7XG4gIH07XG5cbiAgYXJlYS54MCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBhcmVhKSA6IHgwO1xuICB9O1xuXG4gIGFyZWEueDEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDEgPSBfID09IG51bGwgPyBudWxsIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeDE7XG4gIH07XG5cbiAgYXJlYS55ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHkxID0gbnVsbCwgYXJlYSkgOiB5MDtcbiAgfTtcblxuICBhcmVhLnkwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHkwID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGFyZWEpIDogeTA7XG4gIH07XG5cbiAgYXJlYS55MSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5MSA9IF8gPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgYXJlYSkgOiB5MTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMCA9XG4gIGFyZWEubGluZVkwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZWFsaW5lKCkueCh4MCkueSh5MCk7XG4gIH07XG5cbiAgYXJlYS5saW5lWTEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJlYWxpbmUoKS54KHgwKS55KHkxKTtcbiAgfTtcblxuICBhcmVhLmxpbmVYMSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmVhbGluZSgpLngoeDEpLnkoeTApO1xuICB9O1xuXG4gIGFyZWEuZGVmaW5lZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkZWZpbmVkID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBhcmVhKSA6IGRlZmluZWQ7XG4gIH07XG5cbiAgYXJlYS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjdXJ2ZSA9IF8sIGNvbnRleHQgIT0gbnVsbCAmJiAob3V0cHV0ID0gY3VydmUoY29udGV4dCkpLCBhcmVhKSA6IGN1cnZlO1xuICB9O1xuXG4gIGFyZWEuY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID09IG51bGwgPyBjb250ZXh0ID0gb3V0cHV0ID0gbnVsbCA6IG91dHB1dCA9IGN1cnZlKGNvbnRleHQgPSBfKSwgYXJlYSkgOiBjb250ZXh0O1xuICB9O1xuXG4gIHJldHVybiBhcmVhO1xufVxuIiwiaW1wb3J0IGN1cnZlUmFkaWFsLCB7Y3VydmVSYWRpYWxMaW5lYXJ9IGZyb20gXCIuL2N1cnZlL3JhZGlhbC5qc1wiO1xuaW1wb3J0IGFyZWEgZnJvbSBcIi4vYXJlYS5qc1wiO1xuaW1wb3J0IHtsaW5lUmFkaWFsfSBmcm9tIFwiLi9saW5lUmFkaWFsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgYSA9IGFyZWEoKS5jdXJ2ZShjdXJ2ZVJhZGlhbExpbmVhciksXG4gICAgICBjID0gYS5jdXJ2ZSxcbiAgICAgIHgwID0gYS5saW5lWDAsXG4gICAgICB4MSA9IGEubGluZVgxLFxuICAgICAgeTAgPSBhLmxpbmVZMCxcbiAgICAgIHkxID0gYS5saW5lWTE7XG5cbiAgYS5hbmdsZSA9IGEueCwgZGVsZXRlIGEueDtcbiAgYS5zdGFydEFuZ2xlID0gYS54MCwgZGVsZXRlIGEueDA7XG4gIGEuZW5kQW5nbGUgPSBhLngxLCBkZWxldGUgYS54MTtcbiAgYS5yYWRpdXMgPSBhLnksIGRlbGV0ZSBhLnk7XG4gIGEuaW5uZXJSYWRpdXMgPSBhLnkwLCBkZWxldGUgYS55MDtcbiAgYS5vdXRlclJhZGl1cyA9IGEueTEsIGRlbGV0ZSBhLnkxO1xuICBhLmxpbmVTdGFydEFuZ2xlID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHgwKCkpOyB9LCBkZWxldGUgYS5saW5lWDA7XG4gIGEubGluZUVuZEFuZ2xlID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHgxKCkpOyB9LCBkZWxldGUgYS5saW5lWDE7XG4gIGEubGluZUlubmVyUmFkaXVzID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHkwKCkpOyB9LCBkZWxldGUgYS5saW5lWTA7XG4gIGEubGluZU91dGVyUmFkaXVzID0gZnVuY3Rpb24oKSB7IHJldHVybiBsaW5lUmFkaWFsKHkxKCkpOyB9LCBkZWxldGUgYS5saW5lWTE7XG5cbiAgYS5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGMoY3VydmVSYWRpYWwoXykpIDogYygpLl9jdXJ2ZTtcbiAgfTtcblxuICByZXR1cm4gYTtcbn1cbiIsImV4cG9ydCB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb25zdGFudCgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyhcbiAgICAoMiAqIHRoYXQuX3gwICsgdGhhdC5feDEpIC8gMyxcbiAgICAoMiAqIHRoYXQuX3kwICsgdGhhdC5feTEpIC8gMyxcbiAgICAodGhhdC5feDAgKyAyICogdGhhdC5feDEpIC8gMyxcbiAgICAodGhhdC5feTAgKyAyICogdGhhdC5feTEpIC8gMyxcbiAgICAodGhhdC5feDAgKyA0ICogdGhhdC5feDEgKyB4KSAvIDYsXG4gICAgKHRoYXQuX3kwICsgNCAqIHRoYXQuX3kxICsgeSkgLyA2XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCYXNpcyhjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5CYXNpcy5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMzogcG9pbnQodGhpcywgdGhpcy5feDEsIHRoaXMuX3kxKTsgLy8gcHJvY2VlZFxuICAgICAgY2FzZSAyOiB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MSwgdGhpcy5feTEpOyBicmVhaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX2NvbnRleHQubGluZVRvKCg1ICogdGhpcy5feDAgKyB0aGlzLl94MSkgLyA2LCAoNSAqIHRoaXMuX3kwICsgdGhpcy5feTEpIC8gNik7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IEJhc2lzKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3AuanNcIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmZ1bmN0aW9uIEJhc2lzQ2xvc2VkKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbkJhc2lzQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9IHRoaXMuX3gzID0gdGhpcy5feDQgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8oKHRoaXMuX3gyICsgMiAqIHRoaXMuX3gzKSAvIDMsICh0aGlzLl95MiArIDIgKiB0aGlzLl95MykgLyAzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oKHRoaXMuX3gzICsgMiAqIHRoaXMuX3gyKSAvIDMsICh0aGlzLl95MyArIDIgKiB0aGlzLl95MikgLyAzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MiwgdGhpcy5feTIpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDQsIHRoaXMuX3k0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl94MiA9IHgsIHRoaXMuX3kyID0geTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5feDMgPSB4LCB0aGlzLl95MyA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX3g0ID0geCwgdGhpcy5feTQgPSB5OyB0aGlzLl9jb250ZXh0Lm1vdmVUbygodGhpcy5feDAgKyA0ICogdGhpcy5feDEgKyB4KSAvIDYsICh0aGlzLl95MCArIDQgKiB0aGlzLl95MSArIHkpIC8gNik7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgQmFzaXNDbG9zZWQoY29udGV4dCk7XG59XG4iLCJpbXBvcnQge3BvaW50fSBmcm9tIFwiLi9iYXNpcy5qc1wiO1xuXG5mdW5jdGlvbiBCYXNpc09wZW4oY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuQmFzaXNPcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDMpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdmFyIHgwID0gKHRoaXMuX3gwICsgNCAqIHRoaXMuX3gxICsgeCkgLyA2LCB5MCA9ICh0aGlzLl95MCArIDQgKiB0aGlzLl95MSArIHkpIC8gNjsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgwLCB5MCkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4MCwgeTApOyBicmVhaztcbiAgICAgIGNhc2UgMzogdGhpcy5fcG9pbnQgPSA0OyAvLyBwcm9jZWVkXG4gICAgICBkZWZhdWx0OiBwb2ludCh0aGlzLCB4LCB5KTsgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuX3gwID0gdGhpcy5feDEsIHRoaXMuX3gxID0geDtcbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxLCB0aGlzLl95MSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBCYXNpc09wZW4oY29udGV4dCk7XG59XG4iLCJpbXBvcnQge0Jhc2lzfSBmcm9tIFwiLi9iYXNpcy5qc1wiO1xuXG5mdW5jdGlvbiBCdW5kbGUoY29udGV4dCwgYmV0YSkge1xuICB0aGlzLl9iYXNpcyA9IG5ldyBCYXNpcyhjb250ZXh0KTtcbiAgdGhpcy5fYmV0YSA9IGJldGE7XG59XG5cbkJ1bmRsZS5wcm90b3R5cGUgPSB7XG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feCA9IFtdO1xuICAgIHRoaXMuX3kgPSBbXTtcbiAgICB0aGlzLl9iYXNpcy5saW5lU3RhcnQoKTtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHggPSB0aGlzLl94LFxuICAgICAgICB5ID0gdGhpcy5feSxcbiAgICAgICAgaiA9IHgubGVuZ3RoIC0gMTtcblxuICAgIGlmIChqID4gMCkge1xuICAgICAgdmFyIHgwID0geFswXSxcbiAgICAgICAgICB5MCA9IHlbMF0sXG4gICAgICAgICAgZHggPSB4W2pdIC0geDAsXG4gICAgICAgICAgZHkgPSB5W2pdIC0geTAsXG4gICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgIHQ7XG5cbiAgICAgIHdoaWxlICgrK2kgPD0gaikge1xuICAgICAgICB0ID0gaSAvIGo7XG4gICAgICAgIHRoaXMuX2Jhc2lzLnBvaW50KFxuICAgICAgICAgIHRoaXMuX2JldGEgKiB4W2ldICsgKDEgLSB0aGlzLl9iZXRhKSAqICh4MCArIHQgKiBkeCksXG4gICAgICAgICAgdGhpcy5fYmV0YSAqIHlbaV0gKyAoMSAtIHRoaXMuX2JldGEpICogKHkwICsgdCAqIGR5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gbnVsbDtcbiAgICB0aGlzLl9iYXNpcy5saW5lRW5kKCk7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5feC5wdXNoKCt4KTtcbiAgICB0aGlzLl95LnB1c2goK3kpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKGJldGEpIHtcblxuICBmdW5jdGlvbiBidW5kbGUoY29udGV4dCkge1xuICAgIHJldHVybiBiZXRhID09PSAxID8gbmV3IEJhc2lzKGNvbnRleHQpIDogbmV3IEJ1bmRsZShjb250ZXh0LCBiZXRhKTtcbiAgfVxuXG4gIGJ1bmRsZS5iZXRhID0gZnVuY3Rpb24oYmV0YSkge1xuICAgIHJldHVybiBjdXN0b20oK2JldGEpO1xuICB9O1xuXG4gIHJldHVybiBidW5kbGU7XG59KSgwLjg1KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwb2ludCh0aGF0LCB4LCB5KSB7XG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyhcbiAgICB0aGF0Ll94MSArIHRoYXQuX2sgKiAodGhhdC5feDIgLSB0aGF0Ll94MCksXG4gICAgdGhhdC5feTEgKyB0aGF0Ll9rICogKHRoYXQuX3kyIC0gdGhhdC5feTApLFxuICAgIHRoYXQuX3gyICsgdGhhdC5fayAqICh0aGF0Ll94MSAtIHgpLFxuICAgIHRoYXQuX3kyICsgdGhhdC5fayAqICh0aGF0Ll95MSAtIHkpLFxuICAgIHRoYXQuX3gyLFxuICAgIHRoYXQuX3kyXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkaW5hbChjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHBvaW50KHRoaXMsIHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgdGhpcy5feDEgPSB4LCB0aGlzLl95MSA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHBvaW50KHRoaXMsIHgsIHkpOyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbSh0ZW5zaW9uKSB7XG5cbiAgZnVuY3Rpb24gY2FyZGluYWwoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ2FyZGluYWwoY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuIiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3AuanNcIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2NhcmRpbmFsLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkaW5hbENsb3NlZChjb250ZXh0LCB0ZW5zaW9uKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9rID0gKDEgLSB0ZW5zaW9uKSAvIDY7XG59XG5cbkNhcmRpbmFsQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9IHRoaXMuX3gzID0gdGhpcy5feDQgPSB0aGlzLl94NSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gdGhpcy5feTMgPSB0aGlzLl95NCA9IHRoaXMuX3k1ID0gTmFOO1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gzLCB0aGlzLl95Myk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94NCwgdGhpcy5feTQpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g1LCB0aGlzLl95NSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5feDMgPSB4LCB0aGlzLl95MyA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3g0ID0geCwgdGhpcy5feTQgPSB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5feDUgPSB4LCB0aGlzLl95NSA9IHk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKHRlbnNpb24pIHtcblxuICBmdW5jdGlvbiBjYXJkaW5hbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBDYXJkaW5hbENsb3NlZChjb250ZXh0LCB0ZW5zaW9uKTtcbiAgfVxuXG4gIGNhcmRpbmFsLnRlbnNpb24gPSBmdW5jdGlvbih0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrdGVuc2lvbik7XG4gIH07XG5cbiAgcmV0dXJuIGNhcmRpbmFsO1xufSkoMCk7XG4iLCJpbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXJkaW5hbC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZGluYWxPcGVuKGNvbnRleHQsIHRlbnNpb24pIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2sgPSAoMSAtIHRlbnNpb24pIC8gNjtcbn1cblxuQ2FyZGluYWxPcGVuLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAzKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMuX3BvaW50ID0gNDsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxLCB0aGlzLl94MSA9IHRoaXMuX3gyLCB0aGlzLl94MiA9IHg7XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSwgdGhpcy5feTEgPSB0aGlzLl95MiwgdGhpcy5feTIgPSB5O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gY3VzdG9tKHRlbnNpb24pIHtcblxuICBmdW5jdGlvbiBjYXJkaW5hbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBDYXJkaW5hbE9wZW4oY29udGV4dCwgdGVuc2lvbik7XG4gIH1cblxuICBjYXJkaW5hbC50ZW5zaW9uID0gZnVuY3Rpb24odGVuc2lvbikge1xuICAgIHJldHVybiBjdXN0b20oK3RlbnNpb24pO1xuICB9O1xuXG4gIHJldHVybiBjYXJkaW5hbDtcbn0pKDApO1xuIiwiaW1wb3J0IHtlcHNpbG9ufSBmcm9tIFwiLi4vbWF0aC5qc1wiO1xuaW1wb3J0IHtDYXJkaW5hbH0gZnJvbSBcIi4vY2FyZGluYWwuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KHRoYXQsIHgsIHkpIHtcbiAgdmFyIHgxID0gdGhhdC5feDEsXG4gICAgICB5MSA9IHRoYXQuX3kxLFxuICAgICAgeDIgPSB0aGF0Ll94MixcbiAgICAgIHkyID0gdGhhdC5feTI7XG5cbiAgaWYgKHRoYXQuX2wwMV9hID4gZXBzaWxvbikge1xuICAgIHZhciBhID0gMiAqIHRoYXQuX2wwMV8yYSArIDMgKiB0aGF0Ll9sMDFfYSAqIHRoYXQuX2wxMl9hICsgdGhhdC5fbDEyXzJhLFxuICAgICAgICBuID0gMyAqIHRoYXQuX2wwMV9hICogKHRoYXQuX2wwMV9hICsgdGhhdC5fbDEyX2EpO1xuICAgIHgxID0gKHgxICogYSAtIHRoYXQuX3gwICogdGhhdC5fbDEyXzJhICsgdGhhdC5feDIgKiB0aGF0Ll9sMDFfMmEpIC8gbjtcbiAgICB5MSA9ICh5MSAqIGEgLSB0aGF0Ll95MCAqIHRoYXQuX2wxMl8yYSArIHRoYXQuX3kyICogdGhhdC5fbDAxXzJhKSAvIG47XG4gIH1cblxuICBpZiAodGhhdC5fbDIzX2EgPiBlcHNpbG9uKSB7XG4gICAgdmFyIGIgPSAyICogdGhhdC5fbDIzXzJhICsgMyAqIHRoYXQuX2wyM19hICogdGhhdC5fbDEyX2EgKyB0aGF0Ll9sMTJfMmEsXG4gICAgICAgIG0gPSAzICogdGhhdC5fbDIzX2EgKiAodGhhdC5fbDIzX2EgKyB0aGF0Ll9sMTJfYSk7XG4gICAgeDIgPSAoeDIgKiBiICsgdGhhdC5feDEgKiB0aGF0Ll9sMjNfMmEgLSB4ICogdGhhdC5fbDEyXzJhKSAvIG07XG4gICAgeTIgPSAoeTIgKiBiICsgdGhhdC5feTEgKiB0aGF0Ll9sMjNfMmEgLSB5ICogdGhhdC5fbDEyXzJhKSAvIG07XG4gIH1cblxuICB0aGF0Ll9jb250ZXh0LmJlemllckN1cnZlVG8oeDEsIHkxLCB4MiwgeTIsIHRoYXQuX3gyLCB0aGF0Ll95Mik7XG59XG5cbmZ1bmN0aW9uIENhdG11bGxSb20oY29udGV4dCwgYWxwaGEpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX2FscGhhID0gYWxwaGE7XG59XG5cbkNhdG11bGxSb20ucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3gwID0gdGhpcy5feDEgPSB0aGlzLl94MiA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9IHRoaXMuX3kyID0gTmFOO1xuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EgPSB0aGlzLl9sMjNfYSA9XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhID0gdGhpcy5fbDIzXzJhID1cbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMjogdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMucG9pbnQodGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl9saW5lIHx8ICh0aGlzLl9saW5lICE9PSAwICYmIHRoaXMuX3BvaW50ID09PSAxKSkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9saW5lID0gMSAtIHRoaXMuX2xpbmU7XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgeCA9ICt4LCB5ID0gK3k7XG5cbiAgICBpZiAodGhpcy5fcG9pbnQpIHtcbiAgICAgIHZhciB4MjMgPSB0aGlzLl94MiAtIHgsXG4gICAgICAgICAgeTIzID0gdGhpcy5feTIgLSB5O1xuICAgICAgdGhpcy5fbDIzX2EgPSBNYXRoLnNxcnQodGhpcy5fbDIzXzJhID0gTWF0aC5wb3coeDIzICogeDIzICsgeTIzICogeTIzLCB0aGlzLl9hbHBoYSkpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EsIHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2E7XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhLCB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmE7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShhbHBoYSkge1xuXG4gIGZ1bmN0aW9uIGNhdG11bGxSb20oY29udGV4dCkge1xuICAgIHJldHVybiBhbHBoYSA/IG5ldyBDYXRtdWxsUm9tKGNvbnRleHQsIGFscGhhKSA6IG5ldyBDYXJkaW5hbChjb250ZXh0LCAwKTtcbiAgfVxuXG4gIGNhdG11bGxSb20uYWxwaGEgPSBmdW5jdGlvbihhbHBoYSkge1xuICAgIHJldHVybiBjdXN0b20oK2FscGhhKTtcbiAgfTtcblxuICByZXR1cm4gY2F0bXVsbFJvbTtcbn0pKDAuNSk7XG4iLCJpbXBvcnQge0NhcmRpbmFsQ2xvc2VkfSBmcm9tIFwiLi9jYXJkaW5hbENsb3NlZC5qc1wiO1xuaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3AuanNcIjtcbmltcG9ydCB7cG9pbnR9IGZyb20gXCIuL2NhdG11bGxSb20uanNcIjtcblxuZnVuY3Rpb24gQ2F0bXVsbFJvbUNsb3NlZChjb250ZXh0LCBhbHBoYSkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5fYWxwaGEgPSBhbHBoYTtcbn1cblxuQ2F0bXVsbFJvbUNsb3NlZC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogbm9vcCxcbiAgYXJlYUVuZDogbm9vcCxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3gxID0gdGhpcy5feDIgPSB0aGlzLl94MyA9IHRoaXMuX3g0ID0gdGhpcy5feDUgPVxuICAgIHRoaXMuX3kwID0gdGhpcy5feTEgPSB0aGlzLl95MiA9IHRoaXMuX3kzID0gdGhpcy5feTQgPSB0aGlzLl95NSA9IE5hTjtcbiAgICB0aGlzLl9sMDFfYSA9IHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2EgPVxuICAgIHRoaXMuX2wwMV8yYSA9IHRoaXMuX2wxMl8yYSA9IHRoaXMuX2wyM18yYSA9XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feDMsIHRoaXMuX3kzKTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5wb2ludCh0aGlzLl94MywgdGhpcy5feTMpO1xuICAgICAgICB0aGlzLnBvaW50KHRoaXMuX3g0LCB0aGlzLl95NCk7XG4gICAgICAgIHRoaXMucG9pbnQodGhpcy5feDUsIHRoaXMuX3k1KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuXG4gICAgaWYgKHRoaXMuX3BvaW50KSB7XG4gICAgICB2YXIgeDIzID0gdGhpcy5feDIgLSB4LFxuICAgICAgICAgIHkyMyA9IHRoaXMuX3kyIC0geTtcbiAgICAgIHRoaXMuX2wyM19hID0gTWF0aC5zcXJ0KHRoaXMuX2wyM18yYSA9IE1hdGgucG93KHgyMyAqIHgyMyArIHkyMyAqIHkyMywgdGhpcy5fYWxwaGEpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5feDMgPSB4LCB0aGlzLl95MyA9IHk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IHRoaXMuX2NvbnRleHQubW92ZVRvKHRoaXMuX3g0ID0geCwgdGhpcy5feTQgPSB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDI6IHRoaXMuX3BvaW50ID0gMzsgdGhpcy5feDUgPSB4LCB0aGlzLl95NSA9IHk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EsIHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2E7XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhLCB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmE7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShhbHBoYSkge1xuXG4gIGZ1bmN0aW9uIGNhdG11bGxSb20oY29udGV4dCkge1xuICAgIHJldHVybiBhbHBoYSA/IG5ldyBDYXRtdWxsUm9tQ2xvc2VkKGNvbnRleHQsIGFscGhhKSA6IG5ldyBDYXJkaW5hbENsb3NlZChjb250ZXh0LCAwKTtcbiAgfVxuXG4gIGNhdG11bGxSb20uYWxwaGEgPSBmdW5jdGlvbihhbHBoYSkge1xuICAgIHJldHVybiBjdXN0b20oK2FscGhhKTtcbiAgfTtcblxuICByZXR1cm4gY2F0bXVsbFJvbTtcbn0pKDAuNSk7XG4iLCJpbXBvcnQge0NhcmRpbmFsT3Blbn0gZnJvbSBcIi4vY2FyZGluYWxPcGVuLmpzXCI7XG5pbXBvcnQge3BvaW50fSBmcm9tIFwiLi9jYXRtdWxsUm9tLmpzXCI7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21PcGVuKGNvbnRleHQsIGFscGhhKSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLl9hbHBoYSA9IGFscGhhO1xufVxuXG5DYXRtdWxsUm9tT3Blbi5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9IHRoaXMuX3gyID1cbiAgICB0aGlzLl95MCA9IHRoaXMuX3kxID0gdGhpcy5feTIgPSBOYU47XG4gICAgdGhpcy5fbDAxX2EgPSB0aGlzLl9sMTJfYSA9IHRoaXMuX2wyM19hID1cbiAgICB0aGlzLl9sMDFfMmEgPSB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmEgPVxuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDMpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcblxuICAgIGlmICh0aGlzLl9wb2ludCkge1xuICAgICAgdmFyIHgyMyA9IHRoaXMuX3gyIC0geCxcbiAgICAgICAgICB5MjMgPSB0aGlzLl95MiAtIHk7XG4gICAgICB0aGlzLl9sMjNfYSA9IE1hdGguc3FydCh0aGlzLl9sMjNfMmEgPSBNYXRoLnBvdyh4MjMgKiB4MjMgKyB5MjMgKiB5MjMsIHRoaXMuX2FscGhhKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzLl9wb2ludCA9IDM7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh0aGlzLl94MiwgdGhpcy5feTIpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8odGhpcy5feDIsIHRoaXMuX3kyKTsgYnJlYWs7XG4gICAgICBjYXNlIDM6IHRoaXMuX3BvaW50ID0gNDsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgeCwgeSk7IGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuX2wwMV9hID0gdGhpcy5fbDEyX2EsIHRoaXMuX2wxMl9hID0gdGhpcy5fbDIzX2E7XG4gICAgdGhpcy5fbDAxXzJhID0gdGhpcy5fbDEyXzJhLCB0aGlzLl9sMTJfMmEgPSB0aGlzLl9sMjNfMmE7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB0aGlzLl94MiwgdGhpcy5feDIgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0gdGhpcy5feTIsIHRoaXMuX3kyID0geTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGN1c3RvbShhbHBoYSkge1xuXG4gIGZ1bmN0aW9uIGNhdG11bGxSb20oY29udGV4dCkge1xuICAgIHJldHVybiBhbHBoYSA/IG5ldyBDYXRtdWxsUm9tT3Blbihjb250ZXh0LCBhbHBoYSkgOiBuZXcgQ2FyZGluYWxPcGVuKGNvbnRleHQsIDApO1xuICB9XG5cbiAgY2F0bXVsbFJvbS5hbHBoYSA9IGZ1bmN0aW9uKGFscGhhKSB7XG4gICAgcmV0dXJuIGN1c3RvbSgrYWxwaGEpO1xuICB9O1xuXG4gIHJldHVybiBjYXRtdWxsUm9tO1xufSkoMC41KTtcbiIsImZ1bmN0aW9uIExpbmVhcihjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5MaW5lYXIucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuX2xpbmUgPSAxIC0gdGhpcy5fbGluZTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB4ID0gK3gsIHkgPSAreTtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHRoaXMuX3BvaW50ID0gMTsgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzLl9wb2ludCA9IDI7IC8vIHByb2NlZWRcbiAgICAgIGRlZmF1bHQ6IHRoaXMuX2NvbnRleHQubGluZVRvKHgsIHkpOyBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBMaW5lYXIoY29udGV4dCk7XG59XG4iLCJpbXBvcnQgbm9vcCBmcm9tIFwiLi4vbm9vcC5qc1wiO1xuXG5mdW5jdGlvbiBMaW5lYXJDbG9zZWQoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuTGluZWFyQ2xvc2VkLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBub29wLFxuICBhcmVhRW5kOiBub29wLFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3BvaW50KSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIGlmICh0aGlzLl9wb2ludCkgdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgZWxzZSB0aGlzLl9wb2ludCA9IDEsIHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTGluZWFyQ2xvc2VkKGNvbnRleHQpO1xufVxuIiwiZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiB4IDwgMCA/IC0xIDogMTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBzbG9wZXMgb2YgdGhlIHRhbmdlbnRzIChIZXJtaXRlLXR5cGUgaW50ZXJwb2xhdGlvbikgYmFzZWQgb25cbi8vIHRoZSBmb2xsb3dpbmcgcGFwZXI6IFN0ZWZmZW4sIE0uIDE5OTAuIEEgU2ltcGxlIE1ldGhvZCBmb3IgTW9ub3RvbmljXG4vLyBJbnRlcnBvbGF0aW9uIGluIE9uZSBEaW1lbnNpb24uIEFzdHJvbm9teSBhbmQgQXN0cm9waHlzaWNzLCBWb2wuIDIzOSwgTk8uXG4vLyBOT1YoSUkpLCBQLiA0NDMsIDE5OTAuXG5mdW5jdGlvbiBzbG9wZTModGhhdCwgeDIsIHkyKSB7XG4gIHZhciBoMCA9IHRoYXQuX3gxIC0gdGhhdC5feDAsXG4gICAgICBoMSA9IHgyIC0gdGhhdC5feDEsXG4gICAgICBzMCA9ICh0aGF0Ll95MSAtIHRoYXQuX3kwKSAvIChoMCB8fCBoMSA8IDAgJiYgLTApLFxuICAgICAgczEgPSAoeTIgLSB0aGF0Ll95MSkgLyAoaDEgfHwgaDAgPCAwICYmIC0wKSxcbiAgICAgIHAgPSAoczAgKiBoMSArIHMxICogaDApIC8gKGgwICsgaDEpO1xuICByZXR1cm4gKHNpZ24oczApICsgc2lnbihzMSkpICogTWF0aC5taW4oTWF0aC5hYnMoczApLCBNYXRoLmFicyhzMSksIDAuNSAqIE1hdGguYWJzKHApKSB8fCAwO1xufVxuXG4vLyBDYWxjdWxhdGUgYSBvbmUtc2lkZWQgc2xvcGUuXG5mdW5jdGlvbiBzbG9wZTIodGhhdCwgdCkge1xuICB2YXIgaCA9IHRoYXQuX3gxIC0gdGhhdC5feDA7XG4gIHJldHVybiBoID8gKDMgKiAodGhhdC5feTEgLSB0aGF0Ll95MCkgLyBoIC0gdCkgLyAyIDogdDtcbn1cblxuLy8gQWNjb3JkaW5nIHRvIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1YmljX0hlcm1pdGVfc3BsaW5lI1JlcHJlc2VudGF0aW9uc1xuLy8gXCJ5b3UgY2FuIGV4cHJlc3MgY3ViaWMgSGVybWl0ZSBpbnRlcnBvbGF0aW9uIGluIHRlcm1zIG9mIGN1YmljIELDqXppZXIgY3VydmVzXG4vLyB3aXRoIHJlc3BlY3QgdG8gdGhlIGZvdXIgdmFsdWVzIHAwLCBwMCArIG0wIC8gMywgcDEgLSBtMSAvIDMsIHAxXCIuXG5mdW5jdGlvbiBwb2ludCh0aGF0LCB0MCwgdDEpIHtcbiAgdmFyIHgwID0gdGhhdC5feDAsXG4gICAgICB5MCA9IHRoYXQuX3kwLFxuICAgICAgeDEgPSB0aGF0Ll94MSxcbiAgICAgIHkxID0gdGhhdC5feTEsXG4gICAgICBkeCA9ICh4MSAtIHgwKSAvIDM7XG4gIHRoYXQuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCArIGR4LCB5MCArIGR4ICogdDAsIHgxIC0gZHgsIHkxIC0gZHggKiB0MSwgeDEsIHkxKTtcbn1cblxuZnVuY3Rpb24gTW9ub3RvbmVYKGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbk1vbm90b25lWC5wcm90b3R5cGUgPSB7XG4gIGFyZWFTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIGFyZWFFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSA9XG4gICAgdGhpcy5feTAgPSB0aGlzLl95MSA9XG4gICAgdGhpcy5fdDAgPSBOYU47XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDI6IHRoaXMuX2NvbnRleHQubGluZVRvKHRoaXMuX3gxLCB0aGlzLl95MSk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiBwb2ludCh0aGlzLCB0aGlzLl90MCwgc2xvcGUyKHRoaXMsIHRoaXMuX3QwKSk7IGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGluZSB8fCAodGhpcy5fbGluZSAhPT0gMCAmJiB0aGlzLl9wb2ludCA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB0MSA9IE5hTjtcblxuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIGlmICh4ID09PSB0aGlzLl94MSAmJiB5ID09PSB0aGlzLl95MSkgcmV0dXJuOyAvLyBJZ25vcmUgY29pbmNpZGVudCBwb2ludHMuXG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB0aGlzLl9wb2ludCA9IDE7IHRoaXMuX2xpbmUgPyB0aGlzLl9jb250ZXh0LmxpbmVUbyh4LCB5KSA6IHRoaXMuX2NvbnRleHQubW92ZVRvKHgsIHkpOyBicmVhaztcbiAgICAgIGNhc2UgMTogdGhpcy5fcG9pbnQgPSAyOyBicmVhaztcbiAgICAgIGNhc2UgMjogdGhpcy5fcG9pbnQgPSAzOyBwb2ludCh0aGlzLCBzbG9wZTIodGhpcywgdDEgPSBzbG9wZTModGhpcywgeCwgeSkpLCB0MSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcG9pbnQodGhpcywgdGhpcy5fdDAsIHQxID0gc2xvcGUzKHRoaXMsIHgsIHkpKTsgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5feDAgPSB0aGlzLl94MSwgdGhpcy5feDEgPSB4O1xuICAgIHRoaXMuX3kwID0gdGhpcy5feTEsIHRoaXMuX3kxID0geTtcbiAgICB0aGlzLl90MCA9IHQxO1xuICB9XG59XG5cbmZ1bmN0aW9uIE1vbm90b25lWShjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBuZXcgUmVmbGVjdENvbnRleHQoY29udGV4dCk7XG59XG5cbihNb25vdG9uZVkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb25vdG9uZVgucHJvdG90eXBlKSkucG9pbnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIE1vbm90b25lWC5wcm90b3R5cGUucG9pbnQuY2FsbCh0aGlzLCB5LCB4KTtcbn07XG5cbmZ1bmN0aW9uIFJlZmxlY3RDb250ZXh0KGNvbnRleHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG59XG5cblJlZmxlY3RDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgbW92ZVRvOiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuX2NvbnRleHQubW92ZVRvKHksIHgpOyB9LFxuICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkgeyB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpOyB9LFxuICBsaW5lVG86IGZ1bmN0aW9uKHgsIHkpIHsgdGhpcy5fY29udGV4dC5saW5lVG8oeSwgeCk7IH0sXG4gIGJlemllckN1cnZlVG86IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCB4LCB5KSB7IHRoaXMuX2NvbnRleHQuYmV6aWVyQ3VydmVUbyh5MSwgeDEsIHkyLCB4MiwgeSwgeCk7IH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtb25vdG9uZVgoY29udGV4dCkge1xuICByZXR1cm4gbmV3IE1vbm90b25lWChjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbm90b25lWShjb250ZXh0KSB7XG4gIHJldHVybiBuZXcgTW9ub3RvbmVZKGNvbnRleHQpO1xufVxuIiwiZnVuY3Rpb24gTmF0dXJhbChjb250ZXh0KSB7XG4gIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xufVxuXG5OYXR1cmFsLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gW107XG4gICAgdGhpcy5feSA9IFtdO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IHRoaXMuX3gsXG4gICAgICAgIHkgPSB0aGlzLl95LFxuICAgICAgICBuID0geC5sZW5ndGg7XG5cbiAgICBpZiAobikge1xuICAgICAgdGhpcy5fbGluZSA/IHRoaXMuX2NvbnRleHQubGluZVRvKHhbMF0sIHlbMF0pIDogdGhpcy5fY29udGV4dC5tb3ZlVG8oeFswXSwgeVswXSk7XG4gICAgICBpZiAobiA9PT0gMikge1xuICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4WzFdLCB5WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBweCA9IGNvbnRyb2xQb2ludHMoeCksXG4gICAgICAgICAgICBweSA9IGNvbnRyb2xQb2ludHMoeSk7XG4gICAgICAgIGZvciAodmFyIGkwID0gMCwgaTEgPSAxOyBpMSA8IG47ICsraTAsICsraTEpIHtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmJlemllckN1cnZlVG8ocHhbMF1baTBdLCBweVswXVtpMF0sIHB4WzFdW2kwXSwgcHlbMV1baTBdLCB4W2kxXSwgeVtpMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgbiA9PT0gMSkpIHRoaXMuX2NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICAgIHRoaXMuX3ggPSB0aGlzLl95ID0gbnVsbDtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0aGlzLl94LnB1c2goK3gpO1xuICAgIHRoaXMuX3kucHVzaCgreSk7XG4gIH1cbn07XG5cbi8vIFNlZSBodHRwczovL3d3dy5wYXJ0aWNsZWluY2VsbC5jb20vMjAxMi9iZXppZXItc3BsaW5lcy8gZm9yIGRlcml2YXRpb24uXG5mdW5jdGlvbiBjb250cm9sUG9pbnRzKHgpIHtcbiAgdmFyIGksXG4gICAgICBuID0geC5sZW5ndGggLSAxLFxuICAgICAgbSxcbiAgICAgIGEgPSBuZXcgQXJyYXkobiksXG4gICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgciA9IG5ldyBBcnJheShuKTtcbiAgYVswXSA9IDAsIGJbMF0gPSAyLCByWzBdID0geFswXSArIDIgKiB4WzFdO1xuICBmb3IgKGkgPSAxOyBpIDwgbiAtIDE7ICsraSkgYVtpXSA9IDEsIGJbaV0gPSA0LCByW2ldID0gNCAqIHhbaV0gKyAyICogeFtpICsgMV07XG4gIGFbbiAtIDFdID0gMiwgYltuIC0gMV0gPSA3LCByW24gLSAxXSA9IDggKiB4W24gLSAxXSArIHhbbl07XG4gIGZvciAoaSA9IDE7IGkgPCBuOyArK2kpIG0gPSBhW2ldIC8gYltpIC0gMV0sIGJbaV0gLT0gbSwgcltpXSAtPSBtICogcltpIC0gMV07XG4gIGFbbiAtIDFdID0gcltuIC0gMV0gLyBiW24gLSAxXTtcbiAgZm9yIChpID0gbiAtIDI7IGkgPj0gMDsgLS1pKSBhW2ldID0gKHJbaV0gLSBhW2kgKyAxXSkgLyBiW2ldO1xuICBiW24gLSAxXSA9ICh4W25dICsgYVtuIC0gMV0pIC8gMjtcbiAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyArK2kpIGJbaV0gPSAyICogeFtpICsgMV0gLSBhW2kgKyAxXTtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICByZXR1cm4gbmV3IE5hdHVyYWwoY29udGV4dCk7XG59XG4iLCJpbXBvcnQgY3VydmVMaW5lYXIgZnJvbSBcIi4vbGluZWFyLmpzXCI7XG5cbmV4cG9ydCB2YXIgY3VydmVSYWRpYWxMaW5lYXIgPSBjdXJ2ZVJhZGlhbChjdXJ2ZUxpbmVhcik7XG5cbmZ1bmN0aW9uIFJhZGlhbChjdXJ2ZSkge1xuICB0aGlzLl9jdXJ2ZSA9IGN1cnZlO1xufVxuXG5SYWRpYWwucHJvdG90eXBlID0ge1xuICBhcmVhU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmFyZWFTdGFydCgpO1xuICB9LFxuICBhcmVhRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jdXJ2ZS5hcmVhRW5kKCk7XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3VydmUubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2N1cnZlLmxpbmVFbmQoKTtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKGEsIHIpIHtcbiAgICB0aGlzLl9jdXJ2ZS5wb2ludChyICogTWF0aC5zaW4oYSksIHIgKiAtTWF0aC5jb3MoYSkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJ2ZVJhZGlhbChjdXJ2ZSkge1xuXG4gIGZ1bmN0aW9uIHJhZGlhbChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBSYWRpYWwoY3VydmUoY29udGV4dCkpO1xuICB9XG5cbiAgcmFkaWFsLl9jdXJ2ZSA9IGN1cnZlO1xuXG4gIHJldHVybiByYWRpYWw7XG59XG4iLCJmdW5jdGlvbiBTdGVwKGNvbnRleHQsIHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuX3QgPSB0O1xufVxuXG5TdGVwLnByb3RvdHlwZSA9IHtcbiAgYXJlYVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgYXJlYUVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gdGhpcy5feSA9IE5hTjtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICgwIDwgdGhpcy5fdCAmJiB0aGlzLl90IDwgMSAmJiB0aGlzLl9wb2ludCA9PT0gMikgdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feCwgdGhpcy5feSk7XG4gICAgaWYgKHRoaXMuX2xpbmUgfHwgKHRoaXMuX2xpbmUgIT09IDAgJiYgdGhpcy5fcG9pbnQgPT09IDEpKSB0aGlzLl9jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIGlmICh0aGlzLl9saW5lID49IDApIHRoaXMuX3QgPSAxIC0gdGhpcy5fdCwgdGhpcy5fbGluZSA9IDEgLSB0aGlzLl9saW5lO1xuICB9LFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHggPSAreCwgeSA9ICt5O1xuICAgIHN3aXRjaCAodGhpcy5fcG9pbnQpIHtcbiAgICAgIGNhc2UgMDogdGhpcy5fcG9pbnQgPSAxOyB0aGlzLl9saW5lID8gdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSkgOiB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4LCB5KTsgYnJlYWs7XG4gICAgICBjYXNlIDE6IHRoaXMuX3BvaW50ID0gMjsgLy8gcHJvY2VlZFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAodGhpcy5fdCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8odGhpcy5feCwgeSk7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHgxID0gdGhpcy5feCAqICgxIC0gdGhpcy5fdCkgKyB4ICogdGhpcy5fdDtcbiAgICAgICAgICB0aGlzLl9jb250ZXh0LmxpbmVUbyh4MSwgdGhpcy5feSk7XG4gICAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeDEsIHkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl94ID0geCwgdGhpcy5feSA9IHk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBTdGVwKGNvbnRleHQsIDAuNSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGVwQmVmb3JlKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBTdGVwKGNvbnRleHQsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RlcEFmdGVyKGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBTdGVwKGNvbnRleHQsIDEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYiA8IGEgPyAtMSA6IGIgPiBhID8gMSA6IGIgPj0gYSA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIHJldHVybiBkO1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGFyY30gZnJvbSBcIi4vYXJjLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYXJlYX0gZnJvbSBcIi4vYXJlYS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxpbmV9IGZyb20gXCIuL2xpbmUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwaWV9IGZyb20gXCIuL3BpZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFyZWFSYWRpYWwsIGRlZmF1bHQgYXMgcmFkaWFsQXJlYX0gZnJvbSBcIi4vYXJlYVJhZGlhbC5qc1wiOyAvLyBOb3RlOiByYWRpYWxBcmVhIGlzIGRlcHJlY2F0ZWQhXG5leHBvcnQge2RlZmF1bHQgYXMgbGluZVJhZGlhbCwgZGVmYXVsdCBhcyByYWRpYWxMaW5lfSBmcm9tIFwiLi9saW5lUmFkaWFsLmpzXCI7IC8vIE5vdGU6IHJhZGlhbExpbmUgaXMgZGVwcmVjYXRlZCFcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwb2ludFJhZGlhbH0gZnJvbSBcIi4vcG9pbnRSYWRpYWwuanNcIjtcbmV4cG9ydCB7bGlua0hvcml6b250YWwsIGxpbmtWZXJ0aWNhbCwgbGlua1JhZGlhbH0gZnJvbSBcIi4vbGluay9pbmRleC5qc1wiO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sLCBzeW1ib2xzfSBmcm9tIFwiLi9zeW1ib2wuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xDaXJjbGV9IGZyb20gXCIuL3N5bWJvbC9jaXJjbGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xDcm9zc30gZnJvbSBcIi4vc3ltYm9sL2Nyb3NzLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3ltYm9sRGlhbW9uZH0gZnJvbSBcIi4vc3ltYm9sL2RpYW1vbmQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xTcXVhcmV9IGZyb20gXCIuL3N5bWJvbC9zcXVhcmUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xTdGFyfSBmcm9tIFwiLi9zeW1ib2wvc3Rhci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN5bWJvbFRyaWFuZ2xlfSBmcm9tIFwiLi9zeW1ib2wvdHJpYW5nbGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzeW1ib2xXeWV9IGZyb20gXCIuL3N5bWJvbC93eWUuanNcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXNDbG9zZWR9IGZyb20gXCIuL2N1cnZlL2Jhc2lzQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCYXNpc09wZW59IGZyb20gXCIuL2N1cnZlL2Jhc2lzT3Blbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQmFzaXN9IGZyb20gXCIuL2N1cnZlL2Jhc2lzLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVCdW5kbGV9IGZyb20gXCIuL2N1cnZlL2J1bmRsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWxDbG9zZWR9IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXJkaW5hbE9wZW59IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsT3Blbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1cnZlQ2FyZGluYWx9IGZyb20gXCIuL2N1cnZlL2NhcmRpbmFsLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tQ2xvc2VkfSBmcm9tIFwiLi9jdXJ2ZS9jYXRtdWxsUm9tQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVDYXRtdWxsUm9tT3Blbn0gZnJvbSBcIi4vY3VydmUvY2F0bXVsbFJvbU9wZW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUNhdG11bGxSb219IGZyb20gXCIuL2N1cnZlL2NhdG11bGxSb20uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZUxpbmVhckNsb3NlZH0gZnJvbSBcIi4vY3VydmUvbGluZWFyQ2xvc2VkLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3VydmVMaW5lYXJ9IGZyb20gXCIuL2N1cnZlL2xpbmVhci5qc1wiO1xuZXhwb3J0IHttb25vdG9uZVggYXMgY3VydmVNb25vdG9uZVgsIG1vbm90b25lWSBhcyBjdXJ2ZU1vbm90b25lWX0gZnJvbSBcIi4vY3VydmUvbW9ub3RvbmUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZU5hdHVyYWx9IGZyb20gXCIuL2N1cnZlL25hdHVyYWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdXJ2ZVN0ZXAsIHN0ZXBBZnRlciBhcyBjdXJ2ZVN0ZXBBZnRlciwgc3RlcEJlZm9yZSBhcyBjdXJ2ZVN0ZXBCZWZvcmV9IGZyb20gXCIuL2N1cnZlL3N0ZXAuanNcIjtcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrfSBmcm9tIFwiLi9zdGFjay5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0RXhwYW5kfSBmcm9tIFwiLi9vZmZzZXQvZXhwYW5kLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXREaXZlcmdpbmd9IGZyb20gXCIuL29mZnNldC9kaXZlcmdpbmcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09mZnNldE5vbmV9IGZyb20gXCIuL29mZnNldC9ub25lLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPZmZzZXRTaWxob3VldHRlfSBmcm9tIFwiLi9vZmZzZXQvc2lsaG91ZXR0ZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT2Zmc2V0V2lnZ2xlfSBmcm9tIFwiLi9vZmZzZXQvd2lnZ2xlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlckFwcGVhcmFuY2V9IGZyb20gXCIuL29yZGVyL2FwcGVhcmFuY2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyQXNjZW5kaW5nfSBmcm9tIFwiLi9vcmRlci9hc2NlbmRpbmcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGFja09yZGVyRGVzY2VuZGluZ30gZnJvbSBcIi4vb3JkZXIvZGVzY2VuZGluZy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJJbnNpZGVPdXR9IGZyb20gXCIuL29yZGVyL2luc2lkZU91dC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0YWNrT3JkZXJOb25lfSBmcm9tIFwiLi9vcmRlci9ub25lLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RhY2tPcmRlclJldmVyc2V9IGZyb20gXCIuL29yZGVyL3JldmVyc2UuanNcIjtcbiIsImltcG9ydCB7cGF0aH0gZnJvbSBcImQzLXBhdGhcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IGN1cnZlTGluZWFyIGZyb20gXCIuL2N1cnZlL2xpbmVhci5qc1wiO1xuaW1wb3J0IHt4IGFzIHBvaW50WCwgeSBhcyBwb2ludFl9IGZyb20gXCIuL3BvaW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBkZWZpbmVkID0gY29uc3RhbnQodHJ1ZSksXG4gICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGN1cnZlID0gY3VydmVMaW5lYXIsXG4gICAgICBvdXRwdXQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGxpbmUoZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGQsXG4gICAgICAgIGRlZmluZWQwID0gZmFsc2UsXG4gICAgICAgIGJ1ZmZlcjtcblxuICAgIGlmIChjb250ZXh0ID09IG51bGwpIG91dHB1dCA9IGN1cnZlKGJ1ZmZlciA9IHBhdGgoKSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDw9IG47ICsraSkge1xuICAgICAgaWYgKCEoaSA8IG4gJiYgZGVmaW5lZChkID0gZGF0YVtpXSwgaSwgZGF0YSkpID09PSBkZWZpbmVkMCkge1xuICAgICAgICBpZiAoZGVmaW5lZDAgPSAhZGVmaW5lZDApIG91dHB1dC5saW5lU3RhcnQoKTtcbiAgICAgICAgZWxzZSBvdXRwdXQubGluZUVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRlZmluZWQwKSBvdXRwdXQucG9pbnQoK3goZCwgaSwgZGF0YSksICt5KGQsIGksIGRhdGEpKTtcbiAgICB9XG5cbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gb3V0cHV0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgbGluZS54ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHggPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgbGluZSkgOiB4O1xuICB9O1xuXG4gIGxpbmUueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmUpIDogeTtcbiAgfTtcblxuICBsaW5lLmRlZmluZWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGVmaW5lZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoISFfKSwgbGluZSkgOiBkZWZpbmVkO1xuICB9O1xuXG4gIGxpbmUuY3VydmUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY3VydmUgPSBfLCBjb250ZXh0ICE9IG51bGwgJiYgKG91dHB1dCA9IGN1cnZlKGNvbnRleHQpKSwgbGluZSkgOiBjdXJ2ZTtcbiAgfTtcblxuICBsaW5lLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoXyA9PSBudWxsID8gY29udGV4dCA9IG91dHB1dCA9IG51bGwgOiBvdXRwdXQgPSBjdXJ2ZShjb250ZXh0ID0gXyksIGxpbmUpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cbiIsImltcG9ydCBjdXJ2ZVJhZGlhbCwge2N1cnZlUmFkaWFsTGluZWFyfSBmcm9tIFwiLi9jdXJ2ZS9yYWRpYWwuanNcIjtcbmltcG9ydCBsaW5lIGZyb20gXCIuL2xpbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVSYWRpYWwobCkge1xuICB2YXIgYyA9IGwuY3VydmU7XG5cbiAgbC5hbmdsZSA9IGwueCwgZGVsZXRlIGwueDtcbiAgbC5yYWRpdXMgPSBsLnksIGRlbGV0ZSBsLnk7XG5cbiAgbC5jdXJ2ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGMoY3VydmVSYWRpYWwoXykpIDogYygpLl9jdXJ2ZTtcbiAgfTtcblxuICByZXR1cm4gbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBsaW5lUmFkaWFsKGxpbmUoKS5jdXJ2ZShjdXJ2ZVJhZGlhbExpbmVhcikpO1xufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4uL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQge3ggYXMgcG9pbnRYLCB5IGFzIHBvaW50WX0gZnJvbSBcIi4uL3BvaW50LmpzXCI7XG5pbXBvcnQgcG9pbnRSYWRpYWwgZnJvbSBcIi4uL3BvaW50UmFkaWFsLmpzXCI7XG5cbmZ1bmN0aW9uIGxpbmtTb3VyY2UoZCkge1xuICByZXR1cm4gZC5zb3VyY2U7XG59XG5cbmZ1bmN0aW9uIGxpbmtUYXJnZXQoZCkge1xuICByZXR1cm4gZC50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGxpbmsoY3VydmUpIHtcbiAgdmFyIHNvdXJjZSA9IGxpbmtTb3VyY2UsXG4gICAgICB0YXJnZXQgPSBsaW5rVGFyZ2V0LFxuICAgICAgeCA9IHBvaW50WCxcbiAgICAgIHkgPSBwb2ludFksXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBsaW5rKCkge1xuICAgIHZhciBidWZmZXIsIGFyZ3YgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksIHMgPSBzb3VyY2UuYXBwbHkodGhpcywgYXJndiksIHQgPSB0YXJnZXQuYXBwbHkodGhpcywgYXJndik7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIGN1cnZlKGNvbnRleHQsICt4LmFwcGx5KHRoaXMsIChhcmd2WzBdID0gcywgYXJndikpLCAreS5hcHBseSh0aGlzLCBhcmd2KSwgK3guYXBwbHkodGhpcywgKGFyZ3ZbMF0gPSB0LCBhcmd2KSksICt5LmFwcGx5KHRoaXMsIGFyZ3YpKTtcbiAgICBpZiAoYnVmZmVyKSByZXR1cm4gY29udGV4dCA9IG51bGwsIGJ1ZmZlciArIFwiXCIgfHwgbnVsbDtcbiAgfVxuXG4gIGxpbmsuc291cmNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvdXJjZSA9IF8sIGxpbmspIDogc291cmNlO1xuICB9O1xuXG4gIGxpbmsudGFyZ2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRhcmdldCA9IF8sIGxpbmspIDogdGFyZ2V0O1xuICB9O1xuXG4gIGxpbmsueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGxpbmspIDogeDtcbiAgfTtcblxuICBsaW5rLnkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBsaW5rKSA6IHk7XG4gIH07XG5cbiAgbGluay5jb250ZXh0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKChjb250ZXh0ID0gXyA9PSBudWxsID8gbnVsbCA6IF8pLCBsaW5rKSA6IGNvbnRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGN1cnZlSG9yaXpvbnRhbChjb250ZXh0LCB4MCwgeTAsIHgxLCB5MSkge1xuICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8oeDAgPSAoeDAgKyB4MSkgLyAyLCB5MCwgeDAsIHkxLCB4MSwgeTEpO1xufVxuXG5mdW5jdGlvbiBjdXJ2ZVZlcnRpY2FsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gIGNvbnRleHQuYmV6aWVyQ3VydmVUbyh4MCwgeTAgPSAoeTAgKyB5MSkgLyAyLCB4MSwgeTAsIHgxLCB5MSk7XG59XG5cbmZ1bmN0aW9uIGN1cnZlUmFkaWFsKGNvbnRleHQsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHZhciBwMCA9IHBvaW50UmFkaWFsKHgwLCB5MCksXG4gICAgICBwMSA9IHBvaW50UmFkaWFsKHgwLCB5MCA9ICh5MCArIHkxKSAvIDIpLFxuICAgICAgcDIgPSBwb2ludFJhZGlhbCh4MSwgeTApLFxuICAgICAgcDMgPSBwb2ludFJhZGlhbCh4MSwgeTEpO1xuICBjb250ZXh0Lm1vdmVUbyhwMFswXSwgcDBbMV0pO1xuICBjb250ZXh0LmJlemllckN1cnZlVG8ocDFbMF0sIHAxWzFdLCBwMlswXSwgcDJbMV0sIHAzWzBdLCBwM1sxXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rSG9yaXpvbnRhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVIb3Jpem9udGFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtWZXJ0aWNhbCgpIHtcbiAgcmV0dXJuIGxpbmsoY3VydmVWZXJ0aWNhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rUmFkaWFsKCkge1xuICB2YXIgbCA9IGxpbmsoY3VydmVSYWRpYWwpO1xuICBsLmFuZ2xlID0gbC54LCBkZWxldGUgbC54O1xuICBsLnJhZGl1cyA9IGwueSwgZGVsZXRlIGwueTtcbiAgcmV0dXJuIGw7XG59XG4iLCJleHBvcnQgdmFyIGFicyA9IE1hdGguYWJzO1xuZXhwb3J0IHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG5leHBvcnQgdmFyIGNvcyA9IE1hdGguY29zO1xuZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHNpbiA9IE1hdGguc2luO1xuZXhwb3J0IHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuXG5leHBvcnQgdmFyIGVwc2lsb24gPSAxZS0xMjtcbmV4cG9ydCB2YXIgcGkgPSBNYXRoLlBJO1xuZXhwb3J0IHZhciBoYWxmUGkgPSBwaSAvIDI7XG5leHBvcnQgdmFyIHRhdSA9IDIgKiBwaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFjb3MoeCkge1xuICByZXR1cm4geCA+IDEgPyAwIDogeCA8IC0xID8gcGkgOiBNYXRoLmFjb3MoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2luKHgpIHtcbiAgcmV0dXJuIHggPj0gMSA/IGhhbGZQaSA6IHggPD0gLTEgPyAtaGFsZlBpIDogTWF0aC5hc2luKHgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaSwgaiA9IDAsIGQsIGR5LCB5cCwgeW4sIG4sIG0gPSBzZXJpZXNbb3JkZXJbMF1dLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAoeXAgPSB5biA9IDAsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKGR5ID0gKGQgPSBzZXJpZXNbb3JkZXJbaV1dW2pdKVsxXSAtIGRbMF0pID4gMCkge1xuICAgICAgICBkWzBdID0geXAsIGRbMV0gPSB5cCArPSBkeTtcbiAgICAgIH0gZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICAgIGRbMV0gPSB5biwgZFswXSA9IHluICs9IGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZFswXSA9IDAsIGRbMV0gPSBkeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkpIHJldHVybjtcbiAgZm9yICh2YXIgaSwgbiwgaiA9IDAsIG0gPSBzZXJpZXNbMF0ubGVuZ3RoLCB5OyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh5ID0gaSA9IDA7IGkgPCBuOyArK2kpIHkgKz0gc2VyaWVzW2ldW2pdWzFdIHx8IDA7XG4gICAgaWYgKHkpIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHNlcmllc1tpXVtqXVsxXSAvPSB5O1xuICB9XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMsIG9yZGVyKSB7XG4gIGlmICghKChuID0gc2VyaWVzLmxlbmd0aCkgPiAxKSkgcmV0dXJuO1xuICBmb3IgKHZhciBpID0gMSwgaiwgczAsIHMxID0gc2VyaWVzW29yZGVyWzBdXSwgbiwgbSA9IHMxLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIHMwID0gczEsIHMxID0gc2VyaWVzW29yZGVyW2ldXTtcbiAgICBmb3IgKGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgICBzMVtqXVsxXSArPSBzMVtqXVswXSA9IGlzTmFOKHMwW2pdWzFdKSA/IHMwW2pdWzBdIDogczBbal1bMV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcywgb3JkZXIpIHtcbiAgaWYgKCEoKG4gPSBzZXJpZXMubGVuZ3RoKSA+IDApKSByZXR1cm47XG4gIGZvciAodmFyIGogPSAwLCBzMCA9IHNlcmllc1tvcmRlclswXV0sIG4sIG0gPSBzMC5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBpID0gMCwgeSA9IDA7IGkgPCBuOyArK2kpIHkgKz0gc2VyaWVzW2ldW2pdWzFdIHx8IDA7XG4gICAgczBbal1bMV0gKz0gczBbal1bMF0gPSAteSAvIDI7XG4gIH1cbiAgbm9uZShzZXJpZXMsIG9yZGVyKTtcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzLCBvcmRlcikge1xuICBpZiAoISgobiA9IHNlcmllcy5sZW5ndGgpID4gMCkgfHwgISgobSA9IChzMCA9IHNlcmllc1tvcmRlclswXV0pLmxlbmd0aCkgPiAwKSkgcmV0dXJuO1xuICBmb3IgKHZhciB5ID0gMCwgaiA9IDEsIHMwLCBtLCBuOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHMxID0gMCwgczIgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgc2kgPSBzZXJpZXNbb3JkZXJbaV1dLFxuICAgICAgICAgIHNpajAgPSBzaVtqXVsxXSB8fCAwLFxuICAgICAgICAgIHNpajEgPSBzaVtqIC0gMV1bMV0gfHwgMCxcbiAgICAgICAgICBzMyA9IChzaWowIC0gc2lqMSkgLyAyO1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBpOyArK2spIHtcbiAgICAgICAgdmFyIHNrID0gc2VyaWVzW29yZGVyW2tdXSxcbiAgICAgICAgICAgIHNrajAgPSBza1tqXVsxXSB8fCAwLFxuICAgICAgICAgICAgc2tqMSA9IHNrW2ogLSAxXVsxXSB8fCAwO1xuICAgICAgICBzMyArPSBza2owIC0gc2tqMTtcbiAgICAgIH1cbiAgICAgIHMxICs9IHNpajAsIHMyICs9IHMzICogc2lqMDtcbiAgICB9XG4gICAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gICAgaWYgKHMxKSB5IC09IHMyIC8gczE7XG4gIH1cbiAgczBbaiAtIDFdWzFdICs9IHMwW2ogLSAxXVswXSA9IHk7XG4gIG5vbmUoc2VyaWVzLCBvcmRlcik7XG59XG4iLCJpbXBvcnQgbm9uZSBmcm9tIFwiLi9ub25lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgcGVha3MgPSBzZXJpZXMubWFwKHBlYWspO1xuICByZXR1cm4gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gcGVha3NbYV0gLSBwZWFrc1tiXTsgfSk7XG59XG5cbmZ1bmN0aW9uIHBlYWsoc2VyaWVzKSB7XG4gIHZhciBpID0gLTEsIGogPSAwLCBuID0gc2VyaWVzLmxlbmd0aCwgdmksIHZqID0gLUluZmluaXR5O1xuICB3aGlsZSAoKytpIDwgbikgaWYgKCh2aSA9ICtzZXJpZXNbaV1bMV0pID4gdmopIHZqID0gdmksIGogPSBpO1xuICByZXR1cm4gajtcbn1cbiIsImltcG9ydCBub25lIGZyb20gXCIuL25vbmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBzdW1zID0gc2VyaWVzLm1hcChzdW0pO1xuICByZXR1cm4gbm9uZShzZXJpZXMpLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gc3Vtc1thXSAtIHN1bXNbYl07IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtKHNlcmllcykge1xuICB2YXIgcyA9IDAsIGkgPSAtMSwgbiA9IHNlcmllcy5sZW5ndGgsIHY7XG4gIHdoaWxlICgrK2kgPCBuKSBpZiAodiA9ICtzZXJpZXNbaV1bMV0pIHMgKz0gdjtcbiAgcmV0dXJuIHM7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIGFzY2VuZGluZyhzZXJpZXMpLnJldmVyc2UoKTtcbn1cbiIsImltcG9ydCBhcHBlYXJhbmNlIGZyb20gXCIuL2FwcGVhcmFuY2UuanNcIjtcbmltcG9ydCB7c3VtfSBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VyaWVzKSB7XG4gIHZhciBuID0gc2VyaWVzLmxlbmd0aCxcbiAgICAgIGksXG4gICAgICBqLFxuICAgICAgc3VtcyA9IHNlcmllcy5tYXAoc3VtKSxcbiAgICAgIG9yZGVyID0gYXBwZWFyYW5jZShzZXJpZXMpLFxuICAgICAgdG9wID0gMCxcbiAgICAgIGJvdHRvbSA9IDAsXG4gICAgICB0b3BzID0gW10sXG4gICAgICBib3R0b21zID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGogPSBvcmRlcltpXTtcbiAgICBpZiAodG9wIDwgYm90dG9tKSB7XG4gICAgICB0b3AgKz0gc3Vtc1tqXTtcbiAgICAgIHRvcHMucHVzaChqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm90dG9tICs9IHN1bXNbal07XG4gICAgICBib3R0b21zLnB1c2goaik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdHRvbXMucmV2ZXJzZSgpLmNvbmNhdCh0b3BzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlcmllcykge1xuICB2YXIgbiA9IHNlcmllcy5sZW5ndGgsIG8gPSBuZXcgQXJyYXkobik7XG4gIHdoaWxlICgtLW4gPj0gMCkgb1tuXSA9IG47XG4gIHJldHVybiBvO1xufVxuIiwiaW1wb3J0IG5vbmUgZnJvbSBcIi4vbm9uZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZXJpZXMpIHtcbiAgcmV0dXJuIG5vbmUoc2VyaWVzKS5yZXZlcnNlKCk7XG59XG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBkZXNjZW5kaW5nIGZyb20gXCIuL2Rlc2NlbmRpbmcuanNcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuaW1wb3J0IHt0YXV9IGZyb20gXCIuL21hdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgc29ydFZhbHVlcyA9IGRlc2NlbmRpbmcsXG4gICAgICBzb3J0ID0gbnVsbCxcbiAgICAgIHN0YXJ0QW5nbGUgPSBjb25zdGFudCgwKSxcbiAgICAgIGVuZEFuZ2xlID0gY29uc3RhbnQodGF1KSxcbiAgICAgIHBhZEFuZ2xlID0gY29uc3RhbnQoMCk7XG5cbiAgZnVuY3Rpb24gcGllKGRhdGEpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBqLFxuICAgICAgICBrLFxuICAgICAgICBzdW0gPSAwLFxuICAgICAgICBpbmRleCA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYXJjcyA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgYTAgPSArc3RhcnRBbmdsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICBkYSA9IE1hdGgubWluKHRhdSwgTWF0aC5tYXgoLXRhdSwgZW5kQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSAtIGEwKSksXG4gICAgICAgIGExLFxuICAgICAgICBwID0gTWF0aC5taW4oTWF0aC5hYnMoZGEpIC8gbiwgcGFkQW5nbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSksXG4gICAgICAgIHBhID0gcCAqIChkYSA8IDAgPyAtMSA6IDEpLFxuICAgICAgICB2O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh2ID0gYXJjc1tpbmRleFtpXSA9IGldID0gK3ZhbHVlKGRhdGFbaV0sIGksIGRhdGEpKSA+IDApIHtcbiAgICAgICAgc3VtICs9IHY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uYWxseSBzb3J0IHRoZSBhcmNzIGJ5IHByZXZpb3VzbHktY29tcHV0ZWQgdmFsdWVzIG9yIGJ5IGRhdGEuXG4gICAgaWYgKHNvcnRWYWx1ZXMgIT0gbnVsbCkgaW5kZXguc29ydChmdW5jdGlvbihpLCBqKSB7IHJldHVybiBzb3J0VmFsdWVzKGFyY3NbaV0sIGFyY3Nbal0pOyB9KTtcbiAgICBlbHNlIGlmIChzb3J0ICE9IG51bGwpIGluZGV4LnNvcnQoZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gc29ydChkYXRhW2ldLCBkYXRhW2pdKTsgfSk7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBhcmNzISBUaGV5IGFyZSBzdG9yZWQgaW4gdGhlIG9yaWdpbmFsIGRhdGEncyBvcmRlci5cbiAgICBmb3IgKGkgPSAwLCBrID0gc3VtID8gKGRhIC0gbiAqIHBhKSAvIHN1bSA6IDA7IGkgPCBuOyArK2ksIGEwID0gYTEpIHtcbiAgICAgIGogPSBpbmRleFtpXSwgdiA9IGFyY3Nbal0sIGExID0gYTAgKyAodiA+IDAgPyB2ICogayA6IDApICsgcGEsIGFyY3Nbal0gPSB7XG4gICAgICAgIGRhdGE6IGRhdGFbal0sXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgc3RhcnRBbmdsZTogYTAsXG4gICAgICAgIGVuZEFuZ2xlOiBhMSxcbiAgICAgICAgcGFkQW5nbGU6IHBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyY3M7XG4gIH1cblxuICBwaWUudmFsdWUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodmFsdWUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgcGllKSA6IHZhbHVlO1xuICB9O1xuXG4gIHBpZS5zb3J0VmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNvcnRWYWx1ZXMgPSBfLCBzb3J0ID0gbnVsbCwgcGllKSA6IHNvcnRWYWx1ZXM7XG4gIH07XG5cbiAgcGllLnNvcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc29ydCA9IF8sIHNvcnRWYWx1ZXMgPSBudWxsLCBwaWUpIDogc29ydDtcbiAgfTtcblxuICBwaWUuc3RhcnRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdGFydEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBzdGFydEFuZ2xlO1xuICB9O1xuXG4gIHBpZS5lbmRBbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlbmRBbmdsZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBwaWUpIDogZW5kQW5nbGU7XG4gIH07XG5cbiAgcGllLnBhZEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZEFuZ2xlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHBpZSkgOiBwYWRBbmdsZTtcbiAgfTtcblxuICByZXR1cm4gcGllO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHgocCkge1xuICByZXR1cm4gcFswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHkocCkge1xuICByZXR1cm4gcFsxXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIFsoeSA9ICt5KSAqIE1hdGguY29zKHggLT0gTWF0aC5QSSAvIDIpLCB5ICogTWF0aC5zaW4oeCldO1xufVxuIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuaW1wb3J0IG9mZnNldE5vbmUgZnJvbSBcIi4vb2Zmc2V0L25vbmUuanNcIjtcbmltcG9ydCBvcmRlck5vbmUgZnJvbSBcIi4vb3JkZXIvbm9uZS5qc1wiO1xuXG5mdW5jdGlvbiBzdGFja1ZhbHVlKGQsIGtleSkge1xuICByZXR1cm4gZFtrZXldO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGtleXMgPSBjb25zdGFudChbXSksXG4gICAgICBvcmRlciA9IG9yZGVyTm9uZSxcbiAgICAgIG9mZnNldCA9IG9mZnNldE5vbmUsXG4gICAgICB2YWx1ZSA9IHN0YWNrVmFsdWU7XG5cbiAgZnVuY3Rpb24gc3RhY2soZGF0YSkge1xuICAgIHZhciBreiA9IGtleXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgaSxcbiAgICAgICAgbSA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBuID0ga3oubGVuZ3RoLFxuICAgICAgICBzeiA9IG5ldyBBcnJheShuKSxcbiAgICAgICAgb3o7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBmb3IgKHZhciBraSA9IGt6W2ldLCBzaSA9IHN6W2ldID0gbmV3IEFycmF5KG0pLCBqID0gMCwgc2lqOyBqIDwgbTsgKytqKSB7XG4gICAgICAgIHNpW2pdID0gc2lqID0gWzAsICt2YWx1ZShkYXRhW2pdLCBraSwgaiwgZGF0YSldO1xuICAgICAgICBzaWouZGF0YSA9IGRhdGFbal07XG4gICAgICB9XG4gICAgICBzaS5rZXkgPSBraTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBveiA9IG9yZGVyKHN6KTsgaSA8IG47ICsraSkge1xuICAgICAgc3pbb3pbaV1dLmluZGV4ID0gaTtcbiAgICB9XG5cbiAgICBvZmZzZXQoc3osIG96KTtcbiAgICByZXR1cm4gc3o7XG4gIH1cblxuICBzdGFjay5rZXlzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGtleXMgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpLCBzdGFjaykgOiBrZXlzO1xuICB9O1xuXG4gIHN0YWNrLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIHN0YWNrKSA6IHZhbHVlO1xuICB9O1xuXG4gIHN0YWNrLm9yZGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9yZGVyID0gXyA9PSBudWxsID8gb3JkZXJOb25lIDogdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChzbGljZS5jYWxsKF8pKSwgc3RhY2spIDogb3JkZXI7XG4gIH07XG5cbiAgc3RhY2sub2Zmc2V0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9mZnNldCA9IF8gPT0gbnVsbCA/IG9mZnNldE5vbmUgOiBfLCBzdGFjaykgOiBvZmZzZXQ7XG4gIH07XG5cbiAgcmV0dXJuIHN0YWNrO1xufVxuIiwiaW1wb3J0IHtwYXRofSBmcm9tIFwiZDMtcGF0aFwiO1xuaW1wb3J0IGNpcmNsZSBmcm9tIFwiLi9zeW1ib2wvY2lyY2xlLmpzXCI7XG5pbXBvcnQgY3Jvc3MgZnJvbSBcIi4vc3ltYm9sL2Nyb3NzLmpzXCI7XG5pbXBvcnQgZGlhbW9uZCBmcm9tIFwiLi9zeW1ib2wvZGlhbW9uZC5qc1wiO1xuaW1wb3J0IHN0YXIgZnJvbSBcIi4vc3ltYm9sL3N0YXIuanNcIjtcbmltcG9ydCBzcXVhcmUgZnJvbSBcIi4vc3ltYm9sL3NxdWFyZS5qc1wiO1xuaW1wb3J0IHRyaWFuZ2xlIGZyb20gXCIuL3N5bWJvbC90cmlhbmdsZS5qc1wiO1xuaW1wb3J0IHd5ZSBmcm9tIFwiLi9zeW1ib2wvd3llLmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcblxuZXhwb3J0IHZhciBzeW1ib2xzID0gW1xuICBjaXJjbGUsXG4gIGNyb3NzLFxuICBkaWFtb25kLFxuICBzcXVhcmUsXG4gIHN0YXIsXG4gIHRyaWFuZ2xlLFxuICB3eWVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgdHlwZSA9IGNvbnN0YW50KGNpcmNsZSksXG4gICAgICBzaXplID0gY29uc3RhbnQoNjQpLFxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc3ltYm9sKCkge1xuICAgIHZhciBidWZmZXI7XG4gICAgaWYgKCFjb250ZXh0KSBjb250ZXh0ID0gYnVmZmVyID0gcGF0aCgpO1xuICAgIHR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5kcmF3KGNvbnRleHQsICtzaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIGlmIChidWZmZXIpIHJldHVybiBjb250ZXh0ID0gbnVsbCwgYnVmZmVyICsgXCJcIiB8fCBudWxsO1xuICB9XG5cbiAgc3ltYm9sLnR5cGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHlwZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIHN5bWJvbCkgOiB0eXBlO1xuICB9O1xuXG4gIHN5bWJvbC5zaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNpemUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgc3ltYm9sKSA6IHNpemU7XG4gIH07XG5cbiAgc3ltYm9sLmNvbnRleHQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY29udGV4dCA9IF8gPT0gbnVsbCA/IG51bGwgOiBfLCBzeW1ib2wpIDogY29udGV4dDtcbiAgfTtcblxuICByZXR1cm4gc3ltYm9sO1xufVxuIiwiaW1wb3J0IHtwaSwgdGF1fSBmcm9tIFwiLi4vbWF0aC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gcGkpO1xuICAgIGNvbnRleHQubW92ZVRvKHIsIDApO1xuICAgIGNvbnRleHQuYXJjKDAsIDAsIHIsIDAsIHRhdSk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgciA9IE1hdGguc3FydChzaXplIC8gNSkgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKC0zICogciwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIC0zICogcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgLTMgKiByKTtcbiAgICBjb250ZXh0LmxpbmVUbyhyLCAtcik7XG4gICAgY29udGV4dC5saW5lVG8oMyAqIHIsIC1yKTtcbiAgICBjb250ZXh0LmxpbmVUbygzICogciwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgcik7XG4gICAgY29udGV4dC5saW5lVG8ociwgMyAqIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC1yLCAzICogcik7XG4gICAgY29udGV4dC5saW5lVG8oLXIsIHIpO1xuICAgIGNvbnRleHQubGluZVRvKC0zICogciwgcik7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsInZhciB0YW4zMCA9IE1hdGguc3FydCgxIC8gMyksXG4gICAgdGFuMzBfMiA9IHRhbjMwICogMjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkcmF3OiBmdW5jdGlvbihjb250ZXh0LCBzaXplKSB7XG4gICAgdmFyIHkgPSBNYXRoLnNxcnQoc2l6ZSAvIHRhbjMwXzIpLFxuICAgICAgICB4ID0geSAqIHRhbjMwO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIC15KTtcbiAgICBjb250ZXh0LmxpbmVUbyh4LCAwKTtcbiAgICBjb250ZXh0LmxpbmVUbygwLCB5KTtcbiAgICBjb250ZXh0LmxpbmVUbygteCwgMCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciB3ID0gTWF0aC5zcXJ0KHNpemUpLFxuICAgICAgICB4ID0gLXcgLyAyO1xuICAgIGNvbnRleHQucmVjdCh4LCB4LCB3LCB3KTtcbiAgfVxufTtcbiIsImltcG9ydCB7cGksIHRhdX0gZnJvbSBcIi4uL21hdGguanNcIjtcblxudmFyIGthID0gMC44OTA4MTMwOTE1MjkyODUyMjgxMCxcbiAgICBrciA9IE1hdGguc2luKHBpIC8gMTApIC8gTWF0aC5zaW4oNyAqIHBpIC8gMTApLFxuICAgIGt4ID0gTWF0aC5zaW4odGF1IC8gMTApICoga3IsXG4gICAga3kgPSAtTWF0aC5jb3ModGF1IC8gMTApICoga3I7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgKiBrYSksXG4gICAgICAgIHggPSBreCAqIHIsXG4gICAgICAgIHkgPSBreSAqIHI7XG4gICAgY29udGV4dC5tb3ZlVG8oMCwgLXIpO1xuICAgIGNvbnRleHQubGluZVRvKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgKytpKSB7XG4gICAgICB2YXIgYSA9IHRhdSAqIGkgLyA1LFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhKSxcbiAgICAgICAgICBzID0gTWF0aC5zaW4oYSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhzICogciwgLWMgKiByKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGMgKiB4IC0gcyAqIHksIHMgKiB4ICsgYyAqIHkpO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59O1xuIiwidmFyIHNxcnQzID0gTWF0aC5zcXJ0KDMpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRyYXc6IGZ1bmN0aW9uKGNvbnRleHQsIHNpemUpIHtcbiAgICB2YXIgeSA9IC1NYXRoLnNxcnQoc2l6ZSAvIChzcXJ0MyAqIDMpKTtcbiAgICBjb250ZXh0Lm1vdmVUbygwLCB5ICogMik7XG4gICAgY29udGV4dC5saW5lVG8oLXNxcnQzICogeSwgLXkpO1xuICAgIGNvbnRleHQubGluZVRvKHNxcnQzICogeSwgLXkpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJ2YXIgYyA9IC0wLjUsXG4gICAgcyA9IE1hdGguc3FydCgzKSAvIDIsXG4gICAgayA9IDEgLyBNYXRoLnNxcnQoMTIpLFxuICAgIGEgPSAoayAvIDIgKyAxKSAqIDM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZHJhdzogZnVuY3Rpb24oY29udGV4dCwgc2l6ZSkge1xuICAgIHZhciByID0gTWF0aC5zcXJ0KHNpemUgLyBhKSxcbiAgICAgICAgeDAgPSByIC8gMixcbiAgICAgICAgeTAgPSByICogayxcbiAgICAgICAgeDEgPSB4MCxcbiAgICAgICAgeTEgPSByICogayArIHIsXG4gICAgICAgIHgyID0gLXgxLFxuICAgICAgICB5MiA9IHkxO1xuICAgIGNvbnRleHQubW92ZVRvKHgwLCB5MCk7XG4gICAgY29udGV4dC5saW5lVG8oeDEsIHkxKTtcbiAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCAtIHMgKiB5MCwgcyAqIHgwICsgYyAqIHkwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgLSBzICogeTEsIHMgKiB4MSArIGMgKiB5MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyIC0gcyAqIHkyLCBzICogeDIgKyBjICogeTIpO1xuICAgIGNvbnRleHQubGluZVRvKGMgKiB4MCArIHMgKiB5MCwgYyAqIHkwIC0gcyAqIHgwKTtcbiAgICBjb250ZXh0LmxpbmVUbyhjICogeDEgKyBzICogeTEsIGMgKiB5MSAtIHMgKiB4MSk7XG4gICAgY29udGV4dC5saW5lVG8oYyAqIHgyICsgcyAqIHkyLCBjICogeTIgLSBzICogeDIpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn07XG4iLCJleHBvcnQge1xuICBub3csXG4gIHRpbWVyLFxuICB0aW1lckZsdXNoXG59IGZyb20gXCIuL3RpbWVyLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZW91dFxufSBmcm9tIFwiLi90aW1lb3V0LmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgaW50ZXJ2YWxcbn0gZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbiIsImltcG9ydCB7VGltZXIsIG5vd30gZnJvbSBcIi4vdGltZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyLCB0b3RhbCA9IGRlbGF5O1xuICBpZiAoZGVsYXkgPT0gbnVsbCkgcmV0dXJuIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpLCB0O1xuICBkZWxheSA9ICtkZWxheSwgdGltZSA9IHRpbWUgPT0gbnVsbCA/IG5vdygpIDogK3RpbWU7XG4gIHQucmVzdGFydChmdW5jdGlvbiB0aWNrKGVsYXBzZWQpIHtcbiAgICBlbGFwc2VkICs9IHRvdGFsO1xuICAgIHQucmVzdGFydCh0aWNrLCB0b3RhbCArPSBkZWxheSwgdGltZSk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCk7XG4gIH0sIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi90aW1lci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIGRlbGF5ID0gZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXk7XG4gIHQucmVzdGFydChmdW5jdGlvbihlbGFwc2VkKSB7XG4gICAgdC5zdG9wKCk7XG4gICAgY2FsbGJhY2soZWxhcHNlZCArIGRlbGF5KTtcbiAgfSwgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cbiIsInZhciBmcmFtZSA9IDAsIC8vIGlzIGFuIGFuaW1hdGlvbiBmcmFtZSBwZW5kaW5nP1xuICAgIHRpbWVvdXQgPSAwLCAvLyBpcyBhIHRpbWVvdXQgcGVuZGluZz9cbiAgICBpbnRlcnZhbCA9IDAsIC8vIGFyZSBhbnkgdGltZXJzIGFjdGl2ZT9cbiAgICBwb2tlRGVsYXkgPSAxMDAwLCAvLyBob3cgZnJlcXVlbnRseSB3ZSBjaGVjayBmb3IgY2xvY2sgc2tld1xuICAgIHRhc2tIZWFkLFxuICAgIHRhc2tUYWlsLFxuICAgIGNsb2NrTGFzdCA9IDAsXG4gICAgY2xvY2tOb3cgPSAwLFxuICAgIGNsb2NrU2tldyA9IDAsXG4gICAgY2xvY2sgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09IFwib2JqZWN0XCIgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2UgOiBEYXRlLFxuICAgIHNldEZyYW1lID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykgOiBmdW5jdGlvbihmKSB7IHNldFRpbWVvdXQoZiwgMTcpOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gY2xvY2tOb3cgfHwgKHNldEZyYW1lKGNsZWFyTm93KSwgY2xvY2tOb3cgPSBjbG9jay5ub3coKSArIGNsb2NrU2tldyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm93KCkge1xuICBjbG9ja05vdyA9IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW1lcigpIHtcbiAgdGhpcy5fY2FsbCA9XG4gIHRoaXMuX3RpbWUgPVxuICB0aGlzLl9uZXh0ID0gbnVsbDtcbn1cblxuVGltZXIucHJvdG90eXBlID0gdGltZXIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVGltZXIsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWxheSwgdGltZSkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHRpbWUgPSAodGltZSA9PSBudWxsID8gbm93KCkgOiArdGltZSkgKyAoZGVsYXkgPT0gbnVsbCA/IDAgOiArZGVsYXkpO1xuICAgIGlmICghdGhpcy5fbmV4dCAmJiB0YXNrVGFpbCAhPT0gdGhpcykge1xuICAgICAgaWYgKHRhc2tUYWlsKSB0YXNrVGFpbC5fbmV4dCA9IHRoaXM7XG4gICAgICBlbHNlIHRhc2tIZWFkID0gdGhpcztcbiAgICAgIHRhc2tUYWlsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5fY2FsbCA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgIHNsZWVwKCk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYWxsKSB7XG4gICAgICB0aGlzLl9jYWxsID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWUgPSBJbmZpbml0eTtcbiAgICAgIHNsZWVwKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZXIoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gIHZhciB0ID0gbmV3IFRpbWVyO1xuICB0LnJlc3RhcnQoY2FsbGJhY2ssIGRlbGF5LCB0aW1lKTtcbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lckZsdXNoKCkge1xuICBub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUsIGlmIG5vdCBhbHJlYWR5IHNldC5cbiAgKytmcmFtZTsgLy8gUHJldGVuZCB3ZeKAmXZlIHNldCBhbiBhbGFybSwgaWYgd2UgaGF2ZW7igJl0IGFscmVhZHkuXG4gIHZhciB0ID0gdGFza0hlYWQsIGU7XG4gIHdoaWxlICh0KSB7XG4gICAgaWYgKChlID0gY2xvY2tOb3cgLSB0Ll90aW1lKSA+PSAwKSB0Ll9jYWxsLmNhbGwobnVsbCwgZSk7XG4gICAgdCA9IHQuX25leHQ7XG4gIH1cbiAgLS1mcmFtZTtcbn1cblxuZnVuY3Rpb24gd2FrZSgpIHtcbiAgY2xvY2tOb3cgPSAoY2xvY2tMYXN0ID0gY2xvY2subm93KCkpICsgY2xvY2tTa2V3O1xuICBmcmFtZSA9IHRpbWVvdXQgPSAwO1xuICB0cnkge1xuICAgIHRpbWVyRmx1c2goKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBmcmFtZSA9IDA7XG4gICAgbmFwKCk7XG4gICAgY2xvY2tOb3cgPSAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBva2UoKSB7XG4gIHZhciBub3cgPSBjbG9jay5ub3coKSwgZGVsYXkgPSBub3cgLSBjbG9ja0xhc3Q7XG4gIGlmIChkZWxheSA+IHBva2VEZWxheSkgY2xvY2tTa2V3IC09IGRlbGF5LCBjbG9ja0xhc3QgPSBub3c7XG59XG5cbmZ1bmN0aW9uIG5hcCgpIHtcbiAgdmFyIHQwLCB0MSA9IHRhc2tIZWFkLCB0MiwgdGltZSA9IEluZmluaXR5O1xuICB3aGlsZSAodDEpIHtcbiAgICBpZiAodDEuX2NhbGwpIHtcbiAgICAgIGlmICh0aW1lID4gdDEuX3RpbWUpIHRpbWUgPSB0MS5fdGltZTtcbiAgICAgIHQwID0gdDEsIHQxID0gdDEuX25leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQyID0gdDEuX25leHQsIHQxLl9uZXh0ID0gbnVsbDtcbiAgICAgIHQxID0gdDAgPyB0MC5fbmV4dCA9IHQyIDogdGFza0hlYWQgPSB0MjtcbiAgICB9XG4gIH1cbiAgdGFza1RhaWwgPSB0MDtcbiAgc2xlZXAodGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgaWYgKGZyYW1lKSByZXR1cm47IC8vIFNvb25lc3QgYWxhcm0gYWxyZWFkeSBzZXQsIG9yIHdpbGwgYmUuXG4gIGlmICh0aW1lb3V0KSB0aW1lb3V0ID0gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB2YXIgZGVsYXkgPSB0aW1lIC0gY2xvY2tOb3c7IC8vIFN0cmljdGx5IGxlc3MgdGhhbiBpZiB3ZSByZWNvbXB1dGVkIGNsb2NrTm93LlxuICBpZiAoZGVsYXkgPiAyNCkge1xuICAgIGlmICh0aW1lIDwgSW5maW5pdHkpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHdha2UsIHRpbWUgLSBjbG9jay5ub3coKSAtIGNsb2NrU2tldyk7XG4gICAgaWYgKGludGVydmFsKSBpbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW50ZXJ2YWwpIGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpLCBpbnRlcnZhbCA9IHNldEludGVydmFsKHBva2UsIHBva2VEZWxheSk7XG4gICAgZnJhbWUgPSAxLCBzZXRGcmFtZSh3YWtlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi90cmFuc2l0aW9uL2luZGV4LmpzXCI7XG5pbXBvcnQge1NDSEVEVUxFRH0gZnJvbSBcIi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuXG52YXIgcm9vdCA9IFtudWxsXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGk7XG5cbiAgaWYgKHNjaGVkdWxlcykge1xuICAgIG5hbWUgPSBuYW1lID09IG51bGwgPyBudWxsIDogbmFtZSArIFwiXCI7XG4gICAgZm9yIChpIGluIHNjaGVkdWxlcykge1xuICAgICAgaWYgKChzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXSkuc3RhdGUgPiBTQ0hFRFVMRUQgJiYgc2NoZWR1bGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zaXRpb24oW1tub2RlXV0sIHJvb3QsIG5hbWUsICtpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJhbnNpdGlvbn0gZnJvbSBcIi4vdHJhbnNpdGlvbi9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFjdGl2ZX0gZnJvbSBcIi4vYWN0aXZlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJydXB0fSBmcm9tIFwiLi9pbnRlcnJ1cHQuanNcIjtcbiIsImltcG9ydCB7U1RBUlRJTkcsIEVORElORywgRU5ERUR9IGZyb20gXCIuL3RyYW5zaXRpb24vc2NoZWR1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb24sXG4gICAgICBzY2hlZHVsZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGVtcHR5ID0gdHJ1ZSxcbiAgICAgIGk7XG5cbiAgaWYgKCFzY2hlZHVsZXMpIHJldHVybjtcblxuICBuYW1lID0gbmFtZSA9PSBudWxsID8gbnVsbCA6IG5hbWUgKyBcIlwiO1xuXG4gIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICBpZiAoKHNjaGVkdWxlID0gc2NoZWR1bGVzW2ldKS5uYW1lICE9PSBuYW1lKSB7IGVtcHR5ID0gZmFsc2U7IGNvbnRpbnVlOyB9XG4gICAgYWN0aXZlID0gc2NoZWR1bGUuc3RhdGUgPiBTVEFSVElORyAmJiBzY2hlZHVsZS5zdGF0ZSA8IEVORElORztcbiAgICBzY2hlZHVsZS5zdGF0ZSA9IEVOREVEO1xuICAgIHNjaGVkdWxlLnRpbWVyLnN0b3AoKTtcbiAgICBzY2hlZHVsZS5vbi5jYWxsKGFjdGl2ZSA/IFwiaW50ZXJydXB0XCIgOiBcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBzY2hlZHVsZS5pbmRleCwgc2NoZWR1bGUuZ3JvdXApO1xuICAgIGRlbGV0ZSBzY2hlZHVsZXNbaV07XG4gIH1cblxuICBpZiAoZW1wdHkpIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbn1cbiIsImltcG9ydCB7c2VsZWN0aW9ufSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2ludGVycnVwdCBmcm9tIFwiLi9pbnRlcnJ1cHQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdHJhbnNpdGlvbiBmcm9tIFwiLi90cmFuc2l0aW9uLmpzXCI7XG5cbnNlbGVjdGlvbi5wcm90b3R5cGUuaW50ZXJydXB0ID0gc2VsZWN0aW9uX2ludGVycnVwdDtcbnNlbGVjdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IHNlbGVjdGlvbl90cmFuc2l0aW9uO1xuIiwiaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi4vaW50ZXJydXB0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBpbnRlcnJ1cHQodGhpcywgbmFtZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtUcmFuc2l0aW9uLCBuZXdJZH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW5kZXguanNcIjtcbmltcG9ydCBzY2hlZHVsZSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHtlYXNlQ3ViaWNJbk91dH0gZnJvbSBcImQzLWVhc2VcIjtcbmltcG9ydCB7bm93fSBmcm9tIFwiZDMtdGltZXJcIjtcblxudmFyIGRlZmF1bHRUaW1pbmcgPSB7XG4gIHRpbWU6IG51bGwsIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBlYXNlQ3ViaWNJbk91dFxufTtcblxuZnVuY3Rpb24gaW5oZXJpdChub2RlLCBpZCkge1xuICB2YXIgdGltaW5nO1xuICB3aGlsZSAoISh0aW1pbmcgPSBub2RlLl9fdHJhbnNpdGlvbikgfHwgISh0aW1pbmcgPSB0aW1pbmdbaWRdKSkge1xuICAgIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFRpbWluZy50aW1lID0gbm93KCksIGRlZmF1bHRUaW1pbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aW1pbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIGlkLFxuICAgICAgdGltaW5nO1xuXG4gIGlmIChuYW1lIGluc3RhbmNlb2YgVHJhbnNpdGlvbikge1xuICAgIGlkID0gbmFtZS5faWQsIG5hbWUgPSBuYW1lLl9uYW1lO1xuICB9IGVsc2Uge1xuICAgIGlkID0gbmV3SWQoKSwgKHRpbWluZyA9IGRlZmF1bHRUaW1pbmcpLnRpbWUgPSBub3coKSwgbmFtZSA9IG5hbWUgPT0gbnVsbCA/IG51bGwgOiBuYW1lICsgXCJcIjtcbiAgfVxuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHNjaGVkdWxlKG5vZGUsIG5hbWUsIGlkLCBpLCBncm91cCwgdGltaW5nIHx8IGluaGVyaXQobm9kZSwgaWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtU3ZnIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bmFtZXNwYWNlfSBmcm9tIFwiZDMtc2VsZWN0aW9uXCI7XG5pbXBvcnQge3R3ZWVuVmFsdWV9IGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSBcIi4vaW50ZXJwb2xhdGUuanNcIjtcblxuZnVuY3Rpb24gYXR0clJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0clJlbW92ZU5TKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudChuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUxKSB7XG4gIHZhciBzdHJpbmcwMCxcbiAgICAgIHN0cmluZzEgPSB2YWx1ZTEgKyBcIlwiLFxuICAgICAgaW50ZXJwb2xhdGUwO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwLCB2YWx1ZTEgPSB2YWx1ZSh0aGlzKSwgc3RyaW5nMTtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHJldHVybiB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIHN0cmluZzAgPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJGdW5jdGlvbk5TKGZ1bGxuYW1lLCBpbnRlcnBvbGF0ZSwgdmFsdWUpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMTAsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCwgdmFsdWUxID0gdmFsdWUodGhpcyksIHN0cmluZzE7XG4gICAgaWYgKHZhbHVlMSA9PSBudWxsKSByZXR1cm4gdm9pZCB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgc3RyaW5nMCA9IHRoaXMuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICByZXR1cm4gc3RyaW5nMCA9PT0gc3RyaW5nMSA/IG51bGxcbiAgICAgICAgOiBzdHJpbmcwID09PSBzdHJpbmcwMCAmJiBzdHJpbmcxID09PSBzdHJpbmcxMCA/IGludGVycG9sYXRlMFxuICAgICAgICA6IChzdHJpbmcxMCA9IHN0cmluZzEsIGludGVycG9sYXRlMCA9IGludGVycG9sYXRlKHN0cmluZzAwID0gc3RyaW5nMCwgdmFsdWUxKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKSwgaSA9IGZ1bGxuYW1lID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHRoaXMuYXR0clR3ZWVuKG5hbWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKShmdWxsbmFtZSwgaSwgdHdlZW5WYWx1ZSh0aGlzLCBcImF0dHIuXCIgKyBuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHZhbHVlID09IG51bGwgPyAoZnVsbG5hbWUubG9jYWwgPyBhdHRyUmVtb3ZlTlMgOiBhdHRyUmVtb3ZlKShmdWxsbmFtZSlcbiAgICAgIDogKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckNvbnN0YW50TlMgOiBhdHRyQ29uc3RhbnQpKGZ1bGxuYW1lLCBpLCB2YWx1ZSkpO1xufVxuIiwiaW1wb3J0IHtuYW1lc3BhY2V9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcblxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKG5hbWUsIGkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsLCBpLmNhbGwodGhpcywgdCkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyVHdlZW5OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHQwLCBpMDtcbiAgZnVuY3Rpb24gdHdlZW4oKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmIChpICE9PSBpMCkgdDAgPSAoaTAgPSBpKSAmJiBhdHRySW50ZXJwb2xhdGVOUyhmdWxsbmFtZSwgaSk7XG4gICAgcmV0dXJuIHQwO1xuICB9XG4gIHR3ZWVuLl92YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gdHdlZW47XG59XG5cbmZ1bmN0aW9uIGF0dHJUd2VlbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgdDAsIGkwO1xuICBmdW5jdGlvbiB0d2VlbigpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGkgIT09IGkwKSB0MCA9IChpMCA9IGkpICYmIGF0dHJJbnRlcnBvbGF0ZShuYW1lLCBpKTtcbiAgICByZXR1cm4gdDA7XG4gIH1cbiAgdHdlZW4uX3ZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0d2Vlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9IFwiYXR0ci5cIiArIG5hbWU7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgdmFyIGZ1bGxuYW1lID0gbmFtZXNwYWNlKG5hbWUpO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIChmdWxsbmFtZS5sb2NhbCA/IGF0dHJUd2Vlbk5TIDogYXR0clR3ZWVuKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBpbml0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxheUZ1bmN0aW9uKGlkLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaW5pdCh0aGlzLCBpZCkuZGVsYXkgPSArdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsYXlDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID0gK3ZhbHVlLCBmdW5jdGlvbigpIHtcbiAgICBpbml0KHRoaXMsIGlkKS5kZWxheSA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkZWxheUZ1bmN0aW9uXG4gICAgICAgICAgOiBkZWxheUNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kZWxheTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGR1cmF0aW9uRnVuY3Rpb24oaWQsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmR1cmF0aW9uID0gK3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGR1cmF0aW9uQ29uc3RhbnQoaWQsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9ICt2YWx1ZSwgZnVuY3Rpb24oKSB7XG4gICAgc2V0KHRoaXMsIGlkKS5kdXJhdGlvbiA9IHZhbHVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgaWQgPSB0aGlzLl9pZDtcblxuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2goKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBkdXJhdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgOiBkdXJhdGlvbkNvbnN0YW50KShpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5kdXJhdGlvbjtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIGVhc2VDb25zdGFudChpZCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3I7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBzZXQodGhpcywgaWQpLmVhc2UgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFyIGlkID0gdGhpcy5faWQ7XG5cbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKGVhc2VDb25zdGFudChpZCwgdmFsdWUpKVxuICAgICAgOiBnZXQodGhpcy5ub2RlKCksIGlkKS5lYXNlO1xufVxuIiwiaW1wb3J0IHtzZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgb24wLCBvbjEsIHRoYXQgPSB0aGlzLCBpZCA9IHRoYXQuX2lkLCBzaXplID0gdGhhdC5zaXplKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgY2FuY2VsID0ge3ZhbHVlOiByZWplY3R9LFxuICAgICAgICBlbmQgPSB7dmFsdWU6IGZ1bmN0aW9uKCkgeyBpZiAoLS1zaXplID09PSAwKSByZXNvbHZlKCk7IH19O1xuXG4gICAgdGhhdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgICBvbiA9IHNjaGVkdWxlLm9uO1xuXG4gICAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAgIC8vIGp1c3QgYXNzaWduIHRoZSB1cGRhdGVkIHNoYXJlZCBkaXNwYXRjaCBhbmQgd2XigJlyZSBkb25lIVxuICAgICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgICAgaWYgKG9uICE9PSBvbjApIHtcbiAgICAgICAgb24xID0gKG9uMCA9IG9uKS5jb3B5KCk7XG4gICAgICAgIG9uMS5fLmNhbmNlbC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmludGVycnVwdC5wdXNoKGNhbmNlbCk7XG4gICAgICAgIG9uMS5fLmVuZC5wdXNoKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNjaGVkdWxlLm9uID0gb24xO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7bWF0Y2hlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB0cmFuc2l0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fYXR0clR3ZWVuIGZyb20gXCIuL2F0dHJUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fZGVsYXkgZnJvbSBcIi4vZGVsYXkuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2R1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lYXNlIGZyb20gXCIuL2Vhc2UuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX2ZpbHRlciBmcm9tIFwiLi9maWx0ZXIuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX21lcmdlIGZyb20gXCIuL21lcmdlLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbC5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGUuanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3N0eWxlVHdlZW4gZnJvbSBcIi4vc3R5bGVUd2Vlbi5qc1wiO1xuaW1wb3J0IHRyYW5zaXRpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90ZXh0VHdlZW4gZnJvbSBcIi4vdGV4dFR3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl90cmFuc2l0aW9uIGZyb20gXCIuL3RyYW5zaXRpb24uanNcIjtcbmltcG9ydCB0cmFuc2l0aW9uX3R3ZWVuIGZyb20gXCIuL3R3ZWVuLmpzXCI7XG5pbXBvcnQgdHJhbnNpdGlvbl9lbmQgZnJvbSBcIi4vZW5kLmpzXCI7XG5cbnZhciBpZCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2l0aW9uKGdyb3VwcywgcGFyZW50cywgbmFtZSwgaWQpIHtcbiAgdGhpcy5fZ3JvdXBzID0gZ3JvdXBzO1xuICB0aGlzLl9wYXJlbnRzID0gcGFyZW50cztcbiAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIHRoaXMuX2lkID0gaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0aW9uKCkudHJhbnNpdGlvbihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKCkge1xuICByZXR1cm4gKytpZDtcbn1cblxudmFyIHNlbGVjdGlvbl9wcm90b3R5cGUgPSBzZWxlY3Rpb24ucHJvdG90eXBlO1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZSA9IHRyYW5zaXRpb24ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVHJhbnNpdGlvbixcbiAgc2VsZWN0OiB0cmFuc2l0aW9uX3NlbGVjdCxcbiAgc2VsZWN0QWxsOiB0cmFuc2l0aW9uX3NlbGVjdEFsbCxcbiAgZmlsdGVyOiB0cmFuc2l0aW9uX2ZpbHRlcixcbiAgbWVyZ2U6IHRyYW5zaXRpb25fbWVyZ2UsXG4gIHNlbGVjdGlvbjogdHJhbnNpdGlvbl9zZWxlY3Rpb24sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb25fdHJhbnNpdGlvbixcbiAgY2FsbDogc2VsZWN0aW9uX3Byb3RvdHlwZS5jYWxsLFxuICBub2Rlczogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlcyxcbiAgbm9kZTogc2VsZWN0aW9uX3Byb3RvdHlwZS5ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fcHJvdG90eXBlLnNpemUsXG4gIGVtcHR5OiBzZWxlY3Rpb25fcHJvdG90eXBlLmVtcHR5LFxuICBlYWNoOiBzZWxlY3Rpb25fcHJvdG90eXBlLmVhY2gsXG4gIG9uOiB0cmFuc2l0aW9uX29uLFxuICBhdHRyOiB0cmFuc2l0aW9uX2F0dHIsXG4gIGF0dHJUd2VlbjogdHJhbnNpdGlvbl9hdHRyVHdlZW4sXG4gIHN0eWxlOiB0cmFuc2l0aW9uX3N0eWxlLFxuICBzdHlsZVR3ZWVuOiB0cmFuc2l0aW9uX3N0eWxlVHdlZW4sXG4gIHRleHQ6IHRyYW5zaXRpb25fdGV4dCxcbiAgdGV4dFR3ZWVuOiB0cmFuc2l0aW9uX3RleHRUd2VlbixcbiAgcmVtb3ZlOiB0cmFuc2l0aW9uX3JlbW92ZSxcbiAgdHdlZW46IHRyYW5zaXRpb25fdHdlZW4sXG4gIGRlbGF5OiB0cmFuc2l0aW9uX2RlbGF5LFxuICBkdXJhdGlvbjogdHJhbnNpdGlvbl9kdXJhdGlvbixcbiAgZWFzZTogdHJhbnNpdGlvbl9lYXNlLFxuICBlbmQ6IHRyYW5zaXRpb25fZW5kXG59O1xuIiwiaW1wb3J0IHtjb2xvcn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyLCBpbnRlcnBvbGF0ZVJnYiwgaW50ZXJwb2xhdGVTdHJpbmd9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBjO1xuICByZXR1cm4gKHR5cGVvZiBiID09PSBcIm51bWJlclwiID8gaW50ZXJwb2xhdGVOdW1iZXJcbiAgICAgIDogYiBpbnN0YW5jZW9mIGNvbG9yID8gaW50ZXJwb2xhdGVSZ2JcbiAgICAgIDogKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIGludGVycG9sYXRlUmdiKVxuICAgICAgOiBpbnRlcnBvbGF0ZVN0cmluZykoYSwgYik7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRyYW5zaXRpb24pIHtcbiAgaWYgKHRyYW5zaXRpb24uX2lkICE9PSB0aGlzLl9pZCkgdGhyb3cgbmV3IEVycm9yO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSB0cmFuc2l0aW9uLl9ncm91cHMsIG0wID0gZ3JvdXBzMC5sZW5ndGgsIG0xID0gZ3JvdXBzMS5sZW5ndGgsIG0gPSBNYXRoLm1pbihtMCwgbTEpLCBtZXJnZXMgPSBuZXcgQXJyYXkobTApLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwMCA9IGdyb3VwczBbal0sIGdyb3VwMSA9IGdyb3VwczFbal0sIG4gPSBncm91cDAubGVuZ3RoLCBtZXJnZSA9IG1lcmdlc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXAwW2ldIHx8IGdyb3VwMVtpXSkge1xuICAgICAgICBtZXJnZVtpXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGogPCBtMDsgKytqKSB7XG4gICAgbWVyZ2VzW2pdID0gZ3JvdXBzMFtqXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVHJhbnNpdGlvbihtZXJnZXMsIHRoaXMuX3BhcmVudHMsIHRoaXMuX25hbWUsIHRoaXMuX2lkKTtcbn1cbiIsImltcG9ydCB7Z2V0LCBzZXQsIGluaXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0KG5hbWUpIHtcbiAgcmV0dXJuIChuYW1lICsgXCJcIikudHJpbSgpLnNwbGl0KC9efFxccysvKS5ldmVyeShmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiAhdCB8fCB0ID09PSBcInN0YXJ0XCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkZ1bmN0aW9uKGlkLCBuYW1lLCBsaXN0ZW5lcikge1xuICB2YXIgb24wLCBvbjEsIHNpdCA9IHN0YXJ0KG5hbWUpID8gaW5pdCA6IHNldDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNpdCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub247XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjApIChvbjEgPSAob24wID0gb24pLmNvcHkoKSkub24obmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMlxuICAgICAgPyBnZXQodGhpcy5ub2RlKCksIGlkKS5vbi5vbihuYW1lKVxuICAgICAgOiB0aGlzLmVhY2gob25GdW5jdGlvbihpZCwgbmFtZSwgbGlzdGVuZXIpKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZUZ1bmN0aW9uKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgraSAhPT0gaWQpIHJldHVybjtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgcmVtb3ZlRnVuY3Rpb24odGhpcy5faWQpKTtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lciwgdGltZW91dH0gZnJvbSBcImQzLXRpbWVyXCI7XG5cbnZhciBlbXB0eU9uID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImVuZFwiLCBcImNhbmNlbFwiLCBcImludGVycnVwdFwiKTtcbnZhciBlbXB0eVR3ZWVuID0gW107XG5cbmV4cG9ydCB2YXIgQ1JFQVRFRCA9IDA7XG5leHBvcnQgdmFyIFNDSEVEVUxFRCA9IDE7XG5leHBvcnQgdmFyIFNUQVJUSU5HID0gMjtcbmV4cG9ydCB2YXIgU1RBUlRFRCA9IDM7XG5leHBvcnQgdmFyIFJVTk5JTkcgPSA0O1xuZXhwb3J0IHZhciBFTkRJTkcgPSA1O1xuZXhwb3J0IHZhciBFTkRFRCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIG5hbWUsIGlkLCBpbmRleCwgZ3JvdXAsIHRpbWluZykge1xuICB2YXIgc2NoZWR1bGVzID0gbm9kZS5fX3RyYW5zaXRpb247XG4gIGlmICghc2NoZWR1bGVzKSBub2RlLl9fdHJhbnNpdGlvbiA9IHt9O1xuICBlbHNlIGlmIChpZCBpbiBzY2hlZHVsZXMpIHJldHVybjtcbiAgY3JlYXRlKG5vZGUsIGlkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBpbmRleDogaW5kZXgsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogZ3JvdXAsIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBvbjogZW1wdHlPbixcbiAgICB0d2VlbjogZW1wdHlUd2VlbixcbiAgICB0aW1lOiB0aW1pbmcudGltZSxcbiAgICBkZWxheTogdGltaW5nLmRlbGF5LFxuICAgIGR1cmF0aW9uOiB0aW1pbmcuZHVyYXRpb24sXG4gICAgZWFzZTogdGltaW5nLmVhc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3RhdGU6IENSRUFURURcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IENSRUFURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHNjaGVkdWxlZFwiKTtcbiAgcmV0dXJuIHNjaGVkdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5vZGUsIGlkKSB7XG4gIHZhciBzY2hlZHVsZSA9IGdldChub2RlLCBpZCk7XG4gIGlmIChzY2hlZHVsZS5zdGF0ZSA+IFNUQVJURUQpIHRocm93IG5ldyBFcnJvcihcInRvbyBsYXRlOyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldChub2RlLCBpZCkge1xuICB2YXIgc2NoZWR1bGUgPSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgaWYgKCFzY2hlZHVsZSB8fCAhKHNjaGVkdWxlID0gc2NoZWR1bGVbaWRdKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBzY2hlZHVsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIGlkLCBzZWxmKSB7XG4gIHZhciBzY2hlZHVsZXMgPSBub2RlLl9fdHJhbnNpdGlvbixcbiAgICAgIHR3ZWVuO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHNlbGYgdGltZXIgd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBjcmVhdGVkLlxuICAvLyBOb3RlIHRoZSBhY3R1YWwgZGVsYXkgaXMgbm90IGtub3duIHVudGlsIHRoZSBmaXJzdCBjYWxsYmFjayFcbiAgc2NoZWR1bGVzW2lkXSA9IHNlbGY7XG4gIHNlbGYudGltZXIgPSB0aW1lcihzY2hlZHVsZSwgMCwgc2VsZi50aW1lKTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZShlbGFwc2VkKSB7XG4gICAgc2VsZi5zdGF0ZSA9IFNDSEVEVUxFRDtcbiAgICBzZWxmLnRpbWVyLnJlc3RhcnQoc3RhcnQsIHNlbGYuZGVsYXksIHNlbGYudGltZSk7XG5cbiAgICAvLyBJZiB0aGUgZWxhcHNlZCBkZWxheSBpcyBsZXNzIHRoYW4gb3VyIGZpcnN0IHNsZWVwLCBzdGFydCBpbW1lZGlhdGVseS5cbiAgICBpZiAoc2VsZi5kZWxheSA8PSBlbGFwc2VkKSBzdGFydChlbGFwc2VkIC0gc2VsZi5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChlbGFwc2VkKSB7XG4gICAgdmFyIGksIGosIG4sIG87XG5cbiAgICAvLyBJZiB0aGUgc3RhdGUgaXMgbm90IFNDSEVEVUxFRCwgdGhlbiB3ZSBwcmV2aW91c2x5IGVycm9yZWQgb24gc3RhcnQuXG4gICAgaWYgKHNlbGYuc3RhdGUgIT09IFNDSEVEVUxFRCkgcmV0dXJuIHN0b3AoKTtcblxuICAgIGZvciAoaSBpbiBzY2hlZHVsZXMpIHtcbiAgICAgIG8gPSBzY2hlZHVsZXNbaV07XG4gICAgICBpZiAoby5uYW1lICE9PSBzZWxmLm5hbWUpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBXaGlsZSB0aGlzIGVsZW1lbnQgYWxyZWFkeSBoYXMgYSBzdGFydGluZyB0cmFuc2l0aW9uIGR1cmluZyB0aGlzIGZyYW1lLFxuICAgICAgLy8gZGVmZXIgc3RhcnRpbmcgYW4gaW50ZXJydXB0aW5nIHRyYW5zaXRpb24gdW50aWwgdGhhdCB0cmFuc2l0aW9uIGhhcyBhXG4gICAgICAvLyBjaGFuY2UgdG8gdGljayAoYW5kIHBvc3NpYmx5IGVuZCk7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzU0IVxuICAgICAgaWYgKG8uc3RhdGUgPT09IFNUQVJURUQpIHJldHVybiB0aW1lb3V0KHN0YXJ0KTtcblxuICAgICAgLy8gSW50ZXJydXB0IHRoZSBhY3RpdmUgdHJhbnNpdGlvbiwgaWYgYW55LlxuICAgICAgaWYgKG8uc3RhdGUgPT09IFJVTk5JTkcpIHtcbiAgICAgICAgby5zdGF0ZSA9IEVOREVEO1xuICAgICAgICBvLnRpbWVyLnN0b3AoKTtcbiAgICAgICAgby5vbi5jYWxsKFwiaW50ZXJydXB0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIG8uaW5kZXgsIG8uZ3JvdXApO1xuICAgICAgICBkZWxldGUgc2NoZWR1bGVzW2ldO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgYW55IHByZS1lbXB0ZWQgdHJhbnNpdGlvbnMuXG4gICAgICBlbHNlIGlmICgraSA8IGlkKSB7XG4gICAgICAgIG8uc3RhdGUgPSBFTkRFRDtcbiAgICAgICAgby50aW1lci5zdG9wKCk7XG4gICAgICAgIG8ub24uY2FsbChcImNhbmNlbFwiLCBub2RlLCBub2RlLl9fZGF0YV9fLCBvLmluZGV4LCBvLmdyb3VwKTtcbiAgICAgICAgZGVsZXRlIHNjaGVkdWxlc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZlciB0aGUgZmlyc3QgdGljayB0byBlbmQgb2YgdGhlIGN1cnJlbnQgZnJhbWU7IHNlZSBkMy9kMyMxNTc2LlxuICAgIC8vIE5vdGUgdGhlIHRyYW5zaXRpb24gbWF5IGJlIGNhbmNlbGVkIGFmdGVyIHN0YXJ0IGFuZCBiZWZvcmUgdGhlIGZpcnN0IHRpY2shXG4gICAgLy8gTm90ZSB0aGlzIG11c3QgYmUgc2NoZWR1bGVkIGJlZm9yZSB0aGUgc3RhcnQgZXZlbnQ7IHNlZSBkMy9kMy10cmFuc2l0aW9uIzE2IVxuICAgIC8vIEFzc3VtaW5nIHRoaXMgaXMgc3VjY2Vzc2Z1bCwgc3Vic2VxdWVudCBjYWxsYmFja3MgZ28gc3RyYWlnaHQgdG8gdGljay5cbiAgICB0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IFNUQVJURUQpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJVTk5JTkc7XG4gICAgICAgIHNlbGYudGltZXIucmVzdGFydCh0aWNrLCBzZWxmLmRlbGF5LCBzZWxmLnRpbWUpO1xuICAgICAgICB0aWNrKGVsYXBzZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHN0YXJ0IGV2ZW50LlxuICAgIC8vIE5vdGUgdGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIHRoZSB0d2VlbiBhcmUgaW5pdGlhbGl6ZWQuXG4gICAgc2VsZi5zdGF0ZSA9IFNUQVJUSU5HO1xuICAgIHNlbGYub24uY2FsbChcInN0YXJ0XCIsIG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApO1xuICAgIGlmIChzZWxmLnN0YXRlICE9PSBTVEFSVElORykgcmV0dXJuOyAvLyBpbnRlcnJ1cHRlZFxuICAgIHNlbGYuc3RhdGUgPSBTVEFSVEVEO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgdHdlZW4sIGRlbGV0aW5nIG51bGwgdHdlZW4uXG4gICAgdHdlZW4gPSBuZXcgQXJyYXkobiA9IHNlbGYudHdlZW4ubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBqID0gLTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChvID0gc2VsZi50d2VlbltpXS52YWx1ZS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIHNlbGYuaW5kZXgsIHNlbGYuZ3JvdXApKSB7XG4gICAgICAgIHR3ZWVuWysral0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICB0d2Vlbi5sZW5ndGggPSBqICsgMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2soZWxhcHNlZCkge1xuICAgIHZhciB0ID0gZWxhcHNlZCA8IHNlbGYuZHVyYXRpb24gPyBzZWxmLmVhc2UuY2FsbChudWxsLCBlbGFwc2VkIC8gc2VsZi5kdXJhdGlvbikgOiAoc2VsZi50aW1lci5yZXN0YXJ0KHN0b3ApLCBzZWxmLnN0YXRlID0gRU5ESU5HLCAxKSxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gdHdlZW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIHR3ZWVuW2ldLmNhbGwobm9kZSwgdCk7XG4gICAgfVxuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIGVuZCBldmVudC5cbiAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gRU5ESU5HKSB7XG4gICAgICBzZWxmLm9uLmNhbGwoXCJlbmRcIiwgbm9kZSwgbm9kZS5fX2RhdGFfXywgc2VsZi5pbmRleCwgc2VsZi5ncm91cCk7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBzZWxmLnN0YXRlID0gRU5ERUQ7XG4gICAgc2VsZi50aW1lci5zdG9wKCk7XG4gICAgZGVsZXRlIHNjaGVkdWxlc1tpZF07XG4gICAgZm9yICh2YXIgaSBpbiBzY2hlZHVsZXMpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGRlbGV0ZSBub2RlLl9fdHJhbnNpdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtzZWxlY3Rvcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgICAgc2NoZWR1bGUoc3ViZ3JvdXBbaV0sIG5hbWUsIGlkLCBpLCBzdWJncm91cCwgZ2V0KG5vZGUsIGlkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUcmFuc2l0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cywgbmFtZSwgaWQpO1xufVxuIiwiaW1wb3J0IHtzZWxlY3RvckFsbH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHNjaGVkdWxlLCB7Z2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3QpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLl9uYW1lLFxuICAgICAgaWQgPSB0aGlzLl9pZDtcblxuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGZvciAodmFyIGNoaWxkcmVuID0gc2VsZWN0LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApLCBjaGlsZCwgaW5oZXJpdCA9IGdldChub2RlLCBpZCksIGsgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBrIDwgbDsgKytrKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID0gY2hpbGRyZW5ba10pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlKGNoaWxkLCBuYW1lLCBpZCwgaywgY2hpbGRyZW4sIGluaGVyaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdWJncm91cHMucHVzaChjaGlsZHJlbik7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oc3ViZ3JvdXBzLCBwYXJlbnRzLCBuYW1lLCBpZCk7XG59XG4iLCJpbXBvcnQge3NlbGVjdGlvbn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuXG52YXIgU2VsZWN0aW9uID0gc2VsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG4iLCJpbXBvcnQge2ludGVycG9sYXRlVHJhbnNmb3JtQ3NzIGFzIGludGVycG9sYXRlVHJhbnNmb3JtfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7c3R5bGV9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCB7c2V0fSBmcm9tIFwiLi9zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHt0d2VlblZhbHVlfSBmcm9tIFwiLi90d2Vlbi5qc1wiO1xuaW1wb3J0IGludGVycG9sYXRlIGZyb20gXCIuL2ludGVycG9sYXRlLmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlTnVsbChuYW1lLCBpbnRlcnBvbGF0ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHN0cmluZzEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCBzdHJpbmcxMCA9IHN0cmluZzEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUNvbnN0YW50KG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZTEpIHtcbiAgdmFyIHN0cmluZzAwLFxuICAgICAgc3RyaW5nMSA9IHZhbHVlMSArIFwiXCIsXG4gICAgICBpbnRlcnBvbGF0ZTA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nMCA9IHN0eWxlKHRoaXMsIG5hbWUpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZUZ1bmN0aW9uKG5hbWUsIGludGVycG9sYXRlLCB2YWx1ZSkge1xuICB2YXIgc3RyaW5nMDAsXG4gICAgICBzdHJpbmcxMCxcbiAgICAgIGludGVycG9sYXRlMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcwID0gc3R5bGUodGhpcywgbmFtZSksXG4gICAgICAgIHZhbHVlMSA9IHZhbHVlKHRoaXMpLFxuICAgICAgICBzdHJpbmcxID0gdmFsdWUxICsgXCJcIjtcbiAgICBpZiAodmFsdWUxID09IG51bGwpIHN0cmluZzEgPSB2YWx1ZTEgPSAodGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKSwgc3R5bGUodGhpcywgbmFtZSkpO1xuICAgIHJldHVybiBzdHJpbmcwID09PSBzdHJpbmcxID8gbnVsbFxuICAgICAgICA6IHN0cmluZzAgPT09IHN0cmluZzAwICYmIHN0cmluZzEgPT09IHN0cmluZzEwID8gaW50ZXJwb2xhdGUwXG4gICAgICAgIDogKHN0cmluZzEwID0gc3RyaW5nMSwgaW50ZXJwb2xhdGUwID0gaW50ZXJwb2xhdGUoc3RyaW5nMDAgPSBzdHJpbmcwLCB2YWx1ZTEpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVNYXliZVJlbW92ZShpZCwgbmFtZSkge1xuICB2YXIgb24wLCBvbjEsIGxpc3RlbmVyMCwga2V5ID0gXCJzdHlsZS5cIiArIG5hbWUsIGV2ZW50ID0gXCJlbmQuXCIgKyBrZXksIHJlbW92ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIG9uID0gc2NoZWR1bGUub24sXG4gICAgICAgIGxpc3RlbmVyID0gc2NoZWR1bGUudmFsdWVba2V5XSA9PSBudWxsID8gcmVtb3ZlIHx8IChyZW1vdmUgPSBzdHlsZVJlbW92ZShuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIGEgZGlzcGF0Y2ggd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgZGlzcGF0Y2ggYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKG9uICE9PSBvbjAgfHwgbGlzdGVuZXIwICE9PSBsaXN0ZW5lcikgKG9uMSA9IChvbjAgPSBvbikuY29weSgpKS5vbihldmVudCwgbGlzdGVuZXIwID0gbGlzdGVuZXIpO1xuXG4gICAgc2NoZWR1bGUub24gPSBvbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgaSA9IChuYW1lICs9IFwiXCIpID09PSBcInRyYW5zZm9ybVwiID8gaW50ZXJwb2xhdGVUcmFuc2Zvcm0gOiBpbnRlcnBvbGF0ZTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZU51bGwobmFtZSwgaSkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBzdHlsZVJlbW92ZShuYW1lKSlcbiAgICA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdGhpc1xuICAgICAgLnN0eWxlVHdlZW4obmFtZSwgc3R5bGVGdW5jdGlvbihuYW1lLCBpLCB0d2VlblZhbHVlKHRoaXMsIFwic3R5bGUuXCIgKyBuYW1lLCB2YWx1ZSkpKVxuICAgICAgLmVhY2goc3R5bGVNYXliZVJlbW92ZSh0aGlzLl9pZCwgbmFtZSkpXG4gICAgOiB0aGlzXG4gICAgICAuc3R5bGVUd2VlbihuYW1lLCBzdHlsZUNvbnN0YW50KG5hbWUsIGksIHZhbHVlKSwgcHJpb3JpdHkpXG4gICAgICAub24oXCJlbmQuc3R5bGUuXCIgKyBuYW1lLCBudWxsKTtcbn1cbiIsImZ1bmN0aW9uIHN0eWxlSW50ZXJwb2xhdGUobmFtZSwgaSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGkuY2FsbCh0aGlzLCB0KSwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHlsZVR3ZWVuKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICB2YXIgdCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQgPSAoaTAgPSBpKSAmJiBzdHlsZUludGVycG9sYXRlKG5hbWUsIGksIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgdmFyIGtleSA9IFwic3R5bGUuXCIgKyAobmFtZSArPSBcIlwiKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSByZXR1cm4gKGtleSA9IHRoaXMudHdlZW4oa2V5KSkgJiYga2V5Ll92YWx1ZTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGtleSwgbnVsbCk7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yO1xuICByZXR1cm4gdGhpcy50d2VlbihrZXksIHN0eWxlVHdlZW4obmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKTtcbn1cbiIsImltcG9ydCB7dHdlZW5WYWx1ZX0gZnJvbSBcIi4vdHdlZW4uanNcIjtcblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlMSA9IHZhbHVlKHRoaXMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTEgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZTE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnR3ZWVuKFwidGV4dFwiLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB0ZXh0RnVuY3Rpb24odHdlZW5WYWx1ZSh0aGlzLCBcInRleHRcIiwgdmFsdWUpKVxuICAgICAgOiB0ZXh0Q29uc3RhbnQodmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCIpKTtcbn1cbiIsImZ1bmN0aW9uIHRleHRJbnRlcnBvbGF0ZShpKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IGkuY2FsbCh0aGlzLCB0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGV4dFR3ZWVuKHZhbHVlKSB7XG4gIHZhciB0MCwgaTA7XG4gIGZ1bmN0aW9uIHR3ZWVuKCkge1xuICAgIHZhciBpID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoaSAhPT0gaTApIHQwID0gKGkwID0gaSkgJiYgdGV4dEludGVycG9sYXRlKGkpO1xuICAgIHJldHVybiB0MDtcbiAgfVxuICB0d2Vlbi5fdmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHR3ZWVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIga2V5ID0gXCJ0ZXh0XCI7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIChrZXkgPSB0aGlzLnR3ZWVuKGtleSkpICYmIGtleS5fdmFsdWU7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihrZXksIG51bGwpO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIHRoaXMudHdlZW4oa2V5LCB0ZXh0VHdlZW4odmFsdWUpKTtcbn1cbiIsImltcG9ydCB7VHJhbnNpdGlvbiwgbmV3SWR9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2NoZWR1bGUsIHtnZXR9IGZyb20gXCIuL3NjaGVkdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbmFtZSA9IHRoaXMuX25hbWUsXG4gICAgICBpZDAgPSB0aGlzLl9pZCxcbiAgICAgIGlkMSA9IG5ld0lkKCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgdmFyIGluaGVyaXQgPSBnZXQobm9kZSwgaWQwKTtcbiAgICAgICAgc2NoZWR1bGUobm9kZSwgbmFtZSwgaWQxLCBpLCBncm91cCwge1xuICAgICAgICAgIHRpbWU6IGluaGVyaXQudGltZSArIGluaGVyaXQuZGVsYXkgKyBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiBpbmhlcml0LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2U6IGluaGVyaXQuZWFzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZ3JvdXBzLCB0aGlzLl9wYXJlbnRzLCBuYW1lLCBpZDEpO1xufVxuIiwiaW1wb3J0IHtnZXQsIHNldH0gZnJvbSBcIi4vc2NoZWR1bGUuanNcIjtcblxuZnVuY3Rpb24gdHdlZW5SZW1vdmUoaWQsIG5hbWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVkdWxlID0gc2V0KHRoaXMsIGlkKSxcbiAgICAgICAgdHdlZW4gPSBzY2hlZHVsZS50d2VlbjtcblxuICAgIC8vIElmIHRoaXMgbm9kZSBzaGFyZWQgdHdlZW4gd2l0aCB0aGUgcHJldmlvdXMgbm9kZSxcbiAgICAvLyBqdXN0IGFzc2lnbiB0aGUgdXBkYXRlZCBzaGFyZWQgdHdlZW4gYW5kIHdl4oCZcmUgZG9uZSFcbiAgICAvLyBPdGhlcndpc2UsIGNvcHktb24td3JpdGUuXG4gICAgaWYgKHR3ZWVuICE9PSB0d2VlbjApIHtcbiAgICAgIHR3ZWVuMSA9IHR3ZWVuMCA9IHR3ZWVuO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSB0d2VlbjEubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmICh0d2VlbjFbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHR3ZWVuMSA9IHR3ZWVuMS5zbGljZSgpO1xuICAgICAgICAgIHR3ZWVuMS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzY2hlZHVsZS50d2VlbiA9IHR3ZWVuMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHdlZW5GdW5jdGlvbihpZCwgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIHR3ZWVuMCwgdHdlZW4xO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlZHVsZSA9IHNldCh0aGlzLCBpZCksXG4gICAgICAgIHR3ZWVuID0gc2NoZWR1bGUudHdlZW47XG5cbiAgICAvLyBJZiB0aGlzIG5vZGUgc2hhcmVkIHR3ZWVuIHdpdGggdGhlIHByZXZpb3VzIG5vZGUsXG4gICAgLy8ganVzdCBhc3NpZ24gdGhlIHVwZGF0ZWQgc2hhcmVkIHR3ZWVuIGFuZCB3ZeKAmXJlIGRvbmUhXG4gICAgLy8gT3RoZXJ3aXNlLCBjb3B5LW9uLXdyaXRlLlxuICAgIGlmICh0d2VlbiAhPT0gdHdlZW4wKSB7XG4gICAgICB0d2VlbjEgPSAodHdlZW4wID0gdHdlZW4pLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciB0ID0ge25hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZX0sIGkgPSAwLCBuID0gdHdlZW4xLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAodHdlZW4xW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICB0d2VlbjFbaV0gPSB0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gbikgdHdlZW4xLnB1c2godCk7XG4gICAgfVxuXG4gICAgc2NoZWR1bGUudHdlZW4gPSB0d2VlbjE7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRoaXMuX2lkO1xuXG4gIG5hbWUgKz0gXCJcIjtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgdHdlZW4gPSBnZXQodGhpcy5ub2RlKCksIGlkKS50d2VlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IHR3ZWVuLmxlbmd0aCwgdDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKCh0ID0gdHdlZW5baV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbCA/IHR3ZWVuUmVtb3ZlIDogdHdlZW5GdW5jdGlvbikoaWQsIG5hbWUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d2VlblZhbHVlKHRyYW5zaXRpb24sIG5hbWUsIHZhbHVlKSB7XG4gIHZhciBpZCA9IHRyYW5zaXRpb24uX2lkO1xuXG4gIHRyYW5zaXRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZWR1bGUgPSBzZXQodGhpcywgaWQpO1xuICAgIChzY2hlZHVsZS52YWx1ZSB8fCAoc2NoZWR1bGUudmFsdWUgPSB7fSkpW25hbWVdID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gZ2V0KG5vZGUsIGlkKS52YWx1ZVtuYW1lXTtcbiAgfTtcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gW3tcInllYXJcIjoyMDE5LFwiY2F0ZWdvcnlcIjpcImZlZGVyYWwgcmV2ZW51ZVwiLFwiYW1vdW50XCI6MzQ2MjE5NTYxMDE0OSxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZmlsZXMvcmVwb3J0cy1zdGF0ZW1lbnRzL210cy9tdHMwOTE5LnBkZlwiLFwic291cmNlX3VybF9uYW1lXCI6XCJNb250aGx5IFRyZWFzdXJ5IFN0YXRlbWVudFwifSx7XCJ5ZWFyXCI6MjAxOSxcImNhdGVnb3J5XCI6XCJmZWRlcmFsIHNwZW5kaW5nXCIsXCJhbW91bnRcIjo0NDQ2NTgzNjM2NDgwLFwic291cmNlX3VybFwiOlwiaHR0cHM6Ly93d3cuZmlzY2FsLnRyZWFzdXJ5Lmdvdi9maWxlcy9yZXBvcnRzLXN0YXRlbWVudHMvbXRzL210czA5MTkucGRmXCIsXCJzb3VyY2VfdXJsX25hbWVcIjpcIk1vbnRobHkgVHJlYXN1cnkgU3RhdGVtZW50XCJ9LHtcInllYXJcIjoyMDE5LFwiY2F0ZWdvcnlcIjpcImdkcFwiLFwiYW1vdW50XCI6MjEzNDAzMDAwMDAwMDAsXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL2FwcHMuYmVhLmdvdi9pVGFibGUvaW5kZXhfbmlwYS5jZm1cIixcInNvdXJjZV91cmxfbmFtZVwiOlwiQnVyZWF1IG9mIEVjb25vbWljIEFuYWx5c2lzXCJ9LHtcInllYXJcIjoyMDE5LFwiY2F0ZWdvcnlcIjpcImZlZGVyYWwgcmV2ZW51ZSBwZXJjZW50IG9mIGdkcFwiLFwiYW1vdW50XCI6MC4xNjI1NDQzOTQ4NDI2NzYsXCJzb3VyY2VfdXJsXCI6XCJOQVwiLFwic291cmNlX3VybF9uYW1lXCI6XCJOQVwifSx7XCJ5ZWFyXCI6bnVsbH1dIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wieWVhclwiOjIwMTksXCJjYXRlZ29yeVwiOlwiZmVkZXJhbCBzcGVuZGluZ1wiLFwiYW1vdW50XCI6NDQ0NjU4MzYzNjQ4MCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vd3d3LmZpc2NhbC50cmVhc3VyeS5nb3YvZmlsZXMvcmVwb3J0cy1zdGF0ZW1lbnRzL210cy9tdHMwOTE5LnBkZlwiLFwic291cmNlX3VybF9uYW1lXCI6XCJNb250aGx5IFRyZWFzdXJ5IFN0YXRlbWVudFwifSx7XCJ5ZWFyXCI6MjAxOSxcImNhdGVnb3J5XCI6XCJmZWRlcmFsIHJldmVudWVcIixcImFtb3VudFwiOjM0NjIxOTU2MTAxNDksXCJzb3VyY2VfdXJsXCI6XCJodHRwczovL3d3dy5maXNjYWwudHJlYXN1cnkuZ292L2ZpbGVzL3JlcG9ydHMtc3RhdGVtZW50cy9tdHMvbXRzMDkxOS5wZGZcIixcInNvdXJjZV91cmxfbmFtZVwiOlwiTW9udGhseSBUcmVhc3VyeSBTdGF0ZW1lbnRcIn0se1wieWVhclwiOjIwMTksXCJjYXRlZ29yeVwiOlwiZ2RwXCIsXCJhbW91bnRcIjoyMTM0MDMwMDAwMDAwMCxcInNvdXJjZV91cmxcIjpcImh0dHBzOi8vYXBwcy5iZWEuZ292L2lUYWJsZS9pbmRleF9uaXBhLmNmbVwiLFwic291cmNlX3VybF9uYW1lXCI6XCJCdXJlYXUgb2YgRWNvbm9taWMgQW5hbHlzaXNcIn0se1wieWVhclwiOjIwMTksXCJjYXRlZ29yeVwiOlwiZmVkZXJhbCBzcGVuZGluZyBwZXJjZW50IG9mIGdkcFwiLFwiYW1vdW50XCI6MC4yMDg3NTk3OTUxMzk5MDYsXCJzb3VyY2VfdXJsXCI6XCJOQVwiLFwic291cmNlX3VybF9uYW1lXCI6XCJOQVwifSx7XCJ5ZWFyXCI6bnVsbH1dIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbG9ycy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7IGFyYywgcGllIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgZnJhY3Rpb25Ub1BlcmNlbnQsIHRyYW5zbGF0b3IgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2dsb2JhbFNhc3MvY29sb3JzLnNjc3MnO1xuXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBhcmMsIHBpZSB9LFxuICAgIHJhZGl1cyA9IDQ1LFxuICAgIGFyY0ZuID0gZDMuYXJjKCksXG4gICAgcGllRm4gPSBkMy5waWUoKVxuICAgICAgICAuc29ydChudWxsKVxuICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pO1xuXG5mdW5jdGlvbiBzZXRBcmNSYWRpdXMocmFkaXVzKSB7XG4gICAgYXJjRm4ub3V0ZXJSYWRpdXMocmFkaXVzKVxuICAgICAgICAuaW5uZXJSYWRpdXMoKHJhZGl1cykgKiAuOClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvbnV0KGNvbnRhaW5lciwgcGVyY2VudCwgZGlhbWV0ZXIsIGZpbGxDb2xvcikge1xuICAgIGNvbnN0IGFic1BlcmNlbnQgPSBNYXRoLmFicyhwZXJjZW50KSxcbiAgICAgICAgaXNOZWdhdGl2ZVZhbCA9IHBlcmNlbnQgPCAwLFxuICAgICAgICBzaGFkZWRDb2xvckl0ZXJhdG9yID0gaXNOZWdhdGl2ZVZhbCA/IDEgOiAwLFxuICAgICAgICBnID0gY29udGFpbmVyLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcihkaWFtZXRlciAvIDIsIGRpYW1ldGVyIC8gMikpO1xuXG4gICAgbGV0IGRhdGEgPSBbYWJzUGVyY2VudCAqIDEwMCwgMTAwIC0gYWJzUGVyY2VudCAqIDEwMF1cblxuICAgIGlmKGlzTmVnYXRpdmVWYWwpe1xuICAgICAgICBkYXRhID0gZGF0YS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgc2V0QXJjUmFkaXVzKGRpYW1ldGVyIC8gMik7XG5cblxuICAgIGNvbnN0IHBpZSA9IGcuc2VsZWN0QWxsKFwiLmFyY1wiKVxuICAgICAgICAuZGF0YShwaWVGbihkYXRhKSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKTtcblxuICAgIGNvbnN0IGRvbnV0ID0gcGllLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIGFyY0ZuKTtcblxuICAgIGRvbnV0LnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBjb25zdCBzaGFkZWRDb2xvciA9IGZpbGxDb2xvciB8fCAnI2RkNjY2Nic7XG4gICAgICAgIHJldHVybiAoaSA9PT0gc2hhZGVkQ29sb3JJdGVyYXRvcikgPyBzaGFkZWRDb2xvciA6ICcjZGRkZGRkJ1xuICAgIH0pO1xuXG4gICAgZy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAudGV4dChNYXRoLnJvdW5kKGFic1BlcmNlbnQgKiAxMDApICsgJyUnKVxuICAgICAgICAuYXR0cignZmlsbCcsIGNvbG9ycy50ZXh0Q29sb3JQYXJhZ3JhcGgpXG4gICAgICAgIC5hdHRyKCdmb250LXNpemUnLCBkaWFtZXRlci80KVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKVxuICAgICAgICAuYXR0cigneScsIGRpYW1ldGVyKjAuMDgpO1xufVxuIiwiaW1wb3J0IHsgaW5pdENoYXJ0IH0gZnJvbSAnLi4vLi4vc3BlbmRpbmcvaW50cm8vaW5pdCc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2dsb2JhbFNhc3MvY29sb3JzLnNjc3MnO1xuaW1wb3J0IHJldmVudWVEYXRhIGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy9mZmcvZGF0YS9mZWRlcmFsX3JldmVudWVfZ2RwLmNzdic7XG5pbXBvcnQgeyBmaW5kQW1vdW50SW5Dc3YgfSBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbHMnO1xuXG4oZnVuY3Rpb24gaW5pdCgpe1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgYW5lY2RvdGVOYW1lOiAnYW5lY2RvdGUtcmV2ZW51ZS5zdmcnLFxuICAgICAgICBjb21wYXJpc29uQW1vdW50OiBmaW5kQW1vdW50SW5Dc3YoJ2ZlZGVyYWwgc3BlbmRpbmcnLCByZXZlbnVlRGF0YSksXG4gICAgICAgIGNvbXBhcmVTdHJpbmc6ICdzcGVuZGluZycsXG4gICAgICAgIGdkcEFtb3VudDogZmluZEFtb3VudEluQ3N2KCdnZHAnLCByZXZlbnVlRGF0YSksIFxuICAgICAgICBnZHBQZXJjZW50OiBmaW5kQW1vdW50SW5Dc3YoJ2ZlZGVyYWwgcmV2ZW51ZSBwZXJjZW50IG9mIGdkcCcsIHJldmVudWVEYXRhKSAqIDEwMCwgXG4gICAgICAgIHNlY3Rpb25BbW91bnQ6IGZpbmRBbW91bnRJbkNzdignZmVkZXJhbCByZXZlbnVlJywgcmV2ZW51ZURhdGEpLCBcbiAgICAgICAgY29tcGFyaXNvbkNvbG9yOiBjb2xvcnMuY29sb3JTcGVuZGluZ1ByaW1hcnksXG4gICAgICAgIHNlY3Rpb25Db2xvcjogY29sb3JzLnJldmVudWVQcmltYXJ5LFxuICAgICAgICBhY2Nlc3NpYmlsaXR5QXR0cnMgOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE5IEZlZGVyYWwgUmV2ZW51ZScsXG4gICAgICAgICAgICAgICAgZGVzYzogJ1RoZSBpbWFnZSBpbGx1c3RyYXRlcyBmZWRlcmFsIHJldmVudWUgaW4gMjAxOSB1c2luZyBkb3RzLCBhbmQgZWFjaCBkb3QgaXMgZXF1YWwgdG8gYSBiaWxsaW9uIGRvbGxhcnMuIFRoZXJlIGFyZSAzLDUwMCBkb3RzLidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZHAgOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICcyMDE5IEZlZGVyYWwgUmV2ZW51ZSBhbmQgR0RQJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIFUuUy4gZWNvbm9teSwgYXMgbWVhc3VyZWQgYnkgZ3Jvc3MgZG9tZXN0aWMgcHJvZHVjdCwgcHJvZHVjZWQgJDIxLjMgdHJpbGxpb24gd29ydGggb2YgZ29vZHMgYW5kIHNlcnZpY2VzLiBJbiAyMDE5LCBmZWRlcmFsIHJldmVudWUgd2FzIGVxdWl2YWxlbnQgdG8gMTYlIG9mIGdyb3NzIGRvbWVzdGljIHByb2R1Y3QuJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZW5kaW5nIDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnMjAxOSBGZWRlcmFsIFJldmVudWUgYW5kIFNwZW5kaW5nJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAnVGhlIGltYWdlIGlsbHVzdHJhdGVzIGZlZGVyYWwgc3BlbmRpbmcgaW4gMjAxOSB1c2luZyBkb3RzLCBhbmQgZWFjaCBkb3QgaXMgZXF1YWwgdG8gYSBiaWxsaW9uIGRvbGxhcnMuIFRoZXJlIGFyZSA0LDQwMCBkb3RzLiBEdWUgdG8gcm91bmRpbmcsIHRoZXJlIGFyZSA5MDAgbW9yZSBzcGVuZGluZyBkb3RzIHRoYW4gcmV2ZW51ZSBkb3RzLCByZXByZXNlbnRpbmcgdGhlIGRlZmljaXQgZm9yIDIwMTksICQ5ODQgYmlsbGlvbi4nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGluaXRDaGFydChjb25maWcpO1xufSkoKTtcbiIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7IGxpbmUgfSBmcm9tICdkMy1zaGFwZSc7XG5pbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIsIHRyYW5zbGF0b3IsIHNpbXBsaWZ5TnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgZG90Q29uc3RhbnRzIH0gZnJvbSAnLi9kb3RDb25zdGFudHMnO1xuaW1wb3J0IHsgY29tcGFyZU9uLCBjb21wYXJlT2ZmLCBnZW5lcmF0ZU92ZXJsYXksIHJlZ2lzdGVyTGF5ZXIgfSBmcm9tICcuL2NvbXBhcmVNYW5hZ2VyJztcbmltcG9ydCB7IGNyZWF0ZURvbnV0IH0gZnJvbSAnLi4vLi4vcmV2ZW51ZS9kb251dCc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2dsb2JhbFNhc3MvY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgY2hhcnRXaWR0aCB9IGZyb20gJy4vd2lkdGhNYW5hZ2VyJztcbmltcG9ydCBTcGVuZGluZ0RhdGEgZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL2ZmZy9kYXRhL2ZlZGVyYWxfc3BlbmRpbmdfZ2RwLmNzdic7XG5pbXBvcnQgeyBmaW5kQW1vdW50SW5Dc3YgfSBmcm9tICcuLi8uLi8uLi9zcmMvdXRpbHMnO1xuXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwsIGxpbmUgfTtcblxubGV0IGdkcExheWVyLFxuICAgIGNvbmZpZyA9IHt9O1xuXG5jb25zdCBnZHBMYWJlbEZ5ID0gJ0ZZJyArIFNwZW5kaW5nRGF0YVswXS55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMikgO1xuXG5mdW5jdGlvbiBnZXROZXdTdmdIZWlnaHQoKSB7XG4gICAgcmV0dXJuIE51bWJlcihnZHBMYXllci5hdHRyKCdkYXRhLXJlY3QtaGVpZ2h0JykpO1xufVxuXG5mdW5jdGlvbiBwbGFjZUxlZ2VuZChnKSB7XG4gICAgY29uc3QgbGVnZW5kQ29udGFpbmVyID0gZy5hcHBlbmQoJ2cnKVxuICAgICAgICAuY2xhc3NlZCgnZ2RwLXN0ZXAtdHdvJywgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKSxcbiAgICAgICAgdGV4dFggPSAtNTAsXG4gICAgICAgIGhlaWdodCA9IGdldE5ld1N2Z0hlaWdodCgpLFxuICAgICAgICBnZHBBbW91bnQgPSBjb25maWcuZ2RwQW1vdW50LFxuICAgICAgICBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC54OyB9KVxuICAgICAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueTsgfSksXG4gICAgICAgIGxpbmVEYXRhID0gW1xuICAgICAgICAgICAgeyB4OiB0ZXh0WCArIDMwLCB5OiAwIH0sXG4gICAgICAgICAgICB7IHg6IHRleHRYICsgMjAsIHk6IDAgfSxcbiAgICAgICAgICAgIHsgeDogdGV4dFggKyAyMCwgeTogaGVpZ2h0IH0sXG4gICAgICAgICAgICB7IHg6IHRleHRYICsgMzAsIHk6IGhlaWdodCB9XG4gICAgICAgIF0sXG4gICAgICAgIHRleHQgPSBsZWdlbmRDb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdyZXNldCB0b3VjaC1sYWJlbCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsIGNvbG9ycy50ZXh0Q29sb3JQYXJhZ3JhcGgpXG4gICAgICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgKGhlaWdodCAvIDIpIC0gNjApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIDI0KTtcblxuICAgIGxlZ2VuZENvbnRhaW5lci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGxpbmUobGluZURhdGEpKVxuICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjYWFhJylcbiAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXG4gICAgdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLnRleHQoZ2RwTGFiZWxGeSlcbiAgICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc2MDAnKVxuICAgICAgICAuYXR0cigneCcsIHRleHRYKVxuICAgICAgICAuYXR0cignZHgnLCAwKVxuICAgICAgICAuYXR0cignZHknLCAwKTtcblxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC50ZXh0KCdVLlMuJylcbiAgICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc2MDAnKVxuICAgICAgICAuYXR0cigneCcsIHRleHRYKVxuICAgICAgICAuYXR0cignZHgnLCAwKVxuICAgICAgICAuYXR0cignZHknLCAyMCk7XG5cbiAgICB0ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAudGV4dCgnR3Jvc3MnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzYwMCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGV4dFgpXG4gICAgICAgIC5hdHRyKCdkeCcsIDApXG4gICAgICAgIC5hdHRyKCdkeScsIDIwKTtcblxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC50ZXh0KCdEb21lc3RpYycpXG4gICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnNjAwJylcbiAgICAgICAgLmF0dHIoJ3gnLCB0ZXh0WClcbiAgICAgICAgLmF0dHIoJ2R4JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgMjApO1xuXG4gICAgdGV4dC5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLnRleHQoJ1Byb2R1Y3QnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJzYwMCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGV4dFgpXG4gICAgICAgIC5hdHRyKCdkeCcsIDApXG4gICAgICAgIC5hdHRyKCdkeScsIDIwKTtcblxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC50ZXh0KHNpbXBsaWZ5TnVtYmVyKGdkcEFtb3VudCkpXG4gICAgICAgIC5hdHRyKCd4JywgdGV4dFgpXG4gICAgICAgIC5hdHRyKCdkeCcsIDApXG4gICAgICAgIC5hdHRyKCdkeScsIDI1KTtcbn1cblxuZnVuY3Rpb24gcGxhY2VEb251dChnKSB7XG4gICAgY29uc3QgeSA9IGQzLnNlbGVjdCgnLnNwZW5kaW5nLWRvdHMnKS5hdHRyKCdkYXRhLXJlY3QtaGVpZ2h0JyksXG4gICAgICAgIHIgPSA1MCxcbiAgICAgICAgeCA9IGNoYXJ0V2lkdGggLSAociArIDI1KSAqIDEuMixcbiAgICAgICAgZG9udXRDb250YWluZXIgPSBnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZ2RwLXN0ZXAtdHdvJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKHgsIHkgLSByICogMiArIDUpICsgJyBzY2FsZSgxLjY3KScpO1xuXG4gICAgZG9udXRDb250YWluZXIuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuYXR0cignZmlsbCcsICd3aGl0ZScpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMC44NSlcbiAgICAgICAgLmF0dHIoJ3InLCByICsgMTApXG4gICAgICAgIC5hdHRyKCdjeCcsIHIpXG4gICAgICAgIC5hdHRyKCdjeScsIHIpO1xuXG4gICAgY3JlYXRlRG9udXQoZG9udXRDb250YWluZXIsIGNvbmZpZy5nZHBQZXJjZW50IC8gMTAwLCByICogMiwgY29uZmlnLnNlY3Rpb25Db2xvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0R2RwKF9jb25maWcpIHtcbiAgICBjb25maWcgPSBfY29uZmlnIHx8IGNvbmZpZztcbiAgICBjb25zdCBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKTtcbiAgICBsZXQgZ2RwQ291bnQgPSAoZmluZEFtb3VudEluQ3N2KCdnZHAnLCBTcGVuZGluZ0RhdGEpKSAvIDEwMDAwMDAwMDAwMDsgXG4gICAgZ2RwQ291bnQgPSBNYXRoLnJvdW5kKGdkcENvdW50KSAqIDEwMDsgXG5cbiAgICBnZHBMYXllciA9IGdlbmVyYXRlT3ZlcmxheShnZHBDb3VudCwgc3ZnLnNlbGVjdCgnLm1haW4tY29udGFpbmVyJyksICdnZHAtbGF5ZXInKTtcblxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiA5NTkpIHtcbiAgICAgICAgcGxhY2VEb251dChnZHBMYXllcik7XG4gICAgICAgIHBsYWNlTGVnZW5kKGdkcExheWVyKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckxheWVyKCdnZHAnLCBnZHBMYXllciwgZ2V0TmV3U3ZnSGVpZ2h0KCkpO1xufVxuIiwiaW1wb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiB9IGZyb20gJ2QzLXRyYW5zaXRpb24nO1xuaW1wb3J0IHsgY2hhcnRXaWR0aCB9IGZyb20gXCIuL3dpZHRoTWFuYWdlclwiO1xuaW1wb3J0IHsgZG90Q29uc3RhbnRzLCBkb3RzUGVyUm93IH0gZnJvbSBcIi4vZG90Q29uc3RhbnRzXCI7XG5pbXBvcnQgeyB0cmFuc2xhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgdG91Y2hJZSB9IGZyb20gJy4uLy4uL3RvdWNoSWUnO1xuXG5jb25zdCBzdGF0ZU1hbmFnZXIgPSB7fSxcbiAgICBsYXllcnMgPSB7fSxcbiAgICBkdXJhdGlvbiA9IDUwMCxcbiAgICBpZE1hcCA9IHtcbiAgICAgICAgZ2RwOiAnI2dkcC1mYWN0cycsXG4gICAgICAgIHJldmVudWU6ICcjcmV2ZW51ZS1mYWN0cydcbiAgICB9LFxuICAgIHNlY3Rpb25BY3RpdmUgPSAnZmFjdHNfX3NlY3Rpb24tLWFjdGl2ZScsXG4gICAgYnV0dG9uQWN0aXZlID0gJ2ZhY3RzX190cmlnZ2VyLS1hY3RpdmUnLFxuICAgIGQzID0geyBzZWxlY3QsIHNlbGVjdEFsbCwgdHJhbnNpdGlvbiB9O1xuXG5sZXQgZ2RwSGVpZ2h0LCBvcmlnaW5hbEhlaWdodCwgY29uZmlnID0ge307XG5cbmZ1bmN0aW9uIHNldExheWVyT3BhY2l0eShpZCwgYWN0aXZlKSB7XG4gICAgbGF5ZXJzW2lkXS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmUgPyAxIDogMDtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdkcExheWVyKHJlc2V0KSB7XG4gICAgY29uc3Qgc2NhbGUgPSByZXNldCA/IDEgOiAwLjYsXG4gICAgICAgIHggPSByZXNldCA/IDAgOiBjaGFydFdpZHRoICogMC41IC0gKGNoYXJ0V2lkdGggKiBzY2FsZSAvIDIpLFxuICAgICAgICBzdGVwVHdvT3BhY2l0eSA9IHJlc2V0ID8gMCA6IDEsXG4gICAgICAgIG1haW5Db250YWluZXIgPSBkMy5zZWxlY3QoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGFjY2Vzc2liaWxpdHlUeXBlID0gIXJlc2V0ID8gJ2dkcCcgOiAnJztcblxuICAgIGlmIChyZXNldCAmJiAhbWFpbkNvbnRhaW5lci5jbGFzc2VkKCdnZHAtYWN0aXZlJywgIXJlc2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QWNjZXNzaWJpbGl0eShhY2Nlc3NpYmlsaXR5VHlwZSk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc2VkKCdnZHAtYWN0aXZlJywgIXJlc2V0KTtcblxuICAgIG1haW5Db250YWluZXIudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcih4LCAzMCkgKyAnIHNjYWxlKCcgKyBzY2FsZSArICcpJylcbiAgICAgICAgLmVhc2UoKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLmdkcC1zdGVwLXR3bycpLnRyYW5zaXRpb24oKVxuICAgICAgICAuZGVsYXkoMTAwMClcbiAgICAgICAgLmR1cmF0aW9uKDE1MDApXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5Jywgc3RlcFR3b09wYWNpdHkpXG4gICAgICAgIC5vbignZW5kJywgdG91Y2hJZSlcbiAgICAgICAgLmVhc2UoKTtcbn1cblxuZnVuY3Rpb24gc2V0QWNjZXNzaWJpbGl0eSh0eXBlKXtcbiAgICBjb25zdCBzdmdFbCA9IGQzLnNlbGVjdCgnc3ZnLm1haW4nKSxcbiAgICAgICAgZGVzY0VsID0gc3ZnRWwuc2VsZWN0KCdkZXNjJyk7XG5cbiAgICBsZXQgYWNjZXNzaWJpbGl0eUF0dHIgPSBjb25maWcuYWNjZXNzaWJpbGl0eUF0dHJzLmRlZmF1bHQ7XG4gICAgaWYodHlwZSl7XG4gICAgICAgIGFjY2Vzc2liaWxpdHlBdHRyID0gY29uZmlnLmFjY2Vzc2liaWxpdHlBdHRyc1t0eXBlXTtcbiAgICB9XG5cbiAgICBkZXNjRWwudGV4dChhY2Nlc3NpYmlsaXR5QXR0ci5kZXNjKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmV2ZW51ZUxheWVyKHJlc2V0KSB7XG4gICAgY29uc3Qgc2NhbGUgPSByZXNldCA/IDEgOiAwLjYsXG4gICAgeCA9IHJlc2V0ID8gMCA6IGNoYXJ0V2lkdGggKiAwLjUgLSAoY2hhcnRXaWR0aCAqIHNjYWxlIC8gMiksXG4gICAgc3RlcFR3b09wYWNpdHkgPSByZXNldCA/IDAgOiAxLFxuICAgIG1haW5Db250YWluZXIgPSBkMy5zZWxlY3QoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgbGV0IGFjY2Vzc2liaWxpdHlUeXBlID0gIXJlc2V0ID8gY29uZmlnLmNvbXBhcmVTdHJpbmcgOiAnJztcblxuICAgIGlmIChyZXNldCAmJiAhbWFpbkNvbnRhaW5lci5jbGFzc2VkKCdnZHAtYWN0aXZlJywgIXJlc2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QWNjZXNzaWJpbGl0eShhY2Nlc3NpYmlsaXR5VHlwZSk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc2VkKCdnZHAtYWN0aXZlJywgIXJlc2V0KTtcblxuICAgIG1haW5Db250YWluZXIudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcih4LCAzMCkgKyAnIHNjYWxlKCcgKyBzY2FsZSArICcpJylcbiAgICAgICAgLmVhc2UoKTtcblxuICAgIGQzLnNlbGVjdEFsbChgLiR7Y29uZmlnLmNvbXBhcmVTdHJpbmd9LXN0ZXAtdHdvYCkudHJhbnNpdGlvbigpXG4gICAgICAgIC5kZWxheSgxMDAwKVxuICAgICAgICAuZHVyYXRpb24oMTUwMClcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCBzdGVwVHdvT3BhY2l0eSlcbiAgICAgICAgLm9uKCdlbmQnLCB0b3VjaEllKVxuICAgICAgICAuZWFzZSgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMYXllcnMoaWQsIHJlc2V0KSB7XG4gICAgaWYgKGlkID09PSAnZ2RwJykge1xuICAgICAgICBoYW5kbGVHZHBMYXllcihyZXNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlUmV2ZW51ZUxheWVyKHJlc2V0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZhY3RzKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgZGVza3RvcCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiA5NTkpLFxuICAgICAgICBpZCA9IGJ1dHRvbi5hdHRyKCdkYXRhLXRyaWdnZXItaWQnKSxcbiAgICAgICAgdGFyZ2V0U2VjdGlvbiA9IGQzLnNlbGVjdChgIyR7aWR9LWZhY3RzYCksXG4gICAgICAgIHdhc1ByZXZpb3VzbHlBY3RpdmUgPSBidXR0b24uY2xhc3NlZChidXR0b25BY3RpdmUpO1xuXG4gICAgZDMuc2VsZWN0QWxsKCcuZmFjdHNfX3RyaWdnZXInKS5jbGFzc2VkKGJ1dHRvbkFjdGl2ZSwgbnVsbCk7XG4gICAgZDMuc2VsZWN0QWxsKCcuZmFjdHNfX3NlY3Rpb24nKS5jbGFzc2VkKHNlY3Rpb25BY3RpdmUsIG51bGwpO1xuXG4gICAgc2V0TGF5ZXJPcGFjaXR5KE9iamVjdC5rZXlzKGxheWVycykuZmlsdGVyKGsgPT4gayAhPSBpZClbMF0pO1xuXG4gICAgaWYgKHdhc1ByZXZpb3VzbHlBY3RpdmUpIHtcbiAgICAgICAgc2V0TGF5ZXJPcGFjaXR5KGlkKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc2VkKGJ1dHRvbkFjdGl2ZSwgdHJ1ZSk7XG4gICAgICAgIHRhcmdldFNlY3Rpb24uY2xhc3NlZChzZWN0aW9uQWN0aXZlLCB0cnVlKTtcbiAgICAgICAgc2V0TGF5ZXJPcGFjaXR5KGlkLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXNpemVTdmcoKGlkID09PSAnZ2RwJyAmJiAhd2FzUHJldmlvdXNseUFjdGl2ZSkpO1xuXG4gICAgaWYgKCF3YXNQcmV2aW91c2x5QWN0aXZlICYmIGRlc2t0b3ApIHtcbiAgICAgICAgaGFuZGxlTGF5ZXJzKGlkKTtcbiAgICB9IGVsc2UgaWYgKGRlc2t0b3ApIHtcbiAgICAgICAgaGFuZGxlTGF5ZXJzKGlkLCB0cnVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVN2ZyhnZHApIHtcbiAgICBjb25zdCBoID0gZ2RwID8gZ2RwSGVpZ2h0IDogb3JpZ2luYWxIZWlnaHQ7XG5cbiAgICBkMy5zZWxlY3QoJ3N2Zy5tYWluJykudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoICsgNTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPdmVybGF5KGNvdW50LCBjb250YWluZXIsIGNsYXNzTmFtZSwgY29sb3IpIHtcbiAgICBjb25zdCByb3dzID0gTWF0aC5mbG9vcihjb3VudCAvIGRvdHNQZXJSb3cpLFxuICAgICAgICByZW1haW5kZXIgPSBjb3VudCAlIGRvdHNQZXJSb3csXG4gICAgICAgIHNwYWNpbmcgPSBkb3RDb25zdGFudHMub2Zmc2V0LnkgLSAoZG90Q29uc3RhbnRzLnJhZGl1cyAqIDIpLFxuICAgICAgICBtYWluUmVjdEhlaWdodCA9IChyb3dzICogZG90Q29uc3RhbnRzLm9mZnNldC55KSAtIHNwYWNpbmcgLyAyLFxuICAgICAgICBzZWNvbmRhcnlSZWN0SGVpZ2h0ID0gKGRvdENvbnN0YW50cy5yYWRpdXMgKiAyKSArIHNwYWNpbmcgLyAyLFxuICAgICAgICBvdmVybGF5SGVpZ2h0ID0gbWFpblJlY3RIZWlnaHQgKyBzZWNvbmRhcnlSZWN0SGVpZ2h0LFxuICAgICAgICByZWN0Q29sb3IgPSBjb2xvciB8fCAnI2NjYyc7XG5cbiAgICBsZXQgb3ZlcmxheUxheWVyID0gY29udGFpbmVyLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdkYXRhLXJlY3QtaGVpZ2h0Jywgb3ZlcmxheUhlaWdodClcbiAgICAgICAgLmNsYXNzZWQoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgIG92ZXJsYXlMYXllci5hdHRyKCdvcGFjaXR5JywgMCk7XG5cbiAgICBvdmVybGF5TGF5ZXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZG90c1BlclJvdyAqIGRvdENvbnN0YW50cy5vZmZzZXQueClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIG1haW5SZWN0SGVpZ2h0KVxuICAgICAgICAuYXR0cignZmlsbCcsIHJlY3RDb2xvcilcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwLjgpO1xuXG4gICAgb3ZlcmxheUxheWVyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIHJlbWFpbmRlciAqIGRvdENvbnN0YW50cy5vZmZzZXQueClcbiAgICAgICAgLmF0dHIoJ3knLCBtYWluUmVjdEhlaWdodClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNlY29uZGFyeVJlY3RIZWlnaHQpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgcmVjdENvbG9yKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDAuOClcblxuICAgIHJldHVybiBvdmVybGF5TGF5ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckxheWVyKGlkLCBsYXllciwgX24sIF9jb25maWcpIHtcbiAgICBjb25maWcgPSBfY29uZmlnIHx8IGNvbmZpZztcbiAgICBsYXllcnNbaWRdID0gbGF5ZXI7XG4gICAgY29uc3QgbiA9IF9uO1xuXG4gICAgaWYgKG4pIHtcbiAgICAgICAgZ2RwSGVpZ2h0ID0gbiAqIDAuNjtcbiAgICB9IGVsc2UgaWYgKCFvcmlnaW5hbEhlaWdodCkge1xuICAgICAgICBvcmlnaW5hbEhlaWdodCA9IGQzLnNlbGVjdCgnZy5zcGVuZGluZy1kb3RzJykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvclJlc2l6ZSgpIHtcbiAgICBkMy5zZWxlY3RBbGwoJy5zaWRlYmFyJykuY2xhc3NlZCgnaW50cm8taGlkZGVuJywgdHJ1ZSk7XG4gICAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKHNldExheWVyT3BhY2l0eSk7XG4gICAgZDMuc2VsZWN0QWxsKCcuZmFjdHNfX3RyaWdnZXInKS5jbGFzc2VkKGJ1dHRvbkFjdGl2ZSwgbnVsbCk7XG4gICAgZDMuc2VsZWN0QWxsKCcuZmFjdHNfX3NlY3Rpb24nKS5jbGFzc2VkKHNlY3Rpb25BY3RpdmUsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsQ29tcGFyZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuaW50cm8taGlkZGVuJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbnRyby1oaWRkZW4nLCBudWxsKTtcbiAgICB9LCA1MDApO1xufVxuXG5kMy5zZWxlY3RBbGwoJy5mYWN0c19fdHJpZ2dlcicpLm9uKCdjbGljaycsIHRvZ2dsZUZhY3RzKTsiLCJpbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBsaW5lIH0gZnJvbSAnZDMtc2hhcGUnO1xuaW1wb3J0IHsgZXN0YWJsaXNoQ29udGFpbmVyLCB0cmFuc2xhdG9yLCBzaW1wbGlmeU51bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IGRvdENvbnN0YW50cyB9IGZyb20gJy4vZG90Q29uc3RhbnRzJztcbmltcG9ydCB7IGNvbXBhcmVPbiwgY29tcGFyZU9mZiwgZ2VuZXJhdGVPdmVybGF5LCByZWdpc3RlckxheWVyIH0gZnJvbSAnLi9jb21wYXJlTWFuYWdlcic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2dsb2JhbFNhc3MvY29sb3JzLnNjc3MnO1xuXG5jb25zdCBkMyA9IHsgc2VsZWN0LCBzZWxlY3RBbGwsIGxpbmUgfTtcblxubGV0IGNvbXBhcmVMYXllcixcbiAgICBjb25maWcgPSB7fTtcblxuZnVuY3Rpb24gcGxhY2VMZWdlbmQoZykge1xuICAgIGNvbnN0IGxlZ2VuZENvbnRhaW5lciA9IGcuYXBwZW5kKCdnJylcbiAgICAgICAgLmNsYXNzZWQoYCR7Y29uZmlnLmNvbXBhcmVTdHJpbmd9LXN0ZXAtdHdvYCwgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ29wYWNpdHknLCAwKSxcbiAgICAgICAgY29tcGFyZVN0cmluZyA9IGNvbmZpZy5jb21wYXJlU3RyaW5nLFxuICAgICAgICB0ZXh0WCA9IC01MCxcbiAgICAgICAgY29tcGFyaXNvbkFtb3VudCA9IGNvbmZpZy5jb21wYXJpc29uQW1vdW50IHx8IDAsXG4gICAgICAgIGhlaWdodCA9IE51bWJlcihjb21wYXJlTGF5ZXIuYXR0cignZGF0YS1yZWN0LWhlaWdodCcpKSxcbiAgICAgICAgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueDsgfSlcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnk7IH0pLFxuICAgICAgICBsaW5lRGF0YSA9IFtcbiAgICAgICAgICAgIHsgeDogdGV4dFggKyAzMCwgeTogMCB9LFxuICAgICAgICAgICAgeyB4OiB0ZXh0WCArIDIwLCB5OiAwIH0sXG4gICAgICAgICAgICB7IHg6IHRleHRYICsgMjAsIHk6IGhlaWdodCB9LFxuICAgICAgICAgICAgeyB4OiB0ZXh0WCArIDMwLCB5OiBoZWlnaHQgfVxuICAgICAgICBdLFxuICAgICAgICB0ZXh0ID0gbGVnZW5kQ29udGFpbmVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncmVzZXQgdG91Y2gtbGFiZWwnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKVxuICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cigneScsIC0xMClcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgMjQpO1xuXG4gICAgbGVnZW5kQ29udGFpbmVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgbGluZShsaW5lRGF0YSkpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuYXR0cignc3Ryb2tlJywgJyNhYWEnKVxuICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMik7XG5cbiAgICB0ZXh0LmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAudGV4dCgnRmVkZXJhbCAnICsgYCR7Y29tcGFyZVN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2NvbXBhcmVTdHJpbmcuc2xpY2UoMSl9YClcbiAgICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICc2MDAnKVxuICAgICAgICAuYXR0cigneCcsIHRleHRYKVxuICAgICAgICAuYXR0cignZHgnLCAwKVxuICAgICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKTtcblxuICAgIHRleHQuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC50ZXh0KHNpbXBsaWZ5TnVtYmVyKGNvbXBhcmlzb25BbW91bnQpKVxuICAgICAgICAuYXR0cigneCcsIHRleHRYKVxuICAgICAgICAuYXR0cignZHgnLCAwKVxuICAgICAgICAuYXR0cignZHknLCAzMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0UmV2ZW51ZU92ZXJsYXkoX2NvbmZpZykge1xuICAgIGNvbmZpZyA9IF9jb25maWcgfHwgY29uZmlnO1xuXG4gICAgY29uc3Qgc3ZnID0gZXN0YWJsaXNoQ29udGFpbmVyKCksXG4gICAgICAgIGJpbGxpb24gPSAxMDAwMDAwMDAwLFxuICAgICAgICBjb21wYXJlQ291bnQgPSBNYXRoLmNlaWwoY29uZmlnLmNvbXBhcmlzb25BbW91bnQgLyBiaWxsaW9uKTtcblxuICAgIGNvbXBhcmVMYXllciA9IGdlbmVyYXRlT3ZlcmxheShjb21wYXJlQ291bnQsIHN2Zy5zZWxlY3QoJy5tYWluLWNvbnRhaW5lcicpLCBgJHtjb25maWcuY29tcGFyaXNvblN0cmluZ30tbGF5ZXJgLCBjb25maWcuY29tcGFyaXNvbkNvbG9yKTtcblxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiA5NTkpIHtcbiAgICAgICAgcGxhY2VMZWdlbmQoY29tcGFyZUxheWVyKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckxheWVyKGNvbmZpZy5jb21wYXJlU3RyaW5nLCBjb21wYXJlTGF5ZXIsIG51bGwsIGNvbmZpZyk7XG59XG4iLCJpbXBvcnQgeyBjaGFydFdpZHRoIH0gZnJvbSBcIi4vd2lkdGhNYW5hZ2VyXCI7XG5cbmV4cG9ydCBjb25zdCBkb3RDb25zdGFudHMgPSB7XG4gICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDZcbiAgICB9LFxuICAgIHJhZGl1czogMlxufTtcblxuZXhwb3J0IGxldCBkb3RzUGVyUm93O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RG90c1BlclJvdygpIHtcbiAgICBjb25zdCB3b3JraW5nV2lkdGggPSBjaGFydFdpZHRoIC0gZG90Q29uc3RhbnRzLnJhZGl1cztcblxuICAgIGRvdHNQZXJSb3cgPSBNYXRoLmZsb29yKHdvcmtpbmdXaWR0aCAvIGRvdENvbnN0YW50cy5vZmZzZXQueCk7XG59IiwiaW1wb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgZXN0YWJsaXNoQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgcGxhY2VEb3RzIH0gZnJvbSBcIi4vcGxhY2VEb3RzXCI7XG5pbXBvcnQgeyBzdGFydExlZ2VuZEFuaW1hdGlvbiB9IGZyb20gJy4vbGVnZW5kJztcbmltcG9ydCB7IHNldENoYXJ0V2lkdGgsIGNoYXJ0V2lkdGggfSBmcm9tICcuL3dpZHRoTWFuYWdlcic7XG5pbXBvcnQgeyBzZXREb3RzUGVyUm93IH0gZnJvbSAnLi9kb3RDb25zdGFudHMnO1xuaW1wb3J0IHsgcmVzZXRGb3JSZXNpemUgfSBmcm9tICcuL2NvbXBhcmVNYW5hZ2VyJztcblxuY29uc3QgZDMgPSB7IHNlbGVjdCwgc2VsZWN0QWxsIH07XG5cbmxldCBkZWJvdW5jZSxcbiAgICBwcmV2aW91c1dpZHRoLFxuICAgIGNvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDaGFydChfY29uZmlnKSB7XG4gICAgZDMuc2VsZWN0KCcjdml6Jykuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgY29uZmlnID0gX2NvbmZpZyB8fCBjb25maWc7XG5cbiAgICBzZXRDaGFydFdpZHRoKCk7XG4gICAgc2V0RG90c1BlclJvdygpO1xuICAgIFxuICAgIGVzdGFibGlzaENvbnRhaW5lcig1MDAsIGNoYXJ0V2lkdGgsIGNvbmZpZy5hY2Nlc3NpYmlsaXR5QXR0cnMuZGVmYXVsdCk7XG5cbiAgICBzdGFydExlZ2VuZEFuaW1hdGlvbihjb25maWcpO1xufVxuXG5mdW5jdGlvbiByZXNpemVDaGFydCgpIHtcbiAgICBzZXRDaGFydFdpZHRoKCk7XG4gICAgc2V0RG90c1BlclJvdygpO1xuICAgIHJlc2V0Rm9yUmVzaXplKCk7XG4gICAgZDMuc2VsZWN0KCdzdmcubWFpbicpLmF0dHIoJ3dpZHRoJywgY2hhcnRXaWR0aCk7XG4gICAgcGxhY2VEb3RzKGNvbmZpZyk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRlYm91bmNlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZSk7XG4gICAgfVxuXG4gICAgaWYocHJldmlvdXNXaWR0aCA9PT0gd2luZG93LmlubmVyV2lkdGgpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHByZXZpb3VzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBkZWJvdW5jZSA9IHNldFRpbWVvdXQocmVzaXplQ2hhcnQsIDEwMCk7XG59KTsiLCJpbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnZDMtdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIsIHRyYW5zbGF0b3IsIGZhZGVBbmRSZW1vdmUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL2dsb2JhbFNhc3MvY29sb3JzLnNjc3MnO1xuaW1wb3J0IHsgcGxhY2VEb3RzIH0gZnJvbSAnLi9wbGFjZURvdHMnO1xuaW1wb3J0IHsgY2hhcnRXaWR0aCB9IGZyb20gJy4vd2lkdGhNYW5hZ2VyJztcbmltcG9ydCB7IHRyaWdnZXJJbmZvQm94LCB0cmlnZ2VyTWFpbkluZm9Cb3ggfSBmcm9tICcuLi8uLi9pbmZvQm94JztcblxuY29uc3QgZDMgPSB7IHNlbGVjdCwgc2VsZWN0QWxsIH07XG5jb25zdCBpbnRyb1dpZHRoID0gMzY1O1xuY29uc3QgcmFkaXVzID0gNzU7XG5cbmxldCBzdmc7IGxldCBsYXJnZURvdDsgbGV0IGJpbGxpb247IGxldCBleHBsYW5hdGlvbjsgbGV0XG5cdGNvbmZpZyA9IHt9O1xuXG5mdW5jdGlvbiBidWlsZExlZ2VuZCgpIHtcblx0Y29uc3QgZyA9IGQzLnNlbGVjdCgnLmluY29tZS1kb3QtbGVnZW5kJyk7XG5cdGNvbnN0IGR1cmF0aW9uID0gMjAwMDtcblx0Y29uc3QgdyA9IDEyNjtcblx0Y29uc3QgeE9mZnNldCA9IDQ7XG5cblx0cGxhY2VEb3RzKGNvbmZpZyk7XG5cblx0ZmFkZUFuZFJlbW92ZShleHBsYW5hdGlvbiwgMTAwMCk7XG5cdGZhZGVBbmRSZW1vdmUoYmlsbGlvbiwgNTAwKTtcblxuXHRnLnRyYW5zaXRpb24oKVxuXHRcdC5kdXJhdGlvbihkdXJhdGlvbilcblx0XHQuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcih4T2Zmc2V0LCAxNCkpO1xuXG5cdGcuc2VsZWN0KCdjaXJjbGUnKVxuXHRcdC5hdHRyKCdvcGFjaXR5JywgMSlcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKGR1cmF0aW9uKVxuXHRcdC5hdHRyKCdyJywgMylcblx0XHQuYXR0cignY3gnLCAwKVxuXHRcdC5hdHRyKCdjeScsIDApXG5cdFx0LmVhc2UoKTtcblxuXHRnLmFwcGVuZCgndGV4dCcpXG5cdFx0LnRleHQoJz0gJDEgQmlsbGlvbicpXG5cdFx0LmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKVxuXHRcdC5hdHRyKCdvcGFjaXR5JywgMClcblx0XHQuc3R5bGUoJ2ZvbnQtc2l6ZScsIDE2KVxuXHRcdC5hdHRyKCd5JywgNSlcblx0XHQuYXR0cigneCcsIDcpXG5cdFx0LnRyYW5zaXRpb24oKVxuXHRcdC5kZWxheShkdXJhdGlvbiAqIDAuNylcblx0XHQuZHVyYXRpb24oZHVyYXRpb24gLyAyKVxuXHRcdC5hdHRyKCdvcGFjaXR5JywgMSlcblx0XHQuZWFzZSgpO1xuXG5cdGcuYXBwZW5kKCdpbWFnZScpXG5cdFx0LmF0dHIoJ2hlaWdodCcsIDE2KVxuXHRcdC5hdHRyKCd3aWR0aCcsIDIwKVxuXHRcdC5hdHRyKCd4JywgODApXG5cdFx0LmF0dHIoJ3knLCAtMTQpXG5cdFx0LmF0dHIoJ29wYWNpdHknLCAwKVxuXHRcdC5hdHRyKCdkYXRhLWJveC1pZCcsICdiaWxsaW9uLWRvbGxhcnMnKVxuXHRcdC5hdHRyKCd4bGluazpocmVmJywgYC9hbWVyaWNhcy1maW5hbmNlLWd1aWRlL2ljb25zLyR7Y29uZmlnLmFuZWNkb3RlTmFtZX1gKVxuXHRcdC5hdHRyKCdzdHlsZScsICdjdXJzb3I6cG9pbnRlcicpXG5cdFx0Lm9uKCdjbGljaycsIHRyaWdnZXJJbmZvQm94KVxuXHRcdC50cmFuc2l0aW9uKClcblx0XHQuZGVsYXkoZHVyYXRpb24gKiAwLjcpXG5cdFx0LmR1cmF0aW9uKGR1cmF0aW9uIC8gMilcblx0XHQuYXR0cignb3BhY2l0eScsIDEpXG5cdFx0LmVhc2UoKTtcblx0dHJpZ2dlck1haW5JbmZvQm94KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRleHQoKSB7XG5cdGNvbnN0IGR1cmF0aW9uID0gNTAwO1xuXG5cdGV4cGxhbmF0aW9uID0gdGhpcy5sYXJnZURvdC5hcHBlbmQoJ3RleHQnKVxuXHRcdC5hdHRyKCd5JywgNTQpXG5cdFx0LmF0dHIoJ29wYWNpdHknLCAwKVxuXHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCB0cmFuc2xhdG9yKHJhZGl1cyAqIDIgKyAyMCwgMCkpXG5cdFx0LmF0dHIoJ2ZpbGwnLCBjb2xvcnMudGV4dENvbG9yUGFyYWdyYXBoKTtcblxuXHRleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcblx0XHQuYXR0cigneCcsIDApXG5cdFx0LmF0dHIoJ2ZvbnQtc2l6ZScsIDE4KVxuXHRcdC50ZXh0KCdJbiB0aGlzIGFuYWx5c2lzJyk7XG5cblx0ZXhwbGFuYXRpb24uYXBwZW5kKCd0c3BhbicpXG5cdFx0LmF0dHIoJ3gnLCAwKVxuXHRcdC5hdHRyKCdkeScsIDI4KVxuXHRcdC5hdHRyKCdmb250LXNpemUnLCAyNClcblx0XHQuYXR0cignZm9udC13ZWlnaHQnLCAnNjAwJylcblx0XHQudGV4dCgnT25lIERvdCcpO1xuXG5cdGV4cGxhbmF0aW9uLmFwcGVuZCgndHNwYW4nKVxuXHRcdC5hdHRyKCdmb250LXNpemUnLCAyNClcblx0XHQudGV4dCgnIHJlcHJlc2VudHMnKTtcblxuXHRleHBsYW5hdGlvbi5hcHBlbmQoJ3RzcGFuJylcblx0XHQuYXR0cigneCcsIDApXG5cdFx0LmF0dHIoJ2ZvbnQtc2l6ZScsIDI0KVxuXHRcdC5hdHRyKCdmb250LXdlaWdodCcsICc2MDAnKVxuXHRcdC5hdHRyKCdkeScsIDMwKVxuXHRcdC50ZXh0KCdPbmUgQmlsbGlvbiBEb2xsYXJzJyk7XG5cblx0YmlsbGlvbiA9IHRoaXMubGFyZ2VEb3QuYXBwZW5kKCd0ZXh0Jylcblx0XHQudGV4dCgnJDEsMDAwLDAwMCwwMDAnKVxuXHRcdC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuXHRcdC5hdHRyKCdmb250LXNpemUnLCAxOClcblx0XHQuYXR0cigneCcsIHRoaXMucmFkaXVzKVxuXHRcdC5hdHRyKCd5JywgdGhpcy5yYWRpdXMgKyA3KVxuXHRcdC5hdHRyKCdmaWxsJywgJ3doaXRlJylcblx0XHQuYXR0cignb3BhY2l0eScsIDApO1xuXG5cdHRoaXMubGFyZ2VEb3Quc2VsZWN0QWxsKCd0ZXh0Jylcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDUwMClcblx0XHQuYXR0cignb3BhY2l0eScsIDEpXG5cdFx0LmVhc2UoKTtcblxuXHRzZXRUaW1lb3V0KGJ1aWxkTGVnZW5kLCAxMDAwKTtcbn1cblxuZnVuY3Rpb24gaW5pdERvdCgpIHtcblx0Y29uc3QgZG90Q29sb3IgPSBjb25maWcuc2VjdGlvbkNvbG9yO1xuXHRsYXJnZURvdC5hcHBlbmQoJ2NpcmNsZScpXG5cdFx0LmF0dHIoJ2N4JywgcmFkaXVzKVxuXHRcdC5hdHRyKCdjeScsIHJhZGl1cylcblx0XHQuYXR0cigncicsIDEpXG5cdFx0LmF0dHIoJ2ZpbGwnLCBkb3RDb2xvcilcblx0XHQudHJhbnNpdGlvbigpXG5cdFx0LmR1cmF0aW9uKDE1MDApXG5cdFx0LmF0dHIoJ3InLCByYWRpdXMpXG5cdFx0Lm9uKCdlbmQnLCBhZGRUZXh0LmJpbmQoe1xuXHRcdFx0bGFyZ2VEb3QsXG5cdFx0XHRyYWRpdXMsXG5cdFx0fSkpXG5cdFx0LmVhc2UoKTtcblx0dHJpZ2dlck1haW5JbmZvQm94KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydExlZ2VuZEFuaW1hdGlvbihfY29uZmlnKSB7XG5cdGNvbnN0IGludHJvWCA9IGNoYXJ0V2lkdGggPCBpbnRyb1dpZHRoID8gMCA6IChjaGFydFdpZHRoIC8gMikgLSAoaW50cm9XaWR0aCAvIDIpO1xuXHRjb25zdCBzY2FsZURvdExlZ2VuZCA9IGNoYXJ0V2lkdGggPCA0MzAgPyAwLjg1IDogMTtcblxuXHRjb25maWcgPSBfY29uZmlnIHx8IGNvbmZpZztcblx0c3ZnID0gZXN0YWJsaXNoQ29udGFpbmVyKCksXG5cdGxhcmdlRG90ID0gc3ZnLmFwcGVuZCgnZycpXG5cdFx0LmNsYXNzZWQoJ2luY29tZS1kb3QtbGVnZW5kJywgdHJ1ZSlcblx0XHQuYXR0cigndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRvcihpbnRyb1gsIDQwKX0gc2NhbGUoJHtzY2FsZURvdExlZ2VuZH0pYCk7XG5cblx0aW5pdERvdCgpO1xufVxuIiwiaW1wb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiB9IGZyb20gJ2QzLXRyYW5zaXRpb24nO1xuaW1wb3J0IHsgZG90Q29uc3RhbnRzLCBkb3RzUGVyUm93fSBmcm9tICcuL2RvdENvbnN0YW50cyc7XG5pbXBvcnQgeyBlc3RhYmxpc2hDb250YWluZXIsIHRyYW5zbGF0b3IgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGluaXRSZXZlbnVlT3ZlcmxheSB9IGZyb20gJy4vY29tcGFyZVJldmVudWUnO1xuaW1wb3J0IHsgaW5pdEdkcCB9IGZyb20gJy4vY29tcGFyZUdkcCc7XG5pbXBvcnQgeyBjaGFydFdpZHRoIH0gZnJvbSAnLi93aWR0aE1hbmFnZXInO1xuaW1wb3J0IHsgcmV2ZWFsQ29tcGFyZSB9IGZyb20gJy4vY29tcGFyZU1hbmFnZXInO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9nbG9iYWxTYXNzL2NvbG9ycy5zY3NzJztcblxuY29uc3QgZDMgPSB7IHNlbGVjdCwgc2VsZWN0QWxsIH07XG5cbmxldCBzdmcsXG4gICAgcm93Q291bnQsXG4gICAgY29uZmlnID0ge307XG5cbmZ1bmN0aW9uIGRvdEZhY3RvcnkoY29udGFpbmVyLCB4LCB5KSB7XG4gICAgY29uc3QgY29sb3IgPSBjb25maWcuc2VjdGlvbkNvbG9yO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLmF0dHIoJ2N4JywgeClcbiAgICAgICAgLmF0dHIoJ2N5JywgeSlcbiAgICAgICAgLmF0dHIoJ3InLCAyKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjb2xvcilcbn1cblxuZnVuY3Rpb24gcmVhZHlEb3RzKCkge1xuICAgIGNvbnN0IGRvdENvbnRhaW5lciA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgICAuY2xhc3NlZCgnbWFpbi1jb250YWluZXInLCB0cnVlKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgdHJhbnNsYXRvcigwLCAzMCkpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuY2xhc3NlZCgnc3BlbmRpbmctZG90cycsIHRydWUpXG4gICAgICAgIC5hdHRyKCdvcGFjaXR5JywgMCksXG4gICAgICAgIG9uZUJpbGxpb24gPSAxMDAwMDAwMDAwO1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBkb3RSZWN0SGVpZ2h0LFxuICAgICAgICBzZWN0aW9uQW1vdW50SW5CaWxsaW9ucyA9IGNvbmZpZy5zZWN0aW9uQW1vdW50IC8gb25lQmlsbGlvbixcbiAgICAgICAgeCA9IGRvdENvbnN0YW50cy5yYWRpdXMsXG4gICAgICAgIHkgPSAyO1xuXG4gICAgZm9yIChpOyBpIDwgc2VjdGlvbkFtb3VudEluQmlsbGlvbnM7IGkrKykge1xuICAgICAgICBkb3RGYWN0b3J5KGRvdENvbnRhaW5lciwgeCwgeSk7XG4gICAgICAgIHggKz0gZG90Q29uc3RhbnRzLm9mZnNldC54O1xuXG4gICAgICAgIGlmICgoaSArIDEpICUgZG90c1BlclJvdyA9PT0gMCkge1xuICAgICAgICAgICAgeSArPSBkb3RDb25zdGFudHMub2Zmc2V0Lnk7XG4gICAgICAgICAgICB4ID0gZG90Q29uc3RhbnRzLnJhZGl1cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvdENvbnRhaW5lci50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KDEwMDApXG4gICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDEpXG4gICAgICAgIC5vbignZW5kJywgcmV2ZWFsQ29tcGFyZSlcbiAgICAgICAgLmVhc2UoKTtcblxuICAgIGRvdFJlY3RIZWlnaHQgPSBkMy5zZWxlY3QoJ2cuc3BlbmRpbmctZG90cycpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICBkb3RDb250YWluZXIuYXR0cignZGF0YS1yZWN0LWhlaWdodCcsIGRvdFJlY3RIZWlnaHQpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBzdmcuYXR0cignaGVpZ2h0JywgZG90UmVjdEhlaWdodCArIDUwKTtcbiAgICB9LCAxMDAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VEb3RzKF9jb25maWcpIHtcbiAgICBkMy5zZWxlY3QoJy5tYWluLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIGNvbmZpZyA9IF9jb25maWcgfHwgY29uZmlnO1xuICAgIHN2ZyA9IGVzdGFibGlzaENvbnRhaW5lcigpO1xuXG4gICAgcmVhZHlEb3RzKCk7XG4gICAgaW5pdFJldmVudWVPdmVybGF5KGNvbmZpZyk7XG4gICAgaW5pdEdkcChjb25maWcpO1xufVxuIiwiZXhwb3J0IGxldCBjaGFydFdpZHRoO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2hhcnRXaWR0aCgpIHtcbiAgICBjaGFydFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpeicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xufSIsIi8vIHRoaXMgaXMgYSBoYWNrIHRvIGZpeCBhbiBpc3N1ZSBpbiBFZGdlXG5cbmltcG9ydCB7IGVzdGFibGlzaENvbnRhaW5lciB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBzZWxlY3RBbGwgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuXG5jb25zdCBkMyA9IHsgc2VsZWN0QWxsIH07XG5cbmxldCBjb3VudGVyID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvdWNoSWUoKSB7XG4gICAgY291bnRlciArPSAxO1xuXG4gICAgZXN0YWJsaXNoQ29udGFpbmVyKCkuYXR0cignZGF0YS1pZS10b3VjaCcsIGNvdW50ZXIpO1xuICAgIGQzLnNlbGVjdEFsbCgnLnRvdWNoLWxhYmVsJykuYXR0cignZHgnLCAwKVxufSIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcblxuY29uc3QgZDMgPSB7IHNlbGVjdCwgc2VsZWN0QWxsIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQW1vdW50SW5Dc3Yoc3RyLCBkYXRhKSB7XG7CoMKgwqAgbGV0IGFtb3VudDtcbsKgwqDCoFxuICAgIGRhdGEuZXZlcnkoKHJvdykgPT4ge1xuwqDCoMKgwqDCoMKgwqAgaWYgKHJvdy5jYXRlZ29yeSAhPSBzdHIpIHtcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqAgcmV0dXJuIHRydWVcbsKgwqDCoMKgwqDCoMKgIH0gZWxzZSB7XG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgIGFtb3VudCA9IHJvdy5hbW91bnQ7XG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgIHJldHVybiBmYWxzZVxuwqDCoMKgwqDCoMKgwqAgfVxuwqDCoMKgIH0pXG7CoFxuwqDCoMKgIHJldHVybiBhbW91bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50Qm94KGQzU2VsZWN0aW9uKSB7XG4gICAgY29uc3QgcmVjdCA9IGQzU2VsZWN0aW9uLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxuICAgICAgaGVpZ2h0OiBNYXRoLmNlaWwocmVjdC5oZWlnaHQpLFxuICAgICAgcmlnaHQ6IE1hdGguY2VpbChyZWN0LnJpZ2h0KSxcbiAgICAgIGJvdHRvbTogTWF0aC5jZWlsKHJlY3QuYm90dG9tKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0b3IoeCwgeSkge1xuICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sICR7eX0pYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKGQzU2VsZWN0aW9uKSB7XG4gICAgY29uc3QgcmUgPSAvKFxcZCkrL2dcbiAgICBjb25zdCBvcmlnaW5hbFRyYW5zZm9ybSA9IGQzU2VsZWN0aW9uLmF0dHIoJ3RyYW5zZm9ybScpLm1hdGNoKHJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IE51bWJlcihvcmlnaW5hbFRyYW5zZm9ybVswXSksXG4gICAgICAgIHk6IE51bWJlcihvcmlnaW5hbFRyYW5zZm9ybVsxXSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc3RhYmxpc2hDb250YWluZXIoaGVpZ2h0LCB3aWR0aCwgYWNjZXNzaWJpbGl0eUF0dHJzKSB7XG4gICAgY29uc3Qgdml6ID0gZDMuc2VsZWN0KCcjdml6Jyk7XG5cbiAgICBsZXQgc3ZnID0gdml6LnNlbGVjdCgnc3ZnLm1haW4nKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdzdmcuc2l6ZTogJywgc3ZnLnNpemUoKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3dpZHRoOiAnLCB3aWR0aCk7XG5cbiAgICBpZiAoc3ZnLnNpemUoKSA9PT0gMCkge1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgNDAwO1xuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDEyMDA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3dpZHRoOiAnLCB3aWR0aCk7XG5cbiAgICAgICAgc3ZnID0gdml6LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYWluJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdzaGFwZS1yZW5kZXJpbmcnLCAnZ2VvbWV0cmljUHJlY2lzaW9uJylcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gICAgfSBlbHNlIGlmIChoZWlnaHQpIHtcbiAgICAgICAgc3ZnLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYoYWNjZXNzaWJpbGl0eUF0dHJzICYmIE9iamVjdC5rZXlzKGFjY2Vzc2liaWxpdHlBdHRycykubGVuZ3RoKXtcbiAgICAgICAgc3ZnLmFwcGVuZCgnZGVzYycpLmF0dHIoJ2lkJywgJ3N2Z01haW5EZXNjJykudGV4dChhY2Nlc3NpYmlsaXR5QXR0cnMuZGVzYyk7XG4gICAgICAgIHN2Zy5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgJ3N2Z01haW5EZXNjJyk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ3N2ZycsIHN2Zyk7XG5cbiAgICByZXR1cm4gc3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlCaWxsaW9ucyhuKSB7XG4gICAgY29uc3QgYmlsbGlvbiA9IDEwMDAwMDAwMDA7XG5cbiAgICByZXR1cm4gYCQke01hdGgucm91bmQobiAvIGJpbGxpb24gKiAxMCkgLyAxMH0gQmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGlmeU51bWJlcihuKSB7XG4gICAgY29uc3QgdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwLFxuICAgICAgICBiaWxsaW9uID0gMTAwMDAwMDAwMCxcbiAgICAgICAgbWlsbGlvbiA9IDEwMDAwMDAsXG4gICAgICAgIG5lZ2F0aXZlU2lnbiA9IChuIDwgMCkgPyAnLScgOiAnJztcblxuICAgIGxldCBzaW1wbGlmaWVyID0gbWlsbGlvbixcbiAgICAgICAgbGV0dGVyID0gJ00nO1xuXG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuICckMCc7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKG4pID49IHRyaWxsaW9uKSB7XG4gICAgICAgIHNpbXBsaWZpZXIgPSB0cmlsbGlvbjtcbiAgICAgICAgbGV0dGVyID0gJ1QnXG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhuKSA+PSBiaWxsaW9uKSB7XG4gICAgICAgIHNpbXBsaWZpZXIgPSBiaWxsaW9uO1xuICAgICAgICBsZXR0ZXIgPSAnQic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke25lZ2F0aXZlU2lnbn0kJHtNYXRoLnJvdW5kKE1hdGguYWJzKG4pIC8gc2ltcGxpZmllciAqIDEwKSAvIDEwfSAke2xldHRlcn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29yZFdyYXAodGV4dCwgbWF4V2lkdGgpIHtcbiAgICB2YXIgd29yZHMgPSB0ZXh0LnRleHQoKS5zcGxpdCgvXFxzKy8pLnJldmVyc2UoKSxcbiAgICAgICAgd29yZCxcbiAgICAgICAgbGluZSA9IFtdLFxuICAgICAgICBsaW5lSGVpZ2h0ID0gMS4xLFxuICAgICAgICB0c3BhbjtcblxuICAgIHRzcGFuID0gdGV4dC50ZXh0KG51bGwpXG4gICAgICAgIC5hcHBlbmQoXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcInhcIiwgMCk7XG5cbiAgICB3aGlsZSAod29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB3b3JkID0gd29yZHMucG9wKCk7XG4gICAgICAgIGxpbmUucHVzaCh3b3JkKTtcbiAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgaWYgKHRzcGFuLm5vZGUoKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKSA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICBsaW5lLnBvcCgpO1xuICAgICAgICAgICAgdHNwYW4udGV4dChsaW5lLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgIGxpbmUgPSBbd29yZF07XG4gICAgICAgICAgICB0c3BhbiA9IHRleHQuYXBwZW5kKFwidHNwYW5cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIGxpbmVIZWlnaHQgKyBcImVtXCIpXG4gICAgICAgICAgICAgICAgLnRleHQod29yZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RHJvcFNoYWRvdygpIHtcbiAgICBjb25zdCBzdmcgPSBlc3RhYmxpc2hDb250YWluZXIoKSxcbiAgICAgICAgZmlsdGVyID0gc3ZnLmFwcGVuZCgnZGVmcycpLmFwcGVuZCgnZmlsdGVyJylcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdkcm9wMScpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMi4yKTtcblxuICAgIGZpbHRlci5hcHBlbmQoJ2ZlR2F1c3NpYW5CbHVyJylcbiAgICAgICAgLmF0dHIoJ2luJywgJ1NvdXJjZUFscGhhJylcbiAgICAgICAgLmF0dHIoJ3N0ZERldmlhdGlvbicsIDIpXG4gICAgICAgIC5hdHRyKCdyZXN1bHQnLCBcImJsdXJcIik7XG5cbiAgICBmaWx0ZXIuYXBwZW5kKCdmZU9mZnNldCcpXG4gICAgICAgIC5hdHRyKCdpbicsICdibHVyJylcbiAgICAgICAgLmF0dHIoJ2R4JywgMClcbiAgICAgICAgLmF0dHIoJ2R5JywgMClcbiAgICAgICAgLmF0dHIoJ3Jlc3VsdCcsICdvZmZzZXRCbHVyJyk7XG5cbiAgICBjb25zdCBmZU1lcmdlID0gZmlsdGVyLmFwcGVuZCgnZmVNZXJnZScpO1xuXG4gICAgZmVNZXJnZS5hcHBlbmQoJ2ZlTWVyZ2VOb2RlJylcbiAgICAgICAgLmF0dHIoJ2luJywgJ29mZnNldEJsdXInKTtcbiAgICBmZU1lcmdlLmFwcGVuZCgnZmVNZXJnZU5vZGUnKVxuICAgICAgICAuYXR0cignaW4nLCAnU291cmNlR3JhcGhpYycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhY3Rpb25Ub1BlcmNlbnQobiwgcHJlY2lzaW9uKSB7XG4gICAgaWYgKCFwcmVjaXNpb24pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG4gKiAxMDApICsgJyUnO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGhhbmRsZSBwcmVjaXNpb25cbiAgICBjb25zb2xlLndhcm4oJ25lZWQgdG8gaGFuZGxlIHByZWNpc2lvbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEJyKCkge1xuICAgIGQzLnNlbGVjdEFsbCgnYnInKS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmRSZW1vdmUoc2VsZWN0aW9uLCBkdXJhdGlvbikge1xuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgMTAwMDtcblxuICAgIHNlbGVjdGlvbi50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgICAuYXR0cignb3BhY2l0eScsIDApXG4gICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdJRU1vYmlsZScpICE9PSAtMSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==