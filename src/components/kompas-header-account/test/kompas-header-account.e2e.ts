import { newE2EPage } from '@stencil/core/testing';

describe('kompas-header-account', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-header-account></kompas-header-account>');

    const element = await page.find('kompas-header-account');
    expect(element).toHaveClass('hydrated');
  });
});
