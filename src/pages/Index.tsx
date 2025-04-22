
import CountdownTimer from "@/components/CountdownTimer";
import TokenMetrics from "@/components/TokenMetrics";
import PreSaleForm from "@/components/PreSaleForm";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Set a target date 30 days from today for the countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537138-5e513100b36e')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-block peace-gradient text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              Pre-Sale Now Live
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">
              MyPeaceCoin
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Cryptocurrency for a more peaceful world
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the revolution and be part of the change with $MPC, the token designed to promote global peace initiatives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="peace-gradient text-white">Buy Tokens</Button>
              <Button variant="outline">Read Whitepaper</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Pre-Sale Ends In</h2>
            <p className="text-muted-foreground">Don't miss your chance to join at the best price</p>
          </div>
          <CountdownTimer targetDate={targetDate} className="max-w-2xl mx-auto" />
        </div>
      </section>

      {/* Token Sale Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Token Sale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participate in our pre-sale to secure your MyPeaceCoin tokens at the lowest price before our public listing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <TokenMetrics 
                className="h-full"
                price="$0.05"
                totalSupply="100,000,000 MPC"
                soldTokens={32000000}
                hardCap={50000000}
                salesProgress={64}
                raised="$1,600,000"
              />
            </div>
            <div className="col-span-1">
              <PreSaleForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <About />
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              MyPeaceCoin has been designed with a sustainable and fair distribution to ensure long-term growth
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Tokenomics />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to the most common questions about MyPeaceCoin and our pre-sale
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold text-gradient">MyPeaceCoin</div>
              <div className="text-sm text-muted-foreground">© 2025 MyPeaceCoin. All rights reserved.</div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-peace">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-peace">Telegram</a>
              <a href="#" className="text-muted-foreground hover:text-peace">Discord</a>
              <a href="#" className="text-muted-foreground hover:text-peace">Medium</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
