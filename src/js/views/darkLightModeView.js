class DarkLightView {
  _htmlElement = document.querySelector(".top-class");
  _darkLightModeButton = document.querySelector(".darkLight__mode");
  _darkSvg = document.querySelector(".dark-svg");
  _lightSvg = document.querySelector(".light-svg");
  _darkText = document.querySelector(".dark-text");
  _lightText = document.querySelector(".light-text");

  changeDarkLightMode() {
    this._lightSvg.classList.toggle("hidden");
    this._darkSvg.classList.toggle("hidden");
    this._lightText.classList.toggle("hidden");
    this._darkText.classList.toggle("hidden");
    this._htmlElement.classList.toggle("dark");
  }

  addHandlerDarkLightMode(handler) {
    this._darkLightModeButton.addEventListener("click", function () {
      handler();
    });
  }
}

export default new DarkLightView();

/*
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
*/
