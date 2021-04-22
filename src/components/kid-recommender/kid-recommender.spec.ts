/**
 * individual test:
 * npm run test.spec -- src/components/kid-recommender/kid-recommender.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidRecommender } from './kid-recommender'

describe('KidRecommender', () => {
  it('component without props is rendered and throws an error', async () => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: `<kid-recommender></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-recommender>
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })

  it('component without auth-key prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: `<kid-recommender auth-key="" post-tags="was,wes,wos" post-title="judul artikel" post-url="https://test.tld" utm="ini_utm"></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-recommender auth-key="" post-tags="was,wes,wos" post-title="judul artikel" post-url="https://test.tld" utm="ini_utm">
        <mock:shadow-root>
          <div class="container">
            <div class="error">
              <h3 class="error--label">Galat</h3>
              <p class="error--text">Nilai auth-key diperlukan</p>
            </div>
          </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })
})
