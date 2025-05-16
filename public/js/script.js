let devisData = [];

fetch('../CrystalCarWash/api/getDevisData.php')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log("Données :", data);
    devisData = data; // On stocke les données globalement
  })
  .catch(error => console.error("Erreur :", error));


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




function generateDevis(nom, prenom, adresse, telephone, email, itemNom, quantite) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tauxTVA = 0.2;

    // Rechercher l'objet correspondant dans devisData
    const item = devisData.find(obj => obj.nom === itemNom);
    if (!item) {
        alert("Erreur : élément non trouvé dans les données.");
        return;
    }

    const prixHT = parseFloat(item.prix);
    const description = item.description;
    const totalHT = prixHT * quantite;
    const totalTVA = totalHT * tauxTVA;
    const totalTTC = totalHT + totalTVA;

    // PDF layout
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 255);
    doc.text("Devis CrystalCarWash", 10, 10);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);

    doc.text(`Nom : ${nom}`, 10, 20);
    doc.text(`Prénom : ${prenom}`, 10, 30);
    doc.text(`Adresse : ${adresse}`, 10, 40);
    doc.text(`Téléphone : ${telephone}`, 10, 50);
    doc.text(`Email : ${email}`, 10, 60);

    doc.line(10, 70, 200, 70);

    doc.text(`Nom du produit ou de la prestation : ${itemNom}`, 10, 80);
    doc.text(`Quantité : ${quantite}`, 10, 90);
    doc.text(`Description : ${description}`, 10, 100);

    doc.line(10, 110, 200, 110);

    doc.text(`Total HT : ${totalHT.toFixed(2)} €`, 10, 120);
    doc.text(`TVA (20%) : ${totalTVA.toFixed(2)} €`, 10, 130);
    doc.text(`Total TTC : ${totalTTC.toFixed(2)} €`, 10, 140);

    doc.save('devis.pdf');
}
