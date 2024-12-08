import dayjs from "dayjs";

export function formatDate(date, fmt='MM月DD日') {
  return dayjs(date).format(fmt);
}