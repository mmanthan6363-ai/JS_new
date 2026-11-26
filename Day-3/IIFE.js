// IIFE:-Immedity invoked function expression

function one()
{
    console.log(`DB connected`)
}

one(); // semicom mukvu

(function two()
{
    console.log(`DB connected`)
})();


(function add(n1,n2){
    console.log(n1+n2);
})(5,4);

((name)=>{
    console.log(`${name}`)
})("Manthan");