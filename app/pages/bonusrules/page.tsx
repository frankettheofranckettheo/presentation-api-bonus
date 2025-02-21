import React from "react";

const BonusRules = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Création de règles de bonification</h1>
      <p className="text-gray-700 mb-4">
        Cette section décrit comment configurer des règles de bonification dans l&apos;application afin de récompenser les utilisateurs en fonction de leurs transactions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Accéder à la configuration des règles</h2>
      <p className="text-gray-700">
        Pour ajouter une règle de bonification :
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Connectez-vous en tant qu&apos;administrateur.</li>
        <li>Accédez à l&apos;onglet <strong>&ldquo;Règles de Bonification&ldquo;</strong> dans le tableau de bord.</li>
        <li>Cliquez sur le bouton <strong>&ldquo;Ajouter une règle&ldquo;</strong>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Définir les critères de la règle</h2>
      <p className="text-gray-700">
        Remplissez les champs nécessaires pour définir la règle :
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li><strong>Nom de la règle :</strong> Donnez un titre descriptif.</li>
        <li><strong>Type de récompense :</strong> Points, réductions, cashback, etc.</li>
        <li><strong>Conditions :</strong> Nombre de transactions, montant total, fréquence d&apos;achat...</li>
        <li><strong>Durée de validité :</strong> Période pendant laquelle la règle est active.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Enregistrer et activer la règle</h2>
      <p className="text-gray-700">
        Une fois tous les champs renseignés :
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Cliquez sur <strong>&ldquo;Enregistrer&ldquo;</strong> pour sauvegarder la règle.</li>
        <li>Activez-la si vous souhaitez qu’elle soit immédiatement appliquée.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Suivi et modification</h2>
      <p className="text-gray-700">
        Vous pouvez consulter les règles existantes, les modifier ou les désactiver à tout moment depuis le tableau de bord.
      </p>
    </div>
  );
};

export default BonusRules;
