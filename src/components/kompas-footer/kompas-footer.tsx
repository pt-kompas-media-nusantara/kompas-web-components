/**
 * Komponen yang menyajikan footer universal bagi produk-produk kompas.
 */

import { Component, h } from '@stencil/core'
import { branding, menus } from './branding.json'

@Component({
  tag: 'kompas-footer',
  styleUrl: 'kompas-footer.css',
  shadow: true,
})

export class KompasFooter {
  render () {
    return (
      <footer class="container">
        <kompas-footer-supports branding={ branding} />
        <kompas-footer-products branding={ branding } />
        <kompas-footer-default menus={ menus } />
      </footer>
    )
  }
}
