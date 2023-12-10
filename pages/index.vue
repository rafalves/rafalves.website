<script setup lang="ts">
const { t, rt, tm } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
</script>

<template>
  <div class="flex flex-col mt-5 tablet:mt-10 gap-3 break-words">

    <section>
      <div class="flex flex-col tablet:flex-col justify-between gap-3 mt-16 max-w-[1140px] mx-auto w-full">

        <div>
          <p class="text-lg tablet:text-2xl font-bold uppercase">{{ t('section_1.p1') }}</p>
          <h1 class="text-4xl tablet:text-6xl md:text-8xl uppercase  font-paytone-one tablet:mt-5 text-center">{{
            t('section_1.title') }}</h1>
        </div>
        <p class="text-xl tablet:text-3xl text-center mt-8 font-light"> {{ t('section_1.p2') }}
          <Icon name="noto:rocket" size="30" />
        </p>

        <div class="flex flex-col text-lg justify-center items-center gap-5 mt-5  font-light">
          <p>{{ t('section_1.p3') }}
          </p>
          <NuxtLink to="https://wa.me/5511985470682" target="_blank">
            <button class="wppBtn w-fit tablet:my-5 uppercase whitespace-nowrap"><span>Whatsapp
                <Icon name="logos:whatsapp-icon" size="30" class="ml-2" />
              </span></button>
          </NuxtLink>
        </div>
      </div>
      <div class="h-[200px]" />
    </section>

    <section id=2>
      <div class="flex flex-col md:flex-row gap-3 bg-red-100 max-w-[1140px] mx-auto w-full">

        <div class="flex flex-col items-center gap-3 md:w-1/3 bg-info rounded-3xl p-5">
          <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold">{{ t('section_2.title') }}</h1>
          <p>{{ t('section_2.p1') }}</p>
          <img class="w-fit" src="/img/website.png" />
        </div>
        <div class="place-self-end text-start md:w-2/3 flex flex-col gap-3 bg-warning rounded-3xl p-5">
          <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold  ">{{ t('section_3.title') }}</h1>
          <ul class="flex flex-col gap-3 tablet:ml-5">
            <li>
              <p>
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">{{
                  t('section_3.list.1.span') }}</span> {{
    t('section_3.list.1.p') }}
              </p>
            </li>
            <li>
              <p>
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" />
                <span class="font-bold">{{
                  t('section_3.list.2.span') }}</span> {{
    t('section_3.list.2.p') }}
              </p>
            </li>
            <li>
              <p>
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">{{
                  t('section_3.list.3.span') }}</span>
                {{
                  t('section_3.list.3.p') }}
              </p>
            </li>
            <li>
              <p>
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">{{
                  t('section_3.list.4.span') }}</span> {{
    t('section_3.list.4.p') }}
              </p>
            </li>
            <li>
              <p>
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">{{
                  t('section_3.list.5.span') }}</span> {{
    t('section_3.list.5.p') }}
              </p>
            </li>
            <li>
              <p class="font-bold">
                <Icon class="mr-2" name="mdi:check-bold" color="yellow" size=" 30" />{{
                  t('section_3.list.6.span') }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="divider" />

    <section>
      <div class="bg-success rounded-3xl p-5 tablet:px-10 max-w-[1140px] mx-auto w-full">
        <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold">{{ t('services.title') }}</h1>

        <div class="flex flex-col md:flex-row gap-3 mt-[15px] justify-between">
          <div>
            <p class="text-xl tablet:text-2xl font-bold">{{ t('services.website') }}</p>
            <ul class=" list-disc pl-5">
              <li v-for="service in tm('services.websites_list')">{{ rt(service.p) }}</li>
            </ul>
          </div>
          <div>
            <p class="text-xl tablet:text-2xl font-bold">{{ t('services.system') }}</p>
            <ul class=" list-disc pl-5">
              <li v-for="service in tm('services.systems_list')">{{ rt(service.p) }}</li>
            </ul>
          </div>
          <div>
            <p class="text-xl tablet:text-2xl font-bold">{{ t('services.automation') }}</p>
            <ul class="list-disc pl-5">
              <li v-for="service in tm('services.automation_list')">{{ rt(service.p) }}</li>
            </ul>
          </div>
        </div>
        <p class="text-2xl font-bold text-end">{{ t('services.more') }}</p>

      </div>
    </section>

    <section>
      <div class="p-5 max-w-[1140px] mx-auto w-full">
        <h1 class="text-2xl tablet:text-3xl md:text-4xl  font-extrabold">{{ t('portfolio.title') }}</h1>
        <p>{{ t('portfolio.p') }}</p>

        <div class="flex flex-col md:flex-row justify-between gap-3 mt-[15px]">
          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">{{ t('portfolio.list.1.title') }}</p>
            <div class="flex justify-center mb-4">
              <NuxtLink class="link link-hover" to="https://portfolio-landing-page-pedro-sobral.vercel.app"
                target="_blank">
                <img class="rounded-xl" src="/img/portfolio-1-pedro-sobral.webp" :alt="t('portfolio.list.1.title')">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://portfolio-landing-page-pedro-sobral.vercel.app"
                target="_blank">{{ t('portfolio.list.1.demo') }}</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/lp-pedro-sobral" target="_self">{{
                t('portfolio.list.1.about') }}</NuxtLink>
            </p>
          </div>

          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">{{ t('portfolio.list.2.title') }}</p>
            <div class="flex justify-center mb-4">
              <NuxtLink to="https://www.melhores-compras.online" target="_blank">
                <img class="rounded-xl" src="/img/portfolio-2-mco.webp" alt="Projeto Pessoal">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://www.melhores-compras.online" target=" _blank">{{
                t('portfolio.list.2.demo') }}</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/melhores-compras-online" target="_self">{{
                t('portfolio.list.2.about') }}
              </NuxtLink>
            </p>
          </div>


          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">{{ t('portfolio.list.3.title') }}</p>
            <div class="flex justify-center mb-4">
              <NuxtLink to="https://nuxt-movie-website.vercel.app/" target="_blank">
                <img class="rounded-xl" src="/img/portfolio-3-movies.webp" alt="Nuxt Movies App">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://nuxt-movie-website.vercel.app/" target=" _blank">{{
                t('portfolio.list.3.demo') }}</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/movie-app" target="_self">{{ t('portfolio.list.3.about') }}
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="h-[100px]" />
  </div>
