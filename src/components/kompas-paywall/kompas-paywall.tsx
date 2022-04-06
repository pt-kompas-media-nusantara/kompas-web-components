import { Component, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'kompas-paywall',
  styleUrl: 'kompas-paywall.css',
  shadow: true,
})

export class KompasPaywall {

  @Prop() slug: string = ""
  @Prop() isLogin: boolean = false
  @Prop() type: 'epaper' | 'reguler' | 'kompaspedia' = 'reguler'
  @Prop() isSubscribe: boolean = false
  @Prop() quota: number = 0
  @State() paywallData: any = {} // add interface type
  @State() isExtensionsOpened: boolean = false

  async componentWillRender() {
    try {
      const result = await fetch('https://kompasid-production-content.s3.ap-southeast-1.amazonaws.com/paywall/paywall.json', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res => res.json()))

      const mockResult = {
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
          meterredPaywall: {
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
              url: 'https://checkout.kompas.id/?product_id=9802032&'

            }, {
              title: "Kompas Digital Premium 1 Bulan",
              percentage: 0,
              discountPrice: 0,
              price: 50000,
              periode: "1 Bulan",
              isHighlight: false,
              url: "https://checkout.kompas.id/?product_id=9802035&",

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
    <kompas-paywall-body is-login={this.isLogin} type={this.type} paywallData={this.paywallData}></kompas-paywall-body>
  )

  private renderRegularPaywallSection = (): void => {
    const informationContent = this.paywallData.informations.meterredPaywall
    if (this.isSubscribe && (this.quota === informationContent.maxQuota)) {
      return (
        <div>
          {this.transitionBox()}
          <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
            <div class="flex flex-col w-full max-w-screen-md my-5">
              <kompas-paywall-information-header title={informationContent.maxQuotaMessage}></kompas-paywall-information-header>
              <kompas-paywall-body is-login={this.isLogin} type={this.type} paywallData={this.paywallData}></kompas-paywall-body>
            </div>
          </div>
        </div>
      )
    } else if (this.isSubscribe && (this.quota < informationContent.maxQuota)) {
      return (
        <div>
          <h1>metered paywall</h1>
        </div>
      )
    } else {
      return (
        <div>
          {this.transitionBox()}
          <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
            <div class="flex flex-col w-full max-w-screen-md my-5">
              <kompas-paywall-banner-registration bannerData={this.paywallData.informations.register}></kompas-paywall-banner-registration>
              <kompas-paywall-body is-login={this.isLogin} type={this.type} paywallData={this.paywallData}></kompas-paywall-body>
            </div>
          </div>
        </div>
      )
    }

  }

  private selectorTypePaywall = (type: 'epaper' | 'reguler' | 'kompaspedia') => {
    switch (type) {
      case 'epaper': return (this.renderEpaperPaywallSection())
      case 'reguler': return (this.renderRegularPaywallSection())
      case 'kompaspedia': return (this.renderEpaperPaywallSection())
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
