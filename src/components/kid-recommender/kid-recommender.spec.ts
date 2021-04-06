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
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">Nilai auth-key diperlukan</p>
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
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">Nilai auth-key diperlukan</p>
        </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })

  it('component without post-title prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: `<kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="" post-url="https://test.tld" utm="ini_utm"></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="" post-url="https://test.tld" utm="ini_utm">
        <mock:shadow-root>
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">Nilai post-title diperlukan</p>
        </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })

  it('component without post-url prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: `<kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="judul artikel" post-url="" utm="ini_utm"></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="judul artikel" post-url="" utm="ini_utm">
        <mock:shadow-root>
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">Nilai post-url diperlukan</p>
        </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })

  it('component without utm prop is rendered and throws an error', async() => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: `<kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="judul artikel" post-url="https://test.tld" utm=""></kid-recommender>`
    })

    expect(root).toEqualHtml(`
      <kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="judul artikel" post-url="https://test.tld" utm="">
        <mock:shadow-root>
        <div class="error">
          <h3 class="error--label">Galat</h3>
          <p class="error--text">Nilai utm diperlukan</p>
        </div>
        </mock:shadow-root>
      </kid-recommender>
    `)
  })


  // it('component with all props provided is rendered', async () => {
  //   const { root } = await newSpecPage({
  //     components: [KidRecommender],
  //     html: '<kid-recommender auth-key="ini-kunci" post-tags="was,wes,wos" post-title="judul artikel" post-url="https://test.tld" utm="ini_utm"></kid-recommender>'
  //   })

  //   expect(root).toEqualHtml(`
  //     <kid-recommender>
  //       <mock:shadow-root>
  //         <div class="container--outer">
  //           <a class="container--inner" href="" target="_blank" title="">
  //             <div class="container--inner__headline">
  //               <span class="container--inner__headline-label"></span>
  //               <h2 class="container--inner__headline-title"></h2>
  //             </div>
  //             <div class="container--inner__thumbnail" style="backgroundImage: url()"></div>
  //           </a>
  //         </div>
  //       </mock:shadow-root>
  //     </kid-recommender>
  //   `)
  // })
})
