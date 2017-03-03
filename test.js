var assert = require('assert');
var parse = require('./');

/** parse-color tests */
describe('parse-color tests', function () {
	it('#ffa500', function () {
		assert.deepEqual(parse('#ffa500'), {
			space: 'rgb',
			values: [ 255, 165, 0 ],
			alpha: 1
		});
	});
	it('#333', function () {
		assert.deepEqual(parse('#333'), {
			space: 'rgb',
			values: [ 51, 51, 51 ],
			alpha: 1
		});
	});
	it('#f98', function () {
		assert.deepEqual(parse('#f98'), {
			space: 'rgb',
			values: [ 255, 153, 136 ],
			alpha: 1
		});
	});
	it('lime', function () {
		assert.deepEqual(parse('lime'), {
			space: 'rgb',
			values: [ 0, 255, 0 ],
			alpha: 1
		});
	});
	it('hsl(210,50,50)', function () {
		assert.deepEqual(parse('hsl(210,50,50)'), {
			space: 'hsl',
			values: [ 210, 50, 50 ],
			alpha: 1
		});
	});
	it('rgba(153,50,204,60%)', function () {
		assert.deepEqual(parse('rgba(153,50,204,60%)'), {
			space: 'rgb',
			values: [ 153, 50, 204 ],
			alpha: 0.6
		});
	});
});


