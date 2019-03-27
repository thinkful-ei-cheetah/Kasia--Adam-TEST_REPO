const myTeam = 'Kasia & Adam';
console.log(myTeam);

function createGr(name, age){
    const yearOfBirth = 2019 - age;
    if(!name && ! age){
        throw new Error("Arguments not valid")
    }
    if(typeof age !== 'number' || typeof name !== 'string'){
        throw new TypeError("age is not a number or name is not a string");
    }
    return `Hi my name is ${name} and I'm ${age} year old. I was born in ${yearOfBirth}`;
 
}
const greeting1 = createGr('jake', '29');
console.log(greeting1);


function getYearOfBirth(age){
    const YOB = 2019 - age; 
    if (age < 0){
        throw new Error("Age can not be negative");
    }else{
        console.log("hello there");
    }
    
    return YOB;
}
//console.log(getYearOfBirth(-45));

try {
    const greeting1 = getYearOfBirth(54);
} catch{
    throw new Error("Age can not be negative");
}

