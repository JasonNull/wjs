'use strict';

$(function() {
	function resize() {
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 992;
		$("#ad-carousel .carousel-inner > .item").each(function(i, item) {
			var $item = $(item);
			var imgSrc = isSmallScreen ? $item.data("image-xs") : $item.data("image-lg");
			$item.css("backgroundImage", "url('" + imgSrc + "')");
			if (isSmallScreen) {
				$item.css("backgroundImage", "none");
				// $item.css("height","auto");
				$item.html("<img src = ' " + imgSrc + " '/>");
			} else {
				// $item.css("height","410px");
				$item.empty();
			}
		});
	}
	$(window).on("resize", resize).trigger("resize");
	$('[data-toggle="tooltip"]').tooltip();

	function reTabsWidth() {
		var $tabsWrapper = $("#products .tab-wrapper");
		var tabsWidth = 30;
		var containerWdith = $("#products .container").width();
		$(".tab-wrapper > .nav-tabs").children().each(function(index, element) {

			tabsWidth += element.clientWidth;

		});
		var tabsWidth = tabsWidth > containerWdith ? tabsWidth : containerWdith;
		$(".tab-wrapper > .nav-tabs").css("width", tabsWidth + "px");
		if (tabsWidth > containerWdith) {
			$tabsWrapper.css("overflow-x", "scroll");
		} else {
			$tabsWrapper.css("overflow", "visible");
		}

	}

	$(window).on("resize", reTabsWidth).trigger("resize");
	var $newsTitle = $(".news-title");
	$("#news .nav-stacked a").on("click", function() {
		var $this = $(this);
		var title = $this.data("title");
		$newsTitle.text(title);
	});
	var corpWidth = 20;
	$("#corp-partners  li").each(function(i, item) {
		var $item = $(item);
		corpWidth += $(item).width() + 15;
	});
	$("#corp-partners .nav").css("width", corpWidth);
	var $carousels = $(".carousel");
	var startX, endX;
	var offset = 50;
	$carousels.on("touchstart", function(e) {
		startX = e.originalEvent.touches[0].clientX;
		//console.log(startX);
	});
	$carousels.on("touchmove", function(e) {
		endX = e.originalEvent.touches[0].clientX;
		//console.log(endX);
	})
	$carousels.on("touchend", function() {
		var distance = Math.abs(endX - startX);
		if (distance > offset) {
			console.log(endX > startX ? "->" : "<-");
			$carousels.carousel(endX > startX ? "prev" : "next");
		}

	})


});