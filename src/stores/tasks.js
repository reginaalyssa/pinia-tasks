import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, title: "Buy milk", isFave: false },
      { id: 2, title: "Play Monopoly Deal", isFave: true }
    ]
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
  }
})