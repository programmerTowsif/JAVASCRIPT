// 1. Sum of Even Numbers
// একটি ১ থেকে ১০০ পর্যন্ত পূর্ণসংখ্যা থেকে সব even number যোগ করো।

let number = 3;

let sum;
sum =( number*(number+1))/2;
console.log(sum)

// 2. Age Check
// একটি প্রোগ্রাম লেখো যা ইউজার থেকে বয়স নেবে এবং চেক করবে:

// যদি বয়স ১৮ বা তার বেশি হয় তবে "Adult" প্রদর্শন করবে।

// যদি বয়স ১৩ থেকে ১৭ এর মধ্যে হয় তবে "Teenager" প্রদর্শন করবে।

// যদি বয়স ১৩ এর নিচে হয় তবে "Child" প্রদর্শন করবে।

let age = 13;
if(age>18){
    console.log("Adult")
}else if(age<=17 && age>=13){
    console.log("Teenager")
}else if(age>0 && age<13){
    console.log("child")
}
else{
    console.log("try again")
}
// 3. Leap Year Check
// একটি প্রোগ্রাম লেখো যা একটি সাল ইনপুট নেবে এবং চেক করবে যদি সাল লিপ ইয়ার (Leap Year) হয় কি না।

// Leap Year এর নিয়ম:

// সালটি যদি ৪ দ্বারা বিভাজ্য হয়, তবে সেটি লিপ ইয়ার।

// তবে, ১০০ দ্বারা বিভাজ্য না হওয়া এবং ৪০০ দ্বারা বিভাজ্য হলে সেটি লিপ ইয়ার।

let year = 2024;

if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Leap Year")
}else if(!(year%4==0 && year%100!=0 || year%400==0)){
    console.log("not leap year")
}

let a = 33,b=50,c=10;

if (a > b && a > c) {
  console.log(a, "is getter then", b, "and", c);
} else if (b> a && b> c) {
  console.log(b, "is getter then", a, "and", c);
}else{
    console.log(c, "is getter then", a, "and", b);
}

// prime number 


let num = 10
let isPrime = true;

if(num<=1){
    isPrime = false;
}
else{
    for(let i = 2;i<num;i++){
        
        if(num%i===0){
            isPrime = false
            break;
        }
    }
}
if (isPrime) {
  console.log(num + " is a Prime Number");
} else {
  console.log(num + " is not a Prime Number");
}