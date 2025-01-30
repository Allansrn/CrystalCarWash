<?php
require_once 'models/ProduitModel.php';
require_once 'models/ServiceModel.php';
require_once 'models/DevisModel.php';

class LavageAutoController {
    private $serviceModel;
    private $produitModel;

    public function __construct($db) {
        $this->serviceModel = new ServiceModel($db);  // Instanciation de ServiceModel
        $this->produitModel = new ProduitModel($db);
    }
    
    public function afficherAccueil() {
        include 'views/home.php';
    }

    public function afficherProduits() {

        $produits = $this->produitModel->getProduits();
        
        include 'views/produits.php';
    }

    public function afficherPrestations() {
        // Appel de la méthode via l'instance $serviceModel
        $services = $this->serviceModel->getServices();
        include 'views/services.php';
    }

    public function afficherFaireDevis() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $donnees = [
                'nom' => $_POST['nom'],
                'email' => $_POST['email'],
                'description' => $_POST['description']
            ];
            Devis::creerDevis($donnees);
            echo "Devis créé avec succès !";
        }
        // include 'views/faire_devis.php';
        include 'views/devis.php';

    }
}


    // // Au début de LavageAutoController.php
    // die("Fichier LavageAutoController.php chargé correctement !");


    // require_once 'models/ProduitModel.php';
    // require_once 'models/ServiceModel.php';
    // require_once 'models/DevisModel.php';
    
    
    // class LavageAutoController {
    //     private $serviceModel;
    
    //     // Constructeur pour initialiser $serviceModel avec l'instance de la base de données
    //     public function __construct($db) {
    //         $this->serviceModel = new ServiceModel($db);
    //     }
    
    //     public function afficherAccueil() {
    //         include 'views/home.php';
    //     }
    
    //     public function afficherProduits() {
    //         $produits = ProduitModel::getProduits();
    //         include 'views/produits.php';
    //     }
    
    //     public function afficherPrestations() {
    //         $services = $this->serviceModel->getServices();
    //         include 'views/services.php';
    //     }
    
    //     public function afficherFaireDevis() {
    //         if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //             $donnees = [
    //                 'nom' => $_POST['nom'],
    //                 'email' => $_POST['email'],
    //                 'description' => $_POST['description']
    //             ];
    //             Devis::creerDevis($donnees);
    //             echo "Devis créé avec succès !";
    //         }
    //         include 'views/devis.php';
    //     }
    // }
    
    
    
?>