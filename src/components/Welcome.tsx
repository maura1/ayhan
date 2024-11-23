import Container from "./ui/container";

const Welcome = () => {
  return (  
    <Container>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4  max-w-[40rem]
       bg-welcomeBg py-4 px-12 shadow-md rounded-lg z-10">
        <div className="text-center">
          <h2 className="text-pretty italic md:text-2xl lg:text-3xl text-whiteBg">
            Aus Liebe zur Schönheit
          </h2>
          <p className="mt-2 text-md leading-relaxed text-whiteBg text-left">
            Ich mache professionelle Behandlung für Augenbrauen, Augen und Lippen, bei denen Natürlichkeit immer im Vordergrund steht. 
            Mit modernsten Techniken sorge ich dafür, dass dein Permanent Make-up harmonisch und dezent wirkt – so natürlich, dass man auf den ersten Blick kaum erkennt.
            Ich freue mich darauf, dich auf deinem Weg zu einem perfekten, natürlichen Look zu begleiten!
          </p>
          <p className="mt-2 text-right text-whiteBg">
            - Ayhan
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;



