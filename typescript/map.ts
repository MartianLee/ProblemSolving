export const countText = (items: string[]) => {
  const countMap = new Map<string, number>();
  items.forEach((item) => {
    const value = countMap.get(item);
    if (value) {
      countMap.set(item, value + 1);
    } else {
      countMap.set(item, 1);
    }
  });
  return countMap;
};

export const countText2 = (items: string[]) => {
  const countMap = new Map<string, number>();
  items.forEach((item) => {
    const count = countMap.get(item) || 0;
    countMap.set(item, count + 1);
  });
  return countMap;
};
