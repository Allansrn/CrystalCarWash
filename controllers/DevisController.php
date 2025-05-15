<?php

header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'models/DevisModel.php';

class DevisController {
    private $devisModel;

    public function __construct($db) {
        $this->devisModel = new DevisModel($db);
    }

    public function getData() {
        // Récupérer les produits et services
        $produits = $this->devisModel->getAllProduits();
        $services = $this->devisModel->getAllServices();

        // Fusionner les tableaux
        $resultat = array_merge($produits, $services);

        // Réponse JSON
        header('Content-Type: application/json');
        echo json_encode($resultat);
    }
}
?>