let display=document.querySelector(".display")
let list=document.getElementById("list")
let options=document.querySelectorAll(".options")
let para=document.querySelector(".para")
display.onclick=()=>{
    list.classList.toggle("hide")
}
// for ( let option of options){

//     option.onclick=()=>{
// display.innerHTML=option.innerHTML;
//     }
// }

// options.forEach(option => {
//     option.addEventListener("click",()=>{
//         display.innerHTML=option.innerHTML;
//     })
    
// });
//THIS TWO ABOVE ALSO APPPLICABLE ,WE CAN CHOOSE LOOPS ACC TO OUR PREFRENCES

for ( let option of options){
    option.addEventListener("click",()=>{
        display.innerHTML=option.innerHTML;
        list.classList.toggle("hide")
    })
         
    }