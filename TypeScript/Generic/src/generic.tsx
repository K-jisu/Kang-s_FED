//제네릭
// 제약조건 extends

function App() {
  // // 제네릭 타입으로 Promise<number> 타입을 지정해 주었다.
  // const promise: Promise<number> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(10);
  //   }, 2000);
  // });

  // promise.then((data) => {
  //   // promise 를 호출했을 때 Promise 타입은 number 이기 때문에 split 함수를 쓸 수 없다고 ts가 알려준다.
  //   data.split(" ");
  // });

  // **********제약조건 extends
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({ name: "Max" }, { age: 30 });
  // console.log(mergeObj);

  // //  *******************제네릭 함수
  // interface Lengthy {
  //   length: number;
  // }

  // function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  //   let desciptionText = "Got no value";
  //   if (element.length === 1) {
  //     desciptionText = "Got 1 value";
  //   } else if (element.length > 1) {
  //     desciptionText = "Got" + element.length + "value";
  //   }
  //   return [element, desciptionText];
  // }

  // console.log(countAndDescribe(["Mike"]));

  // // ******************key of 의 제약조건
  // function extractAndConvert<T extends object, U extends keyof T>(
  //   obj: T,
  //   key: U
  // ) {
  //   return "value" + obj[key];
  // }
  // extractAndConvert({ name: "Mike" }, "name");


 // ************************ 제네릭 class
  // class dataStorage<T extends string | number | boolean> {
  //   private data: T[] = [];

  //   addItem(item: T) {
  //     this.data.push(item);
  //   }

  //   removeItem(item: T) {
  //     if (this.data.indexOf(item) === -1) {
  //       return;
  //     }
  //     this.data.splice(this.data.indexOf(item), 1);
  //   }

  //   getItems() {
  //     return [...this.data];
  //   }
  // }

  // const textStorage = new dataStorage<string>();
  // textStorage.addItem("Max");
  // textStorage.addItem("Manu");
  // textStorage.removeItem("Manu");
  // console.log(textStorage.getItems());

  // const numberStorage = new dataStorage<number>();

  // // const objStorage = new dataStorage<object>();
  // // const objMax = { name: "Max" };
  // // objStorage.addItem(objMax);
  // // objStorage.addItem({ name: "Manu" });
  // // objStorage.removeItem(objMax);
  // // console.log(objStorage.getItems());

  return <></>;
}

export default App;
