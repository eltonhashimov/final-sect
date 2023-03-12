let button=document.querySelector("button")
button.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ?  button.style.transform.translateX("0px") : button.style.transform.translateX("-20px")