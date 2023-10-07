<template>
  <div class="h-full antialiased mt-5">
    <div class="h-full mx-auto max-w-[58rem] font-sans ">

      Hover here 👇🏽
      <div class="quick-example">
        <div>
          trasitioning grid with: transition: grid-template-rows 500ms;
        </div>

      </div>

      With paragraph 📄
      <div class="quick-example">
        <div class="gap-3 flex flex-col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores eligendi tempore adipisci reiciendis
            accusamus odit iure autem consequuntur, repudiandae distinctio rem, excepturi esse saepe nam. Harum expedita
            fuga cum!</p>
          <p>Maxime culpa beatae natus quibusdam facere, porro officia quas quia ullam magni nihil minima veritatis
            expedita fugit, dicta, perferendis magnam est modi quasi dignissimos. Blanditiis dicta temporibus quis dolorem
            debitis.</p>
          <p>Exercitationem illo quod magni harum facere minima pariatur, voluptas distinctio ratione est saepe optio
            deserunt quia aperiam? Ratione voluptates nesciunt odio dicta quae, voluptatum incidunt? Adipisci aliquid
            assumenda tenetur debitis!</p>
          <p>Velit fugiat eos tempora, voluptatibus qui reiciendis neque animi quisquam minus dolore quibusdam sint
            nesciunt, dolorum itaque nam placeat! Eveniet voluptatem nesciunt natus exercitationem recusandae, dolores
            deserunt dolor quo inventore.</p>
        </div>
      </div>

    Transform hover the 📦

    <div class="flex gap-2 mt-3 ease-in-out duration-300 text-center"> 
      <div class="box1 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        Rotate
      </div>
      <div class="box2 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        Scale
      </div>
      <div class="box3 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        TranslateX 👉🏽
      </div>
      <div class="box4 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        Translate Diagonal 
      </div>
      <div class="relative">
        <div class="box5 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center pt-5">
          Centering absolute element with translate
        </div>
      </div>
      <div class="box6 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        Translate Skew 
      </div>
      <div class="box7 ease-in-out duration-300 h-32 w-32 bg-indigo-500 flex justify-center items-center">
        Combining 
      </div>
       
    </div>


  </div>
  </div>
</template>

<style scoped>
.box7:hover {
  transform: rotate(30deg) scaleX(.75) translate(40px); 
}
.box6:hover {
  transform: Skew(30deg, -40deg); 
}
.box5::after {
  content: 'Absolute';
  background: red;
  position: absolute; 
  top: 0;
  left: 50%;
  transform: translate(-50%);  
} 
.box5:hover {
  position: relative;  
  display: flex;
}
.box4:hover {
  transform: translate(30px, -40px); 
}
.box3:hover {
  transform: translate(30px); 
}
.box3:hover {
  transform: translate(30px); 
}
.box2:hover {
  transform: scale(.5, .5); 
}
.box1:hover {
  transform: rotate(24deg); 
}

.quick-example {
  margin: 1rem;
  padding: 1rem;
  background: hsl(200 50% 50% / .4);
  border-radius: .5rem;
  /*  */
  display: grid;
  grid-template-rows: 0fr;
}

.quick-example>div {
  overflow: hidden; 
}

.quick-example:hover {
  grid-template-rows: 1fr;
  transition: grid-template-rows 500ms ease-in-out;
}
.quick-example:not(:hover) {
  transition: grid-template-rows 500ms ease-in-out;  
}
</style>