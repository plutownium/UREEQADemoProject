const chai = require("chai");
const expect = chai.expect;

const sieveOfEratosthenes = require("../server").sieveOfEratosthenes;
const getMedianNumbers = require("../server").getMedianNumbers;

describe("testing the sieve", () => {
  it("should return [2,3,5,7,11,13,17] when given 18", () => {
    expect(sieveOfEratosthenes(18)).deep.to.equal([2, 3, 5, 7, 11, 13, 17]);
  });

  it("should return [2,3,5,7] when given 10", () => {
    expect(sieveOfEratosthenes(10)).deep.to.equal([2, 3, 5, 7]);
  });
});

describe("testing median number return func", () => {
  it("should return the middle number regardless of what odd length array it is fed", () => {
    expect(getMedianNumbers([1, 2, 5, 10, 25])).to.equal(5);
    expect(getMedianNumbers([100, 200, 300, 400, 500])).to.equal(300);
    expect(getMedianNumbers([1, 5, 9, 15, 1000, 5000, 9999])).to.equal(15);
  });

  it("should return the middle two numbers regardless of what it is fed", () => {
    expect(getMedianNumbers([1, 2, 3, 4])).deep.to.equal([2, 3]);
    expect(getMedianNumbers([5, 49, 50, 55, 300, 505])).deep.to.equal([50, 55]);
    expect(getMedianNumbers([1, 2, 100, 101, 200, 203])).deep.to.equal([
      100, 101,
    ]);
  });
});
