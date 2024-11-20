import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard'
import services from '@/components/ui/services' 
import Container from '@/components/ui/container'
import { Service } from '@/types';

interface ServiceListProps {
  services: Service[];
}
const ServiceList: React.FC<ServiceListProps> = () => {
  return (
    <Container>
      <div className="bg-navbarBg p-16">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold text-navbarText">Behandelung</h1>
        </div>
        <div className="space-y-5">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              data={service} 
              imageRight={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default ServiceList