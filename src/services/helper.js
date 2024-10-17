import _ from "lodash";

export function paginate(items, pageNumber, pageSize = 20) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export function sortItemsById(items) {
  return _.sortBy(items, "id");
}
