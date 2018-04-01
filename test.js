/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import keyChainTree from "./index"

test(({same, end}) => {
  same(
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
    }),
    [
      ["id"],
      ["attributes", "name"],
      ["attributes", "age"],
      ["meta", "version"],
      ["included"],
    ]
  )

  end()
})
