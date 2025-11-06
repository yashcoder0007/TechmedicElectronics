import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ShoppingCart, X, CheckCircle } from "lucide-react";

interface ComponentOrderFormProps {
  productName: string;
  productPrice: string;
  productFeatures: string[];
  children: React.ReactNode;
}

const ComponentOrderForm = ({ productName, productPrice, productFeatures, children }: ComponentOrderFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setOrderPlaced(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div onClick={handleOpen}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-lg font-semibold text-tech-gray">
            Order {productName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3">
          {!orderPlaced ? (
            <>
              {/* Product Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-semibold text-tech-gray mb-1">{productName}</h3>
                <p className="text-tech-accent font-bold text-base mb-1">{productPrice}</p>
                <div className="flex flex-wrap gap-1">
                  {productFeatures.map((feature, index) => (
                    <span key={index} className="text-xs bg-tech-blue/10 text-tech-blue px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order Form */}
              <form 
                action="https://formspree.io/f/xrbazlzv" 
                method="POST"
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderPlaced(true);
                  // You can add actual form submission logic here
                  const formData = new FormData(e.currentTarget);
                  fetch("https://formspree.io/f/xrbazlzv", {
                    method: "POST",
                    body: formData,
                  });
                }}
              >
                {/* Hidden fields for product info */}
                <input type="hidden" name="product" value={productName} />
                <input type="hidden" name="price" value={productPrice} />
                <input type="hidden" name="orderType" value="Electronic Component" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-tech-gray">First Name</Label>
                    <Input id="firstName" name="firstName" type="text" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-tech-gray">Last Name</Label>
                    <Input id="lastName" name="lastName" type="text" className="mt-1" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-tech-gray">Email Address</Label>
                  <Input id="email" name="email" type="email" className="mt-1" required />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-tech-gray">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-1" required />
                </div>
                
                <div>
                  <Label htmlFor="quantity" className="text-tech-gray">Quantity</Label>
                  <Input id="quantity" name="quantity" type="number" min="1" defaultValue="1" className="mt-1" required />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-tech-gray">Company (Optional)</Label>
                  <Input id="company" name="company" type="text" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-tech-gray">Address</Label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    rows={2} 
                    className="mt-1" 
                    placeholder="Enter your complete address..."
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-tech-gray">City</Label>
                    <Input id="city" name="city" type="text" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-tech-gray">State</Label>
                    <Input id="state" name="state" type="text" className="mt-1" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pincode" className="text-tech-gray">Pincode</Label>
                    <Input id="pincode" name="pincode" type="text" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-tech-gray">Country</Label>
                    <Input id="country" name="country" type="text" className="mt-1" defaultValue="India" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-tech-gray">Additional Notes</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={2} 
                    className="mt-1" 
                    placeholder="Any special requirements or notes..."
                  />
                </div>
                
                <div className="flex space-x-3 pt-3">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="flex-1"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-tech-blue hover:bg-tech-blue-dark text-white"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Place Order
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-tech-gray mb-2">Order Placed Successfully!</h3>
              <p className="text-tech-gray-light mb-6">
                Thank you for your order. We'll contact you soon with further details.
              </p>
              <Button 
                onClick={handleClose}
                className="bg-tech-blue hover:bg-tech-blue-dark text-white"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentOrderForm;
