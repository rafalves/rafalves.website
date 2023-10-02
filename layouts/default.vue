<template>
  <Html :lang="htmlAttrs.lang" class="scroll-smooth">
  <div class="flex flex-col h-full antialiased bg-slate-100">
    <header>
      <Header />
    </header>

    <div class="flex-1">

      <!-- create aside menus later  -->
      <!-- <aside class="flex-1" /> -->

      <!-- <div class="h-full p-5 bg-slate-300 mx-auto max-w-[58rem]">
      </div> -->
      <div>
        <slot />
      </div>

      <!-- <aside class="flex-1" /> -->
    </div>

    <footer class="bg-slate-300">
      <Footer />
    </footer>
  </div>

  </Html>
</template>


<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true
})

const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s linear;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.25rem);
}
</style>