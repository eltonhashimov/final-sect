'use strict'

let myProfile=document.querySelector("#shop .profile")
let myshopProf=document.querySelector("#shop .shopprof")

let Default=document.querySelector(".default .sort")
let mtSorting=document.querySelector(" .sorting")
let accor=document.querySelector(".default .sorting .accor")


mtSorting.addEventListener("click",function(){
    accor.classList.toggle("accor-active")
})


myshopProf.addEventListener("mouseover",function(){
    myshopProf.classList.add("shopprof-active")
    myProfile.classList.remove("shopprof-active")

})

myshopProf.addEventListener("mouseleave",function(){
    myshopProf.classList.remove("shopprof-active")
    myProfile.classList.add("shopprof-active")

})






const progress = document.querySelector('.max-price');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})
