 
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

 let finded  =  myages.filter(forea);

function forea(element){
   return element < 100;
}

 console.log(finded);

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