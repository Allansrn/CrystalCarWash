<?php

require_once 'Database.php';
class ProduitModel {
    private $db;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
    }
    public static function getAllProduits() {
        global $conn;
        $query = "SELECT * FROM produits";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>