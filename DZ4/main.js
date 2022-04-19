const buttonminus = document.getElementById("buttonminus")
const buttonplus = document.getElementById("buttonplus")
const counter = document.getElementById("counter")
const reset = document.getElementById("reset")
let num = 0;

buttonplus.onclick = () => {
    num++
    counter.innerText = num.toString()
}


buttonminus.onclick = () =>{
    
    num--
    if(num < 1){
        num = 0
    }
    counter.innerText = num.toString()
}

reset.onclick =  () => {
    num = 0
    counter.innerText = num.toString()
}


