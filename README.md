# Paco Humbert — Portfolio Data & Web

Portfolio React présentant cinq projets du parcours Business Intelligence Analyst OpenClassrooms et six projets du parcours Intégrateur web.

## Projets présentés

La catégorie **Data & BI** s’affiche par défaut : P5 satisfaction client (SQL), P6 BottleNeck (Python), P8 immobilier (analyse prédictive), P7 Sanitoral (Power BI) et P9 performance commerciale (Python et Power BI).

Le filtre **Développement web** donne accès aux six projets web existants. La photo, les coordonnées et les thèmes clair/sombre du portfolio d’origine sont conservés.

Les descriptions et les liens se trouvent dans `src/portfolio.js`. Les aperçus sont des extraits des livrables, et non des tableaux de bord interactifs intégrés au site.

## Installation et démarrage

Avec Node.js 22.12 ou supérieur :

```bash
npm install
npm run dev
```

## Construction pour hébergement

```bash
npm run build
```

Le dossier `dist/` contient le site construit. Le projet utilise des chemins relatifs pour permettre un hébergement à la racine ou dans un sous-dossier. Pour consulter le site construit en local, utiliser `npm run preview` ; ouvrir directement `dist/index.html` ne suffit pas.

## Sources des aperçus

| Image du site | Livrable d’origine |
|---|---|
| `public/images/p5-modele.jpg` | P5 : `documentation/Schema_CustomerData.jpg` |
| `public/images/p6-correlation.png` | P6 : matrice de corrélation issue du notebook BottleNeck |
| `public/images/p8-predictions.png` | P8 : graphique des valeurs réelles et prédites issu du notebook immobilier |
| `public/images/p7-modele.jpg` | P7 : `vue_modèle.jpg`, modèle du rapport Power BI |
| `public/images/p9-modele.png` | P9 : rendu de la zone du schéma dans `Schéma de la base de données.pdf` |

Les livrables des projets restent dans leurs dépôts respectifs ; cette mise à jour porte sur le portfolio.

## Validation de cette mise à jour

- Construction de production réussie avec `npm run build`.
- Présence des images, liens des dépôts et rendu HTML des composants vérifiés.
- Vérification visuelle et interactions dans un navigateur à réaliser avant publication : affichage mobile, filtres, menu, thèmes et ouverture des liens.

## Mise à jour du dépôt GitHub

L’archive de remise contient les sources complètes, sans `node_modules/` ni fichiers Git internes. Extraire l’archive et téléverser son contenu à la racine du dépôt existant en conservant les dossiers `src/` et `public/`, puis enregistrer le commit. Les fichiers présents dans l’archive remplacent leurs versions précédentes.

La préparation locale ne publie pas le site et ne pousse aucun commit sur GitHub. Le déploiement dépend de la configuration d’hébergement du dépôt.
