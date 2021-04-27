# kid-recommender

Ini adalah komponen yang menyajikan artikel rekomendasi kompas.id berdasarkan sejumlah parameter yang disediakan.
Komponen ini hanya mendukung peramban modern seperti Chrome 60+, Safari 10.1+, Firefox 63+, dan Edge 79+. IE11 & Edge 16-18 tidak didukung.

## Pemasangan

### CDN

Selalu menggunakan versi terbaru:
```html
<script src="https://unpkg.com/@kompas/web-components@latest" type="module" async defer></script>
```
atau menggunakan versi tertentu, saat ini belum disarankan:
```html
<script src="https://unpkg.com/@kompas/web-components@0.0.1-alpha-4" type="module" async defer></script>
```

### NPM

_Bagian ini menyusul_.


## Penggunaan

### Elemen
```javascript
<kid-recommender 
  auth-key="pak-beja-menek-klapa-nek-tiba-dadi-janaka"
  position="rekomendasi_inbody"
  post-tags="brongkos,gethuk,krecek"
  post-title="Wong Yen Lagi Naksir, Ra peduli Perangé Nuklir"
  post-url="https://domain.tld/wong-yen-lagi-naksir-ra-peduli-perange-nuklir"
  section="olahraga,arsenal"
></kid-recommender>
```

### Mode Gelap
Apabila mode gelap aplikasi diaktifkan, tambahkan properti `dark-mode` agar komponen menyesuaikan warna.
```javascript
<kid-recommender 
  auth-key="pak-beja-menek-klapa-nek-tiba-dadi-janaka"
  dark-mode
></kid-recommender>
```

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute    | Description                                                                                                                                                | Type      | Default                |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------- |
| `authKey` _(required)_ | `auth-key`   | Kunci otentikasi                                                                                                                                           | `string`  | `undefined`            |
| `darkMode`             | `dark-mode`  | Setelan untuk mengakomodasi mode terang/gelap                                                                                                              | `boolean` | `false`                |
| `position`             | `position`   | Lokasi penempatan komponen                                                                                                                                 | `string`  | `'rekomendasi_inbody'` |
| `postTags`             | `post-tags`  | Label/tagar jamak artikel yang dipisahkan dengan koma. Kalau tidak diisi, komponen akan mengambil nilai `<meta name="keyword" />`.                         | `string`  | `''`                   |
| `postTitle`            | `post-title` | Judul artikel. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta name="og:title" />` atau `<title />`.                                      | `string`  | `''`                   |
| `postUrl`              | `post-url`   | URL artikel tempat komponen ini disisipkan. Kalau tidak diisi, komponen akan otomatis mengambil nilai `<meta property="og:url" />` atau `window.location`. | `string`  | `''`                   |
| `section`              | `section`    | Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)                                                                                                | `string`  | `''`                   |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
