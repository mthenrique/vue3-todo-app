<template>
  <div class="container">
    
    <Loading v-if="loading"/>

    <template v-else>
      <TodoAddItem />

      <div class="options">
        <input type="checkbox" v-model="onlyOpen">
        <span>Exibir apenas tarefas em aberto.</span>
      </div>

      <TodoList v-if="$store.state.todos.length" :onlyOpen="onlyOpen" />
      
      <TodoEmpty v-else/>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Loading from '../components/Loading.vue';
import TodoEmpty from '../components/TodoEmpty.vue';
import TodoAddItem from '../components/TodoAddItem.vue';
import TodoList from '../components/TodoList.vue';

import { ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

const loading = ref(false);
const onlyOpen = ref(false);


loading.value = true;
store.dispatch('getTodos');
loading.value = false;

</script>

<style scoped lang="scss">
.container {
  width: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
}

.options {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
}

</style>