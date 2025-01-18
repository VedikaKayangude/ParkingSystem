// Login Functionality
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === '' && password === '') {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
      
      // Request location access after login
      askForLocationAccess();
  
      // Show the parking time alert
      showParkingTimeAlert();
    } else {
      alert('Invalid login credentials!');
    }
  }
  
  // Function to request location access
  function askForLocationAccess() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log('Location access granted');
          // You can use the position here (position.coords.latitude, position.coords.longitude)
        },
        function() {
          alert('Location access is required to find parking spaces.');
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  // Function to display the parking time alert
  function showParkingTimeAlert() {
    // Create an alert div with red text
    const alertDiv = document.createElement('div');
    alertDiv.style.backgroundColor = '#FF0000'; // Red background
    alertDiv.style.color = '#FFF'; // White text
    alertDiv.style.padding = '10px';
    alertDiv.style.fontSize = '1.2em';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.position = 'absolute';
    alertDiv.style.top = '0';
    alertDiv.style.width = '100%';
    alertDiv.style.zIndex = '999';
    alertDiv.textContent = "Your parking time is about to end!! Only 15 minutes left!";
    document.body.appendChild(alertDiv);
  
    // Remove the alert after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
      alertDiv.remove();
    }, 20000);
  }
  