<template>
    <main>
      <section class="boxes-container h-screen bg-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <h1 id="title2" class="opacity-0 mb-5">Web Developers</h1>
          <h2 id="title3" class="opacity-0">Experiment Factory</h2>
  
        </div>
      </section>
      <section class="boxes-container h-screen bg-blue-700" ref="main">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-white text-xl opacity-0 title mb-10">Web Developer</h1>
          <h2 class="text-white text-xl opacity-0 title mb-10">Web Design</h2>
          <h3 class="text-white text-xl opacity-0 title mb-10">Project Manager</h3>
          <h4 class="text-white text-xl opacity-0 title mb-10">Sites in the B2B segment</h4>
  
  
        </div>
      </section>
      <section class="my_block flex items-center">
  
        <div class="img1 flex items-center">
          <h1 class="block_title">Title a Timeline</h1>
        </div>
        <div class="absolute flex flex-col">
          <h1 class="block_title2">Title a Content</h1>
        </div>
        <div class="block_content">
          <h2 class="block_content_title text-5xl mb-5">The best shoes for all seasons</h2>
          <p class=" mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae blanditiis ipsam nihil pariatur amet explicabo
            maiores omnis, eaque necessitatibus earum facilis eius deleniti accusamus perspiciatis dolor fugiat, quam
            quaerat. Quibusdam?
          </p>
        </div>
  
      </section>
      <section class="boxes-container h-screen red">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-pink-800 text-5xl">End a Timeline</h1>
  
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import gsap from 'gsap';
  const main = ref();
  const ctx = ref();
  const block = ref();
  onMounted(() => {
    ctx.value = gsap.context((self) => {
      const titles = self.selector('.title');
      titles.forEach((title) => {
        gsap.to(title, {
          x: 250,
          fontSize: 68,
          lineHeight: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'top center',
            scrub: 2,
            pin: false,
            pinSpacer: false,
            duration: '400%',
            // markers: true
          },
        });
      });
    }, main.value); // <- Scope!
    block.value = gsap.context((self) => {
      const tlMyBlock = gsap.timeline({
        scrollTrigger: {
          trigger: '.my_block',
          start: 'top top',
          scrub: 4,
          pin: true,
          pinSpacing: true,
          autoRound: false,
          duration: '500%',
          // markers: true
        }
      });
      tlMyBlock.fromTo('.img1', {
        width: '50%',
        height: '50%'
      }, {
        duration: 1.5,
        width: '100%',
        height: '100%'
      }, 0)
        .fromTo('.block_title', {
          xPercent: 0,
          fontSize: '8px',
          color: '#c1c1c1',
          opacity: 0
        }, {
          duration: 1,
          xPercent: 150,
          fontSize: '68px',
          color: '#ff0000',
          opacity: 1
        }, 0)
        .fromTo('.block_title', {
          xPercent: 200,
          fontSize: '68px',
          color: '#ff0000',
          opacity: 1
        }, {
          duration: 2,
          y: -700,
          fontSize: '68px',
          color: '#fff',
          opacity: 0
        }, 1.4)
        .fromTo('.block_title2', {
          delay: 1,
          xPercent: 0,
          fontSize: '8px',
          color: '#2F3C4E',
          opacity: 0,
          bottom: 0
        }, {
          duration: 1,
          xPercent: 150,
          fontSize: '68px',
          color: '#ff0000',
          opacity: 1
        }, 1)
        .fromTo('.block_title2', {
          duration: 1,
          xPercent: 150,
          fontSize: '68px',
          color: '#ff0000',
          opacity: 1
        }, {
          duration: 1,
          y: -500,
          fontSize: '68px',
          color: '#fff',
          opacity: 0
        }, 3.7)
        .fromTo('.block_content', {
          opacity: 0,
          yPercent: 100
        }, {
          duration: 2,
          yPercent: -50,
          fontSize: '20px',
          color: '#000',
          opacity: 1
        }, 3)
        .fromTo('.block_content_title', {
          color: '#000',
        }, {
          color: '#ff0000',
        }, 4.5)
        .fromTo('.block_content', {
          opacity: 1,
          yPercent: -50
        }, {
          duration: 1,
          yPercent: -50,
          fontSize: '20px',
          opacity: 1,
          color: '#fff'
        }, 4.5)
        .fromTo('.img1', {
          width: '100%',
          height: '100%'
        }, {
          duration: 1.5,
          width: '100%',
          height: '100%',
          opacity: 0.2,
          filter: 'blur(6px)'
        }, 5)
        .fromTo('.img1', {
          width: '100%',
          height: '100%'
        }, {
          duration: 1.5,
          width: '100%',
          height: '100%',
          opacity: 0.2,
          filter: 'blur(6px)'
        }, 6)
    })
    gsap.fromTo('#title2', { opacity: 0, color: 'white', fontSize: '1vw' }, { duration: 0.8, opacity: 1, color: 'red', fontSize: '4vw' })
    gsap.fromTo('#title3', {  opacity: 0, color: 'white', fontSize: '1vw' }, { duration: 1, opacity: 1, color: 'white', fontSize: '2vw', delay:0.8 })
  });
  onUnmounted(() => {
    ctx.value.revert(); // <- Easy Cleanup!
    block.value.revert();
  });
  </script>
  
  <style scoped>
  .my_block {
    width: 100%;
    height: 100vh;
    background-color: rgb(21, 25, 28);
    position: relative;
    overflow: hidden;
  }
  .img1 {
    background-image: url('https://res.cloudinary.com/dfevgyt2k/image/upload/c_fill,g_center,w_1000/v1674284863/cld-sample-5.webp');
    width: 30%;
    height: 30%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .block_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    opacity: 0;
  }
  </style>