# kompas-paywall-video

### Standar
Anda perlu meletakkan _tag_ komponen `<kompas-paywall-video />` pada child component (komponen ini memiliki style `position: absolute` sehingga parent componentnya harus menggunakan style `position:relative`).

### Elemen
```javascript
    <div style="position:relative">  
      <your-content-component/>
      <kompas-paywall-video />
    </div>
```

Contoh Penerapan:

<img width="500" src="https://user-images.githubusercontent.com/43400392/198214862-16f0f0b1-d179-48b8-9e30-a7667ede1a95.jpg">


<!-- Auto Generated Below -->


## Properties

| Property                       | Attribute                      | Description | Type      | Default |
| ------------------------------ | ------------------------------ | ----------- | --------- | ------- |
| `isLogin`                      | `is-login`                     |             | `boolean` | `false` |
| `paywall_location`             | `paywall_location`             |             | `string`  | `''`    |
| `paywall_position`             | `paywall_position`             |             | `number`  | `0`     |
| `paywall_subscription_id`      | `paywall_subscription_id`      |             | `string`  | `''`    |
| `paywall_subscription_package` | `paywall_subscription_package` |             | `string`  | `''`    |
| `paywall_subscription_price`   | `paywall_subscription_price`   |             | `string`  | `''`    |
| `tracker_content_category`     | `tracker_content_category`     |             | `string`  | `''`    |
| `tracker_content_id`           | `tracker_content_id`           |             | `string`  | `''`    |
| `tracker_content_title`        | `tracker_content_title`        |             | `string`  | `''`    |
| `tracker_content_type`         | `tracker_content_type`         |             | `string`  | `''`    |
| `tracker_metered_wall_balance` | `tracker_metered_wall_balance` |             | `string`  | `''`    |
| `tracker_metered_wall_type`    | `tracker_metered_wall_type`    |             | `string`  | `''`    |
| `tracker_page_domain`          | `tracker_page_domain`          |             | `string`  | `''`    |
| `tracker_page_type`            | `tracker_page_type`            |             | `string`  | `''`    |
| `tracker_subscription_status`  | `tracker_subscription_status`  |             | `string`  | `''`    |
| `tracker_user_type`            | `tracker_user_type`            |             | `string`  | `''`    |
| `user_type`                    | `user_type`                    |             | `string`  | `''`    |


----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
