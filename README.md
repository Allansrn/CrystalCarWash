# 🚗 CrystalCarWash

**CrystalCarWash** est un site web vitrine pour un service de lavage automobile, développé en **PHP** avec une architecture **MVC**. Il présente les différents **services** et **produits** proposés, et permet aux utilisateurs de réaliser une **demande de devis en ligne téléchargeable**.

---

## 🌐 Fonctionnalités principales

- 🧼 **Présentation des services** de lavage automobile (intérieur, extérieur, complet, etc.)
- 🛒 **Catalogue de produits** disponibles à la vente (shampoing, cire, etc.)
- 📄 **Formulaire de devis** permettant aux clients de demander une estimation personnalisée
- ⬇️ **Génération et téléchargement automatique du devis** au format PDF

---

## 🧱 Architecture

Le projet suit le **modèle MVC** :
- **Modèle (Model)** : Gestion des interactions avec la base de données MySQL
- **Vue (View)** : HTML + CSS (responsive) + JavaScript pour l'affichage et l'interactivité
- **Contrôleur (Controller)** : Logique métier, traitement des formulaires, routage des pages

---

## 🗃️ Base de données

- Base MySQL gérée via **phpMyAdmin**
- Tables principales :
  - `services` : liste des services offerts
  - `produits` : catalogue des produits

---

## 🛠️ Technologies utilisées

- 💻 HTML5, CSS3 (responsive design)
- ⚙️ JavaScript (animations et interactions)
- 🧠 PHP (logique serveur)
- 🗃️ MySQL / phpMyAdmin
- 🧾 **Bibliothèque de génération PDF** (comme FPDF ou TCPDF)
- 📐 Architecture MVC maison

---

## ⚙️ Installation et configuration

1. Clone le dépôt :
   ```bash
   git clone https://github.com/Allansrn/CrystalCarWash.git
