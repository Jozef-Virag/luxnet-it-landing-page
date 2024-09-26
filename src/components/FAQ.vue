<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    "question": "Aké typy webových stránok vytvárate?",
    "answer": "Vytvárame rôzne typy webových stránok vrátane firemných stránok, e-shopov a webových aplikácií a blogov, ktoré sú prispôsobené potrebám našich klientov.",
    "value": "item-1"
  },
  {
    "question": "Ponúkate aj služby SEO pre webové stránky?",
    "answer": "Áno, poskytujeme optimalizáciu pre vyhľadávače (SEO), aby sme zabezpečili lepšiu viditeľnosť vašich stránok vo vyhľadávačoch.",
    "value": "item-2"
  },
  {
    "question": "Ako prebieha proces vývoja webovej stránky?",
    "answer": "Náš proces zahŕňa analýzu požiadaviek, návrh, vývoj, testovanie a nasadenie stránky. Počas celého procesu úzko spolupracujeme s našimi klientmi.",
    "value": "item-3"
  },
  {
    "question": "Poskytujete aj podporu po dokončení projektu?",
    "answer": "Áno, ponúkame rôzne úrovne podpory, vrátane technickej podpory a údržby webových stránok, aby sme zabezpečili ich plynulý chod.",
    "value": "item-4"
  },
  {
    "question": "Ako dlho trvá vývoj webovej stránky?",
    "answer": "Dĺžka vývoja webovej stránky závisí od zložitosti projektu, avšak na začiatku každého projektu Vám poskytneme predbežný časový rámec.",
    "value": "item-5"
  }
];


</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Časté otázky
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Chcete sa dozvedieť viac ?
      <a
        href="#"
        class="text-muted-foreground"
      >
        <a
          href="/#kontakt"
          class="underline text-primary"
          >Kontaktujte nás</a
        >
      </a>
    </h3>
  </section>
</template>
