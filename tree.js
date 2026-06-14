// Something Weird - Editorial Linktree Page Interaction Script

document.addEventListener('DOMContentLoaded', () => {
  const barcode = document.getElementById('barcode-svg');
  
  if (barcode) {
    barcode.addEventListener('click', () => {
      // Fun retro console log ASCII barcode scan art
      console.log(`
██████  ██  ██████  ████████  █████  ██      
██   ██ ██ ██       ██    ██ ██   ██ ██      
██   ██ ██ ██   ███ ██    ██ ███████ ██      
██   ██ ██ ██    ██ ██    ██ ██   ██ ██      
██████  ██  ██████  ████████ ██   ██ ███████ 
                                             
[SCAN SUCCESS] // LINK PORTAL ACTIVE
SYSTEM STATE: ONLINE // PORTAL EST. 2026 // BOGOR, ID
      `);
      
      // Notify the user with a retro system dialogue popup
      alert("[SCAN SYSTEM ACTIVE]\nPortal Hub accessed.\nEST. 2026 / BOGOR, ID\nStatus: Online");
    });
  }
});
