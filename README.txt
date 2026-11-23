# Résolution d'une équation du second degré

## 📖 Description

Ce projet est un programme simple réalisé en **JavaScript** permettant de résoudre une équation du second degré de la forme :

\[
ax^2 + bx + c = 0
\]

L'utilisateur saisit les coefficients `a`, `b` et `c`. Le programme calcule le discriminant (Delta) et affiche les solutions à l'aide de `alert()`.

## 🛠️ Technologies utilisées

- JavaScript
- Navigateur web (Firefox, Chrome, Edge)

## ⚙️ Fonctionnement

### 1. Saisie des coefficients

L'utilisateur entre les valeurs de `a`, `b` et `c` avec la fonction `prompt()`.

### 2. Calcul du discriminant

Le programme calcule :

\[
\Delta = b^2 - 4ac
\]

### 3. Recherche des solutions

**Si Δ > 0 :** deux solutions réelles distinctes.

\[
x_1 = \frac{-b-\sqrt{\Delta}}{2a}
\]

\[
x_2 = \frac{-b+\sqrt{\Delta}}{2a}
\]

**Si Δ = 0 :** une solution réelle double.

\[
x = \frac{-b}{2a}
\]

**Si Δ < 0 :** aucune solution réelle.

Le programme vérifie également que `a` est différent de zéro.

## 🚀 Installation et utilisation

1. Télécharger les fichiers du projet.
2. Ouvrir le fichier `index.html` dans un navigateur.
3. Cliquer sur le bouton **Calculer**.
4. Saisir les coefficients `a`, `b` et `c`.
5. Consulter les résultats affichés dans une fenêtre `alert()`.

**Remarque :** Le programme utilise `prompt()` et `alert()`, qui sont des fonctions du navigateur. Il ne peut pas être exécuté directement avec `node file.js` sans adaptation.

## 🧪 Exemple

Équation :

\[
2x^2 - 7x + 3 = 0
\]

Valeurs saisies :

- a = 2
- b = -7
- c = 3

Discriminant :

\[
\Delta = 25
\]

Résultats :

```text
x1 = 0.5
x2 = 3
```


## 📄 Licence

Projet éducatif réalisé dans le cadre de l'apprentissage de l'algorithmique et du JavaScript.