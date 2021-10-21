# kid-paywall

Ini adalah komponen yang menyajikan tawaran paket berlangganan kompas.id.
Komponen ini hanya mendukung peramban modern seperti Chrome 60+, Safari 10.1+, Firefox 63+, dan Edge 79+. IE11 & Edge 16-18 tidak didukung.

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

_Bagian ini menyusul_.


## Penggunaan

### Elemen
```javascript
<kid-paywall 
  is-login="true"
></kid-paywall>
```

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                                                      | Type      | Default |
| --------- | ---------- | -------------------------------------------------------------------------------- | --------- | ------- |
| `isLogin` | `is-login` | prop isLogin mengakomodasi untuk menampilkan banner registration secara dinamis. | `boolean` | `false` |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
