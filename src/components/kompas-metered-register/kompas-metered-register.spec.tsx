jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg', () => ({ chevronDown: '' }));
jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg', () => ({ chevronUp: '' }));

import { newSpecPage } from '@stencil/core/testing';
import { KompasMeteredRegister } from './kompas-metered-register';

const responseJson =  {
  "default": {
    "collapse": {
      "lastArticle": {
        "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
      },
      "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
    },
    "expand": {
      "ctaText": "Langganan dengan Google",
      "ctaUrl": "https://pay.google.com/gp/p/ui/pay?swg=true#__WA__=%7B%22requestId%22%3A%22GPAY%22%2C%22returnUrl%22%3A%22https%3A%2F%2Fwww.kompas.id%2Fberlangganan%2F%22%2C%22args%22%3A%7B%22apiVersion%22%3A1%2C%22allowedPaymentMethods%22%3A%5B%22CARD%22%5D%2C%22environment%22%3A%22PRODUCTION%22%2C%22playEnvironment%22%3A%22PROD%22%2C%22swg%22%3A%7B%22skuId%22%3A%22koidwmekmpsalldig001%22%2C%22publicationId%22%3A%22kompas.id%22%7D%2C%22i%22%3A%7B%22startTimeMs%22%3A1724058503352%2C%22googleTransactionId%22%3A%2269E47BED-8E9C-46E4-A044-42CDD0C7EE47.swg%22%2C%22productType%22%3A%22SUBSCRIPTION%22%2C%22disableNative%22%3Atrue%2C%22disableNgbf%22%3Atrue%2C%22redirectVerifier%22%3A%22RS5ZJhDZsvL03WzdXkqtLlpQDQJcel8qAHg2O49TFd%2F8v7FlgiF4gUCJ%2BXJ2tR7C%22%7D%7D%7D",
      "description": "<span>Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang. </span>",
      "imageUrl": "https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi_guest.svg",
      "lastArticle": {
        "description": "<span>Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang. </span>",
        "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
      },
      "title": "<b>Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan</b>"
    }
  },
  "kompascom": {
    "collapse": {
        "lastArticle": {
            "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
        },
        "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
    },
    "expand": {
      "ctaText": "Langganan Lebih Hemat",
      "ctaUrl": "https://checkoutv2.kompas.cloud/kdp?productId=9891169&referrer=https%3A%2F%2Fwww.kompas.cloud%2Fberlangganan&source=subs",
      "description": "<span>Nikmati akses penuh untuk dua platform multimedia berkualitas, Kompas.id dan Kompas.com+. Dengan satu langganan, dapatkan informasi terlengkap, terkini, dan tepercaya hanya Rp55.000 per bulan.</span>",
      "imageUrl": "https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi_kompas_com.svg",
      "lastArticle": {
        "description": "<span>Nikmati akses penuh untuk dua platform multimedia berkualitas, Kompas.id dan Kompas.com+. Dengan satu langganan, dapatkan informasi terlengkap, terkini, dan tepercaya hanya Rp55.000 per bulan.</span>",
        "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
      },
      "title": "<b>Akses Kompas.id Premium & Kompas.com+ dalam Satu Langganan</b>"
    }
  }
}

// Mock Fetch
function mockFetchWithResponse(responseStatus, responseData) {
  globalThis.fetch = jest.fn().mockResolvedValue({
    status: responseStatus,
    json: async () => responseData,
  });
}

// Mock Success Fetch
function mockFecthWithSuccessfulResponse() {
  mockFetchWithResponse(200,responseJson);
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
      <kompas-metered-register countdown-article="1">
        <mock:shadow-root>
          <div class="bottom-0 h-full sticky w-full z-20">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="flex flex-col-reverse gap-4 justify-center md:flex-row md:gap-8">
                      <div class="flex flex-col gap-4 justify-evenly md:gap-2 md:text-left md:w-5/12 text-center">
                        <p class="font-lora md:text-2xl text-lg">
                          <b>
                            Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan
                          </b>
                        </p>
                        <p class="md:text-base text-sm">
                          <span>
                            Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda 
                            yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang.
                          </span>
                        </p>
                        <div class="md:self-start">
                          <div>
                            <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                              Langganan dengan Google
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center md:max-h-[220px] md:max-w-[200px] md:my-auto">
                        <img class="h-40 md:h-full md:w-full w-40" src="https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi3-03_1.png">
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
          <div class="bottom-0 h-full sticky w-full z-20">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                      <b>
                        Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan
                      </b>
                    </div>
                    <div class="md:self-center">
                      <div>
                        <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                          Langganan dengan Google
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
          <div class="bottom-0 h-full sticky w-full z-20">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="flex flex-col-reverse gap-4 justify-center md:flex-row md:gap-8">
                      <div class="flex flex-col gap-4 justify-evenly md:gap-2 md:text-left md:w-5/12 text-center">
                        <p class="font-lora md:text-2xl text-lg">
                          <b>
                            Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan
                          </b>
                        </p>
                        <p class="md:text-base text-sm">
                          <span>
                            Selama 59 tahun, harian Kompas telah memimpin industri jurnalisme dengan karya-karya yang mencerahkan bangsa. Karena itu, Kompas.id adalah pilihan terbaik untuk Anda 
yang ingin memahami dan memaknai perkembangan dunia. Dapatkan akses premium dan nikmati seluruh konten eksklusif kami sekarang.
                          </span>
                        </p>
                        <div class="md:self-start">
                          <div>
                            <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                              Langganan dengan Google
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="flex justify-center md:max-h-[220px] md:max-w-[200px] md:my-auto">
                        <img class="h-40 md:h-full md:w-full w-40" src="https://cdn-www.kompas.id/paywall-asset/paywall_ilustrasi3-03_1.png">
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
          <div class="bottom-0 h-full sticky w-full z-20">
            <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
              <div class="flex justify-center lg:max-w-7xl m-auto relative">
                <div class="flex flex-col">
                  <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                    <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                      <b>
                        Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan
                      </b>
                    </div>
                    <div class="md:self-center">
                      <div>
                        <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                          Langganan dengan Google
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
    const noCtaUrlResponse = { ...responseJson }
    noCtaUrlResponse.default.expand.ctaUrl = '';
    mockFetchWithResponse(200, noCtaUrlResponse);
    // mockFecthWithSuccessfulResponse();
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register countdown-article="2"  default-expand-banner="false"></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
    <kompas-metered-register countdown-article="2" default-expand-banner="false">
      <mock:shadow-root>
        <div class="bottom-0 h-full sticky w-full z-20">
          <div class="bg-blue-100 bottom-0 px-4 py-4 w-full xl:px-0">
            <div class="flex justify-center lg:max-w-7xl m-auto relative">
              <div class="flex flex-col">
                <div class="block gap-8 items-center justify-center lg:flex md:text-lg ml-auto self-center text-grey-600 text-left text-sm">
                  <div class="font-lora mb-3 md:mb-0 md:mt-0 md:px-0 md:text-lg mt-1 pr-14 text-base">
                    <b>
                      Terhubung dengan Dunia Melalui Jurnalisme Mencerahkan
                    </b>
                  </div>
                  <div class="md:self-center">
                    <div>  
                      <button class="bg-green-500 font-bold md:text-base md:w-auto p-1.5 px-5 rounded-md text-grey-100 text-sm w-full">
                        Daftar Akun
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
    </kompas-metered-register>`);
  });
});
