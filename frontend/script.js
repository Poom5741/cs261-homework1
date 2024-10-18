document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:80/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(result.user));

      // Redirect user to the dashboard page
      window.location.href = "/dashboard";
    } else {
      // Display error message if login fails
      document.getElementById("errorMsg").innerText = result.message;
    }
  });
