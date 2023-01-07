<template>
    <div>
        <NuxtLink to="/" class="text-pink-500 text-5xl animate__animated animate__bounce">Dostyk</NuxtLink>
        <div class="p-8">
            <a data-fancybox data-src="https://lipsum.app/id/1/800x600" data-caption="Hello world"
                class="cursor-zoom-in">
                <img src="https://lipsum.app/id/1/200x150" width="200" height="150" />
            </a>
        </div>
        <div class="">
            <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>

</script>

<script>
// https://fancyapps.com/docs/ui/installation
import {
    Fancybox
} from "@fancyapps/ui/src/Fancybox/Fancybox.js";

Fancybox.bind("[data-fancybox]", {
    // Your options go here
});

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
</script>

<style lang="scss" scoped>

</style>