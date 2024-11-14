import { add, divide, multiply, subtract } from "./utils";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("Multiply 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("Divide 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});
