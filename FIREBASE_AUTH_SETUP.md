# Configuration de l'Authentification Firebase

## Problème
L'erreur "L'authentification par email/mot de passe n'est pas activée" indique que vous devez activer l'authentification dans votre projet Firebase.

## Solution

### Étape 1 : Accéder à Firebase Console
1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet `stephanois-bd287`

### Étape 2 : Activer l'Authentification
1. Dans le menu de gauche, cliquez sur **"Authentication"**
2. Cliquez sur **"Get started"** ou **"Commencer"**
3. Cliquez sur l'onglet **"Sign-in method"** ou **"Méthodes de connexion"**

### Étape 3 : Activer Email/Password
1. Cliquez sur **"Email/Password"**
2. Activez le toggle **"Enable"** ou **"Activer"**
3. Optionnellement, activez **"Email link (passwordless sign-in)"** si vous voulez
4. Cliquez sur **"Save"** ou **"Enregistrer"**

### Étape 4 : Configurer les Règles Firestore (Optionnel)
1. Dans le menu de gauche, cliquez sur **"Firestore Database"**
2. Cliquez sur l'onglet **"Rules"**
3. Remplacez les règles par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture/écriture aux utilisateurs authentifiés
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Permettre la lecture publique des produits
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Permettre la lecture/écriture des commandes aux utilisateurs authentifiés
    match /orders/{orderId} {
      allow read, write: if request.auth != null && 
        (request.auth.uid == resource.data.userId || request.auth.uid == request.resource.data.userId);
    }
  }
}
```

4. Cliquez sur **"Publish"** ou **"Publier"**

### Étape 5 : Tester l'Authentification
1. Retournez sur votre site : https://stephanois-bd287.web.app
2. Essayez de créer un compte ou de vous connecter
3. L'erreur devrait maintenant être résolue

## Vérification
- L'authentification par email/mot de passe est maintenant activée
- Les utilisateurs peuvent créer des comptes et se connecter
- Les données utilisateur sont stockées dans Firestore

## Prochaines étapes
- Testez l'inscription d'un nouvel utilisateur
- Testez la connexion avec un compte existant
- Vérifiez que les données utilisateur sont bien sauvegardées dans Firestore
