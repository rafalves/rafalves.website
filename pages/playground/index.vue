<template>
  <div class="h-full antialiased">
    <div class="h-full mx-auto max-w-[58rem] font-sans ">
      <p class="mt-10 text-center italic text-base text-slate-700">{{ t('description') }}</p>
      <h1 class="my-5 text-center font-bold text-2xl">{{ t('title') }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})



useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>



<i18n lang="json">
{
  "pt-BR": {
    "title": "Lista de Projetos",
    "description": "Esta página é dedicada a testes de funcionalidades e validação de conceitos",
    "hello": "こんにちは、世界!"
  },
  "en-US": {
    "title": "Projects of List",
    "description": "This page is dedicated to testing functionalities and concept validation",
    "hello": "hello world!"
  }
}
</i18n>


