import React, { useState, useEffect } from "react";
import * as NMS from "./NavModal-style";

const NavModal = ({ navUserInput }) => {
  const [navSearchData, setNavSearchData] = useState([]);
  useEffect(() => {
    fetch("http://10.58.7.191:8000/products?limit=40")
      .then(res => res.json())
      .then(res => {
        setNavSearchData(res.results);
      });
  }, []);

  if (navSearchData.length === 0) return <>loadingLoading</>;

  const sortedNavSearchResult = navSearchData.filter(ele => {
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
