document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const formData = new FormData(event.target);

    fetch("/send-email", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data);
        if (response.status === 200) {
          alert("Your booking was successful!");
        } else {
          alert("There was a problem with your submission.");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("There was a problem connecting to the server.");
      });
  });
