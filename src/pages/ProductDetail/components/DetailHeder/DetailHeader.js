import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Carousel, Rate } from "antd";
import "antd/dist/antd.css";
import {
  faMap,
  faClock,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DetailHeader = ({ itemInfo }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const {
    name,
    grade,
    address,
    images,
    rating,
    latitude,
    longtitude,
    check_in,
    check_out,
    review_count,
  } = itemInfo;

  const carouselHandle = () => setIsCarouselOpen(!isCarouselOpen);

  const googleMapHref = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C%20${longtitude}`;

  return (
    <Header>
      <TitleContainer>
        <Title>
          <ProductName>{name}</ProductName>
          <a href={googleMapHref} target="_blank" rel="noreferrer">
            <MapButton>
              <Icon icon={faMap} />
              위치보기
            </MapButton>
          </a>
        </Title>
        <Grade>{grade}성급 호텔</Grade>
        <Rating>
          <Rate
            allowHalf
            disabled
            defaultValue={rating.toFixed(1)}
            style={{
              color: "#62B2F2",
            }}
          />
          {Number(rating).toFixed(1)} 점 ({review_count})
        </Rating>
        <SubInformation>
          <Location>
            <Icon icon={faLocationDot} /> {address}
          </Location>
          <CheckIn>
            <Icon icon={faClock} /> 체크인 {check_in} ~ 체크아웃 {check_out}
          </CheckIn>
        </SubInformation>
      </TitleContainer>
      <ProductImages>
        <ImageButton onClick={carouselHandle}>
          <Icon icon={faPlusSquare} />
          크게보기
        </ImageButton>
        <MainImageContainer>
          {images.map(
            data =>
              data.is_main && (
                <MainImage
                  key={data.id}
                  src={data.url}
                  onClick={carouselHandle}
                />
              )
          )}
          <Modal
            title={name}
            centered
            visible={isCarouselOpen}
            onOk={carouselHandle}
            onCancel={carouselHandle}
            width={1000}
            closable={false}
          >
            <Carousel autoplay arrows {...ArrowSettings}>
              {images?.map(data => (
                <CarouselImage src={data.url} key={data.id} alt={data.id} />
              ))}
            </Carousel>
          </Modal>
        </MainImageContainer>
        <SubImagesContainer id="choseOption">
          {images.map(
            data =>
              // data.id < 6 &&
              !data.is_main && (
                <SubImage
                  key={data.id}
                  src={data.url}
                  onClick={carouselHandle}
                />
              )
          )}
        </SubImagesContainer>
      </ProductImages>
    </Header>
  );
};

const Header = styled.div`
  width: 700px;
  margin-bottom: 30px;
`;

const TitleContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
`;

const ProductName = styled.p`
  font-size: 30px;
  font-weight: 800;
`;

const MapButton = styled.button`
  width: 110px;
  height: 35px;
  background-color: white;
  border: 1px solid #e4e5e5;
  cursor: pointer;
`;

const Grade = styled.div`
  font-size: 13px;
  color: #bdc2c5;
`;

const Rating = styled.div`
  font-size: 13px;
`;

const SubInformation = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  border-top: 1px solid #e4e5e5;
  border-bottom: 1px solid #e4e5e5;
  height: 70px;
`;

const Location = styled.div`
  margin-right: 150px;
`;

const CheckIn = styled.div``;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const ProductImages = styled.div`
  position: relative;
  cursor: pointer;
`;

const ImageButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 96px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  z-index: 1;
  font-size: 15px;
`;

const MainImageContainer = styled.div`
  width: 700px;
  height: 470px;
  margin-bottom: 6px;
`;

const MainImage = styled.img`
  width: 700px;
  height: 470px;
  &:hover {
    transition: 0.5s;
    filter: brightness(70%);
  }
`;

const CarouselImage = styled.img`
  height: 500px;
`;

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "red" }}
      onClick={onClick}
    />
  );
};

const ArrowSettings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SubImagesContainer = styled.div`
  width: 700px;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
`;

const SubImage = styled.img`
  width: 170px;
  height: 120px;
  margin-right: 5px;
  &:hover {
    transition: 0.5s;
    filter: brightness(70%);
  }
`;

export default DetailHeader;
