advantagesSwiper = new Swiper(".swiper-container", {
	grabCursor: true,
	spaceBetween: 0,
	slidesPerView: 1,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 2,
		},
		993: {
			slidesPerView: 3,
		},
	},
});
