<script setup>
import Link from '@/components/Link.vue'
import Product from '@/components/Product.vue'
import { useProductStore } from '@/stores/products'

const products = useProductStore()
</script>

<template>
  <section>
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-black uppercase tracking-wide text-emerald-700">Inventario</p>
        <h1 class="text-4xl font-black tracking-tight text-slate-950">Productos</h1>
      </div>
      <Link to="new-product">Nuevo producto</Link>
    </div>

    <p
      v-if="products.noResults"
      class="rounded-lg border border-dashed border-stone-300 bg-white p-10 text-center font-bold text-slate-500"
    >
      No hay resultados
    </p>

    <ul v-else role="list" class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <Product
        v-for="product in products.productsCollection"
        :key="product.id"
        :product="product"
      />
    </ul>
  </section>
</template>
