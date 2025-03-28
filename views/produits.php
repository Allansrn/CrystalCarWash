

<body>
    <section id = "produits">
        <h1>Nos Produits</h1>
        
        <div class="grid-container">
            <?php foreach ($produits as $produit) : ?>
                <div class="grid-item">
                    <h3><?php echo htmlspecialchars($produit['nom']); ?></h3>
                    <p><strong>Caractéristique :</strong> <?php echo htmlspecialchars($produit['caracteristique']); ?></p>
                    <p><?php echo htmlspecialchars($produit['description']); ?></p>
                    <p class="prix"><?php echo number_format($produit['prix'], 2, ',', ' ') . ' €'; ?></p>
                    <!-- <a href="index.php?action=devis" id = "devis"> Faire un Devis</a> -->
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</body>
