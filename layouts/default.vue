<template>
  <Html :lang="htmlAttrs.lang">
  <div class="flex flex-col h-full antialiased bg-slate-200">
    <header>
      <Header />
    </header>

    <div class="flex-1 m-5">

      <!-- create aside menus later  -->
      <!-- <aside class="flex-1" /> -->

      <div class="h-full p-5 bg-slate-300 mx-auto max-w-[58rem]">
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