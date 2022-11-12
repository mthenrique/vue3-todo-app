<template>
  <nav>
    <RouterLink to="/">Home </RouterLink>|
    <RouterLink to="/user">User</RouterLink>
  </nav>
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

<script lang="ts">
import { defineComponent } from "vue";
import BaseAlert from "./components/BaseAlert.vue";

export default defineComponent({
  components: {
    BaseAlert
  },

  methods: {
    onClose() {
      console.log('fechou o alerta')
    }
  },
})
</script>
  
<style scoped>

</style>
