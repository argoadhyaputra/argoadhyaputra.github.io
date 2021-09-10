$(document).ready(function(){

$('.pagelink').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elementujuan = $(tujuan);
	$('html,body').animate({
		scrollTop: elementujuan.offset().top - 35
	},1000, 'swing');
	e.preventDefault();
});

})