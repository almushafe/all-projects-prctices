const bai =document.querySelector("h5")
const btn =document.querySelector("button")
let check = 0

btn.addEventListener('click', function(){
    if(check == 0){
        bai.innerHTML = "No"
        btn.innerHTML = "rejected"
        btn.style.backgroundColor = "red"
        check = 1
    } else{
        bai.innerHTML = "ok"
        btn.innerHTML = "conferm"
        btn.style.backgroundColor = "blue"

        check = 0
    }
});