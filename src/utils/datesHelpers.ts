import moment from 'moment';

export const getDate = (date: string) => moment(date).format('Do MMMM YYYY');
