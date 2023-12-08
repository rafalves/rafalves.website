<template>
  <div class="flex flex-col mt-5 tablet:mt-10 gap-3 mx-5">
    <p class="font-bold uppercase">Oi, eu sou o Rafael</p>
    <h1 class="text-2xl tablet:text-3xl font-extrabold uppercase -mt-3">Desenvolvedor de Software</h1>

    <div class="divider" />
    <h2 class="text-xl font-bold">Perfil:</h2>
    Com mais de 15 anos de experiência na área de TI atuei em setores como suporte, manutenção, testes e atualmente
    transicionando para a área de desenvolvimento.
    <p>Sou autodidata, e tenho experiência com times internacionais.</p>
    <div class="divider" />
    <h2 class="text-xl font-bold">Habilidades:</h2>
    <div class="flex justify-between gap-5 tablet:w-[80%]">
      <div>
        <h2 class="font-bold">Linguagens e Tecnologias</h2>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Dart</li>
          <li>HTML semântico, SEO, Dados Estruturados</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
          <li>Programação Orientada a Objetos</li>
          <li>Banco de Dado SQL / NoSql</li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">Frameworks</h2>
        <ul>
          <li>Vue 3</li>
          <li>Nuxt 3</li>
          <li>Flutter</li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold">Backend</h2>
        <ul>
          <li>Express</li>
          <li>NitroJS</li>
          <li>Strapi v4</li>
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
  "pt-BR": {},
  "en-US": {}
}
</i18n> 