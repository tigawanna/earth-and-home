import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Building, DollarSign } from "lucide-react";

const PropertySearch = () => {
  return (
    <section id="search" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Find Your Dream Property
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our advanced search to find the perfect property that matches your needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                  <option value="">Any Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="miami">Miami</option>
                  <option value="seattle">Seattle</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Property Type</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                  <option value="">Any Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                  <option value="">Any Price</option>
                  <option value="100000-300000">$100k - $300k</option>
                  <option value="300000-500000">$300k - $500k</option>
                  <option value="500000-750000">$500k - $750k</option>
                  <option value="750000-1000000">$750k - $1M</option>
                  <option value="1000000+">$1M+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Square Feet</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                <option value="">Any</option>
                <option value="1000-2000">1,000 - 2,000</option>
                <option value="2000-3000">2,000 - 3,000</option>
                <option value="3000-4000">3,000 - 4,000</option>
                <option value="4000+">4,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Property Status</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500">
                <option value="">Any</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
                <option value="new-construction">New Construction</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-earth-green-600 hover:bg-earth-green-700 px-8">
              <Search className="mr-2 h-5 w-5" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;