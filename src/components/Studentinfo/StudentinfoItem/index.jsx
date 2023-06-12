import React, { useEffect, useState } from "react";

export const StudentinfoItem = () => {
  const [studentinfo, setStudentinfo] = useState([]);
  // 함수의 재생성 막기 => 불필요한 메모리 낭비 감소
  useEffect(() => {
    fetchStudentinfo();
  }, []);

  const fetchStudentinfo = async () => {
    try {
      const response = await fetchStudentinfo();
      setStudentinfo(response);
    } catch (error) {
      console.log("fail fetch", error);
    }
  };

  return (
    <>
      <div>StudentinfoItem</div>
      {studentinfo}
    </>
  );
};
