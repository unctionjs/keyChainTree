import get from "@unction/get";
import reduceValues from "@unction/reducevalues";
import isType from "@unction/istype";
import mapValues from "@unction/mapvalues";
import prepend from "@unction/prepend";
import append from "@unction/append";
import getMany from "@unction/getmany";
import mergeRight from "@unction/mergeright";

import {KeyChainType} from "./types";

export default function keyChainTree<A, B> (tree: Record<string | number | symbol, B> | Map<A, B>): Array<KeyChainType<A>> {
  return reduceValues(
    (accumulated: Record<string | number | symbol, B> | Map<A, B>) => (key: A) => {
      const value = get(key)(tree);

      if (isType("Object")(value) || isType("Map")(value)) {
        return mergeRight(accumulated)(mapValues(prepend(key))(keyChainTree(value)));
      }

      return append([key])(accumulated);
    }
  )(
    []
  )(
    getMany(tree)
  );
}
