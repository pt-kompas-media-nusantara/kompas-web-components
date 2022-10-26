import { Component, h, Prop } from '@stencil/core'
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
    * Cart Url
    */
  @Prop() cartUrl: string = 'https://gerai.kompas.id/cart'

  /**
    * Logout Url
    */
  @Prop() logoutUrl: string = 'https://account.kompas.id/logout'

  /**
    * Manage Account Url
    */
  @Prop() manageAccountUrl: string = 'https://account.kompas.id/manage-account/my-account'

  /**
    * Notification Url
    */
  @Prop() notificationUrl: string = 'https://account.kompas.id/manage-account/notification'

  /**
    * Orders Url
    */
  @Prop() ordersUrl: string = 'https://gerai.kompas.id/my-account/orders'

  /**
    * Total Notification Count
    */
  @Prop() notificationTotal: number = 0

  // Render Total Bubble
  private renderTotalBubble = (total: number) => {
    if(!total) return;

    const isOneDigitNotification = total > 0 && total <= 9
    const additionalStyling = isOneDigitNotification ? '' : 'pl-0.5'

    return (
      <div class={`header-account-menu--notification-info ${additionalStyling}`}>
        {/* Limit Display to use "9+"" if total notification exceed 9 */}
        { isOneDigitNotification ? total : <span>9<span class="pl-px">+</span></span>}
      </div>
    )
  }

  render() {
    return (
      <div class="border-b border-grey-300 text-grey-600">
        <li class="font-bold flex flex-shrink-0 flex-col text-left text-sm mb-4">
          {/* Cart */}
          <a href={this.cartUrl} class="header-account-menu--item">
            <div class="icon-md icon-blue-600" innerHTML={shoppingCart}></div>
            <p class="header-account-menu--title">Keranjang</p>
          </a>
          {/* Manage Account  */}
          <a href={this.manageAccountUrl} class="header-account-menu--item">
            <div class="icon-md icon-blue-600" innerHTML={userCog}></div>
            <p class="header-account-menu--title">Kelola Akun</p>
          </a>
          {/* Transaction  */}
          <a href={this.ordersUrl} class="header-account-menu--item">
            <div class="icon-md icon-blue-600" innerHTML={exchangeAlt}></div>
            <p class="header-account-menu--title">Transaksi</p>
          </a>
          {/* Notifications  */}
          <a href={this.notificationUrl} class="header-account-menu--item">
            <div class="icon-md icon-blue-600" innerHTML={bell}></div>
            <p class="header-account-menu--title">Notifikasi</p>
            <p class="flex-none">
              {/* Conditional rendering based on notification count */}
              {this.renderTotalBubble(this.notificationTotal)}
            </p>
          </a>
          {/* Logout */}
          <a href={this.logoutUrl} class="header-account-menu--item">
            <div class="icon-md icon-blue-600" innerHTML={signOutAlt}></div>
            <p class="header-account-menu--title">Keluar</p>
          </a>
        </li>
      </div>
    );
  }
}
