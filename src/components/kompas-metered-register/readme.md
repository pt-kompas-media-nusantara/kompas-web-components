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

<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                        | Description                                                                                           | Type     | Default     |
| -------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `countdownArticle`               | `countdown-article`              | prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.                    | `number` | `0`         |
| `tracker_content_authors`        | `tracker_content_authors`        | Name of the authors (will only be sent if the user views article detail page)                         | `string` | `undefined` |
| `tracker_content_categories`     | `tracker_content_categories`     | The main category the content belongs to                                                              | `string` | `undefined` |
| `tracker_content_editors`        | `tracker_content_editors`        | Name of the editors (will only be sent if the user views article detail page)                         | `string` | `undefined` |
| `tracker_content_id`             | `tracker_content_id`             | The ID for the article (will only be sent if the user views article detail page)                      | `string` | `undefined` |
| `tracker_content_published_date` | `tracker_content_published_date` | The published date (will only be sent if the user views article detail page)                          | `string` | `undefined` |
| `tracker_content_tags`           | `tracker_content_tags`           | Tags inside the article (will only be sent if the user views article detail page)                     | `string` | `undefined` |
| `tracker_content_title`          | `tracker_content_title`          | The title of the article (will only be sent if the user views article detail page)                    | `string` | `undefined` |
| `tracker_content_type`           | `tracker_content_type`           | Whether it's a free article or paid article (will only be sent if the user views article detail page) | `string` | `undefined` |
| `tracker_metered_wall_balance`   | `tracker_metered_wall_balance`   | The balance of their metered wall                                                                     | `number` | `0`         |
| `tracker_metered_wall_type`      | `tracker_metered_wall_type`      | The type of Metered Wall                                                                              | `string` | `undefined` |
| `tracker_page_domain`            | `tracker_page_domain`            | Page Domain                                                                                           | `string` | `undefined` |
| `tracker_page_title`             | `tracker_page_title`             | Title of the page                                                                                     | `string` | `undefined` |
| `tracker_page_type`              | `tracker_page_type`              | Type of the page                                                                                      | `string` | `undefined` |
| `tracker_subscription_status`    | `tracker_subscription_status`    | Status of their subscription                                                                          | `string` | `undefined` |
| `tracker_user_type`              | `tracker_user_type`              | Type of user based on their subscription                                                              | `string` | `undefined` |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
