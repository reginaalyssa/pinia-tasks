<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <div class="task-list">
      <div v-for="task in tasksStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
  import TaskDetails from '@/components/TaskDetails.vue'
  import { useTasksStore } from '@/stores/tasks'

  export default {
    setup() {
      const tasksStore = useTasksStore()

      return { tasksStore }
    },
    components: {
      TaskDetails
    }
  }
</script>