// style_UI.js
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.createElement("header");
  banner.id = "topBanner";

  banner.innerHTML = `
    <div class="ui-banner__left">
      <div class="ui-banner__title">
        TEXAS CRIME 2009 & 2019
      </div>
      <div class="ui-banner__subtitle">
        Comparison of City-level crime change and hot spot patterns across Texas
      </div>
    </div>

    <div class="ui-banner__right">
      <nav class="ui-banner__nav">
        <a href="Resources.html" class="nav-btn">Resources</a>
        <a href="About Us.html" class="nav-btn">About Us</a>
      </nav>
    </div>
  `;

  document.body.prepend(banner);
});
