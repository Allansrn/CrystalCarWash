<?php require_once 'models/ServiceModel.php'?>

<body>
    <section id = "services">
        <h1>Nos Services de Lavage Auto</h1>
        
        <div class="grid-container">
            <?php foreach ($services as $service) : ?>
                <div class="grid-item">
                    <h3><?php echo htmlspecialchars($service['nom']); ?></h3>
                    <p><strong>Caractéristique :</strong> <?php echo htmlspecialchars($service['caracteristique']); ?></p>
                    <p><?php echo htmlspecialchars($service['description']); ?></p>
                    <p class="prix"><?php echo number_format($service['prix'], 2, ',', ' ') . ' €'; ?></p>
                    <!-- <a href="index.php?action=devis" id = "devis"> Faire un Devis</a> -->
                </div>
            <?php endforeach; ?>
        </div>
        <script src="public/js/main.js"></script>
    </section>
</body>

