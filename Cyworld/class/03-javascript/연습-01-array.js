let classmate = ["철수", "영희", "훈이"];
// undefined
classmate
// (3) ['철수', '영희', '훈이']
classmate[0]
// '철수'
classmate[2]
// '훈이'
classmate.includes("훈이")
// true
classmate.includes("맹구");
// false
classmate.length;
// 3
classmate.push("맹구");
// 4
classmate.includes("맹구");
// true
// 4
classmate.pop("맹구");
// '맹구'
classmate.length;
// 3
classmate;
// (3) ['철수', '영희', '훈이']

let developer = ["워라밸", "연봉", "신분상승", "커리어점프", "쩌는개발자"]
// undefined
developer[2]
// '신분상승'
let dream = ["커리어점프", "성공", "할수있따"];
// undefined
developer.concat(dream);
// (8) ['워라밸', '연봉', '신분상승', '커리어점프', '쩌는개발자', '커리어점프', '성공', '할수있따']
let result = developer.concat(dream);
// undefined
result
// (8) ['워라밸', '연봉', '신분상승', '커리어점프', '쩌는개발자', '커리어점프', '성공', '할수있따']