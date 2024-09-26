<script lang="ts" setup>
import Separator from "./ui/separator/Separator.vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
</script>

<template>
  <footer
      id="footer"
      class="container py-24 sm:py-32"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div
          class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <a
              class="flex font-bold items-center"
              href="#"
          >
            <img
                class="ml-5 h-7"
                :src="
            mode == 'light' ? 'logo-2-dark.png' : 'logo-2-light.png'
          "
                alt=""
            />
            <img
                class="ml-5 h-7"
                :src="
            mode == 'light' ? 'logo-1-dark.png' : 'logo-1-light.png'
          "
                alt="LUXNET"
            />
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Kontakt</h3>
          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="/#kontakt"
            >
              Email
            </a>
          </div>

          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="/#kontakt"
            >
              Telefon
            </a>
          </div>

        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Služby</h3>
          <div>
            <p
                class="opacity-60 hover:opacity-100"
            >
              Vývoj webovej stránky
            </p>
          </div>

          <div>
            <p
                class="opacity-60 hover:opacity-100"
            >
              E-shop na kľúč
            </p>
          </div>

          <div>
            <p
                class="opacity-60 hover:opacity-100"
            >
              Vývoj mobilnej aplikácie
            </p>
          </div>

          <div>
            <p
                class="opacity-60 hover:opacity-100"
            >
              Redizajn webovej stránky
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Pomoc</h3>
          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="/#kontakt"
            >
              Kontaktujte nás
            </a>
          </div>

          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="/#faq"
            >
              FAQ
            </a>
          </div>

<!--          <div>-->
<!--            <router-link class="opacity-60 hover:opacity-100" to="/privacy-policy">Pravidlá ochrany osobných údajov</router-link>-->
<!--          </div>-->
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Sociálne siete</h3>
          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="#"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="#"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
                class="opacity-60 hover:opacity-100"
                href="#"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6"/>
      <section class="text-center">
        <h3>
          &copy; 2024 Navrhnuté a vyvinuté spoločnosťou
          <a
              class="text-primary transition-all border-primary hover:border-b-2"
              href="/"
          >
            LuxNet
          </a>
        </h3>
      </section>
    </div>
  </footer>
</template>
