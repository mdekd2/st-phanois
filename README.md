# Stéphanois - E-commerce de Vêtements Masculins

Un site e-commerce moderne et élégant pour les vêtements masculins, inspiré des marques comme Zara et Pull&Bear, spécialement conçu pour le marché mauritanien.

## 🚀 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour la sécurité du code
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **Firebase** - Authentification et base de données
- **React Context** - Gestion d'état globale

## 🔥 Firebase Integration

Ce projet utilise Firebase pour :
- **Authentification** - Inscription/connexion des utilisateurs
- **Firestore** - Stockage des données utilisateur
- **Sécurité** - Règles de sécurité et validation

Voir [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) pour la configuration complète.

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd stephanois
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer Firebase**
   - Créer un projet Firebase
   - Configurer l'authentification et Firestore
   - Créer un fichier `.env.local` avec vos clés Firebase
   - Voir [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) pour les détails

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎨 Fonctionnalités

### 🏠 Page d'Accueil
- Bannière avec nouvelle collection
- Produits en vedette
- Section "À propos" de la marque

### 🛍️ Boutique
- Grille de produits organisés par catégories
- Filtres de recherche
- Navigation intuitive

### 👕 Page Produit
- Images haute qualité
- Sélection de taille et couleur
- Prix en Ouguiya (MRU)
- Ajout au panier et liste de souhaits

### 👤 Compte Utilisateur
- **Inscription** avec validation mauritanienne
- **Connexion** avec Firebase Auth
- **Profil** avec informations réelles
- **Commandes** et historique
- **Liste de souhaits**

### 🛒 Panier & Checkout
- Gestion du panier en temps réel
- Résumé de commande
- Modes de paiement mauritaniens :
  - Carte bancaire
  - Sedad
  - Masrivi
  - Paiement à la livraison

### 📞 Contact
- Formulaire de contact
- Informations de contact
- Intégration WhatsApp
- Réseaux sociaux

## 🌍 Localisation

- **Langue** : Français
- **Devise** : Ouguiya (MRU)
- **Téléphone** : Format mauritanien (8 chiffres, préfixes 2, 3, 4)
- **Paiements** : Méthodes locales mauritaniennes

## 🎯 Design

### Palette de Couleurs
- **Blanc** : `#FFFFFF`
- **Noir** : `#000000`
- **Bordeaux** : `#8B0000`
- **Gris** : `#F5F5F5`

### Typographie
- **Titres** : Playfair Display (serif)
- **Corps** : Inter (sans-serif)

### Style
- Design minimaliste et moderne
- Interface responsive
- Animations fluides
- UX optimisée

## 🔧 Structure du Projet

```
stephanois/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── shop/              # Boutique
│   ├── product/[id]/      # Pages produits
│   ├── account/           # Compte utilisateur
│   ├── signup/            # Création de compte
│   ├── cart/              # Panier
│   ├── wishlist/          # Liste de souhaits
│   ├── about/             # À propos
│   └── contact/           # Contact
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── ProductCard.tsx    # Carte produit
│   └── Notification.tsx   # Notifications
├── contexts/              # Contextes React
│   ├── CartContext.tsx    # Gestion du panier
│   └── UserContext.tsx    # Gestion utilisateur
├── lib/                   # Services et utilitaires
│   ├── firebase.ts        # Configuration Firebase
│   └── auth.ts            # Service d'authentification
└── public/                # Assets statiques
    └── logo.png           # Logo Stéphanois
```

## 🔐 Authentification Firebase

### Fonctionnalités
- ✅ Inscription avec email/mot de passe
- ✅ Connexion avec email/mot de passe
- ✅ Déconnexion sécurisée
- ✅ Persistance de session
- ✅ Validation des données utilisateur
- ✅ Gestion des erreurs d'authentification

### Données Utilisateur
- Prénom et nom
- Email
- Téléphone (format mauritanien)
- Date de création et mise à jour

## 🛒 Gestion du Panier

### Fonctionnalités
- ✅ Ajout/suppression de produits
- ✅ Modification des quantités
- ✅ Calcul automatique des totaux
- ✅ Persistance entre les sessions
- ✅ Affichage du nombre d'articles dans le header

### Structure des Données
```typescript
interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}
```

## 📱 Responsive Design

- **Mobile First** : Optimisé pour les appareils mobiles
- **Tablette** : Interface adaptée aux tablettes
- **Desktop** : Expérience complète sur ordinateur
- **Navigation** : Menu hamburger sur mobile

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement Firebase
3. Déployer automatiquement

### Autres Plateformes
- Netlify
- Firebase Hosting
- AWS Amplify

## 🔧 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification du code
```

## 📊 Performance

- **Lighthouse Score** : 90+ sur tous les critères
- **Core Web Vitals** : Optimisé
- **SEO** : Métadonnées complètes
- **Accessibilité** : Conforme WCAG 2.1

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : contact@stephanois.mr
- WhatsApp : +222 XXX XXX XXX
- Site web : https://stephanois.mr

---

**Stéphanois** - Vêtements masculins modernes et élégants pour la Mauritanie 🇲🇷
