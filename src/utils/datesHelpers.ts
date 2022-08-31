import moment, { Moment } from 'moment';

export const getDate = (
  date: string | Moment | Date,
  formatType = 'DD MMMM YYYY',
  customFormat: string | undefined = undefined
) => moment(date, customFormat).format(formatType);

export const sortDatesByAscending = <T extends any[]>(dates: T): T =>
  dates.sort((a, b) => moment(a).valueOf() - moment(b).valueOf());

export const isSameDate = (
  firstDate: string | Moment,
  nextDate: string | Moment,
  granularity: 'year' | 'day' | 'month'
) => moment(firstDate).isSame(nextDate, granularity);

export const isSameDay = (
  firstDate: string | Moment,
  nextDate: string | Moment
) => isSameDate(firstDate, nextDate, 'day');

export const isDateBetween = (...args: (Moment | string)[]) => {
  const [compareDate, startDate, endDate] = args;

  return moment(compareDate).isBetween(startDate, endDate);
};

export const isDateAfter = (
  dateToCompare: Moment | string,
  currentDate: Moment | string
) => moment(dateToCompare).isAfter(currentDate);
