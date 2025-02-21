import { Button } from "./components/ui/button";
import Link from "next/link";

const Sidebar = () => {
    return (
      <aside className="w-64 h-screen border-r p-4 overflow-y-scroll">
        <div className="space-y-6">
          <div>
            {/*<div className="flex items-center space-x-2 mb-4">
                <Search className="w-4 h-4 text-gray-500 " />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-500 ml-2">CTRL K</span>
            </div>*/}
            <h2 className="text-sm font-semibold mb-2 text-gray-500">COMMENCER</h2>
            <div className="space-y-1">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start">Aperçu</Button>
              </Link>
              <Link href="/pages/quickstart">
                <Button variant="ghost" className="w-full justify-start">Démarrage rapide</Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">Open Source</Button>
              <Link href="/pages/changelog">
                <Button variant="ghost" className="w-full justify-start">Journal des modifications</Button>
              </Link>
              <Link href="/pages/politic">
              <Button variant="ghost" className="w-full justify-start">Conditions & Politiques</Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold mb-2 text-gray-500">FONCTIONALITES PRINCIPALES</h2>
            <div className="space-y-1">
              <Link href="/pages/introduction">
                <Button variant="ghost" className="w-full justify-start text-left">Introduction</Button>
              </Link>
              <Link href="/pages/endpoint">
                <Button variant="ghost" className="w-full justify-start text-left">NOS ENDPOINTS</Button>
              </Link>
              <Link href="/pages/structure">
                <Button variant="ghost" className="w-full justify-start text-left">Structure des dossiers</Button>
              </Link>
              <Link href="/pages/bonusrules">
                <Button variant="ghost" className="w-full justify-start text-left">Création de règles de bonification</Button>
              </Link>
              <Link href="/pages/autoaward">
                <Button variant="ghost" className="w-full justify-start text-left">Attribution automatique de récompenses</Button>
              </Link>
              <Link href="/pages/suivirecompenses">
                <Button variant="ghost" className="w-full justify-start text-left">Suivi et gestion des récompenses</Button>
              </Link>
              <Link href="/pages/gestionbeneficiaire">
                <Button variant="ghost" className="w-full justify-start text-left">Gestion des bénéficiaires</Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    );
};
export default Sidebar;
