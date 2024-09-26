
<template>
  <div id="app">
    <h1>Lista de usuarios</h1>

    
    <datosDeEntrada />
    <tablaCompo />

  </div>
</template>

<script>


import datosDeEntrada from './components/datosDeEntrada.vue';
import tablaCompo from './components/tablaCompo.vue' ;

export default {
  components: {
    tablaCompo,
    datosDeEntrada,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


