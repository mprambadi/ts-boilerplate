import hello from "../src/1";

test("should return hello world", () => {
    expect(hello()).toBe("Hello World");
});