import { Button } from "@/components/ui/button";
import { Search, MapPin, Home } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-earth-green-50 to-earth-orange-50 py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight mb-6">
              Find Your Perfect
              <span className="text-earth-green-600 block">Dream Home</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover exceptional properties with Earth & Home. From luxury estates to cozy family homes, 
              we connect you with the perfect place to call home.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-green-600">1,200+</div>
                <div className="text-sm text-gray-600">Properties Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-orange-500">500+</div>
                <div className="text-sm text-gray-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-earth-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-earth-green-600 hover:bg-earth-green-700">
                <Search className="mr-2 h-5 w-5" />
                Browse Properties
              </Button>
              <Button size="lg" variant="outline" className="border-earth-orange-500 text-earth-orange-500 hover:bg-earth-orange-50">
                <Home className="mr-2 h-5 w-5" />
                Sell Your Home
              </Button>
            </div>
          </div>

          {/* Right content - Featured property card */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative">
                <Image 
                  src="/featured-property.jpg" 
                  alt="Featured Property"
                  className="w-full h-64 object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-earth-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    $850,000
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Beverly Hills, CA</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Modern Luxury Villa
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Stunning 4-bedroom villa with panoramic city views, modern amenities, and elegant design.
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>🛏️ 4 Beds</div>
                  <div>🚿 3 Baths</div>
                  <div>📐 2,500 sq ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;