import React from 'react';

const QuickStartGuide: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Guide de Démarrage Rapide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Bienvenue dans notre application de bonification. Ce guide vous aidera à configurer rapidement
          et à commencer à utiliser le système de récompenses basé sur vos transactions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Création d&apos;un Compte</h2>
        <p>Pour commencer :</p>
        <ol className="list-decimal ml-6 mt-4">
          <li>Accédez à la page d&apos;inscription.</li>
          <li>Remplissez vos informations personnelles (nom, e-mail, mot de passe).</li>
          <li>Validez votre adresse e-mail via le lien reçu.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Connexion</h2>
        <p>Une fois inscrit :</p>
        <ol className="list-decimal ml-6 mt-4">
          <li>Rendez-vous sur la page de connexion.</li>
          <li>Saisissez votre adresse e-mail et votre mot de passe.</li>
          <li>Accédez à votre tableau de bord.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Permettez à vos utilisateurs d&apos;effectuer des Transactions dans votre système</h2>
        <p>
          Chaque transaction que vos utilisateurs effectueront est enregistrée et des points de bonification sont calculés
          en fonction des règles définies. Vous puvez aussi permettre aux utilisateurs de consulter vos transactions en faisant :
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Un tableau de bord qui montre l&apos;historique des transactions.</li>
          <li>Permettre la Visualisation des points accumulés pour chaque achat.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Support</h2>
        <p>
          Si vous avez des questions ou besoin d&apos;aide, contactez-nous à :
          <a href="ingenieurnoundjeu@gmail.com" className="text-blue-600 underline ml-1">
            ingenieurnoundjeu@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default QuickStartGuide;
