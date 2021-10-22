/**
 * Komponen yang menampilkan paywall
 * command purge css
 */

import { Component, State, h, Prop } from '@stencil/core'
import fasCheck from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg'

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
  /**
   * prop isLogin mengakomodasi untuk menampilkan banner registration secara dinamis.
   */
  @Prop() isLogin: boolean = false

  /**
   * States
   */
  /**
   * Pesan apabila terjadi galat, berubah ketika terjadi galat
   */
  @State() errorMsg: string = ''
  /**
   * Teks yang tertera di bawah judul paywall
   */
  @State() excerpt = 'Dapatkan akses tanpa batas ke seluruh artikel premium dengan berlangganan Kompas.id.'
  /**
   * Judul paywal
   */
  @State() title = 'Jadilah Bagian dari Jurnalisme Berkualitas 2'
  /**
   * Teks dan alamat url yang ditampilkan pada section Membership
   */
  @State() items: membership[]
  /**
   * Teks dan alamat url yang ditampilkan pada section Login
   */
  @State() login: section = {
    url: 'https://account.kompas.id/login',
    text: 'Sudah punya akun?',
    label: 'Silakan Masuk'
  }
  /**
   * Teks dan alamat url yang ditampilkan pada section branding
   */
  @State() branding: section = {
    url: 'https://korporasi.kompas.id/produk/kompas-id',
    text: '',
    label: 'Mengapa Kompas.id?'
  }
  /**
   * Teks dan alamat url yang ditampilkan pada section registration
   */
  @State() registration: registration = {
    content: {
      img: 'https://www.kompas.id/img/backgrounds/ilustrasi-banner-registration.png',
      url: '',
      label: 'Daftar Sekarang',
      text: 'Lanjutkan baca artikel ini dan artikel lainnya dengan daftar akun Kompas.id.',
    },
    action: {
      url: 'https://account.kompas.id/register',
      label: 'Daftar Sekarang',
      text: '',
    }
  }
  /**
   * TEMPLATING
   */
  /**
   * Mengelola tampilan error
   */
  private templateError() {
    return (
      <div class="bg-red-200 p-4 rounded w-full">
        <h3 class="font-bold mb-2 mt-0 mx-0 text-base leading-tight">Galat</h3>
        <p class="my-0 text-base">{ this.errorMsg }</p>
      </div>
    )
  }
  /**
   * Mengelola tampilan paywall secara general
   */
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
  /**
   * Mengelola tampilan pada section Header
   */
  private templateHeader() {
    return (
      <div class="bg-grey-100 py-6 flex flex-col font-sans items-center w-full lg:flex-row lg:justify-between">
        <div>
          { this.login.text }
          <a 
            class="font-bold text-brand-1 underline"  
            href={ this.login.url }
          >
            { this.login.label }
          </a>
        </div>
        <a
          class="font-bold text-brand-1 underline" 
          href={ this.branding.url}
          target="_blank"
        >
          { this.branding.label }
        </a>
        </div>
    )
  }
  /**
   * mengelola tampilan pada section judul
   */
  private templateTitle() {
    return (
      <div class="bg-grey-100 flex flex-col items-center text-center pb-8 w-full">
        <span class="flex font-serif font-bold text-4xl pb-2">{ this.title }</span>
        <span class="flex text-base">{ this.excerpt }</span>
      </div>
    )
  }
  /**
   * mengelola tampilan pada section Membership
   */
  private templateMemberships() {
    const membership = () => {
      const benefitsList = (benefits: string[], popular:boolean) => {
        return benefits.map( (list) => {
          return (
            <div class="flex py-1 w-full">
              <span class="pr-2 icon" innerHTML={ fasCheck }/>
              <div class={`text-left text-sm ${ popular? 'text-grey-100': 'text-grey-700'}`}>{list}</div>
            </div>
            )
          }
        )
      }
      const labelPopular = <div class="bg-orange-300 p-1 text-center mx-4">POPULER</div> 
      const items = this.items.map(item => {
        return (
        <div class={ `flex flex-col px-4 w-full box-border lg:order-none ${ item.popular ? 'order-first' : '' }` }> 
          <div class={item.popular ? 'px-4': 'p-4'}>
            { item.popular ? labelPopular : '' }
          </div>
          <div class={ `${item.popular ? 'bg-brand-1 text-grey-100' : 'border border-grey-300' } shadow-md flex flex-grow flex-col rounded-lg w-full mb-4`} >
            <div class="font-bold text-center text-2xl px-4 py-8">{ item.title }</div>
            <img src={item.image} alt={item.title} style={{ width:"100%", marginBottom:"1.5rem" }}/>
            <div class="text-center">
              <span class="font-bold text-lg">{ this.rupiahFormat(item.harga) }</span>
              <span class="lowercase"> /{ item.satuan }</span>
            </div>
            <div class="px-4 text-sm">
              <a href={item.url} class="font-bold bg-green-400 capitalize text-grey-100 rounded-lg h-10 px-5 text-xl leading-7 flex justify-center items-center">BERLANGGANAN</a>
              <div class="flex flex-col p-2 w-full">
                { benefitsList(item.benefits, item.popular) }
              </div>
            </div>
            
          </div>
          
        </div>
        )
      })
      return (
        <div class="bg-grey-100 font-sans w-full flex flex-col pb-8 lg:flex-row">{ items }</div>
      )
    }
    return membership()
  }
  /**
   * mengelola tampilan pada section Banner Registration
   */
  private templateBannerRegistration() {
    return (
      <div class="box-border flex flex-col w-full items-center p-4 bg-blue-100  md:flex-row  md:py-0  md:px-8">
        <div class="flex w-full pb-3 md:pb-0 md:w-3/4">
          <div class="flex-1">
            <img src={ this.registration.content.img } alt="banner registration" />
          </div>
          <div class="flex w-3/4 items-center justify-center">
            <div class="font-sans text-grey-600 text-base font-bold pl-4 md:text-xl md:text-center">
              { this.registration.content.text }
            </div>
          </div>
        </div>
        <div class="w-full justify-end md:w-1/4 md:flex">
          <div class="w-full font-bold shadow capitalize rounded px-4 h-8 leading-8 justify-center items-center inline-flex bg-green-400 text-grey-100 md:w-auto select-none">
            <span class="inline">{ this.registration.action.label }</span>
          </div>
        </div>
      </div>
    )
  }
  /** 
   * MEHTODS
   */
  /**
   * Fungsi untuk mengkonversi format string (angka) ke format rupiah
   * @param str 
   */
  private rupiahFormat(str:string):string {
    return 'Rp ' + str.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  /**
   * Metode ini dipanggil sekali sebelum komponen terhubung dengan DOM
   */
  async componentWillLoad() {
    try{
      const req = await fetch(
          'https://kompasid-production-content.s3.ap-southeast-1.amazonaws.com/paywall/paywall.json',
          {
            method: 'GET'
          }
      )
      /**
       * fetch() hanya mendeteksi galat jaringan.
       * Galat lain (40x, 50x) harus ditangani secara manual.
       */
      if (req.status !== 200) {
        throw new Error(`${req.status} Ada galat saat memproses permintaan.`)
      }
      /**
       * fetch() mendapatkan respons 200
       */
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
      <div class={`relative w-full ${this.errorMsg ? '' : '-mt-24'}`}>
        { this.errorMsg ? this.templateError() : this.templateResult() }
      </div>
    )
  }
}