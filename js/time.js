
 

 

 

 


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