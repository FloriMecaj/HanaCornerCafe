export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isOpenInTirana(date = new Date()) {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Tirane",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);

  const [hour, minute] = time.split(":").map(Number);
  const totalMinutes = hour * 60 + minute;
  const open = 8 * 60;
  const close = 22 * 60;
  return totalMinutes >= open && totalMinutes < close;
}
