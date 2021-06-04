import { Component, Prop, State, h } from '@stencil/core'

// interface Menu {
//   footer_left: object,
//   footer_right: object
// }

@Component({
  tag: 'kompas-footer-default',
  styleUrl: 'kompas-footer-default.css',
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
      <a class="default--menu-item" href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))

    this.mnRight = footerRight.map(ob => (
      <a class="default--menu-item" href={ ob.url } key={ ob.id }>
        { ob.name }
      </a>
    ))
  }

  render() {
    return (
      <div class="default">
        <div class="default--inner">
          {/* start: copyright */}
          <div class="default--copyright">{ this.copyright }</div>
          {/* end: copyright */}
          {/* start: first menu */}
          <div class="default--menu first">{ this.mnLeft }</div>
          {/* end: first menu */}
          {/* start: first menu */}
          <div class="default--menu second">{ this.mnRight }</div>
          {/* end: first menu */}
        </div>
      </div>
    )
  }
}
