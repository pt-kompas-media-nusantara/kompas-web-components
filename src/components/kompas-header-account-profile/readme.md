# kompas-header-account-profile



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute           | Description       | Type     | Default                                |
| ----------------------- | ------------------- | ----------------- | -------- | -------------------------------------- |
| `subscriptionUrl`       | `subscription-url`  | Subscription Url  | `string` | `'https://www.kompas.id/berlangganan'` |
| `userData` _(required)_ | `user-data`         | User Data         | `any`    | `undefined`                            |
| `userInitialName`       | `user-initial-name` | User Initial Name | `string` | `undefined`                            |


## Dependencies

### Used by

 - [kompas-header-account](../kompas-header-account)

### Depends on

- [kompas-grace-period](../kompas-grace-period)

### Graph
```mermaid
graph TD;
  kompas-header-account-profile --> kompas-grace-period
  kompas-header-account --> kompas-header-account-profile
  style kompas-header-account-profile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Terbikin oleh tim front-end kompas.id*
