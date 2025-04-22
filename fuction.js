
// const greet = function (){
//   console.log("hello");
// }
// greet();

// const multiply = (a,b)=>a*b;
// console.log(multiply(29,0))

// const doubleArray = (arr)=>arr.map(num =>num*2)
// console.log(doubleArray([1,2,3,4]))


// const fcatorial = (n)=>{
//     let result = 1;
//     for(let i =1;i<=n;i++){
//         result*=i
//     }
//   return result;
// }
// console.log(fcatorial(5))

// const rever = "towsif"
// console.log(rever.split("").reverse().join(''))
 
 

// const countVouwelnumber=(str)=>{
//     const vowel = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str) {
//       if (vowel.includes(char)) {
//         count++;
//       }
//     }
//     return count;
// }

 

// console.log(countVouwelnumber( "towsif rohmon"))



// const double = (number)=>{
//   return number*2
// }

// console.log(double(3))


// const tocelsius = (temp)=>{
//  let reslt = ((temp-33)*5)/9
//  return reslt
// }

// console.log(tocelsius(30))


// const getGrade =(point)=>{
//  let reslt =""
//  if(point>=90){
//  return reslt = "A"
//  }else if(point<=90 && point>=80){
//  return (reslt = "B");
//  }else if(point<=79 && point>=70){
//  return (reslt = "C");
//  }else{
//  return reslt = "F";
//  }
// }
// console.log(getGrade(3))





// const reverse =(str)=>{
//   return str.split("").reverse().join("");
// }

 
// console.log(reverse("towsif"))

// const BIMICalculation = (weight,height)=>{
//   let result = (weight/(height*height))
//   if(result){
//           if(result<=24.9 && result>=18.5){
//             return "Normal"
//           }else if(result>24.9){
//             return "OverWeight"
//           }
//           else{
//             return "underweight"
//           }
//   }else{
//     return 0;
//   }
// }

// console.log(BIMICalculation(70,5.6))




// const countsVewel=(str)=>{
//   const vowel = "aeiouAEIOU";
//   let coutn = 0;

//   for (let char of str) {
//     if (vowel.includes(char)) {
//       console.log(char)
//       coutn++;
//     }
//   }
//   return coutn;
// }

 
// console.log(countsVewel("towsif aslam"))


// function createCounter(){
//      let count = 0;
//     return function inner(){
//        count++;
//        console.log(count)
//     }
   
// }

// const counter =  createCounter()
//   counter();
// counter()


// function createCalculator(initialValue){
//     let value = initialValue;
//     return {
//         add: function(num){
//             value+=num;
//             return value;
//         },
//         subtract:function(num){
//             value-=num
//             return value
//         },
//         multipuly:function(num){
//             value *=num;
//             return value
//         }
//     }
// } 


// const calc = createCalculator(10);
// console.log(calc.subtract(3))
// console.log(calc.add(5))
// console.log(calc.multipuly(5));




function coutndown(start){
    let count = start;
    const interval = setInterval(function(){
        if(count>0){
            console.log(count);
              
            count--;
        }else{
            console.log("done")
            clearInterval(interval)
        }
    },1000)
}
coutndown(4)