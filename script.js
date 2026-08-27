/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".project-card, .service-card, .stack-item, .process-card, .principle"
);


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   STAGGER ANIMATIONS
========================================================= */

const groups = [

    ".project-card",
    ".service-card",
    ".stack-item",
    ".process-card",
    ".principle"

];


groups.forEach(selector => {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${(index % 6) * 0.08}s`;

    });

});


/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
========================================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(6,16,24,0.94)";

    } else {

        header.style.background =
            "rgba(6,16,24,0.78)";

    }

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight = 75;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   AUTOMATION CARD — SUBTLE LIVE ANIMATION
========================================================= */

const workflowNodes =
    document.querySelectorAll(".workflow-node");


workflowNodes.forEach((node, index) => {

    setInterval(() => {

        node.style.boxShadow =
            "0 0 0 1px rgba(120,239,192,0.12)";

        setTimeout(() => {

            node.style.boxShadow = "none";

        }, 500);

    }, 3500 + (index * 500));

});