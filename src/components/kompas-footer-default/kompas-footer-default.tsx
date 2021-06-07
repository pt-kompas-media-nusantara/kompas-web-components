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
   * Label copyright, tidak akan berubah
   */
  @State() copyright: string = '© PT Kompas Media Nusantara'

  @State() mnLeft: object[] = []
  @State() mnRight: object[] = []

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

  componentWillLoad() {
    // console.log(this.menus)
    const { footer_left = '', footer_right = '' } = this.menus
    const footerLeft = this.clean(footer_left)
    const footerRight = this.clean(footer_right)

    this.mnLeft = footerLeft.map(ob => (
      <a class="menu--separator" href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))

    this.mnRight = footerRight.map(ob => (
      <a class="menu--separator" href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))
  }

  render() {
    return (
      <div class="bg--grey-600 flex-- flex--col pb--12 pt--5 px--4 text--xs w--full">
        <div class="flex-- flex--col lg:flex--row mx--auto w--full" style={{ maxWidth: '960px' }}>
          {/* start: copyright */}
          <div class="flex-- mb--2 lg:mb--0 mr--2 text--grey-100">{ this.copyright }</div>
          {/* end: copyright */}
          {/* start: first menu */}
          <div class="flex-- flex--wrap mb--2 lg:mb--0">{ this.mnLeft }</div>
          {/* end: first menu */}
          {/* start: first menu */}
          <div class="flex-- ml--auto">{ this.mnRight }</div>
          {/* end: first menu */}
        </div>
      </div>
    )
  }
}
