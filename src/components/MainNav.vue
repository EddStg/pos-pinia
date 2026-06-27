<script setup>
import { useProductStore } from '@/stores/products.js'
import Link from './Link.vue'
import Logo from './Logo.vue'

const products = useProductStore()
</script>

<template>
  <header class="fixed top-0 z-10 w-full border-b border-slate-700 bg-slate-950 px-5 py-4 shadow-lg sm:px-8 lg:px-10">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        <Logo />

        <div class="flex flex-wrap items-center gap-2 text-white">
          <h2 class="mr-1 text-xs font-black uppercase tracking-wide text-slate-400">Filtros</h2>

          <label
            v-for="category in products.categories"
            :key="category.id"
            class="inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-sm font-bold"
            :class="
              products.selectedCategory === category.id
                ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500'
            "
          >
            <input
              type="radio"
              name="category"
              :value="category.id"
              class="sr-only"
              :checked="products.selectedCategory === category.id"
              @change="products.selectedCategory = +$event.target.value"
            />
            {{ category.name }}
          </label>
        </div>
      </div>

      <nav class="flex justify-start lg:justify-end">
        <Link to="sales">Administrar</Link>
      </nav>
    </div>
  </header>
</template>
