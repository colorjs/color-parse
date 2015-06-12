# color-parse [![Build Status](https://travis-ci.org/dfcreative/color-parse.svg?branch=master)](https://travis-ci.org/dfcreative/color-parse) [![Code Climate](https://codeclimate.com/github/dfcreative/color-parse/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-parse)

Atomic color string parser with tiny automatable API.


`$ npm install color-parse`

```js
var parse = require('color-parse');

parse('hsla(12, 10%, 50%, .3)'); //{ space: 'hsl', values: [12, 10, 50], alpha: 0.3 }
```

## Parsed strings

* [x] `rgb()`
* [x] `rgba()`
* [x] `hsl()` inc. [named hues](http://dev.w3.org/csswg/css-color/#simple-hues)
* [x] `hsla()`
* [x] `hwb()`
* [x] `cmyk()`
* [x] `xyz()`
* [x] `lab()`
* [x] `lch()`
* [x] `luv()`
* [x] `#RGB`
* [x] `#RGBA`
* [x] `#RRGGBB`
* [x] `#RRGGBBAA`
* [x] `R:0 G:0 B:0`
* [x] `(R0 / G0 / B0)`
* [x] `C100/M80/Y0/K35`



## Related

* [parse-color](http://npmjs.org/package/parse-color) — parser by James Halliday. Performs calculations to every possible space.
* [color-parser](http://npmjs.org/package/color-parser) — parser by TJ. Supports limited set of spaces.
* [color-string](http://npmjs.org/package/color-string) — color parsing/serializing module by Heather Arthur. Has extensive API for parsing and serializing from any to any space.


[![NPM](https://nodei.co/npm/color-parse.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/color-parse/)