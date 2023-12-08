import { validator } from "../src/js/validator.js";


test.each([
  ["ivan", true],
  ["Ivan", true],
  ["iVan", true],
  ["iV1an", true],
  ["IvaN", true],
  ["ivan&", false],
  ["iva111n", true],
  ["ivan1111", false],
  ["ivan1", false],
  ["1ivan", false],
  ["ivan-", false],
  ["ivan_", false],
  ["-ivan", false],
  ["_ivan", false],
])(
  "Test match nickname %s", (nickname, expected) => {
    let bollValue = Boolean(validator.validateUsername(nickname));
    expect(bollValue).toBe(expected);
  }
);