<template>
  <div id="app">
    Hi
    {{ test }}
    {{ counter }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useStore } from './store/main'

export default defineComponent({
  setup () {
    const test = ref(0)
    const main = useStore()
    const counter = main.counter

    return { test, counter }
  }
})
</script>

<style>
</style>
