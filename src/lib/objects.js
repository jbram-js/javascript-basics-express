const createPerson = (name, age) => {
 return { name, age }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else { 
    return false;
  }
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(hondaCars => hondaCars.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce((accumulator,person) => accumulator + person.age, 0) / people.length

};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce(newPersonsName) {
      return `Hi ${newPersonsName}, my name is ${name} and I am ${age}!`
    }
  }; return person;
  };


module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
