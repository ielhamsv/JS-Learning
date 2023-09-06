let next=$(".next")
let prev=$(".prev")
let slides=$("#slider").find(".slide")
let dots=$("#dots").find(".dot")
let n=0
function disno(){
    for (let i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
}
function noact(){
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
}
next.on("click",function (){
    n++
    disno()
    noact()
    if (n>slides.length-1){
        n=0
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }else {
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }
})

prev.on("click",function (){
    n--
    disno()
    noact()
    if (n<0){
        n=slides.length-1
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }else {
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }
})

setInterval(function(){
    n++
    disno()
    noact()
    if (n>slides.length-1){
        n=0
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }else {
        slides[n].style.display = "block"
        dots[n].classList.add("active")
    }
},5000)