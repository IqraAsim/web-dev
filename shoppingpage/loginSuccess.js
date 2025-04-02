document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation (you can replace this with actual authentication logic)
        if (email && password) {
            alert("Login successfully!");
            window.location.href = "loginsuccessfully.html"; // Redirect to the success page
        } else {
            alert("Please fill in all fields.");
        }
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}