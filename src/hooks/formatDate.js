const doubleNumDate = (date) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

export const formatDate = (date) => {
  let userDate = new Date(date);
  let day = doubleNumDate(userDate.getDate());
  let month = doubleNumDate(userDate.getMonth() + 1);
  let year = doubleNumDate(userDate.getFullYear());

  return `${day}.${month}.${year}`;
};

export const getTimeFromDate = (date) => {
  let userDate = new Date(date);
  let hours = doubleNumDate(userDate.getHours())
  let minutes = doubleNumDate(userDate.getMinutes())

  return `${hours}:${minutes}`;
}