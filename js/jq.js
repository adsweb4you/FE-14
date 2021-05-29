$(function () {
//  start

//  $(".hiden").click(function (e) {
//      $(".jqs").fadeOut(3000)
//  })

//  $(".show").click(function (e) {
//     $(".jqs").fadeIn(3000)
// })
 


// $(".showhide").click(function (e) {
//     $(".jqs").fadeToggle(3000)
// })
 


// $(".hiden").click(function (e) {
//     $(".jqs").hide(3000, function () {
         
//     })
// })

// $(".show").click(function (e) {
//    $(".jqs").show(3000)
// })

// $(".showhide").click(function (e) {
//    $(".jqs").toggle(3000)
// })



// // $(".hiden").click(function (e) {
// //     $(".jqs").css({
// // "background-color": "blue",
// // "border-radius":"40px",
// // "padding":"2rem",

// //     })
// // })

// // $(".show").click(function (e) {
// //    $(".jqs").attr('style', '');
// // })

// // $(".showhide").click(function (e) {
// //    $(".jqs").slideToggle(3000)
// // })


// $(window).scroll(function () { 
//   let scrolls =  $(this).scrollTop();
//   let calcblur  = (scrolls / 100) + "px";
 
//   $("header").css("filter", 'blur('+ calcblur +')')
// });

// });

 
// $("#myytext").on("input", function (e) { 
  
//   let length = $(this).val().length;
//   $(".character").text(length);
 
//   $(".round").css("stroke-dasharray", ' '+ length  + ' 999 ');

//   if(length <= 250){
//     $("#myytext").attr("maxlength", "")
//      if (length > 200 && length < 220) {
//     $(".round").css("stroke", 'yellow');
//   }else if(length > 220){
//     $(".round").css("stroke", 'red');
//   } 
//   }else{
//     $("#myytext").attr("maxlength", "250")
//   }







  $(".animate").click(function () { 

 
    $(".animate").animate({
      "width":"450px",
      "height":"550px",
      "border-radius":"3%"

    }, 600, function () {
        $(".animate i").animate({
          "opacity": "0",
          "left": "-100%"
        }, 1000, function () {
           $("form").animate({
             "opacity": "1",
             

           });
           $("form").css({"transform":"scale(1)",  "display": "block",  "pointer-events": "all"})
        })
    })
    
  });


  $(".btn").click(function () { 
   
  $(".btn").animate({
    // ობიექტი
    "border-radius": "50px",
  },
 
  600, //ანიმაციის დრო  
  


  function () {
      //ქოლბექ ფუნქცია (როდესაც ანიმაცია მთავრდება)
      alert("ღილაკს ფერი შეეცვალა!")
  })
    
  });
 
});