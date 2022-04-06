import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-information-header',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})
export class KompasPaywallInformationHeader {

  @Prop() title: string = ''

  render() {
    return (
      <div class="my-8">
        <h5 class="text-base md:text-xl font-bold font-serif">{this.title}</h5>
      </div>
    )
  }
}
