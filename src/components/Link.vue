<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: String,
  },
})
</script>

<template>
  <RouterLink
    :to="{ name: to }"
    class="rounded bg-amber-500 flex max-w-55 justify-center hover:bg-amber-600 font-bold py-2 px-10"
  >
    <slot></slot>
  </RouterLink>
</template>
