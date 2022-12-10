let box=document.getElementById('demo');
let top1=0
let left2=0
let  right3=0
let buttom4=0
document.onkeydown=function(e) {
    if (e.keyCode===40) {
        top1+=10
        box.style.top=`${top1}%`
        
    }  
    else if(e.keyCode===39){
        left2+=10
        box.style.left=`${left2}%`
        
    }else if(e.keyCode===37){
        right3+=10
       box.style.right=`${right3}%`
    }
    else  if(e.keyCode===38){
        buttom4-=10
       box.style.bottom=`${buttom4}%`
    }
    
        
    
    
}