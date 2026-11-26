// function addnumber(number1,number2)
// {
//     let result=number1+number2
//     console.log(result)

// }

// addnumber(1,2)

function addnumber(number1,number2)
{
    return number1+number2
}

console.log(addnumber(1,2)) 



// function  price(...num) //spred,rest opertor
// {
//     return num
// }

// console.log(price(500,200,400))


function  price(val1,value2,...num) //spred,rest opertor
{
    return num
}

console.log(price(500,200,400,800))

// object function thi
let user=
{
    id:1,
    name:"Manthan"
}

function abc(anyobject)
{
    console.log(`My id id ${anyobject.id} and name id ${anyobject.name}`)
    return
}

abc(user)

    //or
abc({
    id:5,
    name:"Samar"
})

