$(document).ready(function(){

	// animate css

	$(".main-nav__items").animated("fadeInLeft");
	$(".home-section__title").animated("flash");
	$(".menu__item").animated("fadeInLeft");
	$(".cart__options").animated("slideInLeft");

	$('input.ShowOrHide').click(function() {

		var checked = $("input.ShowOrHide:checked");

		if (checked.length == 0) {
			$("div.ShowOrHide").show();
		} else {
			$("div.ShowOrHide").hide();
			$('div#' + $(this).val()).show();
		}
	});
});