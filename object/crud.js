const person = {
    name: "towsif",
    age:23
}
 person.age = 24
person.city = "Chittagong",
person["country"] = "bangladesh"
delete person.city
 console.log(person)



// 1. Add property: batch = "33rd"
// 2. Update department to "EEE"
// 3. Delete name property
const student = {
  name: "Rafi",
  department: "CSE",
};

student.batch = "33rd";
console.log(student)
student.department = "EEE"
console.log(student)
delete student.name
console.log(student)
//  Nested Objects (অর্থাৎ Object এর ভিতরে আরেকটি Object)

const user = {
    name:"towsif",
    age:23,
    address:{
        street:'123 main st',
        city:'chittsgong',
        country:'bangladesh'
    }
}
console.log(user.address.city.toLocaleUpperCase());
console.log(user['address']['country'])
user.address.city = 'Dhaka'
console.log(user)
delete user.address.city;
console.log(user)

const book ={
    title : 'learn js',
    author :{
        name :"towsif",
        age:23
    },
    publisher:{
        name:'techbooks',
        location:{
            city:'Dhaka',
            country:'bangladesh'
        }
    }
}
console.log(book.author.name)
console.log(book.publisher.location.city)
book.publisher.age = 43;
console.log(book)
book.author.age = 24
console.log(book.author)
const user = {
    name :'Towsif',
    age:23,
    isHifz:true
}
for(let kye in user){
    console.log(kye ,"=", user[kye])
}
 const keys = Object.values(user)
 console.log(keys)