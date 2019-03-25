const myTeam = 'Kasia & Adam';
console.log(myTeam);

function createGr(name, age){
    const yearOfBirth = 2019 - age;
 return `Hi my name is ${name} and I'm ${age} year old. I was born in ${yearOfBirth}`;
}
const greeting1 = createGr('jake', 35);
console.log(greeting1);


function getYearOfBirth(age){
    const YOB = 2019 - age; 
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    return YOB;
}
console.log(getYearOfBirth(-45));


