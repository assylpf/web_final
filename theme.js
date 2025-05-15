function toggleMode() {
      const body = document.body;
      const modeText = document.getElementById('modeText');
      const modeIcon = document.getElementById('modeIcon');
      const isLight = body.classList.toggle("light-mode");

      if (isLight) {
        modeText.innerText = "Light Mode";
        modeIcon.innerText = "☀️";
        localStorage.setItem("theme", "light");
      } else {
        modeText.innerText = "Dark Mode";
        modeIcon.innerText = "🌙";
        localStorage.setItem("theme", "dark");
      }
    }
   
  // Apply stored theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;
    const modeText = document.getElementById("modeText");
    const modeIcon = document.getElementById("modeIcon");

    if (theme === "light") {
      body.classList.add("light-mode");
      if (modeText) modeText.innerText = "Light Mode";
      if (modeIcon) modeIcon.innerText = "☀️";
    } else {
      body.classList.remove("light-mode");
      if (modeText) modeText.innerText = "Dark Mode";
      if (modeIcon) modeIcon.innerText = "🌙";
    }
  });
  