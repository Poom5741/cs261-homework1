// Retrieve user data from localStorage
const userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {
  // Update the dashboard with user data
  document.getElementById("displayname").innerText = userData.displayname_en;
  document.getElementById("username").innerText = userData.username;
  document.getElementById("email").innerText = userData.email;
  document.getElementById("tu_status").innerText = userData.tu_status;
  document.getElementById("faculty").innerText = userData.faculty;
  document.getElementById("department").innerText = userData.department;
} else {
  // If no user data found, redirect to the login page
  window.location.href = "/";
}

// Logout button functionality
document.getElementById("logoutButton").addEventListener("click", function () {
  // Clear localStorage
  localStorage.removeItem("userData");

  // Redirect to the login page
  window.location.href = "/";
});
