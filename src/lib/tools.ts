type SearchFilterType = {
  name: string;
};

export const searchFilter = <T extends SearchFilterType>(
  query: string,
  data: T[],
): T[] => {
  return data.filter((item: T) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
};
