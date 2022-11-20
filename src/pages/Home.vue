<template>
  <div class="container">
    <h1 class="title">ToDo APP</h1>

    <BasicLoading v-if="loading" />

    <template v-else>
      <TodoAddItem />

      <div class="options">
        <input class="only-open" v-model="onlyOpen" type="checkbox" />
        <span>Exibir apenas tarefas em aberto.</span>
      </div>

      <!-- <TodoList v-if="$store.state.todos.length" :only-open="onlyOpen" /> -->
      <TodoList v-if="hasTodos" :only-open="onlyOpen" />
      <!-- <TodoList :only-open="onlyOpen" /> -->

      <TodoEmpty v-else />
    </template>
  </div>
</template>

<script lang="ts" setup>
import BasicLoading from '@/components/BasicLoading.vue'
import TodoEmpty from '@/components/TodoEmpty.vue'
import TodoAddItem from '@/components/TodoAddItem.vue'
import TodoList from '@/components/TodoList.vue'

import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const loading = ref(false)
const onlyOpen = ref(false)

loading.value = true
store.dispatch('getTodos')
const hasTodos = ref(store.getters.getAllTodos)
loading.value = false
</script>

<style scoped lang="scss">
.container {
  width: 400px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
  }
}

.options {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
}
</style>
