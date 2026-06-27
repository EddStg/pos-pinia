<script setup>
import { formatCurrecy } from '@/helpers'
import Amount from './Amount.vue'
defineProps({
  sale: {
    type: Object,
  },
})
</script>

<template>
  <article class="rounded-lg border border-stone-200 bg-stone-50 p-5">
    <div class="mb-4 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-black text-slate-950">Detalles de venta</h2>
        <p class="text-sm font-bold text-slate-500">Productos vendidos</p>
      </div>
    </div>

    <ul role="list" class="divide-y divide-stone-200 text-sm font-medium text-slate-500">
      <li v-for="item in sale.items" class="flex gap-4 py-4">
        <img
          :src="item.image"
          :alt="'Imagen de ' + item.name"
          class="h-20 w-20 flex-none rounded-lg object-cover"
        />
        <div class="flex-auto space-y-1">
          <h3 class="font-black text-slate-950">{{ item.name }}</h3>
          <p>{{ formatCurrecy(item.price) }}</p>
          <p>Cantidad: {{ item.quantity }}</p>
        </div>
      </li>
    </ul>

    <dl class="mt-4 space-y-1 border-t border-stone-200 pt-4 text-sm font-medium text-slate-500">
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrecy(sale.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrecy(sale.taxes) }}
      </Amount>

      <Amount v-if="sale.discount" class="bg-amber-100">
        <template #label>Descuento:</template>
        {{ formatCurrecy(sale.discount) }}
      </Amount>

      <div class="rounded-lg bg-white">
        <Amount>
          <template #label>Total pagado:</template>
          {{ formatCurrecy(sale.total) }}
        </Amount>
      </div>
    </dl>
  </article>
</template>
