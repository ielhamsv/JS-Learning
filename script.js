
loadEventlisteners();

function loadEventlisteners(){

    const main_number=parseInt(Math.random()*10)
    console.log(main_number)
    const heading=document.getElementById("try");
    const game=document.getElementById("game")
    const random_number=document.getElementById("random-number")
    const play=document.getElementById("play")
    const btn1=document.getElementById("btn1")
    const btn2=document.getElementById("btn2")
    const btn3=document.getElementById("btn3")
    const input=document.getElementById("input")
    const one=document.getElementById("one")
    const two=document.getElementById("two")
    const three=document.getElementById("three")

    heading.addEventListener("click", onclick);

    function onclick(e){
        game.style.display="block"

        e.preventDefault()
    }

    random_number.addEventListener("click", onclick2)

    function onclick2(e){
        play.style.display="block"
        game.style.display="grid"
        alert("find the random number between 1-10")

        e.preventDefault()
    }

    btn3.addEventListener("click", onclick3)

    function  onclick3(e){

        if(input.value==""){
            alert("Enter A Number!")
        }else if(input.value== main_number){
            alert("you wine!")
        }else{
            one.style.display="block"
            btn3.style.display="none"
        }
    }

    btn2.addEventListener("click", onclick4)

    function  onclick4(){

        if(input.value==""){
            alert("Enter A Number!")
        }else if(input.value== main_number){
            alert("you wine!")
        }else{
            two.style.display="block"
            btn2.style.display="none"
        }
    }

    btn1.addEventListener("click", onclick5)

    function  onclick5(){

        if(input.value==""){
            alert("Enter A Number!")
        }else if(input.value== main_number){
            alert("you wine!")
        }else{
            three.style.display="block"
            alert("you lose :(")
        }
    }




    }
