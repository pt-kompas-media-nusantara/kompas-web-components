/**
 * individual test:
 * npm run test.spec -- src/components/kid-metered-paywall/kid-metered-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KompasPaywallMeter } from './kompas-paywall-meter'

describe('KompasPaywallMeter', () => {
  it('Render root component', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywallMeter],
      html: `<kid-paywall-meter></kid-paywall-meter>`,
    })

    expect(root).toEqualHtml(`
        <kid-paywall-meter>
        <mock:shadow-root>
            <div class="bottom-0 h-full sticky w-full"></div>
        </mock:shadow-root>
     </kid-paywall-meter>
     `)
  })
})
