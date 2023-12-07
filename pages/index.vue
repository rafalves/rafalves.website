<script setup lang="ts">
// const { t } = useI18n({
//   useScope: 'local',
// })
// const localePath = useLocalePath()

</script>

<template>
  <div class="flex flex-col mt-5 tablet:mt-10 gap-3 mx-5 break-words">

    <section>
      <div class="flex flex-col tablet:flex-row justify-between gap-3">

        <div class="bg-accent tablet:w-1/2 rounded-3xl pb-5">
          <div class="flex flex-col gap-3 mt-[7%] mx-5">
            <p class="text-2xl tablet:text-3xl md:text-4xl font-bold">Desenvolvedor Full Stack</p>
            <p class="text-justify ">Um entusiasta Full Stack em constante evolução. Deixe-me guiá-lo por minha jornada
              no
              mundo do
              desenvolvimento, destacando minhas habilidades, projetos e experiências. Vamos construir algo incrível
              juntos!
            </p>
            <button class="btn btn-neutral tablet:btn-wide tablet:btn-lg w-full self-center my-5">ENTRE EM
              CONTATO</button>
          </div>
        </div>

        <div class="flex flex-col gap-3  items-center tablet:w-1/2">
          <div class="avatar pt-[5%]">
            <div class="w-56 bg-error  mask mask-squircle">
              <img src="/img/rafael-profile.png" />
            </div>
          </div>
          <h1 class="text-4xl font-extrabold">Rafael Alves</h1>
        </div>

      </div>
    </section>

    <section>
      <div class="flex flex-col md:flex-row gap-3">

        <div class="flex flex-col items-center gap-3 md:w-1/3 bg-info rounded-3xl p-5">
          <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold">Destaque-se no Online!</h1>
          <p>Torne-se um profissional respeitado tendo sua própria marca na internet</p>
          <img class="w-fit" src="/img/website.png" />
        </div>
        <div class="place-self-end text-start md:w-2/3 flex flex-col gap-3 bg-warning rounded-3xl p-5">
          <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold  ">Vantagens de se ter um site:</h1>
          <ul class="flex flex-col gap-3 tablet:ml-5">
            <li>
              <p>
                <Icon name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">Credibilidade:</span> ter
                uma
                presença
                online
                fortalece sua
                credibilidade e conquista a confiança de
                seus clientes
              </p>
            </li>
            <li>
              <p>
                <Icon name="mdi:check-bold" color="yellow" size=" 30" />
                <span class="font-bold">Identidade própria:</span> não se limite a
                ferramentas
                pagas ou redes sociais
              </p>
            </li>
            <li>
              <p>
                <Icon name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">Clientes à vista:</span>
                Redirecione clientes para
                campanhas ou produtos
              </p>
            </li>
            <li>
              <p>
                <Icon name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">Acesso aos seus
                  dados:</span> Google Analytics e Facebook Pixel
              </p>
            </li>
            <li>
              <p>
                <Icon name="mdi:check-bold" color="yellow" size=" 30" /><span class="font-bold">Automatizão de
                  tarefas:</span> automatize tarefas repetitivas e manuais, como planilhas e pastas
              </p>
            </li>
            <li>
              <p class="font-bold">
                <Icon name="mdi:check-bold" color="yellow" size=" 30" />VENDA MUITO MAIS
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="divider" />

    <section>
      <div class="bg-success rounded-3xl p-5">
        <h1 class="text-2xl tablet:text-3xl md:text-4xl font-extrabold">Serviços</h1>

        <div class="flex flex-col md:flex-row gap-3 mt-[15px] justify-between">
          <div>
            <p class="text-xl tablet:text-2xl font-bold">Sites:</p>
            <ul class=" list-disc pl-5">
              <li>Sites Institucionais</li>
              <li>Landing page</li>
              <li>Páginas de Captura</li>
              <li>Páginas de Obrigado</li>
              <li>Páginas de Formulário</li>
              <li>Blog</li>
              <li>SEO</li>
              <li>Tráfego Pago/Campanhas</li>
              <li>Analytics e Pixel</li>
            </ul>
          </div>
          <div>
            <p class="text-xl tablet:text-2xl font-bold">Sistemas:</p>
            <ul class=" list-disc pl-5">
              <li>Ecommerces</li>
              <li>Aplicativos Web</li>
              <li>Aplicativos Mobile</li>
              <li>Aplicativos Desktop</li>
              <li>Painéis e Dashboards</li>
              <li>Criação de Servidores</li>
              <li>Banco de Dados</li>
            </ul>
          </div>
          <div>
            <p class="text-xl tablet:text-2xl font-bold">Automatização:</p>
            <ul class=" list-disc pl-5">
              <li>Extração e scrape de dados</li>
              <li>Bots de postagem do Telegram/Whatsapp</li>
              <li>Automatização de Planilhas</li>
            </ul>
          </div>
        </div>
        <p class="text-2xl font-bold text-end">e muito mais...</p>

      </div>
    </section>

    <section>
      <div class="p-5">
        <h1 class="text-2xl tablet:text-3xl md:text-4xl  font-extrabold">Portfólio</h1>
        <p>Alguns dos meus trabalhos:</p>

        <div class="flex flex-col md:flex-row justify-between gap-3 mt-[15px]">
          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">Página de Captura</p>
            <div class="flex justify-center mb-4">
              <NuxtLink to="https://port folio-landing-page-pedro-sobral.vercel.app/" target="_blank">
                <img class="rounded-xl" src="/img/portfolio-1-pedro-sobral.webp" alt="Página de Captura">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://port folio-landing-page-pedro-sobral.vercel.app"
                target="_blank">Demonstração ao Vivo</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/lp-pedro-sobral" target="_self">Sobre o Projeto</NuxtLink>
            </p>
          </div>

          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">Projeto Pessoal</p>
            <div class="flex justify-center mb-4">
              <NuxtLink to="https://www.melhores-compras.online" target="_blank">
                <img class="rounded-xl" src="/img/portfolio-2-mco.webp" alt="Projeto Pessoal">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://www.melhores-compras.online" target=" _blank">Demonstração ao
                Vivo</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/melhores-compras-online" target="_self">Sobre o Projeto
              </NuxtLink>
            </p>
          </div>


          <div class="w-full">
            <p class="text-xl font-bold text-center my-4">Buscador de Filmes</p>
            <div class="flex justify-center mb-4">
              <NuxtLink to="https://nuxt-movie-website.vercel.app/" target="_blank">
                <img class="rounded-xl" src="/img/portfolio-3-movies.webp" alt="Nuxt Movies App">
              </NuxtLink>
            </div>

            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="https://nuxt-movie-website.vercel.app/" target=" _blank">Demonstração
                ao
                Vivo</NuxtLink>
            </p>
            <p class="text-center font-medium">
              <NuxtLink class="link link-hover" to="/portfolio/movie-app" target="_self">Sobre o Projeto
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
    "section_home": {
      "title": {
        "t1": "Transforme",
        "t2": "Ideias em",
        "t3": "Realidade"
      },
      "description": {
        "p1": "Criamos Aplicativos Mobile, Web e Servidores Sob Medida",
        "p2": "Potencialize sua Presença Online com SEO de Alto Desempenho",
        "p3": "Vamos criar algo incrível juntos!"
      },
      "btns": {
        "portfolio": "Portfólio",
        "contact": "Contato"
      },
      "gif_alt": "Hero gif animado",
      "seo": {
        "metadescription": "Minha pagina de freelancer"
      }
    }
  },
  "en-US": {
    "page_title": "testes USSSSSSSSSS",
    "section_home": {
      "title": {
        "t1": "Transform",
        "t2": "Ideas into",
        "t3": "Reality"
      },
      "description": {
        "p1": "We create Mobile Application, Websites and Server on Demand",
        "p2": "Boost your Online Presence with High Performance SEO",
        "p3": "Let's create something amazing together!"
      },
      "btns": {
        "portfolio": "Portfolio",
        "contact": "Contact"
      },
      "gif_alt": "Animated hero gif",
      "seo": {
        "metadescription": "My freelancer page"
      }
    }
  }
}
</i18n> 
 