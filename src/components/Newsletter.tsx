import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 text-earth-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest properties, market trends, and real estate tips
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-earth-green-500 focus:border-earth-green-500"
                required
              />
            </div>
            <Button type="submit" className="bg-earth-green-600 hover:bg-earth-green-700 md:whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;