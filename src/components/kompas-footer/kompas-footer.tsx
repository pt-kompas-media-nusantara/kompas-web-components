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
  @Prop() wordingMessage: string = 'Halo saya perlu informasi mengenai kompas.id'

  /**
   * Flag untuk memunculkan sesi support pada footer
   */
  @Prop() isShowSupport: boolean = true

  /**
   * Flag untuk memunculkan sesi product pada footer
   */
  @Prop() isShowProduct: boolean = true

  /**
   * Flag untuk memunculkan sesi default pada footer
   */
  @Prop() isShowDefault: boolean = true

  render () {
    return (
      <footer class="w--full">
        { this.isShowSupport ? <kompas-footer-supports branding={ branding } wording-message={this.wordingMessage}/> : '' }
        { this.isShowProduct ? <kompas-footer-products branding={ branding }  /> : '' }
        { this.isShowDefault ? <kompas-footer-default menus={ menus } /> : '' }
      </footer>
    )
  }
}
