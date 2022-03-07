import { newE2EPage } from '@stencil/core/testing';

describe('kompas-header-account-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-header-account-menu></kompas-header-account-menu>');

    const element = await page.find('kompas-header-account-menu');
    expect(element).toHaveClass('hydrated');
  });
});
