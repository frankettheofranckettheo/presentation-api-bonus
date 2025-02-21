import Link from 'next/link';
import Sidebar from './sidebar';

const Introduction = () => {
  return (

    <div className="flex min-h-screen">
        <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Introduction</h1>

        <p className="mb-4">
          Bienvenue dans la documentation technique de l&apos;API du <strong>Système de Bonification</strong>. Cette API permet de gérer un programme de récompenses attribuées aux utilisateurs en fonction des transactions effectuées et des règles définies par les administrateurs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Objectif de l&apos;API</h2>
        <p className="mb-4">
          L&apos;API de bonification vise à automatiser et simplifier l&apos;attribution de points ou de récompenses aux utilisateurs. Les administrateurs peuvent configurer des règles spécifiques pour déterminer comment et quand les utilisateurs sont récompensés.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Fonctionnalités principales</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Suivi des transactions :</strong> Enregistrer et analyser les transactions des utilisateurs.</li>
          <li><strong>Attribution de récompenses :</strong> Délivrer des points ou des avantages en fonction des règles établies.</li>
          <li><strong>Gestion des règles de bonification :</strong> Créer, modifier et supprimer des règles personnalisées.</li>
          <li><strong>Consultation des points :</strong> Permettre aux utilisateurs de vérifier leur solde de points et leur historique de récompenses.</li>
          <li><strong>Personnalisation des critères :</strong> Définir des conditions spécifiques (montant, fréquence, type de transaction, etc.) pour l&apos;attribution des bonus.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Public cible</h2>
        <p className="mb-4">
          Cette documentation est destinée aux développeurs et aux administrateurs techniques souhaitant intégrer ou gérer le système de bonification au sein de leur plateforme.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prérequis</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Connaissance de base des requêtes HTTP (GET, POST, PUT, DELETE).</li>
          <li>Familiarité avec JSON pour l&apos;échange de données.</li>
          <li>Environnement compatible avec l&apos;authentification via tokens (JWT ou autre mécanisme sécurisé).</li>
          <li>Environnement compatible avec Spring-Security.</li>

        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Structure de la documentation</h2>
        <ol className="list-decimal ml-6 mb-4 space-y-2">
          <li><strong>Authentification :</strong> Comment s&apos;authentifier pour accéder à l&apos;API.</li>
          <li><strong>Endpoints principaux :</strong> Description des différentes routes disponibles.</li>
          <li><strong>Modèles de données :</strong> Schéma des objets utilisés dans l&apos;API.</li>
          <li><strong>Exemples d&apos;utilisation :</strong> Requêtes courantes et cas d&apos;usage.</li>
          <li><strong>Gestion des erreurs :</strong> Description des codes d&apos;erreur et solutions possibles.</li>
        </ol>

        <p className="mt-8">
          Pour plus de détails, consultez notre{' '}
          <Link href="/reference/libraries" className="text-blue-600 hover:underline">page de référence des bibliothèques</Link>.
        </p>

        <p className="mt-4">
          Commencez à explorer l&apos;API et intégrez facilement un programme de fidélité personnalisé dans votre application.
        </p>
      </main>
    </div>
  );
};

export default Introduction;
