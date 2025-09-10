// --------------------
// FORM VALIDATION
// --------------------
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

// Listen for form submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting automatically

  // Custom validation
  if (username.value.trim() === "") {
    formMessage.textContent = "Username is required.";
    formMessage.style.color = "red";
    return;
  }

  if (password.value.trim().length < 6) {
    formMessage.textContent = "Password must be at least 6 characters long.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  // If everything is valid
  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
});

// --------------------
// TOGGLE PASSWORD VISIBILITY
// --------------------
document.getElementById("togglePassword").addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

// --------------------
// COUNTER FEATURE
// --------------------
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("incrementBtn").addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
});

// --------------------
// TOGGLE CONTENT VISIBILITY
// --------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  const content = document.getElementById("toggleContent");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
