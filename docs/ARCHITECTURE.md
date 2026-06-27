# Arquitectura

Este documento resume como esta organizada la aplicacion y donde vive cada responsabilidad principal.

## Capas principales

### Vistas

Las vistas definen pantallas completas y componen componentes reutilizables.

- `src/views/ShopView.vue`: pantalla publica de venta. Muestra filtros, catalogo y carrito.
- `src/views/admin/AdminLayout.vue`: layout base del panel administrativo.
- `src/views/admin/ProductsView.vue`: inventario y listado de productos.
- `src/views/admin/NewProductView.vue`: alta de producto.
- `src/views/admin/EditProductView.vue`: edicion de producto existente.
- `src/views/admin/SalesView.vue`: consulta de ventas por fecha.
- `src/views/admin/SeederView.vue`: carga de productos base.

### Componentes

Los componentes se mantienen enfocados en presentacion e interaccion directa.

- Navegacion: `MainNav.vue`, `AdminNav.vue`, `Logo.vue`, `Link.vue`.
- Catalogo e inventario: `ProductCard.vue`, `Product.vue`.
- Carrito: `ShoppingCart.vue`, `ShoppingCartItem.vue`, `CouponForm.vue`, `Amount.vue`.
- Ventas: `SaleDetatails.vue`.

### Stores Pinia

Los stores concentran estado y operaciones de negocio.

- `stores/products.js`: lectura de productos, filtros por categoria, CRUD y opciones de categoria.
- `stores/cart.js`: items del carrito, calculo de subtotal, impuestos, total y checkout.
- `stores/coupons.js`: validacion de cupones y calculo de descuento.
- `stores/sales.js`: consulta de ventas por fecha y total vendido del dia.

### Firebase

La configuracion vive en `src/config/firebase.js` y usa variables de entorno expuestas por Vite.

La app usa:

- Firestore para `products` y `sales`.
- Storage para imagenes de productos.
- VueFire para enlazar colecciones/documentos a estado reactivo.

## Flujo de venta

1. El usuario filtra productos por categoria en la tienda.
2. Agrega productos disponibles al carrito.
3. El store de carrito recalcula subtotal, impuestos y total.
4. Opcionalmente se aplica un cupon valido.
5. Al confirmar compra, se crea un documento en `sales`.
6. Se actualiza el inventario de cada producto vendido mediante transacciones de Firestore.
7. Se reinician carrito y cupon.

## Flujo de administracion

1. El panel lista productos desde Firestore ordenados por disponibilidad.
2. Los formularios de alta/edicion usan FormKit.
3. Las imagenes se cargan mediante el composable `useImage`.
4. Al editar, solo se reemplaza la imagen si el usuario selecciona una nueva.
5. Al eliminar, se borra el documento de Firestore y el archivo asociado en Storage.

## Rutas

Las rutas admin se declaran como hijas de `/admin` y cargan vistas por dynamic import para separar el bundle por pantallas.

```txt
/                              shop
/admin/productos               products
/admin/productos/nuevo         new-product
/admin/productos/editar/:id    edit-product
/admin/productos/seeder        seed-product
/admin/ventas                  sales
```

## Consideraciones tecnicas

- La moneda se formatea como USD desde `helpers/formatCurrecy`.
- La fecha de venta se guarda como `DD/MM/YYYY` para coincidir con el datepicker.
- El carrito limita cantidad por producto segun disponibilidad y un maximo interno de 5 unidades.
- El proyecto no implementa autenticacion; el panel admin queda abierto para fines de portafolio/demo.
- El diseno visual esta definido principalmente en clases Tailwind dentro de los componentes.
