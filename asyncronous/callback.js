// function greeting(name){
//     console.log("hello",name)
// }
// function processuser(callback){
//     let name = "towsif"
//     callback(name)
// }
// processuser(greeting)

// function display(num){
//     console.log(num)
// }
// function add(a,b,callback){
//     callback(a+b)
// }
// add(8,7,display)

// function displaycheck(str,num){
//     console.log(num,str)
// }

// function checkEvebOdd(number,callback){
//     (number %2 ===0)?callback("even",number):callback("odd",number)
// }

// checkEvebOdd(3,displaycheck)
// ✅ Problem 4: Simulate API Loading with setTimeout and Callback
//  function diplay(message){
     
//     console.log(message)
 
//  }

// function fetchData(callback){
//   console.log("Fetching data...")
//   setTimeout(function(){
//     callback("Data loading succeseefully")
//   },2000)

// }
// fetchData(diplay)


// setTimeout(function(){
//     console.log("Step 1 done");
//     setTimeout(function(){
//         console.log("step 2 done")
//         setTimeout(function(){
//             console.log("setp 3 done")
//             setTimeout(function(){
//                 console.log("all step completed")
//             },1000)
//         },1000)
//     },1000)
// },1000)
 
function firstCall(username){
      fetchProfile(username,function(){
        console.log(username)
      })
}

function loginUser(username,callback){
    setTimeout(()=>{
        console.log("logged in as ",username)
        callback(username)
    },1000)
}

function fetchProfile(username,callback){
    setTimeout(()=>{
        console.log("Profile data fetched for ",username)
        callback()
    },1000)
}

loginUser('Towsif',firstCall)