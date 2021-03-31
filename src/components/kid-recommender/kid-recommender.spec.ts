import { newSpecPage } from '@stencil/core/testing'
import { KidRecommender } from './kid-recommender'

describe('KidRecommender', () => {
  it('component is rendered', async () => {
    const { root } = await newSpecPage({
      components: [KidRecommender],
      html: '<kid-recommender></kid-recommender>'
    })

    expect(root).toEqualHtml(`
      <kid-recommender>
        <mock:shadow-root>
          <div class="container--outer">
            <a class="container--inner" href="" target="_blank" title="">
              <div class="container--inner__headline">
                <span class="container--inner__headline-label"></span>
                <h2 class="container--inner__headline-title"></h2>
              </div>
              <div class="container--inner__thumbnail" style="backgroundImage: url()"></div>
            </a>
          </div>
        </mock:shadow-root>
      </kid-recommender>
    `);
  })

  // it('renders with values', async () => {
  //   const { root } = await newSpecPage({
  //     components: [MyComponent],
  //     html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
  //   });
  //   expect(root).toEqualHtml(`
  //     <my-component first="Stencil" last="'Don't call me a framework' JS">
  //       <mock:shadow-root>
  //         <div>
  //           Hello, World! I'm Stencil 'Don't call me a framework' JS
  //         </div>
  //       </mock:shadow-root>
  //     </my-component>
  //   `);
  // });
})
