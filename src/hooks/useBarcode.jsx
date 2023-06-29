import { useState, useEffect } from "react";
import { sendbarcode } from "../axios";

export const useBarcode = () => {
    console.log("BArcord~")
    const [barcode,setBarcode] = useState("");

    const handleChange = (e)=> {
        console.log(e.target.value);
        setBarcode(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hello")
        try{
            const { message, point, student_number } = await sendbarcode(
                barcode
            )
            console.log(message, point, student_number)
            //window.location.replace("/payments")
        } catch (error) {
            console.log("바코드 인식에 실패했ㅅㅂ니다.", error);
        }
    };

    return (
        barcode,
        handleChange,
        handleSubmit
    )
}