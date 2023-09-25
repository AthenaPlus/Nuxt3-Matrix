<template>
    <section>
        <main>
            <div id="foto" class=" relative">
                <div class="beforeIMGContainer">
                    <img src="/img/Baner_limon.jpg" alt="" class="w-full grayscale">
                </div>
                <div class="afterIMGContainer absolute inset-0">
                    <img src="/img/Baner_limon.jpg" alt="" class="w-full">
                </div>
            </div>
        </main>

        <div class="container px-5 py-24 mx-auto">
            <h1 class="text-pink-500 text-5xl animate__animated animate__bounce">{{ item.title }}</h1>
            <p class="mb-8">{{ item.description }}</p>
            <NuxtLink to="/test" class="px-8 py-4 bg-pink-800 text-white uppercase mr-2">Test Page</NuxtLink>
            <NuxtLink to="/gsap" class="px-8 py-4 bg-pink-800 text-white uppercase mr-2">Gsap Page</NuxtLink>
            <NuxtLink to="/textscroll" class="px-8 py-4 bg-pink-800 text-white uppercase">Scroll Page</NuxtLink>
            <div class="mt-8">
                <h2 class="text-3xl text-pink-800">
                    {{ item2.title }}
                </h2>
                <p class="">
                    {{ item2.description }}
                </p>
            </div>
            <div v-for="Post in Posts" :key="Post.index" class="mt-8">
                <h2 class="text-3xl">
                    {{ Post.title }}
                </h2>
                <p class="">
                    {{ Post.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

const main = ref();
const ctx = ref();


useHead({
    title: 'Сайт Nuxt 3 Matrix',
    meta: [
        { name: 'description', content: 'Мы очень гордимся нашим обслуживанием клиентов, не только в поиске подходящих услуг, но и в нашем послепродажном обслуживании вплоть до установки. Это обязательство перед нашими клиентами принесло нам репутацию, которой мы очень гордимся!' }
    ],

})

onMounted(() => {

    ctx.value = gsap.context((self) => {
        const tlImg = gsap.timeline({
        scrollTrigger: {
            trigger: '#foto',
            start: 'top top',
            scrub: 2,
            pin: true,
            // markers: true
        }
    })

    tlImg.fromTo('.afterIMGContainer', {
            xPercent: 100
        }, {
            xPercent: 0
        })
        .fromTo('.afterIMGContainer img', {
            xPercent: -100
        }, {
            xPercent: 0
        }, 0)
    })

})

onUnmounted(() => {
    ctx.value.revert();
})

const createItem = (title, description) => ({ title, description })

const item = createItem('PoliWeb Matrix', 'Это текст написан через константу')
const item2 = createItem('Раздел 2', 'Это текст написан для раздела второго')

const Posts = ([
    {
        title: 'Post Matrix 1',
        description: 'Это текст написан спомощю v-for циклом для пастов'
    },
    {
        title: 'Post Matrix 2',
        description: 'Это текст написан спомощю v-for циклом для пастов'
    },
    {
        title: 'Post Matrix 3',
        description: 'Это текст написан спомощю v-for циклом для пастов'
    }
])

</script>

<script>

export default {

}
</script>

<style scoped>
.afterIMGContainer {
    overflow: hidden;
}
</style>