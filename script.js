"use strict"

const loadText = document.querySelector(".loading-text") //Selects the class from the HTML doc
const bg = document.querySelector(".bg") //Selects the class called "bg" from HTML

let load = 0

let int = setInterval(blurring, 30) //Blurring runs for 30 millisecs

function blurring(){
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}