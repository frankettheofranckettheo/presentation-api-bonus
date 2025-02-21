import React from "react";

const AutoRewards = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Attribution automatique de récompenses</h1>
      <p className="text-gray-700 mb-4">
        Cette section décrit le fonctionnement de l&apos;attribution automatique des récompenses aux utilisateurs en fonction des règles définies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Principe de l&apos;attribution automatique</h2>
      <p className="text-gray-700">
        L&apos;application analyse les transactions des utilisateurs et applique les règles de bonification définies par l&apos;administrateur. Lorsque les critères sont remplis, une récompense est automatiquement attribuée.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Déclenchement des récompenses</h2>
      <p className="text-gray-700">
        Une récompense est attribuée lorsque :
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Un utilisateur atteint un seuil de transactions défini.</li>
        <li>Le montant total dépensé dépasse une certaine valeur.</li>
        <li>Une action spécifique est réalisée (exemple : parrainage, abonnement premium).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Types de récompenses</h2>
      <p className="text-gray-700">
        Les récompenses attribuées automatiquement peuvent être :
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Points de fidélité</strong> : cumulables et échangeables contre des avantages.</li>
        <li><strong>Réductions</strong> : remises appliquées sur les prochains achats.</li>
        <li><strong>Cashback</strong> : remboursement partiel des dépenses sous forme de crédit.</li>
        <li><strong>Produits gratuits</strong> : articles offerts après un certain nombre d’achats.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Gestion et suivi</h2>
      <p className="text-gray-700">
        Les administrateurs peuvent consulter les récompenses attribuées via le tableau de bord et modifier les règles si nécessaire.
      </p>
    </div>
  );
};

export default AutoRewards;
