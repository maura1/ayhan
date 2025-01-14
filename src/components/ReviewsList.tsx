'use client';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ReviewsCard from '@/components/ui/ReviewsCard';
import { reviews } from '@/components/ui/reviews';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function ReviewsList() {
  return (
    <Container>
      <div className="bg-whiteBg px-16 py-8">
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold text-navbarText ">Bewertungen</h1>
        </div>
        <div className="py-8 bg-whiteBg rounded">
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="flex gap-4">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                >
                  <div className="rounded">
                    <ReviewsCard
                      name={review.name}
                      text={review.text}
                      stars={review.stars}
                      link={`/reviews/${review.id}`} // Dynamic link
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2" />
          </Carousel>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/reviews" passHref>
            <Button variant="default" className="px-6 py-3 text-lg bg-navbarText">
              Weitere Reviews
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
