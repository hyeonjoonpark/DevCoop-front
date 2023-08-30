import { useState, useEffect } from "react";
import { getPoint } from "../axios";

export const usePoint = () => {
  const [point, setPoint] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    fetchPoint();
  }, []);

  const fetchPoint = async () => {
    try {
      const response = await getPoint();
      setPoint(response.point);
      setName(response.name);
      setCode(response.code);
      setNumber(response.number);
    } catch (error) {
      throw error;
    }
  };

  return {
    point,
    name,
    code,
    number,
  };
};
