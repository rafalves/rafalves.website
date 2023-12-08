<template>
  <div class="flex gap-1">

    <div>
      <Icon v-show="isLightTheme" name="ic:round-light-mode" size="30" color="yellow"
        @click="colorMode.preference = 'light'" />
      <Icon v-show="!isLightTheme" name="ic:round-light-mode" size="30" color="blue" class=""
        @click="colorMode.preference = 'light'" />
    </div>
    <div>
      <Icon name="material-symbols:dark-mode" size="30" color="blue" @click="colorMode.preference = 'dark'"
        :class="isDarkTheme" />
    </div>
    <Icon name="streamline-emojis:game-dice" size="30" class="cursor-pointer" @click="randomColor"
      :class="isRandomTheme" />

  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function randomColor() {
  const themeIndex = Math.floor(Math.random() * colorThemes.length)
  colorMode.preference = colorThemes[themeIndex]
}

const isRandomTheme = ref('saturate-50')

const isLightTheme = ref()
// const isLightTheme = computed(() => colorMode.preference === 'light')
const isDarkTheme = computed(() => colorMode.preference === 'dark')

onMounted(() => {
  isLightTheme.value = colorMode.preference === 'light' ? true : false

});

watchEffect(() => {
  console.log('light: ' + isLightTheme.value)
  console.log('dark: ' + isDarkTheme.value)
  console.log('colorMode: ' + colorMode.preference)
})
</script>
