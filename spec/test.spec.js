describe("Calculator", function() {
  beforeEach(function() {
  });
  afterEach(function() {
  });
  it('should add two numbers', function() { 
    expect(calc(10, 10)).to.equal(20);
  });
});

describe("Print name", function() {
  beforeEach(function() {
  });
  afterEach(function() {
  });
  it('should return string with name', function() { 
    expect(getName('Rasmus')).to.be.a('string');
  });
});