# kompas-paywall-meter



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                        | Type                    | Default     |
| ------------------ | ------------------- | ---------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `countdownArticle` | `countdown-article` | prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca. | `number`                | `0`         |
| `isLogin`          | `is-login`          |                                                                                    | `boolean`               | `false`     |
| `type`             | `type`              |                                                                                    | `"epaper" \| "reguler"` | `'reguler'` |


## Dependencies

### Used by

 - [kompas-paywall](../kompas-paywall)

### Depends on

- [kompas-paywall-information-header](../kompas-paywall-information-header)
- [kompas-paywall-body](../kompas-paywall-body)

### Graph
```mermaid
graph TD;
  kompas-paywall-meter --> kompas-paywall-information-header
  kompas-paywall-meter --> kompas-paywall-body
  kompas-paywall --> kompas-paywall-meter
  style kompas-paywall-meter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
