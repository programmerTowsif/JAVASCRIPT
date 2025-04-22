// What is a Method?
// 👉 কোনো function যেটা একটা object-এর মধ্যে থাকে, তাকে method বলে।


const user = {
    name: "towsif",
    age:23,
    greet:function(){
        console.log("hello , i am ",this.name)
    }
    
}
 user.greet()

//  ES6 Method Syntax (short version):


const userEs6 = {
    name: "towsif",
    age:34,
    greetEs6(){
        console.log('hi i am ',this.name)
    }
}
userEs6.greetEs6()


 const calculatore = {
    add(a,b){
        return (a+b)
    },
    multiply(a,b){
        return (a*b)
    }
 }
 console.log(calculatore.add(3,4))
 console.log(calculatore.multiply(3, 4));
// 🔥 Bonus: this কী?
// 👉 this মানে হলো current object
// 👉 তুমি যেই object এর ভিতর method লিখতেছো, method এর ভিতর this দিয়ে সেই object-এর অন্য properties access করা যায়।

//  Problem 1: Student Management System
// একটা student object তৈরি কর যেটাতে থাকবে:
// - name
// - roll
// - subjects: একটা nested object (math, physics, chemistry মার্কসসহ)
// - method: totalMarks() → সব সাবজেক্টের মার্কস যোগ করবে
// - method: average() → গড় মার্কস দেখাবে
// - method: grade() → যদি average >= 80 → A+, >= 70 → A, নাহলে Fail

// Bonus: for...in loop দিয়ে subject-wise মার্কস দেখাও

 const student = {
  name: "Towsif",
  roll: 101,
  subjects: {
    math: 85,
    physics: 90,
    chemistry: 78
  },

 totalMarks(){
    let total=0;
    for(let key in this.subjects){
        total =total+ this.subjects[key]
    }
    return total;
 },
 average(){
    let average = this.totalMarks()/Object.keys(this.subjects).length;
    return average;
 },
 grade(){
    let grade = this.average()
    return (grade>=80) ?"A+":(grade>=70)?"A":"F"

 }
}
console.log(student.totalMarks())
console.log(student.average());
console.log(student.grade());
console.log("subject-wise mark")
for(let kye in student.subjects){
    console.log(`${kye} : ${student.subjects[kye]}`)
}

//  Shopping Cart System
// 📋 টাস্ক সমূহ:
// items: প্রোডাক্টের array (প্রতিটা object → name, price, quantity)

// Method:

// totalItems() → মোট কয়টা প্রোডাক্ট আছে

// totalPrice() → সব প্রোডাক্টের দাম × পরিমাণ করে যোগফল

// addItem(product) → নতুন প্রোডাক্ট অ্যাড করবে

// removeItem(productName) → নাম দিয়ে প্রোডাক্ট রিমুভ করবে

const cart = {
   items:[
      {name:"Shirt",price:200,quantity:2},
      {name:"pant",price:400,quantity:2}
   ],
   // method 
   totalProduct(){
       return this.items.length
   },
   totalPrice(){
       let total =0;
         
       for(let kye of this.items){
       let perTotla = 0;
         perTotla = kye.price * kye.quantity;
         total+=perTotla;
          
       }
       return total;
   },
   addItem(product){
      this.items.push(product)
   },
   removeItem(productName){
      this.items = this.items.filter(item =>item.name !==productName)
   }
}

console.log(cart.totalPrice())
cart.addItem({ name: "pant", price: 20, quantity: 2 });

console.log(cart.items)
cart.removeItem('pant')
console.log(cart.items)

const books = {
  book: [
    {
      title: "physics",
      author: "towsif",
      available: true,
    },
    {
      title: "chemistry",
      author: "habib",
      available: false,
    },
    {
      title: "chemistry",
      author: "habib",
      available: true,
    },
  ],

  availableBooks() {
    return this.book.filter((item) => item.available);
  },
  unavailable(title) {
    this.book.filter((item) => {
      if (item.title === title) {
        item.available = false;
      }
    });
  },
  available(title){
   this.book.filter((item)=>{
      if(item.title === title){
         item.available =true
      }
   })
  }

};
books.available("chemistry");
console.log(books.book);

console.log(books.book)