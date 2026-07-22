// let student=["tej","raj","rohit","ashish","ganesh","vishal"];
// console.log(student)
// for(let i=0;i<=student.length;i++){
//     console.log(i,student[i])
// }

// let arr=['c','cpp','html','css','js','py','c3','sql'];
// console.log(arr)
// arr.indexOf("js");

// let arr=["|X| |O|","| |X| |","|O| |X|"]
// let arr=[7,9,0,-2]
// let n=3;
// res=arr.slice(0,n)
// console.log(res)
// let i=3;
// for(let i=1;i<=20;i=i+4){
//     console.log(i);
// }
// console.log(i)

// //odd numbers
// for(let i=1;i<=15;i++){
//     if(i%2==1){
//         console.log(i)

//     }
// }

//even numbers
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)

//     }
// }

// //multiplication table
// let n=prompt("enter number");
// for(let i=1;i<=10;i++){
//     console.log(n*i)
//     }

// //nested loops
// for(let i=1;i<=3;i++){
//     console.log("outer loop")
//     for(let j=1;j<=3;j++){
//         console.log(j)
//     }
    
// }


// //while loop
// let i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// //do while
// let i=1;
// do{
//     console.log(i);
//     i++
// }
// while(i<=5)

// let movie="dhurandhar"
// let guess=prompt("enter your favorite movie")

// if(movie==guess){
//     console.log("you guessed write")
// }
// else{
//     console.log("try Again")
// }

// let fruit=["mango","apple","banana","cherry"];
// console.log(fruit)
// for(let i=0;i<fruit.length;i++){
//     console.log(i,fruit[i])
// }


//to do list app

// let todo=[];
// let req=prompt("enter your request");

// while(true){
//    if(req=="quit"){
//     console.log("quitting app")
//     break;
//    }
//    if(req=="list"){
//     console.log("-------------------");
//     for(task of todo){
//         console.log(task)
//     }
//         console.log("-------------------");

//    }else if(req=="add"){
//     let task=prompt("enter task");
//     todo.push(task);
//    }

// }

// boolean logic
// let num=10;
// if(num>0 && num%2==0){
//     console.log("number is positive and even")
// }
// console.log("possitive")

// let isadult=true;
// console.log(isadult)

//object literals
// let student={
//     name:"tej",
//     age:22,
//     isAdult:true,
// }


//Random number generator
// let randomNum=Math.random();
// console.log(randomNum *1000)
// console.log(Math.floor(randomNum *1000))
// console.log(Math.abs(randomNum *1000))

// console.log(Math.floor(Math.random() * 5) + 1)

// const max= prompt("enter max number");
// const random=Math.floor(Math.random() * max) + 1;

// const guess=prompt("enter your guess")
// while(true){
//     if  (guess=="quit"){
//         console.log("quitting game")
//         break;
//     }

// if(guess==random){
//     console.log("you guessed it right!")
//     break;
// }
// else if(guess < random){
//     console.log("your guess is too low!")
    
// } else {
//     console.log("your guess is too high!")
// }
// }

//functions
// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello();

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
