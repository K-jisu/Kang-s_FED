import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiarySateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

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
    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: datatId.current },
    });

    datatId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
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
    <DiarySateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* <OptimizeTest/> */}
          {/* <LifeCycle/> */}
          <DiaryEditor />
          <div>전체 일기 : {data.length} </div>
          <div>기분 좋은 일기 개수 : {goodCount} </div>
          <div>기분 나쁜 일기 개수 : {badCount} </div>
          <div>기분 좋은 일기 비율 : {goodRatio} </div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiarySateContext.Provider>
  );
}

export default App;
