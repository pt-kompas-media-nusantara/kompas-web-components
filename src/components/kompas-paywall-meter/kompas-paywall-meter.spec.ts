/**
 * individual test:
 * npm run test.spec -- src/components/kompas-paywall-meter/kompas-paywall-meter.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KompasPaywallMeter } from './kompas-paywall-meter'

describe('KompasPaywallMeter', () => {
  it('Render root component', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywallMeter],
      html: `<kompas-paywall-meter></kompas-paywall-meter>`,
    })

    expect(root).toEqualHtml(`
        <kompas-paywall-meter>
        <mock:shadow-root>
        <div class="bottom-0 h-full sticky w-screen">
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
              <a class="bg-green-400 font-bold md:text-xl p-2 rounded-md text-grey-100 text-sm" href="https://www.kompas.id/berlangganan">
                Langganan
              </a>
            </div>
          </div>
        </div>
        </mock:shadow-root>
     </kompas-paywall-meter>
     `)
  })
})
