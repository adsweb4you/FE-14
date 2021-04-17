var y,x,z;

const filesize = 5;

y = "<p class='test'> ნინო </p>";
 
x = 15;
z = 50;

var z = 80;
 
let l = "s";
l = "m";

//let str = 'sjakdhasjk%23-=21430';
let numb = 78;
let bool = true;
let boolfal = false;
let array = ['asasd', 78, true, false];
let obj = {names:"test"};
let unde = undefined;
let func = function name(){};
let nulls = null;
let nan = NaN;
//document.getElementById("test").innerText = y;
//document.getElementById("test").innerHTML = x * z ;

console.log();
 

let src = 'img/slider.png';
let cls = 'img-fluid';
let text = "ტექსტი \"ტესტს\" ";



let html = '<img src="' + src + '" class="'+ cls +'">';
let p = '<p>' + "ტექსტი" + '</p>';

let htmls = `<div class="${cls}"><p> ${text} </p> </div>`

document.getElementById("test").innerHTML  = htmls;

let str = "მე   ვარ  it   step   სტუდენტი  step    სტუდენტი";

// ითვლის სიმბოლოების რაოდენობას  + სიცარიელე
//str.length

// ეძებს სიმბოლოებს სტრინგლის ბოლოდან
//str.lastIndexOf

// ეძებს სიმბოლოებს სტრინგლის დასაწყისიდან
//str.IndexOf

// ეძებს სიმბოლოებს სტრინგლის დასაწყისიდან
//str.search

//სტრინგის დაჭრა მარცხნიდან (პარამეტრი რამდენი სიმბოლოც უნდა მოჭრას) 
//str.slice(15)

//სტრინგის დაჭრა მარჯვნიდან (პარამეტრი რამდენი სიმბოლოც უნდა დატოვოს) 
//str.slice(-15)

//სტრინგის დაჭრა ორივე მხრიდან (პარამეტრი 1, მარცხნიდან | პარამეტრი მოერე მარჯვნიდან) 
//str.slice(15, 4)

//ანაცვლებს სტრიქონებს სხვა მნიშვნელობით
//str.replace(/სტუდენტი/g, "დოქტორი")

//სტრინგის სიმბოლოების დიდ ასოზე გადაყვანა
//str.toUpperCase();



//სტრინგის სიმბოლოების პატარა ასოზე გადაყვანა
//str.toLowerCase();

 
// function vals(val){
//    let nwval =  val.trim();
//     document.getElementById("leus").innerText = nwval;
// }

let ss = window.location.pathname;

console.log(str[5])