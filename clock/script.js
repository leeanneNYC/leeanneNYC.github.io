$(document).ready(function() {

  setTimeout(function(){
  	 $(".wake-up-text") .addClass("alarming");
  	 $(".w4") .addClass("alarming");
  	 $(".min") .addClass("alarming");
  	 $(".button") .addClass("alarming");
  	 $(".e") .addClass("alarming");
  	 //$("body").addClass("alarming");

  }, 1000);


  	$(".button").click(function(){
  	$(".wake-up-text").removeClass("alarming");
  	$("body").removeClass("alarming");
  	$(".w4").removeClass("alarming");
  	$(".min").removeClass("alarming");
  	$(".button").removeClass("alarming");
  	$(".e").removeClass("alarming");

  });

});