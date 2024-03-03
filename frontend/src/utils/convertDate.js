export const convertDate = (date) => {
  return new Date(date).toISOString().substring(0, 10);
};
