import { useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import { useAuth } from "./useAuth";

export const getPoint = async (email) => {
  try {
    const response = await axiosInstance.post("/studentinfo", {email});
    return {
      number: response.data.student_number,
      name: response.data.student_name,
      code: response.data.code_number,
      point: response.data.point,
    };
  } catch (error) {
    throw error;
  }
};

export const usePoint = () => {
  const [point, setPoint] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const { isLoggedIn, email } = useAuth(); // useAuth에서 isLoggedIn와 email을 가져옵니다.

  useEffect(() => {
    fetchPoint();
  }, [isLoggedIn, email]); // isLoggedIn과 email의 변경에 따라 fetchPoint를 다시 호출합니다.

  const fetchPoint = async () => {
    if (!isLoggedIn) {
      return;
    }
    try {
      const response = await getPoint(email);
      setPoint(response.point);
      setName(response.name);
      setCode(response.code);
      setNumber(response.number);
    } catch (error) {
      console.error("Error fetching point:", error);
    }
  };

  return {
    point,
    name,
    code,
    number,
  };
};
