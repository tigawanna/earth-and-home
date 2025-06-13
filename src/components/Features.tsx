import { Home, Search, Clock, Shield, Award, Users } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Curated Properties",
    description: "We carefully select and verify each property to ensure quality and value for our clients.",
    icon: <Home className="h-10 w-10 text-earth-green-600" />,
  },
  {
    id: 2,
    title: "Smart Search",
    description: "Our advanced search tools help you find exactly what you're looking for with precision and ease.",
    icon: <Search className="h-10 w-10 text-earth-green-600" />,
  },
  {
    id: 3,
    title: "Fast Response",
    description: "Our team responds quickly to inquiries and requests, ensuring you never miss an opportunity.",
    icon: <Clock className="h-10 w-10 text-earth-green-600" />,
  },
  {
    id: 4,
    title: "Secure Transactions",
    description: "We prioritize security in all transactions, giving you peace of mind throughout the process.",
    icon: <Shield className="h-10 w-10 text-earth-green-600" />,
  },
  {
    id: 5,
    title: "Expert Guidance",
    description: "Our experienced agents provide professional advice and support at every step of your journey.",
    icon: <Award className="h-10 w-10 text-earth-green-600" />,
  },
  {
    id: 6,
    title: "Community Focus",
    description: "We help you find not just a property, but a community that matches your lifestyle and needs.",
    icon: <Users className="h-10 w-10 text-earth-green-600" />,
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md hover:bg-earth-green-50">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Why Choose Earth & Home
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technology and expertise to provide an exceptional real estate experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;