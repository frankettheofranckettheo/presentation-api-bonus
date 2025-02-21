import React from 'react';

const Changelog: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Journal des Modifications</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Version 1.2.0 - (2025-02-20)</h2>
        <ul className="list-disc ml-6">
          <li>Modification de la gestion des règles personnalisées pour les bonifications.</li>
          <li>Personnalisation des seuils de récompenses.</li>
          <li>Intégration avec des plateformes tierces pour plus de flexibilité.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Version 1.1.0 - (2025-02-10)</h2>
        <ul className="list-disc ml-6">
          <li>Modification de la structure du tableau de bord des transactions et recompenses.</li>
          <li>Amélioration de la sécurité des sessions utilisateurs.</li>
          <li>Correction de bugs mineurs sur la validation des transactions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Version 1.0.0 - (2024-09-15)</h2>
        <ul className="list-disc ml-6">
          <li>Première version de l&apos;application de bonification.</li>
          <li>Suivi des transactions et attribution automatique des points.</li>
          <li>Interface utilisateur pour visualiser les récompenses disponibles.</li>
        </ul>
      </section>
    </div>
  );
};

export default Changelog;
