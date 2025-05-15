<?php

// Inclure les fichiers nécessaires avec le bon chemin
require_once __DIR__ . '/../models/Database.php';
require_once __DIR__ . '/../models/DevisModel.php';

class DevisController {
    private $devisModel;

    public function __construct($db) {
        $this->devisModel = new DevisModel($db);
    }

    public function getData() {
        $produits = $this->devisModel->getAllProduits();
        $services = $this->devisModel->getAllServices();

        $resultat = array_merge($produits, $services);

        header('Content-Type: application/json');
        echo json_encode($resultat);
    }
}

// Initialiser la base de données et le contrôleur
$db = new Database();
$controller = new DevisController($db);
$controller->getData();
