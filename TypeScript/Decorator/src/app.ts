function Logger(logStr: string) {
  return function (constructor: Function) {
    console.log(logStr);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Nick";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
