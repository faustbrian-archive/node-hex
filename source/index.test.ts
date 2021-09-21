import "jest-extended";

import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("a")).toStrictEqual("61");
});

test("#decode", () => {
  expect(decode("61").toString("utf8")).toStrictEqual("a");
});
