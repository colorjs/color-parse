/**
 * @module color-parse
 */

'use strict'


module.exports = parse;


var names = require('color-name');
var isObject = require('is-plain-obj');


/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
};


/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [0,0,0], alpha = 1, space = 'rgb';

	if (typeof cstr === 'string') {
		//keyword
		if (names[cstr]) {
			parts = names[cstr].slice();
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0;
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.replace(/^#/,'');
			var size = base.length;
			var isShort = size <= 4;

			parts = base.split(isShort ? /(.)/ : /(..)/);
			parts = parts.filter(Boolean)
				.map(function (x) {
					if (isShort) {
						return parseInt(x + x, 16);
					}
					else {
						return parseInt(x, 16);
					}
				});

			if (parts.length === 4) {
				alpha = parts[3] / 255;
				parts = parts.slice(0,3);
			}
			if (!parts[0]) parts[0] = 0;
			if (!parts[1]) parts[1] = 0;
			if (!parts[2]) parts[2] = 0;
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1];
			var base = name.replace(/a$/, '');
			space = base;
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3;
			parts = m[2].trim()
				.split(/\s*,\s*/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100;
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100;
						return parseFloat(x);
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x);
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x];
						}
					}
					return parseFloat(x);
				});

			if (name === base) parts.push(1);
			alpha = parts[size] === undefined ? 1 : parts[size];
			parts = parts.slice(0, size);
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value);
			});

			space = cstr.match(/([a-z])/ig).join('').toLowerCase();
		}

		else {
			throw Error('Unable to parse ' + cstr);
		}
	}

	//numeric case
	else if (typeof cstr === 'number') {
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff];
	}

	//object case - detects css cases of rgb and hsl
	else if (isObject(cstr)) {
		if (cstr.r != null) {
			parts = [cstr.r, cstr.g, cstr.b];
		}
		else if (cstr.red != null) {
			parts = [cstr.red, cstr.green, cstr.blue];
		}
		else if (cstr.h != null) {
			parts = [cstr.h, cstr.s, cstr.l];
			space = 'hsl';
		}
		else if (cstr.hue != null) {
			parts = [cstr.hue, cstr.saturation, cstr.lightness];
			space = 'hsl';
		}

		if (cstr.a != null) alpha = cstr.a;
		else if (cstr.alpha != null) alpha = cstr.alpha;
		else if (cstr.opacity != null) alpha = cstr.opacity / 100;
	}

	//array
	else if (Array.isArray(cstr) || ArrayBuffer.isView(cstr)) {
		parts = [cstr[0], cstr[1], cstr[2]];
		alpha = cstr.length === 4 ? cstr[3] : 1;
	}

	else {
		throw Error('Unable to parse ' + cstr);
	}


	return {
		space: space,
		values: parts,
		alpha: alpha
	};
}
