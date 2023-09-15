/**
 * @module color-parse
 */
import names from 'color-name'

export default parse

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
}

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse(cstr) {
	var m, parts = [], alpha = 1, space

	//numeric case
	if (typeof cstr === 'number') {
		return { space: 'rgb', values: [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff], alpha: 1 }
	}
	if (typeof cstr === 'number') return { space: 'rgb', values: [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff], alpha: 1 }

	cstr = String(cstr).toLowerCase();

	//keyword
	if (names[cstr]) {
		parts = names[cstr].slice()
		space = 'rgb'
	}

	//reserved words
	else if (cstr === 'transparent') {
		alpha = 0
		space = 'rgb'
		parts = [0, 0, 0]
	}

	//hex
	else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
		var base = cstr.slice(1)
		var size = base.length
		var isShort = size <= 4
		alpha = 1

		if (isShort) {
			parts = [
				parseInt(base[0] + base[0], 16),
				parseInt(base[1] + base[1], 16),
				parseInt(base[2] + base[2], 16)
			]
			if (size === 4) {
				alpha = parseInt(base[3] + base[3], 16) / 255
			}
		}
		else {
			parts = [
				parseInt(base[0] + base[1], 16),
				parseInt(base[2] + base[3], 16),
				parseInt(base[4] + base[5], 16)
			]
			if (size === 8) {
				alpha = parseInt(base[6] + base[7], 16) / 255
			}
		}

		if (!parts[0]) parts[0] = 0
		if (!parts[1]) parts[1] = 0
		if (!parts[2]) parts[2] = 0

		space = 'rgb'
	}

	//color space
	else if (m = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab))\s*\(([^\)]*)\)/.exec(cstr)) {
		var name = m[1]
		var isRGB = name === 'rgb'
		var base = name.replace(/a$/, '')
		space = base
		var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3
		parts = m[2].trim()
			.split(/\s*[,\/]\s*|\s+/)
			.map(function (x, i) {
				//<percentage>
				if (x[x.length - 1] === '%') {
					//alpha
					if (i === 3) return parseFloat(x) / 100
					//rgb
					if (base === 'rgb') return parseFloat(x) * 255 / 100
					// lch/oklch
					if (/^(ok)?l/.test(base)) {
						if (!i) return parseFloat(x) / 100
						return parseFloat(x) * 0.4 / 100
					}
					return parseFloat(x)
				}
				//hue
				if (base[i] === 'h') {
					//<deg>
					if (/deg$/.test(x)) {
						return parseFloat(x)
					}
					//<base-hue>
					else if (baseHues[x] !== undefined) {
						return baseHues[x]
					}
				}
				if (x === 'none') return 0
				return parseFloat(x)
			})

		if (name === base) parts.push(1)
		alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size]
		parts = parts.slice(0, size)
	}

	//named channels case
	else if (/[0-9](?:\s|\/|,)/.test(cstr)) {
		parts = cstr.match(/([0-9]+)/g).map(function (value) {
			return parseFloat(value)
		})

		space = cstr.match(/([a-z])/ig)?.join('')?.toLowerCase() || 'rgb'
	}

	return {
		space,
		values: parts,
		alpha
	}
}
