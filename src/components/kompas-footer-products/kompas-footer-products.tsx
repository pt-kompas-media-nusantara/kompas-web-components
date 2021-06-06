import { Component, Prop, h } from '@stencil/core'
import facebookSquare from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/facebook-square.svg'
import instagram from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/instagram.svg'
import twitterSquare from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/twitter-square.svg'
import youtubeSquare from '../../../assets/fontawesome-free-5.15.3-web/svgs/brands/youtube-square.svg'
import logo from '../../../assets/logos/kompas-white.svg'
import mapMarkerAlt from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/map-marker-alt.svg'
import telephone from '../../../assets/fontawesome-free-5.15.3-web/svgs/solid/phone.svg'

@Component({
  tag: 'kompas-footer-products',
  styleUrl: 'kompas-footer-products.css',
  shadow: true,
})

export class KompasFooterProducts {
  /**
   * Rubrik/kategori artikel, pisahkan tiap item dengan koma (,)
   */
  @Prop() branding!: any

  private about() {
    const { about, others } = this.branding
    const aboutLinks = () => {
      const { links } = about
      const list = links.map(ob => {
        return <a class="section--link white" href={ ob.url } title={ob.label} target="_blank">{ ob.label }</a>
      })
      return (
        <div class="mb4">
          <div class="section--label white">Tentang</div>
          <div class="flex--col">{ list }</div>
        </div>
      )
    }

    const otherLinks = () => {
      const { links } = others
      const list = links.map(ob => {
        return <a class="section--link white" href={ ob.url } title={ob.label} target="_blank">{ ob.label }</a>
      })
      return (
        <div class="mb4">
          <div class="section--label white">Lainnya</div>
          <div class="flex--col">{ list }</div>
        </div>
      )
    }

    return (
      <div class="about">
        { aboutLinks() }
        { otherLinks() }
        <div class="logo" innerHTML={ logo } />
      </div>
    )
  }

  private items () {
    const {
      business_division,
      editorial_division,
      products
    } = this.branding

    const { address: businessAddress = '', phones: businessPhones = [] } = business_division
    const advertorial = () => {
      const telephones = businessPhones.map(ob => {

        return (
          <a class="section--link" href={ `tel:${ob.number.replace(/\s/g, '')}` }>{ ob.number }</a>
        )
      })

      return (
        <div class="mb4 lg:mb0">
          <div class="section--label">Kantor Iklan</div>
          <div class="flex--row mb2">
            <span class="icon mr1 mt1" innerHTML={ mapMarkerAlt } />
            <div class="mb2" innerHTML={ businessAddress } />
          </div>
          <div class="flex--row mb2">
            <span class="icon mr1 mt1" innerHTML={ telephone } />
            <div class="flex--col">{ telephones }</div>
          </div>
        </div>
      )
    }

    const { address: editorialAddress = '', phones: editorialPhones = [] } = editorial_division
    const editorial = () => {
      const telephones = editorialPhones.map(ob => {
        return (
          <a class="section--link" href={ `tel:${ob.number.replace(/\s/g, '')}` }>{ ob.number }</a>
        )
      })
      return (
        <div class="mb4">
          <div class="section--label">Kantor Redaksi</div>
          <div class="flex--row mb2">
            <span class="icon mr1 mt1" innerHTML={ mapMarkerAlt } />
            <div class="mb2" innerHTML={ editorialAddress } />
          </div>
          <div class="flex--row mb2">
            <span class="icon mr1 mt1" innerHTML={ telephone } />
            <div class="flex--col">{ telephones }</div>
          </div>
        </div>
      )
    }


    const businessProducts = () => {
      const { business : { label = '', items=[]} } = products
      const list = items.map(ob => {
        return <a class="section--link" href={ ob.url } title={ ob.name } target="blank">{ ob.name }</a>
      })

      return (
        <div>
          <div class="section--label">{ label }</div>
          <div class="flex--col">{ list }</div>
        </div>
      )
    }

    const editorialProducts = () => {
      const { editorial : { label = '', items=[]} } = products
      const list = items.map(ob => {
        return <a class="section--link" href={ ob.url } title={ ob.name } target="blank">{ ob.name }</a>
      })

      return (
        <div class="mb4 lg:mb0">
          <div class="section--label">{ label }</div>
          <div class="flex--col">{ list }</div>
        </div>
      )
    }


    return (
      <div class="items">
        {/* start: addresses */}
        <div>
          { editorial() }
          { advertorial() }
        </div>
        {/* end: addresses */}
        {/* start: products */}
        <div>
          { editorialProducts() }
        </div>
        {/* start: products */}
        {/* start: business */}
        <div>
          { businessProducts() }
        </div>
        {/* end: business */}
      </div>
    )
  }

  private profile () {
    const icons = [facebookSquare, twitterSquare, instagram, youtubeSquare]
    const {
      profile: {
        text: profileText = ''
      },
      social_accounts: {
        items: socialAccounts = []
      }
    } = this.branding

    const accounts = socialAccounts.map((ob, key) => {
      return (
        <a class="social-account" href={ob.url} title={ ob.name } rel="nofollow" target="_blank">
          <span class="icon" innerHTML={ icons[key] } />
          <span>{ ob.name }</span>
        </a>
      )
    })

    return (
      <div class="profile">
        <div class="mb4" innerHTML={ profileText } />
        <div>
          { accounts }
        </div>
      </div>
    )
  }

  componentWillLoad() {
    console.log(this.branding)
  }

  render () {
    return (
      <div class="container">
        <div class="container--inner">
          { this.profile() }
          { this.items() }
          { this.about() }
        </div>
      </div>
    )
  }
}
