let video={
    title:'Loops in js',
    videolength:'15',
    videoDesc:'this is a video desc'
}
console.log(video);
console.log(video.title);

let update=function(obj,upv){
    obj.title=upv
}
update(video,"New")
console.log(video)
