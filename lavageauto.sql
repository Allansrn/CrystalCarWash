-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 30 jan. 2025 à 18:11
-- Version du serveur : 8.3.0
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `lavageauto`
--

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nom` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `caracteristique` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `prix` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`ID`, `nom`, `caracteristique`, `description`, `prix`) VALUES
(1, 'Coffret lavage normal', 'Le coffret lavage normal, permet un lavage simple pour l’extérieur de votre véhicule.\r\nIl est composé de :\r\n- Bouteille de savon ultra moussant\r\n- Éponge désincrustante\r\n- Peau de chamois.', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 12),
(2, 'Coffret lavage prémium', 'Le coffret lavage prémium, permet un lavage efficace pour l’extérieur de votre véhicule.\r\nIl est composé de :\r\n- Bouteille de savon ultra moussant\r\n- Éponge désincrustante\r\n- Peau de chamois\r\n- Pulvérisateur lustrage déperlant\r\n- Micro fibre', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 21),
(3, 'Coffret lavage exclusif', 'Le coffret lavage exclusif, un lavage total pour une durabilité maximale.\r\nIl est composé de :\r\n- Bouteille de savon ultra moussant\r\n- Éponge désincrustante\r\n- Peau de chamois\r\n- Pulvérisateur lustrage déperlant\r\n- Micro fibre\r\n...', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 35),
(4, 'Bouteille de savon ultra moussant', 'Ce savon vous permet la décontamination votre carrosserie et la désincrustation de salissures et\r\ngoudron.', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 6),
(5, 'Pulvérisateur lustrant déperlant', 'Grace à a ce pulvérisateur les salissures adhèrent moins à la carrosserie et évite les traces de\r\ncalcaire.', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 4),
(6, 'Cire lustrante', 'Cette cire s’applique sur une carrosserie sèche et permet une brillance extreme.', 'Sous réserve de stock disponible.\r\nPas de livraison possible, passez en magasin.', 16);

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `nom` text NOT NULL,
  `caracteristique` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` varchar(255) NOT NULL,
  `prix` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`ID`, `nom`, `caracteristique`, `description`, `prix`) VALUES
(1, 'Lavage Extérieur', 'Le lavage extérieur est l’étape indispensable pour une brillance incomparable et un entretien total\r\nde votre véhicule.\r\nCarrosserie, vitres et pare-brise et jantes.', 'Temps estimé : 2 heures\r\nprise de rendez-vous nécessaire.', 69),
(2, 'Lavage intérieur', 'Quoi de mieux que le lavage intérieur pour se sentir agréablement bien dans votre voiture ?\r\nAspiration, lavage des moquettes et tissus et nettoyage des plastiques.', 'Temps estimé : 1 heure\r\nPrise de rendez-vous nécessaire.', 59),
(3, 'Lavage extérieur et intérieur', 'Le lavage extérieur et intérieur est la formule all exclusive pour votre voiture et votre bien être de\r\nconduite.\r\ncarrosserie, vitres et pare-brise, jantes, aspiration, lavage moquettes et tissus et nettoyage des\r\nplastiques.', 'Temps estimé : 3 heures\r\nPrise de rendez-vous nécessaire.', 109),
(4, 'Traitement céramique', 'Un traitement céramique est une innovation technologique utilisée pour protéger la carrosserie\r\nd\'un véhicule.', 'Temps estimé : 1 heure\r\nprise de rendez-vous nécessaire.\r\nNB : Nécessite un lavage extérieur au préalable.', 39),
(5, 'Lustrage intégral', 'Il regroupe de multiples techniques qui cherchent à nourrir le vernis ou la peinture d\'une\r\ncarrosserie afin de lui donner un aspect brillant, voire un effet miroir.', 'Temps estimé : 2 heures\r\nprise de rendez-vous nécessaire.\r\nNB : Nécessite un lavage extérieur au préalable.', 49);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
