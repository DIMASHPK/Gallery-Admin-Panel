import moment, { Moment } from 'moment/moment';
import {
  getDate,
  isDateBetween,
  isSameDay,
  sortDatesByAscending,
} from '~/utils/datesHelpers';
import { RANGE_DATE_FORMAT } from '~/components/common/RangePicker/constants';

const getRangeDate = (date: Date | string | Moment) =>
  getDate(date, RANGE_DATE_FORMAT, RANGE_DATE_FORMAT);

export const getValue = (value: string | null | Date | Moment) => {
  if (moment.isMoment(value) || value instanceof Date) {
    return [moment(value)];
  }

  if (!value?.length) return [];

  const dates = value.split('-');

  const handleMap = (date: string) => moment(date);

  return dates.map(handleMap);
};

export const transformValue = (dates: Moment[]) => {
  if (dates.length === 1) {
    return getRangeDate(dates[0]);
  }

  const sortedDates = sortDatesByAscending(dates);

  return dates.length === 2
    ? `${getRangeDate(sortedDates[0])} - ${getRangeDate(
        sortedDates[sortedDates.length - 1]
      )}`
    : '';
};

export const getSelectedDate = (...args: [Moment, Moment[]]) => {
  const [compareDate, dates] = args;

  const isDateBetweenRes =
    dates.length === 2 ? isDateBetween(compareDate, ...dates) : false;

  const isDateSelected = !!dates.find(d => isSameDay(d, compareDate));

  return isDateBetweenRes || isDateSelected;
};

export const getValueForPicker = (dates: Moment[]) => {
  if (dates?.length === 1) {
    const [currentDate] = dates;

    return moment(currentDate, RANGE_DATE_FORMAT);
  }

  if (dates?.length === 2) {
    const [, currentDate] = dates;

    return moment(currentDate, RANGE_DATE_FORMAT);
  }

  return null;
};
