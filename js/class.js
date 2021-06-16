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
