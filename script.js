/* =================================================================
   AU BLÉ SUCRÉ — Interactions JavaScript (vanilla, sans dépendance)
   ================================================================= */

(function () {
  "use strict";

  /* ---------- 1. Menu mobile (ouverture / fermeture) ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    // Accessibilité : on tient à jour l'état du bouton
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);

    // Ferme le menu après un clic sur un lien (navigation interne)
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("is-open")) {
          toggleMenu();
        }
      });
    });
  }

  /* ---------- 2. Année dynamique dans le pied de page ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
