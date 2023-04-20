import { Component, h, Prop, State } from '@stencil/core'
import { PaywallProduct } from './types'
@Component({
  tag: 'kompas-paywall',
  styleUrl: 'kompas-paywall.css',
  shadow: true,
})

export class KompasPaywall {
  /**
    * Props
  */
  /**
    * prop slug untuk menghandle slug
    * prop isLogin untuk menghandle apakah user sudah login atau belum
    * prop type untuk menghandle tipe epaper
    * prop paywallData untuk menghandle data paywall
    * prop userGuid untuk menghandle user Guid
    * prop subscriptionStatus untuk menghandle status subscription user
    * prop countdownArticle untuk menghandle count artikel
    * prop swgEnable untuk menghandle swg apakah di aktifkan atau tidak
    * prop paywall_location = The location where user encounter the paywall
    * prop paywall_subscription_package = The name of the subscription package viewed by user
    * prop paywall_subscription_id = The ID of the subscription package viewed by user
    * prop paywall_subscription_price = The price of the subscriprtion package viewed by user
    * prop paywall_position = The position of ther subscription package viewed by user
    * prop tracker_page_type = Type of the page
    * prop tracker_content_id = ID of article (slug)
    * prop tracker_content_type = Whether it's free article or paid article
    * prop tracker_content_title = The title of article
    * prop tracker_content_category = The category of the content
    * prop tracker_user_type = Type of user based on their subscription
    * prop tracker_subscription_status = Status of their subscription
    * prop tracker_page_domain = Page Domain
    * prop tracker_metered_wall_type = The type of Metered Wall
    * prop tracker_metered_wall_balance = The balance of their metered wall
    * prop tracker_epaper_edition = The edition of epaper viewed by user
  */

  @State() paywallData: PaywallProduct | undefined = undefined // add interface type
  @State() isExtensionsOpened: boolean = false

  @Prop() isLogin: boolean = false
  @Prop() countdownArticle: number = 0
  @Prop() type: 'epaper' | 'reguler' = 'reguler'
  @Prop() isWithHeader: boolean = false
  @Prop() textHeader: string = ''
  @Prop() userGuid: string = ''
  @Prop() subscriptionStatus: string = ''
  @Prop() swgEnable: boolean = false
  @Prop() paywall_location: string = ''
  @Prop() paywall_subscription_package: string = ''
  @Prop() paywall_subscription_id: number = 0
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
  @Prop() tracker_epaper_edition: string = ''

