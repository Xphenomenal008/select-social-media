let display=document.querySelector(".display")
let listItem=document.querySelectorAll(".options")
let listCointaner=document.querySelector("#list")
let para=document.querySelector(".para")
display.addEventListener("click",()=>{
list.classList.toggle("hide")
})
listItem.forEach((options)=>{
    options.addEventListener("click",()=>{
        para.innerHTML=options.innerHTML
        list.classList.toggle("hide")
    })
   
})