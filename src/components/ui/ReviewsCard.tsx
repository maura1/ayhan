import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface ReviewsCardProps {
  name: string;
  text: string;
  stars: number;
  link: string; // New prop to handle the link
}

export default function ReviewsCard({ name, text, stars, link }: ReviewsCardProps) {
  return (
    <Link href={link} passHref>
      <Card className="bg-gray-50 shadow-lg rounded-xl border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow">
        
        <CardContent className="bg-navbarBg p-4">
          <div className="flex justify-center space-x-1 mb-2">
            {/* Render stars dynamically */}
            {Array.from({ length: stars }).map((_, index) => (
              <span key={index} className="text-yellow-400">&#9733;</span>
            ))}
            {Array.from({ length: 5 - stars }).map((_, index) => (
              <span key={index} className="text-navbarText">&#9733;</span>
            ))}
          </div>
          <p className="text-sm bg-navbarBg text-navbarText">{text}</p>
          <a href={link} className="text-sm  text-navbarText underline mt-3 inline-block">
            Mehr anzeigen
          </a>
        </CardContent>

        {/* Card Footer */}
        <CardFooter className="p-4 border">
          <p className="text-navbarText italic">{name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
