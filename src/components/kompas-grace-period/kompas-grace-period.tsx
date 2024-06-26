/**
 * Komponen yang menampilkan grace period
 * command purge css
 */

import { Component, h, State, Prop } from '@stencil/core';
import { deviceType } from '../../utils/deviceType';

@Component({
  tag: 'kompas-grace-period',
  styleUrl: '../kompas-grace-period/kompas-grace-period.css',
  shadow: true,
})
export class KompasGracePeriod {
  /**
   * state
   */
  /**
   * state maxGracePeriod untuk menghandle maksimal hari grace period.
   */
  @State() maxGracePeriod: number = 7;
  /**
   * state updateSubscription untuk memberikan link user akan dialihkan ke halaman berlangganan.
   */
  @State() updateSubscription: string = 'https://checkoutv2.kompas.id';
  /**
   * Props
   */
  /**
   * prop totalGracePeriod untuk menghitung berapa hari grace period user.
   */
  @Prop() totalGracePeriod: number = 0;
  /**
   * prop isColoumn untuk merubah flex-column pada header account profile
   */
  @Prop() isColoumn: boolean = false;
  /**
   * prop isShowButton untuk nampilin button perbarui langganan
   */
  @Prop() isShowButton: boolean = false;
  /**
   * prop subscriptionId untuk renewal subs.
   */
  @Prop() subscriptionId: string;

  /**
   * TEMPLATING
   */
  /**
   * mengelola tampilan pada section grace period
   */
  private getCountdownGracePeriod(): void {
    const totalGracePeriod = this.totalGracePeriod;
    const maxGracePeriod = this.maxGracePeriod;
    if (totalGracePeriod === 7) {
      return (
        <p>
          Anda dalam <b class="text-orange-500"> hari terakhir</b> masa tenggang langganan. Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
        </p>
      );
    } else {
      return (
        <p>
          Masa tenggang langganan Anda tersisa <b class="text-orange-500">{maxGracePeriod - totalGracePeriod + 1} hari lagi</b>. Segera perbarui paket langganan untuk tetap
          mengakses konten premium tanpa batas.
        </p>
      );
    }
  }

  private redirectToBerlangganan = (): void => {
    this.dataLayeronPerbaruiLanggananButton();
    window.location.href = this.updateSubscription + `/kdp?productId=${this.subscriptionId}`;
  };

  private dataLayeronPerbaruiLanggananButton = (): void => {
    window.dataLayer.push({
      event: 'gracePeriodClick',
      interface: deviceType(),
      dayLeft: this.maxGracePeriod - this.totalGracePeriod,
      urlName: window.location.href,
    });
  };

  private dataLayeronGracePeriod = (): void => {
    window.dataLayer.push({
      event: 'gracePeriodImpression',
      interface: deviceType(),
      dayLeft: this.maxGracePeriod - this.totalGracePeriod,
      urlName: window.location.href,
    });
  };

  private gracePeriodTemplate = (): void => (
    <div class={`${this.isColoumn ? 'rounded-lg' : 'md:flex-row lg:px-8'} flex flex-col w-full justify-end py-4 md:space-x-4 px-4 bottom-0 max-w-7xl mx-auto`}>
      <div class="text-grey-600 text-sm md:text-base self-center text-left">{this.getCountdownGracePeriod()}</div>
      {!this.isShowButton ? (
        <div class="flex self-center w-full md:w-1/2 justify-end pt-4 md:pt-0">
          <button onClick={this.redirectToBerlangganan} class="bg-green-500 p-2 px-5 rounded-md font-bold text-grey-100 text-sm md:text-base w-full md:w-auto ">
            Perbarui Langganan
          </button>
        </div>
      ) : null}
    </div>
  );

  componentDidLoad() {
    this.dataLayeronGracePeriod();
  }

  render() {
    return <div class="sticky bottom-0 w-full h-full bg-orange-100">{this.totalGracePeriod > 0 ? this.gracePeriodTemplate() : ''}</div>;
  }
}
