// Carousel functionality
document.addEventListener(
	"DOMContentLoaded",
	function () {
		const carouselItems =
			document.querySelectorAll(".carousel-item");
		let currentIndex = 0;

		function showNextSlide() {
			carouselItems[
				currentIndex
			].classList.remove("active");
			currentIndex =
				(currentIndex + 1) % carouselItems.length;
			carouselItems[currentIndex].classList.add(
				"active"
			);
		}

		// Auto-rotate every 5 seconds
		setInterval(showNextSlide, 5000);

		// Smooth scrolling for navigation links
		const navLinks = document.querySelectorAll(
			".nav-links a"
		);
		navLinks.forEach((link) => {
			link.addEventListener(
				"click",
				function (e) {
					e.preventDefault();
					const targetId =
						this.getAttribute("href");
					const targetSection =
						document.querySelector(targetId);
					targetSection.scrollIntoView({
						behavior: "smooth",
					});
				}
			);
		});

		// Hamburger menu toggle
		const hamburger =
			document.querySelector(".hamburger");
		const navMenu =
			document.querySelector(".nav-links");

		hamburger.addEventListener("click", () => {
			navMenu.classList.toggle("active");
			hamburger.classList.toggle("active");
		});

		// Close menu when clicking outside
		document.addEventListener("click", (e) => {
			if (
				!hamburger.contains(e.target) &&
				!navMenu.contains(e.target)
			) {
				navMenu.classList.remove("active");
				hamburger.classList.remove("active");
			}
		});

		// Close menu when clicking on a link
		document
			.querySelectorAll(".nav-links a")
			.forEach((link) => {
				link.addEventListener("click", () => {
					navMenu.classList.remove("active");
					hamburger.classList.remove("active");
				});
			});

		// CTA button functionality (placeholder)
		const primaryCta = document.querySelector(
			".primary-cta"
		);
		const secondaryCta = document.querySelector(
			".secondary-cta"
		);
		const ctaNav =
			document.querySelector(".cta-nav");

		function handleAssessment() {
			alert(
				"Starting your free mind assessment... (This would open a questionnaire)"
			);
		}

		function handleMeetCoaches() {
			document
				.getElementById("experts")
				.scrollIntoView({ behavior: "smooth" });
		}

		primaryCta.addEventListener(
			"click",
			handleAssessment
		);
		ctaNav.addEventListener(
			"click",
			handleAssessment
		);
		secondaryCta.addEventListener(
			"click",
			handleMeetCoaches
		);

		// FAQ accordion functionality
		const faqQuestions =
			document.querySelectorAll(".faq-question");

		faqQuestions.forEach((question) => {
			question.addEventListener("click", () => {
				const faqItem = question.parentElement;
				const isActive =
					faqItem.classList.contains("active");

				// Close all FAQ items
				document
					.querySelectorAll(".faq-item")
					.forEach((item) => {
						item.classList.remove("active");
					});

				// Open clicked item if it wasn't already active
				if (!isActive) {
					faqItem.classList.add("active");
				}
			});
		});

		// Add fade-in animation on scroll
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver(
			function (entries) {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = "1";
						entry.target.style.transform =
							"translateY(0)";
					}
				});
			},
			observerOptions
		);

		const sections =
			document.querySelectorAll(".section");
		sections.forEach((section) => {
			section.style.opacity = "0";
			section.style.transform =
				"translateY(20px)";
			section.style.transition =
				"opacity 0.6s ease-out, transform 0.6s ease-out";
			observer.observe(section);
		});

		// Navbar scroll effect
		const navbar =
			document.querySelector(".navbar");
		let lastScrollTop = 0;

		window.addEventListener("scroll", () => {
			const scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop;

			if (scrollTop > 50) {
				navbar.classList.add("scrolled");
			} else {
				navbar.classList.remove("scrolled");
			}

			lastScrollTop = scrollTop;
		});
	}
);
