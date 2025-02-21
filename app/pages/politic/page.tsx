import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Cette politique de confidentialité décrit comment notre application de bonification collecte,
          utilise et protège vos informations personnelles lorsque vous utilisez notre service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Informations Collectées</h2>
        <p>
          Nous collectons les informations suivantes pour vous fournir et améliorer notre service :
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Informations d&apos;identification (nom, adresse e-mail, numéro de téléphone)</li>
          <li>Historique des transactions pour calculer vos points de bonification</li>
          <li>Informations techniques (adresse IP, type de navigateur, logs d&apos;activité)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Utilisation des Informations</h2>
        <p>Nous utilisons vos informations personnelles pour :</p>
        <ul className="list-disc ml-6 mt-4">
          <li>Attribuer des points de bonification en fonction de vos transactions</li>
          <li>Gérer votre compte et vos préférences utilisateur</li>
          <li>Améliorer la qualité et la sécurité de nos services</li>
          <li>Communiquer avec vous sur des mises à jour ou des offres spéciales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Partage des Informations</h2>
        <p>
          Vos informations personnelles ne sont ni vendues, ni louées. Nous pouvons les partager avec :
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Des prestataires de services pour le traitement des transactions</li>
          <li>Des autorités si la loi l&apos;exige</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Sécurité des Données</h2>
        <p>
          Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre
          l&apos;accès non autorisé, l&apos;altération ou la destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Vos Droits</h2>
        <p>Vous avez le droit de :</p>
        <ul className="list-disc ml-6 mt-4">
          <li>Accéder à vos informations personnelles</li>
          <li>Demander la correction ou la suppression de vos données</li>
          <li>Vous opposer à certains traitements de vos données</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications de la Politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Les changements
          seront notifiés sur cette page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité, contactez-nous à :
          <a href="ingenieurnoundjeu@gmail.com" className="text-blue-600 underline ml-1">
            ingenieurnoundjeu@gmail.com 
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;