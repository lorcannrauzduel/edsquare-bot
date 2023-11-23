# edsquare-bot

## Description

Ce bot permet de récupérer le planning de la semaine de l'EDSQUARE, et d'envoyer une notification sur discord en cas de mise à jour.

## Installation

1. Clonez le dépôt :

```bash
git clone git@github.com:lorcannrauzduel/edsquare-bot.git
```

2. Installez les dépendances :`

```bash
pnpm install
```

## Configuration

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez les variables d'environnement nécessaires. Exemple :``

```bash
"EDSQUARE_EMAIL"="votre_email@exemple.com"
"EDSQUARE_PASSWORD"="votre_mot_de_passe"
"WEBHOOK_URL"="url_du_webhook_discord"
```

## Utilisation

- Pour lancer le bot en mode développement :

```bash
pnpm run start
```

`- Pour exécuter les tests :`

```bash
pnpm run test
```

## Contribution

Vos contributions sont les bienvenues. Que vous ayez des idées de nouvelles fonctionnalités, des corrections, ou des améliorations de code.

Si vous avez des questions ou besoin d'aide, n'hésitez pas à ouvrir une issue !

## Auteur

Lorcann RAUZDUEL
