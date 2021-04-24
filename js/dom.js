 
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

 
