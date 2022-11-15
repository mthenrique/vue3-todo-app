import axios from 'axios'
import { Todo } from '../../types/Todo'

interface TodoState {
  todos: Todo[]
}

interface UpdateTodo {
  id: number
  data: {
    title: string
    completed: boolean
  }
}

export default {
  state: {
    todos: [],
  } as TodoState,

  getters: {
    getAllTodos(state: { todos: Todo[] }) {
      return state.todos
    },

    getDoneTodos(state: { todos: Todo[] }) {
      return state.todos.filter((todo) => todo.completed)
    },

    getOpenTodos(state: { todos: Todo[] }) {
      return state.todos.filter((todo) => !todo.completed)
    },
  },

  mutations: {
    setTodos(state: { todos: Todo[] }, payload: Todo[]) {
      state.todos = payload
    },

    setTodo(state: { todos: Todo[] }, payload: Todo) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id)

      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.push(payload)
      }
    },

    deleteTodo(state: { todos: Todo[] }, id: number) {
      const index = state.todos.findIndex((todo) => todo.id === id)
      state.todos.splice(index, 1)
    },
  },

  actions: {
    async getTodos({ commit }: any) {
      const response = await axios.get('http://localhost:3000/todos')
      commit('setTodos', response.data)
    },

    async addTodo({ commit }: any, payload: Todo) {
      const response = await axios.post('http://localhost:3000/todos', payload)
      commit('setTodo', response.data)
    },

    async updateTodo({ commit }: any, { id, data }: UpdateTodo) {
      const response = await axios.put(
        `http://localhost:3000/todos/${id}`,
        data
      )
      commit('setTodo', response.data)
    },

    async deleteTodo({ commit }: any, id: number) {
      await axios.delete(`http://localhost:3000/todos/${id}`)
      commit('deleteTodo', id)
    },
  },
}
