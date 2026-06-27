<script setup>
import { useCouponStore } from '@/stores/coupons'

const store = useCouponStore()
</script>

<template>
  <p class="mt-5 border-t border-stone-200 pt-5 text-sm font-black uppercase tracking-wide text-slate-700">
    Tienes un cupon?
  </p>

  <div class="mt-3 flex overflow-hidden rounded-lg border border-stone-300 bg-white">
    <input
      type="text"
      placeholder="Ingresa un cupon"
      class="w-full px-3 py-2 text-sm font-semibold text-slate-700 placeholder:text-slate-400 focus:outline-none"
      v-model="store.couponInput"
    />

    <button
      type="button"
      class="bg-slate-950 px-4 py-2 text-sm font-black uppercase text-white hover:bg-emerald-600 disabled:opacity-50"
      @click="store.applyCoupon"
      :disabled="store.isValidCoupon"
    >
      Canjear
    </button>
  </div>

  <p class="py-2 text-center text-sm font-extrabold text-emerald-700">{{ store.couponValidationMessage }}</p>
</template>
