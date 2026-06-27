<script setup>
import { storeToRefs } from 'pinia'
import MainNav from '@/components/MainNav.vue'
import ProductCard from '@/components/ProductCard.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { useProductStore } from '@/stores/products'

const products = useProductStore()
const { filterProducts, noResults } = storeToRefs(products)
</script>

<template>
  <MainNav />

  <main class="min-h-screen bg-stone-100 pt-58 lg:flex lg:h-screen lg:overflow-hidden lg:pt-26">
    <section class="lg:h-screen lg:w-2/3 lg:overflow-y-scroll">
      <div class="px-5 py-6 sm:px-8 lg:px-10 lg:pb-12">
        <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-black uppercase tracking-wide text-emerald-700">Punto de venta</p>
            <h2 class="text-3xl font-black tracking-tight text-slate-950">Catalogo</h2>
          </div>
          <p class="text-sm font-semibold text-slate-500">Selecciona productos para agregarlos al ticket</p>
        </div>

        <p
          v-if="noResults"
          class="rounded-lg border border-dashed border-stone-300 bg-white p-10 text-center text-xl font-black text-slate-500"
        >
          No hay productos
        </p>

        <div v-else class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          <ProductCard v-for="product in filterProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <aside class="border-t border-stone-200 bg-stone-50 lg:h-screen lg:w-1/3 lg:overflow-y-scroll lg:border-l lg:border-t-0">
      <div class="sticky top-0 px-5 py-6 sm:px-8 lg:px-8 lg:py-8">
        <ShoppingCart />
      </div>
    </aside>
  </main>
</template>
