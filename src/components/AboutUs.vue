<script lang="ts" setup>
import WorldMap from "@/components/WorldMap.vue"
</script>

<template>
  <section
      id="o-nas"
      class="container lg:w-[75%] py-12 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">O nás</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Spoznajte nás bližšie
      </h2>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <p class="text-lg text-muted-foreground mb-6">
          Vitajte v Luxnete, kde sa technológia stretáva s precíznosťou. So silným
          praktickým a aj teoretickým zázemím v danej oblasti, Luxnet ponúka efektívne
          riešenia prispôsobené vašim špecifickým potrebám.
        </p>

        <p class="text-lg text-muted-foreground mb-6">
          Vytvárame webové projekty na mieru, ktoré zodpovedajú najvyšším
          štandardom kvality. Či už potrebujete responzívnu webovú stránku pre Vaše podnikanie, e-shop, zabezpečíme, aby celý proces prebiehal hladko a s dôrazom na detail.
        </p>

        <p class="text-lg text-muted-foreground">
          Poďme spolu vybudovať niečo skvelé.
        </p>
      </div>

      <div class="md:w-1/2">
        <WorldMap></WorldMap>
      </div>
    </div>
  </section>
</template>
