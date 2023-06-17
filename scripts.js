const show = document.querySelectorAll(".show-display")
const display = document.querySelector(".display")

show.forEach(function(event){
    event.addEventListener("click", showDisplay)    
})

function showDisplay(){
    if(display.innerHTML == 0){
        return display.innerHTML = this.innerHTML
    }    
    return display.innerHTML += this.innerHTML
}