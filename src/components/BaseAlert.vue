<template>
  <div :class="variantAlert">
    {{ message }}

    <button class="closeButton" @click="onClick()">X</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    variant: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },

  computed: {
    variantAlert() {
      return ['alert', this.variant ? `alert-${this.variant}` : '']
    },
  },

  methods: {
    onClick() {
      this.$emit('closeAlert')
    },
  },
})
</script>
<style scoped>
.alert {
  padding: 5px 10px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}

.alert-success {
  background: #42b983;
  color: #fff;
}

.closeButton {
  font-weight: bold;
  font-size: 12px;

  padding: 5px;
  border-radius: 6px;
  border: none;
}

.closeButton:focus {
  border: none;
}
</style>
