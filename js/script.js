console.log("Welcome to Shas Methods");
/* =====================================================
   SHAS METHODS
   script.js
   Phase 1
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       PRELOADER
    =========================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        if (preloader) {

            preloader.style.opacity = "0";

            setTimeout(() => {

                preloader.style.display = "none";

            }, 500);

        }

    });

    /* ===========================
       MOBILE MENU
    =========================== */

    const mobileMenu = document.querySelector(".mobile-menu");
    const navbar = document.querySelector(".navbar");

    if (mobileMenu && navbar) {

        mobileMenu.addEventListener("click", () => {

            navbar.classList.toggle("show");

        });

    }

    /* ===========================
       SMOOTH SCROLL
    =========================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ===========================
       STICKY HEADER
    =========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#000";

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

        } else {

            header.style.background = "rgba(0,0,0,.9)";

            header.style.boxShadow = "none";

        }

    });

    /* ===========================
       BACK TO TOP
    =========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===========================
       SCROLL ANIMATION
    =========================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(
        ".about, .categories, .products, .premium-banner, .why-us, .newsletter, .contact"
    ).forEach(section => {

        observer.observe(section);

    });

    /* ===========================
       NEWSLETTER
    =========================== */

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", function(e) {

            e.preventDefault();

            alert("Thank you for subscribing!");

            this.reset();

        });

    }

});
