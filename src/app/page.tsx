import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <Features />
      <Testimonials />
      <CallToAction />
      <Newsletter />
      <Footer />
    </main>
  );
}
