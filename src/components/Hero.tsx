import Container from "./ui/container";
export default function Hero() {
  return (
    <Container>
      <div className="relative overflow-hidden" style={{ height: '66.6667vh' }}>
        <div
          style={{ backgroundImage: 'url(/images/hero.jpg)' }}
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative flex h-full w-full flex-col justify-end items-start text-left pb-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-white sm:pl-24">
            Willkommen bei
          </h1>
          <h2 className="text-pretty md:text-2xl lg:text-3xl md:pl-40 sm:pl-24 pb-12 text-white">
            <span className="italic">Ayhan Kublay</span> Permanent Makeup Artist
          </h2>
        </div>
      </div>
    </Container>
  );
}
