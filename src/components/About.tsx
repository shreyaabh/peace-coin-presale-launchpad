
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-center">About MyPeaceCoin</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-xl leading-relaxed">
          MyPeaceCoin ($MPC) is a revolutionary cryptocurrency designed to promote global peace and support humanitarian efforts worldwide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="space-y-2">
            <div className="mx-auto bg-peace/10 rounded-full w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-peace">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <h3 className="font-bold text-lg">Mission-Driven</h3>
            <p className="text-muted-foreground">We direct 5% of all transactions to global peace initiatives and humanitarian aid programs.</p>
          </div>
          
          <div className="space-y-2">
            <div className="mx-auto bg-peace/10 rounded-full w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-peace">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3 className="font-bold text-lg">Transparent Governance</h3>
            <p className="text-muted-foreground">Community-driven decisions on which peace initiatives receive funding through on-chain voting.</p>
          </div>
          
          <div className="space-y-2">
            <div className="mx-auto bg-peace/10 rounded-full w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-peace">
                <path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18"></path>
                <path d="M8 9h8"></path>
                <path d="M8 15h8"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg">Sustainable Growth</h3>
            <p className="text-muted-foreground">Tokenomics designed for long-term value creation and stability for all holders.</p>
          </div>
        </div>
        
        <div className="mt-8 text-lg">
          <p>Join us in creating a more peaceful world through the power of blockchain technology.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
