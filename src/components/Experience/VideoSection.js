import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 100px 130px 100px 130px;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const GrayBox = styled.div`
  background-color: ${(props) => props.theme.boxCountGray};
  margin: 25px 0px;
`;

const Thumbnail = styled.img`
  width: 688px;
  height: 387px;
`;

const VideoTitle = styled.div``;

const ChannelName = styled.div`
  font-weight: bold;
  font-size: large;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
  width: 500px;
  margin: 7px 0px;
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  padding: 50px 40px;
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const ProgressContainer = styled.div`
  margin: 20px 0px 10px 0px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 17px;
  width: 500px;
  border-radius: 30px;
  padding: 0px;
`;

const Progress = styled.div`
  height: 17px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  width: 400px;
`;

const GrayText = styled.div`
  color: ${(props) => props.theme.boxGray};
`;

const PinkText = styled.div`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
`;

const FilterButton = styled.button`
  background-color: ${(props) => {
    switch (props.clicked) {
      case true:
        return props.theme.boxGray;
      case false:
        return props.theme.boxLightGray;
    }
  }};
  color: ${(props) => {
    switch (props.clicked) {
      case true:
        return "white";
      case false:
        return props.theme.boxGray;
    }
  }};
  border: 1px solid ${(props) => props.theme.boxGray};
  border-radius: 6px;
  padding: 2px 20px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
`;

const Property = styled.div`
  background-color: ${(props) => {
    switch (props.type) {
      case "youtube":
        return props.theme.mainPink;
      case "tiktok":
        return "#9d2aa6";
      default:
        return props.theme.littleBoxGray;
    }
  }};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 16px;
    color: white;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  grid-template-rows: 30px;
  margin-bottom: 12px;
  gap: 10px;
`;

export default function VideoSection() {
  const [video_info, setData] = useState([
    {
      video_id: "1",
      types: [
        { id: "youtube", name: "?????????" },
        { id: "onsale", name: "?????????" },
      ],
      title: "?????? PC ??? ?????? ??????!! USB ?????? ?????? ????????? ????????? ???????????????",
      channelName: "?????? ?????????",
      tokenCount: 100,
      price: 12000,
      deadline: "2021-10-31",
    },
    {
      video_id: "2",
      types: [
        { id: "tiktok", name: "??????" },
        { id: "onsale", name: "?????????" },
      ],
      title: "[??????/??????]CU?????????????????? ??????????????? ??????(ft.?????????????????????)",
      channelName: "?????? ?????????",
      tokenCount: 120,
      price: 12000,
      deadline: "2021-10-31",
    },
    {
      video_id: "3",
      types: [
        { id: "tiktok", name: "??????" },
        { id: "closed", name: "????????????" },
      ],
      title: "[??????/??????]CU?????????????????? ??????????????? ??????(ft.?????????????????????)",
      channelName: "?????? ?????????",
      tokenCount: 120,
      price: 12000,
      deadline: "2021-10-31",
    },
  ]);

  const [video_component, setComponent] = useState();
  const [all, setAll] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [plan, setPlan] = useState(false);
  const [closed, setClosed] = useState(false);
  const [state, setState] = useState("??????");

  const ButtonClicked = (e) => {
    switch (e.target.name) {
      case "??????":
        setAll(true);
        setPlan(false);
        setOnSale(false);
        setClosed(false);
        setState("??????");
        break;
      case "????????????":
        setAll(false);
        setPlan(true);
        setOnSale(false);
        setClosed(false);
        setState("????????????");
        break;
      case "????????????":
        setAll(false);
        setPlan(false);
        setOnSale(true);
        setClosed(false);
        setState("?????????");
        break;
      case "??????":
        setAll(false);
        setPlan(false);
        setOnSale(false);
        setClosed(true);
        setState("????????????");
        break;
    }
  };

  useEffect(() => {
    setComponent(
      video_info
        .filter((data) => {
          if (state === "??????") return true;
          if (data.types[1].name === state) return true;
          return false;
        })
        .map((data, index) => {
          let currentDate = new Date();

          let deadline = new Date(data.deadline);
          let remainingTime = deadline.getTime() - currentDate.getTime();
          let remainingDay = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
          let remainingHour = 24 - currentDate.getHours();
          let remainingMin = 60 - currentDate.getMinutes();
          let remainingSec = 60 - currentDate.getSeconds();

          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/experience/detail/" + data.video_id}
            >
              <GrayBox>
                <Container>
                  <Thumbnail />
                  <TextContainer>
                    <PropertiesGrid>
                      {data.types.map((type, index) => (
                        <Property key={index} type={type.id}>
                          <span>{type.name}</span>
                        </Property>
                      ))}
                    </PropertiesGrid>
                    <Title>{data.title}</Title>
                    <ChannelName>{data.channelName}</ChannelName>
                    <ProgressContainer>
                      <ProgressBar>
                        <Progress />
                      </ProgressBar>
                    </ProgressContainer>
                    <TextContainer2>
                      <GrayText>??? {data.tokenCount}??????</GrayText>
                      <PinkText>84%</PinkText>
                    </TextContainer2>
                    <TextContainer2>
                      <GrayText>????????? ??????</GrayText>
                      <GrayText>{data.price}???</GrayText>
                    </TextContainer2>
                    <TextContainer2>
                      <GrayText>?????? ??????</GrayText>
                      <PinkText>
                        {/*??? ?????? ????????? 0 ???????????? ??? ???????????? ???*/}
                        {remainingDay}??? {remainingHour}:{remainingMin}:
                        {remainingSec}
                      </PinkText>
                    </TextContainer2>
                  </TextContainer>
                </Container>
              </GrayBox>
            </Link>
          );
        })
    );
  }, [Date()]);

  return (
    <Positioner>
      <Heading>????????? ??? ?????? ????????? ?????????!</Heading>
      <Container>
        <FilterButton clicked={all} name="??????" onClick={ButtonClicked}>
          ??????
        </FilterButton>
        <FilterButton clicked={plan} name="????????????" onClick={ButtonClicked}>
          ????????????
        </FilterButton>
        <FilterButton clicked={onSale} name="????????????" onClick={ButtonClicked}>
          ????????????
        </FilterButton>
        <FilterButton clicked={closed} name="??????" onClick={ButtonClicked}>
          ??????
        </FilterButton>
      </Container>

      {video_component}
    </Positioner>
  );
}
