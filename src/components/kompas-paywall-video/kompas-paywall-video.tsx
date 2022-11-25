import { Component, Fragment, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-video',
  styleUrl: 'kompas-paywall-video.css',
  shadow: true,
})

export class KompasPaywallVideo {

  @Prop() isLogin: boolean = false
  @State() loginUrl: string = 'https://account.kompas.id/login'
  @State() subscriptionUrl: string = 'https://www.kompas.id/berlangganan'
  @State() registerUrl: string = 'https://account.kompas.id/register'

  private defaultComponent = (): void => (
    <Fragment>
      {this.sendDataLayeronNonLogin()}
      <h5 class="leading-6 text-white text-center text-base md:text-xl max-w-xl">
        Langganan untuk akses ke seluruh konten premium, mulai dari <span class="font-bold">Rp50.000/bulan.</span>
      </h5>
      <div class="flex justify-between mt-4 space-x-3">
        <button onClick={() => this.redirectToLogin('Masuk')} class="rounded text-sm text-white px-4 py-1.5 ring-1 ring-grey-100">
          Masuk
        </button>
        <a href={this.subscriptionUrl} target="_blank" class="bg-green-500 rounded px-4 py-1.5 text-sm text-white font-bold">
          Berlangganan
        </a>
      </div>
      <p class="text-center text-sm leading-4 text-white mt-6 max-w-xs md:max-w-none">
        Dapatkan 5 konten premium gratis tiap bulan! <a onClick={() => this.redirectToLogin('Coba Sekarang')} target="_blank" class="text-blue-300 font-bold cursor-pointer">Coba Sekarang</a>
      </p>
    </Fragment>
  )

  private isLoginComponent = (): void => (
    <Fragment>
      {this.sendDataLayeronLogin()}
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
      interface: this.deviceType
    })
  }

  private sendDataLayeronLogin = (): void => {
    window.dataLayer.push({
      event: 'productOfferImpression',
      isLogin: this.isLogin,
      interface: this.deviceType
    })
  }

  private sendDataLayeronButtonLogin = (triggerClick: string): void => {
    window.dataLayer.push({
      event: 'registrationOfferClick',
      interface: this.deviceType,
      buttonClicked: triggerClick
    })
  }

  private sendDataLayeronButtonBerlangganan = (): void => {
    window.dataLayer.push({
      event: 'productClick',
      isLogin: this.isLogin,
      interface: this.deviceType
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

  get deviceType() {
    if (window.innerWidth <= 768) {
      return 'Mobile'
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      return 'Tab'
    } else {
      return 'Desktop'
    }
  }

  render() {
    return (
      <div class="radius absolute z-20 bg-black bg-opacity-50 p-4 top-0 bottom-0 flex flex-col w-full h-full justify-center items-center">
        {this.isLogin ? this.isLoginComponent() : this.defaultComponent()}
      </div>
    )
  }
}
