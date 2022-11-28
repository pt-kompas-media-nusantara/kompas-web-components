/**
 * Komponen yang menampilkan grace period
 * command purge css
 */

import { Component, h, State, Prop } from '@stencil/core'
import { deviceType } from '../../utils/deviceType'

@Component({
  tag: 'kid-grace-period',
  styleUrl: '../kid-grace-period/kid-grace-period.css',
  shadow: true,
})
export class KidGracePeriod {
  /**
   * state
   */
  /**
   * state maxGracePeriod untuk menghandle maksimal hari grace period.
   */
  @State() maxGracePeriod: number = 7
  /**
   * state updateSubscription untuk memberikan link user akan dialihkan ke halaman berlangganan.
   */
  @State() updateSubscription: string = 'https://www.kompas.id/berlangganan'
  /**
   * Props
   */
  /**
   * prop totalGracePeriod untuk menghitung berapa hari grace period user.
   */
  @Prop() totalGracePeriod: number = 0
  /**
   * TEMPLATING
   */
  /**
   * mengelola tampilan pada section grace period
   */
  private getCountdownGracePeriod(): void {
    const totalGracePeriod = this.totalGracePeriod
    const maxGracePeriod = this.maxGracePeriod
    if (totalGracePeriod > 0 && totalGracePeriod < maxGracePeriod) {
      return (
        <p>
          Masa tenggang langganan Anda tersisa <b class="text-orange-500">{maxGracePeriod - totalGracePeriod} hari lagi</b>. Segera perbarui paket langganan untuk tetap mengakses
          konten premium tanpa batas.
        </p>
      )
    } else {
      return (
        <p>
          Anda dalam <b class="text-orange-500">hari terakhir</b> masa tenggang langganan. Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
        </p>
      )
    }
  }

  private redirectToBerlangganan = (): void => {
    this.dataLayeronPerbaruiLanggananButton()
    window.location.href = this.updateSubscription
  }

  private dataLayeronPerbaruiLanggananButton = (): void => {
    window.dataLayer.push({
      event: 'gracePeriodClick',
      interface: deviceType(),
      dayLeft: this.maxGracePeriod - this.totalGracePeriod,
    })
  }

  private dataLayeronGracePeriod = (): void => {
    window.dataLayer.push({
      event: 'gracePeriodImpression',
      interface: deviceType(),
      dayLeft: this.maxGracePeriod - this.totalGracePeriod,
      urlName: window.location.href
    })
  }

  private gracePeriodTemplate = (): void => (
    <div class="flex flex-col md:flex-row w-full bg-orange-100 justify-end py-4 md:space-x-4 px-4 lg:px-20 bottom-0">
      <div class="text-grey-600 text-sm md:text-base self-center text-left">{this.getCountdownGracePeriod()}</div>
      <div class="flex self-center w-full md:w-1/2 justify-end pt-4 md:pt-0">
        <button onClick={this.redirectToBerlangganan} class="bg-green-400 p-2 rounded-md font-bold text-grey-100 text-sm md:text-base w-full md:w-auto">
          Perbarui Langganan
        </button>
      </div>
    </div>
  )

  componentDidLoad() {
    this.dataLayeronGracePeriod()
  }

  render() {
    return (
    <div class="sticky bottom-0 w-full h-full">
      {this.totalGracePeriod > 0 ? this.gracePeriodTemplate() : ''}
    </div>
    )
  }
}
