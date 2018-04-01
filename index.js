import fetch from "@unction/key"
import reduceValues from "@unction/reducevalues"
import isType from "@unction/istype"
import mapValues from "@unction/mapvalues"
import prepend from "@unction/prepend"
import keys from "@unction/keys"

import type {RecordTreeType} from "types"
import type {KeyChainType} from "types"
import type {UnaryFunctionType} from "types"

export default function keyChainTree (tree: RecordTreeType): $ReadOnlyArray<KeyChainType> {
  return reduceValues(
    (accumulated: $ReadOnlyArray<KeyChainType>): UnaryFunctionType<*, *> =>
      (key: mixed): $ReadOnlyArray<KeyChainType> => {
        const value: mixed = fetch(key)(tree)


        if (isType("Object")(value) || isType("Map")(value)) {
          return [...accumulated, ...mapValues(prepend(key))(keyChainTree(value))]
        }

        return [...accumulated, [key]]
      }
  )(
    []
  )(
    keys(tree)
  )
}
