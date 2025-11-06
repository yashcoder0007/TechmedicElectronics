import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-tech-gray mb-4">Page not available</h1>
          <p className="text-tech-gray-light">Electronic components are no longer offered.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;