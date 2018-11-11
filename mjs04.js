console.log("connected!");


const box= document.querySelector(".box");
box.addEventListener("click", function(){
    this.classList.toggle("opening");
//    setTimeout(()=>{
//     this.classList.toggle("open");
//    },500)
})
box.addEventListener("click", function(){
    this.classList.toggle("open");
})