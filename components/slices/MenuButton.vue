<template>
  <div class="md:hidden">
    <button @click="isOpen = !isOpen">
      <Icon name="noto:hamburger" size="30" />
    </button>

    <Transition name="fade">
      <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 glass opacity-75 z-40 cursor-default">
      </button>
    </Transition>


    <!-- template menu sidebar -->
    <Transition name="slide" mode="out-in">

      <aside v-if="isOpen"
        class="fixed top-0 left-0 w-3/5 h-screen bg-neutral-content z-50 text-neutral flex flex-col justify-between">

        <div class="flex flex-col gap-5 menu mt-10">

          <div class="flex gap-10 justify-center">
            <SlicesLangSwitcher />
            <!-- <SlicesColorSwitch /> -->
          </div>

          <p class="text-center text-xl font-extrabold opacity-80">{{ t('links') }}</p>
          <nav class="flex justify-center">
            <ul>
              <li>
                <NuxtLink :to="localePath('/about')" class="link link-hover">{{ t('about') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/portfolio')" class="link link-hover">{{ t('portfolio') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contact')" class="link link-hover">{{ t('contact') }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <footer class="footer footer-center text-base-content rounded mb-10">
          <nav>
            <div class="grid grid-flow-col gap-4">
              <NuxtLink to="https://github.com/rafalves" target="_blank">
                <Icon name="devicon:linkedin" size="25" />
              </NuxtLink>
              <NuxtLink to="https://www.linkedin.com/in/rafael-alves-costa/" target="_blank">
                <Icon name="bi:github" size="25" />
              </NuxtLink>
              <NuxtLink to="https://wa.me/5511985470682" target="_blank">
                <Icon name="logos:whatsapp-icon" size="30" />
              </NuxtLink>
            </div>
          </nav>
          <aside>
            <p class="px-2 tablet:px-5">Copyright © 2023 | rafalves.website - {{ t('rights') }}</p>
          </aside>
        </footer>
      </aside>
    </Transition>

  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()

const isOpen = ref(false);

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Esc" || e.key === "Escape") {
    isOpen.value = false;
  }
};
onMounted(() => document.addEventListener("keydown", handleEscape));
onBeforeUnmount(() => document.removeEventListener("keydown", handleEscape));
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<i18n lang="json">
{
  "pt-BR": {
    "about": "Quem sou",
    "portfolio": "Portfólio",
    "contact": "Contato",
    "rights": "Todos os direitos reservados",
    "links": "Links Úteis"
  },
  "en-US": {
    "about": "Who am I",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "rights": "All rights reserved",
    "links": "Useful Links"
  }
}
</i18n>
 