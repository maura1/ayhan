
import ServicesList from "@/components/ServiceList";
import Container from "@/components/ui/container";

const services = [
  {
    id: "1",    
    name: "Wimpernbehandlungen (3)",    
    images: ["/img/products/FX3.png"],
  },
  {
    id: "2",
    name: "Augenbrauenbehandlungen (3)", 
    
    images: ["/img/products/7SIII.png"],
  },
  {
    id: "3",  
    name: "Permanent Make-up (12)",   
    images: ["/img/products/7C.png"],
  },
  {
    id: "4",  
    name: "WimpernBehandlungen (3)",  
    images: ["/img/products/7IV.png"],
  },   
 
];


export default function HomePage() {
  return (
    <Container>
      <div className="overflow-hidden  relative">
        <div
          style={{ backgroundImage: `url(/images/hero.jpg)` }}
          className="aspect-square md:aspect-[2.4/1] bg-cover bg-center"
        >
         
          <div className="absolute inset-0 bg-overlay opacity-30"></div>

          
          <div className="h-full w-full flex flex-col justify-end items-start text-left  ">
            <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white pl-14 ">
              Willkommen bei
              <div className="  pb-12 pl-40  sm:text-pretty md:text-2xl lg:text-3xl ">Ayhan Kublay Permanent Makeup Artist</div>
            </h1>
          </div>
         
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
         
        </div>
        <ServicesList items={services}/>
        
      </div>
    </Container>
  );
}
