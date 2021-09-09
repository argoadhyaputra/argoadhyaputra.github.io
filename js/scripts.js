$(document).ready(function(){
	$('.show').on('click', function() {
		if($(window).width() > 992) {
			var menu = $(this).attr('id');
			if(menu == 'web') {
				if($('.web').hasClass('showskil')) {
					$('.web').addClass('hideskil');
					$('.web').removeClass('showskil');
					setTimeout(function(){
						$('.web').addClass('d-lg-none');
						$('.web').removeClass('d-lg-inline');
					},1100)
				} else {
					$('.web').removeClass('d-lg-none');
						$('.web').addClass('d-lg-inline');
					$('.web').addClass('showskil');
					$('.web').removeClass('hideskil');
				}
			} else {
				if($('.design').hasClass('showskil')) {
					$('.design').addClass('hideskil');
					$('.design').removeClass('showskil');
					setTimeout(function(){
						$('.design').addClass('d-lg-none');
						$('.design').removeClass('d-lg-inline');
					},1100)
				} else {
					$('.design').removeClass('d-lg-none');
						$('.design').addClass('d-lg-inline');
					$('.design').addClass('showskil');
					$('.design').removeClass('hideskil');
				}
			}
		}

		if($(window).width() < 992) {
			var menu = $(this).attr('id');
			if(menu == 'web') {
				if($('.skilshow').hasClass('showskilV')) {
					$('.web').addClass('hideskilV');
					$('.web').removeClass('showskilV');
					setTimeout(function(){
						$('.web').addClass('dnonemd');
						// $('.web').addClass('webbs');
						// $('.web').removeClass('d-lg-inline');
					},1100)
				} else {
					$('.web').removeClass('dnonemd');
					$('.web').addClass('showskilV');
					$('.web').removeClass('hideskilV');
				}
			} else {
				if($('.design').hasClass('showskilV')) {
					$('.design').addClass('hideskilV');
					$('.design').removeClass('showskilV');
					setTimeout(function(){
						$('.design').addClass('dnonemd');
					},1100)
				} else {
					$('.design').removeClass('dnonemd');
					$('.design').addClass('showskilV');
					$('.design').removeClass('hideskilV');
				}
			}
		}
	})
});


$('.pagelink').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elementujuan = $(tujuan);
	console.log(elementujuan.offset().top)
	$('html,body').animate({
		scrollTop: elementujuan.offset().top - 90
	},1000, 'swing');
	// console.log('ok')
	e.preventDefault();
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// about
	if(wScroll > $('#about').offset().top - 100 && wScroll < $('#about').offset().top + 300) {
		// $('.about').removeClass('hideabout');
			// $('.aboutimg').removeClass('hideaboutimg');
		$('.about').addClass('showabout');
		$('.aboutimg').addClass('showaboutimg');
		setTimeout(function(){
			$('.about').removeClass('hideabout');
			$('.aboutimg').removeClass('hideaboutimg');
		}, 1000);
		// console.log('ok')

	}

	if(wScroll < $('#about').offset().top - 500 ) {
		setTimeout(function(){
			$('.about').removeClass('showabout');
			$('.aboutimg').removeClass('showaboutimg');
		}, 500);
		// console.log('hidesss')
	}

	if(wScroll > $('.expert').offset().top) {
		$('.about').addClass('hideabout');
		$('.aboutimg').addClass('hideaboutimg');
		setTimeout(function(){
			$('.about').removeClass('showabout');
			$('.aboutimg').removeClass('showaboutimg');
		}, 500);
		// console.log('hide')
	}


	// expertin
	if(wScroll > $('.expert').offset().top - 200 && wScroll < $('.expert').offset().top + 500) {
		$('.oc1').addClass('showoc1');
		$('.oc2').addClass('showoc2');
		$('.expertimg').addClass('showexpertimg');
		// $('.aboutimg').addClass('showaboutimg');
		setTimeout(function(){
			$('.oc1').removeClass('hideoc1');
			$('.oc2').removeClass('hideoc2');
			$('.expertimg').removeClass('hideexpertimg');
		}, 500);
		console.log('ok')
	}

	if(wScroll < $('.expert').offset().top - 300 ) {
		$('.oc1').addClass('hideoc1');
		$('.oc2').addClass('hideoc2');
		$('.expertimg').addClass('hideexpertimg');
		setTimeout(function(){
			$('.oc1').removeClass('showoc1');
			$('.oc2').removeClass('showoc2');
			$('.expertimg').removeClass('showexpertimg');
		}, 200);
		console.log('hidesss')
	}

	if(wScroll > $('.dillus').offset().top) {
		$('.oc1').addClass('hideoc1');
		$('.oc2').addClass('hideoc2');
		$('.expertimg').addClass('hideexpertimg');
		setTimeout(function(){
			$('.oc1').removeClass('showoc1');
			$('.oc2').removeClass('showoc2');
			$('.expertimg').removeClass('showexpertimg');
		}, 500);
		// console.log('hide')
	}



	// WORKS

	if(wScroll > $('.dillus').offset().top - 200 && wScroll < $('.dillus').offset().top + 500) {
		$('.dillus').addClass('showdillus');
		$('.dillus').addClass('showdillus');
		$('.dillusimgthumb').each(function(i){
			setTimeout(function(){
				$('.dillusimgthumb').eq(i).addClass('showdillusimgthumb');
			},300 * ( i+1 ));
		})
		// $('.expertimg').addClass('showexpertimg');
		// // $('.aboutimg').addClass('showaboutimg');
		// setTimeout(function(){
		// 	$('.dillus').removeClass('hidedillus');
		// 	$('.dillus').removeClass('hidedillus');
		// 	$('.expertimg').removeClass('hideexpertimg');
		// }, 1500);dillusimgthumb
		console.log('ok')
	}

	if(wScroll < $('.dillus').offset().top - 500 ) {
		// setTimeout(function(){
			$('.dillus').removeClass('showdillus');
			$('.dillus').removeClass('showdillus');
		// }, 500);
		$('.dillusimgthumb').each(function(i){
			setTimeout(function(){
				$('.dillusimgthumb').eq(i).removeClass('showdillusimgthumb');
			},300 * ( i+1 ));
		})
		// console.log('hidesss')
	}

	// if(wScroll > $('.dillus').offset().top) {
	// 	// $('.oc1').addClass('hideoc1');
	// 	// $('.oc2').addClass('hideoc2');
	// 	// $('.expertimg').addClass('hideexpertimg');
	// 	// setTimeout(function(){
	// 	// 	$('.oc1').removeClass('showoc1');
	// 	// 	$('.oc2').removeClass('showoc2');
	// 	// 	$('.expertimg').removeClass('showexpertimg');
	// 	// }, 500);
	// 	console.log('hide')
	// }


})