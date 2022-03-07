import { newSpecPage } from '@stencil/core/testing';
import { KompasHeaderAccountHelpCenter } from '../kompas-header-account-help-center';

describe('kompas-header-account-help-center', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KompasHeaderAccountHelpCenter],
      html: `<kompas-header-account-help-center></kompas-header-account-help-center>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-header-account-help-center>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kompas-header-account-help-center>
    `);
  });
});
