const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;

const { name, age, isCool, object, add, array } = require('../index');

//describe what the test is doing
describe('Test name variable', function(){
  it('should return a string as a type', function(){
    assert.typeOf(name, 'string');
  })
  it('should return Nick as a result', function(){
    assert.equal(name, 'Nick');
  })
  it('should have a length of four', function(){
    assert.lengthOf(name, 4);
  })
})

describe('Test the age variable', function(){
  it('should return a number as a type', function(){
    assert.typeOf(age, 'number');
  })
  it('should return a value of 28', function(){
    assert.equal(age, 28);
  })
})

describe('Test the array variable', function(){
  it('should return a value of [1,2,3]', function(){
    expect(array).to.eql([1,2,3]);
  });
})
