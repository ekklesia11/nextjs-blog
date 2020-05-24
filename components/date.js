import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      <span style={{ fontStyle: "italic" }}>posted on</span>{" "}
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
