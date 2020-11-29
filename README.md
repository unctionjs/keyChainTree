# @unction/keyChainTree

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Record<string | number | symbol, B> | Map<A, B> => Array<KeyChainType<A>>

Takes a tree and returns all keychains for that tree. Note, it only follows record types (types with keys).

``` javascript
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
```

which would return

``` javascript
[
  ["id"],
  ["attributes", "name"],
  ["attributes", "age"],
  ["meta", "version"],
  ["included"],
]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/keyChainTree.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/keyChainTree.svg?maxAge=2592000&style=flat-square
