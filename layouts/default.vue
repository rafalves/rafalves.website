<template>
  <Html data-theme="light" :lang="htmlAttrs.lang" class="scroll-smooth font-poppins">
  <div>
    <div class="flex flex-col h-full antialiased max-w-[1140px] mx-auto">

      <header class="mt-5">
        <Header />
      </header>

      <div class="flex-1">
        <div>
          <slot />
        </div>
      </div>
    </div>

    <div class="bg-base-300">
      <Footer />
    </div>
  </div>

  </Html>
</template>


<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

// locale Lang SEO
const head = useLocaleHead({
  addSeoAttributes: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)

// Default SEO
useSeoMeta({
  title: t('page_title'),
  description: t('meta_description'),
})

// This script is a workaround for the issue fast route change
onMounted(() => {
  if (process.env.NODE_ENV) {
    // Work around for https://github.com/nuxt/nuxt/issues/13350
    // @TODO Remove when fixed
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (ev) => {
        const messages = [
          `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // Chromium
          `NotFoundError: Node.insertBefore: Child to insert before is not a child of this node`, // Firefox
          `NotFoundError: The object can not be found here.`, // Safari
        ]

        if (messages.some(message => ev.message.includes(message))) {
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

<i18n lang="json">
{
  "pt-BR": {
    "page_title": "Rafael Alves - Desenvolvedor de Software",
    "meta_description": "Criação de Sites, SEO, Aplicativos Mobile, E-commerce, Servidores Backend. Transforme sua ideia em realidade!"
  },
  "en-US": {
    "page_title": "Rafael Alves - Software Developer",
    "meta_description": "Website Creator, SEO, Mobile Applications, E-commerce and Backend Servers. Turn your idea into reality!"
  }
}
</i18n>

