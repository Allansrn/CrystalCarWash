<?php

include 'views/header.php' ;
include 'views/head.php' ;
require_once 'models/database.php';
require_once 'controllers/LavageAutoController.php';

// Initialisez la connexion à la base de données
$db = (new Database())->getConnection();

$controller = new LavageAutoController($db);

if (isset($_GET['action'])) {
    $action = $_GET['action'];
    switch ($action) {
        case 'produits':
            $controller->afficherProduits();
            break;
        case 'services':
            $controller->afficherPrestations();
            break;
        case 'devis':
            $controller->afficherFaireDevis();
            break;
        default:
            $controller->afficherAccueil();
            break;
    }
} else {
    $controller->afficherAccueil();
}

include 'views/footer.php';

?>