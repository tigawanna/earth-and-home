import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, ArrowRight, Home } from "lucide-react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  status: "For Sale" | "For Rent" | "New" | "Featured";
};

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$850,000",
    image: "/property-1.jpg",
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: "Villa",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    location: "Manhattan, NY",
    price: "$3,500/mo",
    image: "/property-2.jpg",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "Apartment",
    status: "For Rent",
  },
  {
    id: 3,
    title: "Seaside Family Home",
    location: "Malibu, CA",
    price: "$1,250,000",
    image: "/property-3.jpg",
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: "House",
    status: "Featured",
  },
  {
    id: 4,
    title: "Urban Loft Space",
    location: "Chicago, IL",
    price: "$625,000",
    image: "/property-4.jpg",
    beds: 1,
    baths: 1,
    sqft: 950,
    type: "Loft",
    status: "New",
  },
  {
    id: 5,
    title: "Suburban Family Home",
    location: "Austin, TX",
    price: "$550,000",
    image: "/property-5.jpg",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "House",
    status: "For Sale",
  },
  {
    id: 6,
    title: "Mountain View Cabin",
    location: "Denver, CO",
    price: "$420,000",
    image: "/property-6.jpg",
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "Cabin",
    status: "For Sale",
  },
];

const PropertyCard = ({ property }: { property: Property }) => {
  const getBadgeVariant = (status: Property["status"]) => {
    switch (status) {
      case "For Sale":
        return "default";
      case "For Rent":
        return "secondary";
      case "New":
        return "outline";
      case "Featured":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="relative">
        <Image
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover"
          width={400}
          height={300}
        />
        <div className="absolute top-4 right-4">
          <Badge variant={getBadgeVariant(property.status)}>
            {property.status}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            {property.price}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <Button variant="ghost" className="w-full justify-between text-earth-green-600 hover:text-earth-green-700 hover:bg-earth-green-50">
            View Details
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties available for sale and rent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-earth-green-600 hover:bg-earth-green-700">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;