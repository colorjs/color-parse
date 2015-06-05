var assert = require('chai').assert;
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
		assert.deepEqual(parse("#fef"), {
			space: 'rgb',
			values: [255, 238, 255],
			alpha: 1
		});
	});
	it('#fffFEF', function () {
		assert.deepEqual(parse("#fffFEF"), {
			space: 'rgb',
			values: [255, 255, 239],
			alpha: 1
		});
	});
	it('rgb(244, 233, 100)', function () {
		assert.deepEqual(parse("rgb(244, 233, 100)"), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 1
		});
	});
	it('rgb(100%, 30%, 90%)', function () {
		assert.deepEqual(parse("rgb(100%, 30%, 90%)"), {
			space: 'rgb',
			values: [255, 76.5, 229.5],
			alpha: 1
		});
	});
	it('transparent', function () {
		assert.deepEqual(parse("transparent"), {
			space: 'rgb',
			values: [0, 0, 0],
			alpha: 0
		});
	});
	it('hsl(240, 100%, 50.5%)', function () {
		assert.deepEqual(parse("hsl(240, 100%, 50.5%)"), {
			space: 'hsl',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hsl(240deg, 100%, 50.5%)', function () {
		assert.deepEqual(parse("hsl(240deg, 100%, 50.5%)"), {
			space: 'hsl',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hwb(240, 100%, 50.5%)', function () {
		assert.deepEqual(parse("hwb(240, 100%, 50.5%)"), {
			space: 'hwb',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('hwb(240deg, 100%, 50.5%)', function () {
		assert.deepEqual(parse("hwb(240deg, 100%, 50.5%)"), {
			space: 'hwb',
			values: [240, 100, 50.5],
			alpha: 1
		});
	});
	it('blue', function () {
		assert.deepEqual(parse("blue"), {
			space: 'rgb',
			values: [0, 0, 255],
			alpha: 1
		});
	});
	it('rgb(244, 233, 100)', function () {
		assert.deepEqual(parse("rgb(244, 233, 100)"), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 1
		});
	});
	it('rgba(244, 233, 100, 0.5)', function () {
		assert.deepEqual(parse("rgba(244, 233, 100, 0.5)"), {
			space: 'rgb',
			values: [244, 233, 100],
			alpha: 0.5
		});
	});
	it('hsla(244, 100%, 100%, 0.6)', function () {
		assert.deepEqual(parse("hsla(244, 100%, 100%, 0.6)"), {
			space: 'hsl',
			values: [244, 100, 100],
			alpha: 0.6
		});
	});
	it('hwb(244, 100%, 100%, 0.6)', function () {
		assert.deepEqual(parse("hwb(244, 100%, 100%, 0.6)"), {
			space: 'hwb',
			values: [244, 100, 100],
			alpha: 0.6
		});
	});
	it('hwb(244, 100%, 100%)', function () {
		assert.deepEqual(parse("hwb(244, 100%, 100%)"), {
			space: 'hwb',
			values: [244, 100, 100],
			alpha: 1
		});
	});
	it('rgba(200, 20, 233, 0.2)', function () {
		assert.deepEqual(parse("rgba(200, 20, 233, 0.2)"), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0.2
		});
	});
	it('rgba(200, 20, 233, 0)', function () {
		assert.deepEqual(parse("rgba(200, 20, 233, 0)"), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0
		});
	});
	it('rgba(100%, 30%, 90%, 0.2)', function () {
		assert.deepEqual(parse("rgba(100%, 30%, 90%, 0.2)"), {
			space: 'rgb',
			values: [255, 76.5, 229.5],
			alpha: 0.2
		});
	});
	it('hsla(200, 20%, 33%, 0.2)', function () {
		assert.deepEqual(parse("hsla(200, 20%, 33%, 0.2)"), {
			space: 'hsl',
			values: [200, 20, 33],
			alpha: 0.2
		});
	});
	it('hwb(200, 20%, 33%, 0.2)', function () {
		assert.deepEqual(parse("hwb(200, 20%, 33%, 0.2)"), {
			space: 'hwb',
			values: [200, 20, 33],
			alpha: 0.2
		});
	});
	it('rgba(200, 20, 233, 0.2)', function () {
		assert.deepEqual(parse("rgba(200, 20, 233, 0.2)"), {
			space: 'rgb',
			values: [200, 20, 233],
			alpha: 0.2
		});
	});
});

describe('edge cases', function () {
	it('rgba(300, 600, 100, 3)', function () {
		assert.deepEqual(parse("rgba(300, 600, 100, 3)"), {
			space: 'rgb',
			values: [300, 600, 100],
			alpha: 3
		});
	});
	it('rgba(8000%, 100%, 333%, 88)', function () {
		assert.deepEqual(parse("rgba(8000%, 100%, 333%, 88)"), {
			space: 'rgb',
			values: [20400, 255, 849.15],
			alpha: 88
		});
	});
	it('hsla(400, 10%, 200%, 10)', function () {
		assert.deepEqual(parse("hsla(400, 10%, 200%, 10)"), {
			space: 'hsl',
			values: [400, 10, 200],
			alpha: 10
		});
	});
	it('hwb(400, 10%, 200%, 10)', function () {
		assert.deepEqual(parse("hwb(400, 10%, 200%, 10)"), {
			space: 'hwb',
			values: [400, 10, 200],
			alpha: 10
		});
	});
	it('yellowblue', function () {
		assert.deepEqual(parse("yellowblue"), {
			space: 'rgb',
			values: [0,0,0],
			alpha: 1
		});
	});
});


describe('special cases', function () {

});