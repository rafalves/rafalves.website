<template>
  <div class="flex flex-col h-full">
    <div ref="target">
      <h1>Hello world</h1>
    </div>
    {{ $t('page_portfolio.content') }}
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="flex-1 w-full bg-green-400 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
    <div class="w-full bg-green-400 h-10 my-2" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nemo velit quisquam accusantium aliquid,
    beatae at. Provident debitis possimus, nam itaque similique sequi recusandae aliquam maxime, ullam enim dolore.
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const targetIsVisible = ref(false)

useIntersectionObserver(target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  },
)

watchEffect(() => console.log(targetIsVisible.value))

</script>
 