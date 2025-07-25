document.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded');
  const toggleBtn = document.getElementById('toggleMode');
  if (!toggleBtn) {
    console.log('toggle button not found');
    return;
  }
  toggleBtn.addEventListener('click', () => {
    console.log('clicked');
    document.body.classList.toggle('light');
  });
});
