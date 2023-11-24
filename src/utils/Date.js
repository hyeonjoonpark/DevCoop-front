function PrettyDateTime(date) {
  const options = {
    timeZone: 'Asia/Seoul',
    hour12: false,
  };

  let formattedDate;
  if (date[date.length - 1] === 'Z') {
    formattedDate = new Date(date);
  } else {
    formattedDate = new Date(date + 'Z');
  }

  return (
    formattedDate.toLocaleDateString('ko-KR', options) +
    ' ' +
    formattedDate.toLocaleTimeString('en-US', options)
  );
}

const convertToKST = (dateString) => {
  const date = new Date(dateString);
  const utcDate = date.getTime() + date.getTimezoneOffset() * 60000;
  const kstOffset = 9 * 60 * 60 * 1000; // KST is UTC+9
  return new Date(utcDate + kstOffset);
};

export { PrettyDateTime, convertToKST };
