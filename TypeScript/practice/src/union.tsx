const Union = () => {
  type NumStr = number | string;
  type NumTxt = "as-text" | "as-number";
  const Combined = (
    input1: NumStr,
    input2: NumStr,
    resultConversion: NumTxt
  ) => {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2; // +input = 문자열을 숫자로 변환
    } else {
      result = input1.toString() + " " + input2.toString();
    }
    return result;
  };

  const combinedAges = Combined(30, 29, "as-number");
  console.log(combinedAges);

  const combinedStringAges = Combined("30", "29", "as-number");
  console.log(combinedStringAges);

  const combinedName = Combined("David", "Anna", "as-text");
  console.log(combinedName);
  //Function Type

  return <div></div>;
};

export default Union;
