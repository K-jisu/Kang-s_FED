import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정일기장 `;
  });

  useEffect(() => {
    if (diaryList.length >= 1) {
      /**작성한 달 1일 부터 */
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        // 1일
        1
      ).getTime();
      /**작성한 달 마지막 날 까지 */
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        // 마지막 날
        0,
        // 시간
        23,
        // 분
        59,
        //초
        59
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  /**달 증가 함수 */
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  /**달 감소 함수 */
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
