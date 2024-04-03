# kompas-metered-register

### Standar

Anda perlu meletakkan _tag_ komponen `<kompas-metered-register />` pada halaman anda.

### Elemen

```javascript
<kompas-metered-register countdown-article="1" />
```

### Detail Props

### 1. countdownArticle

- Value berapa banyak sisa artikel yang dapat dibaca
  Jika valuenya:
  0 => tidak ada yg muncul
  1 => akan menampilkan text artikel terakhir
  lebih dari 1 => akan menampilkan normal text

### Catatan

Text pada komponen ini dapat di update dengan mengubah value dari url https://d3w4qaq4xm1ncv.cloudfront.net/assets/register_wall.json

Dengan format dibawah ini:

```javascript
{
  "expand": {
    "lastArticle": {
      "title": "<span>Anda Sedang Membaca <b>Artikel Premium Gratis Terakhir</b> dari Kompas.id</span>",
      "description": "<span>Ayo daftar akun untuk akses ke beragam artikel dan fitur premium. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.</span>"
    },
    "title": "<b>Tertarik dengan Artikel Ini? Daftar untuk Akses Artikel Menarik Lainnya</b>",
    "description": "<span>Dapatkan akses ke beragam konten dan fitur premium Kompas.id. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.</span>"
  },
  "default": {
    "lastArticle": {
      "title": "<span>Ini Adalah <b>Artikel Gratis Terakhir</b> Anda. <b>Daftar Akun untuk Terus Membaca.</b></span>"
    },
    "title": "<b>Dukung jurnalisme berkualitas dengan mendaftar akun Kompas.id.</b>"
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                        | Description                                                                                           | Type      | Default     |
| -------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `countdownArticle`               | `countdown-article`              | prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.                    | `number`  | `0`         |
| `cta_url`               | `cta_url`              | prop cta_url untuk custom url di button.                    | `string`  | `undefined`         |
| `cta_text`               | `cta_text`              | prop cta_text untuk custom text di button.                   | `string`  | `undefined`         |
| `defaultExpandBanner`            | `default-expand-banner`          | prop defaultExpandBanner untuk menentukan keadaan awal komponen apakah dalam mode expand atau tidak.  | `boolean` | `true`      |
| `next_param`                     | `next_param`                     | Page Domain                                                                                           | `string`  | `undefined` |
| `tracker_content_authors`        | `tracker_content_authors`        | Name of the authors (will only be sent if the user views article detail page)                         | `string`  | `undefined` |
| `tracker_content_categories`     | `tracker_content_categories`     | The main category the content belongs to                                                              | `string`  | `undefined` |
| `tracker_content_editors`        | `tracker_content_editors`        | Name of the editors (will only be sent if the user views article detail page)                         | `string`  | `undefined` |
| `tracker_content_id`             | `tracker_content_id`             | The ID for the article (will only be sent if the user views article detail page)                      | `string`  | `undefined` |
| `tracker_content_published_date` | `tracker_content_published_date` | The published date (will only be sent if the user views article detail page)                          | `string`  | `undefined` |
| `tracker_content_tags`           | `tracker_content_tags`           | Tags inside the article (will only be sent if the user views article detail page)                     | `string`  | `undefined` |
| `tracker_content_title`          | `tracker_content_title`          | The title of the article (will only be sent if the user views article detail page)                    | `string`  | `undefined` |
| `tracker_content_type`           | `tracker_content_type`           | Whether it's a free article or paid article (will only be sent if the user views article detail page) | `string`  | `undefined` |
| `tracker_metered_wall_balance`   | `tracker_metered_wall_balance`   | The balance of their metered wall                                                                     | `number`  | `0`         |
| `tracker_metered_wall_type`      | `tracker_metered_wall_type`      | The type of Metered Wall                                                                              | `string`  | `undefined` |
| `tracker_page_domain`            | `tracker_page_domain`            | Page Domain                                                                                           | `string`  | `undefined` |
| `tracker_page_title`             | `tracker_page_title`             | Title of the page                                                                                     | `string`  | `undefined` |
| `tracker_page_type`              | `tracker_page_type`              | Type of the page                                                                                      | `string`  | `undefined` |
| `tracker_subscription_status`    | `tracker_subscription_status`    | Status of their subscription                                                                          | `string`  | `undefined` |
| `tracker_user_type`              | `tracker_user_type`              | Type of user based on their subscription                                                              | `string`  | `undefined` |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
