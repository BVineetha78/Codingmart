function list() {
  //   const names = ["vineetha", "hareetha", "saveetha"];

  //   const Namelist = names.map((name) => <h2>{name}</h2>);
  //   return <div>{Namelist}</div>;
  const persons = [
    {
      id: 1,
      name: "vineetha",
      age: 23,
      skill: "js",
    },
    {
      id: 2,
      name: "vinu",
      age: 23,
      skill: "react",
    },
    {
      id: 3,
      name: "vinee",
      age: 23,
      skill: "html",
    },
  ];
  const personList = persons.map((person, index) => (
    <h2 key={index}>
      {person.name} {person.age}
      {person.skill}
    </h2>
  ));
  return <div>{personList}</div>;
}
export default list;
