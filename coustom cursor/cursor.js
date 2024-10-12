var mouse =document.querySelector('.cursor')
var main =document.querySelector('.main')

main.addEventListener('mousemove',function(move){
    mouse.style.left = move.x+"px"
    mouse.style.top = move.y+"px"
})