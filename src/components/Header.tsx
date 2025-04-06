
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileCode, Home } from "lucide-react";
import { SHLLogo } from "@/components/SHLLogo";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <SHLLogo variant="color" className="h-8 w-auto" />
          <h1 className="text-xl font-semibold">Assessment Finder</h1>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-1.5" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/api-docs">
              <FileCode className="h-4 w-4 mr-1.5" />
              API Docs
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
