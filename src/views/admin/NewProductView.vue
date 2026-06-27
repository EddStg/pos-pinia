<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Link from '@/components/Link.vue'
import useImage from '@/composables/useImage'
import { useProductStore } from '@/stores/products'

const products = useProductStore()
const { url, onFileChange, isImageUploaded } = useImage()
const router = useRouter()

const formData = reactive({
  name: '',
  category: '',
  price: '',
  availability: '',
  image: '',
})

const submitHandler = async (data) => {
  const { image, ...values } = data

  try {
    await products.createProduct({
      ...values,
      image: url.value,
    })
    router.push({ name: 'products' })
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section>
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-black uppercase tracking-wide text-emerald-700">Inventario</p>
        <h1 class="text-4xl font-black tracking-tight text-slate-950">Nuevo producto</h1>
      </div>
      <Link to="products">Volver</Link>
    </div>

    <div class="rounded-lg border border-stone-200 bg-white shadow-sm">
      <div class="mx-auto max-w-3xl p-5 sm:p-8">
        <FormKit
          type="form"
          submit-label="Agregar Producto"
          @submit="submitHandler"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del producto"
            validation="required"
            :validation-messages="{ required: 'El nombre del producto es obligatorio' }"
            v-model.trim="formData.name"
          />

          <FormKit
            type="file"
            label="Imagen producto"
            name="image"
            validation="required"
            :validation-messages="{ required: 'La imagen del producto es obligatoria' }"
            accept=".jpg"
            @change="onFileChange"
            v-model.trim="formData.image"
          />

          <div v-if="isImageUploaded" class="mb-5 rounded-lg border border-stone-200 bg-stone-50 p-4">
            <p class="mb-2 text-sm font-black uppercase tracking-wide text-slate-600">Vista previa</p>
            <img :src="isImageUploaded" alt="Nueva imagen producto" class="h-32 w-32 rounded-lg object-cover" />
          </div>

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            validation="required"
            :validation-messages="{ required: 'La categoria es obligatoria' }"
            :options="products.categoryOptions"
            v-model.trim="formData.category"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
            validation="required"
            :validation-messages="{ required: 'El precio del producto es obligatorio' }"
            min="1"
            v-model.number="formData.price"
          />

          <FormKit
            type="number"
            label="Disponibles"
            name="availability"
            placeholder="Cantidad disponible"
            validation="required"
            :validation-messages="{ required: 'La cantidad es obligatoria' }"
            min="1"
            v-model.number="formData.availability"
          />
        </FormKit>
      </div>
    </div>
  </section>
</template>
