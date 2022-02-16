import { newSpecPage } from '@stencil/core/testing';
import { KompasHeaderAccount } from '../kompas-header-account';

describe('kompas-header-account', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KompasHeaderAccount],
      html: `<kompas-header-account></kompas-header-account>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-header-account>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kompas-header-account>
    `);
  });
});
