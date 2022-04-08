import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-banner-registration',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})
export class KompasPaywallBannerRegistration {

  @Prop() bannerData: any = {}

  private redirectToRegister = (): void => {
    // add next params
    window.open("https://account.kompas.id/login?")
  }

  render() {
    return (
      <div class="flex flex-col items-center my-5">
        <div class="flex flex-col md:flex-row justify-between items-center w-full">
          <div class="flex flex-col md:flex-row items-center w-full">
            <img class="object-cover w-20 h-20" src={this.bannerData.img} alt="information-register-img" />
            <div class="flex flex-col justify-start md:ml-6 my-4">
              <h5 class="text-center md:text-left text-base md:text-xl font-serif font-bold">{this.bannerData.title}</h5>
              <h6 class="text-center md:text-left">{this.bannerData.subtitle}</h6>
            </div>
          </div>
          <button onClick={() => this.redirectToRegister()} class="w-40 md:w-52 h-auto bg-brand-1 rounded" >
            <h6 class="text-base text-white font-bold py-2 px-4">
              {this.bannerData.label}
            </h6>
          </button>
        </div>
        <div class="border-b-2 border-grey-200 w-32 md:w-40 my-6" />
        <div>
          <h6>Sudah punya akun? <button onClick={() => this.redirectToRegister()} class="text-blue-600 font-bold underline">Silakan Masuk</button></h6>
        </div>
      </div>
    )
  }
}
