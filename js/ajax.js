$(function () {
    

// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
        
//     }
// });    


$(".nav-link").click(function (e) { 
    e.preventDefault();
 $.ajax({
    type:"GET",
    url: $(this).attr('href'),
    // data:{"name":"nikoloz"},
    // dataType:"text",
    // success:function (resp) {
    //   $(".htms").html(resp);
    // },
    
}).done(function (response) {
 
    $(".htms").html(response);
}).fail(function (response) {
   
    $(".htms").html("გვერდი ვერ მოიძებნა");
})  

// $(".htms").load("resp.html");

});
 


// $("p").css("color", "red");

// $("p").each( function (index, element) { 
    
//    // console.log(index);

//      if (element.innerText == "კონტენტ 2") {
//         element.style.color = "red"
//      }else{
//         element.style.color = "green"
//      }
// });

 

});