const formattedDate = (dateString) => {
  const [day, month, year] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(date);
};

const formatToReadbleDate = (date) => {
  const dateObj = new Date(date);

  return dateObj
    .toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
    .replace(",", "");
};

function formatStringDate(dateString) {
  if (dateString === "" || dateString === undefined || dateString === null) {
    return "";
  }
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const convertToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesRemaining = minutes % 60;
  return `${hours} hr ${minutesRemaining} min`;
};

function extractTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDateToDayMonthYear(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

const utils = {
  formattedDate,
  formatStringDate,
  convertToHours,
  extractTime,
  formatDateToDayMonthYear,
  formatToReadbleDate,
};

export default utils;
