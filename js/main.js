"use strict";

document.addEventListener(
	"DOMContentLoaded",
	function () {
		// Video bg anim
		setInterval(() => {
			document.querySelector(".video-bg").classList.add("is-active");
		}, 500);

		// Burger
		if (document.querySelector(".burger")) {
			let burgerWrap = document.querySelector(".burger");
			let burgerToggle = document.querySelector(".burger__toggle");
			let menu = document.querySelector(".menu");

			burgerWrap.onclick = function () {
				burgerToggle.classList.toggle("is-active");
			};
		}

		// Sctoll to top button
		if (document.querySelector(".scroll-top")) {
			let mybutton = document.querySelector(".scroll-top");

			window.onscroll = function () {
				scrollFunction();
			};

			function scrollFunction() {
				if (
					document.body.scrollTop > 20 ||
					document.documentElement.scrollTop > 20
				) {
					mybutton.classList.add("is-show");
				} else {
					mybutton.classList.remove("is-show");
				}
			}

			// New Click Function
			mybutton.addEventListener("click", function () {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			});
		}
		// Close all popups function
		function CloseAll() {
			document.addEventListener("click", function (e) {
				let its_button = document.querySelectorAll(".global-btn");
				let its_menu = document.querySelectorAll(".global-div");

				if (
					!e.target.classList.contains("global-btn") &&
					!e.target.classList.contains("global-div")
				) {
					for (let i of its_menu) {
						i.classList.remove("is-active");
					}
					for (let i of its_button) {
						i.classList.remove("is-active");
					}
				}
			});
		}

		CloseAll();
	},
	false,
); // <--------------------> //
