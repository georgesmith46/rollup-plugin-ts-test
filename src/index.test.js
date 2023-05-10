import { build } from "./";

jest.mock("@babel/runtime", () => {}, { virtual: true });

test("build", async () => {
  await build();
});
