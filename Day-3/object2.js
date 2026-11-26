// singletan object

// let student=new Object()

// student.id=1
// student.name="Manthan"
// student.isLoggedin=true

// console.log(student)



 // nested object
let student=
{
    age:20,
    fullname:
    {
        userfullname:
        {
            firstname:"Manthan",
            lastname:"patel"
        }
    }
}

console.log(student.fullname.userfullname.lastname)

// how to merge object

// let ob1={1:"a",2:"b"}
// let ob2={3:"c",4:"d"}

// console.log(Object.assign(ob1,ob2)) // assign this j merge thai chhe


let student1=
{
    id:1,
    name:"Manthan"
}

let student2=
{
    email:"manthan@gmail.com",
    isloggedin:true
}

// console.log(Object.assign(student1,student2))

console.log({...student1,...student2}) //spread opertor this pan thai


// database mathi array of object ma value avse
let emp=[
    {
        id:1,
        name:"Manthan"
    },
    {
        email:"manthan@gmail.com",
        location:"Surat"
    },
]

console.log(emp[0].id)

// console.log(Object.keys(emp))
// console.log(Object.keys(student1))
console.log(Object.values(student1))
console.log(student1.hasOwnProperty("id")) // student1 ma id name ni property che ke nathi


// object de-structure

let empolyee=
{
    fullname:"manthan"
}

// let {fullname} =empolyee 
// console.log(fullname)

let {fullname:name} =empolyee // fullname ne de-structure karyu name thi
console.log(name)