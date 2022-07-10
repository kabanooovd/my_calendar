const addZero = (value: string) => {
  return +value < 10 ? `0${value}` : value;
};

export const dateHalper = (date: Date): string => {
  const stringDate = date.toLocaleDateString();
  const array = stringDate.split("/");

  return `${addZero(array[1])}/${addZero(array[0])}/${array[2]}`;
};
