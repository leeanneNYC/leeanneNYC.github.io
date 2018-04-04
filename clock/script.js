$(document).ready(function() {

  setTimeout(function(){
  	 $(".wake-up-text") .addClass("show");
  	 $(".w4") .addClass("alarming");
  	 $(".carroll") .addClass("alarming");
  	 $(".min") .addClass("alarming");
  	 $(".min2") .addClass("alarming");
  	 $(".button") .addClass("alarming");
  	 $(".e") .addClass("alarming");
  	 $(".f") .addClass("alarming");
  	 $(".hour") .addClass("remove");
  	 $(".minute") .addClass("remove");
  	 $(".second") .addClass("remove");
  	 $(".train") .addClass("remove");
  	 //$("body").addClass("alarming");

  }, 3000);


  	$(".button").click(function(){;
  	$(".wake-up-text").removeClass("show");
  	$("body").removeClass("alarming");
  	$(".w4").removeClass("alarming");
  	$(".carroll") .removeClass("alarming");
  	$(".min").removeClass("alarming");
  	$(".min2") .removeClass("alarming");
  	$(".button").removeClass("alarming");
  	$(".e").removeClass("alarming");
  	$(".f").removeClass("alarming");
  	$(".hour") .removeClass("remove");
  	$(".minute") .removeClass("remove");
  	$(".second") .removeClass("remove");
  	$(".train") .removeClass("remove");

  });

});