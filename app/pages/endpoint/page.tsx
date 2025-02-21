'use client';

import React, { useState, useRef } from "react";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";

const apiDocs = [
  {
    category: "Transactions",
    endpoints: [
      {
        method: "POST",
        url: "/api/transactions",
        description: "Créer une nouvelle transaction utilisateur.",
        request: `{
  "userId": "12345",
  "amount": 100,
  "description": "Achat en ligne"
}`,
        response: `{
  "transactionId": "67890",
  "userId": "12345",
  "amount": 100,
  "status": "success"
}`
      },
      {
        method: "GET",
        url: "/api/transactions/{userId}",
        description: "Récupérer l'historique des transactions d'un utilisateur.",
        response: `[
  {
    "transactionId": "67890",
    "amount": 100,
    "status": "success"
  }
]`
      }
    ]
  },
  {
    category: "Récompenses",
    endpoints: [
      {
        method: "GET",
        url: "/api/rewards/{userId}",
        description: "Lister les récompenses obtenues par un utilisateur.",
        response: `[
  {
    "rewardId": "abc123",
    "type": "cashback",
    "value": 10
  }
]`
      }
    ]
  },
  {
    category: "Administration",
    endpoints: [
      {
        method: "POST",
        url: "/api/administrator/rules",
        description: "Créer ou modifier les règles de bonification.",
        request: `{
  "ruleName": "Bonus 10%",
  "condition": "amount > 100",
  "reward": "10%"
}`,
        response: `{
  "status": "success",
  "ruleId": "rule789"
}`
      },
      {
        method: "POST",
        url: "/api/administrator/register",
        description: "Créer ou modifier les règles de bonification.",
        request: `{
  "ruleName": "Bonus 10%",
  "condition": "amount > 100",
  "reward": "10%"
}`,
        response: `{
  "status": "success",
  "ruleId": "rule789"
}`
      }      
    ]
  }
];

const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="relative mt-2 rounded-lg bg-gray-900 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copiedCode === id ? "Copié!" : "Copier"}
        </button>
      </div>
      <pre className="text-sm text-white overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Endpoints = () => {
  const [selectedCategory, setSelectedCategory] = useState(apiDocs[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Documentation API de Bonification</h1>
      
      <div className="relative mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="shrink-0 p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto py-2 scroll-smooth"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {apiDocs.map((doc) => (
              <button
                key={doc.category}
                onClick={() => setSelectedCategory(doc)}
                className={`shrink-0 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory.category === doc.category
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {doc.category}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="shrink-0 p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {selectedCategory.endpoints.map((endpoint, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-sm font-mono px-2 py-1 rounded ${
                endpoint.method === "GET" ? "bg-blue-100 text-blue-700" :
                endpoint.method === "POST" ? "bg-green-100 text-green-700" :
                "bg-gray-100 text-gray-700"
              }`}>
                {endpoint.method}
              </span>
              <span className="font-mono text-lg">{endpoint.url}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{endpoint.description}</p>

            {endpoint.request && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Exemple de requête</h3>
                <CodeBlock
                  id={`request-${index}`}
                  language="json"
                  code={endpoint.request}
                />
              </div>
            )}

            {endpoint.response && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Exemple de réponse</h3>
                <CodeBlock
                  id={`response-${index}`}
                  language="json"
                  code={endpoint.response}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Details supplémentaires</h2>
        <p>Pour plus d&apos;informations aller sur </p>
      </section>
    </div>
  );
};

export default Endpoints;