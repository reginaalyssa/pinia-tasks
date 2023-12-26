<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>{{ tasksStore.name }}</h1>
    </header>
  </main>
</template>

<script>
  import { useTasksStore } from '@/stores/tasks'

  export default {
    setup() {
      const tasksStore = useTasksStore()

      return { tasksStore }
    }
  }
</script>