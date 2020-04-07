# brained

## Compilation

Pour compiler les sources, il faut d'abord télécharger tous les packages Node. Avant cela, il faut se rendre dans le dossier où se trouvent les sources :

`cd %chemin_vers_le_dossier%/brained`

### Avec Yarn

* `yarn install`
* `yarn build`

### Avec NPM

* `npm install`
* `npm run build`

## Lancer le jeu

Deux solutions :

* Créer un virtual host qui pointe sur le dossier `%chemin_vers_le_dossier%/brained/build` avant de pouvoir y accéder via un navigateur
* Lancer un serveur de développement local via la commande `yarn start` ou `npm start`