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
    class="inline-flex min-h-11 items-center justify-center rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-black uppercase tracking-wide text-slate-950 shadow-sm hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
  >
    <slot></slot>
  </RouterLink>
</template>
