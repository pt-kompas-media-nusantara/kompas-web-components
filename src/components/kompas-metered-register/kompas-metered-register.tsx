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
   * mengelola tampilan pada section metered register
   */
  private bannerContent(): void {
    if (!this.isExpandBanner) {
      return (
        <Fragment>
          <div class="text-base md:text-lg font-lora mb-3 mt-1 md:mb-0 md:mt-0 pr-14 md:px-0">
            {this.countdownArticle > 1 ? (
              <b>Dukung Jurnalisme Berkualitas dengan Mendaftar Akun Kompas.id.</b>
            ) : (
              <span>
                Ini Adalah <b>Artikel Gratis Terakhir</b> Anda. <b>Daftar Akun untuk Terus Membaca.</b>
              </span>
            )}
          </div>
          <div class="md:self-center">{this.registerButtonTemplate()}</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div class="flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-8">
            <div class="flex flex-col justify-evenly text-center md:text-left md:w-5/12 gap-4 md:gap-2">
              <p class="text-lg md:text-2xl font-lora">
                {this.countdownArticle > 1 ? (
                  <b>Tertarik dengan Artikel Ini? Daftar untuk Akses Artikel Menarik Lainnya</b>
                ) : (
                  <span>
                    Anda Sedang Membaca <b>Artikel Premium Gratis Terakhir</b> dari Kompas.id
                  </span>
                )}
              </p>
              <p class="text-sm md:text-base">
                {this.countdownArticle > 1 ? (
                  <Fragment>Dapatkan akses ke beragam konten dan fitur premium Kompas.id.</Fragment>
                ) : (
                  <Fragment>Ayo daftar akun untuk akses ke beragam artikel dan fitur premium.</Fragment>
                )}{' '}
                Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.
              </p>
              <div class="md:self-start">{this.registerButtonTemplate()}</div>
            </div>
            <div class="flex justify-center">
              <img src="https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/paywall_ilustrasi3-03_1.png" class="h-40 w-40 md:w-full md:h-full" />
            </div>
          </div>
        </Fragment>
      );
    }
  }

  /**
   * template button register
   */
  private registerButtonTemplate = (): void => {
    return (
      <button onClick={this.redirectToRegister} class="bg-green-500 p-1.5 w-full md:w-auto rounded-md font-bold text-grey-100 px-5 text-sm md:text-base">
        Daftar Akun
      </button>
    );
  };

  private bannerTemplate = (): void => {
    return (
      <Fragment>
        <div class="block lg:flex items-center justify-center gap-8 text-grey-600 text-sm md:text-lg self-center text-left ml-auto">{this.bannerContent()}</div>
      </Fragment>
    );
  };

  private redirectToRegister = (): void => {
    window.location.href = this.registerUrl;
  };

  private triggerExpandBanner = (): void => {
    this.isExpandBanner = !this.isExpandBanner;
  };

  componentWillLoad() {
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
            <div class={`w-full bg-blue-100 px-4 xl:px-0 bottom-0 py-4`}>
              <div class="flex lg:max-w-7xl m-auto justify-center relative">
                <div class="flex flex-col">{this.bannerTemplate()}</div>
                <div class="absolute right-0 top-0.5">
                  <button onClick={this.triggerExpandBanner} class="bg-blue-200 p-2.5 rounded-md ">
                    <div class={`icon icon-blue-600 ${this.isExpandBanner && 'chevron-down'}`} innerHTML={chevronUp}></div>
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
