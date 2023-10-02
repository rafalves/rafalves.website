<template>
  <div class="relative">
    <div class="bgAnimation">
      <div class="backgroundAmim">
      </div>
      <div v-for="box in numberOfColorBoxes" class="colorBox" />
    </div>
    <section class="pointer h-screen flex justify-center items-center box-border font-poppins">
      <div class="text-center backdrop-blur-[1px]">
        <h1 class="text-[3.4rem] font-semibold"><span class="text-[#EC4899]">Animated</span>
          Background (CSS)</h1>
        <p class="text-[1.3rem]">Fast Track Your Web Development Career with Our Team! <br>
          Learn Web Development from Beginning with live coding sessions on your Laptop!</p>
        <button
          class="homeBtn my-4 mx-3 bg-transparent text-lg py-2 px-[18px] border-[3px] border-black hover:border-[#EC4899] rounded cursor-pointer mr-1 text-black hover:text-white hover:bg-[#EC4899] font-semibold hover:bg-">Join
          Us</button>
        <button
          class="homeBtn my-4 mx-3 bg-transparent text-lg py-2 px-[18px]  border-[3px] border-[#EC4899] rounded cursor-pointer text-[#EC4899] hover:text-white hover:bg-black hover:border-black font-semibold">EXPLORE</button>
      </div>
    </section>








    <section class="bg-green-200">
      section 2
    </section>
    <section class="bg-yellow-200">
      section 3
    </section>
    <section class="bg-red-200">
      section 4
    </section>
  </div>
</template>

<style scoped>
.homeBtn {
  border-radius: 4px;
  cursor: pointer;
  pointer-events: all;
  transition: .3s;
  font-weight: 600;
}

.pointer {
  pointer-events: none;
}

.colorBox {
  z-index: 2;
  filter: brightness(1.1);
  transition: 2s ease;
  position: relative;
  margin: 1px;
  background: #E2E8F0;
}

.colorBox:hover {
  /* background: #EC4899; */
  background: #FBDAEB;
  transition-duration: 0s;
}

.bgAnimation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  filter: saturate(1);
  overflow: hidden;
}


.backgroundAmim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #EC4899;
  filter: blur(60px);
  animation: animBack 6s linear infinite;
}

@keyframes animBack {
  0% {
    top: -60px;
  }

  100% {
    top: 120%;
  }
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
const { t } = useI18n({
  useScope: 'local'
})
const numberOfColorBoxes = 400;

</script> 

<i18n lang="json">
{
  "en-US": {
    "hello": "hello world!"
  },
  "pt-BR": {
    "hello": "こんにちは、世界!"
  }
}
</i18n>
