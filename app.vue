<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Сайт Nuxt 3 Matrix',
  meta: [
    { name: 'description', content: 'Мы очень гордимся нашим обслуживанием клиентов, не только в поиске подходящих услуг, но и в нашем послепродажном обслуживании вплоть до установки. Это обязательство перед нашими клиентами принесло нам репутацию, которой мы очень гордимся!' }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js',
      body: true
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js',
      body: true
    },

  ]
})
</script>

<style>
/* ... */

</style>
