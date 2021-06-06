# kompas-footer

Ini adalah komponen bagian _footer_ halaman khas produk-produk digital berbasis web Kompas.

## Pemasangan

### CDN

Selalu menggunakan versi terbaru:
```html
<script src="https://unpkg.com/@kompas/web-components@latest" type="module" async defer></script>
```
atau menggunakan versi tertentu, saat ini belum disarankan:
```html
<script src="https://unpkg.com/@kompas/web-components@0.0.1-alpha-5" type="module" async defer></script>
```

### NPM
```bash
npm i -D @kompas/web-components
```

### Yarn
```bash
yarn add -D @kompas/web-components
```

## Penggunaan

### Standar
```html
<kompas-footer />
```

### Vue.js
```javascript
import Vue from "vue";
import App from "./App.vue";

import {
  applyPolyfills,
  defineCustomElements,
} from "@kompas/web-components/loader";

Vue.config.productionTip = false;

// Perintahkan Vue untuk mengabaikan komponen dengan prefiks 'kompas-'
Vue.config.ignoredElements = [/kompas-\w*/];

// Bebat komponen kustom ke obyek window
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```


<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [kompas-footer-supports](../kompas-footer-supports)
- [kompas-footer-products](../kompas-footer-products)
- [kompas-footer-default](../kompas-footer-default)

### Graph
```mermaid
graph TD;
  kompas-footer --> kompas-footer-supports
  kompas-footer --> kompas-footer-products
  kompas-footer --> kompas-footer-default
  style kompas-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
