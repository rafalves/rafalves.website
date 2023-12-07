<template>
  <div class="flex gap-1">

    <Icon name="ic:round-light-mode" size="30" color="yellow" @click="colorMode.value = 'light'" :class="isLightTheme" />
    <Icon name="material-symbols:dark-mode" size="30" color="blue" @click="colorMode.value = 'dark'"
      :class="isDarkTheme" />
    <Icon name="streamline-emojis:game-dice" size="30" class="cursor-pointer" @click="randomColor"
      :class="isRandomTheme" />
    <!-- <p class="w-[90px] italic">{{ colorMode.value }}</p> -->

  </div>
</template>

<script setup lang="ts">
// import colorThemes from '/utils/colorThemes'


const colorMode = useColorMode()

function randomColor() {
  const themeIndex = Math.floor(Math.random() * colorThemes.length)
  colorMode.value = colorThemes[themeIndex]
}

const isRandomTheme = computed(() => {
  return colorThemes.includes(colorMode.value) ? 'animate-spin' : 'animate-none saturate-0'
})
const isLightTheme = computed(() => colorMode.value === 'light' ? '' : 'saturate-0')

const isDarkTheme = computed(() => colorMode.value === 'dark' ? '' : 'saturate-0 opacity-75')




watchEffect(() => {
  if (colorThemes.includes(colorMode.value)) {
  }
})


</script>