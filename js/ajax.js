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
    url:"resp.html",
    data:{"name":"nikoloz"},
    dataType:"text",
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
 




});