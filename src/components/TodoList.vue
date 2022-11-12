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

<!-- <script lang="ts">
  import { defineComponent, PropType, ref, watch, watchEffect } from 'vue';
  import TodoItem from '../components/TodoItem.vue';
  import { useStore } from 'vuex';
  import { Todo } from '../types/Todo';
  import Item from './Item.vue';
  
  export default defineComponent({
    name: 'TodoList',
    components: {
      TodoItem,
      Item
    },

    props: {
      onlyOpen: {
        type: Boolean as PropType<Boolean>,
        default: false
      }
    },

    setup (props) {
      const store = useStore();
      let todos = ref([] as Todo[])

      // const onlyOpen = watchEffect(() => {
      //   if(props.onlyOpen) {
      //     todos = store.getters.getOpenTodos;
      //   } else {
      //     todos = store.getters.getAllTodos;
      //   }
      // })

      todos = store.getters.getAllTodos

      return {
        todos
      }
    },

    // data() {
    //   return {
    //     todos: [] as Todo[]
    //   }
    // },

    // async created() {
    //   // this.todos = await this.$store.state.todos
    //   this.todos = this.$store.getters.getAllTodos
    // },

    watch: {
      onlyOpen() {
        if(this.onlyOpen) {
          this.todos = this.$store.getters.getOpenTodos;
        } else {
          this.todos = this.$store.getters.getAllTodos;
        }
      }
    },

    methods: {

    }
  })
</script> -->

<style scoped lang="scss">
.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>