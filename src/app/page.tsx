import Categories from "@/components/ui/home/Categories";
import HeroSection from "@/components/ui/home/HeroSection";
import Overview from "@/components/ui/home/Overview";
import Portfolio from "@/components/ui/home/Portfolio";
import ProductShowcase from "@/components/ui/home/ProductShowcase";
import Testimonials from "@/components/ui/home/Testimonials";
import Video from "@/components/ui/home/Video";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-5 md:px-0">
        <Categories />
        <ProductShowcase />
      </div>
      <Video />
      <div className="px-5 md:px-0">
        <Overview />
        <Portfolio />
      </div>
      <Testimonials />
    </div>
  );
};

export default HomePage;
