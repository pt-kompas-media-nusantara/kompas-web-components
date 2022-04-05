import { Component, h, Prop, State } from '@stencil/core'
import check from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg'
import star from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/star.svg'
import arrowLeft from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/arrow-left.svg'

interface Product {
  title: string,
  percentage: number,
  price: number,
  discountPrice: number,
  periode: string,
  isHighlight: boolean,
  url: string,
}
@Component({
  tag: 'kompas-paywall',
  styleUrl: 'kompas-paywall.css',
  shadow: true,
})

export class KompasPaywall {

  @Prop() slug: string = ""
  @Prop() type: 'epaper' | 'reguler' | 'kompaspedia' = 'reguler'
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
          ]
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

  private primaryPackages = (product: Product): void => (
    <div class="flex justify-between items-center bg-white rounded md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-2.5 md:mt-4 border border-yellow-400 relative">
      <div class="flex flex-col py-3 ml-6 md:ml-8">
        <div class="flex flex-none items-center">
          <h5 class="text-base md:text-lg font-bold text-orange-400">
            {this.getRupiahFormat(product.price)}
          </h5>
          <h6 class="text-xs md:text-base font-bold pl-1">
            / {product.periode}
          </h6>
        </div>
        <div class="flex items-center">
          <p class="text-xs md:text-sm text-grey-400 line-through">
            {this.getRupiahFormat(product.discountPrice)}
          </p>
          <div class="rounded bg-red-100 ml-1 md:p-0.5">
            <p class="font-bold text-xs text-red-400">
              -{product.percentage}%
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => this.redirectToCheckout(product.url)} class="h-auto bg-green-500 rounded mr-3" >
        <h6 class="text-xs md:text-base text-white font-bold py-2 px-4">
          Beli Paket
        </h6>
      </button >
      <div class="absolute top-0 left-0">
        <div class="w-9 md:w-14 md:h-10 overflow-hidden  inline-block absolute">
          <div class="h-36 bg-yellow-400 rotate-45 md:rotate-55 transform origin-top-right relative" />
        </div>
        <div class="icon-yellow-100 icon-sm md:icon-base mt-0.5 ml-1 z-10 absolute" innerHTML={star}></div>
      </div>
    </div>
  )

  private secondaryPackages = (product: Product): void => (
    <div class="flex justify-between bg-white py-3 px-4 rounded md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-3 md:mt-4">
      <div class="flex items-center">
        <h5 class="text-base md:text-lg font-bold text-orange-400">
          {this.getRupiahFormat(product.price)}
        </h5>
        <h6 class=" text-xs md:text-base font-bold pl-1">
          / {product.periode}
        </h6>
      </div>
      <button onClick={() => this.redirectToCheckout(product.url)} class="h-auto bg-green-500 rounded" >
        <h6 class="text-xs md:text-base text-white font-bold py-2 px-4">
          Beli Paket
        </h6>
      </button>
    </div>
  )

  private userAction = (isLogin: boolean): void => (
    <div class="flex h-20 bg-blue-600 w-full justify-evenly rounded-b mt-6 md:mt-8 relative">
      {isLogin ? (
        <div class="py-2.5 text-white self-center text-xs md:text-sm">
          Mengalami masalah? Hubungi <button onClick={() => this.redirectToHelpdesk()} class="font-bold underline">
            Layanan Pelanggan.
          </button>
        </div>
      ) : (
        <div class="flex flex-row text-white py-2.5 space-x-8 self-center">
          <div class="flex flex-col">
            <b class="hidden md:block text-sm text-white">Sudah berlangganan Kompas Premium?</b>
            <b class="md:hidden text-xs text-white">Sudah berlangganan?</b>
            <p class="hidden md:block text-sm text-white">
              Masuk ke akun anda untuk lanjut baca.
            </p>
            <p class="text-xs md:hidden text-white">
              Masuk untuk lanjut baca.
            </p>
          </div>
          <button onClick={() => this.redirectToRegister()} class="h-auto bg-grey-100 rounded mr-3" >
            <p class="text-xs md:text-base text-blue-600 font-bold py-2 px-4">
              Masuk / Daftar
            </p>
          </button>
        </div>
      )}
    </div>
  )

  private topNavigator = (): void => (
    <div class="flex lg:hidden items-center w-full pb-4 ">
      <div class=" icon-lg icon-white mr-3.5 md:mr-5 " innerHTML={arrowLeft}></div>
      <button onClick={() => this.redirectToPrevUrl()} class="text-xs md:text-lg text-white">
        Kembali
      </button>
    </div>
  )

  private headerSection = (): void => (
    <div class="kompas-paywall-header">
      <button onClick={() => this.redirectToPrevUrl()} class="hidden lg:flex icon-lg icon-blue-600 pl-4 " innerHTML={arrowLeft}></button>
      <h4 class="text-base md:text-xl text-center font-bold font-serif tracking-wide md:tracking-normal w-full">
        Langganan untuk Lanjut Membaca
      </h4>
    </div>
  )

  private descriptionSection = (): void => (
    <div class=" flex flex-col items-center">
      <div class="flex flex-col space-y-2 mt-2.5 md:mt-3">
        {this.paywallData.informations.description.map((item) => (
          <div class="flex items-center">
            <div class="icon-xs icon-green-500" innerHTML={check}></div>
            <h6 class="text-xs md:text-base ml-0.5 md:ml-1">{item}</h6>
          </div>
        ))}
      </div>
    </div>
  )

  private packagesSection = (): void => {
    const packages = this.paywallData.packages.memberships
    return (<div class="flex flex-col w-full items-center mt-8 lg:mt-2 px-2 ">
      <h6 class="text-sm md:text-base font-bold"> {packages.title} </h6>
      {packages.map((item) => (
        item.isHighlight ? this.primaryPackages(item) : this.secondaryPackages(item)
      ))}
    </div>
    )
  }

  private paymentDesktopSection = (): void => (
    <div class="hidden md:flex w-full md:max-w-xs lg:max-w-md items-center justify-evenly flex-wrap">
      {this.paywallData.payment.desktop.map((item) => (
        <img class="object-cover w-16 h-9" src={item.link} alt={`${item.name}-logo-payment`} />
      ))}
    </div>
  )

  private paymentMobileSection = (): void => (
    <div class="flex md:hidden w-full max-w-sm items-center justify-evenly flex-wrap  mt-4">
      {this.paywallData.payment.mobile.map((item) => (
        <img class="object-cover w-16 h-9" src={item.link} alt={`${item.name}-logo-payment`} />
      ))}
      <button onClick={() => this.paymentExtensionHandler()} class="text-xs md:text-sm text-blue-600 font-bold" >
        +9 lainnya
      </button>
    </div>
  )

  private paymentMobileExtension = () => (
    <div class="bg-white border-white w-full rounded p-3 ">
      <svg
        class="right-0 text-white h-4 mr-12  -mt-7 border-white z-30  transform rotate-180 absolute"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
      <div class="flex md:hidden w-full max-w-sm items-center flex-wrap">
        {this.paywallData.payment.ekstension.map((item) => (
          <img class="object-cover w-14 h-7" src={item.link} alt={`${item.name}-logo-payment`} />
        ))}
      </div>
    </div>
  )

  private informationPackages = (): void => (
    <div class="mt-4 flex justify-center">
      <button onClick={() => this.redirectToSubscriber()} class="text-sm md:text-base font-bold underline text-blue-600" >
        Lihat Paket Lainnya
      </button>
    </div>
  )
  private separatorLine = (): void => (
    <div class="hidden border-b-2 border-blue-200 w-1/4 my-4 md:flex justify-center" />
  )

  private getRupiahFormat = (value: number): string => {
    const roundedValue = Math.round(value)
    return 'Rp ' + roundedValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  private redirectToRegister = (): void => {
    // add next params
    window.open("https://account.kompas.id/login?")
  }
  private redirectToHelpdesk = (): void => {
    window.open("https://api.whatsapp.com/send/?phone=6281290050800&text=Halo,%20saya%20perlu%20informasi%20mengenai%20kompas.id")
  }
  private redirectToCheckout = (url: string): void => {
    window.open(url)
  }
  private paymentExtensionHandler = (): void => {
    this.isExtensionsOpened = !this.isExtensionsOpened
  }
  private redirectToSubscriber = (): void => {
    window.open("https://www.kompas.id/berlangganan")
  }
  private redirectToPrevUrl = (): void => {
    window.history.back()
  }

  render() {
    return (
      <div class="flex justify-center mx-4">
        <div class="flex flex-col w-full max-w-screen-sm">
          {this.topNavigator()}
          <div class="flex w-full flex-col items-center justify-center bg-blue-100 rounded-t pt-6 md:pt-8 relative">
            {this.headerSection()}
            {this.descriptionSection()}
            {this.packagesSection()}
            {this.informationPackages()}
            {this.separatorLine()}
            {this.paymentDesktopSection()}
            {this.paymentMobileSection()}
            {this.userAction(false)}
            {this.isExtensionsOpened ?
              <div class="bottom-0 w-full max-w-xs mb-5 md:hidden z-10 px-2 absolute">
                {this.paymentMobileExtension()}
              </div> : ''
            }
          </div>
        </div>
      </div>
    );
  }

}
