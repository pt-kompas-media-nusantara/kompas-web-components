import { Component, Host, h, Prop } from '@stencil/core';
import shoppingCart from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/shopping-cart.svg'
import userCog from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/user-cog.svg'
import exchangeAlt from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/exchange-alt.svg'
import bell from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/bell.svg'
import signOutAlt from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/sign-out-alt.svg'

@Component({
  tag: 'kompas-header-account-menu',
  styleUrl: '../kompas-header-account/kompas-header-account.css',
  shadow: true,
})
export class KompasHeaderAccountMenu {
  
  /**
    * Logout Url
    */
  @Prop() logoutUrl: string = 'https://account.kompas.id/logout'

  render() {
    return (
      <Host>
        <li class="font-bold flex flex-shrink-0 gap-y-3 py-4 flex-col text-left text-sm border-b border-grey-300 leading-4">
          <a href="https://gerai.kompas.id/cart" class="header-account-sidebar--menu">
            <div class="ml-3 icon-md icon-blue-600" innerHTML={shoppingCart}></div>
            <p class="header-account-sidebar--title">Keranjang</p>
          </a>
          <a href="https://account.kompas.id/manage-account/my-account" class="header-account-sidebar--menu">
            <div class="ml-3 icon-md icon-blue-600" innerHTML={userCog}></div>
            <p class="header-account-sidebar--title">Kelola Akun</p>
          </a>
          <a href="https://gerai.kompas.id/my-account/orders" class="header-account-sidebar--menu">
            <div class="ml-3 icon-md icon-blue-600" innerHTML={exchangeAlt}></div>
            <p class="header-account-sidebar--title">Transaksi</p>
          </a>
          <a href="https://account.kompas.id/notification" class="header-account-sidebar--menu">
            <div class="ml-3 icon-md icon-blue-600" innerHTML={bell}></div>
            <p class="header-account-sidebar--title">Notifikasi</p>
          </a>
          <a href={this.logoutUrl} class="header-account-sidebar--menu">
            <div class="ml-3 icon-md icon-blue-600" innerHTML={signOutAlt}></div>
            <p class="header-account-sidebar--title">Keluar</p>
          </a>
        </li>
      </Host>
    );
  }
}
