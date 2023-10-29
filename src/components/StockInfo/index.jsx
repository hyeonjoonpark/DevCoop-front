import React from "react";
import * as _ from "./style";
import * as P from "../../common/PageWrapStyle";
import AdminHeader from "../AdminHeader ";
import { useNavigate } from "react-router-dom";
import { StockInfoItem } from "./StockInfoItem";
import { ReactComponent as FilterIcon } from "../../assets/FilterIcon.svg";

const StockInfo = () => {
    const movePage = useNavigate();

    function main() {
        movePage("/admin");
    }

    function barcode() {
        movePage("/admin/stockbarcode");
    }

    return(
        <>
            <P.PageWrap>
                <P.PageContainer>
                    <AdminHeader />
                    <_.InfoContainer>
                    <_.InfoHeader>
                        <_.Infotitle>재고확인</_.Infotitle>
                        <_.ButtonContainer>
                            <_.Infobutton mRight="10px">엑셀출력</_.Infobutton>
                            <_.Infobutton onClick={barcode} mRight="10px">재고등록</_.Infobutton>
                            <_.Infobutton onClick={main}>메인으로</_.Infobutton>
                        </_.ButtonContainer>
                    </_.InfoHeader>

                    {/*이제 추가기능으로 날짜범위를 지정해야함, 
                    자동적으로 월초부터 현재 날짜까지 범위가 지정되게 해주고, 
                    필요시 원하는 범위까지 조회해서 알 수 있도록 할것! */}

                    <_.Infolist>
                        <_.Info>
                            <_.Infochoose>
                                <_.Infotext>상품번호</_.Infotext>
                            </_.Infochoose>
                            <_.Infochooses>
                                <_.Infotext>상품이름</_.Infotext>
                            </_.Infochooses>
                            <_.Infochoose>
                                <_.Infotext>남은수량</_.Infotext>
                            </_.Infochoose>
                            <_.Infochooses>
                                <_.Infotext>
                                    최종 변동 일시
                                </_.Infotext>
                                <_.FilterImg />
                            </_.Infochooses>
                        </_.Info>
                        <_.StockInfoWrap>
                            <StockInfoItem />
                        </_.StockInfoWrap>
                    </_.Infolist>
                </_.InfoContainer>
                </P.PageContainer>
            </P.PageWrap>
        </>
    );
};

export default StockInfo;