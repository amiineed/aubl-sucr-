# Au Blé Sucré — Landing Page

Landing page **one-page**, moderne et responsive pour la boulangerie-pâtisserie
artisanale **Au Blé Sucré**.

Réalisée en **HTML / CSS / JavaScript vanilla** (aucune dépendance, aucun build) —
il suffit d'ouvrir le fichier dans un navigateur.

## Structure
.
├── index.html # Structure de la page (header, hero, spécialités, savoir-faire, footer)
├── styles.css # Styles : palette, typographies, responsive (Mobile-First), animations
├── script.js # Interactions : menu mobile, année dynamique
└── README.md

## Lancer le projet
Ouvrez simplement `index.html` dans votre navigateur, ou servez le dossier :
```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
Personnalisation
Images : ce sont des placeholders (placehold.co). Remplacez les src
dans index.html et l'URL background-image du .hero dans styles.css.
Couleurs & polices : tout est dans les variables CSS (:root) en haut de
styles.css.
Coordonnées & horaires : à mettre à jour dans le <footer> de index.html.
Fonctionnalités
En-tête collant (sticky) + menu hamburger mobile
Hero avec image de fond et call-to-action
Grille responsive de 4 cartes produits (1 → 2 → 4 colonnes)
Bloc « Notre Savoir-Faire » texte + image
Footer : contact, horaires structurés, lien Facebook visible
Animations douces + respect de prefers-reduced-motion
100 % responsive (Mobile-First)
