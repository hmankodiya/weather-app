let multipler=function(num1=5,num2=2){
    return num1*num2
}
console.log(multipler());
console.log(multipler(12.5,2))
let marvel=[1,2,3,4,5,6]
 for(let i=0;i<marvel.length;i++){
     console.log(marvel[i])
 }
marvel.forEach(function(todo,i){
    console.log(`your task np ${i+1} is:${todo}`)
})