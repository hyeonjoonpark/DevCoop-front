import { axiosInstance } from './Axios';

export const handleCharge = async ({ charger, code_number, point }) => {
  try {
    const response = await axiosInstance.post(`/admin/charge`, {
      charger: charger,
      plusPoint: point,
      code_number: code_number,
    });
    return response.data; // 충전 데이터를 반환합니다.
  } catch (error) {
    console.error(error);
    throw error; // 에러를 던져 상위 컴포넌트에서 처리할 수 있게 합니다.
  }
};

export const handleBulkCharge = async ({ list_code_number, plusPoint }) => {
  try {
    const validAmount = parseInt(plusPoint, 10);

    if (isNaN(validAmount) || validAmount <= 0) {
      alert('올바른 금액을 입력해주세요 (자연수).');
      return null; // 또는 에러를 throw 하여 처리할 수 있습니다.
    }

    console.log('Selected Students:');
    console.log(list_code_number);

    // 선택된 학생들에게 일정 금액을 똑같이 충전합니다.
    const response = await axiosInstance.post('/admin/allcharge', {
      list_code_number: list_code_number,
      plusPoint: validAmount,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
