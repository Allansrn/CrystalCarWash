<?php 
require_once 'models/ProduitModel.php';
require_once 'models/ServiceModel.php';

// Instancier les modèles
$produitModel = new ProduitModel();
$serviceModel = new ServiceModel();

// Récupérer les données
$produits = $produitModel->getAllProduits();
$services = $serviceModel->getAllServices();
?>
<body>
    <main>
        <div class = "form-container">
            <h2>Faire un Devis</h2>
            <form id="devisForm">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required><br><br>

                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" required><br><br>

                <label for="adresse">Adresse :</label>
                <input type="text" id="adresse" name="adresse" required><br><br>

                <label for="telephone">Téléphone :</label>
                <input type="tel" id="telephone" name="telephone" required><br><br>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required><br><br>

                <label for="type">Type :</label>
                <select id="type" name="type" required>
                    <option value="">Choisir</option>
                    <option value="prestation">Prestation</option>
                    <option value="produit">Produit</option>
                </select><br><br>

                <div id="prestationOptions" style="display:none;">
                    <label for="prestation">Prestation :</label>
                    <select id="prestation" name="prestation">
                        <option value="">Choisir</option>
                        <?php foreach ($services as $service) : ?>
                            <option value="<?php echo htmlspecialchars($service['nom']); ?>">
                                <?php echo htmlspecialchars($service['nom']); ?>
                            </option>
                        <?php endforeach; ?>
                    </select><br><br>
                </div>

                <div id="produitOptions" style="display:none;">
                    <label for="produit">Produit :</label>
                    <select id="produit" name="produit">
                        <option value="">Choisir</option>
                        <?php foreach ($produits as $produit) : ?>
                            <option value="<?php echo htmlspecialchars($produit['nom']); ?>">
                                <?php echo htmlspecialchars($produit['nom']); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </div>


                <label for="quantite">Quantité :</label>
                <input type="number" id="quantite" name="quantite" min="1"><br><br>

                <button type="submit">Établir le Devis</button>
            </form>
        </div>
        <div id="devisResult"></div>

        <script src="public/js/script.js"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script> -->

    </main>
</body>

