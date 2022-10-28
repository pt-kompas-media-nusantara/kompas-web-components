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
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @State() maxQuota: number = 5;
  /**
   * Props
   */
  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0
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

  private templateMeteredPaywall() {
    return (
      <div class="flex flex-row w-full bg-blue-100 py-4 justify-center space-x-4 px-4 lg:px-0 bottom-0">
        <div class="text-grey-600 text-sm md:text-lg self-center text-left">
          {this.getCountdownArticle()}
        </div>
        <div class="self-center">
          <button onClick={this.redirectToBerlangganan} class="bg-green-400 p-2 rounded-md font-bold text-grey-100 text-sm md:text-xl">Langganan</button>
        </div>
      </div>
    )
  }

  private redirectToBerlangganan = (): void => {
    this.dataLayeronLanggananButton()
    window.location.href = "https://www.kompas.id/berlangganan"
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
      event: 'meteredBannerImpression',
      usage: this.countdownArticle,
      articleLeft: this.maxQuota
    })
  }

  render() {
    return (
      <div class="sticky bottom-0 w-full h-full">
        {this.countdownArticle > 0 && this.countdownArticle <= this.maxQuota ? this.templateMeteredPaywall() : ''}
        {this.dataLayeronMeteredPaywall()}
      </div>
    )
  }
}