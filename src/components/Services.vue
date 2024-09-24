<script lang="ts" setup>
import {Card, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";


interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Tvorba webových stránok na mieru",
    description:
        "Navrhujeme a vyvíjame responzívne webové stránky, ktoré sú prispôsobené špecifickým potrebám Vašej firmy.",
  },
  {
    title: "Tvorba mobilných a webových aplikácií",
    description:
        "Navrhujeme a realizujeme mobilné a webové aplikácie, ktoré vám pomôžu oslovit Vašu cieľovú skupinu a zefektívniť Vaše obchodné procesy.",
  },
  {
    title: "E-shopy na kľúč",
    description:
        "Pomáhame vytvoriť moderné a funkčné e-shopy, ktoré sú optimalizované pre maximálnu konverziu a jednoduchú správu.",
  },
  {
    title: "Opravy počítačov",
    description:
        "Zabezpečujeme rýchle a efektívne opravy hardvéru a softvéru pre všetky typy počítačových zariadení.",
  },
  {
    title: "Údržba a optimalizácia systémov",
    description:
        "Ponúkame služby na údržbu a optimalizáciu výkonu počítačov, aby ste mali vždy hladký a efektívny chod.",
  },
  {
    title: "Integrácia a správa sociálnych médií",
    description:
        "Pomôžeme vám prepojiť vašu webstránku so sociálnymi sieťami a efektívne spravovať váš online obsah.",
  },
  {
    title: "SEO optimalizácia",
    description:
        "Zlepšujeme viditeľnosť vašej stránky vo vyhľadávačoch a pomáhame pritiahnuť viac návštevníkov.",
  },
  {
    title: "Správa a údržba webových stránok",
    description:
        "Zabezpečujeme kompletnú správu a údržbu vašich webových stránok, aby ste mali vždy bezproblémový chod.",
  }

];

</script>

<template>
  <section
      id="sluzby"
      class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Služby
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Odborníci na digitálny úspech
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Zameriavame sa na vývoj inovatívnych webových riešení a precízne opravy hardvéru, aby ste mohli sústrediť svoju energiu na rast.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
        class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
          v-for="{ title, description } in serviceList"
          :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
</template>
