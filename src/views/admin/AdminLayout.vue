<script setup>
import AdminNav from '@/components/AdminNav.vue'
</script>

<template>
  <div class="min-h-screen bg-stone-100">
    <AdminNav />
    <main class="mx-auto min-h-screen max-w-7xl px-5 pb-12 pt-48 sm:px-8 sm:pt-28 lg:px-10">
      <RouterView />
    </main>
  </div>
</template>
