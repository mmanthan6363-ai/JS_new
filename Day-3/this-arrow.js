function myfuction()
{
    let name="Manthan"
    console.log(this) // function ni under this hoi to function ni details show kare
    console.log(this.name)// return undefined
}

myfuction()

 console.log(this) // function ni bahar this kare to {} print thai

///explicit arrow function

let value=(num1,num2)=>{
    return num1+num2
}

console.log(value(4,5))

//implicit arrow function
let value2=(num1,num2)=>(num1+num2)

console.log(value2(4,5))