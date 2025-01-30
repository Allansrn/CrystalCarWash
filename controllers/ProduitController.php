<?php
// controllers/ProduitController.php

require_once 'models/ProduitModel.php';

class ProduitController {
    private $produitModel;

    public function __construct() {
        $this->produitModel = new ProduitModel();
    }

    public function index() {
        $produits = $this->produitModel->getProduits();
        require_once 'views/produits.php';
    }
}
?>
