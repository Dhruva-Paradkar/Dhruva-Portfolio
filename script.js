/* =====================================================
   DHruva PARADKAR PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    /*
        This is a frontend-only form.

        It opens the user's email application
        with the message prepared.
    */

    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name
        );

    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        `mailto:dhruvaparadkar06@gmail.com?subject=${subject}&body=${body}`;


    formMessage.textContent =
        "Opening your email application...";

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".timeline-card, .project-card, .skill-card, .achievement-card, .objective-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* ================= PROJECT LINK ================= */

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        if (!link.classList.contains("disabled")) {

            link.style.letterSpacing = "0.4px";

        }

    });

    link.addEventListener("mouseleave", () => {

        link.style.letterSpacing = "0";

    });

});