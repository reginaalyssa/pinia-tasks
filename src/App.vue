<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <nav class="filter">
      <button @click="filter = 'All'">All Tasks</button>
      <button @click="filter = 'Faves'">Fave Tasks</button>
    </nav>
    <div class="task-list" v-if="filter === 'All'">
      <p>All Tasks</p>
      <div v-for="task in tasksStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'Faves'">
      <p>Fave Tasks</p>
      <div v-for="task in tasksStore.faves">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
  import TaskDetails from '@/components/TaskDetails.vue'
  import { useTasksStore } from '@/stores/tasks'
  import { ref } from 'vue'

  export default {
    setup() {
      const tasksStore = useTasksStore()

      const filter = ref("All")

      return { tasksStore, filter }
    },
    components: {
      TaskDetails
    }
  }
</script>