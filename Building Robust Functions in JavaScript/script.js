function getPerson(obj) {
  try {
      if(obj.hasOwnProperty('name') && obj.hasOwnProperty('age')) {
          return `Name: ${obj.name}, Age: ${obj.age}`;
      }
      throw "Invalid parameter type";

  } catch (error) {
      return error;
  }
}

console.log(getPerson({name: "Anusha", age: 20}));  // Name: Mithun, Age: 20
console.log(getPerson({name: "Anusha"})); //Invalid parameter type
console.log(getPerson(["name", "Anusha"])); //Invalid parameter type