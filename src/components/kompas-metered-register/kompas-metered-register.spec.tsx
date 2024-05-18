jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg', () => ({ chevronDown: '' }));
jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg', () => ({ chevronUp: '' }));

import { newSpecPage } from '@stencil/core/testing';
import { KompasMeteredRegister } from './kompas-metered-register';

// Mock Fetch
function mockFetchWithResponse(responseStatus, responseData) {
  globalThis.fetch = jest.fn().mockResolvedValue({
    status: responseStatus,
    json: async () => responseData,
  });
}

// Mock Success Fetch
function mockFecthWithSuccessfulResponse() {
  mockFetchWithResponse(200, {
    expand: {
      lastArticle: {
        title: '<span>Anda Sedang Membaca <b>Artikel Premium Gratis Terakhir</b> dari Kompas.id</span>',
        description: '<span>Ayo daftar akun untuk akses ke beragam artikel dan fitur premium. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.</span>',
      },
      title: '<b>Tertarik dengan Artikel Ini? Daftar untuk Akses Artikel Menarik Lainnya</b>',
      description: '<span>Dapatkan akses ke beragam konten dan fitur premium Kompas.id. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.</span>',
    },
    default: {
      lastArticle: {
        title: '<span>Ini Adalah <b>Artikel Gratis Terakhir</b> Anda. <b>Daftar Akun untuk Terus Membaca.</b></span>',
      },
      title: '<b>Dukung jurnalisme berkualitas dengan mendaftar akun Kompas.id.</b>',
    },
    ctaUrl: 'https://checkoutv2.kompas.id/kdp?productId=9802032&coupon=6f21f128-6e8c-45dc-8e57-98ad7593af1d&referrer=artikel_metered_wall_guest_6mei_meiriah',
    ctaText: 'Gunakan Promo',
  });
}

beforeAll(() => {
  Object.defineProperty(window, 'dataLayer', {
    value: {
      push: jest.fn(),
    },
  });
  jest.spyOn(window.dataLayer, 'push').mockImplementation(() => jest.fn());
});

