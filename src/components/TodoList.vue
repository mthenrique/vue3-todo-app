<template>
  <div class="todo-list">
    <!-- <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/> -->
    <Item v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref, watchEffect } from 'vue';
  import { useStore } from 'vuex';
  import { Todo } from '../types/Todo';
  import Item from './Item.vue';
  
  const props = defineProps({
    onlyOpen: {
      type: Boolean as PropType<Boolean>,
      default: false
    }
  })

  const store = useStore();

  let todos = ref([] as Todo[])

  watchEffect(() => {
    if(props.onlyOpen) {
      todos.value = store.getters.getOpenTodos;
    } else {
      todos.value = store.getters.getAllTodos;
    }
  })
</script>

<style scoped lang="scss">
.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>