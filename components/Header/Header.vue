<template>
  <div class="flex bg-slate-300">
    <ul class="flex flex-1 justify-center gap-5">
      <li>
        <NuxtLink :to="localePath('/')">
          {{ $t('header.nav.home') }}</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="localePath('/portfolio')">
          {{ $t('header.nav.portfolio') }}</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="localePath('/services')">
          {{ $t('header.nav.services') }}</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="localePath('/contact')">
          {{ $t('header.nav.contact') }}</NuxtLink>
      </li>

      <li>
        <NuxtLink :to="localePath('/about')">
          {{ $t('header.nav.about') }}</NuxtLink>
      </li>

    </ul>
    <div class="">
      <GlobalLangSwitcher />
    </div>
  </div>
</template>


<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()

</script>