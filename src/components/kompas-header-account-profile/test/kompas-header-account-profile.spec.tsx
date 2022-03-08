import { newSpecPage } from '@stencil/core/testing';
import { KompasHeaderAccountProfile } from '../kompas-header-account-profile';

describe('kompas-header-account-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KompasHeaderAccountProfile],
      html: `<kompas-header-account-profile></kompas-header-account-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-header-account-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kompas-header-account-profile>
    `);
  });
});
