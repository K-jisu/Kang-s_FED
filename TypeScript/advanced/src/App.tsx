// 타입가드 : 어떤 속성이나 매서드가 존재하는지를 이용하기  전에 확인하는 작업 주로 유니언타입이랑 같이 많이 씀
// typeof , in 을 사용가능하고 객체라면 instanceof 사용가능
// 함수 오버로드
//옵셔널 체이닝 "?"
//Null 병합

type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universe = Combinable & Numeric;

// 함수 오버로드 -> 타입스크립트가 스스로 반환값 타입을 식별할 수 없을 때 사용한다.

function Add(a: number, b: number): number;
function Add(a: string, b: string): string;
function Add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // 타입가드
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = Add("Mike", "Smith");
console.log(result);

const fetchUserData = {
  id: "u1",
  name: "Mike",
  // job : {title : "CEO", description : "My own company"}
};
// 어떠한 이유에서 job 속성을 가져오지 못했을때 "?"라는 옵셔널체이닝을 사용하여  ? 뒤에있는 속성이 없다면 불러오지 않는다.
console.log(fetchUserData?.job?.title);

const userInpt = null;
// const storedData = userInpt || "Default"  -> 이렇게 하면 사용자 입력이 빈칸(faulsy)이므로 Default 출력. 빈칸을 보관하고 싶다면
const storedData = userInpt ?? "Default"; // -> 이러면 userInput이 null 이거나 undefined 일때만 Default 출력함.
console.log(storedData);

// type UnknownEmployee = Admin | Employee;

// const printEmployeeInformation = (emp: UnknownEmployee) => {
//   console.log("Name: " + emp.name);
//   if ("priviledges" in emp) {
//     // 타입가드
//     console.log("priviledges : " + emp.priviledges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate : " + emp.startDate);
//   }
// };

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving Car...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving Truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// const usedVehicle = (vehicle: Vehicle) => {
//   vehicle.drive();
//   if (vehicle instanceof Truck) vehicle.loadCargo(1000);
// };

// usedVehicle(v1);
// usedVehicle(v2);

// /// 구별된 유니언 switch case 문법을 사용. type이라는 공통 속성을 사용했기 때문

// interface Bird {
//   type: "bird";
//   flyingspeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningspeed: number;
// }

// type Animal = Bird | Horse;

// const moveAnimal = (animal: Animal) => {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingspeed;
//       break;
//     case "horse":
//       speed = animal.runningspeed;
//       break;
//   }
//   console.log("Moving animal speed: " + speed);
// };

// moveAnimal({ type: "bird", flyingspeed: 1000 });

// const userInputElement = document.getElementById("user-input");
// if (HTMLInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer{
//   // 속성의 갯수나 속성의 이름을 파악하지 못했을 때 정의
//   [prop : string] : string;
// }

// const errorBag : ErrorContainer = {
//   username : "Must start with a capital character",
//   email : "Not a valid email"
// }

function App() {
  return <></>;
}

export default App;
