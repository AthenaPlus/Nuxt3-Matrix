<template>
    <div class="container px-5 py-24 mx-auto">
        <h1 class="text-pink-500 text-5xl animate__animated animate__bounce">{{ item.title }}</h1>
        <p class="mb-8">{{ item.description }}</p>
        <NuxtLink to="/test" class="px-8 py-4 bg-pink-800 text-white uppercase">Test Page</NuxtLink>
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
</template>

<script setup>
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

</style>