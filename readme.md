# color-parse [![Build Status](https://travis-ci.org/dfcreative/color-parse.svg?branch=master)](https://travis-ci.org/dfcreative/color-parse) [![Code Climate](https://codeclimate.com/github/dfcreative/color-parse/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/color-parse)

Parse color values from a string. Highly inspired by substack’s [parse-color](https://github.com/substack/parse-color), except for it doesn’t do extra conversions to each possible space, which results in reduced [color-convert](https://github.com/harthur/color-convert) dependency and increased speed.
Also it tries to parse some additional CSS4 color functions, like hwb, gray, named hue etc.
The goal of project is to provide atomic css color string parser with tiny automatable API.

`$ npm install color-parse`

```js
var parse = require('color-parse');

parse('hsla(12, 10%, 50%, .3)');

//{ space: 'hsl', values: [12, 10, 50], alpha: 0.3 }
```


## Related

* [color-parser](http://npmjs.org/package/color-parser) — parser by TJ Holowaychuk. Supports limited set of spaces.
* [parse-color](http://npmjs.org/package/parse-color) — parser by Substack. Performs calculations to every possible space.
* [color-string](http://npmjs.org/package/color-string) — color parsing/serializing module by Harthur/MoOx. Has extensive API for parsing and serializing from any to any space.


[![NPM](https://nodei.co/npm/emmy.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/emmy/)