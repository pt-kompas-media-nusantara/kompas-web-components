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
  * prop paywall_position = The position of the subscription package viewed by user
  * prop tracker_page_type = Type of the page
  * prop tracker_content_id = ID of article (slug)
  * prop tracker_content_type = Whether it's free article or paid article
  * prop tracker_content_title = The title of article
  * prop tracker_content_categories = The category of the content
  * prop tracker_user_type = Type of user based on their subscription
  * prop tracker_subscription_status = Status of their subscription
  * prop tracker_page_domain = Page Domain
  * prop tracker_metered_wall_type = The type of Metered Wall
  * prop tracker_metered_wall_balance = The balance of their metered wall
  * prop tracker_metered_wall_balance = The edition of epaper viewed by user
  * prop theme = The theme of the paywall component
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
  @Prop() paywall_position: number = 0
  @Prop() tracker_page_type: string = ''
  @Prop() tracker_content_id: string = ''
  @Prop() tracker_content_title: string = ''
  @Prop() tracker_content_categories: string = ''
  @Prop() tracker_content_type: string = ''
  @Prop() tracker_user_type: string = ''
  @Prop() tracker_subscription_status: string = ''
  @Prop() tracker_page_domain: string = ''
  @Prop() tracker_metered_wall_type: string = ''
  @Prop() tracker_metered_wall_balance: number = 0
  @Prop() tracker_epaper_edition: string = ''
  @Prop() theme: string = ''
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
    <div class={`flex flex-wrap justify-between items-center ${this.isDark ? 'bg-grey-600' : 'bg-white'} rounded-lg md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-2.5 md:mt-4 border border-yellow-400 relative`}>
      <div class="flex flex-col py-3 px-4">
        <div class="flex flex-none items-center">
          <h5 class="text-base md:text-lg font-bold text-orange-400">
            {this.getRupiahFormat(product.price)}
          </h5>
          <h6 class={`text-xs md:text-base ${this.isDark && 'text-dark-6'} font-bold pl-1`}>
            / {product.periode}
          </h6>
        </div>
        <div class="flex items-center">
            <p class={`text-xs ${this.isDark && 'text-dark-6'}`}>
            hanya <span class="text-orange-400">Rp 30.000</span> / bulan
            </p>
        </div>
      </div>
      <button onClick={() => this.redirectToCheckout(product.url, 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 12', '9802032', 360000, 1)} class={`h-auto ${this.isDark ? 'bg-green-300 border border-green-400' : 'bg-green-500'} rounded mr-4`} >
        <h6 class={`text-xs md:text-base ${this.isDark ? 'text-black' : 'text-white'} font-bold py-2 px-4`}>
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
    <div class={`flex  flex-wrap justify-between ${this.isDark ? 'bg-grey-600' : 'bg-white'} py-3 px-4 rounded-lg md:mx-0 w-full max-w-xs md:max-w-sm md:w-3/5 mt-3 md:mt-4`}>
      <div class="flex items-center">
        <h5 class="text-base md:text-lg font-bold text-orange-400">
          {this.getRupiahFormat(product.price)}
        </h5>
        <h6 class={`text-xs md:text-base ${this.isDark && 'text-dark-6'} font-bold pl-1`}>
          / {product.periode}
        </h6>
      </div>
      <button onClick={() => this.redirectToCheckout(product.url, 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 1', '9802035', 50000, 2)} class={`h-auto ${!this.isDark && 'bg-white'} border border-green-500 rounded`} >
        <h6 class={`text-xs md:text-base ${this.isDark ? 'text-green-300' : 'text-green-500'} font-bold py-2 px-4`}>
          Langganan
        </h6>
      </button>
    </div>
  )

  private helpDesk = (): void => (
    <div class={`${this.isDark ? 'text-dark-6' : 'text-white'} self-center text-xs md:text-sm`}>
      Butuh bantuan? Hubungi <button onClick={this.customerServiceClicked} class={`font-bold underline`}>
        Layanan Pelanggan.
      </button>
    </div>
  )

  private userAction = (): void => (
    <div class={`flex py-5 px-8 md:py-6 ${this.isDark ? 'bg-dark-4' : 'bg-blue-600'} w-full justify-evenly rounded-b-xl mt-6 md:mt-8 relative`}>
      {this.helpDesk()}
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

  private headerSection = (type: 'epaper' | 'reguler'): void => {
    const headerSectionText = type === 'epaper'? 'Akses ePaper Ini dengan Berlangganan' : 'Lanjut Baca Artikel Ini dengan Berlangganan'
    return (
      <div class="flex w-full items-center justify-center">
        {type === 'epaper' ? <button onClick={() => this.redirectToPrevUrl()} class="hidden lg:flex icon-lg icon-blue-600 pl-4 " innerHTML={arrowLeft} /> : ''}
        <h4 class={`text-base flex self-center md:block md:text-xl ${this.isDark && 'text-white'} text-center font-bold font-serif tracking-wide md:tracking-normal w-4/5 md:w-full`}>{headerSectionText}</h4>
        {type === 'epaper' ? <div class="w-10 hidden lg:flex" /> : ''}
      </div>
    )
  }

  private descriptionSection = (data: Array<string>): void => (
    <div class=" flex flex-col items-center">
      <div class="flex flex-col space-y-2 mt-2.5 md:mt-3">
        {data.map((item) => (
          <div class="flex items-center">
            <div class={`icon-xs ${this.isDark ? 'icon-green-400' : 'icon-green-500'}`} innerHTML={check}></div>
            <h6 class={`text-xs md:text-base ${this.isDark && 'text-white'} ml-0.5 md:ml-1`}>{item}</h6>
          </div>
        ))}
      </div>
    </div>
  )

  private packagesSection = (data: Packages): void => (
    <div class="flex flex-col w-full items-center mt-2 lg:mt-2 px-4">
      {data.memberships.map((item) => (item.isHighlight ? this.primaryPackages(item) : this.secondaryPackages(item)))}
    </div>
  )

  private paymentMobileExtension = (data: Array<PaymentImage>) => (
    <div class={`w-full ${this.isDark ? '-bottom-6' : 'bottom-0'} max-w-xs mb-1 ml-8 md:hidden absolute px-4`}>
      <div class={`w-full ${this.isDark ? 'bg-dark-6 border-dark-6' : 'bg-white border-white'} rounded p-3 max-w-xs`}>
        <svg
          class={`right-0 ${this.isDark ? 'text-dark-6 border-dark-6' : 'text-white border-white '} h-4 mr-10 -mt-7 z-0 transform rotate-180 absolute`}
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
      <button onClick={this.otherPackagesClicked} class={`text-sm md:text-base font-bold ${this.isDark ? 'text-blue-300' : 'text-blue-600'} underline`} >
        Lihat Paket Lainnya
      </button>
    </div>
  )
  private separatorLine = (): void => (
    <div class="flex flex-row w-full justify-center">
      <p class={`px-4 pt-1 ${this.isDark && 'text-dark-1'}`}>atau</p>
    </div>
  )

  private epaperRegistrationSection = (): void => (
    <div>
      <button onClick={() => this.redirectToLogin()} class={`text-sm md:text-base font-bold ${this.isDark ? 'text-blue-300' : 'text-blue-600'} underline`} >
        Masuk
      </button>
      <span class={`${this.isDark && 'text-white'}`}> jika sudah berlangganan.</span>
    </div>
  )

  private regulerRegistrationSection = (): void => (
    <div class="flex flex-col items-center justify-center">
      <div>
        <button onClick={() => this.redirectToRegister()} class={`text-sm md:text-base font-bold ${this.isDark ? 'text-blue-300' : 'text-blue-600'} underline`} >
          Daftar
        </button>
        <span class={`${this.isDark && 'text-white'}`}> untuk kuota artikel gratis</span>
      </div>
      <div>
        <span class={`${this.isDark && 'text-white'}`}>atau </span>
        <button onClick={() => this.redirectToLogin()} class={`text-sm md:text-base font-bold ${this.isDark ? 'text-blue-300' : 'text-blue-600'} underline`} >
          Masuk
        </button>
        <span class={`${this.isDark && 'text-white'}`}> jika sudah punya akun.</span>
      </div>
    </div>
  )

  private registrationSection = (type: 'epaper' | 'reguler'): void => (
    type === 'epaper'? this.epaperRegistrationSection() : this.regulerRegistrationSection()
  )

  get loginUrl() {
    return `${this.kompasLoginHost}?next=${encodeURIComponent(this.selfHost + location.pathname)}`
  }
  get isDark() {
    return this.theme === 'dark'
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
        subscriptions.attachButton(this.buttonElement, { theme: 'light', lang: 'en' }, async () => {
          subscriptions.showOffers({ isClosable: true })
          subscriptions.setOnLoginRequest(() => {
            window.location.href = this.loginUrl
          })
          const offers = await subscriptions.getOffers()
          subscriptions.setOnFlowStarted((callback: any) => {
            if (callback.flow === 'showOffers') {
              window.dataLayer.push(this.swgPackageViewedDataLayer(offers))
            } else if (callback.flow === 'subscribe') {
              const selectedOfferSkuId = callback.data.skuId
              const selectedOffer = offers.find((offer: any) => offer.skuId === selectedOfferSkuId)
              window.dataLayer.push(this.swgSubscribeButtonClicked(selectedOffer, offers.indexOf(selectedOffer)))
            }
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
              window.location.href = this.loginUrl
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
  private redirectToLogin = (): void => {
    window.location.href = this.loginUrl
  }
  private redirectToHelpdesk = (): void => {
    this.sendDataLayeronHelpDesk()
    window.open("https://api.whatsapp.com/send/?phone=6281290050800&text=Halo,%20saya%20perlu%20informasi%20mengenai%20kompas.id")
  }
  private redirectToCheckout = (url: string, name: string, id:string, price: number, position: number): void => {
    this.sendDataLayeronButtonBuyPackage(name, id, price, position)
    const originHost: string = encodeURIComponent(window.location.href)
    const source: string = this.type === 'epaper'? 'epaper' : ''
    const directUrlCheckout: string = `${url}${originHost}&source=${source}`
    window.open(directUrlCheckout)
  }
  private redirectToSubscriber = (): void => {
    this.sendDataLayer()
    window.open("https://www.kompas.id/berlangganan")
  }
  private redirectToPrevUrl = (): void => {
    window.history.back()
  }

  private otherPackagesClicked = () => {
    this.sendDataLayerOtherPackagesClicked()
    this.redirectToSubscriber()
  }

  private customerServiceClicked = () => {
    this.sendDataLayerCustomerServiceClicked()
    this.redirectToHelpdesk()
  }

  private buildGtmParams(event: string, impressions: Record<string, any>[], index: number = 0) {
    const gtmParams: Record<string, any> = {
      event,
      impressions: impressions.map((impression, i) => ({
        paywall_location: this.paywall_location || '',
        paywall_subscription_package: impression.package,
        paywall_subscription_id: impression.subscription_id,
        paywall_subscription_price: parseFloat(impression.price.replace(/[^0-9.]/g, '')),
        paywall_position: index + i + 1,
        user_type: this.tracker_user_type,
        subscription_status: this.tracker_subscription_status,
        page_domain: this.tracker_page_domain || 'Kompas.id',
        metered_wall_type: this.tracker_metered_wall_type || 'HP',
        metered_wall_balance: this.tracker_metered_wall_balance,
        ...(this.type === 'epaper'
          ? { epaper_edition: this.tracker_epaper_edition }
          : {
              page_type: this.tracker_page_type,
              content_id: this.tracker_content_id,
              content_title: this.tracker_content_title,
              content_categories: this.tracker_content_categories,
              content_type: this.tracker_content_type
            })
      }))
    }

    return gtmParams
  }

  private generalPaywallDataLayer = (event: string): Record<string, any> => {
    const impressions = [
      {
        package: 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 12',
        subscription_id: '9802032',
        price: '360000'
      },
      {
        package: 'Cash-B2C-Halaman Berlangganan-Reguler_Digital-KDP 1',
        subscription_id: '9802035',
        price: '50000'
      }
    ]

    return this.buildGtmParams(event, impressions)
  }

  private swgPackageViewedDataLayer = (data: any): Record<string, any> => {
    const impressions = data.map((item: { title: string, skuId: string, price: string }) => ({
      package: item.title,
      subscription_id: item.skuId,
      price: item.price
    }))

    return this.buildGtmParams('subscription_package_viewed', impressions)
  }

  private swgSubscribeButtonClicked(item: any, index: number) {
    const gtmParams: any = {
      event: 'subscribe_button_clicked',
      paywall_location: this.paywall_location || '',
      paywall_subscription_package: item.title,
      paywall_subscription_id: item.skuId,
      paywall_subscription_price: parseFloat(item.price.replace(/[^0-9.]/g, '')),
      paywall_position: index + 1,
      user_type: this.tracker_user_type,
      subscription_status: this.tracker_subscription_status,
      page_domain: this.tracker_page_domain || 'Kompas.id',
      metered_wall_type: this.tracker_metered_wall_type || 'HP',
      metered_wall_balance: this.tracker_metered_wall_balance,
    }

    if (this.type === 'epaper') {
      gtmParams.epaper_edition = this.tracker_epaper_edition
    } else {
      gtmParams.page_type = this.tracker_page_type
      gtmParams.content_id = this.tracker_content_id
      gtmParams.content_title = this.tracker_content_title
      gtmParams.content_categories = this.tracker_content_categories
      gtmParams.content_type = this.tracker_content_type
    }

    return gtmParams
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
    const gtmParams = this.generalPaywallDataLayer('paywall_viewed')
    window.dataLayer.push(gtmParams)
  }


  private sendDataLayeronButtonBuyPackage = (name: string, id:string, price: number, position: number): void => {
    const gtmParams: Record<string, any> = {
      event: 'subscribe_button_clicked',
      paywall_location: this.paywall_location,
      paywall_subscription_package: name,
      paywall_subscription_id: id,
      paywall_subscription_price: price,
      paywall_position: position,
      user_type: this.tracker_user_type,
      subscription_status: this.tracker_subscription_status,
      page_domain: this.tracker_page_domain|| 'Kompas.id',
      metered_wall_type: this.tracker_metered_wall_type || 'HP',
      metered_wall_balance: this.tracker_metered_wall_balance,
    }

    if (this.type !== 'epaper') {
      gtmParams['content_title'] = this.tracker_content_title
      gtmParams['content_id'] = this.tracker_content_id
      gtmParams['content_categories'] = this.tracker_content_categories
      gtmParams['content_type'] = this.tracker_content_type
      gtmParams['page_type'] = this.tracker_page_type
    } else {
      gtmParams['epaper_edition'] = this.tracker_epaper_edition
    }

    window.dataLayer.push(gtmParams)
  }

  private sendDataLayeronHelpDesk = (): void => {
    window.dataLayer.push({
      event: 'helpOfferClick',
      userType: this.subscriptionStatus,
      GUID: this.userGuid,
      interface: deviceType()
    })
  }

  private sendDataLayerOtherPackagesClicked = (): void => {
    const gtmParams = this.generalPaywallDataLayer('other_packages_clicked')
    window.dataLayer.push(gtmParams)
  }

  private sendDataLayerCustomerServiceClicked = (): void => {
    const gtmParams = this.generalPaywallDataLayer('customer_service_clicked')
    window.dataLayer.push(gtmParams)
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

  componentWillRender () {
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  render() {
    return (
        <div class={this.type === 'epaper' ? 'bg-transparent wrapper-body mx-2' : 'wrapper-body'}>
        <div class="flex flex-col justify-center items-center w-full max-w-screen-sm my-5 relative">
          {this.type === 'epaper' ? this.topNavigator() : ''}
          <div class={`flex w-full flex-col items-center justify-center ${this.isDark ? 'bg-dark-3' : 'bg-blue-100'}  rounded-xl pt-6 md:pt-8 relative`}>
            {this.headerSection(this.type)}
            {this.descriptionSection(this.paywallData.informations.description)}
            {this.packagesSection(this.paywallData.packages)}
            {this.informationPackages()}
            {this.swgEnable && this.separatorLine()}
            {this.swgEnable && (
              <button
                class={`${this.isDark ? 'bg-grey-600' : 'border-2 bg-grey-100 border-grey-100'} rounded-lg px-6 shadow-sm flex flex-row py-2 mt-1`}
                ref={el => (this.buttonElement = el as HTMLButtonElement)}
              >
                <p class={`${this.isDark && 'text-dark-6'}`}>Subscribe with</p>
                <img
                  class="pl-2 object-scale-down w-20 pt-0.5"
                  src={this.isDark ? 'https://kompasid-production-www.s3.ap-southeast-1.amazonaws.com/paywall-asset/google-white.png' : 'https://kompasid-production-www.s3.ap-southeast-1.amazonaws.com/paywall-asset/google.png'}
                ></img>
              </button>
            )}
            {!this.isLogin && <div class={`border-b ${this.isDark ? 'border-dark-7' : 'border-blue-200'} w-1/5 my-4 flex justify-center`} />}
            {!this.isLogin && this.registrationSection(this.type)}
            {this.userAction()}
            {this.sendDataLayeronPaywallBody()}
          </div>
          {this.isExtensionsOpened ? (this.paymentMobileExtension(this.paywallData.payment.ekstension)) : ''}
        </div>
      </div>
    )
  }
}
