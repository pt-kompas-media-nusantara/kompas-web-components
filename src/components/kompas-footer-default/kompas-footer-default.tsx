import { Component, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'kompas-footer-default',
  styleUrl: '../kompas-footer/kompas-footer.css',
  shadow: true,
})


export class KompasFooterDefault {

  /**
   * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
   */
  @Prop() menus!: any

  /**
   * Flag untuk mengubah tema warna footer
   */
  @Prop() isLightMode: boolean = false

  /**
   * Label copyright, tidak akan berubah
   */
  @State() copyright: string = '© PT Kompas Media Nusantara'

  private clean (ob) {
    let res = []
    for (const key in ob) {
      const url = ob[key].url
                        .replace('http://kompas.id', 'https://www.kompas.id')
                        .replace('https://kompas.id', 'https://www.kompas.id')
                        .replace(/([^:]\/)\/+/g, "$1") // menghapus slash ganda "//" kecuali "https://"
      if (key !== 'Utama') {
        res.push({
          id: ob[key].id || '',
          name: ob[key].name,
          url,
        })
      }
    }

    return res
  }

  private mnLeft() {
    const { footer_left = '' } = this.menus
    const footerLeft = this.clean(footer_left)
    return footerLeft.map(ob => (
      <a  class={{
          'menu--separator': true,
          'light': this.isLightMode
        }} href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))
  }

  private mnRight() {
    const { footer_right = '' } = this.menus
    const footerRight = this.clean(footer_right)

    return footerRight.map(ob => (
      <a class={{
          'menu--separator': true,
          'light': this.isLightMode
        }} href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))
  }

  render() {
    return (
      <div class={`flex-- flex--col pb--12 pt--5 px--4 text--xs w--full ${this.isLightMode ? 'bg--grey-100' : 'bg--grey-600'}`}>
        <div class="flex-- flex--col lg:flex--row mx--auto w--full" style={{ maxWidth: '960px' }}>
          {/* start: copyright */}
          <div class={`flex-- mb--2 lg:mb--0 mr--2 ${this.isLightMode ? 'text-grey-400' : 'text--grey-100'} `}>{ this.copyright }</div>
          {/* end: copyright */}
          {/* start: first menu */}
          <div class="flex-- flex--wrap mb--2 lg:mb--0">{ this.mnLeft() }</div>
          {/* end: first menu */}
          {/* start: first menu */}
          <div class="flex-- lg:ml--auto">{ this.mnRight() }</div>
          {/* end: first menu */}
        </div>
      </div>
    )
  }
}
