const myBtn = document.querySelectorAll("#sect1 .big-box span")
const myBox = document.querySelectorAll("#sect1 .big-box .boxes")

for (let a = 0; a < myBtn.length; a++) {
    myBtn[a].addEventListener("click", function (e) {
        e.preventDefault();
        var i;
        for (i = 0; i < myBtn.length; i++) {
            myBtn[i].classList.remove('clc-active')
        }
        this.classList.add("clc-active")
    })
}

myBtn.forEach(element => {
    element.addEventListener("click", function () {

        for (let i = 0; i < myBox.length; i++) {
            myBox[i].classList.remove("active")
        }
        this.nextElementSibling.classList.add("active")
    })
})

var myBasket = document.querySelector(".first-head .head-right .basket")
var headMyBoss = document.querySelector(".head-right-click")
var headMyBossMini = document.querySelector(".head-right-click .mini-right-click")
var headMyBossMiniBox = document.querySelector(".head-right-click  .right-click-basket")

myBasket.onclick = function () {
    headMyBoss.classList.add("right-click-active")
    headMyBossMiniBox.classList.add("right-basket-active")
    headMyBossMini.onclick = function () {
        headMyBossMiniBox.classList.remove("right-basket-active")
        headMyBoss.classList.remove("right-click-active")

    }
}

var myClickIcon1 = document.querySelector(".responsive-right .icon1")
var myClickIcon2 = document.querySelector(".responsive-right .icon2")
var searchClickBig = document.querySelector(".search-click-big")
var searchClickMini = document.querySelector(".responsive-right .search-click")

myClickIcon1.addEventListener("click", function () {
    this.classList.add("icon-1-active")
    myClickIcon2.classList.add("icon-2-active")
    searchClickMini.classList.add("sc-active")
    searchClickBig.classList.add("sac-active")
})

myClickIcon2.addEventListener("click", function () {
    myClickIcon1.classList.remove("icon-1-active")
    myClickIcon2.classList.remove("icon-2-active")
    searchClickMini.classList.remove("sc-active")
    searchClickBig.classList.remove("sac-active")
})

searchClickBig.addEventListener("click", function () {
    myClickIcon1.classList.remove("icon-1-active")
    myClickIcon2.classList.remove("icon-2-active")
    searchClickMini.classList.remove("sc-active")
    searchClickBig.classList.remove("sac-active")
})

const tabs = document.querySelectorAll("#section-top .tab")
const items = document.querySelectorAll("#section-top .item")
// const grids = document.querySelectorAll(".grid")

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const filter = tab.getAttribute("data-filter");

        items.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.classList.remove("figure-active")
            } else {
                item.classList.add("figure-active")
            }
        })
    })
})

let button = document.querySelector(".btn-scroll")
button.onclick = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
});
window.onscroll = () => window.scrollY > 500 ? button.style.transform.translateX("0px") : button.style.transform.translateX("-20px")

var number1 = document.querySelector('.one-one')
var number2 = document.querySelector('.one-two')
var number3 = document.querySelector('.one-three')
var number4 = document.querySelector('.one-four')

number1.value = 0
number2.value = 0
number3.value = 0
number4.value = 0
setInterval(() => {
    if (number1.value < 360) {
        number1.value++
        number1.innerHTML = number1.value + '+'
    }
}, 0);

setInterval(() => {
    if (number2.value < 650) {
        number2.value++
        number2.innerHTML = number2.value + '+'
    }
}, 0);

setInterval(() => {
    if (number3.value < 1200) {
        number3.value++
        number3.innerHTML = number3.value + '+'
    }
}, 0);

setInterval(() => {
    if (number4.value < 100) {
        number4.value++
        number4.innerHTML = number4.value + '%'
    }
}, 0);


