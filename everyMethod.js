// // ✅ ২. Basic উদাহরণ
 

// let numbers = [10, 20, 30, 40];
// let allPositivenumber = numbers.every((number)=>number>0)
// console.log(allPositivenumber)
// let allLessthan50 = numbers.every((number)=>number<50)
// console.log(allLessthan50)
// let allGreaterthan25=numbers.every((number)=>number>25)
// console.log(allGreaterthan25)
// // Example: Students — সবাই কি Passed?
// let students = [
//   { name: "Towsif", marks: 80 },
//   { name: "Rafi", marks: 75 },
//   { name: "Sadia", marks: 7 },
// ];

// let allPassed = students.every((s)=>s.marks >34)
// console.log(allPassed)
// //  Cart — সব Product কি Available?

// let cart = [
//   { name: "Mouse", available: true },
//   { name: "Keyboard", available: true },
//   { name: "Monitor", available: false },
// ];

// let available = cart.every((item)=>item.available)
// console.log(available)
// // allBooksAvailable;
// let shelves = [
//   {
//     name: "A",
//     books: [
//       { title: "HTML", available: true },
//       { title: "CSS", available: true },
//     ],
//   },
//   {
//     name: "B",
//     books: [
//       { title: "JavaScript", available: true },
//       { title: "React", available: true },
//     ],
//   },
// ];

// let allBooksAvailable = shelves.every((item)=>
//  item.books.every((book)=>book.available)
// )
// console.log(allBooksAvailable)


// // custom function + every()




// const isValidPassword = (users)=>{
   
//     return users.every((user)=>user.password.length >=4)
// }

// let users = [
//   { email: "towsif@gmail.com", password: "1234" },
//   { email: "rafi@gmail.com", password: "pas" },
// ];

// console.log("user",isValidPassword(users))
// // : সব employee কি attendance দিছে?
// const AllStudentpresent = (attendanceSheet)=>{
//    return attendanceSheet.every((item) => item.status === "present");
// }
// let attendanceSheet = [
//   { name: "Towsif", status: "present" },
//   { name: "Sadia", status: "present" },
//   { name: "Rafi", status: "absent" },
// ];

// console.log(AllStudentpresent(attendanceSheet))
// // কোনো order এর সব item কি in stock?
// const checkAllItemInOb=(order)=>{
//   return order.items.every((item) => item.inStock === true);
// }
// let order = {
//   customer: "Towsif",
//   items: [
//     { name: "Laptop", inStock: true },
//     { name: "Mouse", inStock: true },
//     { name: "Keyboard", inStock: true },
//   ],
// };
// console.log(checkAllItemInOb(order))

// কোনো course এর সব student কি pass করছে?

// let course = {
//   title: "JavaScript",
//   students: [
//     { name: "Towsif", score: 85 },
//     { name: "Anika", score: 40 },
//     { name: "Lima", score: 95 },
//   ],
// };

// let checkPass = course.students.every((student)=>student.score>=33)
// console.log(checkPass)
// Course Result Dashboard


// let getResultStudents =(courses)=>{

// }
let check = (mark)=>{
    console.log(mark)
}

let courses = [
  {
    name: "JavaScript",
    students: [
      { name: "Towsif", marks: [40, 50, 60] },
      { name: "Rafi", marks: [30, 25, 45] },
      { name: "Sadia", marks: [70, 80, 90] },
    ],
  },
  {
    name: "HTML",
    students: [
      { name: "Towsif", marks: [80, 85] },
      { name: "Lima", marks: [90, 95] },
      { name: "Rafi", marks: [20, 30] },
    ],
  },
];
let course = courses.map((item)=>{
    // console.log(item);
    return {
        name:item.name,
        mark:item.students.every((item)=>item >=33)?true:false
        // passed:check(item.marks)
    }
})
console.log(course)

// getPassedStudents(courses);


