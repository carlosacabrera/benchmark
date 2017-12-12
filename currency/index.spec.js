const Benchmark = require('benchmark');
const expect = require('expect.js');
const suite = new Benchmark.Suite;

const num = 1197092.8;
const result = '$1,197,092.80';

// Tests
const tests = {
  'Regex': () => require('./regex')(num),
  'Native JS': () => require('./native')(num),
  'Add Decimals Loop': () => require('./loop')(num),
  'Add Decimals Loop #2': () => require('./loop2')(num),
  'Add Decimals Loop #3': () => require('./loop3')(num)
};


describe('Counting instances of maxes in nums', function () {

  Object.keys(tests).forEach((test) => {
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