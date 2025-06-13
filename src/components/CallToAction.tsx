import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-earth-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-earth-green-100 mb-10">
            Our team of expert agents is ready to help you find the perfect property. 
            Contact us today to start your journey home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-earth-green-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-earth-green-700">
              <Mail className="mr-2 h-5 w-5" />
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;