describe("calculate the exponentation given the base number and the power", function () {
  describe("edge-cases", function () {
    it("for negative power the result is NaN", function () {
      assert.isNaN(calcExponentiation(2, -1));
    });

    it("for non-integer power the result is NaN", function () {
      assert.isNaN(calcExponentiation(2, 1.5));
    });
  });

  it("2 raised to power 3 is 8", function () {
    assert.equal(calcExponentiation(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(calcExponentiation(3, 4), 81);
  });

  it("5 raised to power 3 is 125", function () {
    assert.equal(calcExponentiation(5, 3), 125);
  });
});
