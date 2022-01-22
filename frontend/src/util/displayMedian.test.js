import displayMedian from "./displayMedian";

describe("handles turning inputs into text", () => {
  test("null tells you to choose an input", () => {
    expect(displayMedian(null)).toEqual("Choose your input!");
  });
  test("testing join so I'm totally convinced arrays of two work as intended", () => {
    expect(displayMedian([5, 15])).toEqual("5, 15");
  });
  test("testing join again, with an actual example from the sieve, 55", () => {
    expect(displayMedian([19, 23])).toEqual("19, 23");
  });

  // max
  test("a singular number should return a string version of that number", () => {
    expect(displayMedian(100)).toEqual("100");
    expect(displayMedian(19)).toEqual("19");
    expect(displayMedian(111111)).toEqual("111111");
  });
});
