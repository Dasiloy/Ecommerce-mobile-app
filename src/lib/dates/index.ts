import format from 'date-fns/format';

type TDate = string | number | Date;

//==> this function creates a date object
export function toDate(dateString?: TDate) {
  if (!dateString) {
    return new Date();
  }
  return new Date(dateString);
}

//====> check valid date
export const isValidDate = (date?: TDate) => {
  if (!date || String(toDate(date)) === 'Invalid Date') {
    return false;
  }

  return true;
};

//==> this function returns date in month,day,year
export function formatDayMonthYear(date?: TDate) {
  if (isValidDate(date!)) {
    return format(toDate(date), 'dd/MM/yyyy');
  }
  return null;
}

//==> this function returns full date format
export function formatFull(date?: TDate, fullMonth = true) {
  if (isValidDate(date!)) {
    return format(toDate(date), `${fullMonth ? 'MMMM' : 'MMM'}  dd, yyyy`);
  }
  return null;
}

//==> returns date in summary format
export function formatSummary(date?: TDate) {
  if (isValidDate(date!)) {
    return format(toDate(date), 'MMM do');
  }
  return null;
}

//==> returns hour:min:meridian
export function formatHourMinuteMeridian(date?: TDate) {
  if (isValidDate(date!)) {
    return format(toDate(date), 'h:mm a');
  }
  return null;
}

//==>  format fulldate with time meridian
export function formatFullDayTimeMeridian(date?: TDate) {
  if (isValidDate(date!)) {
    return format(toDate(date), 'MMM dd, yyyy hh:mm a');
  }
  return null;
}
