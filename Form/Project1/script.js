const
    sign_up=document.getElementById("btn-right")
    ,right=document.getElementById("right")
    ,left=document.getElementById("left")
    ,top_layer=document.getElementById("top-layer")
    ,sign_in=document.getElementById("btn-left")



sign_up.onclick=()=>{
    right.style.display="none"
    left.style.display="block"
    top_layer.style.left="0"
}

sign_in.onclick=()=>{
    right.style.display="block"
    left.style.display="none"
    top_layer.style.left="50%"
}