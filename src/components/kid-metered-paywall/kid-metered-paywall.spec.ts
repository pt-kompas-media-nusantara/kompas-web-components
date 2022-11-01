/**
 * individual test:
 * npm run test.spec -- src/components/kid-metered-paywall/kid-metered-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KidMeteredPaywall } from './kid-metered-paywall'

beforeAll(() => {
  Object.defineProperty(window, "dataLayer", {
    value: {
      push: jest.fn(),
    },
  })
  jest.spyOn(window.dataLayer, 'push').mockImplementation(() => jest.fn())
})

describe('KidMeteredPaywall', () => {
  it('Render root component', async () => {
    const { root } = await newSpecPage({
      components: [KidMeteredPaywall],
      html: `<kid-metered-paywall></kid-metered-paywall>`,
    })

    expect(root).toEqualHtml(`
        <kid-metered-paywall>
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full">
           <div class="bg-blue-100 bottom-0 flex flex-row justify-center lg:px-0 px-4 py-4 space-x-4 w-full">
             <div class="md:text-lg self-center text-grey-600 text-left text-sm">
               <p>
                 Anda sedang membaca
                 <b>
                   artikel gratis terakhir bulan ini.
                 </b>
                 Langganan untuk akses tanpa batas
               </p>
             </div>
             <div class="self-center">
               <button class="bg-green-400 font-bold md:text-xl p-2 rounded-md text-grey-100 text-sm">
                 Langganan
               </button>
             </div>
           </div>
         </div>
        </mock:shadow-root>
     </kid-metered-paywall>
     `)
  })
})
