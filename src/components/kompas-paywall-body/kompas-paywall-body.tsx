import { Component, h, Prop, State } from '@stencil/core'
import check from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg'
import star from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/star.svg'
import arrowLeft from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/arrow-left.svg'
import { Product, Packages, PaymentImage, PaywallProduct } from '../kompas-paywall/types'
import { Element } from '@stencil/core'

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
  @Prop() countdownArticle: number = 0
  @State() isExtensionsOpened: boolean = false
  @State() kompasAkunHost: string = 'https://akun.kompas.cloud'
  @State() kompasApigenHost: string = 'https://apigen.kompas.cloud'
  @State() kompasApiWcmHost: string = 'https://apiwcm.kompas.cloud'
  @State() kompasLoginHost: string = 'https://account.kompas.cloud/login'
  @State() selfHost: string = 'https://www.kompas.cloud/berlangganan/'
  @State() swgPublisherName: string = 'Harian Kompas Dev'
  @State() swgPublisherId: string = 'kompas.cloud'
  @State() swgProductId: string = 'kompas.cloud:kompas_digital_premium'
  @Element() el: HTMLElement

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
      <button onClick={() => this.redirectToCheckout(product.url, '12', '9802032', 360000, 1)} class="h-auto bg-green-500 rounded mr-3" >
        <h6 class="text-xs md:text-base text-white font-bold py-2 px-4">
          Langganan
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
      <button onClick={() => this.redirectToCheckout(product.url, '1', '9802035', 50000, 2)} class="h-auto bg-green-500 rounded" >
        <h6 class="text-xs md:text-base text-white font-bold py-2 px-4">
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
    <div class="flex flex-row w-full justify-center">
      <div class="border-b-2 border-blue-200 w-1/4 my-4 flex justify-center" />
      <p class="px-4 pt-1">atau</p>
      <div class="border-b-2 border-blue-200 w-1/4 my-4 flex justify-center" />
    </div>
  )
  get redirectToLogin() {
    return `${this.kompasLoginHost}/login?next=${encodeURIComponent(this.selfHost + location.pathname)}`
  }
  private getRegisterToken = async (path: string, payload: any): Promise<string> => {
    return fetch(`${this.kompasApigenHost}/v1/user/register/token/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((response: any) => {
        console.log('response get register token ', response.result.token, payload)
        return response.access_token
      })
      .catch(error => {
        console.log('error get Register ', error)
        throw error
      })
  }
  private getUserToken = async (path: string, payload: any): Promise<string> => {
    return fetch(`${this.kompasApigenHost}/v1/user/token/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((response: any) => {
        console.log('response get user token ', response.result.token, payload)
        return response.access_token
      })
      .catch(error => {
        console.log('error get user Token ', error)
        throw error
      })
  }
  private getSubscriptionToken = async (path: string, payload: any): Promise<string> => {
    return fetch(`${this.kompasAkunHost}/api/subscription/login/${path}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'include',
    })
      .then((response: any) => {
        console.log('response get subscription token ', response.result.token, payload)
        return response.access_token
      })
      .catch(error => {
        console.log('error get subscription Token ', error)
        throw error
      })
  }
  private createSwG = async (payload: any, token: string) => {
    fetch(`${this.kompasApiWcmHost}/v2/membership/swg/create`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        console.log('swg created')
      })
      .catch(error => {
        console.log('error on create swg', error)
        throw error
      })
  }
  private subscribeWithGoogleButton = (swgComponent: any): any => {
    // @ts-ignore
    (self.SWG = self.SWG || []).push((subscriptions: any) => {
      // set entitlement
      subscriptions.setOnEntitlementsResponse(async (entitlementsPromise: any) => {
        const resultEntitlements = await entitlementsPromise
        console.log('result entitlement', resultEntitlements, resultEntitlements.enablesThis())

        if (resultEntitlements.enablesThis() && !this.userGuid) {
          // kalau tidak login dan belum berlangganan
          const userEntitlements = resultEntitlements.entitlements || []
          const { source, subscriptionToken } = userEntitlements[0]
          let product = ''
          let subsToken = subscriptionToken

          if (source === 'google') {
            const { productId, purchaseToken } = JSON.parse(subscriptionToken)
            product = productId
            subsToken = purchaseToken
          }

          const payload = { subscription_token: subsToken, products: product, detail: 'test' }
          const accountPromise: any = new Promise((resolve, reject) => {
            fetch(`${this.kompasApigenHost}/v1/user/token/${source}`, {
              method: 'POST',
              body: JSON.stringify(payload),
            })
              .then((response: any) => resolve(response.result.token))
              .catch(() => reject(new Error('User not found')))
          })

          console.log('find a subscription', payload, accountPromise) // test

          // subscription look up
          subscriptions.waitForSubscriptionLookup(accountPromise).then((token: string) => {
            console.log('waitForSubscriptionLookup', token)
            if (token) {
              console.log('showLoginNotification')
              subscriptions.showLoginNotification().then(async () => {
                await this.getSubscriptionToken(source, { token })
                console.log('token setted')
                window.location.reload()
              })
            } else {
              console.log('completeDeferredAccountCreation')
              subscriptions.completeDeferredAccountCreation({ resultEntitlements, consent: true }).then(async () => {
                const payload = { subscription_token: subsToken, products: product, detail: 'test' }
                const token = await this.getRegisterToken(source, payload)
                if (token) {
                  await this.getSubscriptionToken(source, { token })
                  console.log('token setted')
                  window.location.reload()
                }
              })
            }
          })
        } else {
          // subscriptions attach button
          console.log('success get on attach button')
          subscriptions.attachButton(swgComponent, { theme: 'light', lang: 'en' }, () => {
            console.log('success get on attach button => in')
            subscriptions.showOffers({ isClosable: true })
            subscriptions.setOnLoginRequest(() => {
              window.location.href = this.redirectToLogin
            })
            subscriptions.setOnPaymentResponse(async (paymentResponse: any) => {
              const response = await paymentResponse
              console.log('flag 2 ', response)
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
              console.log('completed')
              window.location.reload()
            })
          })
        }
      })
    })
    console.log('Function subscribeWithGoogleButton selesai berjalan')
  }
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
      interface: this.deviceType
    })
  }

  private sendDataLayeronPaywallBody = (): void => {
    window.dataLayer.push({
      event: 'productOfferImpression',
      ecommerce: {
        currencyCode: 'IDR',
        impressions: [
          {
            name: 'cash - paywall - kdp 12 Bulan - reguler',
            id: '9802032',
            price: 360000,
            list: this.listDataLayer,
            position: 1
          },
          {
            name: 'cash - paywall - kdp 1 Bulan - reguler',
            id: '9802035',
            price: 50000,
            list: this.listDataLayer,
            position: 2
          }
        ]
      }
    })
  }

  private sendDataLayeronButtonBuyPackage = (name: string, id:string, price: number, position: number): void => {
    window.dataLayer.push({
      event: 'productClick',
      ecommerce: {
        click: {
          actionField: {
            list: 'Paywall'
          },        
        products: [
          {
            name: `cash - paywall - kdp ${name} - reguler`,
            id: `${id}`,
            price: `${price}`,
            list: this.listDataLayer,
            position: `${position}`
          }
        ]
      }
    }
    })
  }

  private sendDataLayeronHelpDesk = (): void => {
    window.dataLayer.push({
      event: 'helpOfferClick',
      userType: this.subscriptionStatus,
      GUID: this.userGuid,
      interface: this.deviceType
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

  get deviceType() {
    if (window.innerWidth <= 768) {
      return 'Mobile'
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      return 'Tab'
    } else {
      return 'Desktop'
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
    const jsonHead = document.querySelector("head")
    jsonHead.appendChild(jsonScript)
  }

  componentDidLoad () {
    const el = this.el.querySelector('.swg-button')
    if(el){
      el.addEventListener('click', this.subscribeWithGoogleButton(el), false)
    this.jsonScript()
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.src = "https://news.google.com/swg/js/v1/swg.js"
    script.async = true
    script.onload  = this.subscribeWithGoogleButton(el)
    head.appendChild(script)
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
            {this.separatorLine()}
            <button id="swg-button"></button>
            <button class="swg-button"></button>
            <div class="swg-button"></div>
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
