<template>
  <pre class="h-full">
    {{ data }}
  </pre>
</template>


<script setup>

const { data } = await useAsyncData('my-page', queryContent('/').where({ title: 'My Page Title' }).findOne)
// const { data } = await useAsyncData('my-page', queryContent('/').where({ title: 'My Page Title' }).findOne)
// const { data } = await useAsyncData('/', () => fetchContentNavigation())
// const [prev, next] = await queryContent()
//   .only('title')
//   .findSurround('/about')

// const { data } = await useAsyncData('index', () => [prev, next])
// const { data } = await useAsyncData('index', () => queryContent('/').only('title').findSurround())

console.log(data)
useContentHead(data)
</script>