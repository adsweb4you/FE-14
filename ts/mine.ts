let x = 25; //js
let y : number = 25;
let z : number = 45;

let r : number | boolean | string = "sad";

// იუზერის თვისებები აღწერა
interface User {

    names: string;
    age:number;
    admin:boolean;
 
}


let myobj : User = {
    names :"sdasd",
    age :23,
    admin :false,
}

function myname(user : string, age:number, role:string){
   return user + age + role;
}


myname("admin", 25, "role");


let studentArray : string[] | number [] | object = ["sd",{name:"tewst"} ,12 ];


// function myname(user : User){
//     return user.names + user.age + user.admin;
// }

// console.log(myname({names:"nika", age:24, admin:true}));


let form = document.getElementById("forms");
let outp : any = document.getElementById("outs");
form.addEventListener("submit", (e) => {
   e.preventDefault();

   let val1 = document.getElementById("val1") as HTMLInputElement;
   let val2 = document.getElementById("val2") as HTMLInputElement;

   outp.innerHTML = Number(val1.value) * Number(val2.value);
  

})



interface Animal {
    title: string;
    jump: () => void; 
}


class Dog implements Animal {

    title = "NAME";

    constructor(name: string){
        this.title = name;
    }

    jump(){
        console.log( this.title);
    }

}

let dogs = new Dog("ჯეკა");

dogs.jump();


enum Status {
    NotFound   = "404",
    ServerError   = "500",
    Ok = "200",
 
}

let Respstatus : Status = Status.ServerError


console.log(Respstatus);



abstract class Color {
    red : string;
    blue:string;

    private name: string = "shako";
    private password : any = "sa;flkl32924u8_";
    private token : string = "2190832091uusadhfdjsgf"


   private secretColor  : string  = "black" ;

    constructor(color1: string, color2: string,  ){
        this.red = color1;
        this.blue = color2;
       
    }

 protected  retxco(){
       return this.secretColor;
   }

}

class Black extends Color {

    constructor(red:string, blue:string){
        super(red, blue);
    
    }
    
    accesColor(){
       return super.retxco();
    }

}


let mycolor  = new Black("red", "blue");

console.log(mycolor.accesColor())