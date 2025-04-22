
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calculator, DollarSign } from "lucide-react";

const TOKEN_PRICE = 0.05;

const CalculatorComponent = () => {
  const [usd, setUsd] = useState<string>("100");
  const tokens = parseFloat(usd) > 0 ? parseFloat(usd) / TOKEN_PRICE : 0;

  return (
    <Card className="glass-card mb-8 max-w-xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-2 pb-2">
        <Calculator className="h-5 w-5 text-peace" />
        <CardTitle>Calculate Your $MPC</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="usd" className="text-sm text-muted-foreground mb-1">
              Amount in USD
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-muted-foreground">
                <DollarSign className="w-4 h-4" />
              </span>
              <Input
                id="usd"
                type="number"
                min="0"
                value={usd}
                onChange={(e) => setUsd(e.target.value)}
                className="pl-9 bg-background"
                placeholder="Enter USD amount"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs text-muted-foreground mb-1">You Get</div>
            <div className="text-lg font-bold whitespace-nowrap">
              {tokens.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-peace">MPC</span>
            </div>
            <div className="text-[10px] text-muted-foreground">
              @ $0.05 / token
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorComponent;
