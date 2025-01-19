function updateClock() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");

  // Get the current time
  const now = new Date();

  // Extract hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  // Add a leading zero if the value is less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the current time with AM/PM
  clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Get the current date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayOfWeek = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // Display the current date (e.g., "Monday, October 20, 2024")
  dateElement.textContent = `${dayOfWeek}, ${month} ${day}, ${year}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock when the page loads
updateClock();
