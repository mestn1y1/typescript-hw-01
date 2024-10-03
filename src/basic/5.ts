enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek): boolean => {
  switch (day) {
    case DayOfWeek.Saturday:
      return true;
    case DayOfWeek.Sunday:
      return true;
    default:
      return false;
  }
};
console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Saturday));
