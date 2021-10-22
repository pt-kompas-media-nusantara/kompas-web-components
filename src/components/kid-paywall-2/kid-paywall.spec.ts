/**
 * individual test:
 * npm run test.spec -- src/components/kid-paywall/kid-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidPaywall } from './kid-paywall'

describe('KidRecommender', () => {
  it('component without props is rendered and throws an error', async () => {
    const { root } = await newSpecPage({
      components: [KidPaywall],
      html: `<kid-paywall></kid-paywall>`
    })

    expect(root).toEqualHtml(`
      <kid-paywall>
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-paywall>
    `)
  })

  it('component without auth-key prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidPaywall],
      html: `<kid-recommender is-login="true"></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-paywall is-login="true">
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-paywall>
    `)
  })
})
