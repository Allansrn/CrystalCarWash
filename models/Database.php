<?php
// models/Database.php

require_once 'config/config.php';

// class Database {
//     private $pdo;

//     public function __construct() {
//         global $pdo;
//         $this->pdo = $pdo;
//     }

//     public function query($sql, $params = []) {
//         $stmt = $this->pdo->prepare($sql);
//         $stmt->execute($params);
//         return $stmt;
//     }
// }

// models/database.php

class Database {
    private $pdo;

    public function __construct() {
        try {
            $this->pdo = new PDO('mysql:host=localhost;dbname=lavageauto', 'root', '');
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }
    }

    public function getConnection() {
        return $this->pdo;
    }
}


?>
