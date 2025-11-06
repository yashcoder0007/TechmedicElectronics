import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Zap, Cpu, Wifi, Camera } from "lucide-react";
import ComponentOrderForm from "./ComponentOrderForm";

const ProductsSection = () => {
  const categories = [
    {
      title: "Integrated Circuits",
      icon: Cpu,
      products: [
        { name: "4440 IC", price: "₹40", inStock: true, features: ["Audio IC", "14-pins"] },
        { name: "2030 IC", price: "₹25", inStock: true, features: ["Audio IC", "5-pins"] },
        { name: "6283 IC", price: "₹30", inStock: true, features: ["Audio IC", "12-pins"] },
        { name: "555 IC", price: "₹30", inStock: true, features: ["Timer IC", "8-pins"] },
      ]
    },
    {
      title: "Transistors",
      icon: Zap,
      products: [
        { name: "TTC5200 Transistor", price: "₹100", inStock: true, features: ["Power Transistor", "NPN type"] },
        { name: "TTA1943 Transistor", price: "₹100", inStock: true, features: ["Power Transistor", "PNP type"] },
        { name: "BD140 Transistor", price: "₹10", inStock: true, features: ["Genral Purpose Transistor", "PNP type"] },
        { name: "BD139 Transistor", price: "₹10", inStock: true, features: ["Genral Purpose Transistor", "NPN type"] },
        { name: "BC547 Transistor", price: "₹5", inStock: true, features: ["Low Power Transistor", "NPN type"] },
        { name: "BC557 Transistor", price: "₹5", inStock: true, features: ["Low Power Transistor", "PNP type"] },
      ]
    },
    {
      title: "Resistors",
      icon: Wifi,
      products: [
        { name: "1K Resistor", price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
        { name: "10K Resistor",price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
        { name: "100-Ohms Resistor", price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
        { name: "22K Resistor", price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
        { name: "47K Resistor", price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
        { name: "640-Ohms Resistor", price: "₹3", inStock: true, features: ["Carbon Film", "Quarter Watt"] },
      ]
    },
  ];

  return (
    <section id="products" className="py-12 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            Electronic Components
          </h2>
          <p className="text-xl text-tech-gray-light max-w-3xl mx-auto">
            Browse our extensive catalog of high-quality electronic components from trusted manufacturers worldwide.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-8">
                <category.icon className="text-tech-blue" size={32} />
                <h3 className="text-2xl font-bold text-tech-gray">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-tech-blue/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-tech-gray group-hover:text-tech-blue transition-colors">
                            {product.name}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs">
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-tech-blue">{product.price}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs border-tech-accent text-tech-accent">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      {product.inStock ? (
                        <ComponentOrderForm
                          productName={product.name}
                          productPrice={product.price}
                          productFeatures={product.features}
                        >
                          <Button className="w-full bg-tech-accent hover:bg-tech-accent/90 text-white">
                            <ShoppingCart className="mr-2" size={16} />
                            Buy Now
                          </Button>
                        </ComponentOrderForm>
                      ) : (
                        <Button 
                          className="w-full bg-gray-400 text-white cursor-not-allowed"
                          disabled
                        >
                          <ShoppingCart className="mr-2" size={16} />
                          Notify When Available
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;