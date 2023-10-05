<template>
  <div class="h-full antialiased">
    <div class="h-full mx-auto max-w-[58rem] font-sans ">
      <p class="mt-10 text-center italic text-base text-slate-700">{{ t('description') }}</p>
      <h1 class="my-5 text-center font-bold text-2xl">{{ t('title') }}</h1>

      <div class="flex flex-col-reverse">
        <div v-for="post in tm('posts')" :key="post">
          <h2 class="font-bold text-xl">
            {{ rt(post.title) }}
          </h2>
          <p>{{ rt(post.description) }}</p>
        </div>
      </div>
      <!-- {{ t('posts.1.description') }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, rt, tm } = useI18n({
  useScope: 'local'
})


</script>



<i18n lang="json">
{
  "pt-BR": {
    "title": "Lista de Projetos",
    "description": "Esta página é dedicada a testes de funcionalidades e validação de conceitos",
    // posts
    "posts": {
      // add post by most recent
      "3": {
        "title": "05/09/2023 - Titulo Post 3",
        "description": "Post 3 descrição"
      },
      "4": {
        "title": "06/09/2023 - Titulo Post 4",
        "description": "Post 4 deddddddscrição"
      },
      "2": {
        "title": "04/09/2023 - Titulo Post 2",
        "description": "Post 2 descddddddddrição"
      },
      "1": {
        "title": "03/09/2023 - Intersection Observer API",
        "description": "Intersection Observer é uma Web API fornecida pelos navegadores, com ela você consegue observar elementos e ser notificado quando eles adentram em determinado ponto da tela, pode ser usado para ativar animações, transições, rolagem infinita e muito mais. A vantagem do Intersection Observer API é não depender de um ouvinte e assim economizar recursos do processo principal."
      }
    }
  },
  "en-US": {
    "title": "Projects of List",
    "description": "This page is dedicated to testing functionalities and concept validation",
    // posts
    "posts": {
      // add post by most recent
      "1": {
        "title": "03/09/2023 - Intersection Observer API",
        "description": "Intersection Observer is a Web API provided by the browsers, with it is possible to observe elements and be notified when they reach some threshold of the view, can be used to trigger animations, transitions, infinite scroll, and much more. The advantage of Intersection Observer API is not dependent on listeners saving resources of the main thread."
      },
      "2": {
        "title": "04/09/2023 - Title Post 2",
        "description": "Description post 2"
      },
      "3": {
        "title": "05/09/2023 - Title Post 4",
        "description": "Description post 4"
      },
      "4": {
        "title": "05/09/2023 - Title Post 3",
        "description": "Description post 3"
      }
    }
  }
}
</i18n>


