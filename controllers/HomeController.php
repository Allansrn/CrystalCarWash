<?php
// controllers/HomeController.php

require_once 'models/HomeModel.php';

class HomeController {
    private $homeModel;

    public function __construct() {
        $this->homeModel = new HomeModel();
    }

    public function index() {
        $services = $this->homeModel->getServices();
        require_once 'views/home.php';
    }
}
?>
