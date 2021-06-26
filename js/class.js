import  {getpost}  from './module/formvalidate.js'


class User {

    constructor(names, email, role, age){
        this.names = names;
        this.email = email;
        this.role = role;
        this.age = age;
    }


    checkadmin(rol){
        return `ჩემი სახელი არის ${this.names},  მე ვარ ${rol} `;
    }
 
}

let user = new User("შალვა", "shalva@itstep.ge", "admin", 25);

 

class Slider {
    constructor(config){
        this.config = config;
    }


    changerColor(){
        document.querySelector(".demo").style.backgroundColor = this.config.color;
        document.querySelector(".demo").style.width = this.config.width;
        document.querySelector(".demo").innerText =  this.config.text;


        // for (let i = 0; i < config.props; i++) {
        //     const element = config.props[i];
        //     document.querySelector(".demo").style.element.color = element.width;
        // }

        let prop  = Object.keys(this.config.css);
        let vals  = Object.values(this.config.css);
   
          for (let i = 0; i < prop.length; i++) {
              const props = prop[i];
              const val = vals[i];

              document.querySelector(".demo").style[props] = val;
              
          }
               
    }


    init(){
        return this.changerColor();
    }


}

let slider = new Slider({
    color:"green",
    width:"250px",
    text:"ჩემი პირველი კლასი",
    css:{
         "color":"white",
         "borderRadius":"50px",
         "border":"7px solid red",
    },
})


slider.init();


let ts = {
    name1:"sad"
}

let test1 = "color";

console.log(document.querySelector(".demo").style[test1])



class Animals {
    constructor(name){
      this.name = name;
    }

    eat(){
      console.log('ჩემი ძაღლი იყეფება');
    }


    get retname(){
        return this.name;
    }

    set retname(y){
      this.name  = y;
    }

}


class Dog extends Animals{
   
    constructor(name){
        super(name);
    }

    
    eat(){
        super.eat();
        console.log('ჩემი ძაღლი კნავის');
      }

}


let dogs = new Dog("ნაგაზი");


dogs.retname = "ჩიხუახუა";


 console.log(dogs.retname);


 let form = document.querySelector('.contform');

 form.addEventListener("submit", function (e) {
     e.preventDefault();

    //  let name1 = document.querySelector('#name1');
    //  let name2 = document.querySelector('#name2');
    //  let name3 = document.querySelector('#name3');
      let out = document.querySelector('#output');
    //  validate(name1,name2, name3, out)

    getpost('https://jsonplaceholder.typicode.com/posts', out );
    getpost('https://jsonplaceholder.typicode.com/users/1/albums', out );

   })



 
   let minejson = ["1", "3" ,"345t" ,  "54", "65y7"];
  
     let myobj = JSON.stringify(minejson);

     let minejs = JSON.parse(myobj);

   console.log(minejs)