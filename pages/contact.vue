<template>
  <div class="flex flex-col mt-20 gap-3 max-w-[1140px] mx-auto w-full">
    <div class="h-full">
      <h1 class="text-2xl tablet:text-4xl font-extrabold uppercase text-center">Contato</h1>
      <p>Entre em contato sem compromisso</p>
      <p><span class="font-semibold">Whatsapp: </span>+55 11 98547-0682</p>
      <p><span class="font-semibold">E-mail: </span>rafalves.costa@gmail.com</p>
      <p><span class="font-semibold">LinkedIn: </span>www.linkedin.com/in/rafael-alves-costa</p>
      <p><span class="font-semibold">GitHub: </span>www.github.com/rafalves</p>
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
  "pt-BR": {},
  "en-US": {}
}
</i18n> 