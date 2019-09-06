/* eslint-disable no-magic-numbers */
import keyChainTree from "./index";

test("keyChainTree", () => {
  expect(
    keyChainTree({
      id: "1",
      attributes: {
        name: "Kurtis Rainbolt-Greene",
        age: 24,
      },
      meta: new Map([
        ["version", "1.0.0"],
      ]),
      included: [
        {
          id: "2",
          attributes: {
            name: "Angela Englund",
          },
        },
      ],
    })
  ).toEqual(
    [
      ["id"],
      ["attributes", "name"],
      ["attributes", "age"],
      ["meta", "version"],
      ["included"],
    ]
  );
});
