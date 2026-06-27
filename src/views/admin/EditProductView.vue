<script setup>
import { watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { doc } from 'firebase/firestore'
import { useFirestore, useDocument } from 'vuefire'
import Link from '@/components/Link.vue'
import { useProductStore } from '@/stores/products'
import useImage from '@/composables/useImage'

// Consultar Firestore
const router = useRouter()
const route = useRoute()
const db = useFirestore()
const docRef = doc(db, 'products', route.params.id)
const product = useDocument(docRef)

const { onFileChange, url, isImageUploaded } = useImage()
const products = useProductStore()

const formData = reactive({
  name: '',
  category: '',
  price: '',
  availability: '',
  image: '',
})

watch(product, (product) => {
  if (!product) {
    router.push({ name: 'products' })
  }
  Object.assign(formData, product)
})
const submitHandler = async (data) => {
  try {
    await products.updateProduct(docRef, { ...data, url })
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
        <h1 class="text-4xl font-black tracking-tight text-slate-950">Editar producto</h1>
      </div>
      <Link to="products">Volver</Link>
    </div>

    <div class="rounded-lg border border-stone-200 bg-white shadow-sm">
      <div class="mx-auto max-w-3xl p-5 sm:p-8">
        <FormKit
          type="form"
          :value="formData"
          submit-label="Guardar Cambios"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          :actions="false"
          @submit="submitHandler"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre de producto"
            validation="required"
            v-model.trim="formData.name"
            :validation-messages="{ required: 'El nombre del producto es obligatorio' }"
          />

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            validation="required"
            v-model.number="formData.category"
            :validation-messages="{ required: 'La categoria es obligatoria' }"
            :options="products.categoryOptions"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio de producto"
            step="1"
            min="1"
            v-model.number="formData.price"
          />

          <FormKit
            type="number"
            label="Disponibles"
            name="availability"
            placeholder="Productos disponibles"
            v-model.number="formData.availability"
            step="1"
            min="0"
          />

          <div class="mb-5 rounded-lg border border-stone-200 bg-stone-50 p-4">
            <template v-if="isImageUploaded">
              <p class="mb-2 text-sm font-black uppercase tracking-wide text-slate-600">Imagen nueva</p>
              <img :src="url" alt="Nueva imagen Producto" class="h-40 w-40 rounded-lg object-cover" />
            </template>

            <template v-else>
              <p class="mb-2 text-sm font-black uppercase tracking-wide text-slate-600">Imagen actual</p>
              <img :src="formData.image" :alt="'Imagen de ' + formData.image" class="h-40 w-40 rounded-lg object-cover" />
            </template>
          </div>

          <FormKit
            type="file"
            label="Cambiar imagen"
            name="image"
            multiple="false"
            accept=".jpg"
            @change="onFileChange"
          />

          <FormKit type="submit">Guardar cambios</FormKit>
        </FormKit>
      </div>
    </div>
  </section>
</template>
