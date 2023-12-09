<template>
  <div class="flex flex-col mt-5 tablet:mt-10 gap-3 mx-5">
    <p class="font-bold uppercase">{{ t('title.p1') }}</p>
    <h1 class="text-2xl tablet:text-3xl font-extrabold uppercase -mt-3">{{ t('title.p2') }}</h1>

    <div class="divider" />
    <h2 class="text-xl font-bold">{{ t('profile.p1') }}</h2>
    <p>{{ t('profile.p2') }}</p>
    <p>{{ t('profile.p3') }}</p>
    <div class="divider" />
    <h2 class="text-xl font-bold">{{ t('skill.title') }}</h2>
    <div class="flex flex-col tablet:flex-row tablet:justify-between gap-5 tablet:w-[80%]">
      <div>
        <h2 class="font-bold">{{ t('skill.techs.title') }}</h2>
        <ul>
          <li v-for="tech in tm('skill.techs.techs')">{{ rt(tech.name) }}</li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">{{ t('skill.frameworks.title') }}</h2>
        <ul>
          <li v-for="tech in tm('skill.frameworks.techs')">{{ rt(tech.name) }}</li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">{{ t('skill.backend.title') }}</h2>
        <ul>
          <li v-for="tech in tm('skill.backend.techs')">{{ rt(tech.name) }}</li>
        </ul>
      </div>
    </div>
    <div class="divider" />

  </div>
</template>

<script setup lang="ts">
const { t, rt, tm } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
</script>


<i18n lang="json">
{
  "pt-BR": {
    "title": {
      "p1": "Oi, eu sou o Rafael",
      "p2": "Desenvolvedor de Software"
    },
    "profile": {
      "p1": "Perfil:",
      "p2": "Com mais de 15 anos de experiência na área de TI atuei em setores como suporte, manutenção, testes e atualmente transicionando para a área de desenvolvimento.",
      "p3": "Sou autodidata, e tenho experiência com times internacionais."
    },
    "skill": {
      "title": "Habilidades:",
      "techs": {
        "title": "Linguagens e Tecnologias",
        "techs": [
          {
            "name": "Javascript"
          },
          {
            "name": "Typescript"
          },
          {
            "name": "Dart"
          },
          {
            "name": "HTML semântico, SEO, Dados Estruturados"
          },
          {
            "name": "CSS"
          },
          {
            "name": "TailwindCSS"
          },
          {
            "name": "Programação Orientada a Objetos"
          },
          {
            "name": "Banco de Dado SQL / NoSql"
          }
        ]
      },
      "frameworks": {
        "title": "Frameworks",
        "techs": [
          {
            "name": "Vue 3"
          },
          {
            "name": "Nuxt 3"
          },
          {
            "name": "Flutter"
          }
        ]
      },
      "backend": {
        "title": "Backend",
        "techs": [
          {
            "name": "Express"
          },
          {
            "name": "NitroJS"
          },
          {
            "name": "Strapi v4"
          }
        ]
      }
    }
  },
  "en-US": {
    "title": {
      "p1": "Hi, I'm Rafael",
      "p2": "Software developer"
    },
    "profile": {
      "p1": "Profile:",
      "p2": "With more than 15 years of experience in the IT area, I have worked in sectors such as support, maintenance, testing and currently transitioning to the development area.",
      "p3": "I am self-taught, and have experience with international teams."
    },
    "skill": {
      "title": "Skills:",
      "techs": {
        "title": "Languages and Technologies",
        "techs": [
          {
            "name": "Javascript"
          },
          {
            "name": "Typescript"
          },
          {
            "name": "Dart"
          },
          {
            "name": "Semantic HTML, SEO, Structured Data"
          },
          {
            "name": "CSS"
          },
          {
            "name": "TailwindCSS"
          },
          {
            "name": "Object Oriented Programming"
          },
          {
            "name": "SQL Database / NoSql"
          }
        ]
      },
      "frameworks": {
        "title": "Frameworks",
        "techs": [
          {
            "name": "Vue 3"
          },
          {
            "name": "Nuxt 3"
          },
          {
            "name": "Flutter"
          }
        ]
      },
      "backend": {
        "title": "Backend",
        "techs": [
          {
            "name": "Express"
          },
          {
            "name": "NitroJS"
          },
          {
            "name": "Strapi v4"
          }
        ]
      }
    }
  }
}
</i18n> 