<?php
// controllers/ServiceController.php

require_once '../models/ServiceModel.php';

class ServiceController {
    private $serviceModel;

    public function __construct($db) {
        $this->serviceModel = new ServiceModel($db);
    }

    public function index() {
        // Obtenez les services depuis le modèle
        $services = $this->serviceModel->getServices();
        // Incluez la vue en passant les services comme variable globale

        include '../views/services.php'; //Passez les services directement à la vue
    }
}
?>
