$(".languageus").mouseover(function(){
    $(".languageothers").css({"display":"block"})
    // $(".languageus").css({"display":"none"})
})
$(".languageothers").mouseleave(function(){
    $(".languageothers").css({"display":"none","transition":"10s"})
    $(".languageus").css({"display":"block"})
})

$(".drop").mouseover(function(){

    $(".drop").css({"border-radius":"40px 40px 10px 10px"})
})

$(".drop").mouseleave(function(){

    $(".drop").css({"border-radius":"40px"})
})

$(".drop").click(function(){
    $(".drop").css({"border-radius":"40px 40px 10px 10px"})
    $(".dropped").stop().addClass("active").slideToggle()
})
$(".size-drop").mouseover(function(){

    $(".size-drop").css({"border-radius":"40px 40px 10px 10px"})
})
$(".size-drop").mouseleave(function(){

    $(".size-drop").css({"border-radius":"40px"})
})
$(".size-drop").click(function(){
    $(".sizedrop").css({"border-radius":"40px 40px 10px 10px"})
    $(".size-dropped").stop().addClass("active").slideToggle()
}) 
$(".home-drop").mouseover(function(){
    $(".home-dropped").css({"display":"block"})
})
$(".element-drop").mouseover(function(){
    $(".element-dropped").css({"display":"block"})
})
// $(".home-drop").mouseleave(function(){
//     $(".home-dropped").css({"display":"none"})
// })

$(".home-dropped").mouseleave(function(){
    $(".home-dropped").css({"display":"none"})
})

$(".element-dropped").mouseleave(function(){
    $(".element-dropped").css({"display":"none"})
})
$(window).scroll(function(){
    if($(window).scrollTop()>20){
      $(".header").addClass("colorzilla")}
      else{ $(".header").removeClass("colorzilla")}
      
     
    
  })

  $('.ecophotos').slick();

 
  $(window).scroll(function(){
    if($(window).scroll()>7000){
      $(".polo-shirt").addClass("polo-after")}
      else{ $(".polo-shirt").removeClass("polo-after")}
      
     
    
  })


  $(".pone").click(function(){
    
      $(".buy").removeClass("buy-active")
      
      $(".free").removeClass("read-active")
      
      $(".discount").removeClass("read-active")
      $(".some").removeClass("read-active")
      $(".title").removeClass("read-active")

      $(".pone").css({"color":"black"})
      $(".ptwo").css({"color":"#b6b6b6"})
      $(".pthree").css({"color":"#b6b6b6"})
      $(".pfour").css({"color":"#b6b6b6"})
      $(".pfive").css({"color":"#b6b6b6"})
      
      
  })

  $(".ptwo").click(function(){
    $(".buy").addClass("buy-active")
    $(".free").addClass("read-active")
    $(".discount").removeClass("read-active")
    $(".some").removeClass("read-active")
    $(".title").removeClass("read-active")

    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"black"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"#b6b6b6"})
    
    
})

$(".pthree").click(function(){
    $(".buy").addClass("buy-active")
    $(".free").removeClass("read-active")
    $(".discount").addClass("read-active")
    $(".some").removeClass("read-active")
    $(".title").removeClass("read-active")

    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"black"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"#b6b6b6"})
    
    
})

$(".pfour").click(function(){
    $(".buy").addClass("buy-active")
    $(".free").removeClass("read-active")
    $(".discount").removeClass("read-active")
    $(".some").addClass("read-active")
    $(".title").removeClass("read-active")

    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"black"})
    $(".pfive").css({"color":"#b6b6b6"})

    
    
})

$(".pfive").click(function(){
    $(".buy").addClass("buy-active")
    $(".free").removeClass("read-active")
    $(".discount").removeClass("read-active")
    $(".some").removeClass("read-active")
    $(".title").addClass("read-active")

    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"black"})

    
    
})
$(".pone").mouseover(function(){
    $(".pone").css({"color":"black"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"#b6b6b6"})

})
$(".ptwo").mouseover(function(){
 
    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"black"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"#b6b6b6"})
    
})
$(".pthree").mouseover(function(){
  
    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"black"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"#b6b6b6"})
    
})
$(".pfour").mouseover(function(){
    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"black"})
    $(".pfive").css({"color":"#b6b6b6"})
    
})
$(".pfive").mouseover(function(){
 
    $(".pone").css({"color":"#b6b6b6"})
    $(".ptwo").css({"color":"#b6b6b6"})
    $(".pthree").css({"color":"#b6b6b6"})
    $(".pfour").css({"color":"#b6b6b6"})
    $(".pfive").css({"color":"black"})
})
$(".related-post").addClass("related-active")

$(".related-comment").click(function(){
    $(".related-post").removeClass("related-active")
    $(".related-comment").addClass("related-active")

})

$(".related-post").click(function(){
    $(".related-post").addClass("related-active")
    $(".related-comment").removeClass("related-active")

})



$(".tshirt-text1").mouseover(function(){
    $(".tshirt-words4").addClass("tshirt-words4-active")
})


$(".related-comment").click(function(){
    $(".polo-comments").addClass("polo-comments-active")
    $(".polo-middle").addClass("polo-middle-active")
})

$(".related-post").click(function(){
    $(".polo-comments").removeClass("polo-comments-active")
    $(".polo-middle").removeClass("polo-middle-active")  
})

$(".urname").click(function(){
    $(".urname").addClass("urname-active")
    $(".uremail").removeClass("uremail-active")
    $(".sometext").removeClass("sometext-active")
})



$(".uremail").click(function(){
    $(".uremail").addClass("uremail-active")
    $(".urname").removeClass("urname-active")
    $(".sometext").removeClass("sometext-active")
})

$(".sometext").click(function(){
    $(".sometext").addClass("sometext-active")
    $(".uremail").removeClass("uremail-active")
    $(".urname").removeClass("urname-active")
  
})









  



  
