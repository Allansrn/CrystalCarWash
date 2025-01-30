<?php
// models/HomeModel.php

require_once 'Database.php';

class HomeModel {
    private $db;

    public function __construct() {
        $this->db = new Database();
    }

    public function getServices() {
        $sql = "SELECT * FROM services";
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProduits() {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM produits");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
