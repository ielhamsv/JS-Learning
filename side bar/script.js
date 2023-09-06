const open=document.getElementById("open")
,nav=document.querySelector("nav")






open.onclick=()=>{
    nav.classList.toggle("open")
    open.classList.toggle("close")
}