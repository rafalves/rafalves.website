<template>
  <div class="h-full antialiased mt-5">
    <div class="h-full mx-auto max-w-[58rem] font-sans ">

      Hover here 👇🏽
      <div class="quick-example">
        <div>
          trasitioning grid with: transition: grid-template-rows 500ms;
        </div>

      </div>

      Large content
      <div class="quick-example">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut temporibus autem, officiis tempore reprehenderit
          doloremque ipsum sit asperiores perferendis omnis atque quaerat cumque totam sint at quibusdam esse explicabo
          illum suscipit consectetur optio sunt, distinctio vel numquam! Iste sit voluptate distinctio voluptates nesciunt
          aliquid minus voluptatem, blanditiis voluptatum? Beatae, eaque blanditiis libero officia aliquid, voluptate
          consequuntur odio minima, labore itaque corrupti id error molestias quidem doloribus sint facere quisquam
          asperiores excepturi fugiat vero rem provident repellendus? Repellat alias, consectetur cumque veniam est
          quaerat expedita, accusantium sunt quibusdam similique, possimus ad ea velit consequuntur doloremque distinctio
          qui minima soluta eos praesentium?
        </div>
      </div>
      With paragraph
      <div class="quick-example ">
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
    </div>
  </div>
</template>

<style scoped>
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
  transition: grid-template-rows 500ms;
}
</style>