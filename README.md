# Herbier

Application web installable (PWA) pour apprendre à connaître les plantes :

- **Nature** : plantes sauvages comestibles et médicinales, critères de reconnaissance, sosies toxiques (ex. ail des ours / muguet / colchique), saisons, recettes et infusions.
- **Aromatiques** : calendrier de semis, plantation et récolte selon le climat, culture en pot ou en intérieur, où les trouver à l'état sauvage.
- **Intérieur** : lumière, arrosage, état normal de la terre, rempotage, nettoyage, symptômes.
- **Mes plantes** : suivi des arrosages, contrôle de la terre avec verdict, emplacement et lumière, photos annotées (repères sur les défauts), journal.
- **Diagnostic** et **Astuces** (idées reçues vérifiées, sources citées).

Tout fonctionne hors ligne. Les données personnelles (plantes, photos) restent dans le navigateur (IndexedDB) ; export / import JSON dans Réglages.

## Lancer en local

```
node tools/serve.js 8765
```
puis ouvrir http://127.0.0.1:8765

## Données

`data/*.js` : fiches rédigées en synthèse à partir de sources citées dans chaque fiche. Ne remplace ni un avis médical ni une identification sur le terrain.
