<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
            .navbar-item
              strong 📻 Platzi Music
          .navbar-end
            .navbar-menu
              router-link.navbar-item(to="search") Buscar
              router-link.navbar-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle
          span.has-text-black  Vue
          span nas Canciones
</template>
