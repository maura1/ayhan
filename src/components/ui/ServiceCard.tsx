import Image from "next/image";
import Link from "next/link";

import { Card, CardContent} from "@/components/ui/card";
import { Service } from "@/types.ts";

interface ServiceCardProps {
  data: Service;
  imageRight?: boolean; // Prop to determine image position
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, imageRight = false }) => {
  return (
      <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg block p-7">
        <Card className="rounded-lg  border border-red-500">
          <div className={`flex flex-row w-full ${imageRight ? 'flex-row-reverse' : 'flex-row'} border `}>
            <div className="w-1/2 p-4 border border-blue-500">
              <Image
                src={data.images?.[0] ?? '/default-image.png'} // Provide a default image in case there is none
                alt={data.name}
                layout="responsive"
                width={500}
                height={200}
                className="object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="w-1/2 pt-4 flex justify-center items-center">
              <div className="text-center">
                <p className="font-semibold text-lg">{data.name}</p>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
  );
};
export default ServiceCard

