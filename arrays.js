// const items = ['pen','notbook','eraser']
// items.push("scale")
// console.log(items)
// items[1] = 'dairy'
// console.log(items)
// items.pop()
// console.log(items)
// items.shift()
// console.log(items)
// items.unshift("dairy")
// console.log(items)

// const numbers = [10,20,23,43,52,74];

// for(let i =0;i<numbers.length;i++){
//     if(numbers[i] %2==0){
//          numbers[i]
//     }

// }
// console.log(numbers)


// const names = ["towsif","asif","habiib"];

// for(let i =0;i<names.length;i++){
//     console.log(names[i].toLocaleUpperCase())
// }

// forEach 
// let number =[1,2,3]
// number.forEach(function(num,i){
//     console.log(num*2,i)
// })

// let students = [
//   { name: "Rafi", marks: 75 },
//   { name: "Tina", marks: 29 },
//   { name: "Omar", marks: 60 },
//   { name: "Lima", marks: 30 },
// ];

//  const checkStatus = (number) => {
//    return number >= 33 ? "Pass" : "Fail";
//  };
//  students.forEach((item)=>{
//     console.log(item.name ,":",checkStatus(item.marks))
//  })


// let inventory = [
//   { name: "Mouse", quantity: 10 },
//   { name: "Keyboard", quantity: 0 },
//   { name: "Monitor", quantity: 5 },
//   { name: "USB Cable", quantity: 0 },
// ];

// inventory.forEach((item)=>{
//     if(item.quantity>0){
//         console.log(item.name ,":","In Stock")
//     }
//     else{
//         console.log(item.name,":","out of stock")
//     }
// })
// let orders = [
//   {
//     customer: "Towsif",
//     items: [
//       { name: "Tea", price: 15 },
//       { name: "Cake", price: 30 },
//     ],
//   },
//   {
//     customer: "Anika",
//     items: [
//       { name: "Coffee", price: 40 },
//       { name: "Pastry", price: 35 },
//     ],
//   },
// ];



// let students = [
//   { name: "Towsif", marks: 70 },
//   { name: "Rafi", marks: 28 },
//   { name: "Sadia", marks: 33 },
//   { name: "Lima", marks: 20 },
// ];

// let faild = students.filter((item)=> item.marks <33)
// console.log(faild);



// let events = [
//   { name: "Iftar Party", date: "2025-04-20" },
//   { name: "Seminar", date: "2025-04-19" },
//   { name: "Class Test", date: "2025-04-20" },
// ];

// let today = "2025-04-20";
// let todayEvents = events.filter((item)=> item.date ==today)
// console.log(todayEvents)
// let students = [
//   { name: "Rafi", marks: [65, 90, 72] },
//   { name: "Sadia", marks: [30, 45, 29] },
//   { name: "Omar", marks: [80, 35, 60] },
// ];

// // যারা কোনো একটা সাবজেক্টে 85+ পাইছে, শুধু তাদের বের করো

// let topStudents = students.filter((student) =>
//   student.marks.some((mark) => mark > 85)
// );

// console.log(topStudents);


// const filterByProperty=(phones,price,amount)=>{
 
//   let newFilter =    phones.filter((item)=>item.price >amount)
//   return newFilter
// }

// let phones = [
//    { name: "iPhone", price: 100000 },
//   { name: "Samsung", price: 70000 },
//   { name: "Walton", price: 15000 }]


//   console.log(filterByProperty(phones, "price", 50000));


// map 
// let students = [
//   { name: "Rafi", marks: 85 },
//   { name: "Lima", marks: 52 },
//   { name: "Sadia", marks: 30 },
// ];
// let graded = students.map(item =>{
//     return {
//         name:item.name,
//         grade: item.marks>=80 ?"A+":
//                 item.marks >=60 ?"A":
//                 item.marks >=40 ?"B":"F"
//     }
// })
// console.log(graded)
// console.log(students)


// let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];


// let discounted = products.map((item)=>{
//     return {
//         name:item.name,
//         price:item.price,
//         discount:item.price*0.9
//     }
// })
// console.log(discounted)


// let customers = [
//   { name: "Towsif", orders: [100, 200, 150] },
//   { name: "Sadia", orders: [300, 100] },
//   { name: "Rafi", orders: [500] },
// ];

// function total(number){
//     let result = 0;
//     number.forEach((i)=>{result+=i})
//         return result;
// }
// const totalCost = customers.map((item)=>{
//     return {
//         name:item.name,
//         total: total(item.orders)
//     }
// })
// console.log(totalCost)

// let employees = [
//   { id: 101, name: "Towsif", role: "Manager" },
//   { id: 102, name: "Rafi", role: "Developer" },
//   { id: 103, name: "Lima", role: "Designer" },
// ];


// let getDev = employees.find((item)=>
      
//     item.role === "Developer")
// console.log(getDev)


// let books = [
//   { id: 1, title: "HTML", available: true },
//   { id: 2, title: "CSS", available: false },
//   { id: 3, title: "JavaScript", available: true },
// ];


// let unavailble = books.find((item)=> item.available !=true)
// console.log(unavailble)



// const login = (users,email,password)=>{
//     if(!email && !password){
//         return "enter your pass and email"
//     }else{
//       let user=    users.find((item)=> item.email === email)
//       let result = ""
//        if(!user){
//         console.log("user does not find")
//        }else{
//           user.password === password
//             ? result = `Login successful, Welcome !${user.email}`
//             :result =  "Invalid credentials";
//             return result

//        }
//     }
// }

// let users = [
//   { email: "towsif@gmail.com", password: "77" },
//   { email: "anika@gmail.com", password: "abcd" },
//   { email: "rafi@gmail.com", password: "xyz" },
// ];


// console.log(login(users, "towsif@gmail.com", "1234"));


// const searchProduct = (products,findKye)=>{
//   let product =   products.find((item) => item.name.includes(findKye));
//  return product
// }

// let products = [
//   { id: 1, name: "Wireless Mouse" },
//   { id: 2, name: "Gaming Keyboard" },
//   { id: 3, name: "USB Cable" },
// ];
 
// console.log(searchProduct(products, "Gaming"));

// const getOrderSatus = (orders,product)=>{
//    let findOrder = orders.find((item) => item.items.includes(product));
//    return findOrder
// }

// let orders = [
//   { id: 1, items: ["Tea", "Cake"], status: "pending" },
//   { id: 2, items: ["Coffee", "Pastry"], status: "shipped" },
//   { id: 3, items: ["Pizza"], status: "cancelled" },
// ];

// console.log(getOrderSatus(orders, "Pastry").status);


//  reduce()


// let numbers = [70,80,90]
// let total = numbers.reduce((acc,curr,i,arr)=>
     
//     acc+curr,0)
// console.log(total)


// let students =[
//      { name: "Towsif", marks: 85 },
//   { name: "Sadia", marks: 90 },
//   { name: "Rafi", marks: 75 }
// ]


// let totalMarks =students.reduce((acc,current)=> acc+current.marks,0)
// console.log(totalMarks)


let votes = ["yes","no","yes","no"]
let count = votes.reduce((acc,curr)=>{
    console.log((acc[curr] = (acc[curr] || 0) + 1));
    acc[curr] = (acc[curr] ||0) +1
   return acc
},{})
console.log(count)