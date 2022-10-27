/**
 * individual test:
 * npm run test.spec -- src/components/kompas-paywall-video/kompas-paywall-video.spec.ts
 */

import { newSpecPage } from '@stencil/core/testing'
import { KompasPaywallVideo } from './kompas-paywall-video'

describe('Kompas Paywall Video', () => {
    it('Render default root component', async () => {
        const { root } = await newSpecPage({
            components: [KompasPaywallVideo],
            html: `<kompas-paywall-video></kompas-paywall-video>`,
        })

        expect(root).toEqualHtml(`
            <kompas-paywall-video>
                <mock:shadow-root>
                    <div class="radius absolute z-20 bg-black bg-opacity-50 p-4 top-0 bottom-0 flex flex-col w-full h-full justify-center items-center">
                        <h5 class="leading-6 text-white text-center text-base md:text-xl max-w-xl">
                        Langganan untuk akses ke seluruh konten premium, mulai dari <span class="font-bold">Rp50.000/bulan.</span>
                        </h5>
                        <div class="flex justify-between mt-4 space-x-3">
                            <a href="https://account.kompas.id/login" target="_blank" class="rounded text-sm text-white px-4 py-1.5 ring-1 ring-grey-100">
                                Masuk
                            </a>
                            <a href="https://www.kompas.id/berlangganan/" target="_blank" class="bg-green-500 rounded px-4 py-1.5 text-sm text-white font-bold">
                                Berlangganan
                            </a>
                        </div>
                        <p class="text-center text-sm leading-4 text-white mt-6 max-w-xs md:max-w-none">
                        Dapatkan 5 konten premium gratis tiap bulan! <a href="https://account.kompas.id/register?" target="_blank" class="text-blue-300 font-bold">Coba Sekarang</a>
                        </p>
                    </div>
                </mock:shadow-root>
            </kompas-paywall-video>
        `)
    })

    it('Render default root component when isLogin is true', async () => {
        const { root } = await newSpecPage({
            components: [KompasPaywallVideo],
            html: `<kompas-paywall-video is-login='true'></kompas-paywall-video>`,
        })

        expect(root).toEqualHtml(`
            <kompas-paywall-video is-login='true'>
                <mock:shadow-root>
                    <div class="radius absolute z-20 bg-black bg-opacity-50 p-4 top-0 bottom-0 flex flex-col w-full h-full justify-center items-center">
                        <h5 class="leading-6 text-white text-center text-base md:text-xl max-w-2xl">
                            Akses konten premium Anda bulan ini sudah habis. Aktifkan langganan untuk akses tanpa batas, mulai dari <span class="font-bold">Rp50.000/bulan.</span>
                        </h5>
                        <div class="flex justify-between mt-4 space-x-3">
                            <a href="https://www.kompas.id/berlangganan/" target="_blank" class="bg-green-500 rounded px-4 py-1.5 text-sm text-white font-bold">
                                Berlangganan
                            </a>
                        </div>
                    </div>
                </mock:shadow-root>
            </kompas-paywall-video>
        `)
    })
})
