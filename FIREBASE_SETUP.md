# Configuration Firebase pour Stéphanois

## 🔥 Installation et Configuration

### 1. Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur "Créer un projet"
3. Nommez votre projet (ex: "stephanois-ecommerce")
4. Suivez les étapes de configuration

### 2. Activer l'Authentification

1. Dans la console Firebase, allez dans "Authentication"
2. Cliquez sur "Get started"
3. Dans l'onglet "Sign-in method", activez "Email/Password"
4. Configurez les paramètres selon vos besoins

### 3. Configurer Firestore Database

1. Dans la console Firebase, allez dans "Firestore Database"
2. Cliquez sur "Create database"
3. Choisissez "Start in test mode" pour le développement
4. Sélectionnez une région (ex: europe-west1)

### 4. Obtenir les clés de configuration

1. Dans la console Firebase, allez dans "Project settings" (icône engrenage)
2. Dans l'onglet "General", faites défiler jusqu'à "Your apps"
3. Cliquez sur l'icône Web (</>) pour ajouter une app web
4. Nommez votre app (ex: "stephanois-web")
5. Copiez la configuration

### 5. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=votre_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_app_id
```

### 6. Règles Firestore

Dans la console Firebase > Firestore Database > Rules, configurez :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Products can be read by anyone
    match /products/{productId} {
      allow read: if true;
      allow write: if false; // Only admin can write
    }
    
    // Orders can be read and written by authenticated users
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🚀 Fonctionnalités Intégrées

### Authentification
- ✅ Inscription avec email/mot de passe
- ✅ Connexion avec email/mot de passe
- ✅ Déconnexion
- ✅ Persistance de session
- ✅ Validation des données utilisateur

### Base de Données
- ✅ Stockage des profils utilisateurs
- ✅ Mise à jour des informations utilisateur
- ✅ Récupération des données utilisateur

### Sécurité
- ✅ Validation côté client et serveur
- ✅ Règles Firestore sécurisées
- ✅ Gestion des erreurs d'authentification

## 📱 Utilisation

Une fois configuré, l'application utilisera automatiquement Firebase pour :

1. **Création de compte** : Les utilisateurs peuvent créer un compte avec leurs vraies informations
2. **Connexion** : Les utilisateurs peuvent se connecter avec email/mot de passe
3. **Profil** : Les informations utilisateur sont stockées et récupérées depuis Firestore
4. **Persistance** : La session utilisateur persiste entre les rechargements de page

## 🔧 Développement

Pour le développement local :
1. Copiez `.env.local.example` vers `.env.local`
2. Remplissez avec vos vraies clés Firebase
3. Redémarrez le serveur de développement

## 📊 Monitoring

Dans la console Firebase, vous pouvez surveiller :
- **Authentication** : Utilisateurs inscrits et connexions
- **Firestore** : Données utilisateur stockées
- **Analytics** : Utilisation de l'application (optionnel)
