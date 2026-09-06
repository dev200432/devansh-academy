// ==============================
// Course Modal
// ==============================

function showCourse(courseName) {

    const modal = document.getElementById("courseModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");

    title.textContent = courseName;

    description.textContent =
        "Build strong concepts with structured lessons, practice questions and regular assessments.";

    modal.style.display = "flex";
}


function closeCourse() {

    const modal = document.getElementById("courseModal");

    modal.style.display = "none";
}


// ==============================
// Enquiry Form
// ==============================

const form = document.getElementById("enquiryForm");
const message = document.getElementById("formMessage");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const studentClass = document.getElementById("class").value;
        const userMessage = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            studentClass === "" ||
            userMessage === ""
        ) {
            message.textContent = "Please fill in all the fields.";
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            message.textContent =
                "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you " +
            name +
            "! Your enquiry has been submitted successfully.";

        form.reset();
    });
}


// ==============================
// Mobile Menu
// ==============================

function toggleMenu() {

    const navLinks =
        document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// ==============================
// Student Progress
// ==============================

function updateProgress() {

    const math = 80;
    const science = 75;
    const english = 85;

    document.getElementById("mathProgress").textContent =
        math + "%";

    document.getElementById("mathBar").style.width =
        math + "%";


    document.getElementById("scienceProgress").textContent =
        science + "%";

    document.getElementById("scienceBar").style.width =
        science + "%";


    document.getElementById("englishProgress").textContent =
        english + "%";

    document.getElementById("englishBar").style.width =
        english + "%";


    document.getElementById("progressMessage").textContent =
        "All subject progress updated!";
}


// ==============================
// Active Navbar
// ==============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }
    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }
    });
});