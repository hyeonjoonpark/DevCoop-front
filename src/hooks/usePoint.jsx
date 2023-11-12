import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/Axios";
import { useAuth } from "../context/authContext";

export const getPoint = async () => {
  try {
    const response = await axiosInstance.post("/userinfo");
    console.log(response.data.student_name)
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
  const [point, setPoint] = useState(0);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    fetchPoint();
  }, [isLoggedIn]); // isLoggedIn과 email의 변경에 따라 fetchPoint를 다시 호출합니다.

  const fetchPoint = async () => {
    if (!isLoggedIn) {
      return;
    }
    try {
      const response = await getPoint();
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
