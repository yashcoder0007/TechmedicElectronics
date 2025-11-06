import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PCBDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <Footer />
    </div>
  );
};

export default PCBDesign;