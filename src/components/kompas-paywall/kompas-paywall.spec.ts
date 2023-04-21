/**
 * individual test:
 * npm run test.spec -- src/components/kompas-paywall/kompas-paywall.spec.ts
 */
import { newSpecPage } from '@stencil/core/testing'
import { KompasPaywall } from './kompas-paywall'

describe('Kompas Paywall --default', () => {
  it('Render default root component', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall></kompas-paywall>`,
    })

    expect(root).toEqualHtml(`
      <kompas-paywall>
        <mock:shadow-root>
        <div class="relative w-full">
          <div>
            <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
            <div class="bg-white flex flex-col items-center justify-center md:mx-0 mx-4">
              <div class="flex flex-col max-w-screen-md my-5 w-full">
                <kompas-paywall-banner-registration></kompas-paywall-banner-registration>
                <kompas-paywall-body countdownarticle="0" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="reguler" userguid=""></kompas-paywall-body>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })
})

describe('Kompas Paywall Epaper', () => {
  it('should render kompas paywall epaper when user islogin', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='epaper' is-login='true'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='epaper' is-login='true'>
        <mock:shadow-root>
          <div class="relative w-full">
          <kompas-paywall-body countdownarticle="0" islogin="" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" content_type="" epaper_edition="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="epaper" userguid=""></kompas-paywall-body>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall epaper when user isnotlogin', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='epaper' is-login='false'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='epaper' is-login='false'>
        <mock:shadow-root>
          <div class="relative w-full">
          <kompas-paywall-body countdownarticle="0" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" content_type="" epaper_edition="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="epaper" userguid=""></kompas-paywall-body>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })
})


describe('Kompas Paywall Reguler Paywall', () => {
  it('should render kompas paywall reguler when user is login', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-login='true'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-login='true'>
        <mock:shadow-root>
        <div class="relative w-full">
          <div>
            <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
            <div class="bg-white flex flex-col items-center justify-center md:mx-0 mx-4">
              <div class="flex flex-col max-w-screen-md my-5 w-full">
                <kompas-paywall-banner-registration></kompas-paywall-banner-registration>
                <kompas-paywall-body countdownarticle="0" islogin="" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="reguler" userguid=""></kompas-paywall-body>
              </div>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall reguler when user is not login', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-login='false'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-login='false'>
        <mock:shadow-root>
        <div class="relative w-full">
          <div>
            <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
            <div class="bg-white flex flex-col items-center justify-center md:mx-0 mx-4">
              <div class="flex flex-col max-w-screen-md my-5 w-full">
                <kompas-paywall-banner-registration></kompas-paywall-banner-registration>
                <kompas-paywall-body countdownarticle="0" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="reguler" userguid=""></kompas-paywall-body>
              </div>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall reguler with is-with-header is true and show default text header (quota article is run out) ', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-with-header></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-with-header >
        <mock:shadow-root>
          <div class="relative w-full">
            <div>
              <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
              <div class="bg-white flex flex-col items-center justify-center md:mx-0 mx-4">
                <div class="flex flex-col max-w-screen-md my-5 w-full">
                  <kompas-paywall-information-header text="Akses artikel gratis Anda bulan ini sudah habis."></kompas-paywall-information-header>
                  <kompas-paywall-body countdownarticle="0" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" content_type="" epaper_edition="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="reguler" userguid=""></kompas-paywall-body>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall reguler with is-with-header is true and show text header', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-with-header text-header="Akses artikel gratis Anda bulan ini sudah habis."></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-with-header  text-header="Akses artikel gratis Anda bulan ini sudah habis.">
        <mock:shadow-root>
          <div class="relative w-full">
            <div>
              <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
              <div class="bg-white flex flex-col items-center justify-center md:mx-0 mx-4">
                <div class="flex flex-col max-w-screen-md my-5 w-full">
                  <kompas-paywall-information-header text="Akses artikel gratis Anda bulan ini sudah habis."></kompas-paywall-information-header>
                  <kompas-paywall-body countdownarticle="0" paywall_location="" paywall_position="0" paywall_subscription_id="0" paywall_subscription_package="" paywall_subscription_price="0" subscriptionstatus="" content_category="" content_id="" content_title="" content_type="" epaper_edition="" metered_wall_balance="0" metered_wall_type="" page_domain="" page_type="" subscription_status="" user_type="" type="reguler" userguid=""></kompas-paywall-body>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

})
