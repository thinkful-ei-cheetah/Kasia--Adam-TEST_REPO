'use strict';
function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);
}
console.log(jediName('kasia','mirowska'));

function beyond(num){
  if ( num === Infinity || num === -Infinity){
    console.log('And beyond');
  }else if ( num > 0){
    console.log('To infinity');
  }else if ( num < 0) {
    console.log('To negative infinity');
  } else if ( num == 0){
    console.log('Staying home');
  }
}
beyond(0);


function decode(str){
  let myArr = [];
  str.split(' ').forEach(function(word){
    if (word[0] === 'a'){
      myArr.push(word[1]);
    }else if (word[0] ==='b'){
      myArr.push(word[2]);
    }else if (word[0] === 'c'){
      myArr.push(word[3]);
    }else if (word[0] ==='d'){
      myArr.push(word[4]);
    }else {
      myArr.push(' ');
    }
  });
  return myArr.join('');
}
console.log(decode('craft block argon meter bells brown croon droop'));

function countDays(str, leapYear){
  if (str === 'February' && leapYear === true) {
    return 'this month has 29 days';
  }
  switch(str){
  case 'February':
    return 'February has 28 days';
  case 'January':
  case 'March' :
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${str} has 31 days`;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${str} has 30 days`;
  default:  
    throw 'Must provide a valid month';
  }
}
console.log(countDays('February'));

function RPS(num){
  const arr = [1,2,3];
  if (arr.includes(num) === false) {
    throw new Error('Not valid num');
  }
  const computersNumber = Math.floor(Math.random() * 3) + 1;
  // rock = 1;
  // paper = 2;
  // sissors = 3;
  if ((num === 1 && computersNumber === 2) || (num === 2 && computersNumber === 1) ) {
    console.log('Paper beats Rock');
  }  else if ((num === 2 && computersNumber === 3) || (num === 3 && computersNumber === 2) ) {
    console.log('Scissors beats Paper');
  } else {
    console.log('Rock beats Scissors');
  }
}
RPS(1);
RPS(1);
RPS(2);
RPS(3);
