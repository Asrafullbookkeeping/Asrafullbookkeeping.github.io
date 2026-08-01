/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

    });

}


/* ==========================================
   ACTIVE MENU
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

if (sections.length && navLinks.length) {

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

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

}
/* ==========================================
   TYPING EFFECT
========================================== */

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "Professional Bookkeeper",
        "QuickBooks Online Expert",
        "Xero Bookkeeper",
        "Payroll Specialist",
        "Financial Reporting Expert"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typing.textContent = currentWord.substring(0, charIndex++);
        } else {
            typing.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? 60 : 100;

        if (!deleting && charIndex > currentWord.length) {
            deleting = true;
            speed = 1500;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

}


/* ==========================================
   SCROLL ANIMATION
========================================== */

const cards = document.querySelectorAll(
".about-card,.service-card,.tool-card,.education-card,.certificate-card,.portfolio-card,.contact-card,.timeline-item,.stat-card"
);

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .8s ease";

});

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

/* ==========================
   CERTIFICATE POPUP
========================== */

function openCertificate(imagePath) {

    document.getElementById("certificateModal").style.display = "flex";

    document.getElementById("certificateImage").src = imagePath;

}

function closeCertificate() {

    document.getElementById("certificateModal").style.display = "none";

}

// Close when clicking outside image
window.onclick = function(e){

    const modal = document.getElementById("certificateModal");

    if(e.target === modal){

        closeCertificate();

    }

}
/* =====================================
   IMAGE POPUP
===================================== */

function openImage(imageSrc) {

    const modal = document.getElementById("imageModal");
    const popupImage = document.getElementById("popupImage");

    if (!modal || !popupImage) return;

    popupImage.src = imageSrc;

    modal.style.display = "flex";

    // সবসময় স্ক্রিনের একদম উপরে দেখাবে
    document.body.style.overflow = "hidden";
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}

function closeImage() {

    const modal = document.getElementById("imageModal");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "auto";

}

const imageClose = document.querySelector(".image-close");

if (imageClose) {
    imageClose.onclick = closeImage;
}

const imageModal = document.getElementById("imageModal");

if (imageModal) {

    imageModal.onclick = function (e) {

        if (e.target === imageModal) {
            closeImage();
        }

    };

}

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        closeImage();
    }

});
document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        closeImage();
    }

});