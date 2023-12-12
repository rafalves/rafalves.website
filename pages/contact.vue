<template>
  <div class="flex  mt-20 gap-3 max-w-[1140px] mx-auto w-full">
    <div class="px-5 h-full w-full">

      <h1 class="text-2xl tablet:text-4xl font-extrabold uppercase text-center">{{ t('contact') }}</h1>
      <p class="text-xl font-bold mt-20">{{ t('p1') }}</p>

      <div class="flex flex-col tablet:flex-row gap-10 flex-wrap">

        <div class="w-fit h-fit p-5 bg-[#C09CE9] mt-10">
          <p><span class="font-medium">Whatsapp: </span> {{ t('whatsapp') }}</p>
          <span class="font-medium">E-mail: </span>
          <p class="link link-hover inline italic text-blue-800"> {{ t('email', { at: '@' }) }}</p><br>
          <span class="font-medium">LinkedIn: </span>
          <NuxtLink to="https://www.linkedin.com/in/rafael-alves-costa" target="_blank">
            <p class="link link-hover inline italic text-blue-800">{{ t('linkedin') }}</p>
          </NuxtLink>
          <br> <span class="font-medium">GitHub: </span>
          <NuxtLink to="https://www.github.com/rafalves" target="_blank">
            <p class="link link-hover inline italic text-blue-800">{{ t('github') }}</p>
          </NuxtLink>
        </div>

        <div class="w-full md:w-2/5 md:-mt-10 min-w-[250px] max-w-[440px]">
          <img src="/img/vector-2.svg" alt="">
        </div>

      </div>
    </div>
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
    "contact": "Contato",
    "p1": "Entre em contato sem compromisso",
    "whatsapp": "+55 11 98547-0682",
    "email": "rafalves.costa%{at}gmail.com",
    "linkedin": "www.linkedin.com/in/rafael-alves-costa",
    "github": "www.github.com/rafalves"
  },
  "en-US": {
    "contact": "Contact",
    "p1": "Get in touch without obligation",
    "whatsapp": "+55 11 98547-0682",
    "email": "rafalves.costa%{at}gmail.com",
    "linkedin": "www.linkedin.com/in/rafael-alves-costa",
    "github": "www.github.com/rafalves"
  }
}
</i18n> 