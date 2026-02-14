const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

if (menuToggle) {
    menuToggle.onclick = () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };
}

if (closeMenu) {
    closeMenu.onclick = () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto"; // Re-enable scrolling
    };
}

// Close menu on link click
document.querySelectorAll(".mobile-links a").forEach(link => {
    link.onclick = () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    };
});