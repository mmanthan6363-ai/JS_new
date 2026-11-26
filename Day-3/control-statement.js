let score=100

if(score==100)
{
    console.log("true");
}
else
{
    console.log("false");
}


let day=1

switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuseday");
        break;

    case 3:
        console.log("Wndenday");
        break;

    default:
        console.log("Not found")

}


// Check array
let f = []
if(f.length == 0)
    console.log("Empty Array")

let obj = {
    // id :1,
    // name : "Alex"
}

if(Object.keys(obj).length==0)
{
    console.log("Empty Object")
}


let a;
// a=5 ?? 10 //Nullish opetor

a=null ?? 10

console.log(a)


//falsy value:-false,0,-0,BigInt On,"",null,undefined,NaN

//trutly value:-"false","0"," ",[],{},function(){}



