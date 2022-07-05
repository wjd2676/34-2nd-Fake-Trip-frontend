import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import styled from "styled-components";
import UserInputContainer from "./UserInputContainer";
import { API } from "../../../../config";
import "antd/dist/antd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faCoins,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

const CustomerReview = ({ itemInfo, id }) => {
  const [userReview, setUserReview] = useState([]);

  const { rating, review_count } = itemInfo;

  useEffect(() => {
    fetch(`${API.PRODUCTS}/${id}/reviews`, { method: "GET" })
      .then(res => res.json())
      .then(res => setUserReview(res.reviews));
  }, [id]);

  const makeGraphBox = () => {
    const result = [];
    for (let i = 1; i < 6; i++) {
      result.push(
        <GraphBox key={i}>
          <Rate
            name={i}
            defaultValue={i}
            disabled
            style={{
              fontSize: 12,
              color: "#62B2F2",
            }}
          />
          {i}
        </GraphBox>
      );
    }
    return result;
  };
  return (
    <ReviewContainer>
      <ReviewTitle>
        <ReviewPrefix>후기</ReviewPrefix>
        <ReviewSuffix> {review_count}</ReviewSuffix>
      </ReviewTitle>
      <RatingContainer>
        <RatingInfo>
          <RatingValue>{Number(rating).toFixed(1)}</RatingValue>
          <Rate
            defaultValue={rating}
            allowHalf
            disabled
            style={{
              fontSize: 20,
              color: "#62B2F2",
            }}
          />
        </RatingInfo>
        <RatingGraph>{makeGraphBox()}</RatingGraph>
      </RatingContainer>
      <GoodPointReview>
        <GoodTitle>여행자들이 뽑은 좋은 점</GoodTitle>
        <GoodContent>
          <div>
            <Icon icon={faLandmark} /> 관광지와 가까워요
          </div>
          <ContentRank>1위</ContentRank>
        </GoodContent>
        <GoodContent>
          <div>
            <Icon icon={faCoins} /> 가성비가 좋아요
          </div>
          <ContentRank>2위</ContentRank>
        </GoodContent>
        <GoodContent>
          <div>
            <Icon icon={faHandSparkles} /> 객실이 깨끗해요
          </div>
          <ContentRank>3위</ContentRank>
        </GoodContent>
      </GoodPointReview>
      <ReviewOption>
        <div>
          <button>사진후기</button>
          <button>평점</button>
        </div>
        <div>
          <button>추천순</button>
          <button>최신순</button>
          <button>높은 평점순</button>
          <button>낮은 평점순</button>
        </div>
      </ReviewOption>
      {userReview.map(data => (
        <ReviewContents key={data.id}>
          <ReviewContent>
            <UserInfo>
              <Rate
                allowHalf
                disabled
                defaultValue={data.rating}
                style={{
                  color: "#62B2F2",
                }}
              />
              <UserName>{data.user_name}</UserName>
            </UserInfo>
            <RoomInfo>
              <DateInfo>{data.updated_at}</DateInfo>{" "}
              <RoomType>디럭스 홀리뷰 객실 only</RoomType>
            </RoomInfo>
            <UserComment>{data.content}</UserComment>
          </ReviewContent>
          <UserImage src={data.image_url} />
        </ReviewContents>
      ))}
      <UserInputContainer id={id} />
    </ReviewContainer>
  );
};

const RatingContainer = styled.div`
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background-color: #f8f9fa;
`;

const ReviewContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const ReviewTitle = styled.div`
  margin-top: 50px;
  font-size: 30px;
  display: flex;
`;

const ReviewPrefix = styled.div``;

const ReviewSuffix = styled.div`
  color: gray;
`;

const ReviewContent = styled.div``;

const RatingInfo = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const RatingValue = styled.div`
  font-size: 30px;
`;

const GraphBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 10px;
`;

const RoomInfo = styled.div`
  display: flex;
  font-size: 13px;
  margin: 10px 0;
`;

const DateInfo = styled.div`
  width: 150px;
`;

const RoomType = styled.div``;

const UserComment = styled.div`
  width: 540px;
`;
const UserImage = styled.img`
  width: 120px;
  height: 120px;
`;

const ReviewContainer = styled.div`
  width: 700px;
`;

const RatingGraph = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GoodPointReview = styled.div`
  width: 700px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #e4e5e5;
`;

const GoodTitle = styled.div`
  font-size: 20px;
  color: gray;
`;

const GoodContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const ContentRank = styled.div`
  font-size: 12px;
  color: gray;
  background-color: #f8f9fa;
  font-weight: 900;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.mainColor};
  margin: 0 20px;
`;

const ReviewOption = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CustomerReview;
