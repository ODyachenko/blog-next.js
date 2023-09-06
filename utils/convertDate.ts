export const convertDate = (value: string) => {
  const date = new Date(value).toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return date;
};
