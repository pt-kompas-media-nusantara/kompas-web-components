import { Component, h, Prop, State } from '@stencil/core';
import chevronDown from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg'
import chevronUp from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg'

interface user {
  userName: string
  expired: string
  activeInfo: string
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
   * Logout Url
   */
  @Prop() logoutUrl: string

  /**
   * Total Notification Count
   */
  @Prop() notificationTotal: number = 0

  /**
   * Value consist of User Data
   */
  @Prop() userData: any

  /**
   * Value to Add spacing on top of sidebar (will convert to pixel)
   */
  @Prop() sidebarTopSpacing: number = 0
  
  /**
   * STATES
   */

  /**
   * Indicator to show account sidebar
   */
  @State() isShowDropdown: boolean = false;

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
   * Header account activator
   */
  private account () {
    /**
     * Function to toggle Sidebar
     */
    const toggleDropdown = () => {
      this.isShowDropdown = !this.isShowDropdown
    }


    /**
     * notification indicator, show indicator when notificaion total is not empty
     */
    const notificationIndicator = () => {
      if(!this.notificationTotal) return
      return (
        <div class="header-account--notification-indicator"></div>
      )
    }

    return (
      <a onClick={() => toggleDropdown()} class="cursor-pointer">
        <div class="flex flex-row items-center self-center">
          { !this.getInitialUserName() ? 
            <div class="bg-grey-300 rounded-full h-6 w-6 animate-pulse"></div>
            :
            <div class="flex bg-grey-100 rounded-full h-6 w-6 items-center justify-center relative">
              <span class="capitalize text-xs text-blue-600 font-bold">{this.getInitialUserName()}</span>
              {notificationIndicator()}
            </div>
          }
          <div class="ml-3 icon-sm icon-white" innerHTML={this.isShowDropdown ? chevronUp : chevronDown}></div>
        </div>
      </a>
    )
  }

  /**
   * Header Account Sidebar wrapper
   */
  private accountSidebar = () => {
    return ( 
      <div class="header-account-sidebar" style={{ marginTop: `${this.sidebarTopSpacing}px` }}>
        <kompas-header-account-profile user-initial-name={this.getInitialUserName()} userData={this.formattedUserData}/>
        <kompas-header-account-menu logout-url={this.logoutUrl} notification-total={this.notificationTotal}/>
        <kompas-header-account-help-center/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.account()}
        {this.isShowDropdown ? this.accountSidebar() : ''}
      </div>
    );
  }

  componentWillRender() {
    /**
     * Format User Data if Props is string Type
     * If this component will implement on vanilla JS. 
     * Usually to sent attribute that non primitive (Obj / Array) need to stringify first
     */
    this.formattedUserData = typeof this.userData === 'string' ? JSON.parse(this.userData) : this.userData
  }
}
