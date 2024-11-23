import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard'
import services from '@/components/ui/services' 
import Container from '@/components/ui/container'

const ServiceList: React.FC = () => {
  return (
    <Container>      


  <div className="relative bg-gradient-to-r from-[#dbd9d2] to-[#efede6] pt-56 pb-12 px-48">
  <div className="absolute inset-0 pointer-events-none bg-noise z-0"></div>

<div className="relative z-10">
  <div className="flex justify-center mb-8">
    <h1 className="text-4xl font-bold text-navbarText">Behandelung</h1>
  </div>
  <div className="space-y-5">
    {services.map((service, index) => (
      <ServiceCard key={service.id} data={service} imageRight={index % 2 !== 0} />
    ))}
  </div>
</div>
</div>


       
      
    </Container>
  );
};
export default ServiceList