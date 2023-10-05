<template>
  <Html :lang="htmlAttrs.lang" class="scroll-smooth">
  <div class="flex flex-col h-full antialiased bg-[#f7eff5]">
    <header>
      <Header />
    </header>

    <div class="flex-1">

      <!-- create aside menus later  -->
      <!-- <aside class="flex-1" /> -->

      <!-- <div class="h-full p-5 bg-slate-300 mx-auto max-w-[58rem]">
      </div> -->
      <div class="h-full">

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

onMounted(() => {
  if (process.env.NODE_ENV) {
    // Work around for https://github.com/nuxt/nuxt/issues/13350
    // @TODO Remove when fixed
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (ev) => {
        const messages = [
          `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // Chromium
          `NotFoundError: Node.insertBefore: Child to insert before is not a child of this node`, // Firefox
          `NotFoundError: The object can not be found here.` // Safari
        ]

        if (messages.some((message) => ev.message.includes(message))) {
          console.warn('Reloading due to error: https://github.com/nuxt/nuxt/issues/13350')
          ev.preventDefault()
          window.location.reload()
        }
      })
    }
  }
})
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