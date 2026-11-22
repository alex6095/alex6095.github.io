(function () {
  const darkStyles = document.getElementById('dark-theme');
  const systemTheme = matchMedia(darkStyles.media);
  const themeColors = document.querySelectorAll('[data-theme-color]');
  const storageKey = 'color-theme';
  let preference;

  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') preference = savedTheme;
  } catch {
    // The system preference still applies if storage is unavailable.
  }

  function currentTheme() {
    return preference || (systemTheme.matches ? 'dark' : 'light');
  }

  function applyPreference() {
    darkStyles.media = preference === 'dark' ? 'all' : 'not all';
    themeColors.forEach(function (meta) {
      meta.media = meta.dataset.themeColor === preference ? 'all' : 'not all';
    });
  }

  // Apply the saved preference before the page renders.
  if (preference) applyPreference();

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    function updateButton() {
      const theme = currentTheme();
      const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.dataset.theme = theme;
      button.setAttribute('aria-label', label);
      button.title = label;
    }

    button.addEventListener('click', function () {
      preference = currentTheme() === 'dark' ? 'light' : 'dark';
      applyPreference();
      updateButton();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // The selected theme still applies on this page.
      }
    });

    systemTheme.addEventListener('change', updateButton);
    updateButton();
    button.hidden = false;
  });
})();
