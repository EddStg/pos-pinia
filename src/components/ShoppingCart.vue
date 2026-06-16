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
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">El Carrito esta vacio</p>

  <div v-else>
    <p class="text-4xl font-bold text-gray-900">Resumen de Ventas</p>

    <ul role="list" class="mt-6 divide-y divide-gray-200">
      <ShoppingCartItem v-for="item in cart.items" :key="item.id" :item="item" />
    </ul>

    <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrecy(cart.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrecy(cart.taxes) }}
      </Amount>
      <Amount v-if="coupon.isValidCoupon">
        <template #label>Descuento:</template>
        {{ formatCurrecy(coupon.discount) }}
      </Amount>
      <Amount>
        <template #label>Total a pagar:</template>
        {{ formatCurrecy(cart.total) }}
      </Amount>
    </dl>

    <CouponForm />
  </div>
</template>
