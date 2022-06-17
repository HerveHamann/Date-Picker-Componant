export const month = [
  { name: "January" },
  { name: "February" },
  { name: "March" },
  { name: "April" },
  { name: "May" },
  { name: "June" },
  { name: "July" },
  { name: "August" },
  { name: "September" },
  { name: "October" },
  { name: "November" },
  { name: "December" },
];

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
export const year = range(1950, 2050, 1);
