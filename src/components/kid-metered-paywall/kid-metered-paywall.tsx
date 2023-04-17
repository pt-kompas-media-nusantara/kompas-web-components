/**
 * Komponen yang menampilkan paywall
 * command purge css
 */

import { Component, h, State,Prop } from '@stencil/core'

@Component({
  tag: 'kid-metered-paywall',
  styleUrl: '../kid-metered-paywall/kid-metered-paywall.css',
  shadow: true
})

export class KidMeteredPaywall {
  /**
   * state
   */
  /**
   * state maxQuota untuk menghandle maksimal artikel yang user bisa baca.
   */
  @State() maxQuota: number = 5
    /**
   * state subscriptionUrl untuk memberikan link kemana user akan dialihkan.
   */
  @State() subscriptionUrl: string = "https://www.kompas.id/berlangganan"
  /**
   * Props
   */
  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0
  @Prop() paywall_location: string = ''
  @Prop() paywall_subscription_package: string = ''
  @Prop() paywall_subscription_id: number = 0
  @Prop() paywall_subscription_price: number = 0
  @Prop() paywall_position: number = 0
  @Prop() tracker_page_type: string = ''
  @Prop() tracker_content_id: string = ''
  @Prop() tracker_content_title: string = ''
  @Prop() tracker_content_category: string = ''
  @Prop() tracker_user_type: string = ''
  @Prop() tracker_subscription_status: string = ''
  @Prop() tracker_page_domain: string = ''
  @Prop() tracker_metered_wall_type: string = ''
  @Prop() tracker_metered_wall_balance: number = 0
  /**
   * TEMPLATING
   */
  /**
   * mengelola tampilan pada section metered paywall
   */
  private getCountdownArticle(): void {
    const getCountdown = this.countdownArticle
    const maxQuota = this.maxQuota
    if (getCountdown > 0 && getCountdown < maxQuota) {
      return <p>Anda memiliki sisa <b>{maxQuota - getCountdown} dari {maxQuota}</b> artikel premium gratis bulan ini. Langganan untuk akses tanpa batas</p>
    } else {
      return <p>Anda sedang membaca <b>artikel gratis terakhir bulan ini.</b> Langganan untuk akses tanpa batas</p>
    }
  }

  private redirectToBerlangganan = (): void => {
    this.dataLayeronLanggananButton()
    window.location.href = this.subscriptionUrl
  }

  private dataLayeronLanggananButton = (): void => {
    window.dataLayer.push({
      event: 'meteredBannerBerlanggananClick',
      usage: this.countdownArticle,
      articleLeft: this.maxQuota
    })
  }

  private dataLayeronMeteredPaywall = (): void => {
    window.dataLayer.push({
      event: 'paywall_viewed',
      paywall_location: this.paywall_location,
      paywall_subscription_package: this.paywall_subscription_package,
      paywall_subscription_id: this.paywall_subscription_id,
      paywall_subscription_price: this.paywall_subscription_price,
      paywall_position: this.paywall_position,
      tracker_page_type: this.tracker_page_type,
      tracker_content_id: this.tracker_content_id,
      tracker_content_title: this.tracker_content_title,
      tracker_content_category: this.tracker_content_category,
      tracker_content_type: this.maxQuota,
      tracker_user_type: this.tracker_user_type,
      tracker_subscription_status: this.tracker_subscription_status,
      tracker_page_domain: this.tracker_page_domain,
      tracker_metered_wall_type: this.tracker_metered_wall_type,
      tracker_metered_wall_balance: this.tracker_metered_wall_balance,
    })
  }

  componentDidLoad() {
    this.dataLayeronMeteredPaywall()
  }

  render() {
    return (
      <div class="sticky bottom-0 w-full h-full">
        <div class="flex flex-row w-full bg-blue-100 py-4 justify-center space-x-4 px-4 lg:px-0 bottom-0">
          <div class="text-grey-600 text-sm md:text-lg self-center text-left">
            {this.getCountdownArticle()}
          </div>
          <div class="self-center">
            <button onClick={this.redirectToBerlangganan} class="bg-green-400 p-2 rounded-md font-bold text-grey-100 text-sm md:text-xl">
              Langganan
            </button>
          </div>
        </div>
      </div>
    )
  }
}