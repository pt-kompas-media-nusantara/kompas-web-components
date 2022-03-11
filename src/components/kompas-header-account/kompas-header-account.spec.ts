jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-down.svg', () => ({ chevronDown:'' }))
jest.mock('../../../assets/fontawesome-free-5.15.3-web/svgs/solid/chevron-up.svg', () => ({ chevronUp:'' }))
jest.mock('../../../assets/icons/crown-royal-blue-60.svg', () => ({ royalBlueCrownIcon:'' }))

import { newSpecPage } from '@stencil/core/testing';
import { KompasHeaderAccount } from './kompas-header-account';

describe('kompas-header-account', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KompasHeaderAccount],
      html: `<kompas-header-account></kompas-header-account>`,
    });
    expect(root).toEqualHtml(`
      <kompas-header-account>
        <mock:shadow-root>
          <div>
            <a class="cursor-pointer">
              <div class="flex flex-row items-center self-center">
                <div class="animate-pulse bg-grey-300 h-6 rounded-full w-6"></div>
                <div class="icon-sm icon-white ml-3"></div>
              </div>
            </a>
         </div>
        </mock:shadow-root>
      </kompas-header-account>
    `);
  });
});
 