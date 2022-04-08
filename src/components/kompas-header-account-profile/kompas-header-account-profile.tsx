import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'kompas-header-account-profile',
  styleUrl: '../kompas-header-account/kompas-header-account.css',
  shadow: true,
})

export class KompasHeaderAccountProfile {

  /**
   * User Initial Name
   */
  @Prop() userInitialName: string
  
  /**
   * User Data
   */
  @Prop() userData!: any

  render() {
    /**
     * Skeleton Loading when data is not ready yet
     */
    const skeletonLoading = (
      <div>
        <div class="flex flex-row mb-5 items-center gap-4 leading-none">
          <div class="bg-grey-300 py-5 rounded-full h-16 w-16 animate-pulse"></div>
          <div class="flex flex-col text-left w-40 gap-y-2">
            <div class="h-3 rounded-sm w-full bg-grey-300 animate-pulse"></div>
            <div class="h-3 rounded-sm w-full bg-grey-300 animate-pulse"></div>
            <div class="h-3 rounded-sm w-full bg-grey-300 animate-pulse"></div>
          </div>
        </div>
        <div>
          <div class="h-6 rounded-sm w-full bg-grey-300 animate-pulse"></div>
        </div>
      </div>
    )

    /**
     * Profile Content
     */
    const profileContent = () => {
      /**
       * Expired Button Element
       */
      const subscribeButton = () => {
        if(!this.userData?.updateMembership) return
        const handleSubscribe = () => {
          window.location.href = 'https://www.kompas.id/berlangganan'
        }

        return (
          <div class="mt-5 w-full">
            <button onClick={()=> handleSubscribe()} class="w-full font-sans rounded-lg px-4 py-3 my-2 h-10 flex justify-center items-center bg-green-500 text-grey-100 font-bold text-base focus:outline-none">{ this.userData?.updateMembership }</button>
          </div>
        )
      }

      /**
       * expired Info Element
       */
      const expiredInfo = () => {
        const isNearExpire = this.userData?.expired?.includes('Berakhir')
        const expiredTextColor = isNearExpire ? `text-orange-400` : `text-grey-500`
        
        return (
          <p class={`capitalize font-bold text-sm pb-1 ${expiredTextColor}`}>{ this.userData?.expired }</p>
        ) 
      }

      /**
       * membership icon element, show if isMebership has truthy value
       */
      const membershipIcon = () => {
        if(!this.userData?.isMembership) return

        return (
          <div>
            <img class="header-account--membership-icon" src="https://d3w4qaq4xm1ncv.cloudfront.net/global-header/crown-blue-10.svg" alt="membership-crown-icon"/>
          </div>
        )
      }
      
      return (
        <div class="flex flex-col items-start leading-none">
          <div class="flex lex-row items-center gap-4">
            <div class="flex bg-brand-1 flex-shrink-0 p-5 rounded-full h-16 w-16 items-center justify-center relative">
              <span class="capitalize text-2xl text-grey-100 font-bold">{ this.userInitialName }</span>
              {membershipIcon()}
            </div>

            <div class="flex flex-col text-left">
              <p class="capitalize font-bold text-base pb-1 text-blue-600">{ this.userData?.userName }</p>
              <p class="capitalize pb-1 text-sm">{ this.userData?.activeInfo }</p>
              { expiredInfo() }
            </div>
          </div>

          {/* subscribe button element  */}
          {subscribeButton()}
        </div>
      )
    }

    return (
      <div class="border-b border-grey-300 flex flex-shrink-0 flex-col bg-blue-100 p-4">
        { 
          !this.userData ? skeletonLoading : profileContent()
        }
      </div>
    );
  }

}
