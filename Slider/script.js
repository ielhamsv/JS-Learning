let slide = document.getElementsByClassName("slide");
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let n=0;


next.addEventListener('click',function next(e){
    e.preventDefault();
    n++;
    if(n<slide.length){
    slide[n].style.right="0";
    }
})
prev.addEventListener('click',function (e){
    e.preventDefault()
   for (let i=1;i<slide.length;i++){
       slide[i].style.right="100%"
   }
   slide[0].style.right="0"
    n=0
})
