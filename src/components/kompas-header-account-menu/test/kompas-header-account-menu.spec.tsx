import { newSpecPage } from '@stencil/core/testing';
import { KompasHeaderAccountMenu } from '../kompas-header-account-menu';

describe('kompas-header-account-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KompasHeaderAccountMenu],
      html: `<kompas-header-account-menu></kompas-header-account-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-header-account-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kompas-header-account-menu>
    `);
  });
});
