import Image from "next/image";
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/testimonial-1.jpg",
    quote: "Earth & Home made finding our dream house so easy. Their team was professional, responsive, and truly cared about our needs. We couldn't be happier with our new home!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "/testimonial-2.jpg",
    quote: "As a real estate investor, I've worked with many agencies, but Earth & Home stands out for their market knowledge and dedication. They helped me find properties with excellent ROI.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    image: "/testimonial-3.jpg",
    quote: "Being a first-time homebuyer was intimidating, but Earth & Home guided me through every step. They found me a beautiful starter home within my budget and made the process stress-free.",
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 relative">
      <div className="absolute -top-5 left-8 bg-earth-green-600 rounded-full p-2 text-white">
        <Quote className="h-6 w-6" />
      </div>
      <div className="flex items-center mb-6 pt-4">
        <div className="relative h-16 w-16 mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full object-cover"
            fill
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-earth-green-50 to-earth-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from homeowners and buyers who found their perfect match with Earth & Home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-2xl font-bold text-earth-green-600 mr-2">4.9</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;