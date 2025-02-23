import { getMonth, getYear } from 'date-fns';

import type { MonthYear } from '~/components/shared/MonthYearPicker';

export function timeSinceNow(date: Date | number | string) {
  const seconds = Math.floor(
    new Date().getTime() / 1000 - new Date(date).getTime() / 1000,
  );
  let interval = seconds / 31536000;

  if (interval > 1) {
    const time: number = Math.floor(interval);
    return time === 1 ? `${time} year` : `${time} years`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    const time: number = Math.floor(interval);
    return time === 1 ? `${time} month` : `${time} months`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    const time: number = Math.floor(interval);
    return time === 1 ? `${time} day` : `${time} days`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    const time: number = Math.floor(interval);
    return time === 1 ? `${time} hour` : `${time} hours`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    const time: number = Math.floor(interval);
    return time === 1 ? `${time} minute` : `${time} minutes`;
  }
  const time: number = Math.floor(interval);
  return time === 1 ? `${time} second` : `${time} seconds`;
}

export function formatDate(value: Date | number | string) {
  const date = new Date(value);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${month} ${year}`;
}

export function getCurrentMonth() {
  // `getMonth` returns a zero-based month index
  return getMonth(Date.now()) + 1;
}

export function getCurrentYear() {
  return getYear(Date.now());
}

export function convertToMonthYear(date: Date) {
  return { month: date.getMonth() + 1, year: date.getFullYear() } as MonthYear;
}
