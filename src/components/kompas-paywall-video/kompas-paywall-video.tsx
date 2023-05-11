import { Component, Fragment, h, Prop, State } from '@stencil/core'
import { deviceType } from '../../utils/deviceType'

@Component({
  tag: 'kompas-paywall-video',
  styleUrl: 'kompas-paywall-video.css',
  shadow: true,
})
export class KompasPaywallVideo {
  /**
   * Props
   */
  /**
   * prop isLogin untuk menghandle apakah user sudah login atau belum
   * prop paywall_location = The location where user encounter the paywall
   * prop paywall_subscription_package = The name of the subscription package viewed by user
   * prop paywall_subscription_id = The ID of the subscription package viewed by user
   * prop paywall_subscription_price = The price of the subscriprtion package viewed by user
   * prop paywall_position = The position of the subscription package viewed by user
   * prop page_type = Type of the page
   * prop content_id = ID of article (slug)
   * prop content_type = Whether it's free article or paid article
   * prop content_title = The title of article
   * prop content_category = The category of the content
   * prop user_type = Type of user based on their subscription
   * prop subscription_status = Status of their subscription
   * prop page_domain = Page Domain
   * prop metered_wall_type = The type of Metered Wall
   * prop metered_wall_balance = The balance of their metered wall
  */

  @Prop() isLogin: boolean = false
  @Prop() paywall_location: string = ''
  @Prop() paywall_subscription_package: string = ''
  @Prop() paywall_subscription_id: string = ''
  @Prop() paywall_subscription_price: number = 0
  @Prop() paywall_position: number = 0
  @Prop() tracker_page_type: string = ''
  @Prop() tracker_content_id: string = ''
  @Prop() tracker_content_title: string = ''
  @Prop() tracker_content_category: string = ''
  @Prop() tracker_content_type: string = ''
  @Prop() tracker_user_type: string = ''
  @Prop() tracker_subscription_status: string = ''
  @Prop() tracker_page_domain: string = ''
  @Prop() tracker_metered_wall_type: string = ''
  @Prop() tracker_metered_wall_balance: number = 0
  @State() loginUrl: string = 'https://account.kompas.id/login'
  @State() subscriptionUrl: string = 'https://www.kompas.id/berlangganan'
  @State() registerUrl: string = 'https://account.kompas.id/register'

  private defaultComponent = (): void => (
    <Fragment>
      {this.sendDataLayeronNonLogin()}
      {this.sendDataLayeronBerlangganan()}
      <h5 class="leading-6 text-white text-center text-base md:text-xl max-w-xl">
        Langganan untuk akses ke seluruh konten premium, mulai dari <span class="font-bold">Rp50.000/bulan.</span>
      </h5>
      <div class="flex justify-between mt-4 space-x-3">
        <button onClick={() => this.redirectToLogin('Masuk')} class="rounded text-sm text-white px-4 py-1.5 ring-1 ring-grey-100">
          Masuk
        </button>
        <button onClick={() => this.redirectToBerlangganan()} class="bg-green-500 rounded px-4 py-1.5 text-sm text-white font-bold">
          Berlangganan
        </button>
      </div>
      <p class="text-center text-sm leading-4 text-white mt-6 max-w-xs md:max-w-none">
        Dapatkan 5 konten premium gratis tiap bulan!{' '}
        <a onClick={() => this.redirectToLogin('Coba Sekarang')} target="_blank" class="text-blue-300 font-bold cursor-pointer">
          Coba Sekarang
        </a>
      </p>
    </Fragment>
  )

  private isLoginComponent = (): void => (
    <Fragment>
      {this.sendDataLayeronBerlangganan()}
      <h5 class="leading-6 text-white text-center text-base md:text-xl max-w-2xl">
        Akses konten premium Anda bulan ini sudah habis. Aktifkan langganan untuk akses tanpa batas, mulai dari <span class="font-bold">Rp50.000/bulan.</span>
      </h5>
      <div class="flex justify-between mt-4">
        <button onClick={() => this.redirectToBerlangganan()} class="bg-green-500 rounded px-4 py-1.5 text-sm text-white font-bold">
          Berlangganan
        </button>
      </div>
    </Fragment>
  )

  private sendDataLayeronNonLogin = (): void => {
    window.dataLayer.push({
      event: 'registrationOfferimppression',
      interface: deviceType(),
    })
  }

  private sendDataLayeronBerlangganan = (): void => {
    window.dataLayer.push({
      event: 'paywall_viewed',
      paywall_location: this.paywall_location,
      paywall_subscription_package: this.paywall_subscription_package,
      paywall_subscription_id: this.paywall_subscription_id,
      paywall_subscription_price: this.paywall_subscription_price,
      paywall_position: this.paywall_position,
      user_type: this.tracker_user_type,
      subscription_status: this.tracker_subscription_status,
      page_domain: this.tracker_page_domain || 'Kompas.id',
      metered_wall_type: this.tracker_metered_wall_type || 'HP',
      metered_wall_balance: this.tracker_metered_wall_balance,
    })
  }

  private sendDataLayeronButtonLogin = (triggerClick: string): void => {
    window.dataLayer.push({
      event: 'registrationOfferClick',
      interface: deviceType(),
      buttonClicked: triggerClick,
    })
  }

  private sendDataLayeronButtonBerlangganan = (): void => {
    window.dataLayer.push({
      event: 'subscribe_button_clicked',
      paywall_location: this.paywall_location,
      paywall_subscription_package: this.paywall_subscription_package,
      paywall_subscription_id: this.paywall_subscription_id,
      paywall_subscription_price: this.paywall_subscription_price,
      paywall_position: this.paywall_position,
      page_type: this.tracker_page_type,
      content_id: this.tracker_content_id,
      content_title: this.tracker_content_title,
      content_categories: this.tracker_content_category,
      content_type: this.tracker_content_type,
      user_type: this.tracker_user_type,
      subscription_status: this.tracker_subscription_status,
      page_domain: this.tracker_page_domain || 'Kompas.id',
      metered_wall_type: this.tracker_metered_wall_type || 'HP',
      metered_wall_balance: this.tracker_metered_wall_balance,
    })
  }

  private redirectToLogin = (triggerClick: string): void => {
    this.sendDataLayeronButtonLogin(triggerClick)
    window.open(this.loginUrl, '_blank')
  }

  private redirectToBerlangganan = (): void => {
    this.sendDataLayeronButtonBerlangganan()
    window.open(this.subscriptionUrl, '_blank')
  }

  render() {
    return (
      <div class="radius absolute z-20 bg-black bg-opacity-50 p-4 top-0 bottom-0 flex flex-col w-full h-full justify-center items-center">
        {this.isLogin ? this.isLoginComponent() : this.defaultComponent()}
      </div>
    )
  }
}
