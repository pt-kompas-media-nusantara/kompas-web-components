import { newSpecPage } from '@stencil/core/testing';
import { KompasMeteredRegister } from './kompas-metered-register';

describe('kompas-metered-register', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KompasMeteredRegister],
      html: `<kompas-metered-register></kompas-metered-register>`,
    });
    expect(page.root).toEqualHtml(`
      <kompas-metered-register>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kompas-metered-register>
    `);
  });
});
