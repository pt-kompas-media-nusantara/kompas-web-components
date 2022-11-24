/**
 * individual test:
 * npm run test.spec -- src/components/kid-grace-period/kid-grace-period.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidGracePeriod } from './kid-grace-period'

beforeAll(() => {
  Object.defineProperty(window, 'dataLayer', {
    value: {
      push: jest.fn(),
    },
  })
  jest.spyOn(window.dataLayer, 'push').mockImplementation(() => jest.fn())
})

describe('KidGracePeriod', () => {
  it('Render root component', async () => {
    const { root } = await newSpecPage({
      components: [KidGracePeriod],
      html: `<kid-grace-period></kid-grace-period>`,
    })

    expect(root).toEqualHtml(`
         <kid-grace-period>
         <mock:shadow-root>
         <div class="bottom-0 h-full sticky w-full"></div>
         </mock:shadow-root>
         </kid-grace-period>
      `)
  })
})
