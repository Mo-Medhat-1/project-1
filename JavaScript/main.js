const slideContainer = document.querySelector('.slider-container');
const slidesWrapper = slideContainer.querySelector('.slides-wrapper');
const slideIndicators = slideContainer.querySelector('.slide-indicators');

const slides = slidesWrapper.getElementsByTagName('img');
const totalSlides = slides.length;
let currentSlide = 0;
let interval;

function createIndicators() {
	for (let i = 0; i < totalSlides; i++) {
		const indicator = document.createElement('span');
		indicator.classList.add('indicator');
		indicator.setAttribute('data-slide', i);
		indicator.addEventListener('click', navigateToSlide);
		slideIndicators.appendChild(indicator);
	}
	updateIndicators();
}

function updateIndicators() {
	const indicators = slideIndicators.getElementsByClassName('indicator');
	for (let i = 0; i < indicators.length; i++) {
		indicators[i].classList.remove('active');
	}
	indicators[currentSlide].classList.add('active');
}

function navigateToSlide(event) {
	clearInterval(interval);
	const targetSlide = Number(event.target.getAttribute('data-slide'));
	currentSlide = targetSlide;
	slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
	updateIndicators();
}

function startAutoSlide() {
	interval = setInterval(() => {
		currentSlide = (currentSlide + 1) % totalSlides;
		slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
		updateIndicators();
	}, 3000);
}

createIndicators();
startAutoSlide();



let span = document.querySelector(".up");

window.onscroll = function () {
	this.scrollY >= 800 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
	const scrollTop = document.documentElement.scrollTop;
	el.style.width = `${(scrollTop / height) * 100}%`;
});
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	const slides = document.getElementsByClassName("slide");

	if (n >= slides.length) {
		slideIndex = 0;
	} else if (n < 0) {
		slideIndex = slides.length - 1;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex].style.display = "block";
}

setInterval(() => {
	changeSlide(1);
}, 3000);
var speechText = document.getElementById("speech-text");
speechText.textContent = "adsgsfdh]dfpkhpodfsmjhopdfakjpodsrtjr جديد";