<script setup>
import Link from './Link.vue'
import Logo from './Logo.vue'
</script>

<template>
  <header class="fixed top-0 z-10 w-full border-b border-slate-700 bg-slate-950 px-5 py-4 shadow-lg sm:px-8 lg:px-10">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-4">
        <Logo />
        <span class="hidden rounded-full border border-slate-700 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-400 sm:inline-flex">
          Administracion
        </span>
      </div>
      <nav class="flex flex-wrap items-center gap-2">
        <RouterLink
          :to="{ name: 'products' }"
          class="rounded-lg px-4 py-2 text-sm font-black uppercase tracking-wide text-slate-200 hover:bg-slate-800"
          active-class="bg-emerald-400 text-slate-950 hover:bg-emerald-400"
        >
          Productos
        </RouterLink>
        <RouterLink
          :to="{ name: 'sales' }"
          class="rounded-lg px-4 py-2 text-sm font-black uppercase tracking-wide text-slate-200 hover:bg-slate-800"
          active-class="bg-emerald-400 text-slate-950 hover:bg-emerald-400"
        >
          Ventas
        </RouterLink>
        <Link to="shop">Ir a tienda</Link>
      </nav>
    </div>
  </header>
</template>
