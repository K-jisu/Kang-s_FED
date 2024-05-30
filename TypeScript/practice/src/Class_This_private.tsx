const Class = () => {
  // Class, This, Private, Public, readonly
  // Class : 사용할 객체의 청사진같은 용도
  //this
  //private : 정해진 매서드를 통해서 객체 추가 가능(?)
  //public : 항상 추가 가능
  // readonly : 직접수정 말고는 읽기만 가능

  class Department {
    // id : string;
    // name: string;
    private employees: string[] = [];

    // constructor(n: string) {
    //   this.name = n;
    // }
    //// 위의 식 보다는 아래 식으로 많이 씀

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
      console.log(`Departmanet (${this.id}) : ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation(this: Department) {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  const Accounting = new Department("d1", "Accounting");
  Accounting.addEmployee("MAX");
  Accounting.addEmployee("David");
  // Accounting.employees[2] = "anna";          // employees 가 private이므로 이런식으로 추가 불가능. addEmployee로만 가능

  Accounting.describe(); // Department : Accounting
  Accounting.printEmployeeInformation();

  // const accountingCopy = { name: "Dummy", describe: Accounting.describe };
  // accountingCopy.describe();

  return <div></div>;
};

export default Class;
