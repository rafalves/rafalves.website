
<template>
  <div>
    <nav class="flex justify-between mx-5 gap-3">
      <NuxtLink to="/">
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
          </ul>

          <SlicesLangSwitcher />

          <SlicesColorSwitch />

        </div>

        <button class="btn btn-neutral btn-sm">ENTRE EM CONTATO</button>

      </div>
    </nav>
  </div>
</template>

<i18n lang="json">
{
  "pt-BR": {
    "about": "Quem sou",
    "portfolio": "Portfólio"
  },
  "en-US": {
    "about": "Who am I",
    "portfolio": "Portfolio"
  }
}
</i18n>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({
  useScope: 'local',
})

</script>
