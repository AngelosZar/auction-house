import router from "./views/router.js";
import { getTheme, watchThemeChanges } from "./utilities/themeChecker.js";
window.addEventListener("DOMContentLoaded", () => {
  router(window.location.pathname);
  getTheme();
  watchThemeChanges();
});
