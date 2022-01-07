let btns =document.getElementById("f-btn")
let f_ditalisbox = document.querySelector(".details")

btns.addEventListener("click",() => {
    f_ditalisbox.classList.toggle("active");
})
// ###########################
let mysbtn= document.getElementById("s-btn")
let s_ditalisbox = document.querySelector(".s-details")

mysbtn.addEventListener("click",() => {
    s_ditalisbox.classList.toggle("active");
})

// ##########

let t_btn = document.getElementById("t-box")
let t_ditalsbox = document.querySelector(".t-details")

t_btn.addEventListener("click",() => {
    t_ditalsbox.classList.toggle("active");
})
// #######

let l_btn = document.getElementById("l-box")
let l_ditalsbox = document.querySelector(".l-details")

l_btn.addEventListener("click",() => {
    l_ditalsbox.classList.toggle("active");
})
// ##############





// ?##################

let btn = document.querySelector("#firis-audio")
let audio = document.querySelector(".firist-audio")
let count = 0;

 function played() {
    if (count == 0) {
        count = 1;
        audio.play();
        btn.innerHTML="<i class='fas fa-pause'></i>"
    } else {
        count = 0;
        audio.pause();
        btn.innerHTML = "<i class='fas fa-play'></i>"
    }
}

let nbtn = document.querySelector("#next-audio")
let naudio = document.querySelector(".next-audio")
let two = 0;

 function nplayed() {
    if (two == 0) {
        two = 1;
        naudio.play();
        nbtn.innerHTML="<i class='fas fa-pause'></i>"
    } else {
        two= 0;
        naudio.pause();
        nbtn.innerHTML = "<i class='fas fa-play'></i>"
    }
}

let tbtn = document.querySelector("#third-audio")
let taudio = document.querySelector(".third-audio")
let three = 0;

 function tplayed() {
    if (three == 0) {
        three = 1;
        taudio.play();
        tbtn.innerHTML="<i class='fas fa-pause'></i>"
    } else {
        three = 0;
        taudio.pause();
        tbtn.innerHTML = "<i class='fas fa-play'></i>"
    }
}

let fbtn = document.querySelector("#fourth-audio")
let faudio = document.querySelector(".fourth-audio")
let four = 0;

 function fplayed() {
    if (four == 0) {
        four = 1;
        faudio.play();
        fbtn.innerHTML="<i class='fas fa-pause'></i>"
    } else {
        four = 0;
        faudio.pause();
        fbtn.innerHTML = "<i class='fas fa-play'></i>"
    }
}

// ###########################


let menu = document.querySelector("#bar-one")
let navbar = document.querySelector("ul")

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

// ##############

// window.prompt("هل صليت علي النبي محمد اليوم ؟", "صلي عليه");


// #################

let scrollbtn = document.querySelector(".button-scroll")

window.onscroll = function scroller() {

    if (window.pageYOffset >= 500) {
        
        scrollbtn.classList.add("active")
    } else {
        
        scrollbtn.classList.remove("active")
    }
    
}

scrollbtn.addEventListener("click", () => {

    window.scrollTo(0, 0);
})
// ############################