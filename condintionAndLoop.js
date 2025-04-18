let age = 20;
if(age>39){
    console.log("you are adult")
}else{
    console.log("you are yeanger brother")
}

let marks = 31;

if(marks>=90){
    console.log("Gread: A+")
}else if(marks>=80){
    console.log("Gread: A")
}else if(marks>=70){
    console.log("Grade:B")
}else if(marks>=60){
    console.log("Grade:c")
}else if(marks>=50){
    console.log("Grade:D")
}else if(marks>=40){
    console.log("Grade:E")
}else if(marks>=30){
    console.log("Fail")
} 

// 🧩 Problem 1: Positive or Negative
// একটা নাম্বার দেয়া আছে, সেটা পজিটিভ না নেগেটিভ সেটা চেক কর।

// Input: let num = -5;
// Output: Negative Number

let number = -5;
if(number<0){
    console.log(number ,"is negative number")
}else{
    console.log(number,"is positive number")
}

 

// 🧩 Problem 2: Even or Odd
// একটা সংখ্যা even না odd সেটা চেক কর।

// Input: let num = 23;
// Output: Odd Number


let number3 =-78;
if(number%2!=0){
    console.log(number3, "number is odd number");
}else if (number3 % 2 == 0) {
  console.log(number3, "number is positive number");
} else if (number3 === 0) {
  console.log(number3, "is zero");
} else if (number3 < 0) {
  console.log(number3, "is negative number");
} else {
  console.log("not a number");
}
let number4 =89;

if (number4 >= 80 && number4 <= 100) {
  console.log("A+");
} else if (number4 >= 70 && number4 <= 79) {
  console.log("A");
} else if (number4 >= 60 && number4 <= 69) {
  console.log("B");
} else if (number4 >= 50 && number4 <= 59) {
  console.log("C");
} else if (number4 >= 33 && number4 <= 49) {
  console.log("D");
} else if (number4 > 100) {
  console.log(number4, "this number is not exit please try age");
} else {
  console.log("F");
}

// 🧩 Problem 4: Max Between Two Numbers
// দুইটা সংখ্যা আছে। কোনটা বড় সেটা বের করো।

// Input: let a = 45, b = 60;

// Output: 60 is greater

let a = 45 ,b =60;
if(a>b)
{
    console.log(a ,"is geter than ",b);
}
else if(b>a){
     console.log(b, "is geter than ", a);
}

// 🧩 Problem 5: Leap Year Checker
// একটা বছর লিপ ইয়ার কিনা সেটা চেক করো।

// Input: let year = 2024;
// Output: Leap Year

// 📝 Hint: যদি year % 4 === 0 এবং year % 100 !== 0, অথবা year % 400 === 0 — তাহলে লিপ ইয়ার।

let year = 2024;
if(year %4 ===0 && year %100!=0 || year%400==0){
    console.log(year , 'is leap year')
}
else if(!(year %4==0 && year%100!=0 ||year%400==0)){
    console.log(year ,"is not leap year")
}