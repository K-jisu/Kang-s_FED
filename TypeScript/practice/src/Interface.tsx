// import React from "react";

// 인터페이스는 객체의 구조를 정의하고 객체가 인터페이스랑 일치하는지 확인
const Interface = () => {
  interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
  }

  const user1: Person = {
    name: "Max",
    age: 30,

    greet(phrase: string) {
      console.log(phrase + " " + user1.name);
    },
  };
  user1.greet("Hi my name is ");

  return <div></div>;
};

export default Interface;
