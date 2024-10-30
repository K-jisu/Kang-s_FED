function Logger(logStr: string) {
  return function (constructor: Function) {
    console.log(logStr);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}
@WithTemplate("<h1>My Person Object</h1>", "app")
@Logger("LOGGING - PERSON")
class Person {
  name = "Nick";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
