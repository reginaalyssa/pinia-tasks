import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  store: () => ({
    tasks: [
      { id: 1, title: "Buy milk", isFave: false },
      { id: 2, title: "Play Monopoly Deal", isFave: true }
    ]
  })
})