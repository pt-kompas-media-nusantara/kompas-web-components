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
           <div class="bottom-0 h-full sticky w-full">
           <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
           <div class="md:text-lg self-center text-grey-600 text-left text-sm"></div>
           <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
           <button class="bg-green-400 font-bold md:text-base md:w-auto p-2 rounded-md text-grey-100 text-sm w-full">
           Perbarui Langganan
                </button>
              </div>
            </div>
          </div>
         </mock:shadow-root>
      </kid-grace-period>
      `)
  })
})