describe('color-string tests', function () {
	it('#fef', function () {
		assert.deepEqual(parse('#fef'), {
			space: 'rgb',
			values: [255, 238, 255],
			alpha: 1
		});
	});
	it('#fffFEF', function () {
		assert.deepEqual(parse('#fffFEF'), {
			space: 'rgb',
			values: [255, 255, 239],
			alpha: 1
		});
	});
	it('rgb(244, 233, 100)', function () {
		assert.deepEqual(parse('rgb(244, 233, 100)'), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 1
		});
	});
	it('rgb(100%, 30%, 90%)', function () {
		assert.deepEqual(parse('rgb(100%, 30%, 90%)'), {
			space: 'rgb',
			values: [255, 76.5, 229.5],
			alpha: 1
		});
	});
	it('transparent', function () {
		assert.deepEqual(parse('transparent'), {
			space: 'rgb',
			values: [0, 0, 0],
			alpha: 0
		});
	});
	it('hsl(240, 100%, 50.5%)', function () {
		assert.deepEqual(parse('hsl(240, 100%, 50.5%)'), {
			space: 'hsl',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hsl(240deg, 100%, 50.5%)', function () {
		assert.deepEqual(parse('hsl(240deg, 100%, 50.5%)'), {
			space: 'hsl',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hwb(240, 100%, 50.5%)', function () {
		assert.deepEqual(parse('hwb(240, 100%, 50.5%)'), {
			space: 'hwb',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hwb(240deg, 100%, 50.5%)', function () {
		assert.deepEqual(parse('hwb(240deg, 100%, 50.5%)'), {
			space: 'hwb',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('blue', function () {
		assert.deepEqual(parse('blue'), {
			space: 'rgb',
			values: [0, 0, 255],
			alpha: 1
		});
	});
	it('rgb(244, 233, 100)', function () {
		assert.deepEqual(parse('rgb(244, 233, 100)'), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 1
		});
	});
	it('rgba(244, 233, 100, 0.5)', function () {
		assert.deepEqual(parse('rgba(244, 233, 100, 0.5)'), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 0.5
		});
	});
	it('hsla(244, 100%, 100%, 0.6)', function () {
		assert.deepEqual(parse('hsla(244, 100%, 100%, 0.6)'), {
			space: 'hsl',
			values: [244, 100, 100],
			alpha: 0.6
		});
	});
	it('hwb(244, 100%, 100%, 0.6)', function () {
		assert.deepEqual(parse('hwb(244, 100%, 100%, 0.6)'), {
			space: 'hwb',
			values: [244, 100, 100],
			alpha: 0.6
		});
	});
	it('hwb(244, 100%, 100%)', function () {
		assert.deepEqual(parse('hwb(244, 100%, 100%)'), {
			space: 'hwb',
			values: [244, 100, 100],
			alpha: 1
		});
	});
	it('rgba(200, 20, 233, 0.2)', function () {
		assert.deepEqual(parse('rgba(200, 20, 233, 0.2)'), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0.2
		});
	});
	it('rgba(200, 20, 233, 0)', function () {
		assert.deepEqual(parse('rgba(200, 20, 233, 0)'), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0
		});
	});
	it('rgba(100%, 30%, 90%, 0.2)', function () {
		assert.deepEqual(parse('rgba(100%, 30%, 90%, 0.2)'), {
			space: 'rgb',
			values: [255, 76.5, 229.5],
			alpha: 0.2
		});
	});
	it('hsla(200, 20%, 33%, 0.2)', function () {
		assert.deepEqual(parse('hsla(200, 20%, 33%, 0.2)'), {
			space: 'hsl',
			values: [200, 20, 33],
			alpha: 0.2
		});
	});
	it('hwb(200, 20%, 33%, 0.2)', function () {
		assert.deepEqual(parse('hwb(200, 20%, 33%, 0.2)'), {
			space: 'hwb',
			values: [200, 20, 33],
			alpha: 0.2
		});
	});
	it('rgba(200, 20, 233, 0.2)', function () {
		assert.deepEqual(parse('rgba(200, 20, 233, 0.2)'), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0.2
		});
	});
});

describe('edge cases', function () {
	it('rgba(300, 600, 100, 3)', function () {
		assert.deepEqual(parse('rgba(300, 600, 100, 3)'), {
			space: 'rgb',
			values: [300, 600, 100],
			alpha: 3
		});
	});
	it('rgba(8000%, 100%, 333%, 88)', function () {
		assert.deepEqual(parse('rgba(8000%, 100%, 333%, 88)'), {
			space: 'rgb',
			values: [20400, 255, 849.15],
			alpha: 88
		});
	});
	it('hsla(400, 10%, 200%, 10)', function () {
		assert.deepEqual(parse('hsla(400, 10%, 200%, 10)'), {
			space: 'hsl',
			values: [400, 10, 200],
			alpha: 10
		});
	});
	it('hwb(400, 10%, 200%, 10)', function () {
		assert.deepEqual(parse('hwb(400, 10%, 200%, 10)'), {
			space: 'hwb',
			values: [400, 10, 200],
			alpha: 10
		});
	});
	it('yellowblue', function () {
		assert.deepEqual(parse('yellowblue'), {space: undefined, values: [], alpha: 1});
	});
});


describe('special cases', function () {
	it('hsla(101.12, 45.2%, 21.0%, 1.0)', function () {
		assert.deepEqual(parse('hsla(101.12, 45.2%, 21.0%, 1.0)'), {
			space: 'hsl',
			values: [101.12,45.2,21.0],
			alpha: 1
		});
	});
	it('hsl(red, 10%, 10%)', function () {
		assert.deepEqual(parse('hsl(red, 10%, 10%)'), {
			space: 'hsl',
			values: [0,10,10],
			alpha: 1
		});
	});
	it('hsl(red, 10%, 10%);', function () {
		assert.deepEqual(parse('hsl(red, 10%, 10%);'), {
			space: 'hsl',
			values: [0,10,10],
			alpha: 1
		});
	});
	it('hsl(10deg, 10%, 10%)', function () {
		assert.deepEqual(parse('hsl(10deg, 10%, 10%)'), {
			space: 'hsl',
			values: [10,10,10],
			alpha: 1
		});
	});
	it('lch(5, 5, orange)', function () {
		assert.deepEqual(parse('lch(5, 5, orange)'), {
			space: 'lch',
			values: [5,5,60],
			alpha: 1
		});
	});
	it('#afd6', function () {
		assert.deepEqual(parse('#afd6'), {
			space: 'rgb',
			values: [170,255,221],
			alpha: 0.4
		});
	});
	it('#aaffdd66', function () {
		assert.deepEqual(parse('#aaffdd66'), {
			space: 'rgb',
			values: [170,255,221],
			alpha: 0.4
		});
	});
	it('(R12 / G45 / B234)', function () {
		assert.deepEqual(parse('(R12 / G45 / B234)'), {
			space: 'rgb',
			values: [12, 45, 234],
			alpha: 1
		});
	});
	it('R:12 G:45 B:234', function () {
		assert.deepEqual(parse('R:12 G:45 B:234'), {
			space: 'rgb',
			values: [12, 45, 234],
			alpha: 1
		});
	});
	it('C100/M80/Y0/K35', function () {
		assert.deepEqual(parse('C100/M80/Y0/K35'), {
			space: 'cmyk',
			values: [100, 80, 0, 35],
			alpha: 1
		});
	});
	it('Array', function () {
		assert.deepEqual(parse([1,2,3]), {
			space: 'rgb',
			values: [1,2,3],
			alpha: 1
		});
	});
	it('Object', function () {
		assert.deepEqual(parse({r:1,g:2,b:3}), {
			space: 'rgb',
			values: [1,2,3],
			alpha: 1
		});
		assert.deepEqual(parse({red:1,green:2,blue:3}), {
			space: 'rgb',
			values: [1,2,3],
			alpha: 1
		});
		assert.deepEqual(parse({h:1,s:2,l:3}), {
			space: 'hsl',
			values: [1,2,3],
			alpha: 1
		});
	});
	it('Number', function () {
		assert.deepEqual(parse(0xA141E), {
			space: 'rgb',
			values: [10,20,30],
			alpha: 1
		});
	});
});
