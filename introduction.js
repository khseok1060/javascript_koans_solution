/* globals expect */
function add(a, b){
  return a + b;
}

describe("about add function", function() {
  // Test 1
  it("should add two numbers", function () {
    expect(add(1, 2)).toEqual(3);
  });

});
