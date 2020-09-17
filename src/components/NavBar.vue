<template>
  <div >
      <div id="nav">
                  <div>
              <b-nav >
                <b-nav-item active
                  ><router-link to="/">Portada</router-link></b-nav-item
                >
                <b-nav-item>
                  <router-link to="/about">Sobre Mi</router-link></b-nav-item
                >
                <b-nav-item
                  ><router-link to="/contacto">Contacto</router-link></b-nav-item
                >
                <b-nav-item
                  ><router-link to="/Post/1">Post</router-link></b-nav-item
                >
              </b-nav>
            </div>
 <router-view />
  </div>
  </div>
</template>

<script>
export default {
    name:"NavBar",

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav{

    justify-content: space-evenly;
    align-items: center;
    background-color: seashell;
    font-size: x-large;
    font-family: 'Noto Serif', serif;
    color: black;


}
</style>
