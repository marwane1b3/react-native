export const convertDateToEnglish = () => {
  const myDate = new Date();

  const formattedDate = new Date(
    myDate.toISOString().split('T')[0],
  ).toDateString();
  const numberedDay = myDate.toISOString().split('T')[0].split('-')[1];
  return (
    formattedDate.split(' ')[0] +
    ' ' +
    numberedDay.toString() +
    ' ' +
    formattedDate.split(' ')[1]
  );
};
