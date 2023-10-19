function PrettyDateTime(date) {
    const options = {
      timeZone: "Asia/Seoul",
      hour12: false
    };

    let formattedDate;  
    if (date[date.length - 1] === "Z") {
        formattedDate = new Date(date);
    } else {
        formattedDate = new Date(date + "Z");
    }

    return formattedDate.toLocaleDateString("ko-KR", options) + " " +
           formattedDate.toLocaleTimeString("en-US", options);
}

export default PrettyDateTime;
