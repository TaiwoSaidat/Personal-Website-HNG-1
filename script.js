function updateDateTime() { 
    const now = new Date(); 
    const currentTimeUTC = now.toUTCString(); 
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }); 
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC; 
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay; 
  } 
  // Initial update 
  updateDateTime(); 
  // Update every second 
  setInterval(updateDateTime, 1000); 