import { expect } from "vitest";
import { d, dedent, printTree, renderToString } from "./render.js";
import { renderTree, Children } from "@alloy-js/core";

expect.extend({
  toRenderTo(received: Children, expectedRaw: string) {
    const { isNot } = this;
    const tree = renderTree(received);
    const actual = printTree(tree);
    const expected = dedent(expectedRaw);
    return {
      pass: actual === expected,
      message: () => {
        console.log(JSON.stringify(tree));
        return `Render is${isNot ? " not" : ""} incorrect`;
      },
      actual,
      expected,
    };
  },
});
