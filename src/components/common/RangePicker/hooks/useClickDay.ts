import { Moment } from 'moment';
import React, { useState } from 'react';
import { isDateAfter, isSameDay } from '~/utils/datesHelpers';
import { getValue } from '~/components/common/RangePicker/helpers';

export default (value: string | null | Moment | Date) => {
  const [dates, setDates] = useState<Moment[]>(getValue(value));

  const handleClickDay =
    (day: Moment): ((e: React.MouseEvent<HTMLElement>) => void) =>
    e => {
      e.stopPropagation();
      const i = dates?.findIndex(d => isSameDay(d, day));

      if (i >= 0) {
        const nextDates = [...dates];
        nextDates.splice(i, 1);
        setDates(nextDates);
        return;
      }

      const dayGreaterThanLast = isDateAfter(day, dates[dates.length - 1]);

      if (!dates.length) {
        setDates([day]);
        return;
      }

      if (dayGreaterThanLast) {
        setDates([dates[0], day]);
        return;
      }

      setDates([day, dates[dates.length - 1]]);
    };

  return { dates, handleClickDay };
};
