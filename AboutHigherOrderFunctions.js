/* globals _, expect, FILL_ME_IN,  */

/*
  이 section은 underscore를 많이 사용하여 functional programming을 합니다.
*/


describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0; });

    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1; });

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
      function(memo, x) {
        //note: memo는 바로전에 돌아간 iterator의 result이며 x는 지금 보는 number입니다.
        return memo + x;
      },
      /* initial */ 0
    );

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1,2,3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0; };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0; };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {
    expect(_.range(3)).toEqual([0, 1, 2]);
    expect(_.range(1, 4)).toEqual([1, 2, 3]);
    expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
    expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
  });

  it("should use chain(), ..., .value() to use multiple higher order functions", function() {
    var result = _([ [0, 1], 2 ]).chain()
                     .flatten()
                     .map(function(x) { return x + 1; } )
                     .reduce(function (sum, x) { return sum + x; })
                     .value();

    expect(result).toEqual(6);
  });

});
