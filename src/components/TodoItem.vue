<template>
  <div class="form-input">
    <span
      :class="['icon icon--check', { 'icon--done': isCompleted }]"
      @click="markAsComplete"
    >
      <IconCheck />
    </span>
    <span class="icon icon--delete" @click="deleteTodo">
      <IconDelete />
    </span>
    <input type="text" v-model="title" @keyup.enter="updateTodo" />
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { useStore } from 'vuex'
import { Todo } from '@/types/Todo'

import IconDelete from '@/assets/icon-delete.svg?component'
import IconCheck from '@/assets/icon-check.svg?component'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    default: () => ({}),
  },
})

const store = useStore()
const title = ref(props.todo.title)
const isCompleted = ref(props.todo.completed)

const updateTodo = () => {
  if (!title.value) {
    return
  }

  store.dispatch('updateTodo', {
    id: props.todo.id,
    data: {
      title: title.value,
      completed: isCompleted.value,
    },
  })
  store.dispatch('updateTodo', {
    id: props.todo.id,
    data: {
      title: title.value,
      completed: isCompleted.value,
    },
  })
}

const markAsComplete = () => {
  isCompleted.value = !isCompleted.value
  updateTodo()
}

const deleteTodo = () => {
  const id = props.todo.id
  store.dispatch('deleteTodo', id)
}
</script>

<style scoped lang="scss">
@use '@/styles/functions/color' as *;

.form-input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    display: block;
    width: 100%;
    border: none;
    border-left: 3px solid color(cta, primary);
    outline: none;

    padding: 10px 35px;

    font-size: 14px;
    font-weight: bold;

    border-radius: 5px;
    cursor: default;

    &:focus {
      border: none;
      outline: none;
      cursor: text;
      border-left: 3px solid color(cta, primary);
    }
  }

  .icon {
    position: absolute;
    height: 100%;
    width: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &--check {
      top: 0;
      left: 0;
      margin-left: 5px;
      color: color(light-gray);
    }

    &--delete {
      top: 0;
      right: 0;
      margin-right: 5px;
      color: color(gray);
    }

    &--done {
      color: color(cta, primary);
    }
  }
}
</style>
