const show=document.getElementById("show")
    ,profile=document.getElementById("profile")
    ,message=document.getElementById("message")
    ,container=document.getElementById("container")
    ,cancel=document.getElementById("cancel")
    ,close=document.getElementById("close")
    ,send=document.getElementById("send")
text=document.querySelector("textarea")




show.onclick =()=>{
    profile.style.display="none"
    message.style.display="block"
    container.style.backgroundColor="grey"
}

close.onclick= ()=>{

    profile.style.display="block"
    message.style.display="none"
    container.style.backgroundColor="white"
}
cancel.onclick= ()=>{

    profile.style.display="block"
    message.style.display="none"
    container.style.backgroundColor="white"
}
send.addEventListener("click",function (){
    if (text.value == ""){
        alert("Enter Your Message")
    }else {
        alert("Message Sent!")
        text.value=""
    }
})