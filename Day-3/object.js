//object literals:-


let mysymbols=Symbol("hello") //how to declare symbols in objects, variable nu name objects ma pan same rakhvu
let student=
{
    name:"Manthan",
    age:19, 
    "fullName":"Manthan Patel",  // avi rite pan thai
    location:"Surat",
    email:"manthan@gmail.com",
    isLoggedin:true, // boolean
    lastloggedindays:["Monday","Sunday"], // array
    [mysymbols]:"hi",
    greeting:function()  // objetc ni under function
    {
        console.log(`Hello ${this.name}`)
        console.log(`Hello ${student.name}`)
    }
}

console.log(student.email) 
console.log(student["email"])
console.log(student.lastloggedindays[0]) 

console.log(student.fullName) 

console.log(student[mysymbols]) // double quots ni ave

// pacchi thi email ni value chnage kari
student.email="samar@gmail.com"
console.log(student["email"])

// student.greeting=function()  // object ni bahar thi function  banavyu
// {
//     console.log(`Hello ${this.name}`)
// }

console.log(student.greeting()) // function ne access karyu