const chai = require('chai');
const assert = require('chai').assert;

const { name, age, isCool, object, add, array } = require('../index');

//describe what the test is doing
describe('Index file', function(){
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
