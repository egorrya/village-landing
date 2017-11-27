

$(document).ready(function(){

	

	// animate css

	$(".main-nav__items").animated("fadeInLeft");
	$(".home-section__title").animated("flash");
	$(".menu__item").animated("slideInLeft");

	// counter for 10000 sec

	$('.waiting__counter').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');

		$({ countNum: $this.text()}).animate({
			countNum: countTo
		},

		{
			duration: 10000000,
			easing:'linear',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
			}
		});
	});
});