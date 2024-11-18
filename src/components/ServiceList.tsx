
import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Service } from "@/types.ts";

interface ServicesListProps {
  items: Service[];
}

const ServicesList: React.FC<ServicesListProps> = ({ items }) => {
  return (
    <div className="flex flex-col justify-center bg-white>
      {items.map((item, index) => (
        <ServiceCard
          key={item.id}
          data={item}
          imageRight={index % 2 !== 0} // Alternate image position
        />
      ))}
    </div>
  );
};

export default ServicesList;
