// const myPromise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         resolve("work done")
//     }else{
//         reject("work not done")
//     }
// })

// myPromise
//          .then((res)=>console.log(res))
//          .catch((err)=>console.log(err))
//          .finally((e)=>console.log(e))

// 🧠 একটা বাস্তব উদাহরণ ধরি: ডেলিভারি সার্ভিস
// const delivery = new Promise((resolve,reject)=>{
//     let delivery = false;
//     setTimeout(()=>{
//         if(delivery){
//             resolve("The product has arrived")
//         }else{
//             reject("The product has not arrived")
//         }
//     },2000)
// })
//  delivery
//        .then((res)=>console.log("success",res))
//        .catch((err)=>console.log("err",err))


// const first =()=>{
//     return new Promise(resolve =>{
//         setTimeout(()=>resolve("1st work"),2000)
//     })
// };
// const second = (msg) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(msg + " → দ্বিতীয় কাজ"), 1000);
//   });
// };

// first()
//     .then(res=>second(res))
//     .then(final=>console.log(final))


// const loadData = async()=>{
//     try {
//          const res = await fetch(
//            "https://jsonplaceholder.typicode.com/posts/1"
//          );
//          const data =await res.json();
//          console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// loadData()



// function delayMessasge(){
//      return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("2 second wait...")
//         },2000)
//      })
// }

// async function showMessage() {
//     console.log("wait for message")
//     const msg = await delayMessasge()
//     console.log(msg)
// }
// showMessage()

// 📥 5.1: GET Request Example – Public API থেকে ডেটা আনা



fetch("https://jsonplaceholder.typicode.com/posts/1")
     .then(response =>response.json())
     .then(data=>{
        console.log("post loaded",data)
     })
     .catch(err=>{
        console.log("error loading post",err)
     })
 
