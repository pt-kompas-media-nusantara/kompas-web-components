import { Component, h, Prop, State } from '@stencil/core';
import chevronDown from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg'

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
   * Value to Add spasing on top of sidebar (will convert to pixel)
   */
  @Prop() sidebarTopSpacing: number = 50

  /**
   * STATES
   */

  /**
   * Indicator to show account sidebar
   */
  @State() isShowDropdown: boolean = false;

  private account () {
    const toggleDropdown = () => {
      this.isShowDropdown = !this.isShowDropdown
    }

    return (
      <a onClick={() => toggleDropdown()} class="cursor-pointer">
        <div class="flex flex-row items-center self-center">
          <div class="flex bg-grey-100 rounded-full h-6 w-6 items-center justify-center relative">
            <span class="capitalize text-xs text-blue-600 font-bold"></span>
          </div>
          <div class="ml-3 icon-sm icon-white" innerHTML={chevronDown}></div>
        </div>
      </a>
    )
  }

  private accountSidebar = () => {
    return ( 
     <div class="sidebar" style={{ marginTop: `${this.sidebarTopSpacing}px` }}>

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

}
