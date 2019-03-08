var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('Can add numbers', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    let actual = calculator.runningTotal
    assert.equal(5, actual)
  })

  it('Can subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    let actual = calculator.runningTotal
    assert.equal(3, actual)
  })

  it('Can multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    let actual = calculator.runningTotal
    assert.equal(15, actual)
  })

  it('Can divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    let actual = calculator.runningTotal
    assert.equal(3, actual)
  })

  it('Can concatenate multiple number clicks', function(){
    calculator.numberClick(3)
    calculator.numberClick(5)
    calculator.numberClick(8)
    let actual = calculator.runningTotal
    assert.equal(358, actual)
  })

  it('Can chain multiple operations', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    let actual = calculator.runningTotal
    assert.equal(27, actual)
  })

  it('Can clear click without affecting total calculation', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    let actual = calculator.runningTotal
    assert.equal(8, actual)
  })

});
