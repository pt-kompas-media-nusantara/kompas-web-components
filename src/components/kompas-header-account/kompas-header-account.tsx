import { Component, h, Prop, State } from '@stencil/core'
import chevronDown from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg'
interface user {
  userName: string,
  expired: string,
  isNearExpired: boolean,
  activeInfo: string,
  isMembership: boolean,
  updateMembership: string
}

@Component({
  tag: 'kompas-header-account',
  styleUrl: 'kompas-header-account.css',
  shadow: true,
})

export class KompasHeaderAccount {

  /**
   * PROPS
   */

  /**
   * Cart Url
   */
  @Prop() cartUrl: string

  /**
   * Logout Url
   */
  @Prop() logoutUrl: string

  /**
   * Manage Account Url
   */
  @Prop() manageAccountUrl: string

  /**
   * Total Notification Count
   */
  @Prop() notificationTotal: number = 0

  /**
   * Notification Url
   */
  @Prop() notificationUrl: string

  /**
   * Orders Url
   */
  @Prop() ordersUrl: string

  /**
  * Read Later Url
  */
  @Prop() readLaterUrl: string

  /**
   * Value consist of User Data
   */
  @Prop() userData!: any

  /**
   * Value to Add spacing on top of sidebar (will convert to pixel)
   */
  @Prop() sidebarTopSpacing: number = 0

  /**
   * Subscription Url
   */
  @Prop() subscriptionUrl: string

  @Prop() totalGracePeriod: number

  /**
   * STATES
   */

  /**
   * Indicator to show account sidebar
   */
  @State() isShowSidebar: boolean = false;

  /**
   * Variable to store formatted user data
   */
  formattedUserData: user

  /**
   * Get First Character of the username
   * @returns string
   */
  getInitialUserName = () => {
    if(!this.formattedUserData?.userName.length) return false

    return this.formattedUserData.userName.charAt(0)
  }

  /**
   * Function to toggle Sidebar
   */
  toggleSidebar = () => {
    this.isShowSidebar = !this.isShowSidebar
  }

  /**
   * Header account activator
   */
  private account () {


    /**
     * notification indicator, show indicator when notificaion total is not empty
     */
    const notificationIndicator = () => {
      if(!this.notificationTotal) return
      return (
        <div class="header-account--notification-indicator"></div>
      )
    }

    /**
     * membership icon element, show if isMebership has truthy value
     */
    const membershipIcon = () => {
      if(!this.formattedUserData?.isMembership) return

      return (
        <div>
          <img class="header-account--membership-icon h-2.5 w-2.5" src="https://cdn-www.kompas.id/global-header/crown-royal-blue-60.svg" alt="membership-crown-icon"/>
        </div>
      )
    }

    return (
      <a onClick={() => this.toggleSidebar()} class="cursor-pointer">
        <div class="flex flex-row items-center self-center">
          { !this.getInitialUserName() ?
            <div class="bg-grey-300 rounded-full h-6 w-6 animate-pulse"></div>
            :
            <div class="flex bg-grey-100 rounded-full h-6 w-6 items-center justify-center relative">
              <span class="capitalize text-xxs text-blue-600 font-bold">{this.getInitialUserName()}</span>
              {notificationIndicator()}
              {membershipIcon()}
            </div>
          }
          <div class={`ml-3 icon-xs icon-white chevron-icon ${this.isShowSidebar ? 'chevron-up' : ''}`} innerHTML={chevronDown}></div>
        </div>
      </a>
    )
  }

  /**
   * Header Account Sidebar wrapper
   */
  private accountSidebar = () => {
    return (
      <nav class="w-screen fixed right-0 top-0 bottom-0" onClick={() => this.toggleSidebar()}>
        <div class="bg-grey-100 h-screen overflow-y-auto pb-20 pt-0 shadow-lg w-76 z-index-max ml-auto" style={{ marginTop: `${this.sidebarTopSpacing}px` }} onClick={(ev) => ev.stopPropagation()}>
          <kompas-header-account-profile
            user-initial-name={this.getInitialUserName()}
            userData={this.formattedUserData}
            subscription-url={this.subscriptionUrl}
            total-grace-period={this.totalGracePeriod}
          />
          <div class="pl-4 pr-3 py-4">
            <kompas-header-account-menu
              cart-url={this.cartUrl}
              manage-account-url={this.manageAccountUrl}
              logout-url={this.logoutUrl}
              notification-url={this.notificationUrl}
              notification-total={this.notificationTotal}
              orders-url={this.ordersUrl}
              read-later-url={this.readLaterUrl}
            />
            <kompas-header-account-help-center/>
          </div>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <div>
        {this.account()}
        {this.isShowSidebar ? this.accountSidebar() : ''}
      </div>
    );
  }

  componentWillRender() {
    /**
     * Format User Data if Props is string Type
     * If this component will implement on vanilla JS.
     * Usually to sent attribute that non primitive (Obj / Array) need to stringify first
     */
    if (this.userData) {
      this.formattedUserData = JSON.parse(this.userData)
    }
  }
}
