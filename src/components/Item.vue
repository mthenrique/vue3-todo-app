<template>
  <div class="form-input">
    <span :class="['icon icon-check', {'done': isCompleted}]" @click="markAsComplete">
      <svg 
        fill="none" 
        stroke="currentColor"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 13l4 4L19 7"
        >
        </path>
      </svg>
    </span>
    <span class=" icon icon-delete" @click="deleteTodo">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7L18.1327 19.1425C18.0579 
          20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
          19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
          3 9 3.44772 9 4V7M4 7H20"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <input type="text" v-model="title" @keyup.enter="updateTodo">
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { useStore } from 'vuex'
import { Todo } from "../types/Todo"

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    default: () => ({})
  }
})

const store = useStore();
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
      completed: isCompleted.value
    }
  })
}

const markAsComplete = () => {
  isCompleted.value = !isCompleted.value;
  updateTodo()
}

const deleteTodo = () => {
  store.dispatch('deleteTodo', {
    id: props.todo.id
  })
}
</script>

<style scoped lang="scss">
  .form-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  input {
    display: block;
    width: 100%;
    border: none;
    border-left: 3px solid green;
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
      border-left: 3px solid green;
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
  }

  .icon-check {
    top: 0;
    left: 0;
    margin-left: 5px;
    color: rgb(83, 83, 83, 0.253);
  }

  .icon-delete {
    top: 0;
    right: 0;
    margin-right: 5px;
    color: rgba(83, 83, 83);
  }

.done {
  color: green;
}
</style>