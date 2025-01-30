document.getElementById('type').addEventListener('change', function() {
    const type = this.value;
    const prestationOptions = document.getElementById('prestationOptions');
    const produitOptions = document.getElementById('produitOptions');
    const quantiteInput = document.getElementById('quantite');

    if (type === 'prestation') {
        prestationOptions.style.display = 'block';
        produitOptions.style.display = 'none';
        quantiteInput.value = 1; // Fixe la quantité à 1 pour les prestations
        quantiteInput.disabled = true; // Désactiver l'input de quantité
    } else if (type === 'produit') {
        prestationOptions.style.display = 'none';
        produitOptions.style.display = 'block';
        quantiteInput.disabled = false; // Activer l'input de quantité pour les produits
    } else {
        prestationOptions.style.display = 'none';
        produitOptions.style.display = 'none';
        quantiteInput.disabled = true; // Désactiver si aucun type sélectionné
    }
});


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
        quantite = document.getElementById('quantite').value;
    }

    generateDevis(nom, prenom, adresse, telephone, email, item, quantite);
});


function getPrixHT(item) {
    const prix = {
        lavage_exterieur: 69,
        lavage_interieur: 59,
        lavage_complet: 109,
        traitement_ceramique : 39,
        lustrage_integral : 49,
        Coffret_lavage_normal : 12,
        Coffret_lavage_prenium : 21,
        Coffret_lavage_exclusif :35,
        Bouteille_de_savon_ultra_moussant : 6 ,
        Pulvérisateur_lustrant_déperlant : 4,
        Cire_lustrante : 16
    };
    
    return prix[item];
}

function getDescription(item) {
    const descriptions = {
        lavage_exterieur: 'Lavage extérieur de la voiture',
        lavage_interieur: 'Lavage intérieur de la voiture',
        lavage_complet: 'Lavage complet de la voiture',
        traitement_ceramique : 'Traitement céramique',
        lustrage_integral : 'Lustrage intégral',
        Coffret_lavage_normal: 'Un coffret contenant des produits pour un lavage normal de la voiture.',
        Coffret_lavage_prenium : 'Un coffret premium avec des produits de haute qualité pour le lavage de la voiture.',
        Coffret_lavage_exclusif : 'Un coffret exclusif avec des produits de luxe pour le lavage de la voiture.',
        Bouteille_de_savon_ultra_moussant : 'Savon spécialement conçu pour produire une mousse abondante.',
        Pulvérisateur_lustrant_déperlant : 'Pulvérisateur pour donner une finition lustrée et déperlante.',
        Cire_lustrante : 'Cire pour donner un éclat supplémentaire à la carrosserie.'
    };    
    return descriptions[item] || 'Description non disponible';
}


function generateDevis(nom, prenom, adresse, telephone, email, item, quantite) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tauxTVA = 0.2; // Taux de TVA de 20%
    const prixHT = getPrixHT(item);
    const totalHT = prixHT * quantite;
    const totalTVA = totalHT * tauxTVA;
    const totalTTC = totalHT + totalTVA;

    // doc.text(`Devis Proforma`, 10, 10);
    // doc.text(`Nom : ${nom}`, 10, 20);
    // doc.text(`Prénom : ${prenom}`, 10, 30);
    // doc.text(`Adresse : ${adresse}`, 10, 40);
    // doc.text(`Téléphone : ${telephone}`, 10, 50);
    // doc.text(`Email : ${email}`, 10, 60);
    // doc.text(`Nom du produit ou de la prestation : ${item}`, 10, 70);
    // doc.text(`Quantité : ${quantite}`, 10, 80);
    // doc.text(`Description : ${getDescription(item)}`, 10, 90);
    // doc.text(`Total HT : ${totalHT.toFixed(2)} €`, 10, 100);
    // doc.text(`TVA (20%) : ${totalTVA.toFixed(2)} €`, 10, 110);
    // doc.text(`Total TTC : ${totalTTC.toFixed(2)} €`, 10, 120);

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

    doc.save('devis.pdf');
}


