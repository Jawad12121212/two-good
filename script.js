const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let movemnt = document.querySelector("video")
let btn = document.querySelector(".play")

movemnt.addEventListener("mouseenter", function(){
    btn.style.opacity = "1"
})

movemnt.addEventListener("mouseleave", function(){
    btn.style.opacity = "0"
})

movemnt.addEventListener("mousemove", function(dets){
    btn.style.left= dets.x + "px"
    btn.style.top= dets.y + "px"
})


let box = document.querySelectorAll(".box")

// box.forEach("mouseenter", function(){
//     crsr.style.transform = "translate(-50%, -50%) scale(1)"
// })

box.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr = document.querySelector(".crsr")
        crsr.style.transform = "translate(-50%, -50%) scale(1)"
    })
    e.addEventListener("mouseleave", function(){
        crsr = document.querySelector(".crsr")
        crsr.style.transform = "translate(-50%, -50%) scale(0)"
    })
})

// let crsr = document.querySelectorAll(".crsr")

box.forEach(function(e){
    e.addEventListener("mousemove", function(dets){
        crsr = document.querySelector(".crsr")
        crsr.style.left = dets.x+"px"
        crsr.style.top = dets.y+"px"
    })
})
