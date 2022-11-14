import axios from 'axios'
import { createStore } from 'vuex'
import { Todo } from '../types/Todo'

export default createStore({
  state: {
    todos: [] as Todo[],
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },

    getDoneTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },

    getOpenTodos(state) {
      return state.todos.filter(todo => !todo.completed)
    }
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload
    },

    setTodo(state, payload: Todo) {
      const index = state.todos.findIndex(todo => todo.id === payload.id);

      if(index >= 0) {
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.push(payload)
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    async getTodos({ commit }) {
      const response = await axios.get('http://localhost:3000/todos')
      commit('setTodos', response.data)
    },

    async addTodo({ commit }, payload: Todo) {
      const response = await axios.post('http://localhost:3000/todos', payload)
      commit('setTodo', response.data)
    },

    async updateTodo({ commit }, { id, data }) {
      const response = await axios.put(`http://localhost:3000/todos/${id}`, data)
      commit('setTodo', response.data)
    },

    async deleteTodo({ commit }, { id }) {
      await axios.delete(`http://localhost:3000/todos/${id}`)
      commit('deleteTodo', id)
    }
  },
  modules: {

  }
})