(function($){
	"use strict";

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Navbar Search
	$(".others-option .search-btn").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

	// Performance Specifications Image Slides
	$('.performance-specifications-image-slides').owlCarousel({
		items: 1,
		dot: true,
		nav: false,
		loop: true,
		autoplay: true,
		animateOut: 'fadeOut',
		autoplayHoverPause: false
	});

	// Feedback Slides
	$('.feedback-slides').owlCarousel({
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ph-bold ph-arrow-left'></i>",
			"<i class='ph-bold ph-arrow-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	
	// Pricing Plan JS
	$("#js-contcheckbox").change(function() {
		if(this.checked) {
		  $('.js-montlypricing').css('display', 'none');
	  $('.js-yearlypricing').css('display', 'block');
		  $('.afterinput').addClass('text-success');
		  $('.beforeinput').removeClass('text-success');
		} else {
		  $('.js-montlypricing').css('display', 'block');
		  $('.js-yearlypricing').css('display', 'none');
		  $('.afterinput').removeClass('text-success');
		  $('.beforeinput').addClass('text-success');
		}
	});

	// Testimonial Slides JS
	$(".testimonial-slider").owlCarousel({
		dots: false,
		loop: true,
		margin:25,
		nav: true,
		autoplay: true,
		autoplayTimeout: 2000,
		items: 1,
		navText: ['<i class="ph-bold ph-arrow-left"></i>', '<i class="ph-bold ph-arrow-right"></i>'],
		
	});
	$('.testimonial-slider-two').owlCarousel({
		loop: true,
		nav: true,
		thumbs: true,
		dots: false,
		thumbsPrerendered: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: ['<i class="ph-bold ph-arrow-right"></i>', '<i class="ph-bold ph-arrow-left"></i>'],
	});
	$(".testimonial-slider-three").owlCarousel({
		dots: true,
		loop: true,
		margin: 25,
		nav: false,
		items: 1,
		autoplay: true,
		autoplayTimeout: 2000,
	});

	// Project Slides JS
	$(".project-slider-item").owlCarousel({
		dots: true,
		loop: true,
		margin: 25,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 2000,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			},
			1200:{
				items:5,
			}
		}
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

	// Preloader
	$(window).on('load', function() {
		$('.preloader-area').addClass('deactivate');
	});

}(jQuery));

//----- Price Range Slider JS-----
function rangeSlider() {
	let slider = document.querySelectorAll(".range-slider");
	let range = document.querySelectorAll(".range-slider-range");
	let value = document.querySelectorAll(".range-slider-value");
  
	slider.forEach((currentSlider) => {
	  value.forEach((currentValue) => {
		let val = currentValue.previousElementSibling.getAttribute("value");
		currentValue.innerText = val;
	  });
  
	  range.forEach((elem) => {
		elem.addEventListener("input", (eventArgs) => {
		  elem.nextElementSibling.innerText = eventArgs.target.value;
		});
	  });
	});
  }
rangeSlider();

// Counter Js
if ("IntersectionObserver" in window) {  
	let counterObserver = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
			let counter = entry.target;
			let target = parseInt(counter.innerText);
			let step = target / 200;
			let current = 0;
			let timer = setInterval(function () {
				current += step;
				counter.innerText = Math.floor(current);
				if (parseInt(counter.innerText) >= target) {
				clearInterval(timer);
				}
			}, 10);
			counterObserver.unobserve(counter);
			}
		});
	});
	let counters = document.querySelectorAll(".counter");
	counters.forEach(function (counter) {
		counterObserver.observe(counter);
	});
}
// Counter Js
if ("IntersectionObserver" in window) {  
	let counterObserver = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
			let counter = entry.target;
			let target = parseInt(counter.innerText);
			let step = target / 200;
			let current = 0;
			let timer = setInterval(function () {
				current += step;
				counter.innerText = Math.floor(current);
				if (parseInt(counter.innerText) >= target) {
				clearInterval(timer);
				}
			}, 10);
			counterObserver.unobserve(counter);
			}
		});
	});
	let counters = document.querySelectorAll(".counter");
	counters.forEach(function (counter) {
		counterObserver.observe(counter);
	});
}

// Projects Js
var getslide = $('.main-box li').length - 1;

var slidecal = 100/getslide+'%';

$('.box').css({"width": slidecal});

$('.box').hover(function(){
	$('.box').removeClass('active');
$(this).addClass('active');
});

// Light & Dark JS
try {
	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('ladiv_theme', themeName);
		document.documentElement.className = themeName;
	}
	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('ladiv_theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}
	
	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('ladiv_theme') === 'theme-dark') {
			setTheme('theme-dark');
			document.getElementById('slider').checked = false;
		} else {
			setTheme('theme-light');
		document.getElementById('slider').checked = true;
		}
	})();
} catch (err) {}

// ScrollCue
scrollCue.init();