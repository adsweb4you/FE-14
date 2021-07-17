
interface meth {
  select() : void;
  store() : void;
  update() : void;
  delete() : void;

}



class User {

    private username : string = "superadmin";
    private passwor : any = "SDF32_23-04%238YU_!@";
    private token : any = "sal;fj32u4894576y8ydhsgrhtgkl;fhgj4-03858";


    private seassionId = sessionStorage.getItem('token');


    name:string = 'ადმინ';
    avatar : string =  "img/bird.png";
    role: string = "super admin"


    login(username:string , pass:any){

      if(!this.auth()){
              if(username == this.username && pass == this.passwor){
        sessionStorage.setItem('token', this.token);
      }else{
        document.getElementById("outs").innerText = "მომხმარებელი ვერ მოიძებნა";
      }
      }else{
        alert("თქვენ უკვე დალოგინებული ხართ")
      }
     

 
      }

      auth(){
         if(this.seassionId == this.token){
           return true;
         }
         return false;
      }

  }

class Superadmin extends User implements meth{
  
  select(){

  }

  store(){

  }

  update(){

  }

  delete(){

  }

}

class Adminstritaror extends User {

}

let user = new User();


function checklogin(e:any){
    e.preventDefault();

    let usename : any = document.getElementById("user") as HTMLInputElement;
    let pass : any = document.getElementById("pass") as HTMLInputElement;

  

    user.login(usename.value, pass.value)
}
 

 