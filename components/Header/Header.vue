<template>
  <div class="fixed w-full glass">
    <div class="flex justify-between gap-3  py-5 px-2 max-w-[1140px] md:mx-auto w-full">
      <NuxtLink :to="localePath('/')">
        <span
          class="text-2xl font-museoModerno font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-700">
          rafalves.website
        </span>
      </NuxtLink>

      <SlicesMenuButton />

      <div class="hidden md:flex gap-3">
        <div class="flex gap-3 pt-1">
          <nav>
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
          </nav>

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
    </div>
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
