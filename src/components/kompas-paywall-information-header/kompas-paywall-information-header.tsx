import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'kompas-paywall-information-header',
  styleUrl: '../kompas-paywall/kompas-paywall.css',
  shadow: true,
})
export class KompasPaywallInformationHeader {

  @Prop() text: string = ''
  @Prop() theme: string = ''

  render() {
    return (
      <div class="my-4 md:my-8">
        <h5 class={`text-base text-center md:text-xl ${this.theme === 'dark' && 'text-white'} font-bold font-serif`}>{this.text}</h5>
      </div>
    )
  }
}
