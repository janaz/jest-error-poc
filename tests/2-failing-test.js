const testMe = (f) => process.nextTick(f);

describe("failing test", () => {
  it("doesn't work", (done) => {
    testMe(() => {
      try {
        throw new Error();
      }catch(e) {
        expect(e).toEqual(null);
      }
      done();
    });
  });
});
