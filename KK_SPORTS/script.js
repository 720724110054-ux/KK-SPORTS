document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!menuButton || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  }

  function toggleMenu() {
    const willOpen = !nav.classList.contains("open");

    if (willOpen) {
      nav.classList.add("open");
      menuButton.textContent = "×";
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close menu");
    } else {
      closeMenu();
    }
  }

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleMenu();
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) closeMenu();
  });
});
