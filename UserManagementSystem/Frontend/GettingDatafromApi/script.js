document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  const message = document.getElementById("message");

  registrationForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const bio = document.getElementById("bio").value;

    try {
      const response = await fetch("http://localhost:8000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, userName, email, password, bio }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        alert((message.textContent = "Registration successful!"));
        window.location.href = "./login.html";
      } else {
        // Registration failed
        alert((message.textContent = data.message));
      }
    } catch (error) {
      console.error("Error:", error);
      alert((message.textContent = "An error occurred. Please try again."));
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const loginform = document.getElementById("login-form");
  const login_message = document.getElementById("login-message");

  loginform.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const response = await fetch("http://localhost:8000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert((login_message.textContent = "Login successful!"));

        window.location.href = "../DashBoard/index.html";
      } else {
        // Login failed
        alert((login_message.textContent = data.message));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        (login_message.textContent = "An error occurred. Please try again.")
      );
    }
  });
});
