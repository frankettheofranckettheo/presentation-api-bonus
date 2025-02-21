import { Button } from "./button";
import Link from "next/link";
import SearchBar from "./searchbar";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 border-b">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-xl font-bold">BONUS API PLATFORM</h1>
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" >
          <Button variant="ghost">Docs</Button>
        </Link>
        <Button variant="secondary">Log in</Button>
        <Button variant="default">Sign up</Button>
      </div>
    </header>
  );
};


export default Navbar