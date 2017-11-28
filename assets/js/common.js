
$(document).ready(function(){

	// animate css

	$(".main-nav__items").animated("fadeInLeft");
	$(".home-section__title").animated("flash");
	$(".menu__item").animated("fadeInUp");
	$(".cart__options").animated("slideInRight");

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