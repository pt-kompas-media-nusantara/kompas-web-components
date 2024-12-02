# kompas-metered-register

### Standar

Anda perlu meletakkan _tag_ komponen `<kompas-metered-register />` pada halaman anda.

### Elemen

```javascript
<kompas-metered-register
    countdown-article="2"
    tracker_page_title="Example Page Title"
    tracker_page_type="Photo"
    tracker_content_type="Free"
    tracker_content_id="example-content-id"
    tracker_content_title="Example Content Title"
    tracker_content_authors="Author 1|Author 2"
    tracker_content_editors="Editor 1|Editor 2"
    tracker_content_tags="Tag1|Tag2|Tag3"
    tracker_content_published_date="2023-10-12"
    tracker_content_categories="Category 1|Category 2"
    tracker_user_type="G"
    tracker_subscription_status="status"
    tracker_metered_wall_type="MRW"
    tracker_metered_wall_balance="3"
    tracker_page_domain="Kompas.com"
    next_param="https://www.kompas.id/baca/opini/2023/12/05/masa-depan-wolbachia-sebagai-alternatif-pengendalian-dbd?open_from=Section_Opini"
    source="kompascom" // kompascom | default
></kompas-metered-register>
```

### Detail Props

### 1. countdownArticle

- Value berapa banyak sisa artikel yang dapat dibaca
  Jika valuenya:
  0 => tidak ada yg muncul
  1 => akan menampilkan text artikel terakhir
  lebih dari 1 => akan menampilkan normal text

### 2. source

- Value didapatkan dari query URL `source=` **( kompascom | default )**

### Catatan

Text pada komponen ini dapat di update dengan mengubah value dari url https://cdn-www.kompas.id/assets/register_wall_new.json

Dengan format dibawah ini:

```javascript
{
    "default": {
        "collapse": {
            "lastArticle": {
                "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
            },
            "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
        },
        "expand": {
            "ctaText": "Langganan dengan Google",
            "ctaUrl": "https://pay.google.com/gp/p/ui/pay?swg=true#__WA__=%7B%22requestId%22%3A%22GPAY%22%2C%22returnUrl%22%3A%22https%3A%2F%2Fwww.kompas.id%2Fberlangganan%2F%22%2C%22args%22%3A%7B%22apiVersion%22%3A1%2C%22allowedPaymentMethods%22%3A%5B%22CARD%22%5D%2C%22environment%22%3A%22PRODUCTION%22%2C%22playEnvironment%22%3A%22PROD%22%2C%22swg%22%3A%7B%22skuId%22%3A%22koidwmekmpsalldig001%22%2C%22publicationId%22%3A%22kompas.id%22%7D%2C%22i%22%3A%7B%22startTimeMs%22%3A1724058503352%2C%22googleTransactionId%22%3A%2269E47BED-8E9C-46E4-A044-42CDD0C7EE47.swg%22%2C%22productType%22%3A%22SUBSCRIPTION%22%2C%22disableNative%22%3Atrue%2C%22disableNgbf%22%3Atrue%2C%22redirectVerifier%22%3A%22RS5ZJhDZsvL03WzdXkqtLlpQDQJcel8qAHg2O49TFd%2F8v7FlgiF4gUCJ%2BXJ2tR7C%22%7D%7D%7D",
            "description": "<span>Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang. </span>",
            "imageUrl": "https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi_guest.svg",
            "lastArticle": {
                "description": "<span>Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang. </span>",
                "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
            },
            "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
        }
    },
    "kompascom": {
        "collapse": {
            "lastArticle": {
                "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
            },
            "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
        },
        "expand": {
            "ctaText": "Langganan Lebih Hemat",
            "ctaUrl": "https://checkoutv2.kompas.cloud/kdp?productId=9891169&referrer=https%3A%2F%2Fwww.kompas.cloud%2Fberlangganan&source=subs",
            "description": "<span>Nikmati akses penuh untuk dua platform multimedia berkualitas, Kompas.id dan Kompas.com+. Dengan satu langganan, dapatkan informasi terlengkap, terkini, dan tepercaya hanya Rp55.000 per bulan.</span>",
            "imageUrl": "https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi_kompas_com.svg",
            "lastArticle": {
                "description": "<span>Nikmati akses penuh untuk dua platform multimedia berkualitas, Kompas.id dan Kompas.com+. Dengan satu langganan, dapatkan informasi terlengkap, terkini, dan tepercaya hanya Rp55.000 per bulan.</span>",
                "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
            },
            "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
        }
    }
}
```

<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                        | Description                                                                                           | Type      | Default     |
| -------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `countdownArticle`               | `countdown-article`              | prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.                    | `number`  | `0`         |
| `cta_text`                       | `cta_text`                       | Button text promo                                                                                     | `string`  | `undefined` |
| `cta_url`                        | `cta_url`                        | Url promo                                                                                             | `string`  | `undefined` |
| `defaultExpandBanner`            | `default-expand-banner`          | prop defaultExpandBanner untuk menentukan keadaan awal komponen apakah dalam mode expand atau tidak.  | `boolean` | `true`      |
| `next_param`                     | `next_param`                     | Page Domain                                                                                           | `string`  | `undefined` |
| `source`                         | `source`                         | Source Param                                                                                          | `string`  | `'default, kompas com'` |
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
