var Tony={
    name:"Tony Stark",
    age:25,
    active:true
}
var Steve={
    name:"Setve Rogers",
    age:100,
    active:false
}
var Scot={
    name:"Scot Lang",
    age:10,
    active:true
}
let user=new Map()
// console.log(typeof user );
user.set('Tony',Tony)
user.set('Steve',Steve)
user.set('Scot',Scot)
// console.log(user.size)
// console.log(user.get('Tony'))
// console.log(user.keys())

// for (const key of user.keys()) {
//     console.log(key);
// }
// for (const value of user.values()) {
//     console.log(value);
// }


for (const [key,value] of user.entries()) {
    console.log(`key= ${key} value=${value.name}`)
}
user.forEach((value,key) => console.log(`key= ${key} value=${value.name}`))
var arrofArr=[["one",1,3],["two",2,4],["three",3,5]]
var newMap=new Map(arrofArr)
console.log(newMap)
