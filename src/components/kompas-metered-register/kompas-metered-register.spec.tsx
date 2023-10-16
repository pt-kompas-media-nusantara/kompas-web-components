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

  // countdown-article = 1
  it('should renders content for last article quota', async () => {
    mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article=1></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register countdown-article=1>
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
      <kompas-metered-register countdown-article=2>
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
      </kompas-metered-register>
    `);
  });
});
