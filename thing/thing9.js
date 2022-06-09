// call, apply, bind
// call메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다.
// apply는 call과 같음 다만 apply는 매개변수를 배열로 받음
// bind 함수의 this값을 영구히 바꿀 수 있다.

const mike = {
    name : "Mike"
};

const tom = {
    name : "Tom"
};

function showThisName (){
    console.log(this.name);
}

function update (birthday, occupation){
    this.birthday = birthday;
    this.occupation = occupation;
}

showThisName.call(mike);

console.log("---------------------------------");

update.call(mike, 1999, "singer");
console.log(mike);

update.call(tom, 1995, "singer");
console.log(tom);
console.log("---------------------------------");

update.apply(mike, [1999, "singer"]);
console.log(mike);

update.apply(tom, [1995, "singer"]);
console.log(tom);
console.log("---------------------------------");

// ----------------------------------------------------------------------------------
const nums = [3, 10, 4, 5, 1, 6];

// const numMin = Math.min(...nums);
// const numMax = Math.max(...nums);

const numMin = Math.min.apply(null, nums);
const numMax = Math.max.call(null, [...nums]);

console.log(numMin);
console.log(numMax);
