<template>
  <div class="notfound">
    <h2>Estos no son los Droides que Estas Buscando¡</h2>
    <h1>La página que busca no existe</h1>

    <div class="volverinicio">
      <router-link to="/">Haga click aquí para volver al inicio</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.notfound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;

  h2 {
    font-size: 50px;
  }
  h1 {
    font-size: 50px;
  }
}

.volverinicio {
  padding: 80px;
}
</style>
