const Benchmark = require('benchmark');
const expect = require('expect.js');
const { maxes, nums, result } = require('./data');
const suite = new Benchmark.Suite;

// Tests
const tests = {
  'Map and Reduce by Carlos': () => require('./map-and-reduce')(maxes, nums),
  'Binary Search by Jorge': () => require('./binary-search')(maxes, nums)
};


describe('Counting instances of maxes in nums', function () {

  Object.keys(tests).forEach(test => {
    suite.add(test, tests[test]);

    it(`${test} should return correct output`, function () {
      expect(tests[test]()).to.eql(result);
    });
  });

  after(function() {
    suite.on('cycle', function(event) {
      console.log('  ' + String(event.target));
    }).on('complete', function() {
      console.log('\n \x1b[32m', 'And the winner is ... ★★★ ' + this.filter('fastest').map('name') + ' ★★★\n');
    }).run({ 'async': true });
  });

});