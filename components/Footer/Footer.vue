<template>
  <div class="max-w-[1140px] mx-auto">

    <footer class="footer footer-center p-10 text-base-content rounded">
      <nav class="grid grid-flow-col gap-4">
        <NuxtLink :to="localePath('/about')" class="link link-hover">{{ t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/portfolio')" class="link link-hover">{{ t('portfolio') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="link link-hover">{{ t('contact') }}</NuxtLink>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <NuxtLink to="https://www.linkedin.com/in/rafael-alves-costa/" target="_blank">
            <Icon name="devicon:linkedin" size="25" />
          </NuxtLink>
          <NuxtLink to="https://github.com/rafalves" target="_blank">
            <Icon name="bi:github" size="25" />
          </NuxtLink>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 | rafalves.website - {{ t('rights') }}</p>
      </aside>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
</script>

<i18n lang="json">
{
  "pt-BR": {
    "about": "Quem sou",
    "portfolio": "Portfólio",
    "contact": "Contato",
    "rights": "Todos os direitos reservados"
  },
  "en-US": {
    "about": "Who am I",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "rights": "All rights reserved"
  }
}
</i18n>
 