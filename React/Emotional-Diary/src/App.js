import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    /**선택한 아이디 빼고 반환한다. -> 선택한 아이디를 제거했다. */
    case "REMOVE": {
      /**it은 state에 있는 기존 data */
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      /**기존 id와 수정할 id가 같으면 수정한 값을 반환 아니면 그대로 */
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  //  로컬에 저장되어 있는 값 id 정렬 후 초기값으로 배치
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      // 내림차순 id 정렬
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataid.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);
  /**useReducer 상태관리 */
  const [data, dispatch] = useReducer(reducer, []);

  const dataid = useRef(0);

  /**CREATE */
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataid.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataid.current += 1;
  };
  /**REMOVE */
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  /**EDIT */
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
