import React, { useState, useEffect } from "react";
import * as NMS from "./NavModal-style";

const NavModal = ({ locationData, navUserInput }) => {
  const [navSearchData, setNavSearchData] = useState([]);
  useEffect(() => {
    fetch("http://15.164.213.245:8000/products")
      .then(res => res.json())
      .then(res => {
        setNavSearchData(res);
      });
  }, []);

  const sortedNavSearchResult = navSearchData?.results?.filter(ele => {
    return ele.address.includes(navUserInput);
  });

  return (
    <NMS.NavModalDiv className="navModal">
      <div>
        <div className="navSearchTitle">검색 결과</div>
        {navUserInput.length === 0 ? (
          <div className="navSearchResultBox">
            <div className="navSearchResultLine">
              <i>아이콘</i>
              <div>검색 결과 없음</div>
            </div>
          </div>
        ) : (
          sortedNavSearchResult.map((ele, id) => {
            return (
              <div className="navSearchResultBox" key={id}>
                <div className="navSearchResultLine">
                  <i>아이콘</i>
                  <div>{ele.name ? ele.name : "검색 결과 없음"}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </NMS.NavModalDiv>
  );
};

export default NavModal;
