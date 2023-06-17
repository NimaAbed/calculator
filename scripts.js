const show = document.querySelectorAll(".show-display")
const display = document.querySelector(".display")
const calculate = document.querySelector(".calculate")

show.forEach(function(event){
    event.addEventListener("click", showDisplay)    
})

calculate.addEventListener("click",calcu)

document.querySelector(".all-clear").addEventListener("click",function(){
    display.innerHTML=0
})

function calcu(){
    display.innerHTML = eval(display.innerHTML)
}

function showDisplay(){
    if(display.innerHTML == 0){
        return display.innerHTML = this.innerHTML
    }    
    return display.innerHTML += this.innerHTML
}