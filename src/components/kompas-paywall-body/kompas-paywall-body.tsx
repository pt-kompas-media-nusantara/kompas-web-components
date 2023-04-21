import { Component, h, Prop, State } from '@stencil/core'
import check from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg'
import arrowLeft from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/arrow-left.svg'
import { Product, Packages, PaymentImage, PaywallProduct } from '../kompas-paywall/types'
import { deviceType } from '../../utils/deviceType'

@Component({
  tag: 'kompas-paywall-body',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})

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
  * prop page_type = Type of the page
  * prop content_id = ID of article (slug)
  * prop content_type = Whether it's free article or paid article
  * prop content_title = The title of article
  * prop content_category = The category of the content
  * prop user_type = Type of user based on their subscription
  * prop subscription_status = Status of their subscription
  * prop page_domain = Page Domain
  * prop metered_wall_type = The type of Metered Wall
  * prop metered_wall_balance = The balance of their metered wall
  * prop metered_wall_balance = The edition of epaper viewed by user
*/

export class KompasPaywallBody {
  @Prop() slug: string = ""
  @Prop() isLogin: boolean = false
  @Prop() type: 'epaper' | 'reguler' = 'reguler'
  @Prop() paywallData: PaywallProduct | undefined = undefined
  @Prop() userGuid: string = ''
  @Prop() subscriptionStatus: string = ''
  @Prop() countdownArticle: number = 0
  @Prop() swgEnable: boolean = false
  @Prop() paywall_location: string = ''
  @Prop() paywall_subscription_package: string = ''
  @Prop() paywall_subscription_id: number = 0
  @Prop() paywall_subscription_price: number = 0
  @Prop() paywall_position: string = ''
  @Prop() page_type: string = ''
  @Prop() content_id: string = ''
  @Prop() content_title: string = ''
  @Prop() content_category: string = ''
  @Prop() content_type: string = ''
  @Prop() user_type: string = ''
  @Prop() subscription_status: string = ''
  @Prop() page_domain: string = ''
  @Prop() metered_wall_type: string = ''
  @Prop() metered_wall_balance: number = 0
  @Prop() epaper_edition: string = ''
  @State() isExtensionsOpened: boolean = false
  @State() kompasAkunHost: string = 'https://akun.kompas.id'
  @State() kompasApigenHost: string = 'https://apigen.kompas.id'
  @State() kompasApiWcmHost: string = 'https://apiwcm.kompas.id'
  @State() kompasLoginHost: string = 'https://account.kompas.id/login'
  @State() selfHost: string = 'https://epaper.kompas.id'
  @State() swgPublisherName: string = 'Harian Kompas'
  @State() swgPublisherId: string = 'kompas.id'
  @State() swgProductId: string = 'kompas.id:kompas_digital_premium'
  @State() errorFlag: number = 0
  buttonElement!: HTMLButtonElement

