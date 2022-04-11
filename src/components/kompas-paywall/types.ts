export interface Product {
  title: string,
  percentage: number,
  price: number,
  discountPrice: number,
  periode: string,
  isHighlight: boolean,
  url: string,
}
export interface Metered {
  maxQuota: number,
  label: string,
  maxQuotaMessage: string,
  url: string
}
export interface PaymentImage {
  name: string,
  link: string
}
export interface Registration {
  img: string,
  title: string,
  subtitle: string,
  label: string
}
export interface Informations {
  title: string,
  description: Array<string>,
  register: {
    img: string,
    title: string,
    subtitle: string,
    label: string
  },
}
export interface Packages {
  title: string,
  memberships: Array<Product>
}
export interface PaywallProduct {
  informations: {
    title: string,
    description: Array<string>,
    register: Registration,
    meterred: Metered
  },
  packages: Packages,
  payment: {
    desktop: Array<PaymentImage>,
    mobile: Array<PaymentImage>,
    ekstension: Array<PaymentImage>,
  }
}