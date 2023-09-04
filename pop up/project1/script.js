const open_btn=document.getElementById("open-btn");
const pop_up=document.getElementById("pop-up")
const close_btn=document.getElementById("close-btn");

open_btn.onclick=function (){
    pop_up.classList.add("open")
}
close_btn.onclick=function (){
    pop_up.classList.remove("open")
}