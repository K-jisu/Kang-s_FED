import React, { useCallback, useEffect, useMemo } from "react";
import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";
// import LifeCycle from "./LifeCycle";

// https://jsonplaceholder.typicode.com/comments

// const dummyList = [
//   {
//     id :1,
//     author : "강지수",
//     content : "하이1",
//     emotion : 5,
//     create_date : new Date().getTime()
//   },
//   {
//     id :2,
//     author : "홍길동",
//     content : "하이2",
//     emotion : 4,
//     create_date : new Date().getTime()
//   },
//   {
//     id :3,
//     author : "아무게",
//     content : "하이3",
//     emotion : 3,
//     create_date : new Date().getTime()
//   },

// ]

function App() {
  const [data, setData] = useState([]);

  const datatId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: datatId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: datatId.current,
    };

    datatId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);
  /** useMemo  */
  const getDiaryAnalysis = useMemo(() => {
    // useMemo 를 쓰면 getDiaryAnalysis에 값을 넣어줌
    // 그래서 getDiaryAnalysis는 함수가 아니라 값으로 쓰임

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  // getDiaryAnalysis 를 함수호출이 아니라 그냥 값으로 씀

  return (
    <div className="App">
      {/* <OptimizeTest/> */}
      {/* <LifeCycle/> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length} </div>
      <div>기분 좋은 일기 개수 : {goodCount} </div>
      <div>기분 나쁜 일기 개수 : {badCount} </div>
      <div>기분 좋은 일기 비율 : {goodRatio} </div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;