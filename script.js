const Container = document.querySelector(".box");
const Love = document.querySelector(".box i");


Container.addEventListener("dblclick",function() {
    Love.style.transform="translate(-50%,-50%) scale(2)"
    Love.style.opacity="0.8"
    setTimeout(function() {
    Love.style.opacity="0"  
    },1000)
    setTimeout(function() {
        Love.style.transform="translate(-50%,-50%) scale(0)" 
    },2000)
});