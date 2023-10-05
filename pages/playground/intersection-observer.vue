<template>
  <div class="">
    <section class="h-screen bg-green-200">
      <div ref="section" class="scrollObserver flex flex-col text-justify gap-5 items-center md:mx-48">
        <h1 class="text-2xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <h2 class="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque.
        </h2>
        <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          libero
          officia sed itaque
          expedita quae
          perferendis? Perferendis laudantium illo placeat. Quasi molestiae totam perferendis nulla veniam alias sint
          eos
          cupiditate quod minus at expedita modi cum inventore, ab praesentium animi sequi voluptates voluptatum
          recusandae
          ad. Maxime, necessitatibus veritatis facilis, esse quibusdam a suscipit eum provident eaque voluptas
          doloremque,
          eos sapiente. Beatae iste rerum architecto in, laborum ipsum culpa eaque neque fugit alias quae exercitationem
          reprehenderit obcaecati amet. Recusandae, sequi? Odio explicabo temporibus dignissimos atque dolorem culpa
          deleniti, dolore maiores, aperiam, quibusdam deserunt officia! Modi quas aperiam libero dolore perspiciatis
          officia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi iste quos dolore non, maxime odit
          vel,
          laboriosam quas minima quis nemo facere aliquam, itaque neque debitis enim necessitatibus porro vitae.
          Adipisci
          officia corporis aut, veniam accusantium, facilis maxime quae laboriosam, ad odio doloremque. Eius officiis
          impedit dolorum provident quia delectus unde quas! Quibusdam, quod a temporibus expedita cum quis nihil ab
          consectetur. Ullam suscipit voluptatum aliquam asperiores? Ducimus corrupti officia, non praesentium rem
          voluptatem facilis quo a nostrum fugiat. Illum accusamus inventore at perferendis illo optio maxime itaque quo
          officiis officia? Maxime debitis illum temporibus aliquid commodi impedit quibusdam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam corporis quia praesentium provident, placeat,
          distinctio nobis quas non maiores fugit error omnis fugiat sed impedit incidunt. Natus laboriosam, iste
          architecto, adipisci impedit, neque dicta quo reiciendis accusamus nemo nobis. Reprehenderit harum repellat
          beatae
          maiores ullam asperiores reiciendis architecto facere doloremque numquam molestias sunt magnam excepturi ipsam
          iste odit ratione fugit, dignissimos pariatur, tenetur laborum consectetur. Neque exercitationem dicta ad
          accusamus odit cumque sapiente eum doloremque magni corrupti beatae, quos reiciendis, in placeat esse nemo
          sunt
          possimus molestias nam? Ipsum pariatur rem quos esse sequi ab, odit consequatur reprehenderit ipsam temporibus
          culpa ipsa, placeat nisi. Officiis quo praesentium excepturi, optio consequuntur est placeat sed deleniti
          velit
          a,
          distinctio perferendis voluptas cupiditate fugit temporibus, atque facere. Unde assumenda iusto laborum quas
          debitis explicabo, quia, cupiditate tenetur doloribus, repudiandae voluptatum. Quasi esse incidunt provident
          maiores saepe praesentium. Velit cum quis veniam non in quaerat nobis, repellat laborum ex sed, distinctio
          repellendus nulla accusamus itaque nisi illum quas porro dolorum vero et vel sunt officiis autem similique.
          Accusamus possimus tempore accusantium nemo, natus corporis. Culpa recusandae est voluptatibus eaque
          laudantium
          nulla, necessitatibus esse ducimus molestias iure. Atque porro cupiditate eos repellendus saepe. Inventore,
          saepe!
        </p>
      </div>
    </section>

    <div ref="target">
    </div>

    <section class="min-h-full bg-blue-200 py-10">
      <div ref="section2" class="scrollObserver flex flex-col text-justify gap-5 items-center md:mx-48">
        <h1 class="text-2xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <h2 class="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque.
        </h2>
        <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          libero
          officia sed itaque
          expedita quae
          perferendis? Perferendis laudantium illo placeat. Quasi molestiae totam perferendis nulla veniam alias sint
          eos
          cupiditate quod minus at expedita modi cum inventore, ab praesentium animi sequi voluptate ero et vel sunt
          officiis autem similique.
          Accusamus possimus tempore accusantium nemo, natus corporis. Culpa recusandae est voluptatibus eaque
          laudantium
          nulla, necessitatibus esse ducimus molestias iure. Atque porro cupiditate eos repellendus saepe. Inventore,
          saepe!
        </p>
      </div>
    </section>

    <section class="bg-orange-400 py-10">
      <h1 class="text-center text-2xl font-bold font-poppins mb-10">Ragnarok Images</h1>
      <div class="flex gap-5 mx-10">
        <div class="logo ">
          <img src="https://i.pinimg.com/564x/0c/30/a2/0c30a25179638b415e245bdfa91790aa.jpg" />
        </div>
        <div ref="rag2" class="logo scrollObserver2">
          <img src="https://i.pinimg.com/564x/99/82/89/99828956c079572e44cb4e0dd82bc8f9.jpg" />
        </div>
        <div ref="rag3" class="logo scrollObserver2">
          <img src="https://i.pinimg.com/564x/23/04/51/230451527ea4231b49149aaf22383197.jpg" />
        </div>
        <div ref="rag4" class="logo scrollObserver2">
          <img src="https://i.pinimg.com/564x/be/03/19/be0319b8d6819d688ea3b475b88692b3.jpg" />
        </div>
        <div ref="rag5" class="logo scrollObserver2">
          <img src="https://i.pinimg.com/564x/be/ad/0e/bead0e8ebe925f3d4d3bc9e35b068e8d.jpg" />
        </div>
      </div>
    </section>


    <div class="h-[1600px]" />
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const section = ref<HTMLElement | null>(null)
const section2 = ref<HTMLElement | null>(null)
const rag2 = ref<HTMLElement | null>(null)
const rag3 = ref<HTMLElement | null>(null)
const rag4 = ref<HTMLElement | null>(null)
const rag5 = ref<HTMLElement | null>(null)
const sections = [section, section2]

useIntersectionObserver(sections,
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("tagName: " + entry.target.tagName + " " + entry.isIntersecting)
        entry.target.classList.add('show')
      } else {
        console.log("tagName: " + entry.target.tagName + " " + entry.isIntersecting)
        entry.target.classList.remove('show')
      }
    })
  })

useIntersectionObserver(
  [rag2, rag3, rag4, rag5],
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("ragnarokImages: " + entry.target.tagName + " " + entry.isIntersecting)
        entry.target.classList.add('show')
      } else {
        console.log("ragnarokImages: " + entry.target.tagName + " " + entry.isIntersecting)
        entry.target.classList.remove('show')
      }
    })
  })

const target = ref(null)
const targetIsVisible = ref(false)

useIntersectionObserver(target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  },
)

watchEffect(() => {
  console.log('invisible div: ' + targetIsVisible.value)
})

</script>


<style scoped>
.logo:nth-child(2) {
  transition-delay: 200ms;
}

.logo:nth-child(3) {
  transition-delay: 400ms;
}

.logo:nth-child(4) {
  transition-delay: 600ms;
}

.logo:nth-child(5) {
  transition-delay: 800ms;
}

.scrollObserver {
  opacity: 0;
  transition: all 2s;
  filter: blur(5px);
  transform: translateX(-100%);
}

.scrollObserver2 {
  opacity: 0;
  transition: all 2s;
  filter: blur(5px);
  transform: translateX(-200%);
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
  transition: all 2s;
}
</style> 