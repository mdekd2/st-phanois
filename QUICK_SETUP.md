# 🚀 Configuration Rapide Firebase

## ⚠️ Erreur Firebase Détectée

Vous avez une erreur `auth/invalid-api-key` car Firebase n'est pas configuré. Suivez ces étapes pour résoudre le problème :

## 🔥 Configuration Firebase en 5 minutes

### 1. Créer un projet Firebase

1. **Allez sur** [Firebase Console](https://console.firebase.google.com/)
2. **Cliquez** sur "Créer un projet"
3. **Nommez** votre projet : `stephanois-ecommerce`
4. **Désactivez** Google Analytics (optionnel)
5. **Cliquez** sur "Créer le projet"

### 2. Activer l'Authentification

1. Dans votre projet Firebase, **cliquez** sur "Authentication"
2. **Cliquez** sur "Get started"
3. Dans l'onglet "Sign-in method", **activez** "Email/Password"
4. **Cliquez** sur "Enregistrer"

### 3. Créer une App Web

1. **Cliquez** sur l'icône engrenage ⚙️ (Project settings)
2. Dans l'onglet "General", **faites défiler** jusqu'à "Your apps"
3. **Cliquez** sur l'icône Web `</>`
4. **Nommez** votre app : `stephanois-web`
5. **Cliquez** sur "Register app"
6. **Copiez** la configuration (gardez cette page ouverte)

### 4. Configurer les Variables d'Environnement

1. **Créez** un fichier `.env.local` à la racine du projet
2. **Copiez** cette configuration et remplacez par vos vraies valeurs :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=votre_api_key_ici
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_app_id
```

**Exemple avec de vraies valeurs :**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=stephanois-ecommerce.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=stephanois-ecommerce
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=stephanois-ecommerce.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

### 5. Redémarrer le Serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis redémarrez
npm run dev
```

## ✅ Vérification

Après la configuration :

1. **Ouvrez** http://localhost:3000
2. **Allez** sur la page "Compte" ou "Créer un compte"
3. **Vérifiez** qu'il n'y a plus d'erreur Firebase
4. **Testez** la création d'un compte

## 🆘 Si vous avez encore des erreurs

### Erreur "Firebase n'est pas configuré"
- Vérifiez que le fichier `.env.local` existe
- Vérifiez que les variables commencent par `NEXT_PUBLIC_`
- Redémarrez le serveur après avoir créé le fichier

### Erreur "auth/invalid-api-key"
- Vérifiez que vous avez copié la bonne API key
- Vérifiez qu'il n'y a pas d'espaces en trop
- Vérifiez que le projet Firebase est bien créé

### Erreur "auth/operation-not-allowed"
- Vérifiez que l'authentification Email/Password est activée dans Firebase

## 📞 Support

Si vous avez des problèmes :
1. **Vérifiez** la console du navigateur (F12)
2. **Vérifiez** les logs du serveur
3. **Consultez** [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) pour plus de détails

---

**🎉 Une fois configuré, votre application Stéphanois aura une authentification complète avec Firebase !**
