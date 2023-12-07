<template>
  <div> 
    <div class="flex gap-2">
      <Icon name="twemoji:flag-for-flag-brazil" :class="{'saturate-0': !isBrazil }" class="cursor-pointer" size="25" @click="setLocale('pt-BR')" />
      <Icon name="twemoji:flag-united-states" :class="{ 'saturate-0': !isUSA }" class="cursor-pointer" size="25" @click="setLocale('en-US')"/>
    </div> 
    
 
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n(); 
  
const isBrazil = computed(()=> locale.value === 'pt-BR')
const isUSA = computed(()=> locale.value !== 'pt-BR') 
</script>