describe('kompas-metered-register', () => {
  // countdown-article = 0 or nothing passed
  it('should renders nothing', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register>
        <mock:shadow-root>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });

  let originalLocation: Location;
  let page: any;
  let component: any;

  beforeAll(() => {
    originalLocation = window.location;
  });

  beforeEach(async () => {
    page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register></kompas-metered-register>`,
    });
    component = page.rootInstance;

    // Mock window.location
    delete window.location;
    (window as any).location = {
      href: 'http://example.com?referrer=value',
      assign: jest.fn(),
    };
    // Mock this.textTemplate
    component.textTemplate = {
      ctaUrl: 'http://ctaurl.com',
    };
    // Mock properties
    component.registerUrl = encodeURIComponent('http://registerurl.com');
    component.next_param = encodeURIComponent('http://nextparam.com');
    component.textTemplate = {
      default: {
        prop1: 'default value',
        lastArticle: {
          prop1: 'last article value'
        }
      },
      custom: {
        prop1: 'custom value',
        lastArticle: {
          prop1: 'custom last article value'
        }
      }
    };

    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://current-url.com?param=value',
        search: '?param=value'
      },
      writable: true
    });
  });

  afterAll(() => {
    window.location = originalLocation;
  });
  

  // countdown-article = 1
  it('should renders content for last article quota', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article=1></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register countdown-article="1">
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="flex flex-col-reverse gap-4 justify-center md:flex-row md:gap-8">
                      <div class="flex flex-col gap-4 justify-evenly md:gap-2 md:text-left md:w-5/12 text-center">
                        <p class="font-lora md:text-2xl text-lg">
                          <span>
                            Anda Sedang Membaca
                            <b>
                              Artikel Premium Gratis Terakhir
                            </b>
                            dari Kompas.id
                          </span>
                        </p>
                        <p class="md:text-base text-sm">
                          <span>
                            Ayo daftar akun untuk akses ke beragam artikel dan fitur premium. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.
                          </span>
                        </p>
                        <div class="md:self-start">
                          <div>
                            <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                              Gunakan Promo
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center md:max-h-[220px] md:max-w-[200px] md:my-auto">
                        <img class="h-40 md:h-full md:w-full w-40" src="https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/paywall_ilustrasi3-03_1.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute right-0 top-0.5">
                  <button class="bg-blue-200 p-2.5 rounded-md">
                    <div class="chevron-down icon icon-blue-600"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });

  // countdown-article = 1 && default-expand-banner = false
  it('should renders content for last article quota on closed mode', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article=1 default-expand-banner=false></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register countdown-article="1" default-expand-banner="false">
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                      <span>
                        Ini Adalah
                        <b>
                          Artikel Gratis Terakhir
                        </b>
                        Anda.
                        <b>
                          Daftar Akun untuk Terus Membaca.
                        </b>
                      </span>
                    </div>
                    <div class="md:self-center">
                      <div>
                        <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                          Gunakan Promo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute right-0 top-0.5">
                  <button class="bg-blue-200 p-2.5 rounded-md">
                    <div class="false icon icon-blue-600"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });

  // countdown-article = 2 ( > 1 )
  it('should renders content for article quota more than one', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article=2></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register countdown-article="2">
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="flex flex-col-reverse gap-4 justify-center md:flex-row md:gap-8">
                      <div class="flex flex-col gap-4 justify-evenly md:gap-2 md:text-left md:w-5/12 text-center">
                        <p class="font-lora md:text-2xl text-lg">
                          <b>
                            Tertarik dengan Artikel Ini? Daftar untuk Akses Artikel Menarik Lainnya
                          </b>
                        </p>
                        <p class="md:text-base text-sm">
                          <span>
                            Dapatkan akses ke beragam konten dan fitur premium Kompas.id. Anda juga mendukung jurnalisme berkualitas dengan mendaftar akun.
                          </span>
                        </p>
                        <div class="md:self-start">
                          <div>
                            <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                              Gunakan Promo
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center md:max-h-[220px] md:max-w-[200px] md:my-auto">
                        <img class="h-40 md:h-full md:w-full w-40" src="https://d3w4qaq4xm1ncv.cloudfront.net/paywall-asset/paywall_ilustrasi3-03_1.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute right-0 top-0.5">
                  <button class="bg-blue-200 p-2.5 rounded-md">
                    <div class="chevron-down icon icon-blue-600"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });

  // countdown-article = 2 ( > 1 ) && default-expand-banner=false
  it('should renders content for article quota more than one on closed mode', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article=2 default-expand-banner=false></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register countdown-article="2" default-expand-banner="false">
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                      <b>
                        Dukung jurnalisme berkualitas dengan mendaftar akun Kompas.id.
                      </b>
                    </div>
                    <div class="md:self-center">
                      <div>
                        <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                          Gunakan Promo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute right-0 top-0.5">
                  <button class="bg-blue-200 p-2.5 rounded-md">
                    <div class="false icon icon-blue-600"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });

  it('should render the "Daftar Akun" button when ctaUrl is empty', async () => {
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
    <kompas-metered-register countdown-article="2" default-expand-banner="false">
      <mock:shadow-root>
        <div class="bottom-0 h-full sticky w-full">
          <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
            <div class="flex justify-center lg:max-w-7xl m-auto relative">
              <div class="flex flex-col">
                <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                  <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                    <b>
                      Dukung jurnalisme berkualitas dengan mendaftar akun Kompas.id.
                    </b>
                  </div>
                  <div class="md:self-center">
                    <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                      Daftar Akun
                    </button>
                  </div>
                </div>
              </div>
              <div class="absolute right-0 top-0.5">
                <button class="bg-blue-200 p-2.5 rounded-md">
                  <div class="false icon icon-blue-600"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </kompas-metered-register>`);
  });

  it('should render "Gunakan Promo" when ctaUrl is not empty', async () => {
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register cta-url="https://example.com" cta-text="Custom Text"></kompas-metered-register>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <kompas-metered-register cta-text="Custom Text" cta-url="https://example.com" countdown-article="2" default-expand-banner="false">
      <mock:shadow-root>
        <div class="bottom-0 h-full sticky w-full">
          <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
            <div class="flex justify-center lg:max-w-7xl m-auto relative">
              <div class="flex flex-col">
                <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                  <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                    <b>
                      Dukung jurnalisme berkualitas dengan mendaftar akun Kompas.id.
                    </b>
                  </div>
                  <div class="md:self-center">
                    <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                      Gunakan Promo
                    </button>
                  </div>
                </div>
              </div>
              <div class="absolute right-0 top-0.5">
                <button class="bg-blue-200 p-2.5 rounded-md">
                  <div class="false icon icon-blue-600"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </kompas-metered-register>`);
  });
  it('should build new URL correctly when no referrer is present', () => {
    const params = new URLSearchParams(window.location.href);
    const result = component.buildNewUrl('http://ctaurl.com', params);

    expect(result.toString()).toBe('http://ctaurl.com/?referrer=http%3A%2F%2Fexample.com%3Ftest%3Dvalue');
  });

  it('should build new URL correctly when referrer is already present', () => {
    const params = new URLSearchParams(window.location.href);
    const result = component.buildNewUrl('http://ctaurl.com?referrer=previousReferrer', params);

    expect(result.toString()).toBe('http://ctaurl.com/?referrer=http%3A%2F%2Fexample.com%3Ftest%3Dvalue,previousReferrer');
  });

  it('should call pushToDataLayer and update window.location.href', () => {
    const pushToDataLayerSpy = jest.spyOn(component, 'pushToDataLayer');
    component.redirectToCTAUrl();

    expect(pushToDataLayerSpy).toHaveBeenCalledWith('mrw_clicked');
    expect(window.location.href).toBe('http://ctaurl.com/?referrer=http%3A%2F%2Fexample.com%3Ftest%3Dvalue');
  });
  it('should create a new URL correctly when next_param is provided', () => {
    const result = component.createRegisterUrl(component.registerUrl, component.next_param);
    expect(result).toBe('http://registerurl.com/?next=http%3A%2F%2Fnextparam.com');
  });

  it('should create a new URL correctly when next_param is not provided', () => {
    const result = component.createRegisterUrl(component.registerUrl);
    expect(result).toBe('http://registerurl.com/');
  });

  it('should call pushToDataLayer and update window.location.href', () => {
    const pushToDataLayerSpy = jest.spyOn(component, 'pushToDataLayer');
    component.redirectToRegister();

    expect(pushToDataLayerSpy).toHaveBeenCalledWith('mrw_clicked');
    expect(window.location.href).toBe('http://registerurl.com/?next=http%3A%2F%2Fnextparam.com');
  });

  describe('triggerExpandBanner', () => {
    it('should toggle isExpandBanner', () => {
      const initialState = component.isExpandBanner;
      component.triggerExpandBanner();
      expect(component.isExpandBanner).toBe(!initialState);
    });

    it('should call bannerState', () => {
      const bannerStateSpy = jest.spyOn(component as any, 'bannerState');
      component.triggerExpandBanner();
      expect(bannerStateSpy).toHaveBeenCalled();
    });
  });

  describe('toggleExpandBanner', () => {
    it('should toggle isExpandBanner', () => {
      const initialState = component.isExpandBanner;
      component.toggleExpandBanner();
      expect(component.isExpandBanner).toBe(!initialState);
    });
  });

  describe('bannerState', () => {
    it('should push "mrw_closed" to data layer when isExpandBanner is false', () => {
      component.isExpandBanner = false;
      const pushToDataLayerSpy = jest.spyOn(component as any, 'pushToDataLayer');
      component.bannerState();
      expect(pushToDataLayerSpy).toHaveBeenCalledWith('mrw_closed');
    });

    it('should not push "mrw_closed" to data layer when isExpandBanner is true', () => {
      component.isExpandBanner = true;
      const pushToDataLayerSpy = jest.spyOn(component as any, 'pushToDataLayer');
      component.bannerState();
      expect(pushToDataLayerSpy).not.toHaveBeenCalled();
    });
  });

  describe('redirectToCTAUrl', () => {
    it('should build a new URL with current search params', () => {
      const buildNewUrlSpy = jest.spyOn(component as any, 'buildNewUrl').mockReturnValue(new URL('https://example.com?param=value'));
      component.redirectToCTAUrl();
      expect(buildNewUrlSpy).toHaveBeenCalledWith('https://example.com', new URLSearchParams('?param=value'));
    });

    it('should log click event', () => {
      const logClickEventSpy = jest.spyOn(component as any, 'logClickEvent');
      component.redirectToCTAUrl();
      expect(logClickEventSpy).toHaveBeenCalled();
    });

    it('should navigate to the new URL', () => {
      const navigateToUrlSpy = jest.spyOn(component as any, 'navigateToUrl');
      component.redirectToCTAUrl();
      expect(navigateToUrlSpy).toHaveBeenCalledWith('https://example.com?param=value');
    });
  });

  describe('getUrlSearchParams', () => {
    it('should return URL search params from the current window location', () => {
      const params = component.getUrlSearchParams();
      expect(params.toString()).toBe('param=value');
    });
  });

  describe('logClickEvent', () => {
    it('should push "mrw_clicked" to data layer', () => {
      const pushToDataLayerSpy = jest.spyOn(component as any, 'pushToDataLayer');
      component.logClickEvent();
      expect(pushToDataLayerSpy).toHaveBeenCalledWith('mrw_clicked');
    });
  });

  describe('navigateToUrl', () => {
    it('should set window.location.href to the new URL', () => {
      const newUrl = 'https://example.com?param=value';
      component.navigateToUrl(newUrl);
      expect(window.location.href).toBe(newUrl);
    });
  });
});
