<template>
  <div class="h-full antialiased">
    <div class="h-full mx-auto max-w-[58rem] font-sans ">

      <p class="mt-10 text-center italic text-base text-slate-700">{{ t('description') }}</p>

      <h1 class=" my-5 text-center font-bold text-2xl">{{ t('title') }}</h1>

      <div class="flex flex-col-reverse">
        <div v-for="post in tm('posts')" :key="post">
          <h2 class="text-pink-500 font-bold text-xl">
            {{ rt(post.title) }}
          </h2>
          <p class="text-justify md:ml-14 my-2">{{ rt(post.description) }}</p>

          <div class="flex gap-5 pb-3">
            <ul v-for="project in post.projects">
              <li>
                <NuxtLink class="hover:text-purple-700 text-pink-500 font-semibold underline"
                  :to="'/playground' + rt(project.link)">
                  {{ rt(project.name) }}
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, rt, tm } = useI18n({
  useScope: 'local'
})


</script>



<i18n lang="json">
// add post by most recent
//template
// "1": {
//   "title": " ",
//   "description": " ",
//   "projects": {
//     "1": {
//       "name": " ",
//       "link": " "
//     },
//     "2": {
//       "name": " ",
//       "link": " "
//     }
//   }
// },
{
  "pt-BR": {
    "title": "Lista de Projetos",
    "description": "Esta página é dedicada a testes de funcionalidades e validação de conceitos",
    // posts
    "posts": {
      "2": {
        "title": "06/10/2023 - Transições e Transformações",
        "description": "Animações usando transition e transform",
        "projects": {
          "1": {
            "name": "transição simples",
            "link": "/transition-1"
          }
        }
      },
      "1": {
        "title": "03/10/2023 - Intersection Observer API",
        "description": "Intersection Observer é uma Web API fornecida pelos navegadores, com ela você consegue observar elementos e ser notificado quando eles adentram em determinado ponto da tela, pode ser usado para ativar animações, transições, rolagem infinita e muito mais. A vantagem do Intersection Observer API é não depender de um ouvinte e assim economizar recursos do processo principal.",
        "projects": {
          "1": {
            "name": "exemplo simples 1",
            "link": "/intersection-observer-1"
          },
          "2": {
            "name": "cartões",
            "link": "/intersection-observer-2"
          }
        }
      }
    }
  },
  "en-US": {
    "title": "Projects of List",
    "description": "This page is dedicated to testing functionalities and concept validation",
    // posts
    "posts": {
      // add post by most recent
      "2": {
        "title": "10/06/2023 - Transitions and Transforms",
        "description": "Animation using transition and transform",
        "projects": {
          "1": {
            "name": "simple transition",
            "link": "/transition-1"
          }
          // "2": {
          //   "name": " ",
          //   "link": " "
          // }
        }
      },
      "1": {
        "title": "10/03/2023 - Intersection Observer API",
        "description": "Intersection Observer is a Web API provided by the browsers, with it is possible to observe elements and be notified when they reach some threshold of the view, can be used to trigger animations, transitions, infinite scroll, and much more. The advantage of Intersection Observer API is not dependent on listeners saving resources of the main thread.",
        "projects": {
          "1": {
            "name": "simple exemple 1",
            "link": "/intersection-observer-1"
          },
          "2": {
            "name": "cards",
            "link": "/intersection-observer-2"
          }
        }
      }
    }
  }
}
</i18n>


