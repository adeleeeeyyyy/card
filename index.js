// Something Weird - Editorial Single Page Interaction Script

document.addEventListener('DOMContentLoaded', () => {
  const barcode = document.getElementById('barcode-svg');
  
  if (barcode) {
    barcode.addEventListener('click', () => {
      // Fun retro console log ASCII barcode scan art
      console.log(`
██████   █████  ██████   ██████  ██████  ██████  ███████ 
██   ██ ██   ██ ██   ██ ██      ██    ██ ██   ██ ██      
██████  ███████ ██████  ██      ██    ██ ██   ██ █████   
██   ██ ██   ██ ██   ██ ██      ██    ██ ██   ██ ██      
██████  ██  ██  ██   ██  ██████  ██████  ██████  ███████ 
                                                         
[SCAN SUCCESS] // ADLY'S ARCHIVE ACCESSED
SYSTEM STATE: ONLINE // EST. 2008 // BOGOR, ID
      `);
      
      // Notify the user with a retro system dialogue popup
      alert("[SCAN SYSTEM ACTIVE]\nAdly's Digital Attic accessed.\nEST. 2008 / BOGOR, ID\nStatus: Online");
    });
  }
});
