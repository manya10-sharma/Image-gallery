let scrollcont = document.querySelector(".gallery");
let back = document.querySelector("#left");
let next = document.querySelector("#right");

scrollcont.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollcont.scrollLeft += e.deltaY;
});

back.addEventListener("click",()=>{
     scrollcont.scrollLeft -= 900
})

next.addEventListener("click",()=>{
     scrollcont.scrollLeft += 900
})