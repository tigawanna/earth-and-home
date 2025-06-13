import { Button } from "@/components/ui/button";
import { Search, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-earth-green-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@earthandhome.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Licensed Real Estate Professionals</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image 
              src="/logo.png" 
              alt="Earth & Home Logo" 
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-2xl font-playfair font-bold text-earth-green-600">
                Earth & Home
              </h1>
              <p className="text-sm text-gray-500">Real Estate Excellence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#properties" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              Properties
            </Link>
            <Link href="#buy" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              Buy
            </Link>
            <Link href="#sell" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              Sell
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-earth-green-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="bg-earth-orange-500 hover:bg-earth-orange-600 text-white">
              List Property
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;