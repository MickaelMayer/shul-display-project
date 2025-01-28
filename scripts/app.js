// scripts/app.js
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: true });
    document.getElementById('time').textContent = timeString;
  }
  
  // Update every second
  setInterval(updateTime, 1000);
  updateTime();

