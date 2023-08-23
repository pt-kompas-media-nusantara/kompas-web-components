import { newE2EPage } from '@stencil/core/testing';

describe('kompas-metered-register', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-metered-register></kompas-metered-register>');

    const element = await page.find('kompas-metered-register');
    expect(element).toHaveClass('hydrated');
  });
});
