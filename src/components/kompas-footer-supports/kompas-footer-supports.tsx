import { Component, Prop, h } from '@stencil/core'
import chevronRight from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-right.svg'
import email from '../../../assets/fontawesome-free-5.15.3-web/svgs/regular/envelope.svg'
import hour from '../../../assets/fontawesome-free-5.15.3-web/svgs/regular/clock.svg'
import telephone from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/phone.svg'
import whatsapp from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/whatsapp.svg'

@Component({
  tag: 'kompas-footer-supports',
  styleUrl: 'kompas-footer-supports.css',
  shadow: true,
})

export class KompasFooterSupports {
  /**
   * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
   */
  @Prop() branding!: any

  private items() {
    const icons = {
      email,
      hour,
      telephone,
      whatsapp
    }
    const { support: { items = [] } } = this.branding
    const [ ob ] = items
    let res = []

    for (const key in ob) {
      let action
      let label

      switch (key) {
        case 'telephone':
          action = `tel:${items[0][key].replace(/\s/g, '')}`
          label = 'Kompas Kring'
          break
        case 'email':
          action = `mailto:${items[0][key]}`
          label = 'Email'
          break
        case 'whatsapp':
          action = `https://api.whatsapp.com/send?text=${encodeURIComponent('Halo, saya perlu informasi mengenai kompas.id')}`
          label = 'Whatsapp'
          break
        case 'hour':
        default:
          action = ''
          label = 'Jam Kerja'
          break
      }


      res.push({
        action,
        icon: icons[key],
        key,
        label: label.toUpperCase(),
        sublabel: ob[key]
      })
    }

    res = res.map(o => {
      return (
        <div class="support--item">
          <span class="icon lg mr2" innerHTML={ o.icon } />
          <div class="support--item-label">
            <strong>{ o.label }</strong>
            <span>{ o.sublabel }</span>
          </div>
        </div>
      )
    })

    return (
      <div class="support-items">
        { res }
      </div>
    )
  }

  private label () {
    const { support: { label =  'Lorem Ipsum' } } = this.branding
    const [ first, second ] = label.split(' ')

    return (
      <div>
        <strong>{ first }</strong>
        <span class="ml1">{ second }</span>
      </div>
    )
  }

  render () {
    return (
      <div class="support">
        <div class="support--inner">

          {/* start: label */}
          <div class="support--label">
            { this.label() }
            <span class="support--label-icon icon" innerHTML={chevronRight} />
          </div>
          {/* end: label */}

          { this.items() }
        </div>
      </div>
    )
  }
}
