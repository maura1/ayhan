import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/types";

interface ServiceCardProps {
  data: Service;
  imageRight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, imageRight = false }) => {
  return (
    <Link
      href="/"
      className="outline-0  focus:ring-2 hover:ring-2 ring-navbarText transition duration-300 rounded-lg block"
    >
      <Card className="bg-whiteBg rounded-lg shadow-lg overflow-hidden">
        <div
          className={`flex ${
            imageRight ? "flex-row-reverse" : "flex-row"
          } items-stretch w-full`}
        >
          {/* Image Section */}
          <div className="relative w-1/2 h-64">
            <Image
              src={data.images?.[0] ?? "/default-image.png"}
              alt={data.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>

          </div>

          {/* Content Section */}
          <CardContent className="w-1/2 p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="font-semibold text-lg text-navbarText underline">{data.name}</p>
              <p className="text-sm text-navbarText line-clamp-3">{data.description}</p>
            </div>
            <p className="text-sm font-semibold  mt-4 text-right text-navbarText">
              mehr &gt;
            </p>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
