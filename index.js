const slider = document.querySelectorAll(".slide-in");
const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -100px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions);
// this is an html collection so we convert to array
Array.from(slider).forEach((slider) => {
	appearOnScroll.observe(slider);
});
