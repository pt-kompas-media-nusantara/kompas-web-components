/**
 * individual test:
 * npm run test.spec -- src/components/kid-paywall/kid-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidPaywall2 } from './kid-paywall-2'

describe('KidRecommender', () => {
  it('component without props is rendered and throws an error', async () => {
    const { root } = await newSpecPage({
      components: [KidPaywall2],
      html: `<kid-paywall-2></kid-paywall-2>`
    })

    expect(root).toEqualHtml(`
      <kid-paywall-2>
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-paywall-2>
    `)
  })

  it('component without auth-key prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidPaywall2],
      html: `<kid-recommender is-login="true"></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-paywall-2 is-login="true">
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-paywall-2>
    `)
  })
})
