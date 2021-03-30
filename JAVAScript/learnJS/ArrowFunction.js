let fun = function(name){
    return "hello "+name+" !"
}
console.log("Without arrow ",fun('Tony'));

// let fun1 =(name) => {
//     return "hello "+name+" !"
// }
//or
let fun1 = (name) =>  "hello "+name+" !"
console.log("With arrow "+fun1('Tony'));

let arr=[{
    title:"Build IronMan"
},{
    title:"HELLO"
},
{
    title:"Record "
}
]
let thingsDone=arr.filter((obj)=> (obj.title[0]==='R'||obj.title[0]==='B'||obj.title[0]==='H'))
console.log(thingsDone);
