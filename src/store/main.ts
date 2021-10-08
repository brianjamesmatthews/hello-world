import { ref } from '@vue/composition-api'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const counter = ref(0)

  return {
    counter
  }
})
