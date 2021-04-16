/**
 * Komponen yang menyajikan artikel rekomendasi kompas.id
 * berdasarkan sejumlah parameter yang disediakan.
 */

import { Component, Prop, State, Watch, h } from '@stencil/core'
import { base64Encode } from '../../utils/hash'

interface apiResponseData {
  judul: string,
  thumbnail: string,
  html_dekstop: string,
  html_mobile: string,
  url: string
}

@Component({
  tag: 'kid-recommender',
  styleUrl: 'kid-recommender.css',
  shadow: true,
})

export class KidRecommender {

  /**
   * Props
   */

  /**
   * Kunci otentikasi
   */
  @Prop() authKey!: string
  @Watch('authKey')
  // validasi properti authKey
  validateAuthKey(val: string) {
    // properti tidak boleh kosong
    if ( typeof val !== 'string' || val.trim() === '' ) {
      throw new Error('Nilai auth-key diperlukan')
    }
  }

  /**
   * Label/tagar jamak artikel yang dipisahkan dengan koma. Kalau
   * tidak diisi, komponen akan mengambil nilai `<meta name="keyword" />`.
   */
  @Prop() postTags: string = ''

  /**
   * Judul artikel. Kalau tidak diisi, komponen akan otomatis mengambil nilai
   * `<meta name="og:title" />` atau `<title />`.
   */
  @Prop() postTitle: string = ''

  /**
   * URL artikel tempat komponen ini disisipkan. Kalau tidak diisi, komponen
   * akan otomatis mengambil nilai `<meta property="og:url" />` atau `window.location`.
   */
  @Prop() postUrl: string = ''

  /**
   * Lokasi penempatan komponen
   */
  @Prop() position: string = 'rekomendasi_inbody'

  /**
   * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
   */
  @Prop() section: string = ''

  /**
   * States
   */
  /**
   * Jumlah maksimal karakter pada judul, tidak akan berubah
   */
  titleMaxLength: number = 155
  /**
   * Label di atas judul rekomendasi, tidak akan berubah
   */
  resLabel: string = 'Artikel Premium'
  /**
   * Kondisi menentukan keadaan sedang muat atau selesai muat
   */
  @State() isLoading: boolean = true
  /**
   * Pesan apabila terjadi galat, berubah ketika terjadi galat
   */
  @State() errorMsg: string = ''
  /**
   * Judul artikel rekomendasi, berubah setelah fetch() berhasil
   */
  @State() resTitle: string = ''
  /**
   * Citra andalan artikel rekomendasi, berubah setelah fetch() berhasil
   */
  @State() resThumbnail: string = ''
  /**
   * Alamat artikel rekomendasi, berubah setelah fetch() berhasil
   */
  @State() resPermalink: string = ''

  private getPostTags():string {
    const keywords = document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').getAttribute('content') : ''
    return this.postTags || keywords || ''
  }

  private getTitle(): string {
    const pageTitle = document.title || ''
    const ogTitle = document.querySelector('meta[property="og:title"]') ? document.querySelector('meta[property="og:title"]').getAttribute('content') : ''
    return this.postTitle || ogTitle || pageTitle || ''
  }

  private getUrl(): string {
    const ogUrl = document.querySelector('meta[property="og:url"]') ? document.querySelector('meta[property="og:url"]').getAttribute('content') : ''
    return ogUrl || window.location.href
  }

  private showError() {
    if (!this.isLoading && this.errorMsg) {
      return (
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">{ this.errorMsg }</p>
        </div>
      )
    }
  }

  private showLoader() {
    if (this.isLoading) {
      return <div class="loader" />
    }
  }

  private showResult() {
    if (!this.isLoading && !this.errorMsg) {
      return (
        <div class="container--outer">
          <a class="container--inner" href={this.resPermalink} target="_blank" title={this.resTitle}>
            <div class="container--inner__headline">
              <span class="container--inner__headline-label">{ this.resLabel }</span>
              <h2 class="container--inner__headline-title">{ this.truncateTitle() }</h2>
            </div>
            <div
              class="container--inner__thumbnail"
              style={{
                backgroundImage: `url(${this.resThumbnail})`
              }}
            />
          </a>
        </div>
      )
    }
  }

  private truncateTitle():string {
    let str = this.resTitle
    if (str.length <=  this.titleMaxLength) { return str }

    str = str.substr(0, this.titleMaxLength - 1)

    return `${str.substr(0, str.lastIndexOf(' '))}...`
  }

  /**
   * Metode ini dipanggil sekali setelah komponen terhubung dengan DOM
   */
  async componentDidLoad() {
    try {
      // jalankan validasi properti
      this.validateAuthKey(this.authKey)

      /**
       * Ambil data secara asinkronus dari API
       * lalu ubah nilai state
       */
      const queries = {
        position: encodeURIComponent(this.position),
        'post-tags': encodeURIComponent(this.getPostTags()),
        'post-url': base64Encode(this.getUrl()),
        q: encodeURIComponent(this.getTitle()),
        section: encodeURIComponent(this.section)
      }
      console.log(queries)
      const params = Object
        .keys(queries)
        .map(key => `${key}=${queries[key]}`)
        .join('&')

      const req = await fetch(
        `https://apiner.kompas.id/v1/article?${params}`,
        {
          method: 'GET',
          // mode: 'no-cors',
          headers: {
            'Authorization': this.authKey,
            'Content-Type': 'application/json'
          }
        }
      )
      const reqJson: apiResponseData = await req.json()
      const {
        judul = '',
        thumbnail = '',
        url = ''
      } = reqJson

      this.resTitle = judul
      this.resThumbnail = thumbnail
      this.resPermalink = url
      this.isLoading = false
    } catch (error) {
      this.errorMsg = error.message
      this.isLoading = false
    }

  }

  render() {
    return (
      <div class="container">
        { this.showError() }
        { this.showLoader() }
        { this.showResult() }
      </div>
    )
  }
}
