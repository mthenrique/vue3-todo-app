<template>
  <!-- <nav>
    <RouterLink to="/">Home </RouterLink>|
    <RouterLink to="/user">User</RouterLink>
  </nav> -->
  <router-view />
  <!-- <BaseAlert 
    message='Teste componente Alert!'
    @closeAlert='onClose()'
  />
  <BaseAlert
    variant='success' 
    message='Teste componente Alert-Success !'
    @closeAlert="onClose"
  /> -->
</template>

<script lang="ts" setup>
// import BaseAlert from './components/BaseAlert.vue'

// const onClose = () => {
//   console.log('fechou o alerta')
// }
</script>

<style lang="scss">
@use '@/styles/functions/color' as *;

body {
  background-color: color(dark);
  color: color(light);

  @media (prefers-color-scheme: dark) {
    background-color: color(dark);
    color: color(light);
  }
}
</style>
