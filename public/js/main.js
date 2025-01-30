document.getElementById('devisForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    let item, quantite;

    if (type === 'prestation') {
        item = document.getElementById('prestation').value;
        quantite = 1; // Les prestations sont généralement uniques
    } else if (type === 'produit') {
        item = document.getElementById('produit').value;
        quantite = parseInt(document.getElementById('quantite').value); // Assurez-vous que la quantité est un nombre
    }

    // Appel de la fonction de génération du devis avec validation
    generateDevis(nom, prenom, adresse, telephone, email, item, quantite);
});

function generateDevis(nom, prenom, adresse, telephone, email, item, quantite) {
    if (!item) {
        alert("Veuillez sélectionner un produit ou une prestation.");
        return;
    }

    if (!quantite || quantite < 1) {
        alert("La quantité doit être supérieure ou égale à 1.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tauxTVA = 0.2; // Taux de TVA de 20%
    
    // Récupérer le prix HT à partir de l'item
    const prixHT = getPrixHT(item);
    if (prixHT === 0) {
        alert("Erreur: Le prix pour cet article n'est pas disponible.");
        return;
    }

    // Calculs des totaux
    const totalHT = prixHT * quantite;
    const totalTVA = totalHT * tauxTVA;
    const totalTTC = totalHT + totalTVA;

    // Vérification des valeurs pour s'assurer du bon calcul
    console.log("Prix HT: ", prixHT);
    console.log("Quantité: ", quantite);
    console.log("Total HT: ", totalHT);
    console.log("Total TVA: ", totalTVA);
    console.log("Total TTC: ", totalTTC);

    // Vérification pour lavage complet
    if (item === 'lavage_complet') {
        console.log("Lavage complet détecté, prix attendu: 109");
    }

    // Définir les styles de base
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255); // Couleur bleue pour les titres

    // Ajouter le titre
    doc.text("Devis CrystalCarWash", 10, 10);

    // Définir les styles pour les informations
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0); // Couleur noire pour le texte

    // Ajouter les informations du client
    doc.text(`Nom : ${nom}`, 10, 20);
    doc.text(`Prénom : ${prenom}`, 10, 30);
    doc.text(`Adresse : ${adresse}`, 10, 40);
    doc.text(`Téléphone : ${telephone}`, 10, 50);
    doc.text(`Email : ${email}`, 10, 60);

    // Ajouter une ligne de séparation
    doc.line(10, 70, 200, 70);

    // Ajouter les informations du produit ou de la prestation
    doc.text(`Nom du produit ou de la prestation : ${item}`, 10, 80);
    doc.text(`Quantité : ${quantite}`, 10, 90);
    doc.text(`Description : ${getDescription(item)}`, 10, 100);

    // Ajouter une ligne de séparation
    doc.line(10, 110, 200, 110);

    // Ajouter les informations de prix
    doc.text(`Total HT : ${totalHT.toFixed(2)} €`, 10, 120);
    doc.text(`TVA (20%) : ${totalTVA.toFixed(2)} €`, 10, 130);
    doc.text(`Total TTC : ${totalTTC.toFixed(2)} €`, 10, 140);

    // Sauvegarder le fichier PDF
    doc.save('devis.pdf');
}

// Fonction pour récupérer le prix HT en fonction de l'item sélectionné
function getPrixHT(item) {
    const prix = {
        lavage_exterieur : 69,
        lavage_interieur : 59,
        lavage_complet : 109, // Assurez-vous que le prix du lavage complet est bien défini à 109 €
        traitement_ceramique : 39,
        lustrage_integral : 49,
        Coffret_lavage_normal: 12,
        Coffret_lavage_premium : 21,
        Coffret_lavage_exclusif : 35,
        Bouteille_de_savon_ultra_moussant : 6,
        Pulvérisateur_lustrant_déperlant : 4,
        Cire_lustrante : 16,
    };

    // Vérifier que l'item existe dans l'objet prix
    if (!(item in prix)) {
        console.error("Item non trouvé dans la liste des prix: ", item);
        return 0;
    }

    return prix[item];
}

// Fonction pour récupérer la description de l'item
function getDescription(item) {
    const descriptions = {
        lavage_exterieur: 'Lavage extérieur de la voiture',
        lavage_interieur: 'Lavage intérieur de la voiture',
        lavage_complet: 'Lavage complet de la voiture',
        traitement_ceramique: 'Traitement céramique',
        lustrage_integral: 'Lustrage intégral',
        Coffret_lavage_normal: 'Coffret lavage normal',
        Coffret_lavage_premium: 'Coffret lavage premium',
        Coffret_lavage_exclusif: 'Coffret lavage exclusif',
        Bouteille_de_savon_ultra_moussant: 'Bouteille de savon ultra-moussant',
        Pulvérisateur_lustrant_deperlant: 'Pulvérisateur lustrant déperlant',
        Cire_lustrante: 'Cire lustrante',
    };

    return descriptions[item] || 'Description non disponible';
}

const devisHTML = `
    <h3>Devis CrystalCarWash</h3>
    <p><strong>Nom :</strong> <span class="devis-info">${nom}</span></p>
    <p><strong>Prénom :</strong> <span class="devis-info">${prenom}</span></p>
    <p><strong>Adresse :</strong> <span class="devis-info">${adresse}</span></p>
    <p><strong>Téléphone :</strong> <span class="devis-info">${telephone}</span></p>
    <p><strong>Email :</strong> <span class="devis-info">${email}</span></p>
    <hr>
    <p><strong>Nom du produit ou de la prestation :</strong> <span class="devis-info">${item}</span></p>
    <p><strong>Quantité :</strong> <span class="devis-info">${quantite}</span></p>
    <p><strong>Description :</strong> <span class="devis-info">${getDescription(item)}</span></p>
    <hr>
    <p><strong>Total HT :</strong> <span class="devis-total">${totalHT.toFixed(2)} €</span></p>
    <p><strong>TVA (20%) :</strong> <span class="devis-total">${totalTVA.toFixed(2)} €</span></p>
    <p><strong>Total TTC :</strong> <span class="devis-total">${totalTTC.toFixed(2)} €</span></p>
`;
