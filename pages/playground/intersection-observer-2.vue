<template>
  <div class="flex flex-col text-justify gap-5 items-center md:mx-48 p-5 overflow-y-scroll scr bg-slate-400">

    <div class="flex flex-col text-justify gap-5 items-center md:mx-48 h-[60dvh] md:h-[60vh] bg-slate-400">
      <div class="card-container">
        <div v-for="(item, index) in 40" :key="index" class="card" :ref="el => titlesRefs.push(el as HTMLElement)">
          {{ index === 0 ? 'This is the first card' : index === 39 ? 'This is the last card' : 'This is a card' }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listRefs = ref([]);
const titlesRefs: Ref<HTMLElement[]> = ref([]);



onMounted(() => {
  console.log(listRefs.value);
  console.log(titlesRefs.value);


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      // if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
    {
      threshold: 1,
      // rootMargin: '-300px',
    }
  )

  titlesRefs.value.forEach(el => el && observer.observe(el))

})
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.card {
  background: white;
  border: 1px solid black;
  border-radius: .25rem;
  padding: .5rem;
  transform: translateX(100px);
  opacity: 0;
  transition: 150ms;
}

.card.show {
  transform: translateX(0);
  opacity: 1;
}
</style>