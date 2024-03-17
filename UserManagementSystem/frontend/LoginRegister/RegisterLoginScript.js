document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form data
      const formData = new FormData(registerForm);
      const userData = {
        name: formData.get("name"),
        userName: formData.get("userName"),
        email: formData.get("email"),
        password: formData.get("password"),
        bio: formData.get("bio"),
      };

      // Send data to API endpoint
      fetch("http://localhost:8000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (response.ok) {
            alert("Registration successful!");
            // You can redirect the user to the login page or perform other actions here
            window.location.href = "./login.html";
          } else {
            throw new Error("Registration failed!");
          }
        })
        .catch((error) => {
          console.error("Registration error:", error);
          alert("Registration failed!");
        });
    });
  }

  // Login Process

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form data
      const formData = new FormData(loginForm);
      const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      // Send data to API endpoint for login
      fetch("http://localhost:8000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse response to get the authentication token
          } else {
            throw new Error("Login failed!");
          }
        })
        .then((data) => {
          // Extract the authentication token from the response data
          const token = data.token;
          console.log(token);

          // Fetch user details after successful login
          return fetch("http://localhost:8000/api/v1/user/getUserDetails", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Include the login token in the request headers
            },
          });
        })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse response JSON data
          } else {
            throw new Error("Failed to fetch user details!");
          }
        })
        .then((userData) => {
          console.log(userData);
          // Redirect to profile page or dashboard page
          window.location.href = "../Dashboard/Home.html";
        })
        .catch((error) => {
          console.error("Login error:", error);
          alert("Login failed!");
        });
    });
  }
});
