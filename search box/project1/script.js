let p =document.querySelector("p")
let items = document.querySelectorAll(".items")
let categories = document.getElementById("categories")
let list=document.getElementById("list")
let input=document.getElementById("input")

categories.onclick= function(){
    list.classList.toggle("open")
}

for(item of items){
    item.onclick=function (){
        p.innerText=this.innerHTML
        input.placeholder= "Search In " + p.innerHTML
    }
}