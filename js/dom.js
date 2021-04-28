 
 let text = "მომხმარებელი ვერ მოიძებნა";
 
 let tag = `<div class="alert alert-danger alerd-rem"> ${text} </div>`;
 
 
 


 let numb = [1,2,3,"სტრინგი", ["სახელი1", "სახელი2", "სახელი32"], tag, {title:tag}];

console.log(numb[numb.length - 1]) 


let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018, 2022"]}]

//document.getElementById("test").innerHTML = numb[6].title;

let age = [18,25,45,87,"სდფსდფსერტ", "s" ];

age.pop(); //ახალი ელემენტის წაშლა მასივის ბოლო ელემენტად
age.shift(); //ახალი ელემენტის წაშლა მასივის პირველ ელემენტად
age.push(450); //ახალი ელემენტის ჩამატება მასივის ბოლო ელემენტად
age.unshift(4050);  //ახალი ელემენტის ჩამატება მასივის პირველ ელემენტად



for (let i = 0; i < age.length; i++){
   let age2 =  age[i];
   document.getElementById("test").innerHTML += age2 + "<br>";
}

let myages = [15, 45, 30, 11150, 70, 90, 521];

// console.log(myages.sort(sortable).reverse());

 

// ------ მოქმედებები მასივზე   ------ //

 
// მასივის სორტირება
// myages.sort(sortable)
// function sortable(x, y){
//    return x - y;
// }
//.reverse() // შებრუნება სორტირების

// მასივის დაბეჭვდა 
//  myages.forEach(forea);

// ქმნის ახალ მასივს და აბრუნებს ელემენტებს პირობის მიხედვით
//myages.filter(forea);

//  აბრუნებს პირველივე  ელემენტებს პირობის მიხედვით
//myages.find(forea);

// ამოწმებს მასივს ერთ-ერთი ელემენტი თუ მაინც აკმაყოფილებს პირობას
// myages.some(forea);

//ამოწმებს მასივს ყველა ელემენტი თუ მაინც აკმაყოფილებს პირობას
//myages.every(forea);

let Students = [
   {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ნინო ნიკა 2", age:25, stipend:false, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ვაკო", age:25, stipend:false, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ზურა", age:25, stipend:false, regdate:"25/06/2011", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"შორენა", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"გიო", age:25, stipend:false, regdate:"25/06/2019", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"შალვა", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899},
   {name:"ნინო", age:25, stipend:true, regdate:"25/06/2018", avatar:"https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png", phone:55847899}
];


 let stipstudent = Students.filter(checkstip);

 function checkstip(arrr){
    return arrr.stipend == true;
 }

 
 


let stud = document.getElementById("students");

 

// სტიპენდიანტები
let checks = document.getElementById("stipend");

checks.addEventListener("change", function(e){

   
   stud.innerHTML = '';

   if(!this.checked){
         Students.forEach(outstudents)
   }else{
         stipstudent.forEach(outstudents)
   }
})
// 

let searc = document.getElementById("search");

searc.addEventListener("input", function(e){

 let vals = this.value;

   let seearchedstu = Students.filter(sear);

   function sear(arrr){
      return !arrr.name.search(vals);
   }
 
   stud.innerHTML = '';

 
   seearchedstu.forEach(outstudents)
 
})
// 

Students.forEach(outstudents);

function outstudents(studen){

   if(studen.stipend){
      var stip = '<span class="badge d-block  bg-success">სტიპენდიანტი</span>';
   }else{
      var stip = '<span class="badge d-block  bg-danger">ოროსანი</span>';
   }

   stud.innerHTML += `<div class="col-lg-4 mb-3"><div class="card">
   <img src="${studen.avatar}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${studen.name}</h5>
     <p class="card-text">ტელ-ნომერი : ${studen.phone}</p>
     <p class="btn btn-primary">ასაკი: ${studen.phone} </p>
     ${stip}
   </div>
  </div>
 </div>`
}


 