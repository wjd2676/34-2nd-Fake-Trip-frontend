import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DatePicker, Space, Dropdown, Menu, Button, Modal } from "antd";
import "antd/dist/antd.css";
import { API } from "../../../../config";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
  faUser,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

const { RangePicker } = DatePicker;

const DetailOptional = ({ params }) => {
  const [numberOfAdult, setNumberOfAdult] = useState(2);

  const [numberOfChild, setNumberOfChild] = useState(0);

  const [visible, setVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalId, setModalId] = useState();

  const [rooms, setRooms] = useState([]);

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const navigate = useNavigate();

  const location = useLocation();

  const sumOfGuest = numberOfAdult + numberOfChild;

  useEffect(() => {
    fetch(`${API.PRODUCTS}/${params.id}/rooms${location.search}`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => setRooms(res.rooms));
  }, [location.search, params.id]);
  if (!rooms[0]) return;

  const modalHandle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const visibleHandle = () => setVisible(!visible);

  const onChange = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  const requestNewRooms = () => {
    navigate(
      `?start_date=${startDate}&end_date=${endDate}&guests=${sumOfGuest}`
    );
  };
  const plusNumberOfAdult = () => setNumberOfAdult(numberOfAdult + 1);

  const minusNumberOfAdult = () =>
    numberOfAdult && setNumberOfAdult(numberOfAdult - 1);

  const plusNumberOfChild = () => setNumberOfChild(numberOfChild + 1);

  const minusNumberOfChild = () =>
    numberOfChild && setNumberOfChild(numberOfChild - 1);

  const roomsIndex = modalId - 1;

  const goToBooking = roomsId => {
    navigate(
      `/Booking?room_id=${roomsId}start_date=${startDate}&end_date=${endDate}&guests=${sumOfGuest}`
    );
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Guest>
              인원
              <Icon
                icon={faCircleXmark}
                onClick={visibleHandle}
                style={{ marginRight: "8px" }}
              />
            </Guest>
          ),
        },
        {
          key: "2",
          label: (
            <Guest>
              <div>성인 </div>
              <GuestNumber>
                <Icon icon={faSquarePlus} onClick={plusNumberOfAdult} />
                <div>{numberOfAdult}</div>
                <Icon icon={faSquareMinus} onClick={minusNumberOfAdult} />
              </GuestNumber>
            </Guest>
          ),
        },
        {
          key: "3",
          label: (
            <Guest>
              <div>어린이</div>
              <GuestNumber>
                <Icon icon={faSquarePlus} onClick={plusNumberOfChild} />
                <div>{numberOfChild}</div>
                <Icon icon={faSquareMinus} onClick={minusNumberOfChild} />
              </GuestNumber>
            </Guest>
          ),
        },
      ]}
    />
  );

  return (
    <SearchOptionContainer>
      <ChoseOption>
        <DateContainer>
          <Space direction="vertical" size={12}>
            <RangePicker onChange={onChange} style={{ width: "300px" }} />
          </Space>
        </DateContainer>
        <Space direction="vertical">
          <Dropdown
            placement="bottomLeft"
            overlay={menu}
            trigger={["click"]}
            visible={visible}
            onClick={visibleHandle}
          >
            <Button
              style={{
                width: "229px",
                height: "34px",
                display: "flex",
                flexDirection: "flexEnd",
              }}
            >
              <Icon icon={faUser} style={{ margin: "0 10px" }} />
              {sumOfGuest} 명
            </Button>
          </Dropdown>
        </Space>
        <SearchButton onClick={() => requestNewRooms()}>재검색</SearchButton>
      </ChoseOption>
      {rooms.map(data => {
        return (
          <OptionalResult key={data.id}>
            <ResultMain>
              <ResultImage
                src={data.images[0].url}
                onClick={() => {
                  modalHandle();
                  setModalId(data.id);
                }}
              />
              <MainTextContainer>
                <TitleText>
                  {data.name}
                  <DetailResultButton
                    onClick={() => {
                      modalHandle();
                      setModalId(data.id);
                    }}
                  >
                    자세히
                  </DetailResultButton>
                </TitleText>
                <GuestText>
                  기준 {data.min_guests}인 ,최대 {data.max_guests}인
                </GuestText>
              </MainTextContainer>
            </ResultMain>
            <ResultMain>
              <SubTextContainer>
                <SubText>{data.name} 객실 only</SubText>
                <PriceText>
                  <Price>{data.price.toLocaleString()}원</Price>
                  <GoToReserve onClick={() => goToBooking(data.id)}>
                    예약
                  </GoToReserve>
                </PriceText>
              </SubTextContainer>
            </ResultMain>
          </OptionalResult>
        );
      })}
      <Modal
        title={modalId && rooms[roomsIndex].name}
        centered
        visible={isModalOpen}
        onOk={modalHandle}
        onCancel={modalHandle}
        width={500}
      >
        {modalId && (
          <>
            <RoomsModalImg
              src={rooms[roomsIndex].images[0].url}
              alt="modalImg"
            />
            <ModalTitle>인원</ModalTitle>
            <ModalContent>
              기준 {rooms[roomsIndex].min_guests} 인, 최대{" "}
              {rooms[roomsIndex].max_guests} 인
            </ModalContent>
            <ModalTitle>무료취소</ModalTitle>
            <ModalContent>2022년 7월 19일까지 100% 무료취소</ModalContent>
            <ModalTitle>객실상세</ModalTitle>
            <ModalContent>
              에어컨, 벽걸이 TV, 냉장고, 커피포트 <br /> 욕조, 샤워시설, 비데,
              욕실용품 사무공간, 의자, 생수 <br /> 무료 Wi-Fi 객실 이미지는
              참고용으로 향후 업데이트 예정입니다. <br />
            </ModalContent>
            <ModalTitle>취소 규정 안내</ModalTitle>
            <ModalContent>
              투숙일 1일전 ~ 투숙일 당일까지: 환불불가 <br /> 투숙일 2일전
              17시까지: 50% 환불 <br /> 투숙일 3일전 17시까지: 70% 환불 <br />
              투숙일 8일전 17시까지: 100% 환불 <br />
              상세 설명의 취소규정에 따라 취소가 가능하며, 취소를 원하시는 경우
              <br />
              고객센터로 연락 부탁 드립니다.
            </ModalContent>
          </>
        )}
      </Modal>
    </SearchOptionContainer>
  );
};