</template>

<i18n lang="json">
{
  "pt-BR": {
    "page_title": "testes PTBRRRRRRRRR",
    "section_1": {
      "p1": "Oi, eu sou o Rafael",
      "title": "Desenvolvedor de Software",
      "p2": "Construo ferramentas WEB que vão fazer você faturar mais",
      "p3": "Tem alguma ideia em mente? Vamos bater um papo sem compromisso, me chame no",
      "cta": "Entre em contato"
    },
    "section_2": {
      "title": "Destaque-se no Online!",
      "p1": "Torne-se um profissional respeitado tendo sua própria marca na internet"
    },
    "section_3": {
      "title": "Vantagens de se ter um site:",
      "list": {
        "1": {
          "span": "Credibilidade:",
          "p": "ter uma presença online fortalece sua credibilidade e conquista a confiança de seus clientes"
        },
        "2": {
          "span": "Identidade própria:",
          "p": "não se limite ao formato das redes sociais"
        },
        "3": {
          "span": "Clientes à vista:",
          "p": "Redirecione clientes para campanhas ou produtos"
        },
        "4": {
          "span": "Acesso aos seus dados:",
          "p": "Google Analytics e Facebook Pixel"
        },
        "5": {
          "span": "Automatizão de tarefas:",
          "p": "automatize tarefas repetitivas e manuais, como planilhas e pastas"
        },
        "6": {
          "span": "VENDA MUITO MAIS!"
        }
      }
    },
    "services": {
      "title": "Serviços",
      "website": "Sites",
      "system": "Sistemas",
      "automation": "Automatização",
      "websites_list": [
        {
          "p": "Sites Institucionais"
        },
        {
          "p": "Landing page"
        },
        {
          "p": "Páginas de Captura"
        },
        {
          "p": "Páginas de Obrigado"
        },
        {
          "p": "Páginas de Formulário"
        },
        {
          "p": "Blog"
        },
        {
          "p": "SEO"
        },
        {
          "p": "Tráfego Pago/Campanhas"
        },
        {
          "p": "Analytics e Pixel"
        }
      ],
      "systems_list": [
        {
          "p": "Ecommerces"
        },
        {
          "p": "Aplicativos Web"
        },
        {
          "p": "Aplicativos Mobile"
        },
        {
          "p": "Aplicativos Desktop"
        },
        {
          "p": "Painéis e Dashboards"
        },
        {
          "p": "Criação de Servidores"
        },
        {
          "p": "Banco de Dados"
        }
      ],
      "automation_list": [
        {
          "p": "Extração e scrape de dados"
        },
        {
          "p": "Bots de postagem do Telegram/Whatsapp"
        },
        {
          "p": "Automatização de Planilhase"
        }
      ],
      "more": "e muito mais..."
    },
    "portfolio": {
      "title": "Portfólio",
      "p": "Alguns dos meus trabalhos:",
      "list": {
        "1": {
          "title": "Página de Captura",
          "demo": "Demonstração ao vivo",
          "about": "Sobre o Projeto"
        },
        "2": {
          "title": "Projeto Pessoal",
          "demo": "Demonstração ao vivo",
          "about": "Sobre o Projeto"
        },
        "3": {
          "title": "Buscador de Filmes",
          "demo": "Demonstração ao vivo",
          "about": "Sobre o Projeto"
        }
      }
    }
  },
  "en-US": {
    "page_title": "testes USSSSSSSSSS",
    "section_1": {
      "p1": "Hi, I'm Rafael",
      "title": "Software Developer",
      "p2": "I build WEB tools that will make you earn more",
      "p3": "Do you have any ideas in mind? Let's chat without obligation, call me on",
      "cta": "Get in touch"
    },
    "section_2": {
      "title": "Stand out Online!",
      "p1": "Become a respected professional by having your own brand on the internet"
    },
    "section_3": {
      "title": "Advantages of having a website:",
      "list": {
        "1": {
          "span": "Credibility:",
          "p": "having an online presence strengthens your credibility and gains the trust of your customers"
        },
        "2": {
          "span": "Self-identity:",
          "p": "don't limit yourself to paid tools or social networks"
        },
        "3": {
          "span": "Sight customers:",
          "p": "Redirect customers to campaigns or products"
        },
        "4": {
          "span": "Access to your data:",
          "p": "Google Analytics and Facebook Pixel"
        },
        "5": {
          "span": "Task automation:",
          "p": "automate repetitive, manual tasks like spreadsheets and folders"
        },
        "6": {
          "span": "SELL MUCH MORE!"
        }
      }
    },
    "services": {
      "title": "Services",
      "website": "Websites",
      "system": "Systems",
      "automation": "Automation",
      "websites_list": [
        {
          "p": "Institutional Sites"
        },
        {
          "p": "Landing page"
        },
        {
          "p": "Capture Pages"
        },
        {
          "p": "Thank You Pages"
        },
        {
          "p": "Form Pages"
        },
        {
          "p": "Blog"
        },
        {
          "p": "SEO"
        },
        {
          "p": "Paid Traffic/Campaigns"
        },
        {
          "p": "Analytics and Pixel"
        }
      ],
      "systems_list": [
        {
          "p": "Ecommerces"
        },
        {
          "p": "Web Applications"
        },
        {
          "p": "Mobile Applications"
        },
        {
          "p": "Desktop Applications"
        },
        {
          "p": "Panels and Dashboards"
        },
        {
          "p": "Server Creation"
        },
        {
          "p": "Database"
        }
      ],
      "automation_list": [
        {
          "p": "Data extraction and scraping"
        },
        {
          "p": "Telegram/Whatsapp Post Bots"
        },
        {
          "p": "Spreadsheet Automation"
        }
      ],
      "more": "and much more..."
    },
    "portfolio": {
      "title": "Portfolio",
      "p": "Some of my work:",
      "list": {
        "1": {
          "title": "Capture Page",
          "demo": "Live demo",
          "about": "About the Project"
        },
        "2": {
          "title": "Personal Project",
          "demo": "Live demo",
          "about": "About the Project"
        },
        "3": {
          "title": "Movie Search",
          "demo": "Live demo",
          "about": "About the Project"
        }
      }
    }
  }
}
</i18n> 
 
<style scoped>
_section {
  @apply max-w-[1140px] mx-auto w-full
}

.wppBtn {
  background: linear-gradient(to right, #01ff66 0%, #02b148 50%, #4dfc93 100%);
  background-size: 200% auto;
  animation: gradient 5s ease infinite;
  transition: transform 0.3s ease;
  border: none;
  border-radius: 9999px;
  padding: 1rem 3rem;
  color: white;
  font-weight: bold;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>