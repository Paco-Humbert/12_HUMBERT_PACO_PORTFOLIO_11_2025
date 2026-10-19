# Provenance des visuels du portfolio

## Graphiques BI

Ces graphiques ont été créés pour le portfolio à partir des sources publiées dans les dépôts. Ils ne représentent pas des captures des rapports Power BI. Les livrables d’origine n’ont pas été modifiés.

### P5 — Satisfaction par canal

Source : [CustomerDataFeedback.db](https://github.com/Paco-Humbert/5_Humbert_Paco_Analyse-de-la-satisfaction-client-avec-SQL/blob/main/data/CustomerDataFeedback.db), table `retour_client`.

Calcul : `AVG(note)` et `COUNT(note)` par `libelle_source`, sans filtre supplémentaire. L’axe conserve l’échelle complète de 0 à 10 ; il ne s’agit pas du NPS.

| Canal | Notes renseignées | Moyenne arrondie |
|---|---:|---:|
| Email | 1 032 | 7,98 |
| Réseaux sociaux | 998 | 8,04 |
| Téléphone | 970 | 8,14 |

### P7 — Coûts prévus et réels

Source : fichier Excel Sanitoral publié dans [le dépôt P7](https://github.com/Paco-Humbert/P7-Suivi-Projets-PowerBI), feuilles `Projects_plans`, `Actual_Costs` et `Project type`.

Jointure sur l’identifiant du projet et la phase : 520 lignes rapprochées une à une, pour 104 projets. Association du type de projet par identifiant, puis somme des coûts de toutes les phases pour chaque type. Les différentes nomenclatures de phases sont conservées dans la source.

| Type | Coûts prévus (€) | Coûts réels (€) |
|---|---:|---:|
| Informatique — CRM | 4 858 000 | 4 637 400 |
| Marketing — lancement de produit | 51 250 000 | 57 398 000 |

Le graphique compare les coûts ; il n’est pas une capture du tableau de bord d’alertes et ne recalcule pas son statut DAX.

### P9 — Évolution du CA catalogue estimé

Sources : `CSV/PowerBI/Finance_PowerBI.csv` et `CSV/PowerBI/Sales_PowerBI.csv` dans [le dépôt P9](https://github.com/Paco-Humbert/P9-Performance-Commerciale-PowerBI).

Jointure sur `SKU` et `Date`, sans doublon sur ces clés : les 8 803 lignes Sales trouvent un prix dans Finance. Calcul de `Sales × Price`, puis somme par mois, d’octobre 2022 à septembre 2023. Exemple : 155 556,95 € en octobre 2022 et 251 368,20 € en septembre 2023.

Il s’agit d’une estimation aux prix catalogue, hors effet des promotions ; elle ne représente pas un chiffre d’affaires comptable net de remises.

## Visuels web

Les images proviennent des fichiers des projets et gardent leur sens d’origine. Elles illustrent les cartes, sans être présentées comme des captures d’écran.

| Projet | Fichier d’origine dans le dépôt correspondant |
|---|---|
| Argent Bank | `ArgentBank-Frontend-main/src/assets/images/bank-tree.webp` |
| Kasa | `src/assets/home.png` |
| Sophie Bluel | `FrontEnd/assets/images/hotel-first-arte-new-delhi.png` |
| Nina Carducci | Photographie du passage piéton dans `assets/images/slider/` |
| 724 Events | `public/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png` |
| Ohmyfood | `assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg` |

Pour montrer directement le travail d’intégration, remplacer ces images par des captures des interfaces finales. Pour P7 et P9, des captures exportées depuis Power BI Desktop montreront également la mise en page et les interactions prévues dans les rapports.
