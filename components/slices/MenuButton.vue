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

        <nav class="flex flex-col gap-5 menu mt-10">

          <div class="flex gap-10 justify-center">
            <SlicesLangSwitcher />
            <SlicesColorSwitch />
          </div>

          <p class="text-center text-xl font-extrabold opacity-80">Links Úteis</p>
          <ul>
            <li>
              <NuxtLink>Quem sou</NuxtLink>
            </li>
            <li>
              <NuxtLink>Portfólio</NuxtLink>
            </li>
            <li>
              <NuxtLink>Contato</NuxtLink>
            </li>
          </ul>
        </nav>

        <footer class="footer footer-center text-base-content rounded mb-10">
          <nav>
            <div class="grid grid-flow-col gap-4">
              <NuxtLink to="" target="_blank">
                <Icon name="devicon:linkedin" size="25" />
              </NuxtLink>
              <NuxtLink to="" target="_blank">
                <Icon name="bi:github" size="25" color="gray" />
              </NuxtLink>
            </div>
          </nav>
          <aside>
            <p class="px-2 tablet:px-5">Copyright © 2023 | rafalves.website - Todos os direitos reservados</p>
          </aside>
        </footer>
      </aside>
    </Transition>

  </div>
</template>

<script setup lang="ts">

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