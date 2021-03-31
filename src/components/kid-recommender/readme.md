# kid-recommender

## Intro
Ini adalah komponen yang menyajikan artikel rekomendasi kompas.id berdasarkan sejumlah parameter yang disediakan.
Contoh penggunaan:
```javascript
<kid-recommender 
  auth-key="pak-beja-menek-klapa-nek-tiba-dadi-janaka"
  post-tags="brongkos,gethuk,krecek,"
  post-title="Wong Yen Lagi Naksir, Ra peduli Perangé Nuklir"
  post-url="https://domain.tld/wong-yen-lagi-naksir-ra-peduli-perange-nuklir"
  utm="utm_source=domain.tld&utm_kampain=wasweswos&utm_mbah_margo=tongseng"
></kid-recommender>
```

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute    | Description                                                        | Type     | Default     |
| ------------------------ | ------------ | ------------------------------------------------------------------ | -------- | ----------- |
| `authKey` _(required)_   | `auth-key`   | Kunci otentikasi                                                   | `string` | `undefined` |
| `postTags`               | `post-tags`  | Label/tagar jamak artikel yang dipisahkan dengan koma              | `string` | `undefined` |
| `postTitle` _(required)_ | `post-title` | Judul artikel                                                      | `string` | `undefined` |
| `postUrl` _(required)_   | `post-url`   | URL artikel tempat komponen ini disisipkan                         | `string` | `undefined` |
| `utm` _(required)_       | `utm`        | UTM untuk dikaitkan dengan permalink artikel rekomendasi kompas.id | `string` | `undefined` |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
