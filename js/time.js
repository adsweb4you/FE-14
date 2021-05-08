
 

 

 

 


function getTimeRemaining(){
    const total = Date.parse("2021/05/10") - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
   
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
   
    };
  }

  let diff = getTimeRemaining();
 

  setInterval(function(){
    let d = new Date();
    time.innerHTML = d.getFullYear() + " / " + (d.getMonth() + 1) + " / " + d.getDate() + " | " + d.getHours() + " : " + d.getMinutes() + ":" + d.getSeconds();

  }, 1000)


  let nam  = 65;

  if(nam == 64 && nam > 40  || nam > 100){
      console.log("ჭეშმარიტია");
  }else if(nam < 100){
     console.log("ჭეშმარიტია 1");
  }else if(nam < 60){
    console.log("ჭეშმარიტია");
 }else{
    console.log("მცდარია");
  }
 
  var t;

(nam == 65  ?  t = 7 : t = 45)

console.log(t);


let Blogs = [

  {title:"ბლოგის სახელი", descr:"ბლოგის აღწერა სრული ან არასრული ბლოგის აღწერა სრული ან არასრული",   img:"img/slider.png", created_at:new Date('2021/05/8'), cat_id:5,active:true, views:500},
  {title:"ბლოგის სახელი2", descr:"ბლოგის აღწერა სრული ან არასრული2", img:"img/spons.png", created_at:new Date('2021/05/1'), cat_id:8,active:false, views:50}

]

function checdate(dat){
  let d = new Date();
  if(d.getDate() == dat.getDate() && d.getMonth() == dat.getMonth()){
    var create = `<span class="badge bg-success">დამატებულია დღეს</span>`
  }else{
    var create = `<span class="badge bg-danger">${dat.getFullYear()} / ${dat.getMonth() + 1} / ${dat.getDate()}  </span>`
  }
  return create;
}

 

let pits = document.getElementById("pits");

function blogview(blogs){

  if(blogs.descr.length > 50 && blogs.active && blogs.views <= 1000){
    var vies = `<span class="badge bg-primary">აუცილებლად წასაკითხი</span>`
  }else{
    var vies = ''
  }
    


  let htmls = `<div class="col-md-4">
   <div class="card">
  <img src="${blogs.img}" style="height:450px; object-fit:cover" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${blogs.title}</h5>
    <p class="card-text"> ${blogs.descr} </p>
     ${checdate(blogs.created_at)}
     ${vies} 
   </div>
  </div>
</div>`

pits.innerHTML += htmls;

}

Blogs.forEach(blogview);


let animals = document.querySelectorAll("h1");


//let animals = document.querySelectorAll("h1:not(.dogs)"); css სელექტორი მასივი სახით 
//let animals = document.querySelector("h1:not(.dogs)"); css სელექტორი პირველივე ელენტი
//let animals = document.getElementById("h1:not(.dogs)");   სელექტორი პირველივე ელენტი id
//let animals = document.getElementsByClassName("h1:not(.dogs)"); სელექტორი მასივი სახით  კლასი
//let animals = document.getElementsByTagName("h1:not(.dogs)"); სელექტორი მასივი სახით  ტეგი

 



function changetext(){
  for (let i = 0; i < animals.length; i++) {
  const element = animals[i];
  
  if(element.innerText.search("S") != -1){
      element.innerText = element.innerText.replace("S", "");
      element.innerText += " შინაური ცხოველია" 
  }else{
    element.innerText += " გარეული ცხოველია" 
  }
}
}

function reloads(){
  for (let i = 0; i < animals.length; i++) {
  const element = animals[i];
  
 
      element.innerText = element.innerText.replace("შინაური ცხოველია", "");
      element.innerText = element.innerText.replace("გარეული ცხოველია", "");
 
}
}

 
let input  = document.getElementById("values");

function icnr(){
  input.value++;
}

function decr(){
  if (input.value >= 2) {
      input.value--;
  }

}