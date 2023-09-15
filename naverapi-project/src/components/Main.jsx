import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NaverReducerActions } from "../redux/reducers/naverSlice";

const Main = () => {
  const search = useRef();
  const dispatch = useDispatch();

  const searchClick = () => {
    let searchValue = search.current.value;
    if (searchValue != "") {
      axios
        .get("/v1/search/book.json", {
          params: { query: searchValue, display: 5 },
          headers: {
            "X-Naver-Client-Id": "4f3yj80J8odWVL5nUftB",
            "X-Naver-Client-Secret": "Ck53BPS9jW",
          },
        })
        .then((res) => {
          dispatch(NaverReducerActions.dataInput(res.data.items));
        });
    }
    else{
        alert('검색어를 입력해주세요.')
    }
  };

  return (
    <div>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          className="search"
          ref={search}
          onKeyDown={() => {
            if (window.event.keyCode == 13) {
              searchClick();
            }
          }}
        />
        <InputGroup.Text id="inputGroup-sizing-lg" onClick={searchClick}>
          검색
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Main;
