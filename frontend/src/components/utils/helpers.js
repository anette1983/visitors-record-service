import { formatDistanceToNow, format } from "date-fns";

export const handleDate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const handleDateFormat = (date) => {
  return format(new Date(date), "Pp");
};
