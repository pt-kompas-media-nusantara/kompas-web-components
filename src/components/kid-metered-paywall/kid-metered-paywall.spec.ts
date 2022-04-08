/**
 * individual test:
 * npm run test.spec -- src/components/kid-metered-paywall/kid-metered-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidMeteredPaywall } from './kid-metered-paywall'

describe('KidMeteredPaywall', () => {
  it('Render root component', async () => {
    const { root } = await newSpecPage({
      components: [KidMeteredPaywall],
      html: `<kid-metered-paywall></kid-metered-paywall>`,
    })

    expect(root).toEqualHtml(`
        <kid-metered-paywall>
        <mock:shadow-root>
            <div class="bottom-0 h-full sticky w-full"></div>
        </mock:shadow-root>
     </kid-metered-paywall>
     `)
  })
})
