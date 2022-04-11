# kompas-paywall



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                    | Default     |
| ------------- | -------------- | ----------- | ----------------------- | ----------- |
| `isLogin`     | `is-login`     |             | `boolean`               | `false`     |
| `isSubscribe` | `is-subscribe` |             | `boolean`               | `false`     |
| `quota`       | `quota`        |             | `number`                | `0`         |
| `type`        | `type`         |             | `"epaper" \| "reguler"` | `'reguler'` |


## Dependencies

### Depends on

- [kompas-paywall-body](../kompas-paywall-body)
- [kompas-paywall-information-header](../kompas-paywall-information-header)
- [kompas-paywall-meter](../kompas-paywall-meter)
- [kompas-paywall-banner-registration](../kompas-paywall-banner-registration)

### Graph
```mermaid
graph TD;
  kompas-paywall --> kompas-paywall-body
  kompas-paywall --> kompas-paywall-information-header
  kompas-paywall --> kompas-paywall-meter
  kompas-paywall --> kompas-paywall-banner-registration
  style kompas-paywall fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
