$(function() {
	previousEvent = "";

	$('.k-tl-p1-drawer--open__wrapper').hide();

	$('.k-tl-p1-drawer--open__close-button').click(function(event) {
		if (previousEvent !== "close") {
			var buttonId = event.target.id;
			var selectorForOpenDrawer = 'div#' + buttonId + ".k-tl-p1-drawer--open__wrapper";
			var selectorForClosedDrawer = 'div#' + buttonId + ".k-tl-p1-drawer--closed";

			if ($(selectorForOpenDrawer).is(":visible")) {
				previousEvent = "close";
				$(selectorForOpenDrawer).toggle("slide", { direction: "right" } );
				$(selectorForClosedDrawer).delay(200).toggle("fade");
			}
		}

		event.stopImmediatePropagation();
		event.preventDefault();
	});

	$('.k-tl-p1-drawer--closed').click(function(event) {
		if (previousEvent !== "open") {
			var hookId = event.target.id;
			var selectorForOpenDrawer = 'div#' + hookId + ".k-tl-p1-drawer--open__wrapper";
			var selectorForClosedDrawer = 'div#' + hookId + ".k-tl-p1-drawer--closed";
			var currentEventPid = $(this).data('id-pid');

			// Ensure the top of the event is in view for iPad
			var valueToScroll = $("section#" + currentEventPid).offset().top;
			$("html, body").scrollTop(valueToScroll - 120);

			if ($(selectorForClosedDrawer).is(":visible")) {
				previousEvent = "open";
				$(selectorForClosedDrawer).toggle("fade", { duration: 200 });
				$(selectorForOpenDrawer).delay(100).toggle("slide", { direction: "right" } );
			}
		}

		event.stopPropagation();
		event.preventDefault();
	});
});
