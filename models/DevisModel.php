<?php
class Devis {
    public static function getServices() {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM services");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }  
    
    public static function getProduits() {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM produits");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}

// class Produit {
//     public static function getAll() {
//         global $conn;
//         $stmt = $conn->prepare("SELECT * FROM produits");
//         $stmt->execute();
//         return $stmt->fetchAll(PDO::FETCH_ASSOC);
//     }
// }
?>