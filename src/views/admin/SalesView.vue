<script setup>
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import { useSalesStore } from '@/stores/sales'
import SaleDetatails from '@/components/SaleDetatails.vue'
import { formatCurrecy } from '@/helpers'

const sales = useSalesStore()

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMMM',
})
console.log(sales.salesCollection)
</script>

<template>
  <section>
    <div class="mb-8">
      <p class="text-xs font-black uppercase tracking-wide text-emerald-700">Resumen de ventas</p>
      <h1 class="text-4xl font-black tracking-tight text-slate-950">Ventas</h1>
    </div>

    <div class="grid gap-5 lg:grid-cols-[360px_1fr]">
      <aside class="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
        <p class="mb-4 text-sm font-black uppercase tracking-wide text-slate-600">Selecciona una fecha</p>
        <div class="flex justify-center rounded-lg bg-stone-50 p-4">
          <VueTailwindDatepicker
            v-model="sales.date"
            i18n="es-mx"
            as-single
            no-input
            :formatter="formatter"
          />
        </div>
      </aside>

      <div class="space-y-5 rounded-lg border border-stone-200 bg-white p-5 shadow-sm lg:max-h-[calc(100vh-9rem)] lg:overflow-y-scroll">
        <div class="flex flex-col gap-3 border-b border-stone-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-lg font-bold text-slate-600" v-if="sales.isDateSelected">
            Ventas de la fecha: <span class="font-black text-slate-950">{{ sales.date }}</span>
          </p>
          <p v-else class="text-lg font-bold text-slate-600">Selecciona una fecha</p>

          <p v-if="sales.salesCollection.length" class="rounded-lg bg-slate-950 px-4 py-3 text-right text-sm font-bold text-white">
            Total del dia:
            <span class="ml-2 text-xl font-black text-emerald-300">{{ formatCurrecy(sales.totalSalesOfDay) }}</span>
          </p>
        </div>

        <div v-if="sales.salesCollection.length" class="space-y-4">
          <SaleDetatails v-for="sale in sales.salesCollection" :key="sale.id" :sale="sale" />
        </div>

        <p v-else-if="sales.noSales" class="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-10 text-center text-lg font-bold text-slate-500">
          No hay ventas en este dia
        </p>
      </div>
    </div>
  </section>
</template>
