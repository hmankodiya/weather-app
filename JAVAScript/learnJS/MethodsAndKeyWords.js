let video={
    title:'Loops in js',
    videolength:'15',
    videoDesc:'this is a video desc',
    meth:function(){
        console.log("HELLO")
        this.meth2()
        console.log(this);
        
    }
    ,meth2:function(){
        console.log("Function2 "+this.title,this.videoDesc,this.videolength)
    }
}
video.meth();