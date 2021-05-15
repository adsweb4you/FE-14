let next =  document.querySelector(".next");
let prev =  document.querySelector(".prev");

let item = document.querySelectorAll(".slider-item");
// შემდეგი სლაიდი 
next.addEventListener("click", function(){
   
// აქტიური სლაიდი
let active =  document.querySelector(".active");

if (active.nextElementSibling != null) {
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
}else{
    active.classList.remove("active");
    item[0].classList.add("active");
}
    
})