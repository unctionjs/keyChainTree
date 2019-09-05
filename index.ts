import get from "@unction/get";
import reduceValues from "@unction/reducevalues";
import isType from "@unction/istype";
import mapValues from "@unction/mapvalues";
import prepend from "@unction/prepend";
import append from "@unction/append";
import getMany from "@unction/getmany";
import mergeRight from "@unction/mergeright";
import {RecordType} from "./types";
import {KeyChainType} from "./types";

export default function keyChainTree<A, B> (tree: RecordType<A, B>): Array<KeyChainType<A>> {
  return reduceValues(
    (accumulated: RecordType<A, B>) => (key: A) => {
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
