import coursesNormalizer from "./courses";


describe("coursesNormalizer", () => {

  it("returns an object", () => {
    const result = coursesNormalizer([]);
    expect(typeof result).toEqual("object");
  });
});
