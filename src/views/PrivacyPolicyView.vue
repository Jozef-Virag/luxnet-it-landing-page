<script lang="ts">
export default {
  name: "PrivacyPolicyView"
}

</script>

<template>
  <section class="container mx-auto py-20 md:py-32" id="privacy-policy">
    <div class="text-center space-y-8">
      <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
        <h1>
          <span class="text-transparent bg-primary bg-clip-text">
            Zásady ochrany osobných údajov
          </span>
        </h1>
      </div>

      <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
        Tieto zásady vysvetľujú, ako zhromažďujeme, používame a chránime vaše osobné údaje pri používaní našich služieb.
      </p>
    </div>

    <div class="mt-14 space-y-10 max-w-4xl mx-auto">
      <div>
        <h2 class="text-2xl font-semibold mb-2">1. Zber osobných údajov</h2>
        <p class="">
          Pri návšteve našich stránok môžeme zhromažďovať osobné údaje ako emailovú adresu, meno alebo telefónne číslo.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-2">2. Použitie osobných údajov</h2>
        <p class="text-muted-foreground">
          Vaše osobné údaje využívame na zlepšenie našich služieb, poskytovanie podpory a zasielanie informácií o našich produktoch.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-2">3. Zdieľanie osobných údajov</h2>
        <p class="text-muted-foreground">
          Osobné údaje zdieľame iba s vašim súhlasom alebo ak to vyžaduje zákon.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-2">4. Vaše práva</h2>
        <p class="text-muted-foreground">
          Máte právo na prístup, úpravu alebo vymazanie svojich údajov. Kontaktujte nás, ak máte otázky.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>

.text-muted-foreground {
  color: #6B7280;
}
</style>
