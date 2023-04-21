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
   * prop paywall_location = The location where user encounter the paywall
   * prop paywall_subscription_package = The name of the subscription package viewed by user
   * prop paywall_subscription_id = The ID of the subscription package viewed by user
   * prop paywall_subscription_price = The price of the subscriprtion package viewed by user
   * prop paywall_position = The position of ther subscription package viewed by user
   * prop page_type = Type of the page
   * prop content_id = ID of article (slug)
   * prop content_type = Whether it's free article or paid article
   * prop content_title = The title of article
   * prop content_category = The category of the content
   * prop user_type = Type of user based on their subscription
   * prop subscription_status = Status of their subscription
   * prop page_domain = Page Domain
   * prop metered_wall_type = The type of Metered Wall
   * prop epaper_edition = The edition of epaper viewed by user
   * prop metered_wall_balance = The balance of their metered wall
   */
  @Prop() countdownArticle: number = 0
  @Prop() paywall_location: string = ''
  @Prop() paywall_subscription_package: string = ''
  @Prop() paywall_subscription_id: string = ''
  @Prop() paywall_subscription_price: number = 0
  @Prop() paywall_position: string = ''
  @Prop() page_type: string = ''
  @Prop() content_id: string = ''
  @Prop() content_title: string = ''
  @Prop() content_category: string = ''
  @Prop() content_type: string = ''
  @Prop() user_type: string = ''
  @Prop() subscription_status: string = ''
  @Prop() page_domain: string = ''
  @Prop() metered_wall_type: string = ''
  @Prop() metered_wall_balance: number = 0
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
      event: 'subscribe_button_clicked',
      paywall_location: this.paywall_location || 'Article Detail Page',
      paywall_subscription_package: this.paywall_subscription_package || '',
      paywall_subscription_id: this.paywall_subscription_id || '',
      paywall_subscription_price: this.paywall_subscription_price || 0,
      paywall_position: this.paywall_position || '',
      page_type: this.page_type,
      content_id: this.content_id,
      content_title: this.content_title,
      content_category: this.content_category,
      content_type: this.content_type,
      user_type: this.user_type || 'R',
      subscription_status: this.subscription_status,
      page_domain: this.page_domain || 'Kompas.id',
      metered_wall_type: this.metered_wall_type || 'MP',
      metered_wall_balance: this.maxQuota - this.countdownArticle
    })
  }

  private dataLayeronMeteredPaywall = (): void => {
    window.dataLayer.push({
      event: 'paywall_viewed',
      paywall_location: this.paywall_location || 'Article Detail Page',
      paywall_subscription_package: this.paywall_subscription_package || '',
      paywall_subscription_id: this.paywall_subscription_id || '',
      paywall_subscription_price: this.paywall_subscription_price || 0,
      paywall_position: this.paywall_position || '',
      page_type: this.page_type,
      content_id: this.content_id,
      content_title: this.content_title,
      content_category: this.content_category,
      content_type: this.content_type,
      user_type: this.user_type || 'R',
      subscription_status: this.subscription_status,
      page_domain: this.page_domain || 'Kompas.id',
      metered_wall_type: this.metered_wall_type || 'MP',
      metered_wall_balance: this.maxQuota - this.countdownArticle
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