const getUserDetails = async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/user/getAllUser"
    );
    const data = await response.json();
    if (!Array.isArray(data.getUser)) {
      throw new Error("User data is not in the expected format");
    }

    const user = data.getUser;

    const tableBody = document.getElementById("userTableBody");

    user.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${user._id}</td>
            <td>${user.name}</td>
            <td>${user.userName}</td>
            <td>${user.email}</td>
            <td>${user.bio}</td>
          `;
      tableBody.appendChild(row);
    });
    console.log(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

getUserDetails();
