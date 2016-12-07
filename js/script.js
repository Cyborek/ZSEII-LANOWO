$(document).ready(function(){
	var click_sound = new Audio("click.wav");
	$("#menu-button").click(function(){
		click_sound.play();
		$(this).css("display","none");
		$("#cross-button").css("display","block");
		$("#nav").animate({width:"toggle"},500);
	});
	$("#cross-button").click(function(){
		click_sound.play();
		$(this).css("display","none");
		$("#menu-button").css("display","block");
		$("#nav").animate({width:"toggle"},500);
	});
});