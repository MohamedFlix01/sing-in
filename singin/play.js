document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
      document.getElementById("message").textContent = "Login successful!";
      // Redirect to another page or perform other actions
    } else {
      document.getElementById("message").textContent = "Invalid username or password!";
    }
  });