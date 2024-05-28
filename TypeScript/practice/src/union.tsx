type NumStr = number | string;
type NumTxt = "as-text" | "as-number";

const Union = (input1: NumStr, input2: NumStr, resultConversion: NumTxt) => {
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
const combinedAges = Union(30, 29, "as-number");
console.log(combinedAges);

const combinedStringAges = Union("30", "29", "as-number");
console.log(combinedStringAges);

const combinedName = Union("David", "Anna", "as-text");
console.log(combinedName);

export default Union;