  async componentWillRender() {
    try {
      // const result = await fetch('https://kompasid-production-content.s3.ap-southeast-1.amazonaws.com/paywall/paywall.json', {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // }).then((res => res.json()))

      const mockResult: PaywallProduct = {
        informations: {
          title: 'Langganan untuk Lanjut Membaca',
          description: [
            "Akses tak terbatas Kompas.id (web & app)",
            "Berita digital tanpa iklan pop-up",
            "30 arsip terbaru ePaper Kompas",
            "Artikel  Opini eksklusif",
          ],
          register: {
            img: 'https://www.kompas.id/img/backgrounds/ilustrasi-banner-registration.png',
            title: 'Ingin Membaca Artikel Ini Secara Utuh?',
            subtitle: 'Daftar akun untuk membaca 5 artikel premium secara gratis ',
            label: 'Daftar Sekarang '
          },
          meterred: {
            maxQuota: 5,
            label: 'Langganan',
            maxQuotaMessage: 'Akses artikel gratis Anda bulan ini sudah habis.',
            url: 'https://kompas.id/berlangganan'
          }
        },
        packages: {
          title: "Sekali bayar, tanpa perpanjang otomatis",
          memberships: [
            {
              title: "Kompas Digital Premium 12 Bulan (Hemat 40%)",
              percentage: 40,
              price: 360000,
              discountPrice: 600000,
              periode: "1 Tahun",
              isHighlight: true,
              url: 'https://checkoutv2.kompas.id/kdp?productId=9802032&referrer='

            }, {
              title: "Kompas Digital Premium 1 Bulan",
              percentage: 0,
              discountPrice: 0,
              price: 50000,
              periode: "1 Bulan",
              isHighlight: false,
              url: "https://checkoutv2.kompas.id/kdp?productId=9802035&referrer=",

            }
          ]
        },
        payment: {
          desktop: [
            { name: "gopay", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/gopay.svg" },
            { name: "ovo", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/ovo.svg" },
            { name: "mastercard", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/mastercard.svg" },
            { name: "bri", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bri.svg" },
            { name: "bcaklikpay", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bca-klik-pay.svg" },
            { name: "indomaret", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/indomaret.svg" },
            { name: "jcb", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/jcb.svg" },
            { name: "dana", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/dana.svg" },
            { name: "visa", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/visa.svg" },
            { name: "mandiri", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/mandiri.svg" },
            { name: "bca", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bca.svg" },
            { name: "bni", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bni.svg" },
            { name: "akulaku", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/akulaku.svg" }
          ],
          mobile: [
            { name: "gopay", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/gopay.svg" },
            { name: "ovo", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/ovo.svg" },
            { name: "visa", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/visa.svg" },
            { name: "mastercard", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/mastercard.svg" },
          ],
          ekstension: [
            { name: "dana", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/dana.svg" },
            { name: "mandiri", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/mandiri.svg" },
            { name: "bri", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bri.svg" },
            { name: "bcaklikpay", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bca-klik-pay.svg" },
            { name: "akulaku", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/akulaku.svg" },
            { name: "bni", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bni.svg" },
            { name: "indomaret", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/indomaret.svg" },
            { name: "bca", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/bca.svg" },
            { name: "jcb", link: "https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/jcb.svg" }
          ]
        }
      }

      this.paywallData = mockResult

    } catch (error) {
      throw new Error(`${error.status} Ada galat saat memproses permintaan.`)
    }
  }


  private transitionBox = (): void => (
    <div class="transparent-linear h-20 -mt-24 z-0 w-full " />
  )

  private renderEpaperPaywallSection = (): void => (
    <kompas-paywall-body paywall_location={this.paywall_location} paywall_subscription_package={this.paywall_subscription_package} paywall_subscription_id={this.paywall_subscription_id} paywall_subscription_price={this.paywall_subscription_price} paywall_position={this.paywall_position} tracker_page_type={this.tracker_page_type} tracker_content_id={this.tracker_content_id} tracker_content_title={this.tracker_content_title} tracker_content_category={this.tracker_content_category} tracker_user_type={this.tracker_user_type} tracker_subscription_status={this.tracker_subscription_status} tracker_page_domain={this.tracker_page_domain} tracker_metered_wall_type={this.tracker_metered_wall_type} tracker_epaper_edition={this.tracker_epaper_edition} tracker_metered_wall_balance={this.tracker_metered_wall_balance} swgEnable={this.swgEnable} tracker_content_type={this.tracker_content_type} isLogin={this.isLogin} type={this.type} countdownArticle={this.countdownArticle} paywallData={this.paywallData} subscriptionStatus={this.subscriptionStatus} userGuid={this.userGuid}></kompas-paywall-body>
  )

  private renderRegularPaywallSection = (): void => {
    const defaultHeaderText: string = this.paywallData.informations.meterred.maxQuotaMessage
    if (this.isWithHeader) {
      return (
        <div>
          {this.transitionBox()}
          <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
            <div class="flex flex-col w-full max-w-screen-md my-5">
              <kompas-paywall-information-header text={this.textHeader || defaultHeaderText}></kompas-paywall-information-header>
              <kompas-paywall-body paywall_location={this.paywall_location} paywall_subscription_package={this.paywall_subscription_package} paywall_subscription_id={this.paywall_subscription_id} paywall_subscription_price={this.paywall_subscription_price} paywall_position={this.paywall_position} tracker_page_type={this.tracker_page_type} tracker_content_id={this.tracker_content_id} tracker_content_title={this.tracker_content_title} tracker_content_category={this.tracker_content_category} tracker_user_type={this.tracker_user_type} tracker_subscription_status={this.tracker_subscription_status} tracker_page_domain={this.tracker_page_domain} tracker_metered_wall_type={this.tracker_metered_wall_type} tracker_epaper_edition={this.tracker_epaper_edition} tracker_metered_wall_balance={this.tracker_metered_wall_balance} tracker_content_type={this.tracker_content_type} swgEnable={this.swgEnable} isLogin={this.isLogin} type={this.type} countdownArticle={this.countdownArticle} paywallData={this.paywallData} subscriptionStatus={this.subscriptionStatus} userGuid={this.userGuid}></kompas-paywall-body>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {this.transitionBox()}
          <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
            <div class="flex flex-col w-full max-w-screen-md my-5">
              <kompas-paywall-banner-registration bannerData={this.paywallData.informations.register}></kompas-paywall-banner-registration>
              <kompas-paywall-body paywall_location={this.paywall_location} paywall_subscription_package={this.paywall_subscription_package} paywall_subscription_id={this.paywall_subscription_id} paywall_subscription_price={this.paywall_subscription_price} paywall_position={this.paywall_position} tracker_page_type={this.tracker_page_type} tracker_content_id={this.tracker_content_id} tracker_content_title={this.tracker_content_title} tracker_content_category={this.tracker_content_category} tracker_user_type={this.tracker_user_type} tracker_subscription_status={this.tracker_subscription_status} tracker_page_domain={this.tracker_page_domain} tracker_metered_wall_type={this.tracker_metered_wall_type} tracker_metered_wall_balance={this.tracker_metered_wall_balance} swgEnable={this.swgEnable} isLogin={this.isLogin} type={this.type} countdownArticle={this.countdownArticle} paywallData={this.paywallData} subscriptionStatus={this.subscriptionStatus} userGuid={this.userGuid}></kompas-paywall-body>
            </div>
          </div>
        </div>
      )
    }

  }

  private selectorTypePaywall = (type: 'epaper' | 'reguler') => {
    switch (type) {
      case 'epaper': return (this.renderEpaperPaywallSection())
      case 'reguler': return (this.renderRegularPaywallSection())
      default: return (this.renderRegularPaywallSection())
    }
  }

  render() {
    return (
      <div class="relative w-full">
        {this.selectorTypePaywall(this.type)}
      </div>
    )
  }
}
