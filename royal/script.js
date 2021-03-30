 function valid(){
                var a=document.fm.un.value;
                var b=document.fm.pwd.value;

                if (a==""){
                   document.getElementById('uerr').innerHTML="Username Required.....!";
                }
                
                if(b==""){
                    document.getElementById('perr').innerHTML="Password Required.....!";
                }else{
                   

                }
            

            }

            function pass(){
                var b=document.fm.pwd.value;
                if(b.length<2){
                    document.getElementById('perr').innerHTML="Weak";
                }else if(b.length<9 && b.length>2){
                    document.getElementById('perr').innerHTML="medium";
                }
                else if(b.length>9){
                    document.getElementById('perr').innerHTML="Strong";
                }

            }