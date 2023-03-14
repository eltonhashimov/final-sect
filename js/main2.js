'use strict'

let myProf=document.querySelector("#profile .prof")
let myhomeProf=document.querySelector("#profile .homeprof")
let eyesOpen=document.querySelectorAll('.eyes-open')
let eyesBlock=document.querySelectorAll('.eyes-block')




myhomeProf.addEventListener("mouseover",function(){
    myhomeProf.classList.add("homeprof-active")
    myProf.classList.remove("homeprof-active")

})

myhomeProf.addEventListener("mouseleave",function(){
    myhomeProf.classList.remove("homeprof-active")
    myProf.classList.add("homeprof-active")

})

eyesOpen[0].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesBlock[0].classList.remove('eyes-active')
})

eyesBlock[0].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesOpen[0].classList.remove('eyes-active')

})
eyesOpen[1].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesBlock[1].classList.remove('eyes-active')
})

eyesBlock[1].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesOpen[1].classList.remove('eyes-active')

})
eyesOpen[2].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesBlock[2].classList.remove('eyes-active')
})

eyesBlock[2].addEventListener("click",function(){
    this.classList.add('eyes-active')
    eyesOpen[2].classList.remove('eyes-active')

})

