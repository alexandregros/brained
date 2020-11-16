# brained

## Compilation

In order to compile the sources, you must first download all Node packages. Before that, go to the installation folder:

`cd %path_to_folder%/brained`

### With Yarn

* `yarn install`
* `yarn build`

### With NPM

* `npm install`
* `npm run build`

## Launch the game

Two solutions :

* Create a virtual host linked to the path `%chemin_vers_le_dossier%/brained/build` and launch it through your browser
* `yarn start` or `npm start` to create a virtual development server and access it on port `3000` of your local host (for example : `http://localhost:3000`)