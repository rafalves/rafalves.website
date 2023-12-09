<template>
  <div class="flex flex-col mt-5 tablet:mt-10 gap-3 mx-5">



    <div>
      <p class="font-bold uppercase">{{ t('title.p1') }}</p>
      <h1 class="text-2xl tablet:text-4xl font-extrabold uppercase">{{ t('title.p2') }}</h1>
    </div>

    <div class="flex flex-col tablet:flex-row justify-between gap-5">
      <div class="mt-3">
        <p><span class="font-medium">{{ t('info.addressT') }}</span> {{ t('info.addressP') }}</p>
        <span class="font-medium">{{ t('info.websiteT') }} </span>
        <NuxtLink to="https://www.rafalves.website" target="_blank">
          <p class="link link-hover inline italic text-blue-800">{{ t('info.websiteP') }}</p>
        </NuxtLink>
        <p><span class="font-medium">{{ t('info.emailT') }}</span> {{ t('info.emailP', { at: '@' }) }}</p>
        <span class="font-medium">{{ t('info.linkedinT') }}</span>
        <NuxtLink to="https://www.linkedin.com/in/rafael-alves-costa" target="_blank">
          <p class="link link-hover inline italic text-blue-800">{{ t('info.linkedinP') }}</p>
        </NuxtLink>
        <br> <span class="font-medium">{{ t('info.githubT') }}</span>
        <NuxtLink to="https://www.github.com/rafalves" target="_blank">
          <p class="link link-hover inline italic text-blue-800">{{ t('info.githubP') }}</p>
        </NuxtLink>
      </div>
      <div class="flex justify-center gap-5">
        <div class="flex flex-col  items-center">
          <div>
            <Icon name="vscode-icons:file-type-word2" size="60" color="blue" />
          </div>
          <p class="text-xs mt-2">
            <NuxtLink
              to="https://docs.google.com/document/d/1wnvtgA8xS9_RtFqyzdkKIvRScZKy93k7DF-ppXHOp30/edit?usp=sharing"
              class="link text-blue-800" target="_blank">pt-br</NuxtLink> | <NuxtLink class="link text-blue-800" to="#">en
            </NuxtLink>
          </p>
        </div>
        <div class="flex flex-col  items-center">
          <div>
            <Icon name="vscode-icons:file-type-pdf2" size="60" color="red" />
          </div>
          <p class="text-xs mt-2">
            <NuxtLink class="link text-blue-800" to="#">pt-br</NuxtLink> | <NuxtLink class="link text-blue-800" to="#">en
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>

    <div class="divider" />
    <h2 class="text-2xl tablet:text-3xl font-bold">{{ t('profile.p1') }}</h2>
    <p>{{ t('profile.p2') }}</p>
    <p>{{ t('profile.p3') }}</p>
    <div class="divider" />
    <h2 class="text-2xl tablet:text-3xl font-bold">{{ t('skill.title') }}</h2>
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
    <h2 class="text-2xl tablet:text-3xl font-bold">{{ t('education.title') }}</h2>
    <p>{{ t('education.p1') }}</p>
    <p>{{ t('education.p2') }}</p>
    <p>{{ t('education.p3') }}</p>
    <div class="divider" />
    <h2 class="text-2xl tablet:text-3xl font-bold">{{ t('language.title') }}</h2>
    <p>{{ t('language.p1') }}</p>
    <p>{{ t('language.p2') }}</p>
    <div class="divider" />
    <h2 class="text-2xl tablet:text-3xl font-bold">{{ t('work.title') }}</h2>
    <p class="font-semibold italic mt-5 underline">{{ t('work.xp1.title') }}</p>
    <p class="font-medium italic ml-5">{{ t('work.xp1.activities') }}</p>
    <ul>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp1.t1') }}</span>{{ t('work.xp1.p1') }}
      </li>
    </ul>
    <p class="font-semibold italic mt-5 underline">{{ t('work.xp2.title') }}</p>

    <p class="font-medium italic ml-5">{{ t('work.xp2.activities') }}</p>
    <ul>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp2.t1') }}</span>{{ t('work.xp2.p1') }}
      </li>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp2.t2') }}</span>{{ t('work.xp2.p2') }}
      </li>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp2.t3') }}</span>{{ t('work.xp2.p3') }}
      </li>
    </ul>
    <p class="font-semibold italic mt-5 underline">{{ t('work.xp3.title') }}</p>
    <p class="font-medium italic ml-5">{{ t('work.xp3.activities') }}</p>
    <ul>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp3.t1') }}</span>{{ t('work.xp3.p1') }}
      </li>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp3.t2') }}</span>{{ t('work.xp3.p2') }}
      </li>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp3.t3') }}</span>{{ t('work.xp3.p3') }}
      </li>
      <li class="list-none ml-5"><span class="font-medium">{{ t('work.xp3.t4') }}</span>{{ t('work.xp3.p4') }}
      </li>
    </ul>
    <div class="h-[100px]" />

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
    "info": {
      "addressT": "Endereço:",
      "addressP": "São Paulo/SP - Brasil",
      "websiteT": "Site Pessoal: ",
      "websiteP": "www.rafalves.website",
      "emailT": "Email:",
      "emailP": "rafalves.costa%{at}gmail.com",
      "linkedinT": "LinkedIn: ",
      "linkedinP": "www.linkedin.com/in/rafael-alves-costa",
      "githubT": "GitHub: ",
      "githubP": "www.github.com/rafalves"
    },
    "profile": {
      "p1": "Perfil",
      "p2": "Com mais de 15 anos de experiência na área de TI atuei em setores como suporte, manutenção, testes e atualmente transicionando para a área de desenvolvimento.",
      "p3": "Sou autodidata, e tenho experiência com times internacionais."
    },
    "skill": {
      "title": "Habilidades",
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
    },
    "education": {
      "title": "Educação",
      "p1": "Análise e Desenvolvimento de Sistemas - Fatec Ipiranga (2017-2021)",
      "p2": "Curso de Empreendedorismo WEB/MOBILE - SENAI (2018)",
      "p3": "Curso Técnico em Informática - ETEC (2014)"
    },
    "language": {
      "title": "Idiomas",
      "p1": "Português do Brasil - Nativo",
      "p2": "Inglês - Avançado"
    },
    "work": {
      "title": "Experiencia Profissional",
      "xp1": {
        "title": "Freelancer - atual",
        "activities": "Atividades",
        "t1": "Desenvolvimento de Sites - ",
        "p1": "Crianção de páginas de captura, formulários, ou pequenos serviços relacionados."
      },
      "xp2": {
        "title": "Testador de Software na uTest - 2020/atual",
        "activities": "Atividades",
        "t1": "Testador - ",
        "p1": "Teste de software E2E nas plataformas Web/Mobile/Desktop, teste exploratório, performance de casos de uso, análise e rastreio de erros, correção de documentação, e atividades.",
        "t2": "Test Team Lead (TTL) - ",
        "p2": "Dar suporte ao testadores que estão participando da rodada de testes, validar artefatos, atualizar relatórios, testar ferramentas.",
        "t3": "Programador - ",
        "p3": "Criar, corrigir e dar suporte a ferramentas e paineis que ajudem os testadores a executarem suas tarefas. Front-end em Vue 3, e Back-end em Flask com banco de dados MongoDB."
      },
      "xp3": {
        "title": "Técnico em Informática na Siscart, Sistemas para Cartórios - 2013/2019",
        "activities": "Atividades",
        "t1": "Supervisor - ",
        "p1": "Supervisor do departamento de TI.",
        "t2": "Manutenção de equipamentos - ",
        "p2": "Manutenção de computadores, servidores e impressoras.",
        "t3": "Treinamentos - ",
        "p3": "Treinar os usuários a utilizarem as ferramentas desenvolvidas pela empresa.",
        "t4": "Suporte - ",
        "p4": "Suporte aos usuários."
      }
    }
  },
  "en-US": {
    "title": {
      "p1": "Hi, I'm Rafael",
      "p2": "Software developer"
    },
    "info": {
      "addressT": "Address:",
      "addressP": "São Paulo/SP - Brazil",
      "websiteT": "Personal Website: ",
      "websiteP": "www.rafalves.website",
      "emailT": "Email:",
      "emailP": "rafalves.costa%{at}gmail.com",
      "linkedinT": "LinkedIn: ",
      "linkedinP": "www.linkedin.com/in/rafael-alves-costa",
      "githubT": "GitHub: ",
      "githubP": "www.github.com/rafalves"
    },
    "profile": {
      "p1": "Profile",
      "p2": "With more than 15 years of experience in the IT area, I have worked in sectors such as support, maintenance, testing and currently transitioning to the development area.",
      "p3": "I am self-taught, and have experience with international teams."
    },
    "skill": {
      "title": "Skills",
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
    },
    "education": {
      "title": "Education",
      "p1": "Systems Analysis and Development - Fatec Ipiranga (2017-2021)",
      "p2": "WEB/MOBILE Entrepreneurship Course - SENAI (2018)",
      "p3": "IT Technical Course - ETEC (2014)"
    },
    "language": {
      "title": "Languages",
      "p1": "Brazilian Portuguese - Native",
      "p2": "English - Advanced"
    },
    "work": {
      "title": "Professional Experience",
      "xp1": {
        "title": "Freelancer - current",
        "activities": "Activities",
        "t1": "Website Development",
        "p1": "Creation of capture pages, forms, or small related services."
      },
      "xp2": {
        "title": "Software Tester at uTest - 2020/current",
        "activities": "Activities",
        "t1": "Tester - ",
        "p1": "E2E software testing on Web/Mobile/Desktop platforms, exploratory testing, use case performance, error analysis and tracking, documentation correction, and activities.",
        "t2": "Test Team Lead (TTL) - ",
        "p2": "Support testers who are participating in the testing round, validate artifacts, update reports, test tools.",
        "t3": "Programmer - ",
        "p3": "Create, correct and support tools and panels that help testers perform their tasks. Front-end in Vue 3, and Back-end in Flask with MongoDB database."
      },
      "xp3": {
        "title": "IT Technician at Siscart, Systems for Notary Offices - 2013/2019",
        "activities": "Activities",
        "t1": "Supervisor - ",
        "p1": "IT department supervisor.",
        "t2": "Equipment maintenance - ",
        "p2": "Maintenance of computers, servers and printers.",
        "t3": "Training - ",
        "p3": "Train users to use the tools developed by the company.",
        "t4": "Support - ",
        "p4": "User support."
      }
    }
  }
}
</i18n> 