document.addEventListener("DOMContentLoaded", async () => {
  const registrationForm = document.getElementById("registration-form");
  const message = document.getElementById("message");
  const loginform = document.getElementById("login-form");
  const login_message = document.getElementById("login-message");

  if (registrationForm) {
    registrationForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission

      // Get form data
      const name = document.getElementById("name").value;
      const userName = document.getElementById("userName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const bio = document.getElementById("bio").value;

      try {
        // Send registration data to server
        const response = await fetch(
          "http://localhost:8000/api/v1/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, userName, email, password, bio }),
          }
        );

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
  }

  if (loginform) {
    loginform.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          // Login successful
          alert((login_message.textContent = "Login successful!"));

          // Fetch user details after login
          const userDetailsResponse = await fetch(
            "http://localhost:8000/api/v1/user/getUserDetails",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${data.token}`, // Include the token in the Authorization header
              },
            }
          );

          if (userDetailsResponse.ok) {
            const userDetailsData = await userDetailsResponse.json();
            console.log("User details:", userDetailsData.user);
            // Update HTML to display user details
          } else {
            const errorMessage = await userDetailsResponse.text();
            console.error("Failed to fetch user details:", errorMessage);
            // Display error message to the user
          }
        } else {
          // Login failed
          alert((login_message.textContent = data.message));
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    });
  }
});