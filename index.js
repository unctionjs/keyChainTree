import get from "@unction/get"
import reduceValues from "@unction/reducevalues"
import isType from "@unction/istype"
import mapValues from "@unction/mapvalues"
import prepend from "@unction/prepend"
import append from "@unction/append"
import getMany from "@unction/getmany"
import mergeRight from "@unction/mergeright"

import type {RecordTreeType} from "types"
import type {KeyChainType} from "types"
import type {UnaryFunctionType} from "types"
import type {ArrayType} from "types"

export default function keyChainTree (tree: RecordTreeType): ArrayType<KeyChainType> {
  return reduceValues(
    (accumulated: ArrayType<KeyChainType>): UnaryFunctionType<*, *> =>
      (key: mixed): ArrayType<KeyChainType> => {
        const value: mixed = get(key)(tree)

        if (isType("Object")(value) || isType("Map")(value)) {
          return mergeRight(accumulated)(mapValues(prepend(key))(keyChainTree(value)))
        }

        return append([key])(accumulated)
      }
  )(
    []
  )(
    getMany(tree)
  )
}
