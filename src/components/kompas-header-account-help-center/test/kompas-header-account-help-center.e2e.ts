import { newE2EPage } from '@stencil/core/testing';

describe('kompas-header-account-help-center', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kompas-header-account-help-center></kompas-header-account-help-center>');

    const element = await page.find('kompas-header-account-help-center');
    expect(element).toHaveClass('hydrated');
  });
});
