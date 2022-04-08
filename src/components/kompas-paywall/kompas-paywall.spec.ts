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
                <kompas-paywall-body type="reguler"></kompas-paywall-body>
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
            <kompas-paywall-body is-login='' type="epaper"></kompas-paywall-body>
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
            <kompas-paywall-body type="epaper"></kompas-paywall-body>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })
})


describe('Kompas Paywall Reguler with Mettered Paywall', () => {
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
                <kompas-paywall-body is-login='' type="reguler"></kompas-paywall-body>
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
                <kompas-paywall-body type="reguler"></kompas-paywall-body>
              </div>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall reguler when user isSubscribe and have quota is between 0 and 5', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-login='true' is-subscribe='true' quota='2'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-login='true' is-subscribe='true' quota='2' >
        <mock:shadow-root>
          <div class="relative w-full">
            <kompas-paywall-meter countdown-article='2'></kompas-paywall-meter>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })

  it('should render kompas paywall reguler when user isSubscribe and have quota is more than 5', async () => {
    const { root } = await newSpecPage({
      components: [KompasPaywall],
      html: `<kompas-paywall type='reguler' is-login='true' is-subscribe='true' quota='7'></kompas-paywall>`,
    })
    expect(root).toEqualHtml(`
      <kompas-paywall type='reguler' is-login='true' is-subscribe='true' quota='7' >
        <mock:shadow-root>
          <div class="relative w-full">
            <div>
              <div class="-mt-24 h-20 transparent-linear w-full z-0"></div>
              <div class="flex flex-col bg-white items-center justify-center mx-4 md:mx-0">
                <div class="flex flex-col w-full max-w-screen-md my-5">
                  <kompas-paywall-information-header content='Akses artikel gratis Anda bulan ini sudah habis.'></kompas-paywall-information-header>
                  <kompas-paywall-body is-login='' type='reguler'></kompas-paywall-body>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-paywall>
     `)
  })
})
