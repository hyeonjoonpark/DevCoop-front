import React from "react";

export const Userlog = ({ student, log }) => {
  return (
    <div>
      {student[0].student_number}
      <br />
      {student[0].point}
      <br />
      {log[0].date}
      {log[0].pay === true ? (
        <div>-{log[0].money}</div>
      ) : (
        <div>+{log[0].money}</div>
      )}
      {log[0].pay === true ? <div>결제</div> : <div>충전</div>}
    </div>
  );
};
