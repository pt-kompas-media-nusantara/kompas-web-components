/**
 * Komponen yang menampilkan paywall
 * command purge css
 */

import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'kid-metered-paywall',
  styleUrl: 'kid-metered-paywall.css',
  shadow: true
})

export class KidMeteredPaywall {
  /**
   * Props
   */
  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0
  /**
   * prop isLogin untuk menunjukkan apakah user sudah login atau belum.
   */
  @Prop() isLogin: boolean = true

  /**
   * States
   */

  /**
   * TEMPLATING
   */
  /**
   * mengelola tampilan pada section metered paywall
   */
  private templateMeteredPaywall() {
    return (
      <div class="flex flex-row w-full bg-blue-100 py-4 justify-center space-x-4 px-4 lg:px-0 bottom-0">
        <div class="text-grey-600 text-sm md:text-lg self-center text-left">
          {this.getCountdownArticle()}
        </div>
        <div class="self-center">
          <a href="https://www.kompas.id/berlangganan" class="bg-green-400 p-2 rounded-md font-bold text-grey-100 text-sm md:text-xl">Langganan</a>
        </div>
      </div>

    )
  }
  /** 
   * MEHTODS
   */
  private getCountdownArticle(): void {
    const getCountdown = this.countdownArticle
    if (getCountdown < 5) {
      return <p>Anda memiliki sisa <b> {this.countdownArticle} dari 5</b> artikel premium gratis bulan ini. Langganan untuk akses tanpa batas</p>
    } else {
      return <p>Anda sedang membaca artikel gratis terakhir bulan ini. Langganan untuk akses tanpa batas</p>
    }
  }

  render() {
    return (
      <div class=" sticky bottom-0 w-full h-full">
        {this.countdownArticle > 0 && this.countdownArticle < 6 && this.isLogin ? this.templateMeteredPaywall() : ''}
      </div>
    )
  }
}