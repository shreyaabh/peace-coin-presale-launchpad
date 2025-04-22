
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Tokenomics = () => {
  const tokenomicsData = [
    { name: "Pre-Sale", value: 30, color: "#9b87f5" },
    { name: "Liquidity Pool", value: 20, color: "#6e59a5" },
    { name: "Team", value: 15, color: "#d6bcfa" },
    { name: "Development", value: 15, color: "#8e9196" },
    { name: "Marketing", value: 10, color: "#f2fce2" },
    { name: "Reserves", value: 10, color: "#fef7cd" },
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-center">Tokenomics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tokenomicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {tokenomicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Allocation']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tokenomics;
