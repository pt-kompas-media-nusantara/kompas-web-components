# kompas-header-account

Ini adalah komponen bagian _header_ halaman khas produk-produk digital berbasis web Kompas.

## Pemasangan

### - CDN

Selalu menggunakan versi terbaru:

```html
<script src="https://unpkg.com/@kompas/web-components@latest" type="module" async defer></script>
```

atau menggunakan versi tertentu, saat ini belum disarankan:

```html
<script src="https://unpkg.com/@kompas/web-components@0.0.1-alpha-5" type="module" async defer></script>
```

### - NPM

```bash
npm i -D @kompas/web-components
```

### - Yarn

```bash
yarn add -D @kompas/web-components
```

## Penggunaan

### - Vue.js

Apabila menggunakan Vue.js sebagai kerangka kerja Javascript, Anda perlu menambahkan konfigurasi berikut di `./src/main.js`:

```javascript
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from '@kompas/web-components/loader';

Vue.config.productionTip = false;

// Perintahkan Vue untuk mengabaikan komponen dengan prefiks 'kompas-'
Vue.config.ignoredElements = [/kompas-\w*/];

// Bebat komponen kustom ke obyek window
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### - NuxtJS

Apabila menggunakan NuxtJS, Anda bisa menggunakan pustaka [Gomah/nuxt-stencil](https://github.com/Gomah/nuxt-stencil). Tugas selanjutnya adalah menambahkan konfigurasi berikut di `nuxt.config.js`:

```javascript
export default {
  modules: ['nuxt-stencil'],
  stencil: {
    lib: '@kompas/web-components',
    prefix: 'kompas-',
    renderOptions: {},
    hydratePath: '@kompas/web-components/hydrate',
    loaderPath: '@kompas/web-components/loader',
    ignoredElements: null,
  },
};
```

### Standar

Anda perlu meletakkan _tag_ komponen `<kompas-header-account />` pada halaman anda
(Lebih disarankan untuk meletakkan pada bagian header).

Contoh:

<img width="667" alt="header-example" src="https://user-images.githubusercontent.com/95603213/157782602-3085f34a-1d95-4858-92e7-978170782090.png">

### Elemen

```javascript
<kompas-header-account
  cart-url="https://gerai.kompas.id/cart"
  logout-url="https://account.kompas.cloud/logout"
  manage-account-url="https://account.kompas.cloud/manage-account"
  notification-url="https://account.kompas.cloud/manage-account/notification"
  notification-total=10
  orders-url="https://gerai.kompas.id/my-account/orders"
  sidebar-top-spacing=48
  subscription-url="https://www.kompas.id/berlangganan"
/>
```

### Catatan

Untuk property `user-data`, dikarenakan tipe data yang dikirim adalah _non-primitive_
Disarankan untuk menggunakan code seperti dibawah ini.

Dan untuk property `url`, sudah ada default valuenya. Jika tidak mau ada perubahan url. Lebih baik tidak mendaftarkan property tersebut pada komponen. `ex: cart-url="" / orders-url="" `
```js
cartUrl: string = 'https://gerai.kompas.id/cart'
logoutUrl: string = 'https://account.kompas.id/logout'
manageAccountUrl: string = 'https://account.kompas.id/manage-account/my-account'
notificationUrl: string = 'https://account.kompas.id/notification'
ordersUrl: string = 'https://gerai.kompas.id/my-account/orders'
subscriptionUrl: string = 'https://www.kompas.id/berlangganan'
```
### Vanilla JS

```javascript
document.querySelector('kompas-header-account').setAttribute('user-data', JSON.stringify({
  "userName" : "User Fullname",
  "expired" : "Berakhir: 6 hari lagi",
  "isNearExpired": true,
  "activeInfo" : "Aktif Berlangganan",
  "isMembership": true,
  "updateMembership" : "Perbarui Langganan",
})
```

### Framework (Vue, etc)

```javascript
this.exampleData = JSON.stringify({
  "userName" : "User Fullname",
  "expired" : "Berakhir: 6 hari lagi",
  "isNearExpired": true,
  "activeInfo" : "Aktif Berlangganan",
  "isMembership": true,
  "updateMembership" : "Perbarui Langganan",
}
```

Kemudian gunakan `this.exampleData` melalui props `user-data` pada tag `<kompas-header-account>`

---

### Detail User Data

Yang dimana detail property tersebut digunakan untuk:

### 1. userName

- Value untuk menampilkan Nama pengguna

### 2. expired

- Value untuk menampilkan Periode Langganan

### 3. isNearExpired

- Indikator untuk mengubah teks dari Periode Berlangganan (True: warna akan menjadi orange)

### 4. activeInfo

- Value untuk menampilkan Deskripsi tipe langganan

### 5. isMembership

- Indikator untuk memunculkan badge membership pada icon User

### 6. updateMembership

- Value utnuk menampilkan teks pada button berlanggnanan

Gambaran terkait detail diatas adalah seperti dibawah ini:

<img width="589" alt="Coverage Data" src="https://user-images.githubusercontent.com/95603213/162383117-99831b83-dfc8-428c-b702-11c89fa21037.png">

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute             | Description                                                    | Type     | Default     |
| ----------------------- | --------------------- | -------------------------------------------------------------- | -------- | ----------- |
| `cartUrl`               | `cart-url`            | Cart Url                                                       | `string` | `undefined` |
| `logoutUrl`             | `logout-url`          | Logout Url                                                     | `string` | `undefined` |
| `manageAccountUrl`      | `manage-account-url`  | Manage Account Url                                             | `string` | `undefined` |
| `notificationTotal`     | `notification-total`  | Total Notification Count                                       | `number` | `0`         |
| `notificationUrl`       | `notification-url`    | Notification Url                                               | `string` | `undefined` |
| `ordersUrl`             | `orders-url`          | Orders Url                                                     | `string` | `undefined` |
| `sidebarTopSpacing`     | `sidebar-top-spacing` | Value to Add spacing on top of sidebar (will convert to pixel) | `number` | `0`         |
| `subscriptionUrl`       | `subscription-url`    | Subscription Url                                               | `string` | `undefined` |
| `userData` _(required)_ | `user-data`           | Value consist of User Data                                     | `any`    | `undefined` |


## Dependencies

### Depends on

- [kompas-header-account-profile](../kompas-header-account-profile)
- [kompas-header-account-menu](../kompas-header-account-menu)
- [kompas-header-account-help-center](../kompas-header-account-help-center)

### Graph
```mermaid
graph TD;
  kompas-header-account --> kompas-header-account-profile
  kompas-header-account --> kompas-header-account-menu
  kompas-header-account --> kompas-header-account-help-center
  style kompas-header-account fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
