window.addEventListener("load", function (){

    document.querySelector(".burger").addEventListener("click", function(){
        document.querySelector(".burger").classList.toggle("active-burger-menu")
        document.querySelector("#wrapper").classList.toggle("no-scroll")
        document.querySelector("header").classList.toggle("active-menu-burger")
    })
    
})