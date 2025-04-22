
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coins, CreditCard, Bitcoin } from "lucide-react";

const PreSaleForm = () => {
  const [amount, setAmount] = useState<string>("1000");
  const [paymentMethod, setPaymentMethod] = useState<string>("eth");
  
  const calculateTokens = (value: string): number => {
    const numValue = parseFloat(value) || 0;
    // Assuming token price is $0.05
    return numValue / 0.05;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual submission logic - for now just an alert
    alert(`You are purchasing ${calculateTokens(amount).toLocaleString()} MPC tokens for $${amount}`);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-peace" />
          Purchase Tokens
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Select Payment Method</label>
              <Select 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4" />
                      <span>Ethereum</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="bnb">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4" />
                      <span>BNB</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="card">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Credit Card</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Amount in USD</label>
              <Input
                type="number"
                min="50"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-background"
              />
              <div className="text-xs text-muted-foreground">Minimum purchase: $50</div>
            </div>

            <div className="p-3 bg-muted/50 rounded-lg">
              <div className="flex justify-between text-sm">
                <span>You will receive:</span>
                <span className="font-bold">{calculateTokens(amount).toLocaleString()} MPC</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>Price per token:</span>
                <span>$0.05</span>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6 peace-gradient">
            Purchase Tokens
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground px-6 pt-0 justify-center text-center">
        By purchasing tokens, you agree to our Terms & Conditions and Privacy Policy
      </CardFooter>
    </Card>
  );
};

export default PreSaleForm;
