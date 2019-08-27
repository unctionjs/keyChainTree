import get from "@unction/get";
import reduceValues from "@unction/reducevalues";
import isType from "@unction/istype";
import mapValues from "@unction/mapvalues";
import prepend from "@unction/prepend";
import append from "@unction/append";
import getMany from "@unction/getmany";
import mergeRight from "@unction/mergeright";
export default function keyChainTree (tree) {
  return reduceValues((accumulated) => (key) => {
    const value = get(key)(tree);

    if (isType("Object")(value) || isType("Map")(value)) {
      return mergeRight(accumulated)(mapValues(prepend(key))(keyChainTree(value)));
    }

    return append([key])(accumulated);
  })([])(getMany(tree));
}
