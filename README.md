# Au Blé Sucré — Site vitrine

Site vitrine **one-page**, moderne et responsive pour la boulangerie-pâtisserie
artisanale & traiteur **Au Blé Sucré** (Normandie — 3 boutiques).

Réalisé en **HTML / CSS / JavaScript vanilla** (aucun build). Seule dépendance
externe : **Leaflet** (carte OpenStreetMap, gratuite) chargée via CDN.

## Structure

```
.
├── index.html   # Structure : header, hero, savoir-faire, spécialités, avis,
│                #   boutiques (+ carte), traiteur, footer + SEO (JSON-LD)
├── style.css    # Styles : palette, typographies, responsive (Mobile-First), animations
├── script.js    # Interactions : menu mobile, année, reveal au scroll, carte Leaflet
└── README.md
```

> ⚠️ Le fichier de styles s'appelle **`style.css`** (pas `styles.css`).
> Le `<link>` dans `index.html` doit pointer vers `style.css`.

## Lancer le projet

Ouvrez `index.html` dans un navigateur, ou (recommandé, pour que la carte et les
polices se chargent correctement) servez le dossier :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

Avec VS Code, l'extension **Live Server** fonctionne aussi (clic droit →
« Open with Live Server »).

## Sections

- **Hero** plein écran + note Google + 2 boutons d'action
- **Notre Savoir-Faire** (à propos / engagements)
- **Nos Spécialités** : Viennoiseries (croissants mis en avant), Pains,
  Pâtisseries, Snacking, Traiteur
- **Avis Clients** : note Google + témoignages
- **Nos Boutiques** : 3 adresses + horaires + carte interactive
- **Traiteur & commandes** : bandeau d'appel à l'action
- **Footer** : contact, horaires, Facebook

## SEO local

- `title` / `meta description` orientés local (Couterne, Bagnoles-de-l'Orne, Juvigny)
- Données structurées **schema.org `Bakery`** (une fiche par boutique : adresse,
  téléphone, horaires, géolocalisation, note Google) dans le `<head>`
- Open Graph pour un bel aperçu lors des partages Facebook

## À personnaliser (recherchez `TODO CLIENT` dans le code)

- **Photos** : ce sont des placeholders (placehold.co). Remplacez les `src` dans
  `index.html`, l'image Open Graph (`<head>`) et l'URL `background-image` du
  `.hero` dans `style.css`. Format **WebP** + `loading="lazy"` recommandés.
- **Note Google** : ~4,6/5 sur ~95 avis — **à vérifier en direct** sur la fiche
  Google Business avant publication (la note évolue).
- **Avis** : remplacez les témoignages d'exemple par de vrais extraits Google.
- **Horaires du samedi** : marqués d'un `*` (à confirmer auprès des boutiques).
- **Coordonnées carte** : Couterne est exacte ; Juvigny et Bagnoles sont
  approximatives (à affiner dans `script.js`).
- **Couleurs & polices** : variables CSS dans `:root` en haut de `style.css`.

## Informations métier

- **Couterne** (principale) : 1 route d'Alençon, 61410 Rives d'Andaine
- **Juvigny-sous-Andaine** : 22 place St Michel, 61140 Juvigny Val d'Andaine
- **Bagnoles-de-l'Orne** : 7 place de l'Église, 61140 Bagnoles-de-l'Orne Normandie
- Tél : 02 50 45 88 76 · Email : aublesucre.pro@gmail.com · facebook.com/aublesucre
