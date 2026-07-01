// Theme toggle: switch between the arcade theme (default) and a plain,
// high-readability "standard" view. The choice is saved to localStorage so
// it persists across pages and visits.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;

  // Labels/aria describe the action the button performs (the theme it switches TO).
  function syncButton() {
    var isStandard = root.classList.contains('standard-view');
    if (isStandard) {
      button.textContent = 'Arcade Style';
      button.setAttribute('aria-label', 'Switch to the retro arcade view');
    } else {
      button.textContent = 'Standard View';
      button.setAttribute('aria-label', 'Switch to the standard high-readability view');
    }
  }

  button.addEventListener('click', function () {
    var isStandard = root.classList.toggle('standard-view');
    try {
      localStorage.setItem('theme', isStandard ? 'standard' : 'arcade');
    } catch (e) {}
    syncButton();
  });

  // The saved theme is already applied by the inline head script; just sync the label.
  syncButton();
})();
