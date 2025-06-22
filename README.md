# TechnicalTest

Ce projet est une application web full-stack utilisant **Next.js** pour le frontend et **Payload CMS** pour le backend, avec une base de données MongoDB.

## Prérequis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :

- **Node.js** (version 16 ou plus récente recommandée)  
  https://nodejs.org/

- **Docker** (pour exécuter MongoDB facilement)  
  https://www.docker.com/products/docker-desktop/

## Installation et lancement

### 1. Cloner le projet

git clone <url-du-repo>
cd <nom-du-dossier>

### 2. Installer et lancer MongoDB

Pour que Payload CMS puisse stocker les données, MongoDB doit être installé et lancé.

La façon la plus simple est via Docker :

Cette commande est donc à lancé dans un terminal

docker run -d \
  --name mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  mongo

### 3. Lancement de l'application et installation Payload CMS

1. Placez-vous dans le dossier de l'application :
cd <manage-tel-back>

2. Installez les dépendances :
npm install
npm install axios react-icons

3. Lancez le serveur Payload
npm run dev

4. Accéder à l'application :
Se rendre sur l'URL -> http://localhost:3000

### 4. Structure du projet

- **app/** : contient toutes les pages et les composants de l'applications
- **api/** : endpoints API pour gérer les téléphones.
- **payload/** : config et modèles Payload CMS.
- **ajouter/** ou **edit/** ou **info/** ou **liste/** sont les différentes routes et donc pages de l'application

### 5. Utilisation

- Ajoutez, éditez ou supprimez des téléphones via l’interface frontend.
- Le backend utilise Payload CMS, avec une collection telephone.
- La base de données MongoDB stocke toutes les données.

### 6. Conseils 

- Assurez-vous que MongoDB tourne avant de lancer le backend.
- un autre readme a été crée par payload directement si nécessaire