<script setup>
import { useCartStore } from '@/stores/cart'
import { formatCurrecy } from '@/helpers'

const cart = useCartStore()

defineProps({
  product: {
    type: Object,
  },
})
</script>

<template>
  <article class="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm hover:border-emerald-300 hover:shadow-md">
    <div class="relative bg-stone-50">
      <img
        :src="product.image"
        :alt="'Imagen de ' + product.name"
        class="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span class="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-slate-700 shadow-sm">
        {{ product.availability }} disponibles
      </span>
    </div>

    <div class="space-y-4 border-t border-stone-200 p-4">
      <div class="space-y-1">
        <h3 class="line-clamp-2 min-h-14 text-lg font-black leading-tight text-slate-950">
          {{ product.name }}
        </h3>
        <p class="text-2xl font-black text-slate-950">{{ formatCurrecy(product.price) }}</p>
      </div>

      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        @click="cart.addItem(product)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Agregar
      </button>
    </div>
  </article>
</template>
