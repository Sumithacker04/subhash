const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  // Change icon 🌙 / ☀️ based on theme
  if (body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "🌙";
  } else {
    themeToggleBtn.textContent = "☀️";
  }
});

// Simple form submission handler
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting me!");
  form.reset();
});
