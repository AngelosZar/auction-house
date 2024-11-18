import router from "./views/router.js";
import "../src/styles/style.css";
import { getTheme, watchThemeChanges } from "./utilities/themeChecker.js";
window.addEventListener("DOMContentLoaded", () => {
  router(window.location.pathname);
  getTheme();
  watchThemeChanges();
});
