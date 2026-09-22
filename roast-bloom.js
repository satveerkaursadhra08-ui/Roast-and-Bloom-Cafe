const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your table booking request has been received. ☕");

    bookingForm.reset();
});
