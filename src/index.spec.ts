import Math from "./index";

describe("Math", () => {
  describe("add", () => {
    it("adds numbers", () => {
      const sum = new Math().add(1, 2);

      expect(sum).toEqual(3);
    });
  });
});
