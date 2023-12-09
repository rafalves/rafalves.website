<template>
  <div>
    <nav class="flex justify-between mx-5 gap-3">
      <NuxtLink :to="localePath('/')">
        <span class="text-2xl font-museoModerno font-bold">
          rafalves.website
        </span>
      </NuxtLink>

      <SlicesMenuButton />

      <div class="hidden md:flex gap-3">
        <div class="flex gap-3 pt-1">



          <ul class="flex gap-3">
            <li class="italic hover:underline">
              <NuxtLink :to="localePath('/about')">
                {{ t('about') }}
              </NuxtLink>
            </li>
            <li class="italic hover:underline">
              <NuxtLink :to="localePath('/portfolio')">
                {{ t('portfolio') }}
              </NuxtLink>
            </li>
            <li class="italic hover:underline">
              <NuxtLink :to="localePath('/contact')">
                {{ t('contact') }}
              </NuxtLink>
            </li>
          </ul>

          <SlicesLangSwitcher />

          <nav>
            <div class="grid grid-flow-col gap-3">
              <NuxtLink to="https://www.linkedin.com/in/rafael-alves-costa/" target="_blank">
                <Icon name="devicon:linkedin" size="20" />
              </NuxtLink>
              <NuxtLink to="https://github.com/rafalves" target="_blank">
                <Icon name="bi:github" size="20" />
              </NuxtLink>
              <NuxtLink to="https://wa.me/5511985470682" target="_blank">
                <Icon name="logos:whatsapp-icon" size="25" />
              </NuxtLink>
            </div>
          </nav>

        </div>

      </div>
    </nav>
  </div>
</template>

<i18n lang="json">
{
  "pt-BR": {
    "about": "Quem sou",
    "portfolio": "Portfólio",
    "contact": "Contato"
  },
  "en-US": {
    "about": "Who am I",
    "portfolio": "Portfolio",
    "contact": "Contact"
  }
}
</i18n>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({
  useScope: 'local',
})

</script>
