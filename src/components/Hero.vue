<script setup lang="ts">
</script>

<template>
  <section class="container hero-content min-h-60 flex items-center justify-center" id="domov">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <div class="text-center space-y-12">
        <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
          <h1>
            <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
            >
              LuxNet - IT
            </span>
            <br>
            Tvorba webov na mieru
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Ponúkame profesionálny vývoj webových stránok. Pridajte
          sa k nám a využite riešenia šité na mieru s odbornou podporou.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <a href="/#o-nas" class="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:primary">
            Pokračovať
          </a>
        </div>
      </div>

      <div class="relative group mt-14 w-full md:w-[1200px]">
        <!-- gradient shadow -->
        <div
            class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
