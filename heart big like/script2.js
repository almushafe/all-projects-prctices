var b = document.querySelector("#box")
var i =document.querySelector("i")

b.addEventListener('click',function(){
    i.style.transform = 'translate(-50%, -50% ) scale(1)'
    i.style.opacity = 0.8
    setTimeout(function(){
        i.style.opacity= 0
    },1000)
    setTimeout(function(){
        i.style.transform = 'translate(-50%, -50% ) scale(0)'
    },2000)
})
