let array1=["shaktiman","balveer"];
let array2=["spiderman","batman"]

// array1.push(array2)

// console.log(array1)
// console.log(array1[2][1])

// array1.concat(array2)
// console.log(array1)

let array3=array1.concat(array2)
console.log(array3)

let array4=[...array1,...array2] //spred opetor
console.log(array4)


let another_array=[1,2,3,[5,6,7,[3,4]]]
console.log(another_array.flat(Infinity))

console.log(Array.isArray("Manthan"))
console.log(Array.from("Manthan"))
console.log(Array.from({name:"Manthan"})) //interseting


console.log(Array.of("Manthan","Patel"))

