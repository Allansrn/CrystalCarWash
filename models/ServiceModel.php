<?php

// ServiceModel.php

class ServiceModel {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    // Retirer le mot-clé static pour utiliser $this->db
    public function getServices() {
        $stmt = $this->db->prepare("SELECT * FROM services");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
