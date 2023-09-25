<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

useHead({
  title: 'Сайт Nuxt 3 Matrix',
  meta: [
    { name: 'description', content: 'Мы очень гордимся нашим обслуживанием клиентов, не только в поиске подходящих услуг, но и в нашем послепродажном обслуживании вплоть до установки. Это обязательство перед нашими клиентами принесло нам репутацию, которой мы очень гордимся!' }
  ],
})
</script>

<style>
/* ... */

</style>
