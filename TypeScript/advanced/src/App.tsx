// 타입가드 : 어떤 속성이나 매서드가 존재하는지를 이용하기  전에 확인하는 작업 주로 유니언타입이랑 같이 많이 씀
// typeof , in 을 사용가능하고 객체라면 instanceof 사용가능

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

const Add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    // 타입가드
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Admin | Employee;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log("Name: " + emp.name);
  if ("priviledges" in emp) {
    // 타입가드
    console.log("priviledges : " + emp.priviledges);
  }
  if ("startDate" in emp) {
    console.log("startDate : " + emp.startDate);
  }
};

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving Car...");
  }
}
class Truck {
  drive() {
    console.log("Driving Truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
};

)

function App() {
  return <></>;
}

export default App;
