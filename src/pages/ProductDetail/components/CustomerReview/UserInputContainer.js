import React, { useState } from "react";
import axios from "axios";
import { Rate } from "antd";
import { API } from "../../../../config";
import styled from "styled-components";

const UserInputContainer = ({ id }) => {
  const [imageData, setImageData] = useState("");
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState("");

  const ImageHandleChange = e => {
    setImageData(e.target.files[0]);
  };
  const userCommentChange = e => {
    setUserComment(e.target.value);
  };

  const rateInputHandle = value => {
    setUserRating(value);
  };

  const onSubmitHandle = e => {
    const formData = new FormData();
    formData.append("image", imageData);
    formData.append("content", userComment);
    formData.append("rating", userRating);
    formData.append("product_id", `${id}`);

    axios.post(API.REVIEWS, formData, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.rQrQM6TZsK744B-vV6-uRFCByomNvDMZNvIKk1UQDu8",
      },
    });
  };

  return (
    <UserInputContent>
      <ReviewTitle>리뷰</ReviewTitle>
      <RatingCount>별점 {userRating && `${userRating}점`}</RatingCount>
      <form onSubmit={onSubmitHandle}>
        <InputRatingImgContainer>
          <RatingContainer>
            <label htmlFor="ratingInput" />
            <Rate
              onChange={rateInputHandle}
              style={{
                fontSize: 22,
                color: "#62B2F2",
              }}
            />
          </RatingContainer>
          <ImageWrapper onInput={ImageHandleChange}>
            이미지 삽입
            <ImageLabel htmlFor="imageInput" />
            <ImageContainer
              className="imageInput"
              type="file"
              onChange={ImageHandleChange}
            />
          </ImageWrapper>
        </InputRatingImgContainer>
        <CommentTitle>댓글달기</CommentTitle>
        <CommentContainer>
          <label htmlFor="commentInput" />
          <UserComment
            className="commentInput"
            type="text"
            onChange={userCommentChange}
          />

          <SubmitButton type="submit">등록하기</SubmitButton>
        </CommentContainer>
      </form>
    </UserInputContent>
  );
};

const UserInputContent = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  border: 1px solid black;
`;

const InputRatingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 150px;
`;

const ReviewTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 50px 0;
`;

const RatingCount = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

const RatingContainer = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid black;
`;

const ImageContainer = styled.input`
  width: 200px;
  height: 100px;
  opacity: 0;
`;

const ImageLabel = styled.label`
  opacity: 0;
`;

const CommentContainer = styled.div`
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CommentTitle = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const UserComment = styled.input`
  width: 500px;
  height: 150px; ;
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
`;

export default UserInputContainer;
