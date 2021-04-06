/**
 * Komponen yang menyajikan artikel rekomendasi kompas.id
 * berdasarkan sejumlah parameter yang disediakan.
 */

import { Component, Prop, State, Watch, h } from '@stencil/core'

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
   * Label/tagar jamak artikel yang dipisahkan dengan koma
   */
  @Prop() postTags: string

  /**
   * Judul artikel
   */
  @Prop() postTitle!: string
  @Watch('postTitle')
  // validasi properti postTitle
  validatePostTitle(val: string) {
    // properti tidak boleh kosong
    if ( typeof val !== 'string' || val.trim() === '' ) {
      throw new Error('Nilai post-title diperlukan')
    }
  }

  /**
   * URL artikel tempat komponen ini disisipkan
   */
  @Prop() postUrl!: string
  @Watch('postUrl')
   // validasi properti postTitle
  validateUrl(val: string) {
    // properti tidak boleh kosong
    if ( typeof val !== 'string' || val.trim() === '' ) {
      throw new Error('Nilai post-url diperlukan')
    }
  }

  /**
   * UTM untuk dikaitkan dengan permalink artikel rekomendasi kompas.id
   */
  @Prop() utm!: string
  @Watch('utm')
   // validasi properti postTitle
  validateUtm(val: string) {
    // properti tidak boleh kosong
    if ( typeof val !== 'string' || val.trim() === '' ) {
      throw new Error('Nilai utm diperlukan')
    }
  }

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

  private truncateTitle():string {
    let str = this.resTitle
    if (str.length <=  this.titleMaxLength) { return str }

    str = str.substr(0, this.titleMaxLength - 1)

    return `${str.substr(0, str.lastIndexOf(' '))}...`
  }

  /**
   * Metode ini dipanggil sekali setelah komponen terhubung dengan DOM
   */
  async componentWillLoad() {
    try {
      // jalankan validasi properti
      this.validateAuthKey(this.authKey)
      this.validatePostTitle(this.postTitle)
      this.validateUrl(this.postUrl)
      this.validateUtm(this.utm)

      /**
       * Ambil data secara asinkronus dari API
       * lalu ubah nilai state
       */
      const queries = {
        q: encodeURIComponent(this.postTitle)
      }

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
      this.resPermalink = `${url}?${this.utm}`
    } catch (error) {
      this.errorMsg = error.message
    }

  }

  render() {
    if (this.errorMsg) {
      return (
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">{ this.errorMsg }</p>
        </div>
      )
    } else {
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
}
