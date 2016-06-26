import moment from 'moment';

export function dateFormat(date) {
  return moment(date).format("MMM, YYYY");
}
