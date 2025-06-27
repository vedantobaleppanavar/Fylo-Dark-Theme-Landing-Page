const form = document.querySelector("form");
const emailIn = document.querySelector(".email-in");
const emailErr = document.querySelector(".email-err");
const emailSuccess = document.querySelector(".email-Success");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailIn.value === "") {
    emailErr.style.display = "block";
  } else if (!emailRegex.test(emailIn.value)) {
    emailErr.style.display = "block";
  } else {
    // Eat five star do nothing
    emailSuccess.style.display = "block";
  }
});
