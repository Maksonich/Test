window.addEventListener("load", function (){
    document.querySelector(".block-burger-menu").addEventListener("click", function (e){
       document.querySelector(".block-burger-menu").classList.toggle("menu-active")
       document.querySelector("header").classList.toggle("menu-burger-active")
       document.querySelector("main").classList.toggle("blur")
    })
})