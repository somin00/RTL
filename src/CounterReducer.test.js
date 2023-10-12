import { counterReducer, ACTION_TYPE } from "./components/Counter";

test("counterReducer should return 2 when state is 1 and actions is increase", () => {
  const result = counterReducer(1, { type: ACTION_TYPE.increase });
  expect(result).toBe(2);
});

test("counterReducer should return 0 when state is 1 and actions is decrease", () => {
  const result = counterReducer(1, { type: ACTION_TYPE.decrease });
  expect(result).toBe(0);
});

test("counterReducer should return 1 when state is 1and action is undefined", () => {
  const result = counterReducer(1);
  expect(result).toBe(1);
});
