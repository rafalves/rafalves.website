<template>
  <div class="max-w-[1140px] mx-auto">

    <footer class="footer footer-center p-10 text-base-content rounded">
      <nav class="grid grid-flow-col gap-4">
        <a class="link link-hover">Quem sou</a>
        <a class="link link-hover">Portfólio</a>
        <a class="link link-hover">Contato</a>
      </nav>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <NuxtLink to="" target="_blank">
            <Icon name="devicon:linkedin" size="25" />
          </NuxtLink>
          <NuxtLink to="" target="_blank">
            <Icon name="bi:github" size="25" />
          </NuxtLink>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 | rafalves.website - Todos os direitos reservados</p>
      </aside>
    </footer>
  </div>
</template>