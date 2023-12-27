import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    faves() {
      return this.tasks.filter(t => t.isFave)
    },
    faveCounts() {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFave ? prev + 1 : prev
      }, 0)
    },
    totalCounts: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true

      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    async addTask(task) {
      this.tasks.push(task)

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id != id)

      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async toggleFave(id) {
      const task = this.tasks.find(t => t.id === id)
      task.isFave = !task.isFave

      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isFave: task.isFave }),
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.error) {
        console.log(res.error)
      }
    }
  }
})