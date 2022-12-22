/**
 * individual test:
 * npm run test.spec -- src/components/kompas-grace-period/kompas-grace-period.spec.ts
 */
import {
  newSpecPage
} from '@stencil/core/testing'
import {
  KompasGracePeriod
} from './kompas-grace-period'

beforeAll(() => {
  Object.defineProperty(window, 'dataLayer', {
      value: {
          push: jest.fn(),
      },
  })
  jest.spyOn(window.dataLayer, 'push').mockImplementation(() => jest.fn())
})

describe('KompasGracePeriod', () => {
  it('Render root component', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period></kompas-grace-period>`,
      })

      expect(root).toEqualHtml(`
      <kompas-grace-period>
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full"></div>
        </mock:shadow-root>
      </kompas-grace-period>
    `)
  })

  it('should render kompas grace period with 7 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=1></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="1">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               7 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
  it('should render kompas grace period with 6 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=2></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="2">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               6 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
  it('should render kompas grace period with 5 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=3></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="3">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               5 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
  it('should render kompas grace period with 4 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=4></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="4">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               4 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
  it('should render kompas grace period with 3 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=5></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="5">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               3 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
  it('should render kompas grace period with 2 days subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=6></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="6">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
               Masa tenggang langganan Anda tersisa
               <b class="text-orange-500">
               2 hari lagi
               </b>
               . Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })

  it('should render kompas grace period with last day subscription left', async () => {
      const {
          root
      } = await newSpecPage({
          components: [KompasGracePeriod],
          html: `<kompas-grace-period total-grace-period=7></kompas-grace-period>`,
      })
      expect(root).toEqualHtml(`
      <kompas-grace-period total-grace-period="7">
      <mock:shadow-root>
      <div class="bottom-0 h-full sticky w-full">
      <div class="bg-orange-100 bottom-0 flex flex-col justify-end lg:px-20 md:flex-row md:space-x-4 px-4 py-4 w-full">
         <div class="md:text-base self-center text-grey-600 text-left text-sm">
            <p>
            Anda dalam
               <b class="text-orange-500">
               hari terakhir
               </b>
               masa tenggang langganan. Segera perbarui paket langganan untuk tetap mengakses konten premium tanpa batas.
            </p>
         </div>
         <div class="flex justify-end md:pt-0 md:w-1/2 pt-4 self-center w-full">
            <button class="bg-green-500 font-bold md:text-base md:w-auto p-2 px-5 rounded-md text-grey-100 text-sm w-full">
            Perbarui Langganan
            </button>
         </div>
      </div>
   `)
  })
})