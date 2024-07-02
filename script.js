function updateDateTime() { 
    const now = new Date(); 
    const currentTimeUTC = now.toUTCString().slice(17, 25); // Extract UTC time in 24-hour format 
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });  
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC; 
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay; 
  } 
  // Initial update 
  updateDateTime(); 
  // Update every second 
  setInterval(updateDateTime, 1000);  