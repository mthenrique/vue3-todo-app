<template>
  <form @submit.stop.prevent="onSubmit">
    <div class="form-input">
      <input
        id="newTodo"
        v-model="title"
        type="text"
        name="newTodo"
        placeholder="Adicione um novo item..."
      />
      <span @click="onSubmit">ADICIONAR</span>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const title = ref('')

const onSubmit = () => {
  if (!title.value) {
    return false
  }

  store.dispatch('addTodo', {
    title: title.value,
    completed: false,
  })

  title.value = ''
}
</script>

<style scoped lang="scss">
form {
  width: 100%;
}
.form-input {
  display: flex;
  align-items: center;

  background: rgb(80, 80, 80);
  width: 100%;

  border-radius: 5px;

  span {
    padding: 0 10px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
  }

  input {
    display: block;
    width: 100%;
    border: none;
    outline: none;

    padding: 10px 10px;

    font-size: 14px;
    font-weight: bold;
    color: white;

    border-radius: 5px;
    cursor: default;
    background: rgb(80, 80, 80);

    &:focus {
      border: none;
      outline: none;
      cursor: text;
    }
  }
}
</style>
