var elem =document.querySelectorAll('.elem')

elem.forEach(function(a) {
a.addEventListener('mouseenter',function(){
   a.childNodes[3].style.opacity = 1
}) 
a.addEventListener('mouseleave',function(){
    a.childNodes[3].style.opacity = 0
}) 
a.addEventListener('mousemove',function(k){
    a.childNodes[3].style.left = k.x+"px"
    a.childNodes[3].style.top = k.y+"px"
})
});
// var img =document.querySelector('.elem img')

// elem.addEventListener('mousemove',function(a){
//     img.style.left = a.x+"px"
//     img.style.top = a.y+"px"
// })