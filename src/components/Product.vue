<script setup>
import { formatCurrecy } from '@/helpers';

defineProps({
  product: {
    type: Object
  }
})

</script>

<template>
    <li class="flex items-center space-x-6 border border-gray-200 bg-white shadow p-6">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-24 w-24"
      >
      <div class="space-y-2">
        <h3 class="text-gray-900">{{ product.name }}</h3>
        <p class="font-black"> {{ formatCurrecy(product.price) }}</p>
        <p>{{ product.available }} en existencia</p>

      </div>
    </li>
</template>
