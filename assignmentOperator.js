let a = 10;
a += 5;
console.log(a)
a-=3;
console.log(a)
a*=2;
console.log(a)
a/=4;
console.log(a)
a%=5;
console.log(a)
a++;
console.log(a)
++a;
console.log(a)
a--;
console.log(a)
--a;
console.log(a)

let num = 12;
let a1 = num++;
let b1 = ++num;
let c = num--;
let d = --num;
console.log(a1,b1,c,d)
// 🔹 3. Assignment + Increment Combo Challenge

let salary = 1000;
let bonus = 2000;
salary +=bonus;
console.log(salary)
let a2 = salary++;
console.log(a2)
console.log(salary)
let b2 = salary--;
console.log(b2,salary)

let a3 = 5;
a3+=3;
a3*=2;
a3-=4;
console.log(a)

let x = 10;
let y = x++;
console.log(x,y)


let n = 7;
let result = ++n + n++ + --n;
 
console.log(result)