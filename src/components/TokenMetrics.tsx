
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TokenMetricsProps {
  price: string;
  totalSupply: string;
  soldTokens: number;
  hardCap: number;
  salesProgress: number;
  raised: string;
  className?: string;
}

const TokenMetrics = ({
  price = "$0.05",
  totalSupply = "100,000,000 MPC",
  soldTokens = 32000000,
  hardCap = 50000000,
  salesProgress = 64,
  raised = "$1,600,000",
  className = ""
}: TokenMetricsProps) => {
  return (
    <div className={`grid gap-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2">Token Price</div>
            <div className="text-2xl font-bold text-foreground">{price}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2">Total Supply</div>
            <div className="text-2xl font-bold text-foreground">{totalSupply}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground mb-2">Total Raised</div>
            <div className="text-2xl font-bold text-foreground">{raised}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium text-muted-foreground">Sales Progress</div>
            <div className="text-sm font-medium text-muted-foreground">{salesProgress}%</div>
          </div>
          <Progress value={salesProgress} className="h-3 mb-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <div>{soldTokens.toLocaleString()} MPC</div>
            <div>{hardCap.toLocaleString()} MPC</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TokenMetrics;
