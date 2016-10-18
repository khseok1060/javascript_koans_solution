/* globals expect, FILL_ME_IN */

describe("About Expects", function() {

  // 가정한것이 사실인지 현실과 test하여 진실(true)을 찾아야 합니다.
  it("should expect true", function() {
    expect(true).toBeTruthy(); // 이것이 true여야 합니다.
  });

  // 진실을 이해하기 위해서는 저희가 사실이라고 믿고 있는것과 현실을 비교해야 합니다.
  it("should expect equality", function () {
	  var expectedValue = 2;
	  var actualValue = 1 + 1;

	  expect(actualValue === expectedValue).toBeTruthy();
  });

  // 같다는것을 보여주기 위한 방법으로 아래의 방법을 쓰는것이 위에서 쓰는 방법보다 더 좋은 방법입니다.
  it("should assert equality a better way", function () {
	  var expectedValue = 2;
	  var actualValue = 1 + 1;

  // toEqual()과 보통 저희가 알고 있는 개발 밖에서의 같다를 표현합니다.
	  expect(actualValue).toEqual(expectedValue);
  });

  // "type"까지 확실하게 체크해야 할때가 있습니다.
  it("should assert equality with ===", function () {
	  var expectedValue = "2";
	  var actualValue = (1 + 1).toString();

  // toBe() 는 ===을 사용하여 value가 서로 같은지 비교합니다.
	  expect(actualValue).toBe(expectedValue);
  });

  // 여러분이 value를 넣어야 할때도 있습니다.
  it("should have filled in values", function () {
	  expect(1 + 1).toEqual(2);
  });
});
