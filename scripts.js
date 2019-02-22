
$(document).ready(function(){

  function textBeGone(){
    console.log("should be gone...")
    $('.triangle h1').fadeOut(2000);
  }

  var x= function testIfInView(){
    var darkBackground= document.getElementById('dark1').getBoundingClientRect();
    console.log(darkBackground);
    if(darkBackground.top<=0){
      textBeGone();
    } else{
      console.log("Not yet")
    }
  }

  window.addEventListener('scroll',x);

})
