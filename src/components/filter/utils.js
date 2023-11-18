/**
 *
 * @param {*} items - List of items, where item {text: string, isDone: boolean}
 * @param {*} filterOption - {isAll: boolean, isActive: boolean, isCompleted: boolean}
 * @returns
 */
export function filterItems(items, filterOption) {
  if (filterOption.isAll) return items;
  if (filterOption.isCompleted) return items.filter((item) => item.isDone);
  if (filterOption.isActive) return items.filter((item) => !item.isDone);

  return items;
}
