<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="I need to..."
      v-model="newTask"
    />
    <button>Add</button>
  </form>
</template>

<script>
  import { useTasksStore } from '@/stores/tasks'
  import { ref } from 'vue'

  export default {
    setup() {
      const taskStore = useTasksStore()

      const newTask = ref('')
      
      const handleSubmit = () => {
        if (newTask.value.length > 0) {
          taskStore.addTask({
            id: Math.floor(Math.random() * 10000),
            title: newTask.value,
            isFave: false
          })
          newTask.value = ''
        }
      }

      return { newTask, handleSubmit }
    }
  }
</script>