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

| Property            | Attribute             | Description                                                                                                                                        | Type      | Default |
| ------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `gtmBrandingMedium` | `gtm-branding-medium` | prop gtmBrandingMedium mengakomodasi penambahan atribut param `track_medium` di permalink button branding `mengapa kompas.id?`.                    | `string`  | `''`    |
| `gtmLoginMedium`    | `gtm-login-medium`    | prop gtmLoginMedium mengakomodasi penambahan atribut param `track_medium` di permalink button login.                                               | `string`  | `''`    |
| `gtmPaywallMedium`  | `gtm-paywall-medium`  | prop gtmPaywallMedium mengakomodasi penambahan atribut param `track_medium` di permalink button berlangganan pada setiap item paket berlangganan`. | `string`  | `''`    |
| `gtmTrackContent`   | `gtm-track-content`   | prop gtmTrackContent mengakomodasi penambahan atribut param `track_content` di semua permalink. hint: url dari window.location.href                | `string`  | `''`    |
| `gtmTrackSource`    | `gtm-track-source`    | prop gtmTrackSource mengakomodasi penambahan atribut param `track_source` di semua permalink.                                                      | `string`  | `''`    |
| `isLogin`           | `is-login`            | prop isLogin mengakomodasi untuk menampilkan banner registration secara dinamis.                                                                   | `boolean` | `false` |
| `showMembership`    | `show-membership`     | prop show-membership untuk menampilkan section membership                                                                                          | `boolean` | `true`  |
| `showRegistration`  | `show-registration`   | prop show-registration untuk menampilkan section resgistration & branding                                                                          | `boolean` | `true`  |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
