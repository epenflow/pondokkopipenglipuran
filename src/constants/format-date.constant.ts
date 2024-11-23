import { format } from "date-fns";
export const TIME_FH_MM_SS_12H = "hh:mm:s aa"; /// 01:00:00 AM
export const TIME_SH_MM_SS_12H = "h:mm:ss aa"; /// 1:00:00 AM
export const TIME_FS = "ss";
export const TIME_SS = "s";

const TIME_UNITS = 60;
export const ONE_SECOND_IN_MS = 1_000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * TIME_UNITS;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * TIME_UNITS;

const date = new Date();
console.log(format(date, TIME_FH_MM_SS_12H));
console.log(format(date, TIME_SH_MM_SS_12H));
