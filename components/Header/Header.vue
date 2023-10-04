<template>
  <nav ref="nav" class="flex box-border px-10 font-poppins bg-[#F9FFFF]">
    <NuxtLink to="/playground/">
      <h1><span>RAF</span>ALVES</h1>
    </NuxtLink>
    <ul class="flex">
      <NuxtLink :to="localePath('/')">
        <li>
          {{ $t('header.nav.home') }}
        </li>
      </NuxtLink>

      <NuxtLink :to="localePath('/portfolio')">
        <li>
          {{ $t('header.nav.portfolio') }}
        </li>
      </NuxtLink>

      <NuxtLink :to="localePath('/services')">
        <li>
          {{ $t('header.nav.services') }}
        </li>
      </NuxtLink>

      <NuxtLink :to="localePath('/contact')">
        <li>
          {{ $t('header.nav.contact') }}
        </li>
      </NuxtLink>

      <NuxtLink :to="localePath('/about')">
        <li>
          {{ $t('header.nav.about') }}
        </li>
      </NuxtLink>
    </ul>

    <div class="">
      <GlobalLangSwitcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { t } = useI18n();
const localePath = useLocalePath()

const nav = ref<HTMLElement | null>(null)
let navHeight = 0;


// watchEffect(() => {
//   if (nav.value) {
//     console.log(nav.value)
//     console.log(nav.value.clientHeight)
//     navHeight = nav.value.clientHeight
//   } else {
//     // not mounted yet, or the element was unmounted (e.g. by v-if)
//   }
// })


</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 40px;
  height: 60px;
  align-items: center;
}

ul {
  display: none;
}

h1 {
  font-size: 1.6em;
  color: #000;
  position: relative;
  cursor: pointer;
  pointer-events: all;
  letter-spacing: 4px;
}

h1 span {
  color: #EC4899;
}

@media (min-width: 640px) {
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
    height: 60px;
    align-items: center;
  }

  h1 {
    font-size: 2em;
    color: #000;
    position: relative;
    cursor: pointer;
    pointer-events: all;
    letter-spacing: 4px;
  }

  ul {
    display: flex;
  }

  nav ul li {
    position: relative;
    list-style: none;
    font-size: 1.0em;
    font-weight: 400;
    padding: 10px 10px;
    cursor: pointer;
    pointer-events: all;
    overflow: hidden;
  }

  nav ul li::after {
    content: '';
    position: absolute;
    bottom: 3px;
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
}

@media (min-width: 768px) {
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
    letter-spacing: 3px;
  }
}
</style>

