import React from "react";

const GestionBeneficiaires = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/*<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">*/}
        <h1 className="text-3xl font-bold mb-4">Gestion des Bénéficiaires</h1>
        <p className="text-gray-700 mb-4">
          Cette section décrit la gestion des bénéficiaires dans l’application de bonification, permettant aux administrateurs de gérer les utilisateurs
          qui peuvent recevoir des récompenses.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Ajout des bénéficiaires</h2>
        <p className="text-gray-700">
          Les administrateurs peuvent ajouter des bénéficiaires manuellement via l&apos;interface d&apos;administration. Lorsqu&apos;un bénéficiaire est ajouté,
          il commence à accumuler des transactions qui pourront lui permettre de recevoir des récompenses.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Ajout manuel :</strong> Ajouter des bénéficiaires en renseignant leurs informations de manière individuelle.</li>
          <li><strong>Importation de masse :</strong> Ajouter plusieurs bénéficiaires en important un fichier CSV ou Excel.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Modification des bénéficiaires</h2>
        <p className="text-gray-700">
          Les administrateurs peuvent modifier les informations des bénéficiaires, comme leur statut d&apos;éligibilité et leurs données personnelles.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Modification des informations :</strong> Mise à jour des informations personnelles comme le nom et l&apos;email.</li>
          <li><strong>Modification du statut :</strong> Activation ou désactivation du droit à recevoir des récompenses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Suppression des bénéficiaires</h2>
        <p className="text-gray-700">
          Les administrateurs peuvent supprimer des bénéficiaires qui ne sont plus éligibles ou qui ne doivent plus recevoir de récompenses.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Suppression complète :</strong> Suppression définitive de toutes les informations du bénéficiaire.</li>
          <li><strong>Suppression temporaire :</strong> Désactivation temporaire permettant une réactivation ultérieure.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Gestion des transactions des bénéficiaires</h2>
        <p className="text-gray-700">
          Les administrateurs peuvent consulter les transactions effectuées par chaque bénéficiaire et vérifier s&apos;ils remplissent les critères d&apos;éligibilité.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Consultation des transactions :</strong> Visualisation de l&apos;historique des transactions pour chaque bénéficiaire.</li>
          <li><strong>Vérification des critères d&apos;éligibilité :</strong> S&apos;assurer que le bénéficiaire a atteint les critères pour recevoir des récompenses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Exemples de gestion des bénéficiaires</h2>
        <p className="text-gray-700">
          Voici des exemples d&apos;actions possibles pour la gestion des bénéficiaires :
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Activation de l&apos;éligibilité :</strong> Permettre à un bénéficiaire d&apos;être éligible après avoir rempli les conditions requises.</li>
          <li><strong>Modification de statut :</strong> Changer le statut d&apos;un bénéficiaire pour l&apos;empêcher de recevoir des récompenses.</li>
          <li><strong>Suppression :</strong> Retirer un bénéficiaire du système lorsqu&apos;il ne respecte plus les conditions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. API pour la gestion des bénéficiaires</h2>
        <p className="text-gray-700">
          L&apos;API permet aux administrateurs de gérer les bénéficiaires de manière programmatique, en effectuant des actions comme l&apos;ajout, la modification, la suppression
          et la consultation des bénéficiaires via des endpoints dédiés.
        </p>
      {/*</div>*/}
    </div>
  );
};

export default GestionBeneficiaires;
