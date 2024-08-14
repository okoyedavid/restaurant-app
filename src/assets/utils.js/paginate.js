import _ from "lodash";

export function paginate(items, pageNumber, pageSize = 20) {
  const startIndex = (pageNumber - 1) * 1;
  return _(items).slice(startIndex).take(pageSize).value();
}
