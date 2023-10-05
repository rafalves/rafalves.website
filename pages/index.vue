<template>
  <div class="relative">
    <div class="bgAnimation">
      <div class="backgroundAmim" />
      <div v-for="box in 400" class="colorBox" />
    </div>

    <section
      class="pointer h-[90dvh] md:h-[90vh] flex justify-center  box-border font-poppins flex-col-reverse md:flex-row relative">

      <div class="text-center backdrop-blur-[1px] text-slate-800 md:max-w-[50%] md:mt-[8%]">

        <h1 class="text-3xl md:text-[3.4rem] mx-5 font-semibold tracking-wider leading-snug text-black ">
          <span class="text-[#EC4899]">
            {{ t('section_home.title.t1') }}
          </span>
          {{ t('section_home.title.t2') }}
          <span class="text-[#EC4899]">{{ t('section_home.title.t3') }}
          </span>
        </h1>
        <div class="md:h-10" />
        <p class="text-[1.2rem] font-medium mt-2">
          {{ t('section_home.description.p1') }}
        </p>

        <p class="text-[1.2rem] font-medium mt-2">
          {{ t('section_home.description.p2') }}
        </p>

        <p class="text-[1.2rem] font-medium mt-2">
          {{ t('section_home.description.p3') }}
          <Icon name="fluent-emoji-flat:rocket" size="35px" />
        </p>

        <div class="md:h-5" />

        <NuxtLink :to="localePath('/portfolio')">
          <button
            class="homeBtn md:mr-10 my-4 mx-3 bg-transparent text-lg py-2 px-[18px] border-[3px] border-black hover:border-[#EC4899] rounded cursor-pointer mr-1 text-black hover:text-white hover:bg-[#EC4899] font-semibold hover:bg-">
            {{ t('section_home.btns.portfolio') }}
          </button>
        </NuxtLink>
        <NuxtLink :to="localePath('/contact')">
          <button
            class="homeBtn my-4 mx-3 bg-transparent text-lg py-2 px-[18px]  border-[3px] border-[#EC4899] rounded cursor-pointer text-[#EC4899] hover:text-white hover:bg-black hover:border-black font-semibold">
            {{ t('section_home.btns.contact') }}
          </button>
        </NuxtLink>

      </div>

      <div class="backdrop-blur-[1px] flex justify-center">
        <img class="-mt-[5%] h-[40vh] md:h-fit md:max-h-[70vh] w-auto -mb-[10%]" src="/img/hero.gif" :alt="heroAlt">
      </div>
    </section>

    <div class="h-5 bg-white md:hidden" />


  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const localePath = useLocalePath()

const heroAlt = ref(t('section_home.gif_alt'))



</script> 

<style scoped>
.logo:nth-child(2) {
  transition-delay: 200ms;
}

.logo:nth-child(3) {
  transition-delay: 400ms;
}

.logo:nth-child(4) {
  transition-delay: 600ms;
}

.logo:nth-child(5) {
  transition-delay: 800ms;
}

.scrollObserver {
  opacity: 0;
  transition: all 2s;
  filter: blur(5px);
  transform: translateX(-100%);
}

.scrollObserver2 {
  opacity: 0;
  transition: all 2s;
  filter: blur(5px);
  transform: translateX(-200%);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
  transition: all 2s;
}

.homeBtn {
  border-radius: 4px;
  cursor: pointer;
  pointer-events: all;
  transition: .3s;
  font-weight: 600;
}

.pointer {
  pointer-events: none;
}

.colorBox {
  z-index: 2;
  filter: brightness(1.1);
  transition: 2s ease;
  position: relative;
  margin: 2px;
  background: #E2E8F0;
}

.colorBox:hover {
  /* background: #EC4899; */
  background: #FBDAEB;
  transition-duration: 0s;
}

.bgAnimation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  filter: saturate(1);
  overflow: hidden;
}

.backgroundAmim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #EC4899;
  filter: blur(60px);
  animation: animBack 6s linear infinite;
}

@keyframes animBack {
  0% {
    top: -60px;
  }

  100% {
    top: 120%;
  }
}

.polygon {
  clip-path: polygon(0 20%, 100% 10%, 100% 90%, 0 90%);
}
</style>

<i18n lang="json">
{
  "pt-BR": {
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