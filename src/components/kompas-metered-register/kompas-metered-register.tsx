import { Component, h, State, Prop, Fragment, Host } from '@stencil/core';
import chevronUp from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg';

@Component({
  tag: 'kompas-metered-register',
  styleUrl: 'kompas-metered-register.css',
  shadow: true,
})
export class KompasMeteredRegister {
  /**
   * state
   */
  /**
   * state registerUrl untuk memberikan link kemana user akan dialihkan.
   */
  @State() registerUrl: string = 'https://account.kompas.cloud/register';
  @State() isShowBanner: boolean = true;
  @State() isExpandBanner: boolean = false;

  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0;

  /**
   * mengelola tampilan pada section metered paywall
   */
  private bannerContent(): void {
    if (!this.isExpandBanner) {
      return (
        <p class="text-base md:text-lg font-lora">
          Ini Adalah <b>Artikel Gratis Terakhir</b> Anda. <b>Daftar Akun untuk Terus Membaca.</b>
        </p>
      );
    } else {
      return (
        <Fragment>
          <div class="flex flex-col-reverse md:flex-row justify-center gap-8">
            <div class="text-center md:text-left md:w-1/2">
              <p class="text-lg md:text-2xl font-lora">
                Anda Sedang Membaca{' '}
                <b>
                  Artikel Premium <br />
                  Gratis Terakhir
                </b>{' '}
                dari Kompas.id
              </p>
              <p class="text-sm md:text-base my-3">
                Ayo daftar akun untuk akses ke beragam artikel dan fitur premium. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.
              </p>
              <div class="md:self-start">
                <button onClick={this.redirectToRegister} class="bg-green-500 p-2 w-full md:w-auto rounded-md font-bold text-grey-100 px-6 text-sm md:text-base">
                  Daftar Akun
                </button>
              </div>
            </div>
            <div class="flex justify-center">
              <img src="https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/paywall_ilustrasi3-03_1.png" class="h-40 w-40 md:w-full md:h-full">
                {' '}
              </img>
            </div>
          </div>
        </Fragment>
      );
    }
  }

  private bannerTemplate = (): void => {
    return (
      <Fragment>
        <div class="text-grey-600 text-sm md:text-lg self-center text-left ml-auto">{this.bannerContent()}</div>
      </Fragment>
    );
  };

  private redirectToRegister = (): void => {
    window.location.href = this.registerUrl;
  };

  private triggerExpandBanner = (): void => {
    this.isExpandBanner = !this.isExpandBanner;
  };

  componentDidLoad() {
    const getCountdown = this.countdownArticle;
    if (!getCountdown) {
      this.isShowBanner = false;
      return;
    }
  }

  render() {
    return (
      <Host>
        {this.isShowBanner ? (
          <div class="sticky bottom-0 w-full h-full">
            <div class={`w-full bg-blue-100 lg:px-0 bottom-0 ${this.isExpandBanner ? 'p-8' : 'p-4'}`}>
              <div class="flex max-w-7xl m-auto relative justify-center">
                <div class="flex flex-col">{this.bannerTemplate()}</div>
                <div class="absolute right-0 top-0">
                  <button onClick={this.triggerExpandBanner} class="bg--gray p-2 rounded-md ">
                    <div class="icon icon-brand-1" innerHTML={chevronUp}></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Host>
    );
  }
}
