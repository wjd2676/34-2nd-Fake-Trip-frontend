import React, { useState, useEffect } from "react";

import * as SM from "./SearchModal-style";
import { IP } from "../../config";

const SearchModal = ({ userInput }) => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch(`${IP}/products?limit=40`)
      .then(res => res.json())
      .then(res => {
        setSearchData(res.results);
      });
  }, []);

  if (searchData.length === 0) return <></>;

  const sortedSearchResult = searchData.filter(ele => {
    return ele.address.includes(userInput);
  });

  return (
    <SM.SearchModalDiv className="searchModal">
      <div>
        <div className="searchTitle">검색 결과</div>
        {userInput.length === 0 ? (
          <div className="searchResultBox">
            <div className="searchResultLine">
              <i>아이콘</i>
              <div>검색 결과 없음</div>
            </div>
          </div>
        ) : (
          sortedSearchResult.map((ele, id) => {
            return (
              <div className="searchResultBox" key={id}>
                <div className="searchResultLine">
                  <i>아이콘</i>
                  <div>{ele.name ? ele.name : "검색 결과 없음"}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </SM.SearchModalDiv>
  );
};

export default SearchModal;
