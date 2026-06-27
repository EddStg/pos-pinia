# POS Store

POS Store es una aplicacion de punto de venta construida con Vue 3, Pinia, Firebase y Tailwind CSS. El proyecto esta pensado para portafolio: muestra una experiencia completa de venta, administracion de inventario y consulta de ventas sin depender de un backend propio.

## Vista general

La aplicacion permite navegar un catalogo por categorias, agregar productos a un carrito, aplicar cupones, calcular impuestos y registrar ventas en Firebase. Tambien incluye un panel administrativo para crear, editar y eliminar productos, revisar inventario y consultar ventas por fecha.

Este repositorio prioriza claridad de estructura, uso de Composition API, manejo de estado con Pinia e integracion con servicios de Firebase.

## Funcionalidades principales

- Catalogo publico filtrado por categorias: Sudaderas, Tenis y Lentes.
- Carrito de compra con cantidades, limite por producto, subtotal, impuestos y total.
- Cupones de descuento: `10DESCUENTO` y `20DESCUENTO`.
- Checkout con registro de ventas en Firestore.
- Descuento automatico de inventario despues de una venta.
- Administracion de productos: crear, editar, eliminar y listar productos.
- Carga y reemplazo de imagenes mediante Firebase Storage.
- Consulta de ventas por fecha con resumen del total vendido.
- Interfaz responsive con enfoque visual de POS moderno.

## Stack tecnico

- Vue 3
- Vite
- Pinia
- Vue Router
- Firebase / Firestore / Storage
- VueFire
- FormKit
- Tailwind CSS v4
- vue-tailwind-datepicker
- ESLint, Oxlint y Prettier

## Estructura del proyecto

```txt
src/
  assets/              Estilos globales de Tailwind
  components/          Componentes reutilizables de tienda, carrito y admin
  composables/         Logica reutilizable, como carga de imagenes
  config/              Configuracion de Firebase
  data/                Datos base para seeding de productos
  helpers/             Utilidades de formato y fechas
  router/              Definicion de rutas publicas y admin
  stores/              Estado global con Pinia
  views/               Pantallas principales de tienda y administracion
```

## Rutas principales

| Ruta | Descripcion |
| --- | --- |
| `/` | Tienda publica y flujo de venta |
| `/admin/productos` | Lista de productos e inventario |
| `/admin/productos/nuevo` | Alta de producto |
| `/admin/productos/editar/:id` | Edicion de producto |
| `/admin/productos/seeder` | Carga inicial de productos de ejemplo |
| `/admin/ventas` | Consulta de ventas por fecha |

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- npm
- Proyecto Firebase con Firestore y Storage configurados

## Configuracion local

1. Instalar dependencias:

```sh
npm install
```

2. Crear un archivo `.env.local` tomando como base `.env.example`:

```sh
cp .env.example .env.local
```

En Windows PowerShell puedes usar:

```powershell
Copy-Item .env.example .env.local
```

3. Completar las variables de Firebase en `.env.local`.

4. Iniciar el servidor de desarrollo:

```sh
npm run dev
```

5. Abrir la URL local que entrega Vite, normalmente:

```txt
http://127.0.0.1:5173/
```

## Scripts disponibles

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo |
| `npm run build` | Genera la version de produccion |
| `npm run preview` | Previsualiza el build localmente |
| `npm run lint` | Ejecuta Oxlint y ESLint con autofix |
| `npm run format` | Formatea `src/` con Prettier |

## Variables de entorno

El proyecto usa variables con prefijo `VITE_` para inicializar Firebase:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Consulta [docs/FIREBASE_SETUP.md](docs/FIREBASE_SETUP.md) para mas detalle sobre colecciones, Storage y datos esperados.

## Decisiones de arquitectura

- Pinia concentra la logica de carrito, productos, ventas y cupones.
- VueFire conecta colecciones de Firestore con estado reactivo.
- Firebase Storage almacena imagenes de productos.
- Las rutas admin se cargan de forma diferida con dynamic imports.
- Tailwind se usa como capa visual principal para mantener componentes simples.
- FormKit se usa para formularios de productos y validaciones visibles.

Consulta [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) para una explicacion mas completa.

## Alcance de portafolio

Este proyecto esta pensado como demostracion tecnica y visual. No incluye autenticacion, roles de usuario, pagos reales, corte de caja, facturacion ni control multi-sucursal. Esas piezas podrian agregarse en una version comercial, pero se dejaron fuera para mantener el foco en frontend, estado, CRUD e integracion con Firebase.

Consulta [docs/PORTFOLIO_NOTES.md](docs/PORTFOLIO_NOTES.md) para ver que comunica este proyecto dentro de un portafolio.

## Verificacion recomendada

Antes de publicar o entregar cambios:

```sh
npm run build
```

Opcionalmente:

```sh
npm run lint
```

## Autor

Proyecto desarrollado como pieza de portafolio para demostrar una aplicacion POS moderna con Vue, Pinia y Firebase.
