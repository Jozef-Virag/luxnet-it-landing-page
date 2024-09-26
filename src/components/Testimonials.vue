<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://ui-avatars.com/api/?name=Patricia",
    name: "Patrícia",
    comment:
        "Spolupráca bola bezproblémová. Tvorba našej firemnej stránky prebehla úspešne a výsledok predčil naše očakávania.",
    rating: 5.0,
  },
  {
    image: "https://ui-avatars.com/api/?name=Jana",
    name: "Jana",
    comment:
        "So službami LuxNet som spokojná - ústretovosť, jasná komunikácia a dodržanie termínu dodania webu. Ďakujem.",
    rating: 4.9,
  },
  {
    image: "https://ui-avatars.com/api/?name=Tomáš",
    name: "Tomáš",
    comment:
        "Dostal som čo bolo objednané a dohodnuté v expresnom čase a určite využijem ich služby aj v budúcnosti.. Vrelo odporúčam.",
    rating: 4.0,
  }
];

const generateStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? "fill-primary text-primary" : "");
  }
  return stars;
};
</script>

<template>
  <section
      id="recenzie"
      class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Recenzie
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Čo o nás povedali naši klienti
      </h2>
    </div>

    <Carousel
        :opts="{
        align: 'start',
      }"
        class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
            v-for="review in reviewList"
            :key="review.name"
            class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star
                    v-for="(starClass) in generateStars(Math.round(review.rating))"
                    class="size-4"
                    :class="starClass"
                />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage
                      :src="review.image"
                      :alt="review.name"
                  />
                  <AvatarFallback>{{ review.name[0] }}</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
