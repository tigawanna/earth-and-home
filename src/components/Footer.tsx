import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo-white.svg" 
                alt="Earth & Home" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-4">
              Earth & Home is dedicated to helping you find the perfect property that matches your lifestyle, needs, and dreams.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-earth-green-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-earth-green-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-earth-green-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-earth-green-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-earth-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-earth-green-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-earth-green-400 transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-earth-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-earth-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-earth-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=house" className="hover:text-earth-green-400 transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=apartment" className="hover:text-earth-green-400 transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="hover:text-earth-green-400 transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="hover:text-earth-green-400 transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/properties?type=land" className="hover:text-earth-green-400 transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-earth-green-400" />
                <span>123 Property Street, Real Estate City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-earth-green-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-earth-green-400" />
                <span>info@earthandhome.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Earth & Home. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-earth-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-earth-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-earth-green-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;