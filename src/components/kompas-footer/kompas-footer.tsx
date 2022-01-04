/**
 * Komponen yang menyajikan footer universal bagi produk-produk kompas.
 */

import { Component,Prop,  h } from '@stencil/core'
import { branding, menus } from './branding.json'

@Component({
  tag: 'kompas-footer',
  styleUrl: 'kompas-footer.css',
  shadow: true,
})


export class KompasFooter {
  /**
   * wording untuk chat whatsapp & email
   */
  @Prop() wordingMessage!: string

  render () {
    return (
      <footer class="w--full">
        <kompas-footer-supports branding={ branding } />
        <kompas-footer-products branding={ branding }  />
        <kompas-footer-default menus={ menus } wording-message={this.wordingMessage}/>
      </footer>
    )
  }
}
