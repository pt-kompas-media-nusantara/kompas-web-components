import { Component, h, State, Prop, Fragment, Host } from '@stencil/core';
import chevronUp from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg';
import { meteredRegisterContent } from './types';

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
  @State() registerUrl: string = 'https://account.kompas.id/register?loc=metered_register_wall';
  /**
   * state isShowBanner untuk memunculkan component.
   */
  @State() isShowBanner: boolean = true;
  /**
   * state isExpandBanner untuk menentukan apakah component sedang dalam mode expand.
   */
  @State() isExpandBanner: boolean = true;
  /**
   * state textTemplate untuk menyimpan template yang di berikan.
   */
  @State() textTemplate: meteredRegisterContent;

  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0;

  /**
   * prop defaultExpandBanner untuk menentukan keadaan awal komponen apakah dalam mode expand atau tidak.
   */
  @Prop() defaultExpandBanner: boolean = true;

  /**
   * Title of the page
   */
  @Prop() tracker_page_title: string;

  /**
   * Type of the page
   */
  @Prop() tracker_page_type: string;

  /**
   * Whether it's a free article or paid article (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_type: string;

  /**
   * The ID for the article (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_id: string;

  /**
   * The title of the article (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_title: string;

  /**
   * Name of the authors (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_authors: string;

  /**
   * Name of the editors (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_editors: string;

  /**
   * Tags inside the article (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_tags: string;

  /**
   * The published date (will only be sent if the user views article detail page)
   */
  @Prop() tracker_content_published_date: string;

  /**
   * The main category the content belongs to
   */
  @Prop() tracker_content_categories: string;

  /**
   * Type of user based on their subscription
   */
  @Prop() tracker_user_type: string;

  /**
   * Status of their subscription
   */
  @Prop() tracker_subscription_status: string;

  /**
   * The type of Metered Wall
   */
  @Prop() tracker_metered_wall_type: string;

  /**
   * The balance of their metered wall
   */
  @Prop() tracker_metered_wall_balance: number = 0;

  /**
   * Page Domain
   */
  @Prop() tracker_page_domain: string;

  /**
   * Page Domain
   */
  @Prop() next_param: string;

  /**
   * Url promo
   */
  @Prop() cta_url: string;

  /**
   * Button text promo
   */
  @Prop() cta_text: string;

  /**
   * menentukan template yang akan di render
   */
  private setTemplate(prop: string, mode: string = 'default'): string {
    let template = '';

    if (this.countdownArticle > 1) {
      template = this.textTemplate[mode]?.[prop] || '';
    } else {
      template = this.textTemplate[mode]?.lastArticle?.[prop] || '';
    }
    return template;
  }

  /**
   * mengelola tampilan pada section metered register
   */
  private bannerContent(): void {
    if (!this.isExpandBanner) {
      return (
        <Fragment>
          <div class="text-base md:text-lg font-lora mb-3 mt-1 md:mb-0 md:mt-0 pr-14 md:px-0" innerHTML={this.setTemplate('title')}></div>
          <div class="md:self-center">{this.registerButtonTemplate()}</div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div class="flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-8">
            <div class="flex flex-col justify-evenly text-center md:text-left md:w-5/12 gap-4 md:gap-2">
              <p class="text-lg md:text-2xl font-lora" innerHTML={this.setTemplate('title', 'expand')}></p>
              <p class="text-sm md:text-base" innerHTML={this.setTemplate('description', 'expand')}></p>
              <div class="md:self-start">{this.registerButtonTemplate()}</div>
            </div>
            <div class="flex justify-center md:max-w-[200px] md:max-h-[220px] md:my-auto">
              <img src="https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/paywall_ilustrasi3-03_1.png" class="h-40 w-40 md:w-full md:h-full" />
            </div>
          </div>
        </Fragment>
      );
    }
  }

  /**
   * template button register button atau checkout promo
   */
  private registerButtonTemplate = (): void => {
    return (
      // kondisi cta_url
      <div>
        {!this.textTemplate.ctaUrl ? (
          // kalau cta_url kosong
          <button onClick={this.redirectToRegister} class="bg-green-500 p-1.5 w-full md:w-auto rounded-md font-bold text-grey-100 px-5 text-sm md:text-base">
            Daftar Akun
          </button>
        ) : (
          // kalau cta_url ada isi
          <button onClick={this.redirectToCTAUrl} class="bg-green-500 p-1.5 w-full md:w-auto rounded-md font-bold text-grey-100 px-5 text-sm md:text-base">
            {this.textTemplate.ctaText}
          </button>
        )}
      </div>
    );
  };

  private bannerTemplate = (): void => {
    return (
      <Fragment>
        <div class="block lg:flex items-center justify-center gap-8 text-grey-600 text-sm md:text-lg self-center text-left ml-auto">{this.bannerContent()}</div>
      </Fragment>
    );
  };

    /**
   * mengarahkan ke page checkout promo
   */
  private redirectToCTAUrl = (): void => {
    const params = new URLSearchParams(window.location.href);
    const newUrl: any = new URL(this.textTemplate.ctaUrl);
    const referrer = new URLSearchParams(this.textTemplate.ctaUrl).get('referrer');
    this.pushToDataLayer('mrw_clicked');
    if (!referrer) {
      newUrl.searchParams.append('referrer=', params);
      window.location.href = newUrl.toString();
    } else {
      // Get the current value of the referrer parameter
      const currentReferrerValue = newUrl.searchParams.get('referrer');

      // Construct the new value by appending the new referrer value with a comma to the old referrer value
      const updatedReferrerValue = `${params},${currentReferrerValue}`;

      // Update the referrer parameter with the new value
      newUrl.searchParams.set('referrer', updatedReferrerValue);

      window.location.href = newUrl.toString();
    }
  }

  /**
   * mengarahkan ke page checkout promo
   */
  private redirectToRegister = (): void => {
    this.pushToDataLayer('mrw_clicked');
    const newUrl: any = new URL(decodeURIComponent(this.registerUrl));
    if (this.next_param) newUrl.searchParams.append('next', decodeURIComponent(this.next_param));
    window.location.href = newUrl.toString();
  };

  /**
   * toggle isExpandBanner flag
   */
  private triggerExpandBanner = (): void => {
    this.isExpandBanner = !this.isExpandBanner;
    !this.isExpandBanner && this.pushToDataLayer('mrw_closed');
  };

  /**
   * mengirim event ke datalayer
   */
  private pushToDataLayer = (eventName: string): void => {
    window.dataLayer.push({
      event: eventName,
      page_title: this.tracker_page_title,
      page_type: this.tracker_page_type,
      content_type: this.tracker_content_type,
      content_id: this.tracker_content_id,
      content_title: this.tracker_content_title,
      content_authors: this.tracker_content_authors,
      content_editors: this.tracker_content_editors,
      content_tags: this.tracker_content_tags,
      content_published_date: this.tracker_content_published_date,
      content_categories: this.tracker_content_categories,
      user_type: this.tracker_user_type || 'G',
      subscription_status: this.tracker_subscription_status || '',
      metered_wall_type: this.tracker_metered_wall_type || 'MRW',
      metered_wall_balance: this.tracker_metered_wall_balance,
      page_domain: this.tracker_page_domain || 'Kompas.id',
    });
  };

  async componentWillLoad() {
    // parse content props
    const req = await fetch(`https://d3w4qaq4xm1ncv.cloudfront.net/assets/register_wall.json`);

    if (req.status !== 200) {
      throw new Error(`${req.status} Ada galat saat memproses permintaan.`);
    }

    /**
     * fetch() mendapatkan respons 200
     */
    this.textTemplate = await req.json();
    const getCountdown = this.countdownArticle;
    if (!getCountdown) {
      this.isShowBanner = false;
      return;
    } else {
      this.isExpandBanner = this.defaultExpandBanner;
    }
  }

  componentDidLoad() {
    this.isShowBanner && this.pushToDataLayer('mrw_viewed');
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
                  <button onClick={this.triggerExpandBanner} class="bg-blue-200 p-2.5 rounded-md">
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
