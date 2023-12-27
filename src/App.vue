<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <div class="new-task-form">
      <TaskForm />
    </div>
    <nav class="actions">
      <div class="reset">
        <button @click="tasksStore.$reset">Reset</button>
      </div>
      <div class="filters">
        <button @click="filter = 'All'">All Tasks</button>
        <button @click="filter = 'Faves'">Fave Tasks</button>
      </div>
    </nav>
    <div class="loading" v-if="tasksStore.loading">Loading tasks...</div>
    <div class="task-list" v-if="filter === 'All'">
      <p>You have {{ tasksStore.totalCounts }} tasks left to do</p>
      <div v-for="task in tasksStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'Faves'">
      <p>You have {{ tasksStore.faveCounts }} fave tasks left to do</p>
      <div v-for="task in tasksStore.faves" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
  import TaskForm from '@/components/TaskForm.vue'
  import TaskDetails from '@/components/TaskDetails.vue'
  import { useTasksStore } from '@/stores/tasks'
  import { ref } from 'vue'

  export default {
    setup() {
      const tasksStore = useTasksStore()

      tasksStore.getTasks()

      const filter = ref("All")

      return { tasksStore, filter }
    },
    components: {
      TaskDetails,
      TaskForm
    }
  }
</script>