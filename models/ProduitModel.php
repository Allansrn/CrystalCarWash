<?php
class ProduitModel {
    public static function getProduits() {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM produits");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>