<script setup>
import ShoppingCartItem from './ShoppingCartItem.vue'
import CouponForm from './CouponForm.vue'
import Amount from './Amount.vue'
import { useCartStore } from '@/stores/cart'
import { useCouponStore } from '@/stores/coupons.js'
import { formatCurrecy } from '@/helpers/index.js'

const cart = useCartStore()
const coupon = useCouponStore()
</script>

<template>
  <section class="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
    <div class="mb-5 flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
      <div>
        <p class="text-xs font-black uppercase tracking-wide text-emerald-700">Ticket actual</p>
        <h2 class="text-2xl font-black tracking-tight text-slate-950">Resumen de venta</h2>
      </div>
      <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
        {{ cart.items.length }} items
      </span>
    </div>

    <p
      v-if="cart.isEmpty"
      class="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-sm font-bold text-slate-500"
    >
      El carrito esta vacio
    </p>

    <div v-else>
      <ul role="list" class="divide-y divide-stone-200">
        <ShoppingCartItem v-for="item in cart.items" :key="item.id" :item="item" />
      </ul>

      <dl class="mt-5 space-y-1 border-t border-stone-200 pt-5 text-sm font-medium text-slate-500">
        <Amount>
          <template #label>Subtotal:</template>
          {{ formatCurrecy(cart.subtotal) }}
        </Amount>
        <Amount>
          <template #label>Impuestos:</template>
          {{ formatCurrecy(cart.taxes) }}
        </Amount>
        <Amount v-if="coupon.isValidCoupon" class="bg-amber-50">
          <template #label>Descuento:</template>
          {{ formatCurrecy(coupon.discount) }}
        </Amount>
        <div class="mt-2 border-2 border-slate-950 rounded-lg p-3 text-white">
          <Amount>
            <template #label>Total a pagar:</template>
            {{ formatCurrecy(cart.total) }}
          </Amount>
        </div>
      </dl>

      <CouponForm />

      <button
        type="button"
        class="mt-6 w-full rounded-lg bg-amber-400 p-3 font-black uppercase tracking-wide text-slate-950 shadow-sm hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
        @click="cart.checkout"
      >
        Confirmar compra
      </button>
    </div>
  </section>
</template>