const SearchOptionContainer = styled.div`
  width: 700px;
`;

const ChoseOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 100px;
  padding: 25px;
  border: 1px solid #e4e5e5;
  margin-bottom: 30px;
`;

const DateContainer = styled.div`
  position: relative;
`;

const Guest = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin: 10px 0;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.mainColor};
`;

const GuestNumber = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 85px;
`;

const SearchButton = styled.button`
  width: 84px;
  height: 45px;
  color: ${props => props.theme.mainColor};
  background-color: rgba(99, 178, 241, 0.2);
  border: none;
  &:hover {
    transition: 0.5s;
    filter: brightness(80%);
    cursor: pointer;
  }
`;

const OptionalResult = styled.div`
  margin: 20px 0;
`;

const ResultMain = styled.div`
  display: flex;
  border: 1px solid #e4e5e5;
  width: 700px;
  height: 170px;
  padding: 24px;
`;

const ResultImage = styled.img`
  width: 180px;
  height: 120px;
  &:hover {
    cursor: pointer;
  }
`;

const MainTextContainer = styled.div`
  margin-left: 15px;
`;

const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin-top: 20px;
`;

const GuestText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin-top: 20px;
  font-size: 12px;
  color: gray;
`;

const DetailResultButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: white;
  border: none;
  color: ${props => props.theme.mainColor};
  &: hover {
    cursor: pointer;
  }
`;

const SubText = styled.div`
  width: 645px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

const PriceText = styled.div`
  width: 645px;
  display: flex;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 30px;
`;

const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const GoToReserve = styled.button`
  width: 60px;
  height: 35px;
  border: none;
  color: white;
  background-color: ${props => props.theme.mainColor};
`;

const RoomsModalImg = styled.img`
  width: 450px;
  height: 400px;
`;

const ModalTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const ModalContent = styled.div`
  font-size: 12px;
`;

export default DetailOptional;
