#!/bin/bash

# Se rendre dans le dossier du script
cd "$(dirname "$0")"

# Télécharger les packages
echo "Téléchargement des packages..."
npm install
npm run build

# Vérifier si le fichier .env existe
if [ ! -f .env ]; then
  # Demander les informations à l'utilisateur s'il n'existe pas
  read -p "Entrez votre Identifiant Edsquare: " edsquare_email
  read -p "Entrez votre mot de passe Edsquare: " edsquare_password
  read -p "Entrez votre webhook Discord: " webhook_url
  read -p "Êtes-vous admin ou étudiant ? (a/e): " user_type

  # Écrire les informations dans le fichier .env
  echo "EDSQUARE_EMAIL=\"$edsquare_email\"" > .env
  echo "EDSQUARE_PASSWORD=\"$edsquare_password\"" >> .env
  echo "WEBHOOK_URL=\"$webhook_url\"" >> .env

  if [ "$user_type" == "e" ]; then
    echo "EDSQUARE_PLANNING_BASE_URI=\"apps/planning\"" >> .env
  else
    echo "EDSQUARE_PLANNING_BASE_URI=\"admin/apps/plannings\"" >> .env
  fi
  # Demander à l'utilisateur s'il souhaite procéder
  read -p "Prêt à démarrer. Voulez-vous procéder ? (y/n): " confirmation

  # Vérifier la réponse de l'utilisateur
  if [ "$confirmation" == "y" ]; then
    # Exécuter la commande spécifiée
    echo "Exécution de la commande 'nom start'..."
    npm start
  else
    echo "Opération annulée par l'utilisateur."
  fi
else
  echo "Démarrage"
  npm start
fi
