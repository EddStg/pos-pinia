<template>
  <div class="flex items-center justify-between gap-4 rounded-lg px-3 py-2">
    <dt class="text-sm font-bold text-slate-600">
      <slot name="label"></slot>
    </dt>
    <dd class="text-right text-sm font-black text-slate-950">
      <slot></slot>
    </dd>
  </div>
</template>
