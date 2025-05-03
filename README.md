# Comment installer et utiliser Pokedex 
<img src="https://i.ibb.co/sr0mGvq/Poke-Dex-03-04-2025-long.png" alt="Poke-Dex-03-04-2025-long" border="0">

### Installer le projet :
```
npm install
```

### Connecter le téléphone : 
Si tu utilises un téléphone pour lancer le projet :
- Se mettre en mode développeur
- Activer le débogage USB
- Désactiver le bloqueur automatique

Voir si le téléphone est connecté avec :
```
adb devices
```

Si le téléphone n'est pas reconnu : 
- Changer de cable
- Installer driver en fonction du téléphone (exemple driver samsung)

### Démarrage du projet :
Maintenant que le téléphone est connecté : 

Démarrer le serveur :
```
npm start
```
Build le projet :
```
npm run android
```

Vous devirez voir ceci sur votre app :

<img src="assets/bootsplash/unnamed.jpg" alt="unnamed" border="0" width="200" >

### Utilisation de Pokedex

Depuis la HomePage vous pouvez decouvrir le pokedex. 
Une fois sur le pokedex, vous pouvez charger plus de pokémon.
Cliquez sur un pokemon pour voir son détail.

### API 

Un lien vers l'api https://pokeapi.co/