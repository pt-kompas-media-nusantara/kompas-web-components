/**
 * Komponen yang menampilkan paywall
 * command purge css
 */

import { Component, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-meter',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true
})

export class KompasPaywallMeter {
  /**
   * Props
   */
  /**
   * prop countdownArticle untuk menghandle sudah berapa artikel gratis yang user baca.
   */
  @Prop() countdownArticle: number = 0
  @Prop() isLogin: boolean = false
  @Prop() type: 'epaper' | 'reguler' = 'reguler'
  /**
   * State
   */
  @State() paywallData: any = undefined // add interface type
  /**
   * Mock API
   */
  async componentWillRender() {
    try {
      // const result = await fetch('https://kompasid-production-content.s3.ap-southeast-1.amazonaws.com/paywall/paywall.json', {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // }).then((res => res.json()))

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
              url: 'https://checkout.kompas.id/?product_id%3D9802032%26track_source%3Depaper-kompas%26track_medium%3Dpaywall2%26utm_campaign%3Dkonten_berbayar%26track_content%3D'

            }, {
              title: "Kompas Digital Premium 1 Bulan",
              percentage: 0,
              discountPrice: 0,
              price: 50000,
              periode: "1 Bulan",
              isHighlight: false,
              url: "https://checkout.kompas.id/?product_id%3D9802035%26track_source%3Depaper-kompas%26track_medium%3Dpaywall1%26utm_campaign%3Dkonten_berbayar%26track_content%3D",

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
  /**
   * TEMPLATING
   */
  /**
   * mengelola tampilan pada section metered paywall
   */
  private transitionBox = (): void => (
    <div class="transparent-linear h-20 -mt-24 z-0 w-full " />
  )

  private getCountdownArticle(): void {
    const getCountdown = this.countdownArticle
    if (getCountdown > 0 && getCountdown < 5) {
      return <p>Anda memiliki sisa <b>{this.countdownArticle} dari 5</b> artikel premium gratis bulan ini. Langganan untuk akses tanpa batas</p>
    } else {
      return <p>Anda sedang membaca <b>artikel gratis terakhir bulan ini.</b> Langganan untuk akses tanpa batas</p>
    }
  }

  private templateMeteredPaywall() {
    if (this.countdownArticle < 6) {
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
    } else {
      const informationContent = this.paywallData.informations.meterredPaywall
      return (
        <div>
          {this.transitionBox()}
          <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
            <div class="flex flex-col w-full max-w-screen-md my-5">
              <kompas-paywall-information-header content={informationContent.maxQuotaMessage}></kompas-paywall-information-header>
              <kompas-paywall-body is-login={this.isLogin} type={this.type} paywallData={this.paywallData}></kompas-paywall-body>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div class="sticky bottom-0 w-screen h-full">
        {this.isLogin ? this.templateMeteredPaywall() : ''}
      </div>
    )
  }
}