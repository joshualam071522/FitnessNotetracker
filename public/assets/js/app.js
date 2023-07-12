// Data
let currentUser = null;
let totalCalories = 0;

// Templates
const loginTemplate = document.getElementById("login-template").innerHTML;
const signupTemplate = document.getElementById("signup-template").innerHTML;
const mainTemplate = document.getElementById("main-template").innerHTML;

// Helper functions
function render(template, data) {
  const compiledTemplate = Handlebars.compile(template);
  const html = compiledTemplate(data);
  document.getElementById("content").innerHTML = html;
}

function showLogin() {
  render(loginTemplate);
}

function showSignup() {
  render(signupTemplate);
}

function showMainPage() {
  render(mainTemplate, { username: currentUser, calories: totalCalories });
}

// Event handlers
document.addEventListener("DOMContentLoaded", () => {
  showLogin();
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform login validation here (e.g., check against a database)

  currentUser = username;
  totalCalories = 0;
  showMainPage();
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Perform signup validation here (e.g., check against a database)

  currentUser = username;
  totalCalories = 0;
  showMainPage();
});

document.getElementById("add-calories-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const caloriesInput = document.getElementById("calories-input").value;
  const calories = parseInt(caloriesInput);

  // Perform validation and save calories to database or update relevant data

  totalCalories += calories;
  showMainPage();
});

function logout() {
  currentUser = null;
  totalCalories = 0;
  showLogin();
}
