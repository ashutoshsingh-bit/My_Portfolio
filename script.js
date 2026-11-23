// JavaScript for the mobile navigation menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const menuIsOpen = navLinks.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", menuIsOpen);
});

// Close the menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Contact form basic validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the fields.";
    } else {
        formMessage.textContent = "Thank you, " + name + "! Your form has been validated.";
        contactForm.reset();
    }
});

// Display current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
