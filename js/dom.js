 
//  let text = "მომხმარებელი ვერ მოიძებნა";
 
//  let tag = `<div class="alert alert-danger alerd-rem"> ${text} </div>`;
 
 
 


//  let numb = [1,2,3,"სტრინგი", ["სახელი1", "სახელი2", "სახელი32"], tag, {title:tag}];

// console.log(numb[numb.length - 1]) 


// let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018, 2022"]}]

// //document.getElementById("test").innerHTML = numb[6].title;

// let age = [18,25,45,87,"სდფსდფსერტ", "s" ];

// age.pop(); //ახალი ელემენტის წაშლა მასივის ბოლო ელემენტად
// age.shift(); //ახალი ელემენტის წაშლა მასივის პირველ ელემენტად
// age.push(450); //ახალი ელემენტის ჩამატება მასივის ბოლო ელემენტად
// age.unshift(4050);  //ახალი ელემენტის ჩამატება მასივის პირველ ელემენტად



// for (let i = 0; i < age.length; i++){
//    let age2 =  age[i];
//    document.getElementById("test").innerHTML += age2 + "<br>";
// }

// let myages = [15, 45, 30, 11150, 70, 90, 521];

// // console.log(myages.sort(sortable).reverse());

 

// // ------ მოქმედებები მასივზე   ------ //

 
// // მასივის სორტირება
// // myages.sort(sortable)
// // function sortable(x, y){
// //    return x - y;
// // }
// //.reverse() // შებრუნება სორტირების

// // მასივის დაბეჭვდა 
// //  myages.forEach(forea);

// // ქმნის ახალ მასივს და აბრუნებს ელემენტებს პირობის მიხედვით
// //myages.filter(forea);

// //  აბრუნებს პირველივე  ელემენტებს პირობის მიხედვით
// //myages.find(forea);

// // ამოწმებს მასივს ერთ-ერთი ელემენტი თუ მაინც აკმაყოფილებს პირობას
// // myages.some(forea);

// //ამოწმებს მასივს ყველა ელემენტი თუ მაინც აკმაყოფილებს პირობას
// //myages.every(forea);

// let Students = [
//    {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ნინო ნიკა 2", age:25, stipend:false, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ვაკო", age:25, stipend:false, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ზურა", age:25, stipend:false, regdate:"25/06/2011", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"შორენა", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"გიო", age:25, stipend:false, regdate:"25/06/2019", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"შალვა", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
//    {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899}
// ];


//  let stipstudent = Students.filter(checkstip);

//  function checkstip(arrr){
//     return arrr.stipend == true;
//  }

 
 


// let stud = document.getElementById("students");

 

// // სტიპენდიანტები
// let checks = document.getElementById("stipend");

// checks.addEventListener("change", function(e){

   
//    stud.innerHTML = '';

//    if(!this.checked){
//          Students.forEach(outstudents)
//    }else{
//          stipstudent.forEach(outstudents)
//    }
// })
// // 

// let searc = document.getElementById("search");

// searc.addEventListener("input", function(e){

//  let vals = this.value;

//    let seearchedstu = Students.filter(sear);

//    function sear(arrr){
//       return !arrr.name.search(vals);
//    }
 
//    stud.innerHTML = '';

 
//    seearchedstu.forEach(outstudents)
 
// })
// // 

// Students.forEach(outstudents);

// function outstudents(studen){

//    if(studen.stipend){
//       var stip = '<span class="badge d-block  bg-success">სტიპენდიანტი</span>';
//    }else{
//       var stip = '<span class="badge d-block  bg-danger">ოროსანი</span>';
//    }

//    stud.innerHTML += `<div class="col-lg-4 mb-3"><div class="card">
//    <img src="${studen.avatar}" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title">${studen.name}</h5>
//      <p class="card-text">ტელ-ნომერი : ${studen.phone}</p>
//      <p class="btn btn-primary">ასაკი: ${studen.phone} </p>
//      ${stip}
//    </div>
//   </div>
//  </div>`
// }


 

// let d = new Date();
 
//  console.log(d)

// function calc(){
//    let leng = document.querySelector("#val1").value;
//    let width = document.querySelector("#val2").value;
//    let height = document.querySelector("#val3").value;
//    let message = document.querySelector("#output");
//    let form = document.querySelector("form");
//    let allinput = document.querySelectorAll("form.col-md-4 input");

   
//    let calc = (leng * width * height) * 20;

//       for (let i = 0; i < allinput.length; i++) {
//          const inpt = allinput[i];
//         // inpt.value = ''
//        // inpt.removeAttribute('type');
//        console.log(inpt.getAttribute('data-id'));
//       }
//    if (isNaN(calc)) {
//       message.innerHTML =  "შეიყვანეთ სწორი მნიშვნელობა ";


//    }else{
//       message.innerHTML = calc + " ₾ ";
//    }


//   // form.classList
//    //console.log(form.classList.replace("bg-danger", "bg-success"));
  
//     if(form.style.backgroundColor == "red"){
//       form.style.backgroundColor = "green";
//      }else{
//       form.style.backgroundColor = "red";
//      }
//    }

// setInterval(() => {
//    let form = document.querySelector("form");
//    if(form.style.backgroundColor == "red"){
//       form.style.backgroundColor = "green";
//     }else{
//       form.style.backgroundColor = "red";
//     }
// }, 1000);

 
 

// let mybtn = document.querySelector(".search");
// let input = document.querySelector("input");
// let icons = document.querySelector(".icons");
// mybtn.addEventListener("click", function(){

//  this.classList.toggle("show");
//  input.classList.toggle("show");

//  if (icons.innerHTML == '<i class="bi bi-x-lg"></i>') {
//    icons.innerHTML = '<i class="bi bi-search"></i>';  
//  }else{
//    icons.innerHTML = '<i class="bi bi-x-lg"></i>';  
//  }



// })

// let form = document.querySelectorAll("form");

 
// let registerbtn  = document.querySelector(".btn-primary");
// let logbtn  = document.querySelector(".btn-success");
// registerbtn.addEventListener("click", function(){

//   form[0].classList.add("right");
//   form[1].classList.add("left");
// })


// logbtn.addEventListener("click", function(){

//   form[0].classList.remove("right");
//   form[1].classList.remove("left");
// })


// let img  = document.createElement("img");
// let h1  = document.createElement("h1");
// img.setAttribute('src', 'img/slider.png');
// img.setAttribute('alt', 'შექმნილი იმიჯი');
// img.classList.add("img-fluid");

// h1.textContent = "საცდელი ტექსტი";

// let htmsl = document.getElementById("out");

//  htmsl.appendChild(img);
 
//  htmsl.appendChild(h1);


//  let newinput = document.querySelector(".btn-warning");

//  newinput.addEventListener("click", function(){
//  let input = document.createElement("input");
//  let div = document.createElement("div");
//  div.classList.add("form-group");
//  input.classList.add("form-control");
//  input.setAttribute('type', 'number'); 

//  div.appendChild(input)

//  htmsl.appendChild(div);

//  })

 
   let btn = document.querySelector('.btn-danger');
   let p = document.querySelectorAll('p');
btn.addEventListener("click", function(){


  let active = document.querySelectorAll(".active");   
  if(active[0].nextElementSibling != null){
  active[0].classList.remove("active");
  active[0].nextElementSibling.classList.add("active")
  }else{
  active[0].classList.remove("active");
  p[0].classList.add("active");
 }


});



 