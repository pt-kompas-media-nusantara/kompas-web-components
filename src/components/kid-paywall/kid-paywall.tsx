/**
 * Komponen yang menampilkan paywall
 */

import { Component, State, h, Prop } from '@stencil/core'

type membership = {
  title: string,
  benefits: string[],
  harga: string,
  satuan: string,
  image: string,
  url: string,
  popular: boolean
}
type section = {
  url: string,
  text: string,
  label: string
  img?: string
}
type registration = {
  content: section,
  action: section
}

interface apiResponseData {
  result: {
    title: string,
    excerpt: string,
    memberships: membership[],
    login: section,
    branding: section,
    registration: registration
  }
}

@Component({
  tag: 'kid-paywall',
  styleUrl: 'kid-paywall.css',
  shadow: true
})

export class KidPaywall {
  /**
   * Props
   */
  @Prop() isLogin:boolean = false

  @State() errorMsg: string = ''
  // @State() isLogin: boolean = false;
  @State() excerpt = 'Dapatkan akses tanpa batas ke seluruh artikel premium dengan berlangganan Kompas.id.'
  @State() title = 'Jadilah Bagian dari Jurnalisme Berkualitas'
  @State() items: membership[]
  @State() login: section = {
    url: 'https://login.kompas.id/login',
    text: 'Sudah punya akun?',
    label: 'Silakan Masuk'
  }
  @State() branding: section = {
    url: 'https://korporasi.kompas.id/produk/kompas-id',
    text: '',
    label: 'Mengapa Kompas.id?'
  }
  @State() registration: registration = {
    content: {
      img: 'https://www-beta.kompas.id/img/backgrounds/ilustrasi-banner-registration.png',
      url: '',
      label: 'Daftar Sekarang',
      text: 'Lanjutkan baca artikel ini dan artikel lainnya dengan daftar akun Kompas.id.',
    },
    action: {
      url: 'https://login.kompas.id/register',
      label: 'Daftar Sekarang',
      text: '',
    }
  }

  private templateError() {
    return (
      <div class="error">
        <h3 class="error--label">Galat</h3>
        <p class="error--text">{ this.errorMsg }</p>
      </div>
    )
  }
  private templateResult() {
    return (
      <div>
        <div class="transparent-linear text-transition" />
        { this.isLogin ? '' : this.templateBannerRegistration()  }
        { this.templateHeader() }
        { this.templateTitle() }
        { this.templateMemberships() }
      </div>
    )
  }
  private templateHeader() {
    return (
      <div class="header">
        <div>
          { this.login.text }
          <a 
            class="header__link" 
            href={ this.login.url }
          >
            { this.login.label }
          </a>
        </div>
        <a
          class="header__link"
          href={ this.branding.url}
          target="_blank"
        >
          { this.branding.label }
        </a>
        </div>
    )
  }
  private templateTitle() {
    return (
      <div class="title-container">
        <span class="title">{ this.title }</span>
        <span class="excerpt">{ this.excerpt }</span>
      </div>
    )
  }
  private templateMemberships() {
    const membership = () => {
      const labelPopular = <div class="membership-popular-label">POPULER</div> 
      const items = this.items.map(item => {
        return (
        <div class={ `membership-container ${ item.popular ? 'membership__order-first' : '' }` }> 
          { item.popular ? labelPopular : '' }
          <div class={ `${item.popular ? 'membership-box__popular' : 'membership-box__default' } membership-box`} >
            <div class="membership--title">{ item.title }</div>
            <img src={item.image} alt={item.title} style={{ width:"100%", marginBottom:"1.5rem" }}/>
            <div class="text-center">
              <span class="font-bold text-lg">{ item.harga }</span>
              <span class="lowercase"> /{ item.satuan }</span>
            </div>
          </div>
          
        </div>
        )
      })
      return (
        <div class="membership">{ items }</div>
      )
    }
    return <div>{membership()}</div>
  }
  private templateBannerRegistration() {
    return (
      <div class="banner-registration">
        <div class="banner-registration--content">
          <div class="banner-registration--content--img">
            <img src={ this.registration.content.img } alt="banner registration" />
          </div>
          <div class="banner-registration--content--text">
            <div class="banner-registration--content--text-wrapper">
              { this.registration.content.text }
            </div>
          </div>
        </div>
        <div class="banner-registration--action">
          <div class="banner-registration--action--button">
            <span class="banner-registration--action--button--label">{ this.registration.action.label }</span>
          </div>
        </div>
      </div>
    )
  }

  async componentWillLoad() {
    try{
      const req = await fetch(
          'https://kompasid-production-content.s3.ap-southeast-1.amazonaws.com/paywall/paywall.json',
          {
            method: 'GET'
          }
      )

      if (req.status !== 200) {
        throw new Error(`${req.status} Ada galat saat memproses permintaan.`)
      }
  
      const reqJson: apiResponseData = await req.json()
      const {
        result: {
          title = this.title,
          excerpt = this.excerpt,
          memberships,
          login = this.login,
          branding = this.branding,
          registration = this.registration
        }
      } = reqJson

      this.items = memberships
      this.excerpt = excerpt
      this.title = title
      this.login = login
      this.branding = branding
      this.registration = registration
      
    } catch (error) {
      this.errorMsg = error.message
    }
  }

  render() {
    return (
      <div class="paywall">
        { this.errorMsg ? this.templateError() : this.templateResult() }
      </div>
    )
  }
}