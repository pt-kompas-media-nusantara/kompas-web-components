/**
 * individual test:
 * npm run test.spec -- src/components/kompas-survey-popup/kompas-survey-popup.spec.ts
 */

jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/check.svg', () => ({ }))

import { newSpecPage } from '@stencil/core/testing'
import { KompasSurveyPopUp } from './kompas-survey-popup'


describe('KompasSurveyPopUp', () => {
  let element
  // let document
  // let documentBody
  let pageRoot
  beforeEach(async () => {
    const { 
      rootInstance,
      // doc,
      // body,
      root
    } = await newSpecPage({
      components: [KompasSurveyPopUp],
      html: '<kompas-survey-popup is-show-pop-up="true" survey-url="https://www.bing.com/"></kompas-survey-popup>'
    })
    element = rootInstance
    // document = doc
    // documentBody = body
    pageRoot = root
  })

  it('throws an error template', () => {
    expect(pageRoot).toEqualHtml(`
      <kompas-survey-popup is-login="true">
        <mock:shadow-root>
          <div class="mb-4 relative w-full">
            <div class="bg-red-200 p-4 rounded w-full">
              <h3 class="font-bold leading-tight mb-2 mt-0 mx-0 text-base">
                Galat
              </h3>
              <p class="my-0 text-base">
                404 Ada galat saat memproses permintaan.
              </p>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-survey-popup>
  ` )
  })
  it('sets is-login to true', () => {
    expect(element.isLogin).toBe(true)
  })
  it('sets to default value', () => {
    expect(element.showMembership).toBe(true)
    expect(element.showRegistration).toBe(true)
    expect(element.gtmLoginMedium).toBeFalsy()
    expect(element.gtmBrandingMedium).toBeFalsy()
    expect(element.gtmPaywallMedium).toBeFalsy()
  })
})

