let next =  document.querySelector(".next");
let prev =  document.querySelector(".prev");

let item = document.querySelectorAll(".slider-item");

let switc = document.querySelectorAll(".switch span")

let activespam = document.querySelectorAll(".switch span");

// შემდეგი სლაიდი 
next.addEventListener("click", function(){
   
// აქტიური სლაიდი
let active =  document.querySelector(".active");


// სლაიდერის გადართვა
if (active.nextElementSibling != null) {
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
}else{
    active.classList.remove("active");
    item[0].classList.add("active");
}

// სლაიდერის გადასართავის გადართვა
let activesw = document.querySelector(".switch span.active");

if (activesw.nextElementSibling != null) {
    activesw.classList.remove("active");
    activesw.nextElementSibling.classList.add("active");
}else{
    activesw.classList.remove("active");
    activespam[0].classList.add("active");
}

    
});




// წინა  სლაიდი 
prev.addEventListener("click", function(){
   
    // აქტიური სლაიდი
    let active =  document.querySelector(".active");
    
    if (active.previousElementSibling != null) {
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active");
    }else{
        active.classList.remove("active");
        item[item.length - 1].classList.add("active");
    }

    // სლაიდერის გადასართავის გადართვა
let activesw = document.querySelector(".switch span.active");

if (activesw.previousElementSibling != null) {
    activesw.classList.remove("active");
    activesw.previousElementSibling.classList.add("active");
}else{
    activesw.classList.remove("active");
    activespam[activespam.length - 1].classList.add("active");
}
        
});



//  გადასართავი ღილაკები

 

 for (let i = 0; i < switc.length; i++) {
     const els = switc[i];

     els.addEventListener("click", function(){

        // აქტიური სლაიდი
     let active =  document.querySelector(".active");
     active.classList.remove("active");




     let activesw = document.querySelector(".switch span.active");
     let datasldie  = this.getAttribute('data-slide');
     activesw.classList.remove("active");
     this.classList.add("active");
     item[datasldie].classList.add("active");
     })
     
 }

 let interval = document.querySelector(".slider-container").getAttribute('data-interval');
 
 if (interval != "false") {
      setInterval(function(){


    // აქტიური სლაიდი
let active =  document.querySelector(".active");


// სლაიდერის გადართვა
if (active.nextElementSibling != null) {
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
}else{
    active.classList.remove("active");
    item[0].classList.add("active");
}

// სლაიდერის გადასართავის გადართვა
let activesw = document.querySelector(".switch span.active");

if (activesw.nextElementSibling != null) {
    activesw.classList.remove("active");
    activesw.nextElementSibling.classList.add("active");
}else{
    activesw.classList.remove("active");
    activespam[0].classList.add("active");
}


 }, interval);


 }

 let lists = document.querySelectorAll(".portfolio li");
 
 
 for (let s = 0; s < lists.length; s++) {
     const li = lists[s];
     

     li.addEventListener("click", function(){
        let actlis = document.querySelector(".portfolio li.active");
        let actdiv = document.querySelector(".texts.active");

        actlis.classList.remove("active");
        actdiv.classList.remove("active");

        let clas = li.getAttribute('data-class');
        document.querySelector(clas).classList.add("active");

     
        
        this.classList.add("active");
     });

 }


 let scrs = document.querySelector(".scrl");
 let sc = document.querySelector(".btn-ss");
 sc.addEventListener("click", function(){
 
    scrs.scrollBy(20,20);
 })    
 

 

 let burger = document.querySelector(".burger");
 let menu = document.querySelector('.burgermenu');

 burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    this.classList.toggle("clicked");
    setTimeout(function () {
        menu.classList.toggle("anim");
    }, 500)

 })


 