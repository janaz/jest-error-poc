const testMe = (f) => setTimeout(f,1);

describe("passing test", () => {
  testMe(() => {
    try {
      throw new Error();
    }catch(e) {
      expect(true).toEqual(true);
    }
    done();
  });
});
