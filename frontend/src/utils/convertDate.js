export const convertDate = (date) => {
  return new Date(date).toISOString().substring(0, 10);
};

export const convertDateYear = (date) => {
  return new Date(date).toISOString().substring(0, 4);
};
