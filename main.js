// Get Slider Items
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
	// Create The LI
	var paginationItem = document.createElement('li');

	// Set Custom Attribute
	paginationItem.setAttribute('data-index', i);

	// Set Item Content
	paginationItem.appendChild(document.createTextNode(i));

	// Append Items to The Main Ul List
	paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {
	paginationsBullets[i].onclick = function () {
		currentSlide = parseInt(this.getAttribute('data-index'));
		theChecker();
	};
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
	if (nextButton.classList.contains('disabled')) {
		return false;
	} else {
		currentSlide++;
		if (currentSlide > slidesCount) {
			currentSlide = 1;
		}
		theChecker();
	}
}

// Previous Slide Function
function prevSlide() {
	if (prevButton.classList.contains('disabled')) {
		return false;
	} else {
		currentSlide--;
		if (currentSlide < 1) {
			currentSlide = slidesCount;
		}
		theChecker();
	}
}

// Create The Checker Function
function theChecker() {
	slideNumberElement.textContent = 'News ' + currentSlide + ' of ' + slidesCount;

	removeAllActive();

	sliderImages[currentSlide - 1].classList.add('active');
	paginationCreatedUl.children[currentSlide - 1].classList.add('active');

	if (currentSlide === 1) {
		prevButton.classList.add('disabled');
	} else {
		prevButton.classList.remove('disabled');
	}

	if (currentSlide === slidesCount) {
		nextButton.classList.add('disabled');
	} else {
		nextButton.classList.remove('disabled');
	}
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
	sliderImages.forEach(function (img) {
		img.classList.remove('active');
	});

	paginationsBullets.forEach(function (bullet) {
		bullet.classList.remove('active');
	});
}

// Automatic Slide Transition
var interval;
var delay = 4000;

startSlider();

function startSlider() {
	interval = setInterval(nextSlide, delay);
}

function pauseSlider() {
	clearInterval(interval);
}

sliderImages.forEach(function (img) {
	img.addEventListener('mouseenter', pauseSlider);
	img.addEventListener('mouseleave', startSlider);
});

nextButton.addEventListener('mouseenter', pauseSlider);
nextButton.addEventListener('mouseleave', startSlider);
prevButton.addEventListener('mouseenter', pauseSlider);
prevButton.addEventListener('mouseleave', startSlider);






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

