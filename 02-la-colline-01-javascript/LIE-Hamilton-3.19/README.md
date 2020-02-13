# Startup Hamilton Liège 3.19

> 📦 Repo principal de la startup Hamilton (Liège - 3ème promo, 19ème vague)

* * *

> ☝️ Tu t’en rendras vite compte, chez BeCode, tout va très vite. Le contenu de ce _repo_, et les infos qu’il contient, évoluent vite et se mettent à jour régulièrement. À toi de te maintenir à jour.

* * *

## Usage

Ce repo est pour tout ce qui concerne ton activité à BeCode : briefings, parcours, etc.
Clone-le sur ton ordi et `git pull` régulièrement afin de rapatrier les mises à jour.

#### Ouais, mais moi, j'ai fait un fork !

Tu as forké ce repo ? C'est bien aussi.

Le truc, c'est que ton _fork_ est **indépendant** de sa source : si on fait des mises à jour ici, tu ne les verras pas sur ton fork.
C'est embêttant, mais, hé, pas de panique, git a une solution pour tout !

Dans ton terminal, navigue jusqu'au clone de ton fork, et entre la commande suivante :

    git remote add upstream https://github.com/becodeorg/LIE-Hamilton-3.19.git

Si tout c'est bien passé, la commande `git remote -v` devrait te retourner quatre lignes : deux pour `origin` (ton fork), deux pour `upstream` (le repo de référence).
Une fois ça fait, à chaque fois que tu voudras _synchroniser_ ton fork avec le repo de référence, il te suffira d'utiliser la commande suivante :

    git pull upstream master

## Tes sources d'information pour respecter les règles de BeCode

1. Lis le [contrat pédagogique](./ressources/documents/contrat-pedagogique.md).
1. Consulte également le [livret des apprenants](https://docs.google.com/document/d/1ic7FbY_2QNg2X1n3jS0KEFEa7SbnsjKakEYkYc--XcE/edit?usp=sharing).
1. Le [Wiki de BeCode](https://github.com/becodeorg/BeCode/wiki)

## Retards et absences

- Si tu dois fixer un rendez-vous quelconque, fixe-le le **mardi matin** (sois de retour pour 13h25).
- Si vraiment tu ne peux faire autrement, préviens nous **au moins un jour à l'avance** en envoyant un email à [leny@becode.org](mailto:leny@becode.org) **et** [julie@becode.org](mailto:julie@becode.org). Nous l'ajouterons à l'agenda, de sorte que tout le monde sache qu'il ne peut compter sur toi à ce moment-là.
- Malade ? Montre un certificat médical valide et préviens-nous par email aussitôt que possible.

## Table des matières

Le repo de ta promo est organisé comme suit :

- [**contenu**](./contenu): Les projets, exercices et travaux
- [**infos**](./infos): Informations, tout ce qui est utile est regroupé ici
- [**ressources**](./ressources): Ressources techniques, tutos, etc…
