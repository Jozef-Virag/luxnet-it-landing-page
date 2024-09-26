<script lang="ts" setup>
import {reactive, ref} from "vue";
import {Button} from "./ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "./ui/card";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from "./ui/select";
import {Textarea} from "./ui/textarea";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

import {AlertCircle, Clock, Mail, Phone} from "lucide-vue-next";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Web Development",
  message: "",
});

const invalidInputForm = ref(false);

const handleSubmit = () => {
  const {firstName, lastName, email, subject, message} = contactForm;

  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }

  invalidInputForm.value = false;
  window.location.href = `mailto:info@luxnet.sk?subject=${subject}&body=Hello, I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
};
</script>

<template>
  <section id="kontakt" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Kontakt</h2>
          <h2 class="text-3xl md:text-4xl font-bold">Spojte sa s nami</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Ak máte akékoľvek otázky alebo požiadavky, neváhajte nás kontaktovať. Sme tu, aby sme vám pomohli!
        </p>

        <div class="flex flex-col gap-4">

          <div>
            <div class="flex gap-2 mb-1">
              <Phone/>
              <div class="font-bold">Zavolajte nám</div>
            </div>
            <div>+421 949 561 342</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail/>
              <div class="font-bold">Napíšte nám</div>
            </div>
            <div>info@luxnet-it.sk</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock/>
              <div class="font-bold">Pracovný čas</div>
            </div>
            <div>
              <div>Pondelok - Sobota</div>
              <div>8:00 - 18:00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulár -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"></CardHeader>
        <CardContent>
          <form class="grid gap-4" @submit.prevent="handleSubmit">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Meno</Label>
                <Input
                    id="first-name"
                    v-model="contactForm.firstName"
                    placeholder="Janko"
                    type="text"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Priezvisko</Label>
                <Input
                    id="last-name"
                    v-model="contactForm.lastName"
                    placeholder="Hraško"
                    type="text"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                  id="email"
                  v-model="contactForm.email"
                  placeholder="jankohrasko@mail.com"
                  type="email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Predmet</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Vyberte predmet"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Tvorba webových stránok">
                      Tvorba webovej stránky
                    </SelectItem>
                    <SelectItem value="Vývoj mobilných aplikácií">
                      Vývoj mobilnej aplikácie
                    </SelectItem>
                    <SelectItem value="SEO optimalizácia">E-shop na kľúč</SelectItem>
                    <SelectItem value="SEO optimalizácia">Redizajn webstránky</SelectItem>
                    <SelectItem value="SEO optimalizácia">Iné</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Správa</Label>
              <Textarea
                  id="message"
                  v-model="contactForm.message"
                  placeholder="Vaša správa..."
                  rows="5"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4"/>
              <AlertTitle>Chyba</AlertTitle>
              <AlertDescription>
                Prosím vyplňte všetky povinné polia.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Odoslať správu</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
