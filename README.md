# Formulaire — Authentification avec MongoDB & Express

Application web fullstack permettant l'**inscription** et la **connexion** d'utilisateurs, avec stockage des données dans une base MongoDB locale.

---

## 🗂️ Structure du projet

```
├── index.html       # Page d'inscription (Sign Up)
├── connexion.html   # Page de connexion (Sign In)
├── accueil.html     # Page d'accueil après connexion
├── script.js        # Logique front-end — inscription
├── conn.js          # Logique front-end — connexion
├── accueil.js       # Logique front-end — affichage du profil
├── style.css        # Styles CSS
├── index.js         # Serveur Express (API REST)
└── package.json
```

---

## ⚙️ Prérequis

- [Node.js](https://nodejs.org/) ≥ 18
- [MongoDB](https://www.mongodb.com/try/download/community) en écoute sur `localhost:27017`

---

## 🚀 Installation et démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. S'assurer que MongoDB tourne localement
mongod

# 3. Démarrer le serveur Express
node index.js
```

Le serveur démarre sur **http://localhost:8000**.

Ouvrez ensuite `index.html` dans votre navigateur (via un serveur de fichiers statique ou directement depuis le système de fichiers).

---

## 📡 API REST

| Méthode | Route          | Description                                          |
|---------|----------------|------------------------------------------------------|
| `POST`  | `/form`        | Inscription — enregistre un utilisateur en base      |
| `POST`  | `/formulaire`  | Connexion — vérifie les identifiants                 |
| `GET`   | `/info`        | Récupère les infos d'un utilisateur (query: `?nom=`) |

### Base de données

- **Base** : `express`  
- **Collection** : `utilisateurs`

### Exemple de document utilisateur

```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "password": "motdepasse",
  "avatar": "https://exemple.com/photo.jpg"
}
```

> ⚠️ Les mots de passe sont stockés en clair. Ne pas utiliser en production sans hachage (bcrypt, argon2…).

---

## 🔄 Flux utilisateur

1. **Inscription** (`index.html`) — l'utilisateur remplit son nom, prénom, mot de passe et un lien d'avatar. Les données sont envoyées à `POST /form`.
2. **Connexion** (`connexion.html`) — l'utilisateur saisit son nom et mot de passe. Une requête est envoyée à `POST /formulaire` pour vérification.
3. **Accueil** (`accueil.html`) — après connexion, la page récupère le profil via `GET /info?nom=...` et affiche le prénom et l'avatar de l'utilisateur.

---

## 📦 Dépendances

| Package    | Version  | Rôle                        |
|------------|----------|-----------------------------|
| `express`  | ^4.19.2  | Serveur HTTP / routage      |
| `mongodb`  | ^6.6.2   | Client MongoDB natif        |
| `cors`     | ^2.8.5   | Gestion des requêtes CORS   |

---

## 📄 Licence

ISC