  private primaryPackages = (product: Product): void => (
    <div class="flex flex-wrap justify-between items-center bg-white rounded md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-2.5 md:mt-4 border border-yellow-400 relative">
      <div class="flex flex-col py-3 px-4">
        <div class="flex flex-none items-center">
          <h5 class="text-base md:text-lg font-bold text-orange-400">
            {this.getRupiahFormat(product.price)}
          </h5>
          <h6 class="text-xs md:text-base font-bold pl-1">
            / {product.periode}
          </h6>
        </div>
        <div class="flex items-center">
            <p class="text-xs">
            hanya <span class="text-orange-400">Rp 30.000</span> / bulan
            </p>
        </div>
      </div>
      <button onClick={() => this.redirectToCheckout(product.url, 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 12', '9802032', 360000, 1)} class="h-auto bg-green-500 rounded mr-3" >
        <h6 class="text-xs md:text-base text-white font-bold py-2 px-4">
          Langganan
        </h6>
      </button >
      <div class="absolute -top-2 left-4">
        <div class="rounded bg-yellow-300 px-2 py-0.5 text-xs">
          <b>Harga Terbaik</b>
        </div>
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
      <button onClick={() => this.redirectToCheckout(product.url, 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 1', '9802035', 50000, 2)} class="h-auto bg-white border border-green-500 rounded" >
        <h6 class="text-xs md:text-base text-green-500 font-bold py-2 px-4">
          Langganan
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
      <button onClick={() => this.redirectToPrevUrl()} class="text-xs md:text-lg text-white flex flex-row">
      <div class="icon-lg icon-white mr-3.5 md:mr-5 pt-0.5" innerHTML={arrowLeft}></div>
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
    <div class="flex flex-row w-full justify-center">
      <div class="border-b-2 border-blue-200 w-1/4 my-4 flex justify-center" />
      <p class="px-4 pt-1">atau</p>
      <div class="border-b-2 border-blue-200 w-1/4 my-4 flex justify-center" />
    </div>
  )

  get redirectToLogin() {
    return `${this.kompasLoginHost}?next=${encodeURIComponent(this.selfHost + location.pathname)}`
  }
  private getRegisterToken = async (path: string, payload: any): Promise<string> => {
    return await fetch(`${this.kompasApigenHost}/v1/user/register/token/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((data: any) => {
        return data.result.token
      })
      .catch(error => {
        throw error
      })
  }
  private getUserToken = async (path: string, payload: any): Promise<string> => {
    return await fetch(`${this.kompasApigenHost}/v1/user/token/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: any) => {
        return data.result.token
      })
      .catch(error => {
        throw error
      })
  }
  private getSubscriptionToken = async (path: string, payload: any): Promise<string> => {
    return await fetch(`${this.kompasAkunHost}/api/subscription/login/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: any) => {
        this.errorFlag = 0
        return data.access_token
      })
      .catch(async error => {
        const errorCode = error.response.status
        if (errorCode === 500 && this.errorFlag < 5) {
          this.errorFlag++
          setTimeout(async () => {
            await this.getSubscriptionToken(path, payload)
          }, 2000)
        } else {
          this.errorFlag = 0
          throw error
        }
      })
  }
  private createSwG = async (payload: any, token: string) => {
    await fetch(`${this.kompasApiWcmHost}/v2/membership/swg/create`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .catch(error => {
        throw error
      })
  }
  private subscribeWithGoogleButton = (): any => {
    // @ts-ignore
    (self.SWG = self.SWG || []).push((subscriptions: any) => {
      // set entitlement
      subscriptions.setOnEntitlementsResponse(() => {
        // subscriptions attach button
        subscriptions.attachButton(this.buttonElement, { theme: 'light', lang: 'en' }, () => {
          subscriptions.showOffers({ isClosable: true })
          subscriptions.setOnLoginRequest(() => {
            window.location.href = this.redirectToLogin
          })
          subscriptions.setOnPaymentResponse(async (paymentResponse: any) => {
            const response = await paymentResponse
            const raw = JSON.parse(response.purchaseData.raw)
            const { productId, purchaseToken, packageName } = raw
            const email = response.userData.data.email

            const payload = { subscription_token: purchaseToken, products: productId, detail: 'test' }
            const userToken = await this.getUserToken('google', payload)
            if (userToken) {
              // login and update membership
              const accessToken = await this.getSubscriptionToken('google', { token: userToken })
              if (accessToken) {
                const payload = { email, package_name: packageName, product_id: productId, purchase_token: purchaseToken }
                await this.createSwG(payload, accessToken)
              }
            } else {
              // register and login the unknown user
              const payload = { subscription_token: purchaseToken, products: productId, detail: 'test' }
              const token = await this.getRegisterToken('google', payload)
              if (token) {
                const accessToken = await this.getSubscriptionToken('google', { token })
                const payload = { email, package_name: packageName, product_id: productId, purchase_token: purchaseToken }
                await this.createSwG(payload, accessToken)
              }
            }
            response.complete().then(() => {
              window.location.href = this.redirectToLogin
            })
          })
        })
      })
    })
  }
  private getRupiahFormat = (value: number): string => {
    const roundedValue = Math.round(value)
    return 'Rp ' + roundedValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  private redirectToRegister = (): void => {
    const loginHost: string = 'https://account.kompas.id/register'
    const nextParams: string = encodeURIComponent(window.location.href)
    const directUrlRegister: string = `${loginHost}?next=${nextParams}?status=sukses_login&status_login=login`
    window.location.href = directUrlRegister
  }
  private redirectToHelpdesk = (): void => {
    this.sendDataLayeronHelpDesk()
    window.open("https://api.whatsapp.com/send/?phone=6281290050800&text=Halo,%20saya%20perlu%20informasi%20mengenai%20kompas.id")
  }
  private redirectToCheckout = (url: string, name: string, id:string, price: number, position: number): void => {
    this.sendDataLayeronButtonBuyPackage(name, id, price, position)
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
      interface: deviceType()
    })
  }

  private sendDataLayeronPaywallBody = (): void => {
    const gtmParams: Record<string, any> = {
      event: 'paywall_viewed',
      impressions: [
        {
          paywall_location: this.paywall_location || 'Epaper Detail Page',
          paywall_subscription_package: 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 12',
          paywall_subscription_id: '9802032',
          paywall_subscription_price: 360000,
          paywall_position: '1',
          user_type: this.user_type,
          subscription_status: this.subscription_status,
          page_domain: this.page_domain,
          metered_wall_type: this.metered_wall_type || 'HP',
          metered_wall_balance: this.metered_wall_balance
        },
        {
          paywall_location: this.paywall_location || 'Epaper Detail Page',
          paywall_subscription_package: 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 1',
          paywall_subscription_id: '9802035',
          paywall_subscription_price: 50000,
          paywall_position: '2',
          user_type: this.user_type,
          subscription_status: this.subscription_status,
          page_domain: this.page_domain,
          metered_wall_type: this.metered_wall_type || 'HP',
          metered_wall_balance: this.metered_wall_balance
        }
      ]
    };
  
    if (this.type === 'epaper') {
      gtmParams.impressions[0]['epaper_edition'] = this.epaper_edition;
      gtmParams.impressions[1]['epaper_edition'] = this.epaper_edition;
    } else {
      gtmParams.impressions[0]['page_type'] = this.page_type;
      gtmParams.impressions[0]['content_id'] = this.content_id;
      gtmParams.impressions[0]['content_title'] = this.content_title;
      gtmParams.impressions[0]['content_category'] = this.content_category;
      gtmParams.impressions[0]['content_type'] = this.content_type;
  
      gtmParams.impressions[1]['page_type'] = this.page_type;
      gtmParams.impressions[1]['content_id'] = this.content_id;
      gtmParams.impressions[1]['content_title'] = this.content_title;
      gtmParams.impressions[1]['content_category'] = this.content_category;
      gtmParams.impressions[1]['content_type'] = this.content_type;
    }
  
    window.dataLayer.push(gtmParams);
  };
  

  private sendDataLayeronButtonBuyPackage = (name: string, id:string, price: number, position: number): void => {
    window.dataLayer.push({
      event: 'subscribe_button_clicked',
      paywall_location: this.paywall_location,
      paywall_subscription_package: name,
      paywall_subscription_id: id,
      paywall_subscription_price: price,
      paywall_position: position,
      page_type: this.page_type,
      content_id: this.content_id,
      content_title: this.content_title,
      content_category: this.content_category,
      epaper_edition: this.epaper_edition,
      content_type: this.content_type,
      user_type: this.user_type,
      subscription_status: this.subscription_status,
      page_domain: this.page_domain,
      metered_wall_type: this.metered_wall_type,
      metered_wall_balance: this.metered_wall_balance
    })
  }

  private sendDataLayeronHelpDesk = (): void => {
    window.dataLayer.push({
      event: 'helpOfferClick',
      userType: this.subscriptionStatus,
      GUID: this.userGuid,
      interface: deviceType()
    })
  }

  get listDataLayer() {
    if (this.isLogin) {
      if (this.countdownArticle > 5) {
        return 'login paywall'
      }
    } else {
      return 'non-login paywall'
    }
  }

  private jsonScript = (): any => {
    const jsonData = {
      '@context': 'https://schema.org',
      '@type': ['WebSite', 'WebPage'],
      'isAccessibleForFree': false,
      'url': this.selfHost + location.pathname,
      'name': this.swgPublisherName,
      'hasPart': {
        '@type': 'WebPageElement',
      },
      'isPartOf': {
        '@type': ['CreativeWork', 'Product'],
        'name': this.swgPublisherId,
        'productID': this.swgProductId
      }
    }
    const str = JSON.stringify(jsonData)
    const jsonScript = document.createElement('script')
    jsonScript.type = 'application/ld+json'
    jsonScript.text = str
    jsonScript.defer = true
    const jsonHead = document.querySelector("head")
    jsonHead.appendChild(jsonScript)
  }

  componentDidLoad () {
    if (this.swgEnable) {
      this.jsonScript()
      if(this.buttonElement){
        const head = document.querySelector("head")
        const script = document.createElement("script")
        script.src = "https://news.google.com/swg/js/v1/swg.js"
        script.defer = true
        script.onload  = this.subscribeWithGoogleButton()
        head.appendChild(script)
      } 
    }
  }

  render() {
    return (
        <div class={this.type === 'epaper' ? 'bg-transparent wrapper-body' : 'bg-white wrapper-body'}>
        <div class="flex flex-col  justify-center items-center w-full max-w-screen-sm px-4 md:px-0 my-5 relative">
          {this.type === 'epaper' ? this.topNavigator() : ''}
          <div class="flex w-full flex-col items-center justify-center bg-blue-100 rounded pt-6 md:pt-8 relative">
            {this.headerSection(this.type)}
            {this.descriptionSection(this.paywallData.informations.description)}
            {this.packagesSection(this.paywallData.packages)}
            {this.informationPackages()}
            {this.swgEnable && this.separatorLine()}
            {this.swgEnable && (
              <button
                class="border-2 bg-grey-100 border-grey-100 rounded-lg px-6 shadow-sm flex flex-row py-2 mt-1 mb-4"
                ref={el => (this.buttonElement = el as HTMLButtonElement)}
              >
                <p>Subscribe with</p>
                <img class="pl-2 object-scale-down w-20 pt-0.5" src="https://kompasid-production-www.s3.ap-southeast-1.amazonaws.com/paywall-asset/google.png"></img>
              </button>
            )}
            {this.paymentDesktopSection(this.paywallData.payment.desktop)}
            {this.paymentMobileSection(this.paywallData.payment.mobile)}
            {this.userAction(this.isLogin, this.type)}
            {this.sendDataLayeronPaywallBody()}
          </div>
          {this.isExtensionsOpened ? (this.paymentMobileExtension(this.paywallData.payment.ekstension)) : ''}
        </div>
      </div>
    )
  }
}
