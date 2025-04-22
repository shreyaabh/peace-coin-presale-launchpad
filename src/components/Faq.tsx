
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Faq = () => {
  const faqItems = [
    {
      question: "What is MyPeaceCoin (MPC)?",
      answer: "MyPeaceCoin is a cryptocurrency designed to promote peace and humanitarian efforts worldwide. It aims to create a decentralized ecosystem for funding peace initiatives and humanitarian aid."
    },
    {
      question: "How can I participate in the pre-sale?",
      answer: "You can participate in the pre-sale by connecting your wallet or using a credit card on our platform. The minimum contribution is $50, and you can purchase tokens at the pre-sale price of $0.05 per token."
    },
    {
      question: "When will the tokens be distributed?",
      answer: "Tokens will be distributed immediately after your purchase during the pre-sale period. They will be sent to the wallet address you provided during the purchase process."
    },
    {
      question: "Is there a vesting period for pre-sale tokens?",
      answer: "Pre-sale tokens have a 2-month vesting period, with 25% released at TGE (Token Generation Event) and the remaining 75% released monthly over the following 3 months."
    },
    {
      question: "Which blockchain is MyPeaceCoin built on?",
      answer: "MyPeaceCoin is built on the Ethereum blockchain as an ERC-20 token, ensuring compatibility with most major wallets and exchanges."
    },
    {
      question: "What is the total supply of MyPeaceCoin?",
      answer: "The total supply of MyPeaceCoin is capped at 100,000,000 MPC tokens, with no additional minting possible."
    }
  ];

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Faq;
