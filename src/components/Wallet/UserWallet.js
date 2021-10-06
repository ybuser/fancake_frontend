import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  border-radius: 20px;
  padding: 4.2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5vw;
`;

const WalletTitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  margin-bottom: 2vw;
  & strong {
    font-weight: 600;
  }
`;

const CurrentBalance = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11.8vw;
  margin-bottom: 2vw;
  & span {
    font-size: 1.7vw;
    font-weight: 500;
  }
  & span:last-child {
    font-weight: normal;
  }
  & strong {
    font-size: 2.3vw;
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

const HistoryButton = styled.button`
  background-color: ${(props) => props.theme.boxGray};
  width: 20vw;
  height: 5vw;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 1.7vw;
    font-weight: 700;
  }
  &:hover {
    background-color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
`;

const ChargeButton = styled.button`
  background-color: ${(props) => props.theme.mainPink};
  width: 20vw;
  height: 5vw;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 1.7vw;
    font-weight: 700;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundGray};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  width: 50vw;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  z-index: 11;
  & h3 {
    font-size: 2.1vw;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2vw;
  }
  & p {
    font-weight: normal;
    font-size: 1.7vw;
    max-width: 27vw;
    text-align: center;
    margin-bottom: 1.5vw;
  }
  & div {
    display: flex;
    justify-content: space-between;
    width: 30vw;
  }
  & small {
    font-size: 1.5vw;
    font-weight: normal;
    color: ${(props) => props.theme.boxGray};
  }
  & span {
    font-size: 1.5vw;
    font-weight: normal;
    color: black;
  }
  & button {
    background-color: ${(props) => props.theme.mainPink};
    color: white;
    border: none;
    padding: 1.3vw 5vw;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 40px;
  }
  & button:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }
`;

const UserWallet = () => {
  const { userId } = useParams();
  const [popup, setPopup] = useState(false);
  return (
    <Container>
      <WalletTitle>
        <strong>백건우</strong>님의 지갑
      </WalletTitle>
      <CurrentBalance>
        <span>현재 보유 금액</span>
        <span>
          <strong>20,000</strong>원
        </span>
      </CurrentBalance>
      <Buttons>
        <Link to={`/wallet/${userId}/history`}>
          <HistoryButton>
            <span>거래내역</span>
          </HistoryButton>
        </Link>
        <ChargeButton
          onClick={() => {
            setPopup(true);
          }}
        >
          <span>충전하기</span>
        </ChargeButton>
        {popup ? (
          <PopupBackground>
            <PopupContainer>
              <h3>지갑 충전하기</h3>
              <p>아래 계좌에 입금해주시면 3시간 이내 '내 지갑'에 들어옵니다.</p>
              <div>
                <small>은행</small>
                <span>카카오뱅크</span>
              </div>
              <div>
                <small>계좌번호</small>
                <span>3333-02-0753215</span>
              </div>
              <div>
                <small>예금주</small>
                <span>백건우</span>
              </div>
              <button
                onClick={() => {
                  setPopup(false);
                }}
              >
                확인했습니다
              </button>
            </PopupContainer>
          </PopupBackground>
        ) : (
          <></>
        )}
      </Buttons>
    </Container>
  );
};

export default UserWallet;
