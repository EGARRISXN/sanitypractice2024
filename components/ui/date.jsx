import {formatInTimeZone} from "date-fns-tz";

const Date = ({publishedAt}) => {
  const date = formatInTimeZone(publishedAt, "Europe/Amsterdam", "MMM dd, yyyy");

  return <p className="text-sm">{date}</p>;
};

export default Date;
