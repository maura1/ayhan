import React from "react";
import Container from "@/components/ui/container";

const prices = [  {
    left: [
      {
        title: "LIDSTRICH OBEN",
        description: "fein pigmentierte Linie am oberen Wimpernkranz (Eyeliner)",
        price: "190,00 EUR",
      },
      {
        title: "WIMPERNKRANZVERDICHTUNG OBEN",
        description: "leichte bis zarte Pigmentierung zwischen den oberen Wimpern",
        price: "200,00 EUR",
      },
      {
        title: "LIDSTRICH OBEN",
        description: "fein pigmentierte Linie am oberen Wimpernkranz (Eyeliner)",
        price: "250,00 EUR",
      },
      {
        title: "WIMPERNKRANZVERDICHTUNG OBEN",
        description: "leichte bis zarte Pigmentierung zwischen den oberen Wimpern",
        price: "120,00 EUR",
      },
      
    ],
    right: [
      
      {
        title: "AUGENBRAUEN HÄRCHENZEICHNUNG 2D",
        description: "natürliche, feine Härchenzeichnung (2 Farben)",
        price: "100,00 EUR",
      },
      {
        title: "AUGENBRAUEN KOMBI",
        description: "",
        price: "200,00 EUR",
      },
      {
        title: "AUGENBRAUEN HÄRCHENZEICHNUNG 2D",
        description: "natürliche, feine Härchenzeichnung (2 Farben)",
        price: "200,00 EUR",
      },
      {
        title: "AUGENBRAUEN KOMBI",
        description: "",
        price: "100,00 EUR",
      },
    ],
  },
]

const PriceList: React.FC = () => {
  return (
    <Container>
      <div className="bg-navbarBg px-16">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-navbarText">
          Preise 
        </h1>
        
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          {prices[0].left.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-6 border-b border-whiteBg min-h-[100px]"
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold text-navbarText">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-navbarText mt-2">{item.description}</p>
                )}
              </div>
              <p className="text-lg font-bold text-yellow-600">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {prices[0].right.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-6 border-b border-whiteBg min-h-[100px]"
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold text-navbarText">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-navbarText mt-2">{item.description}</p>
                )}
              </div>
              <p className="text-lg font-bold text-yellow-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Container>
  );
};

export default PriceList;