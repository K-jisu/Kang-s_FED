import "./App.css";

function App() {
  // const person: {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // } = {
  //   name: "David",
  //   age: 30,
  //   hobbies: ["sports", "cooking"],
  //   role: [2, "author"],
  // };
  // person.role.push("admin");
  // person.role[1] = 10;         !! ERROR
  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }

  const person = {
    name: "David",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
  };
  console.log(person.name, person.role);

  for (const hobby of person.hobbies) console.log(hobby.toUpperCase());
  return <></>;
}

export default App;
