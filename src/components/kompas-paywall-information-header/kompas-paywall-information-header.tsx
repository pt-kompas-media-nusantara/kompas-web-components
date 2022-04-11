import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-information-header',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})
export class KompasPaywallInformationHeader {

  @Prop() content: string = ''

  render() {
    return (
      <div class="my-8">
        <h5 class="text-base text-center md:text-xl font-bold font-serif">{this.content}</h5>
      </div>
    )
  }
}
