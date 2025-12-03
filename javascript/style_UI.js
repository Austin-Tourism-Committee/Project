// style_UI.js
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.createElement("header");
  banner.id = "topBanner";

  banner.innerHTML = `
    <div class="ui-banner__left">
      <div class="ui-banner__title">
        TEXAS VIOLENT CRIME: 2009 & 2019
      </div>
      <div class="ui-banner__subtitle">
        Comparison of city-level violent crime rates and buffers around high crime areas across Texas
      </div>
    </div>

    <div class="ui-banner__right">
      <nav class="ui-banner__nav">
        <button id="btn-home" class="nav-btn" type="button">Home</button>
        <button id="btn-resources" class="nav-btn" type="button">Resources</button>
        <button id="btn-about" class="nav-btn" type="button">About Us</button>
      </nav>
    </div>
  `;

  document.body.prepend(banner);

  // --- Swap between views: Home, Resources, About Us ---
  const mainApp       = document.getElementById("mainApp");
  const aboutPanel    = document.getElementById("aboutPanel");
  const resourcesPanel = document.getElementById("resourcesPanel");

  const mapBtn       = document.getElementById("btn-home");
  const resourcesBtn = document.getElementById("btn-resources");
  const aboutBtn     = document.getElementById("btn-about");

  if (mainApp && aboutPanel && resourcesPanel && mapBtn && resourcesBtn && aboutBtn) {

    // shows only one panel at a time
    function showPanel(which) {
      mainApp.style.display        = (which === "home") ? "block" : "none";
      resourcesPanel.style.display = (which === "resources") ? "block" : "none";
      aboutPanel.style.display     = (which === "about") ? "block" : "none";
    }

    // default view = map
    showPanel("home");

    mapBtn.addEventListener("click", () => showPanel("home"));
    resourcesBtn.addEventListener("click", () => showPanel("resources"));
    aboutBtn.addEventListener("click", () => showPanel("about"));
  }
});
