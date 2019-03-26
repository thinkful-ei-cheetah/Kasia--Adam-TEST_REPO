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
const greeting1 = createGr('jake', 29);
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
} catch {
    throw new Error("Age can not be negative");
}
// where function drills 2 starts

// Jedi Name first 3 letters of last name + first 2 of first name
function jediName (firstName, lastName){
return  lastName.slice(0,3) + firstName.slice(0,2)
}
console.log(jediName("Adam","Pavlicek"))


// To Infinity and behond
function beyond(num) {
    if(num === Infinity || num === -Infinity){
        console.log('And behond')
    }else if(num <= -1){
        console.log('To negative infinity');
    }else if(num === 0){
        console.log('Staying home');
    }else if(num >= 1){
        console.log('To infinity');
    }
}
const toTheStars = beyond(0);
console.log(toTheStars);

// What? 
function decode(eWord){
    //I have no Idea what this is asking for. 
}

// again not sure what it wants me to do. 
function daysInMonth(month,leapYear){
//huh?
}

function playersThrow(num){
    let myThrow = '';
    if(num >=1 && num <=3){
        if(num === 1){
            myThrow = 'Rock';
        }else if(num === 2){
            myThrow = 'Paper';
        }else if(num ===3){
            myThrow = 'Scissors';
        }
    }else{
        throw new Error("Not a num from 1-3");
    }
    return myThrow;   
}
function compsThrow(){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    let compThrow = ''
    if(randomNo === 1){
        compThrow = 'Rock';
    }else if(randomNo === 2){
        compThrow = 'Paper';
    }else if(randomNo ===3){
        compThrow = 'Scissors';
    }
    return compThrow;
}
function rockPaperScissors(comp,player){
    if (comp === player){
        console.log('Draw');
    }
}
