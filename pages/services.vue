<template>
  <div>
    {{ $t('page_services.content') }}

  </div>
</template> 

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
const route = useRoute()

const title = computed(() => t('page_title'))
const description = computed(() => t('meta_description'))


useSeoMeta({
  title: t('page_title'),
  description: t('meta_description')
}) 
</script>


<i18n lang="json">
{
  "pt-BR": {
    "page_title": "PT-BR",
    "meta_description": "ptttttttttttttttttt"
  },
  "en-US": {
    "page_title": "US",
    "meta_description": "ussssssssssssssssssss"
  }
}
</i18n>

