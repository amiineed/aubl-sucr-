/* =================================================================
   AU BLÉ SUCRÉ — Interactions JavaScript (vanilla, sans dépendance lourde)
   Dépendance unique : Leaflet (carte OpenStreetMap, chargé dans index.html).
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

  /* ---------- 3. Animations douces à l'apparition (scroll) ----------
     On révèle les éléments .reveal lorsqu'ils entrent dans l'écran.
     IntersectionObserver = natif, performant, sans librairie. */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // on n'anime qu'une fois
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Repli : si pas de support, on affiche tout directement
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- 4. Carte des boutiques (Leaflet / OpenStreetMap) ----------
     Coordonnées GPS de chaque boutique.
     Couterne est exacte ; Juvigny et Bagnoles sont approximatives.
     TODO CLIENT : affinez les coordonnées de Juvigny et Bagnoles si besoin. */
  const mapEl = document.getElementById("map");
  if (mapEl && typeof L !== "undefined") {
    const boutiques = [
      {
        nom: "Au Blé Sucré — Couterne",
        adresse: "1 route d'Alençon, 61410 Rives d'Andaine",
        coords: [48.5132, -0.4148], // GPS exact fourni
      },
      {
        nom: "Au Blé Sucré — Juvigny-sous-Andaine",
        adresse: "22 place St Michel, 61140 Juvigny Val d'Andaine",
        coords: [48.5236, -0.5028], // approximatif (à vérifier)
      },
      {
        nom: "Au Blé Sucré — Bagnoles-de-l'Orne",
        adresse: "7 place de l'Église, 61140 Bagnoles-de-l'Orne",
        coords: [48.5577, -0.4093], // approximatif (à vérifier)
      },
    ];

    // Initialisation centrée sur la zone des trois boutiques
    const map = L.map("map", { scrollWheelZoom: false }).setView(
      [48.53, -0.44],
      11
    );

    // Fond de carte OpenStreetMap (gratuit, attribution obligatoire)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Un marqueur par boutique, avec une petite info-bulle
    const group = [];
    boutiques.forEach((b) => {
      const marker = L.marker(b.coords)
        .addTo(map)
        .bindPopup(`<strong>${b.nom}</strong><br>${b.adresse}`);
      group.push(marker);
    });

    // Ajuste automatiquement le zoom pour englober les trois points
    if (group.length) {
      const bounds = L.featureGroup(group).getBounds();
      map.fitBounds(bounds.pad(0.2));
    }
  }
})();
