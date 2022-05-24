export { Components, JSX } from './components';

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: Record<string, any>
  }
}