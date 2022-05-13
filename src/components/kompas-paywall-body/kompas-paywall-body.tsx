import { Component, h, Prop, State } from '@stencil/core'
import check from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg'
import star from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/star.svg'
import arrowLeft from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/arrow-left.svg'
import { Product, Packages, PaymentImage, PaywallProduct } from '../kompas-paywall/types'
@Component({
  tag: 'kompas-paywall-body',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})

export class KompasPaywallBody {

  @Prop() slug: string = ""
  @Prop() isLogin: boolean = false
  @Prop() type: 'epaper' | 'reguler' = 'reguler'
  @Prop() paywallData: PaywallProduct | undefined = undefined
  @Prop() userGuid: string = ''
  @Prop() subscriptionStatus: string = ''
  @State() isExtensionsOpened: boolean = false


  private primaryPackages = (product: Product): void => (
    <div class="flex flex-wrap justify-between items-center bg-white rounded md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-2.5 md:mt-4 border border-yellow-400 relative">
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
        <div class="icon-yellow-100 icon-sm md:icon-base mt-0.5 ml-1 absolute" innerHTML={star}></div>
      </div>
    </div>
  )

  private secondaryPackages = (product: Product): void => (
    <div class="flex  flex-wrap justify-between bg-white py-3 px-4 rounded md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-3 md:mt-4">
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

  private helpDesk = (): void => (
    <div class="py-2.5 text-white self-center text-xs md:text-sm">
      Mengalami masalah? Hubungi <button onClick={() => this.redirectToHelpdesk()} class="font-bold underline">
        Layanan Pelanggan.
      </button>
    </div>
  )

  private authRegister = (): void => (
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
  )
  private userAction = (isLogin: boolean, type: 'epaper' | 'reguler'): void => (
    <div class="flex h-20 bg-blue-600 w-full justify-evenly rounded-b mt-6 md:mt-8 relative">
      {isLogin || (type !== 'epaper') ? this.helpDesk() : this.authRegister()}
    </div >
  )

  private topNavigator = (): void => (
    <div class="flex lg:hidden items-center w-full pb-4 ">
      <div class=" icon-lg icon-white mr-3.5 md:mr-5 " innerHTML={arrowLeft}></div>
      <button onClick={() => this.redirectToPrevUrl()} class="text-xs md:text-lg text-white">
        Kembali
      </button>
    </div>
  )

  private headerSection = (type: 'epaper' | 'reguler'): void => (
    <div class="flex w-full items-center">
      {type === 'epaper' ? <button onClick={() => this.redirectToPrevUrl()} class="hidden lg:flex icon-lg icon-blue-600 pl-4 " innerHTML={arrowLeft} /> : ''}
      <h4 class="text-base md:text-xl text-center font-bold font-serif tracking-wide md:tracking-normal w-full">Langganan untuk Lanjut Membaca</h4>
    </div>
  )

  private descriptionSection = (data: Array<string>): void => (
    <div class=" flex flex-col items-center">
      <div class="flex flex-col space-y-2 mt-2.5 md:mt-3">
        {data.map((item) => (
          <div class="flex items-center">
            <div class="icon-xs icon-green-500" innerHTML={check}></div>
            <h6 class="text-xs md:text-base ml-0.5 md:ml-1">{item}</h6>
          </div>
        ))}
      </div>
    </div>
  )

  private packagesSection = (data: Packages): void => (
    <div class="flex flex-col w-full items-center mt-8 lg:mt-2 px-2 ">
      <h6 class="text-sm md:text-base font-bold"> {data.title} </h6>
      {data.memberships.map((item) => (item.isHighlight ? this.primaryPackages(item) : this.secondaryPackages(item)))}
    </div>
  )

  private paymentDesktopSection = (data: Array<PaymentImage>): void => (
    <div class="hidden md:flex w-full md:max-w-xs lg:max-w-md items-center justify-evenly flex-wrap">
      {data.map((item) => (<img class="object-cover w-16 h-9" src={item.link} alt={`${item.name}-logo-payment`} />))}
    </div>
  )

  private paymentMobileSection = (data: Array<PaymentImage>): void => (
    <div class="grid md:hidden items-center grid-flow-col grid-cols-auto grid-rows-1 gap-4 mt-4 mx-4">
      {data.map((item) => (<img class="" src={item.link} alt={`${item.name}-logo-payment`} />))}
      <button onClick={() => this.paymentExtensionHandler()} class="text-xs md:text-sm text-blue-600 font-bold" >+9 lainnya </button>
    </div>
  )

  private paymentMobileExtension = (data: Array<PaymentImage>) => (
    <div class="w-full bottom-0 max-w-xs mb-1 ml-8 md:hidden absolute px-4">
      <div class="bg-white border-white w-full rounded p-3 max-w-xs">
        <svg
          class="right-0 text-white h-4 mr-10 -mt-7 border-white z-0 transform rotate-180 absolute"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
        >
          <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
        <div class="grid place-items-center items-center grid-flow-row grid-cols-5 grid-rows-2  gap-y-4">
          {data.map((item) => (
            <img class="object-cover" src={item.link} alt={`${item.name}-logo-payment`} />
          ))}
        </div>
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
    const loginHost: string = 'https://account.kompas.id/login'
    const nextParams: string = encodeURIComponent(window.location.href)
    const directUrlRegister: string = `${loginHost}?next=${nextParams}`
    window.location.href = directUrlRegister
  }
  private redirectToHelpdesk = (): void => {
    window.open("https://api.whatsapp.com/send/?phone=6281290050800&text=Halo,%20saya%20perlu%20informasi%20mengenai%20kompas.id")
  }
  private redirectToCheckout = (url: string): void => {
    const originHost: string = encodeURIComponent(window.location.href)
    const directUrlCheckout: string = url + originHost
    window.open(directUrlCheckout)
  }
  private redirectToSubscriber = (): void => {
    this.sendDataLayer()
    window.open("https://www.kompas.id/berlangganan")
  }
  private redirectToPrevUrl = (): void => {
    window.history.back()
  }
  private paymentExtensionHandler = (): void => {
    this.isExtensionsOpened = !this.isExtensionsOpened
  }

  private sendDataLayer = (): void => {
    window.dataLayer.push({
      event: 'halamanBerlanggananClick',
      subscriptionStatus: this.subscriptionStatus,
      GUID: this.userGuid,
      interface: this.deviceType
    });
  }

  get deviceType() {
    if (window.innerWidth <= 768) {
      return 'Mobile'
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      return 'Tab'
    } else {
      return 'Desktop'
    }
  }

  render() {
    console.log('props', window.location)
    return (
      <div class={this.type === 'epaper' ? 'bg-transparent wrapper-body' : 'bg-white wrapper-body'}>
        <div class="flex flex-col  justify-center items-center w-full max-w-screen-sm px-4 md:px-0 my-5 relative">
          {this.type === 'epaper' ? this.topNavigator() : ''}
          <div class="flex w-full flex-col items-center justify-center bg-blue-100 rounded-t pt-6 md:pt-8 relative">
            {this.headerSection(this.type)}
            {this.descriptionSection(this.paywallData.informations.description)}
            {this.packagesSection(this.paywallData.packages)}
            {this.informationPackages()}
            {this.separatorLine()}
            {this.paymentDesktopSection(this.paywallData.payment.desktop)}
            {this.paymentMobileSection(this.paywallData.payment.mobile)}
            {this.userAction(this.isLogin, this.type)}
          </div>
          {this.isExtensionsOpened ? (this.paymentMobileExtension(this.paywallData.payment.ekstension)) : ''}
        </div>
      </div>
    );
  }

}
