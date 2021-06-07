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
  styleUrl: '../kompas-footer/kompas-footer.css',
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
        return <a class="no--underline text--grey-100  text--xs" href={ ob.url } title={ob.label} target="_blank">{ ob.label }</a>
      })
      return (
        <div class="mb--4">
          <div class="flex-- font--bold mb--3 text--grey-100 text--sm uppercase--">Tentang</div>
          <div class="flex-- flex--col">{ list }</div>
        </div>
      )
    }

    const otherLinks = () => {
      const { links } = others
      const list = links.map(ob => {
        return <a class="no--underline text--grey-100 text--xs" href={ ob.url } title={ob.label} target="_blank">{ ob.label }</a>
      })
      return (
        <div class="mb4">
          <div class="flex-- font--bold mb--3 text--grey-100 text--sm uppercase--">Lainnya</div>
          <div class="flex-- flex--col">{ list }</div>
        </div>
      )
    }

    return (
      <div class="bg--brand-1 p--4 text--grey-100">
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
          <a class="no--underline text--grey-500" href={ `tel:${ob.number.replace(/\s/g, '')}` }>{ ob.number }</a>
        )
      })

      return (
        <div class="mb--4 lg:mb--0">
          <div class="flex-- font--bold mb--3 text--grey-500 text--sm uppercase--">Kantor Iklan</div>
          <div class="flex-- mb--2">
            <span class="icon mr--1 mt--1" innerHTML={ mapMarkerAlt } />
            <div class="mb--2 text--xs" innerHTML={ businessAddress } />
          </div>
          <div class="flex-- mb--2">
            <span class="icon mr--1 mt--1" innerHTML={ telephone } />
            <div class="flex-- flex--col text--xs">{ telephones }</div>
          </div>
        </div>
      )
    }

    const { address: editorialAddress = '', phones: editorialPhones = [] } = editorial_division
    const editorial = () => {
      const telephones = editorialPhones.map(ob => {
        return (
          <a class="no--underline text--grey-500" href={ `tel:${ob.number.replace(/\s/g, '')}` }>{ ob.number }</a>
        )
      })
      return (
        <div class="mb--4">
          <div class="flex-- font--bold mb--3 text--grey-500 text--sm uppercase--">Kantor Redaksi</div>
          <div class="flex-- mb--2">
            <span class="icon mr--1 mt--1" innerHTML={ mapMarkerAlt } />
            <div class="mb--2 text--xs" innerHTML={ editorialAddress } />
          </div>
          <div class="flex-- mb--2">
            <span class="icon mr--1 mt--1" innerHTML={ telephone } />
            <div class="flex-- flex--col text--xs">{ telephones }</div>
          </div>
        </div>
      )
    }


    const businessProducts = () => {
      const { business : { label = '', items=[]} } = products
      const list = items.map(ob => {
        return <a class="no--underline text--grey-500 text--xs" href={ ob.url } title={ ob.name } target="blank">{ ob.name }</a>
      })

      return (
        <div>
          <div class="flex-- font--bold mb--3 text--grey-500 text--sm uppercase--">{ label }</div>
          <div class="flex-- flex--col">{ list }</div>
        </div>
      )
    }

    const editorialProducts = () => {
      const { editorial : { label = '', items=[]} } = products
      const list = items.map(ob => {
        return <a class="no--underline text--grey-500 text--xs" href={ ob.url } title={ ob.name } target="blank">{ ob.name }</a>
      })

      return (
        <div class="mb--4 lg:mb--0">
          <div class="flex-- font--bold mb--3 text--grey-500 text--sm uppercase--">{ label }</div>
          <div class="flex-- flex--col">{ list }</div>
        </div>
      )
    }


    return (
      <div class="col--span-1 lg:col--span-2 lg:gap--4 lg:grid-- lg:grid--cols-3 p--4 lg:px--0">
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
        <a class="flex-- items--center leading--none mb--1 no--underline text--grey-500" href={ob.url} title={ ob.name } rel="nofollow" target="_blank">
          <span class="icon" innerHTML={ icons[key] } />
          <span class="bg--grey-500 leading--none ml--2 px--2 py--1 rounded--sm text--grey-100">{ ob.name }</span>
        </a>
      )
    })

    return (
      <div class="p--4 lg:px--0 text--grey-500 text--xs">
        <div class="mb--4" innerHTML={ profileText } />
        <div>
          { accounts }
        </div>
      </div>
    )
  }

  render () {
    return (
      <div class="bg--grey-200 flex-- w--full">
        <div class="gap--0 grid-- grid--cols-1 mx--auto text--grey-500 w--full lg:gap--4 lg:grid--cols-4" style={{ maxWidth: '960px' }}>
          { this.profile() }
          { this.items() }
          { this.about() }
        </div>
      </div>
    )
  }
}
