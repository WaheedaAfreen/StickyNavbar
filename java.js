const start= document.querySelector(".start");
 const final = document.querySelector(".final");

 console.log(start.offsetHeight);

 console.log(final.offsetTop);

window.addEventListener("scroll", () =>{


    if (window.scrollY > final.offsetTop - start.offsetHeight-50){

        start.classList.add("active")
    }else{
        start.classList.remove("active")
    }
});