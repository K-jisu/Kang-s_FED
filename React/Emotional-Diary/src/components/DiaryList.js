import React, { useState } from "react";

/** option 선택 리스트 */
const sortOptionList = [
  {
    value: "latest",
    name: "최신순",
  },
  {
    value: "oldest",
    name: "오래된 순",
  },
];
/** 감정 선택 리스트 */
const filterOPtionList = [
  {
    value: "all",
    name: "전부 다",
  },
  {
    value: "good",
    name: "좋은 감정",
  },
  {
    value: "bad",
    name: "안 좋은 감정",
  },
];

/**옵선 선택  */
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  /**일기 최신순 오래된 순 정렬함수 */
  const getProcessedDiaryList = () => {
    /** 비교함수 */
    const compare = (a, b) => {
      if (sortType === "latest") {
        // b > a : b반환, 최신 일기일 수록 date값이 큼
        return parseInt(b.date) - parseInt(a.date);
      } else {
        // sortType = "oldest"
        // a > b : a반환 , 먼저 쓴 일기일 반환
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // diaryList를 문자열로 변환(stringify) -> 배열로 변환(parse)
    const copyList = JSON.parse(JSON.stringify(diaryList));
    // compare 함수에서 비교된 값들을 sort()로 정렬함.
    const sortedList = copyList.sort(compare);

    /**감정 구분함수 */
    const filterCallBack = (item) => {
      if (filter === "good") {
        return item.emotion <= 3;
      } else {
        return item.emotion > 3;
      }
    };

    /**필터 된 리스트 */
    const filteredList =
      //all 이면 기존 copyList 보여주고 아니면 filterCallBack함수에서 리턴된 값 보여주기
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    return sortedList, filteredList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOPtionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {it.content} {it.emotion}
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
