var _ua, url;

_ua = (function() {
	var Chrome, IE, IE10, IE6, IE7, IE8, IE9, Safari, Webkit, ltIE6, ltIE7, ltIE8, ltIE9;
	IE = document.uniqueID;
	ltIE6 = typeof window.addEventListener === void 0 && typeof document.documentElement.style.maxHeight === void 0;
	ltIE7 = typeof window.addEventListener === void 0 && typeof document.querySelectorAll === void 0;
	ltIE8 = typeof window.addEventListener === void 0 && typeof document.getElementsByClassName === void 0;
	ltIE9 = IE && typeof window.Worker === void 0;
	IE6 = IE && ltIE6;
	IE7 = IE && ltIE7 && !ltIE6;
	IE8 = IE && ltIE8 && !ltIE7 && !ltIE6;
	IE9 = IE && ltIE9 && !ltIE8 && !ltIE7 && !ltIE6;
	IE10 = IE && !ltIE9 && !ltIE8 && !ltIE7 && !ltIE6;
	Webkit = !document.uniqueID && !window.opera && !window.sidebar && !window.orientation && window.localStorage;
	Safari = Webkit && navigator.vendor.search(/apple/i) !== -1;
	Chrome = Webkit && navigator.vendor.search(/google/i) !== -1;
	return {
		IE: IE,
		ltIE6: ltIE6,
		ltIE7: ltIE7,
		ltIE8: ltIE8,
		ltIE9: ltIE9,
		IE6: IE6,
		IE7: IE7,
		IE8: IE8,
		IE9: IE9,
		IE10: IE10,
		Firefox: window.sidebar,
		Opera: window.opera,
		Webkit: Webkit,
		Safari: Safari,
		Chrome: Chrome,
		Mobile: window.orientation
	};
})();

url = (function() {
	var href, i, j, k, l, len, length, localRegex, path, ref, val, workRegex;
	href = location.href.split('/');
	localRegex = /^\d+\.\d+\.\d+\.\d+/;
	workRegex = /^.*\/work\/[^\/]+\/.*$/;
	for (i = k = 0, len = href.length; k < len; i = ++k) {
		val = href[i];
		if (val === '' || i === href.length - 1 && val.indexOf('.')) {
			href.splice(i, 1);
		}
	}
	if (localRegex.test(location.hostname) === true || location.hostname.indexOf('localhost') !== -1) {
		length = 2;
	} else if (workRegex.test(location.href) === true) {
		length = 3;
	} else {
		length = 1;
	}
	path = '';
	for (j = l = 0, ref = length; 0 <= ref ? l <= ref : l >= ref; j = 0 <= ref ? ++l : --l) {
		path += href[j];
		if (j === 0) {
			path += '//';
		} else {
			path += '/';
		}
	}
	return path;
})();

jQuery.extend(jQuery.easing, {
	easeInOutCirc: function(x, t, b, c, d) {
		if ((t /= d / 2) < 1) {
			return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		}
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	}
});

$(function() {
	var $class, $id, footerHeight, headerinnerHeight, nav, navHeight, showFlag;
	$id = $('body').attr('id');
	$class = $('body').attr('class');

	if ($id === undefined) {
		$class = '';
	}
	if ($class === undefined) {
		$class = '';
	}

	var percent, rightNav;
	percent = 0.2;
	rightNav = $(".right-nav");
	rightNav.hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > $("#container").height() * percent) {
			rightNav.fadeIn();
		} else {
			rightNav.fadeOut();
		}
	});

	/*スムーススクロール*/
	$(document).ready(function(){

		var urlHash = location.hash;

		if(urlHash) {

			$('body,html').stop().scrollTop(0);
			setTimeout(function () {

				scrollToAnker(urlHash) ;
			}, 100);
		}


		$('a[href^="#"]').click(function() {

			var href= $(this).attr("href");

			var hash = href == "#" || href == "" ? 'html' : href;

			scrollToAnker(hash);
			return false;
		});

		function scrollToAnker(hash) {
			var target = $(hash);
			var position = target.offset().top - $("#header").outerHeight();
			$('body,html').stop().animate({scrollTop:position,}, 500);
		}
	})
});