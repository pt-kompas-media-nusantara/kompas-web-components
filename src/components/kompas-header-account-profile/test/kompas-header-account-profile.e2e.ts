import { newE2EPage } from '@stencil/core/testing';

describe('kompas-header-account-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-header-account-profile></kompas-header-account-profile>');

    const element = await page.find('kompas-header-account-profile');
    expect(element).toHaveClass('hydrated');
  });
});
