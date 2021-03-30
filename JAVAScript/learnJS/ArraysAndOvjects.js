let marvel=[1,2,3,4,5,6]
console.log(marvel.indexOf(1))
console.log(marvel.indexOf(0))
let objArray=[{
    title:"Tony"
},{
    title:"Hulk"
},{
    title:"Steve"
}]
console.log(objArray[0].title);
let index=objArray.findIndex(function(obj,index){
    return obj.title==="Tony"
})
console.log(index)


