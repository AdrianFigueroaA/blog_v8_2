<template>
  <div class="home">
    <div class="subtitulo">
      <h1>Blog V8</h1>
      <span class="subheading">Noticias y reseñas de automóviles</span>
    </div>
    <div class="titulo">
      <router-link to="/Post/1">
        <h2 class="post-title">
          <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
        </h2>
        <h3 class="post-subtitle">
          Llega&nbsp;como la primera SUV deportiva de la marca
        </h3>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
.titulo {
  padding: 40px;
}

.subtitulo {
  background-image: url(../assets/img/homebg.jpg);
  background-position: center;
  background-size: cover;
  height: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    color: white;
    font-size: 60px;
  }
  span {
    font-size: xx-large;
    color: white;
  }
}
</style>
