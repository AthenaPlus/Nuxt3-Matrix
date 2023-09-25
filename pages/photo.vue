<template>
    <main>
    <div>
        <div class="blank flex flex-col items-center justify-center">
            <h1 id="title" class="opacity-0">Web Developers</h1>
            <h2 id="subtitle" class="opacity-0">For You</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-20 h-20 animate__animated animate__pulse animate__repeat-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </div>
        <div class="wrapper">
            <div class="img1"></div>
            <h2 class="title">Lorem ipsum <br/> <span class="">dolor sit amet</span> </h2>
            <div class="img2" ></div>
            <h2 class="title2">Lorem ipsum <br/> Dolor sit amet </h2>
        </div>
        <div class="blank"></div>
    </div>
    </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
const main = ref();
const ctx = ref();
onMounted(() => {
        // .then(() => {
        // })
    ctx.value = gsap.context((self) => {
        const tlPhoto = gsap.timeline({
                scrollTrigger: {
                    trigger: '.wrapper',
                    start: 'top top',
                    scrub: 2,
                    pin: true,
                    duration: '300%',
                    // markers: true
                }
            })
            tlPhoto.fromTo('.img1', {
                width: '60%',
                height: '60%'
            }, {
                duration: 1.5,
                width: '100%',
                height: '100%'
            }, 0)
                .fromTo('.title', {
                    xPercent: -100,
                    fontSize: '8px',
                    color: '#fff',
                    opacity: 0
                }, {
                    duration: 1,
                    xPercent: 0,
                    fontSize: '48px',
                    color: '#ff0000',
                    opacity: 1
                }, 1)
                .fromTo('.title', {
                    opacity: 1
                }, {
                    duration: 1,
                    opacity: 0
                }, 2.5)
                .fromTo('.img2', {
                    width: '100%',
                    height: '0%'
                }, {
                    duration: 1.5,
                    width: '100%',
                    height: '101%'
                }, 2)
                .fromTo('.title2', {
                    opacity: 0,
                    fontSize: '1vw',
                    lineHeight: '1vw'
                }, {
                    duration: 1,
                    opacity: 1,
                    fontSize: '4vw',
                    lineHeight: '5vw'
                }, 2.5)
                .fromTo('.title2', {
                    opacity: 1
                }, {
                    duration: 1.5,
                    opacity: 0,
                    fontSize: '1vw',
                    lineHeight: '1vw'
                }, 4)
                .fromTo('.img2', {
                    width: '100%',
                    height: '100%'
                }, {
                    duration: 1.5,
                    width: '60%',
                    height: '60%'
                }, 4)
                .fromTo('.img1', {
                    width: '100%',
                    height: '100%'
                }, {
                    duration: 1.5,
                    width: '60%',
                    height: '60%'
                }, 4)
    }, main.value)
    gsap.fromTo('#title',{opacity: 0, color: 'white', fontSize: '1vw'}, {duration: 1.5, opacity: 1, color: 'red', fontSize: '4vw' }, '<')
    gsap.fromTo('#subtitle',{opacity: 0,  color: 'white', fontSize: '8px'}, {duration: 2, delay: 1, opacity: 1, color: 'yellow', fontSize: '48px', marginTop: '48px', marginBottom: '48px'},)
});
onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>



<style scoped>
.blank {
    width: 100%;
    height: 100vh;
}
.wrapper {
    width: 100%;
    height: 100vh;
    background-color: rgb(96, 122, 136);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}
.img1 {
    background-image: url('https://res.cloudinary.com/poliweb/image/upload/v1636094398/Fashen/girl-3_1920_cy4dnl.webp');
    width: 60%;
    height: 60%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.title {
    position: absolute;
    top: 50%;
    left: 20%;
    font-size: 32px;
    transform: translate(-50%, -50%);
    opacity: 1;
}
.title span {
    font-size: 24px;
    font-weight: 400;
    display: block;
}
.img2 {
    background-image: url('https://res.cloudinary.com/poliweb/image/upload/g_center/v1636094398/Fashen/girl-4_1920_votltj.webp');
    width: 100%;
    height: 0%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.title2 {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 16px;
    line-height: 60px;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    text-align: center;
}
</style>
