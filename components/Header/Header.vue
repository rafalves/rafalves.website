<template>
  <nav class="flex box-border px-10 font-poppins bg-[#F9FFFF]">
    <h1><span>RAF</span>ALVES</h1>
    <ul class="flex">
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
    <div class="mr-5">
      <GlobalLangSwitcher />
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px;
  height: 100px;
  align-items: center;
}

h1 {
  font-size: 2.6em;
  color: #000;
  position: relative;
  cursor: pointer;
  pointer-events: all;
  letter-spacing: 4px;
}

h1 span {
  color: #EC4899;
}

nav ul li {
  position: relative;
  list-style: none;
  font-size: 1.5em;
  font-weight: 400;
  padding: 12px 18px;
  cursor: pointer;
  pointer-events: all;
  overflow: hidden;
}

nav ul li::after {
  content: '';
  position: absolute;
  bottom: 5px;
  width: 0%;
  height: 3px;
  left: 50%;
  background: #EC4899;
  transform: translateX(-50%);
  transition: .3s;
}

nav li:hover {
  color: #EC4899;
}

nav li:hover::after {
  width: 100%;
}
</style>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()

</script>